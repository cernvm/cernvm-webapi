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

#pragma once
#ifndef DAEMON_CONNECTION_H
#define DAEMON_CONNECTION_H

#include "daemon.h"

#include <CernVM/Config.h>
#include <CernVM/UserInteraction.h>
#include <CernVM/Callbacks.h>
#include <CernVM/CrashReport.h>

//#include <boost/make_shared.hpp>
//#include <boost/bind.hpp>
//#include <boost/thread.hpp>
#include <memory>
#include <functional>
#include <thread>

#include <utilities.h>

/**
 * Websocket Session
 */
class DaemonConnection : public WebsocketAPI {
public:

	/**
	 * Constructor
	 */
	DaemonConnection( const std::string& domain, const std::string uri, DaemonCore& core )
		: WebsocketAPI(domain, uri), core(core), privileged(false), userInteraction(), interactionCallback(), threadDrain(), installInProgress(false)
	{
	    CRASH_REPORT_BEGIN;
		using namespace std::placeholders;

		// Prepare user interaction
		userInteraction = std::make_shared<UserInteraction>();
		userInteraction->setConfirmHandler(std::bind(&DaemonConnection::__callbackConfim, this, _1, _2, _3));
		userInteraction->setAlertHandler(std::bind(&DaemonConnection::__callbackAlert, this, _1, _2, _3));
		userInteraction->setLicenseHandler(std::bind(&DaemonConnection::__callbackLicense, this, _1, _2, _3));
		userInteraction->setLicenseURLHandler(std::bind(&DaemonConnection::__callbackLicenseURL, this, _1, _2, _3));

		// Reset throttling parameters
	    throttleTimestamp = 0;
	    throttleDenies = 0;
	    throttleBlock = false;

	    CRASH_REPORT_END;
	};

	/**
	 * Cleanup before destruction
	 */
	virtual void cleanup();

protected:

	/**
	 * API actino handler
	 */
	virtual void handleAction( const std::string& id, const std::string& action, ParameterMapPtr parameters );

	/**
	 * The daemon core instance
	 */
	DaemonCore&	core;

	/**
	 * The User interaction class
	 */
	UserInteractionPtr	userInteraction;

	/**
	 * Bookkeeping of running threads (for clean shutdown)
	 */
	std::vector<std::thread *> runningThreads;

	/**
	 * The drain assistance semaphore (declared in utilities.h)
	 */
	DrainSemaphore 		threadDrain;

	/**
	 * A flag that defines if this session is authenticated
	 * for privileged operations
	 */
	bool 	privileged;

	/**
	 * Flag that denotes that an installation was started
	 * by this session.
	 */
	bool 	installInProgress;

    // Throttling protection
    long	throttleTimestamp;
    int 	throttleDenies;
    bool 	throttleBlock;

private:

	/**
	 * Callbacks from userInteraction -> to WebSocket
	 */
	void __callbackConfim		(const std::string&, const std::string&, const callbackResult& cb);
	void __callbackAlert		(const std::string&, const std::string&, const callbackResult& cb);
	void __callbackLicense		(const std::string&, const std::string&, const callbackResult& cb);
	void __callbackLicenseURL	(const std::string&, const std::string&, const callbackResult& cb);

	/**
	 * The user interaction callback where we should forward the responses
	 * from the WebSocket -> to userInteraction
	 */
	callbackResult interactionCallback;

	/**
	 * RequestSession Thread
	 */
	void requestSession_thread 					( std::thread** t, const std::string& eventID, const std::string& vmcpURL );
	void installHV_andRequestSession_thread 	( std::thread ** thread, const std::string& eventID, const std::string& vmcpURL );
	void handleAction_thread 					( std::thread** t, CVMWebAPISession* session, const std::string& id, const std::string& action, ParameterMapPtr parameters );

};

#endif /* end of include guard: DAEMON_CONNECTION_H */