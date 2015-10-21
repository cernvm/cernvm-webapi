/**
 * This file is part of CernVM Web API Plugin.
 *
 * CVMWebAPI is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * CVMWebAPI is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with CVMWebAPI. If not, see <http://www.gnu.org/licenses/>.
 *
 * Developed by Ioannis Charalampidis 2013
 * Contact: <ioannis.charalampidis[at]cern.ch>
 */

// Everything is included in daemon.h
// (Including cross-referencing)
#include "daemon.h"
#include "utilities.h"

#include <vector>

#include <json/json.h>

#include <CernVM/Hypervisor.h>
#include <CernVM/ProgressFeedback.h>
#include <CernVM/Threads.h>

/**
 * Cleanup before destuction
 */
void DaemonConnection::cleanup() {
    CRASH_REPORT_BEGIN;

    // Abort user interaction
    userInteraction->abort(true);

    // Abort and join all threads
	threads::interrupt_all(runningThreads);
    {
        DrainWaitLock lock(threadDrain); // Wait until nobody is playing with the runningThreads
		threads::join_all(runningThreads);
    }

    // If an installation was initiated by this session, it was just
    // aborted. Clear the installation flag
    if (installInProgress) {
        installInProgress = false;
        core.installInProgress = false;
    }

    // Release all sessions by this connection
    core.releaseConnectionSessions( *this );
    
    CRASH_REPORT_END;
}

/**
 * Handle incoming websocket action
 */
void DaemonConnection::handleAction( const std::string& id, const std::string& action, ParameterMapPtr parameters ) {
    CRASH_REPORT_BEGIN;
    Json::Value data;

    // Useful information for crash reporting
    crashReportAddInfo( "domain", domain );
    crashReportAddInfo( "web-action", action );

    // This is a critical section for runningThreadsMute
    DrainUseLock lock(threadDrain);

    // =============================
    //  Common actions
    // =============================

    // [Handshake] 
    //  Sent right after the connection is established
	if (action == "handshake") {

		// Reply the server information
		data["version"] = CERNVM_WEBAPI_VERSION;
		reply(id, data);

		// Check if we are privileged
		if (parameters->contains("auth")) {
			privileged = core.authKeyValid( parameters->get("auth") );
		}

        // Let UI know about it's priviledges
        sendEvent("privileged", ArgumentList(privileged));

    }

    // [Interation Callback] 
    //  Sent as a response to a user-interaction request
    else if (action == "interactionCallback") {

        // Fire result callback
        if (parameters->contains("result")) {
            interactionCallback( parameters->getNum<int>("result") );
        } else {
            sendError("Missing 'result' parameter", id);
        }

    }

    // =============================
    //  Session management
    // =============================

    // [Request Session] 
    //  A request to contact the specified VMCP and initialize the
    //  CernVM WebAPI Session.
	else if (action == "requestSession") {

        // Schedule the new session request on a new thread
        if (parameters->contains("vmcp")) {

            // Create the object where we can forward the events
            CVMCallbackFw cb( *this, id );

            // Block requests when reached throttled state
            if (this->throttleBlock) {
                cb.fire("failed", ArgumentList( "Request denied by throttle protection" )( HVE_ACCESS_DENIED ) );
                return;
            }

            // Re-check hypervisor if it's missing
            core.syncHypervisorReflection();

            // Check if a hypervisor is installed. If not,
            // use the installer thread.
            if (core.hypervisor && (core.hypervisor->version.compareStr(CERNVM_WEBAPI_MIN_HV_VERSION) <= 0)) {

                // Try to open session
                std::thread* t = NULL;
                t = new std::thread( std::bind( &DaemonConnection::requestSession_thread, this, &t, id, parameters->get("vmcp") ) );
				runningThreads.push_back(threads::make_interruptible(t));

            } else {

                // If we are already installing, warn the user
                if (core.installInProgress) {
                    cb.fire("failed", ArgumentList( "A hypervisor installation is in progress please wait until it's finished and try again." )( HVE_USAGE_ERROR ));
                    return;
                }

                // Mark installation in progress
                core.installInProgress = true;
                installInProgress = true;

                // Try to install first and then open session
                std::thread* t = NULL;
                t = new std::thread( std::bind( &DaemonConnection::installHV_andRequestSession_thread, this, &t, id, parameters->get("vmcp") ) );
				runningThreads.push_back(threads::make_interruptible(t));

            }

        } else {
            sendError("Missing 'vmcp' parameter", id);
        }

    }

    // [Session commands]
    //  If there is a 'session_id' parameter in the request,
    //  forward the command to the appropriate action
    else if (parameters->contains("session_id")) {

        // Lookup session pointer
        int session_id = parameters->getNum<int>("session_id");
        parameters->erase("session_id");

        if (core.sessions.find(session_id) == core.sessions.end()) {
            sendError("Unable to find a session with the specified session id!", id);
        } else {
            // Handle session action in another thread
            std::thread* t = NULL;
            t = new std::thread( std::bind( &DaemonConnection::handleAction_thread, this, &t, core.sessions[session_id], id, action, parameters ) );
			runningThreads.push_back(threads::make_interruptible(t));
        }

    }

    // =============================
    //  Power-user commands
    // =============================

    else if (privileged) {

        // [Stop] 
        //  Shut down the CernVM WebAPI Daemon.
        if ( action == "stopService" ) {

            // Mark core for forced shutdown
            core.running = false;
        }

        // [Enumerate Session] 
        //  List the running sessions.
        else if (action == "enumSessions") {

            Json::Value sessions;
            HVInstancePtr hv = core.hypervisor;

            // Enumerate sessions
            for (std::map< std::string, HVSessionPtr >::iterator it = hv->sessions.begin(); it != hv->sessions.end(); ++it) {
                Json::Value session;

                // Keep session information
                session["uuid"] = (*it).first;
                session["config"] = sessionStateInfoToJSON((*it).second);

                // Store on session object
                sessions.append(session);

            }

            data["sessions"] = sessions;
            reply(id, data);

        }

        // [Control Session] 
        //  Control an active session sessions.
        else if (action == "controlSession") {

            // Check for missing parameters
            if (!parameters->contains("session")) {
                sendError("Missing 'session' parameter", id);
                return;
            }
            if (!parameters->contains("action")) {
                sendError("Missing 'action' parameter", id);
                return;
            }

            // Try to find this on the hypervisor sessions

        }

    }

    CRASH_REPORT_END;
}

