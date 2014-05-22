
/**
 * WebAPI Socket handler
 */
_NS_.WebAPIPlugin = function() {

	// Superclass constructor
	_NS_.Socket.call(this);
}

/**
 * Subclass event dispatcher
 */
_NS_.WebAPIPlugin.prototype = Object.create( _NS_.Socket.prototype );

/**
 * Stop the CernVM WebAPI Service
 */
_NS_.WebAPIPlugin.prototype.stopService = function() {
	this.send("stopService");
}

/**
 * Open a session and call the cbOk when ready
 */
_NS_.WebAPIPlugin.prototype.requestSession = function(vmcp, cbOk, cbFail) {
	var self = this;

	// Send requestSession
	this.send("requestSession", {
		"vmcp": vmcp
	}, {

		// Basic responses
		onSucceed : function( msg, session_id ) {

			// Create a new session object
			var session = new _NS_.WebAPISession( self, session_id, function() {
				
				// Fire the ok callback only when we are initialized
				if (cbOk) cbOk(session);

			});

			// Receive events with id=session_id
			self.responseCallbacks[session_id] = function(data) {
				session.handleEvent(data);
			}

		},
		onFailed: function( msg, code ) {

			console.error("Failed to request session! "+msg);

			// Fire the failed callback
			if (cbFail) cbFail(msg, code);

		},

		// Progress feedbacks
		onProgress: function( msg, percent ) {
			self.__fire("progress", [msg, percent]);
		},
		onStarted: function( msg ) {
			self.__fire("started", [msg]);
		},
		onCompleted: function( msg ) {
			self.__fire("completed", [msg]);
		}

	});


};