/**
 * Send confirm interaction event
 */
void DaemonConnection::__callbackConfim (const std::string& title, const std::string& body, const callbackResult& cb) {
    CRASH_REPORT_BEGIN;
    sendEvent("interact", ArgumentList("confirm")(title)(body));
    interactionCallback = cb;
    CRASH_REPORT_END;
}

/**
 * Send alert interaction event
 */
void DaemonConnection::__callbackAlert (const std::string& title, const std::string& body, const callbackResult& cb) {
    CRASH_REPORT_BEGIN;
    sendEvent("interact", ArgumentList("alert")(title)(body));
    interactionCallback = cb;
    CRASH_REPORT_END;
}

/**
 * Send license interaction event
 */
void DaemonConnection::__callbackLicense (const std::string& title, const std::string& body, const callbackResult& cb) {
    CRASH_REPORT_BEGIN;
    sendEvent("interact", ArgumentList("confirmLicense")(title)(body));
    interactionCallback = cb;
    CRASH_REPORT_END;
}

/**
 * Send license by URL interaction event
 */
void DaemonConnection::__callbackLicenseURL (const std::string& title, const std::string& url, const callbackResult& cb) {
    CRASH_REPORT_BEGIN;
    sendEvent("interact", ArgumentList("confirmLicenseURL")(title)(url));
    interactionCallback = cb;
    CRASH_REPORT_END;
}

/**
 * [Thread] Handle action for the given session in another thread
 */
void DaemonConnection::handleAction_thread( std::thread** thread, CVMWebAPISession* session, const std::string& eventID, const std::string& action, ParameterMapPtr parameters ) {
    CRASH_REPORT_BEGIN;
    std::thread *thisThread = *thread;
    CVMCallbackFw cb( *this, eventID );
    DrainUseLock lock(threadDrain);

    // Handle action
    session->handleAction(cb, action, parameters);
    // Remove this thread from the active threads
    threads::remove_one(runningThreads, thisThread);

    CRASH_REPORT_END;
}

/**
 * [Thread] Install hypervisor first, request session later
 */
void DaemonConnection::installHV_andRequestSession_thread( std::thread ** thread, const std::string& eventID, const std::string& vmcpURL ) {
    CRASH_REPORT_BEGIN;
    DrainUseLock lock(threadDrain);

    std::thread *thisThread = *thread;
    CVMWA_LOG("Debug", "installHV_andRequestSession_thread: " << thisThread);

    // Create a progress feedback
    CVMCallbackFw cb( *this, eventID );
    FiniteTaskPtr pTasks = std::make_shared<FiniteTask>();
    cb.listen( pTasks );

    // Pick a message to prompt
    std::string pTitle = "Hypervisor required";
    std::string pMessage = "For this website to work you must have a hypervisor installed in your system. Would you like us to install VirtualBox for you?";
    if (core.hypervisor && core.hypervisor->version.compareStr(CERNVM_WEBAPI_MIN_HV_VERSION) > 0) {
        pTitle = "Hypervisor too old";
        pMessage = "It seems that your current VirtualBox installation (version " + core.hypervisor->version.verString + ") is too old and not properly supported by the CernVM WebAPI. Would you like us to install the latest version for you?";
    }

    // Prompt the user first
    if (userInteraction->confirm(pTitle, pMessage) != UI_OK) {
        cb.fire("failed", ArgumentList( "You must have a hypervisor installed in your system to continue." )( HVE_USAGE_ERROR ));
        threads::remove_one(runningThreads, thisThread);
        core.installInProgress = false;
        installInProgress = false;

        // Check if user navigated away with the 
        // interaction prompt in place
        if (userInteraction->aborted)
            userInteraction->abortHandled();

        return;
    }

    // Install hypervisor
    int ans = installHypervisor(
                core.downloadProvider,
                core.keystore,
                userInteraction,
                pTasks,
                2
            );

    // Check if user navigated away with the 
    // interaction prompt in place
    if (userInteraction->aborted) {
        threads::remove_one(runningThreads, thisThread);
        core.installInProgress = false;
        installInProgress = false;
        userInteraction->abortHandled();
        return;
    }

    // Check for error cases
    if (ans != HVE_OK) {
        if ((ans == HVE_NOT_VALIDATED) || (ans == HVE_NOT_TRUSTED)) {
            cb.fire("failed", ArgumentList( "Integrity validation of the hypervisor configuration failed. Please try again later." )( HVE_USAGE_ERROR ));
        } else {
            cb.fire("failed", ArgumentList( "We were unable to install a hypervisor in your system. Please try again manually." )( HVE_USAGE_ERROR ));
        }
        threads::remove_one(runningThreads, thisThread);
        core.installInProgress = false;
        installInProgress = false;
        return;
    }

    // Try to detecy hypervisor again
    core.hypervisor = detectHypervisor();

    // Was the installation successful? Start requestSession thread
    if (core.hypervisor) {
            
        // Load stored sessions
        core.hypervisor->loadSessions();

        // Request session in the same thread
        core.installInProgress = false;
        installInProgress = false;
        this->requestSession_thread( &thisThread, eventID, vmcpURL );

        // (Thread will be removed from the pool from within the requestSession)
        return;

    } else {
        cb.fire("failed", ArgumentList( "The hypervisor isntallation completed but we were not able to detect it! Please try again later or try to re-install it manually." )( HVE_USAGE_ERROR ));
        threads::remove_one(runningThreads, thisThread);
        core.installInProgress = false;
        installInProgress = false;
        return;
    }

    CRASH_REPORT_END;
}

/**
 * [Thread] Request Session
 */
void DaemonConnection::requestSession_thread( std::thread ** thread, const std::string& eventID, const std::string& vmcpURL ) {
	CRASH_REPORT_BEGIN;
    Json::Value data;
	HVInstancePtr hv = core.hypervisor;
    std::thread *thisThread = *thread;
    int res;

    // We are in a critical section, so nobody should touch threadsMutex
    DrainUseLock lock(threadDrain);

    // Create the object where we can forward the events
    CVMCallbackFw cb( *this, eventID );
    CVMWA_LOG("Debug", "requestSession_thread: " << thisThread);

    // Block requests when reached throttled state
    if (this->throttleBlock) {
        cb.fire("failed", ArgumentList( "Request denied by throttle protection" )( HVE_ACCESS_DENIED ) );
        threads::remove_one(runningThreads, thisThread);
        return;
    }

    try {

        // Create a progress feedback mechanism
        FiniteTaskPtr pTasks = std::make_shared<FiniteTask>();
        pTasks->setMax( 2 );
        cb.listen( pTasks );

        // Create two sub-tasks that will be used for equally
        // dividing the progress into two tasks: validate and start
        FiniteTaskPtr pInit = pTasks->begin<FiniteTask>( "Preparing for session request" );
        pInit->setMax( 4 );

        // =======================================================================

        // Wait for delaied hypervisor initiation
        hv->waitTillReady( core.keystore, pInit->begin<FiniteTask>( "Initializing hypervisor" ), userInteraction );

        // Check if user navigated away with the 
        // interaction prompt in place
        if (userInteraction->aborted) {
            threads::remove_one(runningThreads, thisThread);
            userInteraction->abortHandled();
            return;
        }

        // =======================================================================

        // Try to update authorized keystore if it's in an invalid state
        pInit->doing("Initializing crypto store");
    
        // Trigger update in the keystore (if it's nessecary)
        res = core.keystore.updateAuthorizedKeystore( core.downloadProvider );

        // Still invalid? Something's wrong
        if (!core.keystore.valid) {
            cb.fire("failed", ArgumentList( "Unable to initialize cryptographic store" )( HVE_NOT_VALIDATED ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }

        // Block requests from untrusted domains
        if (!core.keystore.isDomainValid(domain)) {
            cb.fire("failed", ArgumentList( "The domain is not trusted" )( HVE_NOT_TRUSTED ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }
        
        pInit->done("Crypto store initialized");
    
        // =======================================================================

        // Validate arguments
        pInit->doing("Contacting the VMCP endpoint");
    
        // Put salt and user-specific ID in the URL
        std::string salt = core.keystore.generateSalt();
        std::string glueChar = "&";
        if (vmcpURL.find("?") == std::string::npos) glueChar = "?";
        std::string newURL = 
            vmcpURL + glueChar + 
            "cvm_salt=" + salt + "&" +
            "cvm_hostid=" + core.calculateHostID( domain );
    
        // Download data from URL
        std::string jsonString;
        res = core.downloadProvider->downloadText( newURL, &jsonString );
        if (res < 0) {
            cb.fire("failed", ArgumentList( "Unable to contact the VMCP endpoint" )( res ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }

        pInit->doing("Validating VMCP data");

        // Try to parse the data
        Json::Value jsonData;
        Json::Reader jsonReader;
        try {
            bool parsingSuccessful = jsonReader.parse( jsonString, jsonData );
            if ( !parsingSuccessful ) {
                // report to the user the failure and their locations in the document.
                cb.fire("failed", ArgumentList( "Unable to parse response data as JSON" )( HVE_QUERY_ERROR ) );
                threads::remove_one(runningThreads, thisThread);
                return;
            }
        } catch (std::exception& e) {
            CVMWA_LOG("Error", "JSON Parse exception " << e.what());
            cb.fire("failed", ArgumentList( "Unable to parse response data as JSON" )( HVE_QUERY_ERROR ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }
    
        // Import response to a ParameterMap
        ParameterMapPtr vmcpData = ParameterMap::instance();
        CVMWA_LOG("Debug", "Parsing into data");
        vmcpData->fromJSON(jsonData);

        // Validate response
        if (!vmcpData->contains("name")) {
            cb.fire("failed", ArgumentList( "Missing 'name' parameter from the VMCP response" )( HVE_USAGE_ERROR ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        };
        if (!vmcpData->contains("secret")) {
            cb.fire("failed", ArgumentList( "Missing 'secret' parameter from the VMCP response" )( HVE_USAGE_ERROR ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        };
        if (!vmcpData->contains("signature")) {
            cb.fire("failed", ArgumentList( "Missing 'signature' parameter from the VMCP response" )( HVE_USAGE_ERROR ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        };
        if (vmcpData->contains("diskURL") && !vmcpData->contains("diskChecksum")) {
            cb.fire("failed", ArgumentList( "A 'diskURL' was specified, but no 'diskChecksum' was found in the VMCP response" )( HVE_USAGE_ERROR ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }

        // Validate signature
        res = core.keystore.signatureValidate( domain, salt, vmcpData );
        if (res < 0) {
            cb.fire("failed", ArgumentList( "The VMCP response signature could not be validated" )( res ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }

        CVMWA_LOG("Debug", "Signature valid");

        pInit->done("Obtained information from VMCP endpoint");

        // =======================================================================

        CVMWA_LOG("Debug", "Validating session");
    
        // Check session state
        res = hv->sessionValidate( vmcpData );
        if (res == 2) { 
            // Invalid password
            cb.fire("failed", ArgumentList( "The password specified is invalid for this session" )( HVE_PASSWORD_DENIED ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }

        // =======================================================================

        CVMWA_LOG("Debug", "Validating request");
    
        /* Check if the session is new and prompt the user */
        pInit->doing("Validating request");
        if (res == 0) {
            pInit->doing("Session is new, asking user for confirmation");

            // Newline-specific split
            std::string msg = "The website " + domain + " is trying to allocate a " + core.get_hv_name() + " Virtual Machine \"" + vmcpData->get("name") + "\". This website is validated and trusted by CernVM." _EOL _EOL "Do you want to continue?";

            // Prompt user using the currently active userInteraction 
            if (userInteraction->confirm("New CernVM WebAPI Session", msg) != UI_OK) {

                // Check if user navigated away with the 
                // interaction prompt in place
                if (userInteraction->aborted) {
                    threads::remove_one(runningThreads, thisThread);
                    userInteraction->abortHandled();
                    return;
                }

                // Manage throttling 
                if ((getMillis() - this->throttleTimestamp) <= THROTTLE_TIMESPAN) {
                    if (++this->throttleDenies >= THROTTLE_TRIES)
                        this->throttleBlock = true;
                } else {
                    this->throttleDenies = 1;
                    this->throttleTimestamp = getMillis();
                }

                // Fire error
                cb.fire("failed", ArgumentList( "User denied the allocation of new session" )( HVE_ACCESS_DENIED ) );
                threads::remove_one(runningThreads, thisThread);
                return;
                
            } else {
                
                // Reset throttle
                this->throttleDenies = 0;
                this->throttleTimestamp = 0;
                
            }
        
        }
        pInit->done("Request validated");

        CVMWA_LOG("Debug", "Open session");

        // =======================================================================

        // Prepare a progress task that will be used by sessionOpen    
        FiniteTaskPtr pOpen = pTasks->begin<FiniteTask>( "Open session" );

        // Open/resume session
        HVSessionPtr session = hv->sessionOpen( vmcpData, pOpen );
        if (!session) {
            cb.fire("failed", ArgumentList( "Unable to open session" )( HVE_ACCESS_DENIED ) );
            threads::remove_one(runningThreads, thisThread);
            return;
        }

        // Wait until session FSM has routet itself accordingly
        session->wait();

        // We have everything. Prepare CVMWebAPI Session and fire success
        pTasks->complete( "Session open successfully" );

        // Check if we need a daemon for our current services
        hv->checkDaemonNeed();
        
        // Register session on store
        CVMWebAPISession* cvmSession = core.storeSession( *this, session );

        // Completed
        cb.fire("succeed", ArgumentList("Session open successfully")(cvmSession->uuid));

        // Send state variables
        cvmSession->sendStateVariables();

        // Send state changed message
        sendEvent("stateChanged", ArgumentList(session->local->getNum<int>("state", 0)), cvmSession->uuid_str);

        // Enable periodic jobs thread after stateChanged is sent
        // (This ensures that apiStateChanged is fired AFTER stateChanged event is sent)
        cvmSession->enablePeriodicJobs(true);

    } catch (...) {

        CVMWA_LOG("Error", "Exception occured!");

        // Raise failure
        cb.fire("failed", ArgumentList( "Unexpected exception occured while requesting session" )( HVE_EXTERNAL_ERROR ) );

    }

    threads::remove_one(runningThreads, thisThread);

    CRASH_REPORT_END;
}

