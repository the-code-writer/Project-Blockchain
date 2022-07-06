//==============================================================================
// Vaida_2.1.2.19_Release
// www.unionplatform.com
// Release Date: 9-April-2016
// (c) Copyright USER1 Subsystems Corporation
//==============================================================================

(function (globalObject) {
//==============================================================================
// PACKAGE MANAGEMENT
//==============================================================================

// JSDOC helpers

    /** @namespace
     @name net
     @private */
    /** @namespace
     @name com.socket24
     @private */
    /** @namespace
     @name com.socket24.events
     @private */
    /** @namespace
     @name com.socket24.logger
     @private */
    /** @namespace
     @name com.socket24
     */
    /** @namespace
     @name com.socket24.utilities
     */

// create utils package
    if (typeof globalObject.com == "undefined") {
        globalObject.com = {};
    }
    var com = globalObject.com;
    com.socket24 = com.socket24 ? com.socket24 : {};
    com.socket24.utilities = com.socket24.utilities ? com.socket24.utilities : {};

//  Convenience method to create packages
    /** @function */
    com.socket24.utilities.createPackage = function (packageName) {
        var parts = packageName.split(".");
        var part = globalObject;

        for (var i = 0; i < parts.length; i++) {
            part = part[parts[i]] === undefined ? (part[parts[i]] = {}) : part[parts[i]];
        }
    };
//==============================================================================
// PACKAGE DECLARATIONS
//==============================================================================
    com.socket24.utilities.createPackage("com.socket24.logger");
    com.socket24.utilities.createPackage("com.socket24.events");
    com.socket24.utilities.createPackage("com.socket24");
    com.socket24.utilities.createPackage("com.socket24.filters");
    com.socket24.utilities.createPackage("com.socket24.snapshot");
    com.socket24.utilities.createPackage("com.socket24eventName");
    com.socket24.utilities.createPackage("com.socket24.utilities");
    /** @function */
    com.socket24.utilities.extend = function (subclass, superclass) {
        function superclassConstructor () {};
        superclassConstructor.prototype = superclass.prototype;
        subclass.superclass = superclass.prototype;
        subclass.prototype = new superclassConstructor();
        subclass.prototype.constructor = subclass;
    };
//==============================================================================
// ABSTRACT ERROR FUNCTION
//==============================================================================

// JSDOC helpers

    /** @private */
    com.socket24.utilities.abstractError = function () {
        throw new Error("Could not invoke abstract method. This method must be implemented by a subclass.");
    };
//==============================================================================
// CONNECTION REFUSAL REASON CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.ConnectionRefusalReason = new Object();
    /** @constant */
    com.socket24.ConnectionRefusalReason.BANNED = "BANNED";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.ConnectionRefusal = function (reason,
                                               description) {
        /**
         * @field
         */
        this.bannedAt = NaN;
        /**
         * @field
         */
        this.banDuration = NaN;
        /**
         * @field
         */
        this.banReason = null;
        /**
         * @field
         */
        this.reason = reason;
        /**
         * @field
         */
        this.description = description;

        var banDetails;
        switch (reason) {
            case com.socket24.ConnectionRefusalReason.BANNED:
                banDetails = description.split(com.socket24.Tokens.RS);
                this.bannedAt = parseFloat(banDetails[0]);
                this.banDuration = parseFloat(banDetails[1]);
                this.banReason = banDetails[2];
                break;
        }
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.VersionNumber = function (major, minor, revision, build) {
        this.major    = major;
        this.minor    = minor;
        this.revision = revision;
        this.build    = build == undefined ? -1 : build;
    };

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.VersionNumber.prototype.fromVersionString = function (value) {
        var upcVersionParts = value.split(".");
        this.major    = upcVersionParts[0];
        this.minor    = upcVersionParts[1];
        this.revision = upcVersionParts[2];
        this.build    = upcVersionParts.length == 4 ? upcVersionParts[4] : -1;
    }

    com.socket24.VersionNumber.prototype.toStringVerbose = function () {
        var versionString = this.major + "." + this.minor + "." + this.revision
            + ((this.build == -1) ? "" : " (Build " + this.build + ")");
        return versionString;
    }

    com.socket24.VersionNumber.prototype.toString = function () {
        var versionString = this.major + "." + this.minor + "." + this.revision
            + ((this.build == -1) ? "" : "." + this.build);
        return versionString;
    }
//==============================================================================
// PRODUCT CONSTANTS
//==============================================================================
    /** @class
     @private */
    com.socket24.Product = new Object();

    /** @private */
    com.socket24.Product.clientType     = "Vaida";
    com.socket24.Product.clientVersion  = new com.socket24.VersionNumber(1,0,0,0);
    com.socket24.Product.upcVersion     = new com.socket24.VersionNumber(1,0,0);
//==============================================================================
// A COLLECTION OF OBJECT UTILITIES
//==============================================================================
    /** @class */
    com.socket24.utilities.ObjectUtil = new Object();

    com.socket24.utilities.ObjectUtil.combine = function () {
        var source = arguments.length == 1 ? arguments[0] : arguments;
        var master = new Object();

        var object;
        for (var i = 0; i < source.length; i++) {
            object = source[i];
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    master[key] = object[key];
                }
            }
        }
        return master;
    };

    com.socket24.utilities.ObjectUtil.length = function (object) {
        var len = 0;
        for (var p in object) {
            len++;
        }
        return len;
    };

//==============================================================================
// A COLLECTION OF ARRAY UTILITIES
//==============================================================================
    /** @class */
    com.socket24.utilities.ArrayUtil = new Object();

    com.socket24.utilities.ArrayUtil.indexOf = function (arr, obj) {
        
        if (arr.indexOf ) {
            return arr.indexOf(obj);
        }

        for (var i = arr.length; --i >= 0; ) {
            if (arr[i] === obj) {
                return i;
            }
        }

        return -1;

    };

    com.socket24.utilities.ArrayUtil.remove = function (array, item) {
        var itemIndex;

        if (item == null) {
            return false;
        } else {
            itemIndex = com.socket24.utilities.ArrayUtil.indexOf(array, item);
            if (itemIndex == -1) {
                return false;
            } else {
                array.splice(itemIndex, 1);
                return true;
            }
        }
    };

    com.socket24.utilities.ArrayUtil.isArray = function (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class A minimal in-memory storage map to mirror LocalData's persistent map. */
    com.socket24.utilities.MemoryStore = function () {
        this.clear();
    };

    com.socket24.utilities.MemoryStore.prototype.write = function (record, field, value) {
        if (typeof this.data[record] === "undefined") {
            this.data[record] = new Object();
        }
        this.data[record][field] = value
    };

    com.socket24.utilities.MemoryStore.prototype.read = function (record, field) {
        if (typeof this.data[record] !== "undefined"
            && typeof this.data[record][field] !== "undefined") {
            return this.data[record][field];
        } else {
            return null;
        }
    };

    com.socket24.utilities.MemoryStore.prototype.remove = function (record, field) {
        if (typeof this.data[record] !== "undefined") {
            delete this.data[record][field];
        }
    };

    com.socket24.utilities.MemoryStore.prototype.clear = function () {
        this.data = new Object();
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     * A minimal version of the browser localStorage object,
     * for use in environments without native localStorage support.
     * Provides in-memory storage only, with no persistence.
     */
    com.socket24.utilities.LocalStorage = function () {
        this.data = new com.socket24.utilities.MemoryStore();
    };

    com.socket24.utilities.LocalStorage.prototype.setItem = function (key, value) {
        this.data.write("localStorage", key, value);
    };

    com.socket24.utilities.LocalStorage.prototype.getItem = function (key) {
        return this.data.read("localStorage", key);
    };

    com.socket24.utilities.LocalStorage.prototype.removeItem = function (key) {
        this.data.remove("localStorage", key);
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class*/
    com.socket24.utilities.LocalData = new Object();

    if (typeof localStorage === "undefined") {
        com.socket24.utilities.LocalData.data = new com.socket24.utilities.LocalStorage();
    } else {
        com.socket24.utilities.LocalData.data = localStorage;
    }

    com.socket24.utilities.LocalData.write = function (record, field, value) {
        // localStorage can't store objects, so combine record and field for keys
        com.socket24.utilities.LocalData.data.setItem(record+field, value);
    };

    com.socket24.utilities.LocalData.read = function (record, field) {
        var value = com.socket24.utilities.LocalData.data.getItem(record+field);
        return value == null ? null : value;
    };

    com.socket24.utilities.LocalData.remove = function (record, field) {
        var value = com.socket24.utilities.LocalData.data.getItem(record+field);
        if (value != null) {
            this.data.removeItem(record+field);
        }
    };
//==============================================================================
// MESSAGE CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.Messages = new Object();
    /** @constant */
    com.socket24.Messages.CLIENT_HEARTBEAT = "CLIENT_HEARTBEAT";
//==============================================================================
// RECEIVE MESSAGE BROADCAST TYPE CONSTANTS
//==============================================================================
    /** @class
     @private */
    com.socket24.ReceiveMessageBroadcastType = new Object();
    com.socket24.ReceiveMessageBroadcastType.TO_SERVER  = "0";
    com.socket24.ReceiveMessageBroadcastType.TO_ROOMS   = "1";
    com.socket24.ReceiveMessageBroadcastType.TO_CLIENTS = "2";
//==============================================================================
// ROOM ID PARSING UTILITIES
//==============================================================================
    /** @class */
    com.socket24.RoomIDParser = new Object();

    com.socket24.RoomIDParser.getSimpleRoomID = function (fullRoomID) {
        if (fullRoomID.indexOf(".") == -1) {
            return fullRoomID;
        } else {
            return fullRoomID.slice(fullRoomID.lastIndexOf(".")+1);
        }
    };

    com.socket24.RoomIDParser.getQualifier = function (fullRoomID) {
        if (fullRoomID.indexOf(".") == -1) {
            return "";
        } else {
            return fullRoomID.slice(0, fullRoomID.lastIndexOf("."));
        }
    };

    com.socket24.RoomIDParser.splitID = function (fullRoomID) {
        return [getQualifier(fullRoomID), getSimpleRoomID(fullRoomID)];
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.utilities.UDictionary = function () {
    };
//==============================================================================
// TOKEN CONSTANTS
//==============================================================================
    /** @class
     @private */
    com.socket24.Tokens = new Object();

    /** @private */
    com.socket24.Tokens.RS = "|";
    /** @private */
    com.socket24.Tokens.WILDCARD = "*";
    /** @private */
    com.socket24.Tokens.GLOBAL_ATTR = "";
    /** @private */
    com.socket24.Tokens.CUSTOM_CLASS_ATTR = "_CLASS";
    /** @private */
    com.socket24.Tokens.MAX_CLIENTS_ATTR = "_MAX_CLIENTS";
    /** @private */
    com.socket24.Tokens.REMOVE_ON_EMPTY_ATTR = "_DIE_ON_EMPTY";
    /** @private */
    com.socket24.Tokens.PASSWORD_ATTR = "_PASSWORD";
    /** @private */
    com.socket24.Tokens.ROLES_ATTR = "_ROLES";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.System = function (window) {
        this.window = window;
        this.clientType     = com.socket24.Product.clientType;
        this.clientVersion  = com.socket24.Product.clientVersion;
        this.upcVersion     = com.socket24.Product.upcVersion;
    }

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.System.prototype.getClientType = function () {
        return this.clientType;
    }

    /** @returns com.socket24.VersionNumber */
    com.socket24.System.prototype.getClientVersion = function () {
        return this.clientVersion;
    }

    /** @returns com.socket24.VersionNumber */
    com.socket24.System.prototype.getUPCVersion = function () {
        return this.upcVersion;
    }

    /** @returns Boolean */
    com.socket24.System.prototype.isJavaScriptCompatible = function () {
        // Assume non-browser environments can do cross-origin XMLHttpRequests
        if (this.window == null && typeof XMLHttpRequest != "undefined") {
            return true;
        }

        if (this.window != null) {
            // Standards-based browsers that support cross-origin requests
            if (typeof XMLHttpRequest != "undefined"
                && typeof new XMLHttpRequest().withCredentials != "undefined") {
                return true;
            }

            // Versions of IE that support proprietary cross-origin requests
            if (typeof XDomainRequest != "undefined"
                && this.window.location.protocol != "file:") {
                return true;
            }

            // Browsers that can communicate between windows
            if (this.window.postMessage != null) {
                return true;
            }
        }

        // This environment has no way to connect to Union Server
        return false;
    }

    /**
     * <p>
     * Returns true if the host environment supports direct cross-origin HTTP
     * requests using CORS (see: <a href="http://www.w3.org/TR/cors/">http://www.w3.org/TR/cors/</a>).
     * When hasHTTPDirectConnection() returns true, then Vaida can safely use
     * the HTTPDirectConnection class to communicate with Union Server over HTTP. When
     * hasHTTPDirectConnection() returns false, Vaida cannot use
     * HTTPDirectConnection, and must instead use the HTTPIFrameConnection class to
     * communicate with Union Server over HTTP.
     * </p>
     *
     * <p>
     * Note that Vaida applications that use Vaida's connect() or setServer()
     * methods to connect to Union Server do not need to perform a capabilities check
     * via hasHTTPDirectConnection(). The connect() and setServer() methods check
     * the host environment's capabilities automatically, and choose the appropriate
     * connection type for the environment. The hasHTTPDirectConnection() method is
     * required in one situation only: when the application explicitly wishes to
     * communicate over HTTP without trying a WebSocket connection first.
     * </p>
     *
     * @returns Boolean
     *
     * @see com.socket24.HTTPDirectConnection
     * @see com.socket24.HTTPIFrameConnection
     * @see com.socket24.Vaida#connect
     * @see com.socket24.Vaida#setServer
     **/
    com.socket24.System.prototype.hasHTTPDirectConnection = function() {
        // -If XHR has a "withCredentials" flag then CORS is supported.
        // -In IE, if XDomainRequest is available, and the file wasn't loaded
        //    locally, then CORS is supported
        // -In non-browser environments, assume cross-origin XMLHttpRequests are allowed
        if ((typeof XMLHttpRequest != "undefined" && typeof new XMLHttpRequest().withCredentials != "undefined")
            || (typeof XDomainRequest != "undefined" && this.window != null && this.window.location.protocol != "file:")
            || (this.window == null && typeof XMLHttpRequest != "undefined")) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * <p>
     * Returns true if the host environment supports WebSocket connections.
     * When hasWebSocket() returns true, then Vaida can safely use
     * the WebSocketConnection class to communicate with Union Server over a
     * persistent TCP/IP socket. When hasWebSocket() returns false, Vaida cannot use
     * WebSocketConnection, and must instead use HTTP communications (via either the
     * HTTPDirectConnection class or the HTTPIFrameConnection class).
     * </p>
     *
     * <p>
     * Note that Vaida applications that use Vaida's connect() or setServer()
     * methods to connect to Union Server do not need to perform a capabilities check
     * via hasWebSocket(). The connect() and setServer() methods check
     * the host environment's capabilities automatically, and choose the appropriate
     * connection type for the environment. The hasWebSocket() method is
     * required in one situation only: when the application explicitly wishes to
     * determine whether WebSocket is supported for the purpose of application flow
     * or user feedback.
     * </p>
     *
     * @returns Boolean
     *
     * @see com.socket24.WebSocketConnection
     * @see com.socket24.Vaida#connect
     **/
    com.socket24.System.prototype.hasWebSocket = function() {
        return (typeof WebSocket !== "undefined" || typeof MozWebSocket !== "undefined");
    }

    com.socket24.System.prototype.toString = function () {
        return "[object System]";
    }
//==============================================================================
// A COLLECTION OF NUMERIC FORMATTING FUNCTIONS
//==============================================================================
    /** @class */
    com.socket24.utilities.NumericFormatter = new Object();

    com.socket24.utilities.NumericFormatter.dateToLocalHrMinSec = function (date) {
        var timeString = com.socket24.utilities.NumericFormatter.addLeadingZero(date.getHours()) + ":"
            + com.socket24.utilities.NumericFormatter.addLeadingZero(date.getMinutes()) + ":"
            + com.socket24.utilities.NumericFormatter.addLeadingZero(date.getSeconds());
        return timeString;
    }

    com.socket24.utilities.NumericFormatter.dateToLocalHrMinSecMs = function (date) {
        return com.socket24.utilities.NumericFormatter.dateToLocalHrMinSec(date) + "." + com.socket24.utilities.NumericFormatter.addTrailingZeros(date.getMilliseconds());
    }

    com.socket24.utilities.NumericFormatter.addLeadingZero = function (n) {
        return ((n>9)?"":"0")+n;
    }

    com.socket24.utilities.NumericFormatter.addTrailingZeros = function (n) {
        var ns = n.toString();

        if (ns.length == 1) {
            return ns + "00";
        } else if (ns.length == 2) {
            return ns + "0";
        } else {
            return ns;
        }
    }

    com.socket24.utilities.NumericFormatter.msToElapsedDayHrMinSec = function (ms) {
        var sec = Math.floor(ms/1000);

        var min = Math.floor(sec/60);
        sec = sec % 60;
        var timeString = com.socket24.utilities.NumericFormatter.addLeadingZero(sec);

        var hr = Math.floor(min/60);
        min = min % 60;
        timeString = com.socket24.utilities.NumericFormatter.addLeadingZero(min) + ":" + timeString;

        var day = Math.floor(hr/24);
        hr = hr % 24;
        timeString = com.socket24.utilities.NumericFormatter.addLeadingZero(hr) + ":" + timeString;

        if (day > 0) {
            timeString = day + "d " + timeString;
        }

        return timeString;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.events.EventListener = function (listener,
                                                  thisArg,
                                                  priority) {
        this.listener   = listener;
        this.thisArg    = thisArg;
        this.priority   = priority;
    };

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.events.EventListener.prototype.getListenerFunction = function () {
        return this.listener;
    };

    com.socket24.events.EventListener.prototype.getThisArg = function () {
        return this.thisArg;
    };

    com.socket24.events.EventListener.prototype.getPriority = function () {
        return this.priority;
    };

    com.socket24.events.EventListener.prototype.toString = function () {
        return "[object EventListener]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.events.EventDispatcher = function (target) {
        this.listeners = new Object();

        if (typeof target !== "undefined") {
            this.target = target;
        } else {
            this.target = this;
        }
    };

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * Registers a function or method to be invoked when the specified event type
     * occurs.
     *
     * @param type The string name of the event (for example, "READY")
     * @param listener A reference to the function or method to invoke.
     * @param thisArg A reference to the object on which the listener will be invoked
     *                (i.e., the value of "this" within the listener's function body).
     * @param priority An integer indicating the listener's priority. Listeners with
     *                 higher priority are invoked before listeners with lower priority.
     *                 Listeners with equal priority are invoked in the order they were
     *                 added. Listener priority defaults to 0.
     * @return {Boolean} true if the listener was added; false if the listener was
     *                        already registered for the event.
     *
     * @example
     * <pre>
     * // Invoke readyListener() on 'this' when READY occurs:
     * vaida.addEventListener(com.socket24.VaidaEvent.READY, readyListener, this);
     * </pre>
     */
    com.socket24.events.EventDispatcher.prototype.addEventListener = function (type,
                                                                               listener,
                                                                               thisArg,
                                                                               priority) {
        if (typeof this.listeners[type] === "undefined") {
            this.listeners[type] = new Array();
        }
        var listenerArray = this.listeners[type];

        if (this.hasListener(type, listener, thisArg)) {
            return false;
        }
        priority = priority || 0;

        var newListener = new com.socket24.events.EventListener(listener,
            thisArg,
            priority);
        var added = false;
        var thisListener;
        for (var i = listenerArray.length; --i >= 0;) {
            thisListener = listenerArray[i];
            if (priority <= thisListener.getPriority()) {
                listenerArray.splice(i+1, 0, newListener);
                added = true;
                break;
            }
        }
        if (!added) {
            listenerArray.unshift(newListener);
        }
        return true;
    };

    com.socket24.events.EventDispatcher.prototype.removeEventListener = function (type,
                                                                                  listener,
                                                                                  thisArg) {
        var listenerArray = this.listeners[type];
        if (typeof listenerArray === "undefined") {
            return false;
        }

        var foundListener = false;
        for (var i = 0; i < listenerArray.length; i++) {
            if (listenerArray[i].getListenerFunction() === listener
                && listenerArray[i].getThisArg() === thisArg) {
                foundListener = true;
                listenerArray.splice(i, 1);
                break;
            }
        }

        if (listenerArray.length == 0) {
            delete this.listeners[type];
        }

        return foundListener;
    };

    com.socket24.events.EventDispatcher.prototype.hasListener = function (type,
                                                                          listener,
                                                                          thisArg) {
        var listenerArray = this.listeners[type];
        if (typeof listenerArray === "undefined") {
            return false;
        }

        for (var i = 0; i < listenerArray.length; i++) {
            if (listenerArray[i].getListenerFunction() === listener
                && listenerArray[i].getThisArg() === thisArg) {
                return true;
            }
        }
        return false;
    };

    com.socket24.events.EventDispatcher.prototype.getListeners = function (type) {
        return this.listeners[type];
    };

    com.socket24.events.EventDispatcher.prototype.dispatchEvent = function (event) {
        var listenerArray = this.listeners[event.type];
        if (typeof listenerArray === "undefined") {
            return;
        }
        if (typeof event.type === "undefined") {
            throw new Error("Event dispatch failed. No event name specified by " + event);
        }
        event.target = this.target;
        var numListeners = listenerArray.length;
        for (var i = 0; i < numListeners; i++) {
            listenerArray[i].getListenerFunction().apply(listenerArray[i].getThisArg(), [event]);
        }
    };

//==============================================================================
// TOSTRING
//==============================================================================

    com.socket24.events.EventDispatcher.prototype.toString = function () {
        return "[object EventDispatcher]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.events.Event = function (type) {
        if (type !== undefined) {
            this.type = type;
        } else {
            throw new Error("Event creation failed. No type specified. Event: " + this);
        }
        this.target = null;
    };

    com.socket24.events.Event.prototype.toString = function () {
        return "[object Event]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The ConsoleLogger class outputs Vaida's log to the host environment's console,
     if a console is available.

     */
    com.socket24.logger.ConsoleLogger = function (log) {
        this.log = log;
        this.log.addEventListener(com.socket24.logger.LogEvent.UPDATE, this.updateListener, this);
        // Print all messages already in the log
        var history = this.log.getHistory();
        for (var i = 0; i < history.length; i++) {
            this.out(history[i]);
        }
    };

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /** @private */
    com.socket24.logger.ConsoleLogger.prototype.updateListener = function (e) {
        var timeStamp = e.getTimeStamp();
        var level = e.getLevel();
        var bufferSpace = (level == com.socket24.logger.Logger.INFO
            || level == com.socket24.logger.Logger.WARN) ? " " : "";

        this.out(timeStamp + (timeStamp == "" ? "" : " ")
            + e.getLevel() + ": " + bufferSpace + e.getMessage());
    };

    /** @private */
    com.socket24.logger.ConsoleLogger.prototype.out = function (value) {
        if (typeof console === "undefined" || typeof console.log === "undefined") {
            return;
        }
        console.log(value);
    };

    /** @private */
    com.socket24.logger.ConsoleLogger.prototype.dispose = function () {
        this.log.removeEventListener(com.socket24.logger.LogEvent.UPDATE, this.updateListener, this);
        this.log = log = null;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.logger.LogEvent = function (type, message, level, timeStamp) {
        com.socket24.events.Event.call(this, type);

        this.message = message;
        this.level = level;
        this.timeStamp = timeStamp;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.logger.LogEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    /** @constant */
    com.socket24.logger.LogEvent.UPDATE = "UPDATE";
    /** @constant */
    com.socket24.logger.LogEvent.LEVEL_CHANGE = "LEVEL_CHANGE";

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.logger.LogEvent.prototype.getMessage = function () {
        return this.message;
    };

    com.socket24.logger.LogEvent.prototype.getLevel = function () {
        return this.level;
    };

    com.socket24.logger.LogEvent.prototype.getTimeStamp = function () {
        return this.timeStamp;
    };

    com.socket24.logger.LogEvent.prototype.toString = function () {
        return "[object LogEvent]";
    };

//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The Logger class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.logger.LogEvent.LEVEL_CHANGE}</li>
     <li class="fixedFont">{@link com.socket24.logger.LogEvent.UPDATE}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.


     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.logger.Logger = function (historyLength) {
        // Invoke superclass constructor
        com.socket24.events.EventDispatcher.call(this);

        // Instance variables
        this.suppressionTerms = new Array();
        this.timeStampEnabled = false;
        this.logLevel = 0;
        this.messages = new Array();
        this.historyLength = 0;

        // Initialization
        this.setHistoryLength(historyLength == null ? 100 : historyLength);
        this.enableTimeStamp();
        this.setLevel(com.socket24.logger.Logger.INFO);
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.logger.Logger, com.socket24.events.EventDispatcher);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    /** @constant */
    com.socket24.logger.Logger.FATAL = "FATAL";
    /** @constant */
    com.socket24.logger.Logger.ERROR = "ERROR";
    /** @constant */
    com.socket24.logger.Logger.WARN  = "WARN";
    /** @constant */
    com.socket24.logger.Logger.INFO  = "INFO";
    /** @constant */
    com.socket24.logger.Logger.DEBUG = "DEBUG";
    com.socket24.logger.Logger.logLevels = new Array(com.socket24.logger.Logger.FATAL,
        com.socket24.logger.Logger.ERROR,
        com.socket24.logger.Logger.WARN,
        com.socket24.logger.Logger.INFO,
        com.socket24.logger.Logger.DEBUG);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.logger.Logger.prototype.setLevel = function (level) {
        if (level !== undefined) {
            for (var i = 0; i < com.socket24.logger.Logger.logLevels.length; i++) {
                if (com.socket24.logger.Logger.logLevels[i].toLowerCase() == level.toLowerCase()) {
                    this.logLevel = i;
                    this.dispatchEvent(new com.socket24.logger.LogEvent(com.socket24.logger.LogEvent.LEVEL_CHANGE, null, level));
                    return;
                }
            }
        }

        this.warn("Invalid log level specified: " + level);
    };

    com.socket24.logger.Logger.prototype.getLevel = function () {
        return com.socket24.logger.Logger.logLevels[this.logLevel];
    };

    com.socket24.logger.Logger.prototype.fatal = function (msg) {
        this.addEntry(0, com.socket24.logger.Logger.FATAL, msg);
    };

    com.socket24.logger.Logger.prototype.error = function (msg) {
        this.addEntry(1, com.socket24.logger.Logger.ERROR, msg);
    };

    com.socket24.logger.Logger.prototype.warn = function (msg) {
        this.addEntry(2, com.socket24.logger.Logger.WARN, msg);
    };

    com.socket24.logger.Logger.prototype.info = function (msg) {
        this.addEntry(3, com.socket24.logger.Logger.INFO, msg);
    };

    com.socket24.logger.Logger.prototype.debug = function (msg) {
        this.addEntry(4, com.socket24.logger.Logger.DEBUG, msg);
    };

    com.socket24.logger.Logger.prototype.addSuppressionTerm = function (term) {
        this.debug("Added suppression term. Log messages containing '"
            + term + "' will now be ignored.");
        this.suppressionTerms.push(term);
    };

    com.socket24.logger.Logger.prototype.removeSuppressionTerm = function (term) {
        var termIndex = com.socket24.utilities.ArrayUtil.indexOf(this.suppressionTerms, term);
        if (termIndex != -1) {
            this.suppressionTerms.splice(termIndex, 1);
            this.debug("Removed suppression term. Log messages containing '"
                + term + "' will now be shown.");
            return true;
        }
        return false;
    };

    /** @private */
    com.socket24.logger.Logger.prototype.addEntry = function (level, levelName, msg) {
        var timeStamp = "";
        var time;

        // Abort if the log's level is lower than the message's level.
        if (this.logLevel < level) {
            return;
        }

        // Don't log messages if they contain any of the suppression terms.
        for (var i = this.suppressionTerms.length; --i >= 0;) {
            if (msg.indexOf(this.suppressionTerms[i]) != -1) {
                return;
            }
        }

        if (this.timeStampEnabled) {
            time = new Date();
            timeStamp = time.getMonth()+1 + "/" + String(time.getDate())
                + "/" + String(time.getFullYear()).substr(2)
                + " " + com.socket24.utilities.NumericFormatter.dateToLocalHrMinSecMs(time)
                + " UTC" + (time.getTimezoneOffset() >= 0 ? "-" : "+")
                + Math.abs(time.getTimezoneOffset() / 60);
        }

        // Log the message.
        this.addToHistory(levelName, msg, timeStamp);

        var e = new com.socket24.logger.LogEvent(com.socket24.logger.LogEvent.UPDATE,
            msg, levelName, timeStamp);
        this.dispatchEvent(e);
    };

    /** @private */
    com.socket24.logger.Logger.prototype.setHistoryLength = function (newHistoryLength) {
        this.historyLength = newHistoryLength;

        if (this.messages.length > this.historyLength) {
            this.messages.splice(this.historyLength);
        }
    };

    com.socket24.logger.Logger.prototype.getHistoryLength = function () {
        return this.historyLength;
    };

    /** @private */
    com.socket24.logger.Logger.prototype.addToHistory = function (level, msg, timeStamp) {
        this.messages.push(timeStamp + (timeStamp == "" ? "" : " ") + level + ": " + msg);
        if (this.messages.length > this.historyLength) {
            this.messages.shift();
        }
    };

    com.socket24.logger.Logger.prototype.getHistory = function () {
        return this.messages.slice(0);
    };

    com.socket24.logger.Logger.prototype.enableTimeStamp = function () {
        this.timeStampEnabled = true;
    };

    com.socket24.logger.Logger.prototype.disableTimeStamp = function () {
        this.timeStampEnabled = false;
    };

    com.socket24.logger.Logger.prototype.toString = function () {
        return "[object Logger]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.ConnectionManagerEvent = function (type, connection, status) {
        com.socket24.events.Event.call(this, type);

        this.connection = connection
        this.status = status;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.ConnectionManagerEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.ConnectionManagerEvent.BEGIN_CONNECT = "BEGIN_CONNECT";
    /** @constant */
    com.socket24.ConnectionManagerEvent.SELECT_CONNECTION = "SELECT_CONNECTION";
    /** @constant */
    com.socket24.ConnectionManagerEvent.READY = "READY";
    /** @constant */
    com.socket24.ConnectionManagerEvent.CONNECT_FAILURE = "CONNECT_FAILURE";
    /** @constant */
    com.socket24.ConnectionManagerEvent.CLIENT_KILL_CONNECT = "CLIENT_KILL_CONNECT";
    /** @constant */
    com.socket24.ConnectionManagerEvent.SERVER_KILL_CONNECT = "SERVER_KILL_CONNECT";
    /** @constant */
    com.socket24.ConnectionManagerEvent.DISCONNECT = "DISCONNECT";
    /** @constant */
    com.socket24.ConnectionManagerEvent.CONNECTION_STATE_CHANGE = "CONNECTION_STATE_CHANGE";
    /** @constant */
    com.socket24.ConnectionManagerEvent.SESSION_TERMINATED = "SESSION_TERMINATED";

//==============================================================================
// INSTANCE METHODS
//==============================================================================

    com.socket24.ConnectionManagerEvent.prototype.getConnection = function () {
        return this.connection;
    }

    com.socket24.ConnectionManagerEvent.prototype.getStatus = function () {
        return this.status;
    }

    com.socket24.ConnectionManagerEvent.prototype.toString = function () {
        return "[object ConnectionManagerEvent]";
    }

//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The ConnectionManager class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.ConnectionManagerEvent.BEGIN_CONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionManagerEvent.SELECT_CONNECTION}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionManagerEvent.CONNECT_FAILURE}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionManagerEvent.DISCONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionManagerEvent.SERVER_KILL_CONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionManagerEvent.CLIENT_KILL_CONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionManagerEvent.READY}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher

     * @see com.socket24.Vaida#connect
     */
    com.socket24.ConnectionManager = function (vaida) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        // Variables
        this.vaida             = vaida;
        this.connectAttemptCount = 0;
        this.connectAbortCount   = 0;
        this.readyCount          = 0;
        this.connectFailedCount  = 0;
        this.setConnectionState(com.socket24.ConnectionState.NOT_CONNECTED);
        this.readyTimeout        = 0;
        this.connections         = new Array();
        this.activeConnection    = null;
        this.inProgressConnection = null;
        this.currentConnectionIndex = 0;
        this.attemptedConnections = null;
        this.setReadyTimeout(com.socket24.ConnectionManager.DEFAULT_READY_TIMEOUT);

        // Initialization
        // Make all Vaida instances in this VM share the same server affinity
        this.setGlobalAffinity(true);
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.ConnectionManager, com.socket24.events.EventDispatcher);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    com.socket24.ConnectionManager.DEFAULT_READY_TIMEOUT = 10000;

// =============================================================================
// CONNECT AND DISCONNECT
// =============================================================================
    com.socket24.ConnectionManager.prototype.connect = function () {
        if (this.connections.length == 0) {
            this.vaida.getLog().error("[CONNECTION_MANAGER] No connections defined. Connection request ignored.");
            return;
        }

        this.connectAttemptCount++;
        this.attemptedConnections = new Array();

        switch (this.connectionState) {
            case com.socket24.ConnectionState.CONNECTION_IN_PROGRESS:
                this.vaida.getLog().info("[CONNECTION_MANAGER] Connection attempt already in "
                    + "progress. Existing attempt must be aborted before"
                    + " new connection attempt begins...");
                this.disconnect();
                break;

            case com.socket24.ConnectionState.READY:
                this.vaida.getLog().info("[CONNECTION_MANAGER] Existing connection to Union"
                    + " must be disconnected before new connection"
                    + " attempt begins.");
                this.disconnect();
                break;
        }
        this.setConnectionState(com.socket24.ConnectionState.CONNECTION_IN_PROGRESS);

        this.vaida.getLog().debug("[CONNECTION_MANAGER] Searching for most recent valid connection.");
        var originalConnectionIndex = this.currentConnectionIndex;
        while (!this.getCurrentConnection().isValid()) {
            this.advance();
            if (this.currentConnectionIndex == originalConnectionIndex) {
                // Couldn't find a valid connection, so start the connection with
                // the first connection in the connection list
                this.vaida.getLog().debug("[CONNECTION_MANAGER] No valid connection found. Starting connection attempt with first connection.");
                this.currentConnectionIndex = 0;
                break;
            }
        }

        this.dispatchBeginConnect();
        this.connectCurrentConnection();
    };

    com.socket24.ConnectionManager.prototype.disconnect = function () {
        if (this.connections.length == 0) {
            this.dispatchConnectFailure("No connections defined. Disconnection attempt failed.");
            return;
        }

        switch (this.connectionState) {
            // Currently connected
            case com.socket24.ConnectionState.READY:
                this.vaida.getLog().info("[CONNECTION_MANAGER] Closing existing connection: "
                    + this.getActiveConnection().toString());
                this.setConnectionState(com.socket24.ConnectionState.DISCONNECTION_IN_PROGRESS);
                this.disconnectConnection(this.getActiveConnection());
                break;

            // Currently attempting to connect
            case com.socket24.ConnectionState.CONNECTION_IN_PROGRESS:
                this.vaida.getLog().info("[CONNECTION_MANAGER] Aborting existing connection attempt: "
                    + this.getInProgressConnection().toString());
                this.connectAbortCount++;
                this.setConnectionState(com.socket24.ConnectionState.DISCONNECTION_IN_PROGRESS);
                this.disconnectConnection(this.getInProgressConnection());
                this.vaida.getLog().info("[CONNECTION_MANAGER] Connection abort complete.");
                break;

            // Currently attempting to disconnect
            case com.socket24.ConnectionState.DISCONNECTION_IN_PROGRESS:
                this.vaida.getLog().info("[CONNECTION_MANAGER] Disconnection request ignored."
                    + " Already disconnecting.");
                break;
        }
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.disconnectConnection = function (connection) {
        connection.disconnect();
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.connectCurrentConnection = function () {
        // If there are no Connections defined, fail immediately
        if (this.connections.length == 0) {
            this.setConnectionState(com.socket24.ConnectionState.NOT_CONNECTED);
            this.connectFailedCount++;
            this.dispatchConnectFailure("No connections defined. Connection attempt failed.");
            return;
        }

        this.inProgressConnection = this.getCurrentConnection();

        // If the requested connection has already been attempted this round,
        // ignore it.
        if (com.socket24.utilities.ArrayUtil.indexOf(this.attemptedConnections, this.inProgressConnection) != -1) {
            this.advanceAndConnect();
            return;
        }

        this.dispatchSelectConnection(this.inProgressConnection);
        this.vaida.getLog().info("[CONNECTION_MANAGER] Attempting connection via "
            + this.inProgressConnection.toString() + ". (Connection "
            + (this.attemptedConnections.length+1) + " of "
            + this.connections.length + ". Attempt " + this.connectAttemptCount +" since last successful connection).");
        this.addConnectionListeners(this.inProgressConnection);
        this.inProgressConnection.connect();
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.advanceAndConnect = function () {
        if (!this.connectAttemptComplete()) {
            this.advance();
            this.connectCurrentConnection();
        } else {
            // Tried all connections, so give up and dispatch CONNECT_FAILURE
            this.connectFailedCount++;
            this.setConnectionState(com.socket24.ConnectionState.NOT_CONNECTED);
            this.vaida.getLog().info("[CONNECTION_MANAGER] Connection failed for all specified hosts and ports.");
            this.dispatchConnectFailure("Connection failed for all specified hosts and ports.");
        }
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.connectAttemptComplete = function () {
        return this.attemptedConnections.length == this.connections.length;
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.advance = function () {
        this.currentConnectionIndex++;
        if (this.currentConnectionIndex == this.connections.length) {
            this.currentConnectionIndex = 0;
        }
    };

// =============================================================================
// CONNECTION OBJECT MANAGEMENT
// =============================================================================
    com.socket24.ConnectionManager.prototype.addConnection = function (connection) {
        if (connection != null) {
            this.vaida.getLog().info("[CONNECTION_MANAGER] New connection added. "
                + connection.toString() + ".");
            connection.setVaida(this.vaida);
            this.connections.push(connection);
        }
    };

    com.socket24.ConnectionManager.prototype.removeConnection = function (connection) {
        if (connection != null) {
            connection.disconnect();
            this.removeConnectionListeners(connection);
            return com.socket24.utilities.ArrayUtil.remove(this.connections, connection);
        } else {
            return false;
        }
    };

    com.socket24.ConnectionManager.prototype.removeAllConnections = function () {
        if (this.connections.length == 0) {
            this.vaida.getLog().info("[CONNECTION_MANAGER] removeAllConnections() ignored. " +
                " No connections to remove.");
            return;
        }

        this.vaida.getLog().info("[CONNECTION_MANAGER] Removing all connections...");
        this.disconnect();
        while (this.connections.length > 0) {
            this.removeConnection(this.connections[0]);
        }
        this.currentConnectionIndex = 0;
        this.vaida.getLog().info("[CONNECTION_MANAGER] All connections removed.");
    };

// =============================================================================
// CONNECTION ACCESS
// =============================================================================
    com.socket24.ConnectionManager.prototype.getActiveConnection = function () {
        return this.activeConnection;
    };

    com.socket24.ConnectionManager.prototype.getInProgressConnection = function () {
        return this.inProgressConnection;
    };

    com.socket24.ConnectionManager.prototype.getConnections = function () {
        return this.connections.slice();
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.getCurrentConnection = function () {
        return this.connections[this.currentConnectionIndex];
    };

// =============================================================================
// CONNECTION LISTENER REGISTRATION
// =============================================================================
    /** @private */
    com.socket24.ConnectionManager.prototype.addConnectionListeners = function(connection) {
        if (connection != null) {
            connection.addEventListener(com.socket24.ConnectionEvent.READY,               this.readyListener, this);
            connection.addEventListener(com.socket24.ConnectionEvent.CONNECT_FAILURE,     this.connectFailureListener, this);
            connection.addEventListener(com.socket24.ConnectionEvent.DISCONNECT,          this.disconnectListener, this);
            connection.addEventListener(com.socket24.ConnectionEvent.CLIENT_KILL_CONNECT, this.clientKillConnectListener, this);
            connection.addEventListener(com.socket24.ConnectionEvent.SERVER_KILL_CONNECT, this.serverKillConnectListener, this);
        }
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.removeConnectionListeners = function (connection) {
        if (connection != null) {
            connection.removeEventListener(com.socket24.ConnectionEvent.READY,               this.readyListener, this);
            connection.removeEventListener(com.socket24.ConnectionEvent.CONNECT_FAILURE,     this.connectFailureListener, this);
            connection.removeEventListener(com.socket24.ConnectionEvent.DISCONNECT,          this.disconnectListener, this);
            connection.removeEventListener(com.socket24.ConnectionEvent.CLIENT_KILL_CONNECT, this.clientKillConnectListener, this);
            connection.removeEventListener(com.socket24.ConnectionEvent.SERVER_KILL_CONNECT, this.serverKillConnectListener, this);
        }
    };

// =============================================================================
// CONNECTION STATE ACCESS
// =============================================================================
    com.socket24.ConnectionManager.prototype.isReady = function () {
        return this.connectionState == com.socket24.ConnectionState.READY;
    }

    com.socket24.ConnectionManager.prototype.setConnectionState = function (state) {
        var changed = false;
        if (state != this.connectionState) {
            changed = true;
        }
        this.connectionState = state;
        if (changed) {
            this.dispatchConnectionStateChange();
        }
    };

    com.socket24.ConnectionManager.prototype.getConnectionState = function () {
        return this.connectionState;
    };

// =============================================================================
// CONNECTION COUNT MANAGEMENT
// =============================================================================
    com.socket24.ConnectionManager.prototype.getReadyCount = function () {
        return this.readyCount;
    };

    com.socket24.ConnectionManager.prototype.getConnectFailedCount = function () {
        return this.connectFailedCount;
    };

    com.socket24.ConnectionManager.prototype.getConnectAttemptCount = function () {
        return this.connectAttemptCount;
    };

    com.socket24.ConnectionManager.prototype.getConnectAbortCount = function () {
        return this.connectAbortCount;
    };

// =============================================================================
// CURRENT CONNECTION LISTENERS
// =============================================================================
    /** @private */
    com.socket24.ConnectionManager.prototype.readyListener = function (e) {
        this.setConnectionState(com.socket24.ConnectionState.READY);
        this.inProgressConnection = null;
        this.activeConnection = e.target;
        this.readyCount++;
        this.connectFailedCount = 0;
        this.connectAttemptCount = 0;
        this.connectAbortCount = 0;
        this.dispatchReady();
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.connectFailureListener = function (e) {
        var failedConnection = e.target;
        this.vaida.getLog().warn("[CONNECTION_MANAGER] Connection failed for "
            + failedConnection.toString()
            + ". Status: [" + e.getStatus() + "]");

        this.removeConnectionListeners(failedConnection);
        this.inProgressConnection = null;

        if (this.connectionState == com.socket24.ConnectionState.DISCONNECTION_IN_PROGRESS) {
            this.dispatchConnectFailure("Connection closed by client.");
        } else {
            if (failedConnection.getHost() != failedConnection.getRequestedHost()) {
                this.vaida.getLog().info("[CONNECTION_MANAGER] Connection failed for affinity address [" + failedConnection.getHost() + "]. Removing affinity.");
                this.clearAffinity(failedConnection.getRequestedHost());
            }

            this.attemptedConnections.push(failedConnection);
            this.advanceAndConnect();
        }
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.disconnectListener = function (e) {
        this.setConnectionState(com.socket24.ConnectionState.NOT_CONNECTED);
        this.removeConnectionListeners(e.target);
        this.activeConnection = null;
        this.dispatchDisconnect(e.target);
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.clientKillConnectListener = function (e) {
        this.dispatchClientKillConnect(e.target);
        // This event is always followed by a DISCONNECT event
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.serverKillConnectListener = function (e) {
        this.dispatchServerKillConnect(e.target);
        // This event is always followed by a DISCONNECT event
    };

// =============================================================================
// READY TIMEOUT MANAGEMENT
// =============================================================================

    com.socket24.ConnectionManager.prototype.setReadyTimeout = function (milliseconds) {
        if (milliseconds > 0) {
            this.readyTimeout = milliseconds;
            this.vaida.getLog().info("[CONNECTION_MANAGER] Ready timeout set to " + milliseconds + " ms.");
            if (milliseconds < 3000) {
                this.vaida.getLog().warn("[CONNECTION_MANAGER] Current ready timeout ("
                    + milliseconds + ") may not allow sufficient time"
                    + " to connect to Union Server over a typical"
                    + " internet connection.");
            }
        } else {
            this.vaida.getLog().warn("[CONNECTION_MANAGER] Invalid ready timeout specified: "
                + milliseconds + ". Duration must be greater than zero.");
        }
    };

    com.socket24.ConnectionManager.prototype.getReadyTimeout = function () {
        return this.readyTimeout;
    };

// =============================================================================
// SERVER AFFINITY
// =============================================================================
    com.socket24.ConnectionManager.prototype.getAffinity = function (host) {
        var address = this.affinityData.read("affinity", host+"address");
        var until = parseFloat(this.affinityData.read("affinity", host+"until"));

        if (address != null) {
            var now = new Date().getTime();
            if (now >= until) {
                this.vaida.getLog().warn("[CONNECTION_MANAGER] Affinity duration expired for address ["
                    + address + "], host [" + host + "]. Removing affinity.");
                this.clearAffinity(host);
            } else {
                return address;
            }
        }

        return host;
    };

    /**
     * @private
     */
    com.socket24.ConnectionManager.prototype.setAffinity = function (host, address, duration) {
        var until = new Date().getTime() + (duration*60*1000);
        // Don't use JSON stringify for affinity values because not all JavaScript
        // environments support JSON natively (e.g., non-browser VMs)
        this.affinityData.write("affinity", host+"address", address);
        this.affinityData.write("affinity", host+"until", until);

        this.vaida.getLog().info("[CONNECTION_MANAGER] Assigning affinity address ["
            + address + "] for supplied host [" +host + "]. Duration (minutes): "
            + duration);
    };

    /**
     * @private
     */
    com.socket24.ConnectionManager.prototype.clearAffinity = function (host) {
        this.affinityData.remove("affinity", host+"address");
        this.affinityData.remove("affinity", host+"until");
    };

    com.socket24.ConnectionManager.prototype.setGlobalAffinity = function (enabled) {
        if (enabled) {
            this.vaida.getLog().info("[CONNECTION_MANAGER] Global server affinity selected."
                + " Using current environment's shared server affinity.");
            this.affinityData = com.socket24.utilities.LocalData;
        } else {
            this.vaida.getLog().info("[CONNECTION_MANAGER] Local server affinity selected."
                + " The current client will maintain its own, individual server affinity.");
            this.affinityData = new com.socket24.utilities.MemoryStore();
        }
    };

// =============================================================================
// EVENT DISPATCHING
// =============================================================================

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchBeginConnect = function () {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.BEGIN_CONNECT));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchSelectConnection = function (connection) {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.SELECT_CONNECTION,
            connection));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchConnectFailure = function (status) {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.CONNECT_FAILURE,
            null, status));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchDisconnect = function (connection) {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.DISCONNECT,
            connection));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchServerKillConnect = function (connection) {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.SERVER_KILL_CONNECT,
            connection));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchClientKillConnect = function (connection) {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.CLIENT_KILL_CONNECT,
            connection));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchReady = function () {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.READY));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchConnectionStateChange = function () {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.CONNECTION_STATE_CHANGE));
    };

    /** @private */
    com.socket24.ConnectionManager.prototype.dispatchSessionTerminated = function () {
        this.dispatchEvent(new com.socket24.ConnectionManagerEvent(com.socket24.ConnectionManagerEvent.SESSION_TERMINATED));
    };

// =============================================================================
// DISPOSAL
// =============================================================================
    com.socket24.ConnectionManager.prototype.dispose = function () {
        this.removeAllConnections();
        this.attemptedConnections = null;
        this.activeConnection = null;
        this.inProgressConnection = null;
        this.connections = null;
    };






















//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.ConnectionMonitor = function (vaida) {
        // Instance variables
        this.connectionTimeout = 0;
        this.heartbeatIntervalID = -1;
        this.heartbeatCounter = 0;
        this.heartbeatEnabled = true;
        this.heartbeats = new com.socket24.utilities.UDictionary();

        this.oldestHeartbeat = 0;
        this.heartBeatFrequency = -1;

        this.sharedPing = false;

        this.autoReconnectMinMS = 0;
        this.autoReconnectMaxMS = 0;
        this.autoReconnectFrequency = -1;
        this.autoReconnectDelayFirstAttempt = false;
        this.autoReconnectTimeoutID = -1;
        this.autoReconnectAttemptLimit = -1;

        this.vaida = vaida;
        this.msgManager = vaida.getMessageManager();
        this.log = vaida.getLog();

        this.disposed = false;

        // Initialization
        this.vaida.addEventListener(com.socket24.VaidaEvent.READY, this.connectReadyListener, this);
        this.vaida.addEventListener(com.socket24.VaidaEvent.CLOSE, this.connectCloseListener, this);
        this.disableHeartbeatLogging();
    };

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    com.socket24.ConnectionMonitor.DEFAULT_HEARTBEAT_FREQUENCY = 10000;
    com.socket24.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY = 20;
    com.socket24.ConnectionMonitor.DEFAULT_AUTORECONNECT_FREQUENCY = -1;
    com.socket24.ConnectionMonitor.DEFAULT_AUTORECONNECT_ATTEMPT_LIMIT = -1;
    com.socket24.ConnectionMonitor.DEFAULT_CONNECTION_TIMEOUT = 60000;

//==============================================================================
// CONNECTION MONITORING
//==============================================================================
    /** @private */
    com.socket24.ConnectionMonitor.prototype.connectReadyListener = function (e) {
        this.msgManager.addMessageListener(com.socket24.Messages.CLIENT_HEARTBEAT, this.heartbeatMessageListener, this);
        this.startHeartbeat();
        this.stopReconnect();
    }

    /** @private */
    com.socket24.ConnectionMonitor.prototype.connectCloseListener = function (e) {
        this.stopHeartbeat();

        var numAttempts = this.vaida.getConnectionManager().getConnectAttemptCount();
        if (numAttempts == 0) {
            this.selectReconnectFrequency();
        }

        if (this.autoReconnectFrequency > -1) {
            if (this.autoReconnectTimeoutID != -1) {
                return;
            } else {
                // Defer reconnection until after all other listeners have processed the
                // CLOSE event
                var self = this;
                setTimeout(function () {
                    // If another listener disposed of Vaida, or disabled autoreconnect, quit
                    if (!self.disposed && self.autoReconnectFrequency != -1) {
                        self.log.warn("[CONNECTION_MONITOR] Disconnection detected.");
                        if (self.autoReconnectDelayFirstAttempt
                            && (
                                (numAttempts == 0)
                                ||
                                (numAttempts == 1 && self.vaida.getConnectionManager().getReadyCount() == 0)
                            )
                        ) {
                            self.log.info("[CONNECTION_MONITOR] Delaying reconnection attempt"
                                + " by " + self.autoReconnectFrequency + " ms...");
                            self.scheduleReconnect(self.autoReconnectFrequency);
                        } else {
                            self.doReconnect();
                        }
                    }
                }, 1);
            }
        }
    }

//==============================================================================
// HEARTBEAT
//==============================================================================

    com.socket24.ConnectionMonitor.prototype.enableHeartbeat = function () {
        this.log.info("[CONNECTION_MONITOR] Heartbeat enabled.");
        this.heartbeatEnabled = true;
        this.startHeartbeat();
    }

    com.socket24.ConnectionMonitor.prototype.disableHeartbeat = function () {
        this.log.info("[CONNECTION_MONITOR] Heartbeat disabled.");
        this.heartbeatEnabled = false;
        this.stopHeartbeat();
    }

    /** @private */
    com.socket24.ConnectionMonitor.prototype.startHeartbeat = function () {
        if (!this.heartbeatEnabled) {
            this.log.info("[CONNECTION_MONITOR] Heartbeat is currently disabled. Ignoring start request.");
            return;
        }

        this.stopHeartbeat();

        this.heartbeats = new com.socket24.utilities.UDictionary();

        var currentObj = this;
        var callback   = this.heartbeatTimerListener;
        this.heartbeatIntervalID = setInterval(function () {
            callback.call(currentObj);
        }, this.heartBeatFrequency);

    }

    /** @private */
    com.socket24.ConnectionMonitor.prototype.stopHeartbeat = function () {
        clearInterval(this.heartbeatIntervalID);
        this.heartbeats = null;
    }

    /** @private */
    com.socket24.ConnectionMonitor.prototype.heartbeatTimerListener = function () {
        if (!this.vaida.isReady()) {
            this.log.info("[CONNECTION_MONITOR] Vaida is not connected. Stopping heartbeat.");
            this.stopHeartbeat();
            return;
        }

        var timeSinceOldestHeartbeat;
        var now = new Date().getTime();

        this.heartbeats[this.heartbeatCounter] = now;
        this.vaida.getMessageManager().emitSocketMessage("u2",
            com.socket24.Messages.CLIENT_HEARTBEAT,
            this.vaida.getClientID(),
            "",
            this.heartbeatCounter);
        this.heartbeatCounter++;

        // Assign the oldest heartbeat
        if (com.socket24.utilities.ObjectUtil.length(this.heartbeats) == 1) {
            this.oldestHeartbeat = now;
        } else {
            this.oldestHeartbeat = Number.MAX_VALUE;
            for (var p in this.heartbeats) {
                if (this.heartbeats[p] < this.oldestHeartbeat) {
                    this.oldestHeartbeat = this.heartbeats[p];
                }
            }
        }
        // Close connection if too much time has passed since the last response
        timeSinceOldestHeartbeat = now - this.oldestHeartbeat;
        if (timeSinceOldestHeartbeat > this.connectionTimeout) {
            this.log.warn("[CONNECTION_MONITOR] No response from server in " +
                timeSinceOldestHeartbeat + "ms. Starting automatic disconnect.");
            this.vaida.disconnect();
        }
    }

    /** @private */
    com.socket24.ConnectionMonitor.prototype.heartbeatMessageListener = function (fromClientID, id) {
        var ping = new Date().getTime() - this.heartbeats[parseInt(id)];
        if (typeof this.vaida.self().setAttribute === "undefined") {
            // VaidaMicro
            this.vaida.self().ping = ping;
            this.vaida.getMessageManager().emitSocketMessage("u3",
                this.vaida.getClientID(),
                "",
                "_PING",
                ping.toString(),
                "",
                this.sharedPing ? "4" : "0");
        } else {
            // Vaida
            this.vaida.self().setAttribute("_PING",
                ping.toString(),
                null,
                this.sharedPing);
        }
        delete this.heartbeats[parseInt(id)];
    }

//==============================================================================
// RECONNECTION
//==============================================================================
    /** @private */
    com.socket24.ConnectionMonitor.prototype.reconnectTimerListener = function (e) {
        this.stopReconnect();
        if (this.vaida.getConnectionManager().connectionState == com.socket24.ConnectionState.NOT_CONNECTED) {
            this.doReconnect();
        }
    }

    /** @private */
    com.socket24.ConnectionMonitor.prototype.stopReconnect = function () {
        clearTimeout(this.autoReconnectTimeoutID);
        this.autoReconnectTimeoutID = -1
    }

    /** @private */
    com.socket24.ConnectionMonitor.prototype.scheduleReconnect = function (milliseconds) {
        // Reset the timer
        this.stopReconnect();
        var currentObj = this;
        var callback   = this.reconnectTimerListener;
        this.autoReconnectTimeoutID = setTimeout(function () {
            currentObj.autoReconnectTimeoutID = -1;
            callback.call(currentObj);
        }, milliseconds);
    };

    /** @private */
    com.socket24.ConnectionMonitor.prototype.selectReconnectFrequency = function () {
        if (this.autoReconnectMinMS == -1) {
            this.autoReconnectFrequency = -1;
        } else if (this.autoReconnectMinMS == this.autoReconnectMaxMS) {
            this.autoReconnectFrequency = this.autoReconnectMinMS;
        } else {
            this.autoReconnectFrequency = getRandInt(this.autoReconnectMinMS, this.autoReconnectMaxMS);
            this.log.info("[CONNECTION_MONITOR] Random auto-reconnect frequency selected: [" +
                this.autoReconnectFrequency + "] ms.");
        }

        function getRandInt (min, max) {
            return min + Math.floor(Math.random()*(max+1 - min));
        }
    };

    /** @private */
    com.socket24.ConnectionMonitor.prototype.doReconnect = function () {
        var numActualAttempts = this.vaida.getConnectionManager().getConnectAttemptCount();
        var numReconnectAttempts;

        if (this.vaida.getConnectionManager().getReadyCount() == 0) {
            numReconnectAttempts = numActualAttempts - 1;
        } else {
            numReconnectAttempts = numActualAttempts;
        }

        if (this.autoReconnectAttemptLimit != -1
            && numReconnectAttempts > 0
            && numReconnectAttempts % (this.autoReconnectAttemptLimit) == 0) {
            this.log.warn("[CONNECTION_MONITOR] Automatic reconnect attempt limit reached."
                + " No further automatic connection attempts will be made until"
                + " the next manual connection attempt.");
            return;
        }

        this.scheduleReconnect(this.autoReconnectFrequency);

        this.log.warn("[CONNECTION_MONITOR] Attempting automatic reconnect. (Next attempt in "
            + this.autoReconnectFrequency + "ms.)");
        this.vaida.connect();
    }

//==============================================================================
// CONFIGURATION
//==============================================================================

    com.socket24.ConnectionMonitor.prototype.restoreDefaults = function () {
        this.setAutoReconnectFrequency(com.socket24.ConnectionMonitor.DEFAULT_AUTORECONNECT_FREQUENCY);
        this.setAutoReconnectAttemptLimit(com.socket24.ConnectionMonitor.DEFAULT_AUTORECONNECT_ATTEMPT_LIMIT);
        this.setConnectionTimeout(com.socket24.ConnectionMonitor.DEFAULT_CONNECTION_TIMEOUT);
        this.setHeartbeatFrequency(com.socket24.ConnectionMonitor.DEFAULT_HEARTBEAT_FREQUENCY);
    }

    com.socket24.ConnectionMonitor.prototype.setHeartbeatFrequency = function (milliseconds) {
        if (milliseconds >= com.socket24.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY) {
            this.heartBeatFrequency = milliseconds;
            this.log.info("[CONNECTION_MONITOR] Heartbeat frequency set to "
                + milliseconds + " ms.");
            // Log a warning for low heartbeat frequencies...
            if (milliseconds >= com.socket24.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY && milliseconds < 1000) {
                this.log.info("[CONNECTION_MONITOR] HEARTBEAT FREQUENCY WARNING: "
                    + milliseconds + " ms. Current frequency will generate "
                    + (Math.floor((1000/milliseconds)*10)/10)
                    + " messages per second per connected client.");
            }

            // If the connection is ready, then restart
            // the heartbeat when the heartbeat frequency changes.
            if (this.vaida.isReady()) {
                this.startHeartbeat();
            }
        } else {
            this.log.warn("[CONNECTION_MONITOR] Invalid heartbeat frequency specified: "
                + milliseconds + ". Frequency must be "
                + com.socket24.ConnectionMonitor.MIN_HEARTBEAT_FREQUENCY + " or greater.");
        }
    }

    com.socket24.ConnectionMonitor.prototype.getHeartbeatFrequency = function () {
        return this.heartBeatFrequency;
    }

    com.socket24.ConnectionMonitor.prototype.setAutoReconnectFrequency = function (minMS, maxMS, delayFirstAttempt) {
        maxMS = (typeof maxMS == "undefined") ? -1 : maxMS;
        delayFirstAttempt = (typeof delayFirstAttempt == "undefined") ? false : delayFirstAttempt;

        if (minMS == 0 || minMS < -1) {
            this.log.warn("[CONNECTION_MONITOR] Invalid auto-reconnect minMS specified: ["
                + minMS + "]. Value must not be zero or less than -1. Value adjusted"
                + " to [-1] (no reconnect).");
            minMS = -1;
        }
        if (minMS == -1) {
            this.stopReconnect();
        } else {
            if (maxMS == -1) {
                maxMS = minMS;
            }
            if (maxMS < minMS) {
                this.log.warn("[CONNECTION_MONITOR] Invalid auto-reconnect maxMS specified: ["
                    + maxMS + "]." + " Value of maxMS must be greater than or equal "
                    + "to minMS. Value adjusted to [" + minMS + "].");
                maxMS = minMS;
            }
        }

        this.autoReconnectDelayFirstAttempt = delayFirstAttempt;
        this.autoReconnectMinMS = minMS;
        this.autoReconnectMaxMS = maxMS;

        this.log.info("[CONNECTION_MONITOR] Assigning auto-reconnect frequency settings: [minMS: "
            + minMS + ", maxMS: " + maxMS + ", delayFirstAttempt: "
            + delayFirstAttempt.toString() + "].");
        if (minMS > 0 && minMS < 1000) {
            this.log.info("[CONNECTION_MONITOR] RECONNECT FREQUENCY WARNING: "
                + minMS + " minMS specified. Current frequency will cause "
                + (Math.floor((1000/minMS)*10)/10).toString()
                + " reconnection attempts per second.");
        }
        this.selectReconnectFrequency();
    }

    com.socket24.ConnectionMonitor.prototype.getAutoReconnectFrequency = function () {
        return this.autoReconnectFrequency;
    }

    com.socket24.ConnectionMonitor.prototype.setAutoReconnectAttemptLimit = function (attempts) {
        if (attempts < -1 || attempts == 0) {
            this.log.warn("[CONNECTION_MONITOR] Invalid Auto-reconnect attempt limit specified: "
                + attempts + ". Limit must -1 or greater than 1.");
            return;
        }

        this.autoReconnectAttemptLimit = attempts;

        if (attempts == -1) {
            this.log.info("[CONNECTION_MONITOR] Auto-reconnect attempt limit set to none.");
        } else {
            this.log.info("[CONNECTION_MONITOR] Auto-reconnect attempt limit set to "
                + attempts + " attempt(s).");
        }
    };

    com.socket24.ConnectionMonitor.prototype.getAutoReconnectAttemptLimit = function () {
        return this.autoReconnectAttemptLimit;
    }

    com.socket24.ConnectionMonitor.prototype.setConnectionTimeout = function (milliseconds) {
        if (milliseconds > 0) {
            this.connectionTimeout = milliseconds;
            this.log.info("[CONNECTION_MONITOR] Connection timeout set to "
                + milliseconds + " ms.");
        } else {
            this.log.warn("[CONNECTION_MONITOR] Invalid connection timeout specified: "
                + milliseconds + ". Frequency must be greater "
                + "than zero.");
        }
    }

    com.socket24.ConnectionMonitor.prototype.getConnectionTimeout = function () {
        return this.connectionTimeout;
    }

    com.socket24.ConnectionMonitor.prototype.sharePing = function (share) {
        this.sharedPing = share;
    }

    com.socket24.ConnectionMonitor.prototype.isPingShared = function () {
        return this.sharedPing;
    }

    com.socket24.ConnectionMonitor.prototype.disableHeartbeatLogging = function () {
        this.log.addSuppressionTerm("<A>CLIENT_HEARTBEAT</A>");
        this.log.addSuppressionTerm("<A>_PING</A>");
        this.log.addSuppressionTerm("[_PING]");
        this.log.addSuppressionTerm("<![CDATA[_PING]]>");
    }

    com.socket24.ConnectionMonitor.prototype.enableHeartbeatLogging = function () {
        this.log.removeSuppressionTerm("<A>CLIENT_HEARTBEAT</A>");
        this.log.removeSuppressionTerm("<A>_PING</A>");
        this.log.removeSuppressionTerm("[_PING]");
        this.log.removeSuppressionTerm("<![CDATA[_PING]]>");
    }

// =============================================================================
// DISPOSAL
// =============================================================================

    com.socket24.ConnectionMonitor.prototype.dispose = function () {
        this.disposed = true;

        this.stopHeartbeat();
        this.stopReconnect();

        this.heartbeats = null;

        this.vaida.removeEventListener(com.socket24.VaidaEvent.READY, this.connectReadyListener, this);
        this.vaida.removeEventListener(com.socket24.VaidaEvent.CLOSE, this.connectCloseListener, this);
        this.vaida = null;
        this.msgManager.removeMessageListener("u7", this.u7);
        this.msgManager(null);
        this.log = null;
    };

















//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.VaidaEvent = function (type,
                                           serverUPCVersion,
                                           connectionRefusal) {
        com.socket24.events.Event.call(this, type);

        this.serverUPCVersion = serverUPCVersion;
        this.connectionRefusal = connectionRefusal;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.VaidaEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    /** @constant */
    com.socket24.VaidaEvent.READY = "READY";
    /** @constant */
    com.socket24.VaidaEvent.CLOSE = "CLOSE";
    /** @constant */
    com.socket24.VaidaEvent.PROTOCOL_INCOMPATIBLE = "PROTOCOL_INCOMPATIBLE";
    /** @constant */
    com.socket24.VaidaEvent.CONNECT_REFUSED = "CONNECT_REFUSED";

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.VaidaEvent.prototype.getServerUPCVersion = function () {
        return this.serverUPCVersion;
    }

    com.socket24.VaidaEvent.prototype.getConnectionRefusal = function () {
        return this.connectionRefusal;
    }

    com.socket24.VaidaEvent.prototype.toString = function () {
        return "[object VaidaEvent]";
    }

//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The Snapshot class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.SnapshotEvent.LOAD}</li>
     <li class="fixedFont">{@link com.socket24.SnapshotEvent.STATUS}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.snapshot.Snapshot = function () {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);
        this.method;
        this.args = new Array();
        this.hasStatus;
        this.statusReceived;
        this.loaded;
        this._updateInProgress;
        this._status;
        this.onLoad = function () {};
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.Snapshot, com.socket24.events.EventDispatcher);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.snapshot.Snapshot.prototype.updateInProgress = function () {
        return this._updateInProgress;
    };

    /**
     * @private
     */
    com.socket24.snapshot.Snapshot.prototype.setUpdateInProgress = function (value) {
        this._updateInProgress = value;
    };

    /**
     * @private
     */
    com.socket24.snapshot.Snapshot.prototype.dispatchLoaded = function () {
        this.dispatchEvent(new com.socket24.snapshot.SnapshotEvent(com.socket24.snapshot.SnapshotEvent.LOAD, this));
    };

    /**
     * @private
     */
    com.socket24.snapshot.Snapshot.prototype.dispatchStatus = function () {
        this.dispatchEvent(new com.socket24.snapshot.SnapshotEvent(com.socket24.snapshot.SnapshotEvent.STATUS, this));
    };

    com.socket24.snapshot.Snapshot.prototype.getStatus = function () {
        return this._status;
    };

    /**
     * @private
     */
    com.socket24.snapshot.Snapshot.prototype.setStatus = function (value) {
        this._status = value;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.events.Event
     */
    com.socket24.snapshot.SnapshotEvent = function (type,
                                                    snapshot) {
        com.socket24.events.Event.call(this, type);
        this.snapshot = snapshot;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.SnapshotEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.snapshot.SnapshotEvent.LOAD = "LOAD";
    /** @constant */
    com.socket24.snapshot.SnapshotEvent.STATUS = "STATUS";

    com.socket24.snapshot.SnapshotEvent.prototype.toString = function () {
        return "[object SnapshotEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.SnapshotManager = function (messageManager) {
        this.messageManager = messageManager;
        this.pendingSnapshots = new Object();
        this.requestIDCounter = 0;
    };

//==============================================================================
// UPDATE SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.updateSnapshot = function (snapshot) {
        var args;
        if (snapshot != null) {
            if (!snapshot.updateInProgress()) {
                this.requestIDCounter++;
                snapshot.setUpdateInProgress(true);
                snapshot.loaded = false;
                snapshot.statusReceived = false;
                snapshot.setStatus(null);
                this.pendingSnapshots[this.requestIDCounter.toString()] = snapshot;
                args = snapshot.args.slice(0);
                args.unshift(this.requestIDCounter);
                args.unshift(snapshot.method);
                this.messageManager.emitSocketMessage.apply(this.messageManager, args);
            }
        }
    };

//==============================================================================
// RECEIVE SNAPSHOT RESULT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveSnapshotResult = function (requestID, status) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received snapshot result for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setStatus(status);
        this.setStatusReceived(snapshot, requestID);
    };

//==============================================================================
// RECEIVE CLIENTCOUNT SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveClientCountSnapshot =  function (requestID,
                                                                                   numClients) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received client-count snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setCount(numClients);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE CLIENT SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveClientSnapshot = function (requestID, manifest) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received client snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setManifest(manifest);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE ACCOUNT SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveAccountSnapshot = function (requestID, manifest) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received account snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setManifest(manifest);
        this.setLoaded(snapshot, requestID);
    }

//==============================================================================
// RECEIVE ROOMLIST SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveRoomListSnapshot = function (requestID,
                                                                               roomList,
                                                                               qualifier,
                                                                               recursive) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received roomlist snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setRoomList(roomList);
        snapshot.setQualifier(qualifier == "" ? null : qualifier);
        snapshot.setRecursive(recursive);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE ROOM SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveRoomSnapshot = function (requestID, manifest) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received room snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setManifest(manifest);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE CLIENTLIST SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveClientListSnapshot = function (requestID, clientList) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received clientlist snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setClientList(clientList);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE ACCOUNTLIST SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveAccountListSnapshot = function (requestID, accountList) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received accountlist snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setAccountList(accountList);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE BANNEDLIST SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveBannedListSnapshot = function (requestID, bannedList) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received bannedlist snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setBannedList(bannedList);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE SERVERMODULELIST SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveServerModuleListSnapshot = function (requestID, moduleList) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received server module list snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setModuleList(moduleList);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE UPCSTATS SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveUPCStatsSnapshot = function (requestID,
                                                                               totalUPCsProcessed,
                                                                               numUPCsInQueue,
                                                                               lastQueueWaitTime,
                                                                               longestUPCProcesses) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received UPC stats snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setTotalUPCsProcessed(totalUPCsProcessed);
        snapshot.setNumUPCsInQueue(numUPCsInQueue);
        snapshot.setLastQueueWaitTime(lastQueueWaitTime);
        snapshot.setLongestUPCProcesses(longestUPCProcesses);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// RECEIVE NODELIST SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveNodeListSnapshot = function (requestID, nodeList) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received server node list snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setNodeList(nodeList);
        this.setLoaded(snapshot, requestID);
    };


//==============================================================================
// RECEIVE GATEWAYS SNAPSHOT
//==============================================================================

    com.socket24.SnapshotManager.prototype.receiveGatewaysSnapshot = function (requestID, gateways) {
        var snapshot = this.pendingSnapshots[requestID];
        if (snapshot == null) {
            throw new Error("[SNAPSHOT_MANAGER] Received gateways snapshot for unknown "
                + "request ID: [" + requestID + "]");
        }
        snapshot.setGateways(gateways);
        this.setLoaded(snapshot, requestID);
    };

//==============================================================================
// LOADED AND STATUS ASSIGNMENT
//==============================================================================

    com.socket24.SnapshotManager.prototype.setLoaded = function (snapshot, requestID) {
        snapshot.loaded = true;
        if (snapshot.hasStatus == false
            || (snapshot.hasStatus == true && snapshot.statusReceived)) {
            snapshot.setUpdateInProgress(false);
            delete this.pendingSnapshots[requestID];
        }

        if (snapshot.hasOwnProperty("onLoad")) {
            snapshot["onLoad"]();
        }
        snapshot.dispatchLoaded();
    };

    com.socket24.SnapshotManager.prototype.setStatusReceived = function (snapshot, requestID) {
        if (snapshot.loaded) {
            snapshot.setUpdateInProgress(false);
            delete this.pendingSnapshots[requestID];
        }
        snapshot.dispatchStatus();
    };


















//==============================================================================
// BOOLEAN GROUP TYPE CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.filters.BooleanGroupType = new Object();
    /** @constant */
    com.socket24.filters.BooleanGroupType.AND = "AND";
    /** @constant */
    com.socket24.filters.BooleanGroupType.OR = "OR";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.filters.BooleanGroup = function (type) {
        this.type = type;
        this.comparisons = new Array();
    };

    com.socket24.filters.BooleanGroup.prototype.addComparison = function (comparison) {
        if (comparison == null) return;
        this.comparisons.push(comparison);
    };

    com.socket24.filters.BooleanGroup.prototype.toXMLString = function () {
        var s = type == com.socket24.filters.BooleanGroupType.AND ? "<and>\n" : "<or>\n";

        var comparison;
        for (var i = 0; i < this.comparisons.length; i++) {
            comparison = this.comparisons[i];
            s += comparison.toXMLString() + "\n";
        }
        s += this.type == com.socket24.filters.BooleanGroupType.AND ? "</and>" : "</or>";
        return s;
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.events.Event
     */
    com.socket24.AccountEvent = function (type,
                                          status,
                                          userID,
                                          clientID,
                                          role) {
        com.socket24.events.Event.call(this, type);

        this.status = status;
        this.userID = userID;
        this.clientID = clientID;
        this.role = role;
        this.account = null;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.AccountEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.AccountEvent.LOGIN_RESULT = "LOGIN_RESULT";
    /** @constant */
    com.socket24.AccountEvent.LOGIN  = "LOGIN";
    /** @constant */
    com.socket24.AccountEvent.LOGOFF_RESULT = "LOGOFF_RESULT";
    /** @constant */
    com.socket24.AccountEvent.LOGOFF = "LOGOFF";
    /** @constant */
    com.socket24.AccountEvent.CHANGE_PASSWORD_RESULT = "CHANGE_PASSWORD_RESULT";
    /** @constant */
    com.socket24.AccountEvent.CHANGE_PASSWORD = "CHANGE_PASSWORD";
    /** @constant */
    com.socket24.AccountEvent.OBSERVE = "OBSERVE";
    /** @constant */
    com.socket24.AccountEvent.STOP_OBSERVING = "STOP_OBSERVING";
    /** @constant */
    com.socket24.AccountEvent.OBSERVE_RESULT = "OBSERVE_RESULT";
    /** @constant */
    com.socket24.AccountEvent.STOP_OBSERVING_RESULT = "STOP_OBSERVING_RESULT";
    /** @constant */
    com.socket24.AccountEvent.ADD_ROLE_RESULT = "ADD_ROLE_RESULT";
    /** @constant */
    com.socket24.AccountEvent.REMOVE_ROLE_RESULT = "REMOVE_ROLE_RESULT";
    /** @constant */
    com.socket24.AccountEvent.SYNCHRONIZE = "SYNCHRONIZE";


//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.AccountEvent.prototype.getAccount = function () {
        if (this.target instanceof com.socket24.AccountManager) {
            return this.account;
        } else if (this.target instanceof com.socket24.UserAccount) {
            return this.target;
        } else {
            throw new Error("[AccountEvent] Unexpected target type: " + this.target);
        }
    };

    /**
     * @private
     */
    com.socket24.AccountEvent.prototype.setAccount = function (value) {
        this.account = value;
    };

    com.socket24.AccountEvent.prototype.getUserID = function () {
        return this.userID;
    };

    com.socket24.AccountEvent.prototype.getRole = function () {
        return this.role;
    };

    com.socket24.AccountEvent.prototype.getClientID = function () {
        return this.clientID;
    };

    com.socket24.AccountEvent.prototype.getStatus = function () {
        return this.status;
    };

    com.socket24.AccountEvent.prototype.toString = function () {
        return "[object AccountEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.AccountListSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.accountList = null;
        this.method = com.socket24eventName.GET_ACCOUNTLIST_SNAPSHOT;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.AccountListSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.AccountListSnapshot.prototype.setAccountList = function (value) {
        this.accountList = value;
    }

    com.socket24.snapshot.AccountListSnapshot.prototype.getAccountList = function () {
        if (!this.accountList) {
            return null;
        }
        return this.accountList.slice();
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The AccountManager class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.AccountManagerEvent.CREATE_ACCOUNT_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountManagerEvent.REMOVE_ACCOUNT_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.CHANGE_PASSWORD_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountManagerEvent.ACCOUNT_ADDED}</li>
     <li class="fixedFont">{@link com.socket24.AccountManagerEvent.ACCOUNT_REMOVED}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGOFF_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGOFF}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGIN_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGIN}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.CHANGE_PASSWORD}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.OBSERVE}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.STOP_OBSERVING}</li>
     <li class="fixedFont">{@link com.socket24.AccountManagerEvent.STOP_WATCHING_FOR_ACCOUNTS_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountManagerEvent.WATCH_FOR_ACCOUNTS_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.OBSERVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.STOP_OBSERVING_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountManagerEvent.SYNCHRONIZE}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.ADD_ROLE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.REMOVE_ROLE_RESULT}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.AccountManager = function (log) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.watchedAccounts   = new com.socket24.AccountSet();
        this.observedAccounts  = new com.socket24.AccountSet();
        this.accountCache      = new com.socket24.utilities.LRUCache(10000);
        this.log               = log;
        this._isWatchingForAccounts = false;
        this.accountCache;
        this.messageManager;
        this.clientManager;
        this.roomManager;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.AccountManager, com.socket24.events.EventDispatcher);

// =============================================================================
// DEPENDENCIES
// =============================================================================
    /**
     * @private
     */
    com.socket24.AccountManager.prototype.setMessageManager = function (value) {
        this.messageManager = value;
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.setClientManager = function (value) {
        this.clientManager = value;
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.setRoomManager = function (value) {
        this.roomManager = value;
    }

// =============================================================================
// REMOTE ACCOUNT CREATION/REMOVAL
// =============================================================================

    com.socket24.AccountManager.prototype.createAccount = function (userID, password) {
        if (userID == null || userID == "") {
            this.log.warn("[ACCOUNT_MANAGER] Create account failed. No userID supplied.");
        } else if (password == null) {
            this.log.warn("[ACCOUNT_MANAGER] Create account failed. No password supplied.");
        } else {
            this.messageManager.emitSocketMessage(com.socket24eventName.CREATE_ACCOUNT, userID, password);
        }
    };

    com.socket24.AccountManager.prototype.removeAccount = function (userID, password) {
        if (userID == null || userID == "") {
            this.log.warn("[ACCOUNT_MANAGER] Remove account failed. No userID supplied.");
        } else {
            if (password == null) {
                this.log.warn("[ACCOUNT_MANAGER] Remove account: no password supplied." +
                    " Removal will fail unless sender is an administrator.");
            }
            this.messageManager.emitSocketMessage(com.socket24eventName.REMOVE_ACCOUNT, userID, password);
        }
    }

// =============================================================================
// CHANGE PASSWORD
// =============================================================================

    com.socket24.AccountManager.prototype.changePassword = function (userID, newPassword, oldPassword) {
        if (userID == null || userID == "") {
            this.log.warn("[ACCOUNT_MANAGER] Change password failed. No userID supplied.");
        } else if (newPassword == null || newPassword == "") {
            this.log.warn("[ACCOUNT_MANAGER] Change password failed for account ["
                + userID + "]. No new password supplied.");
        } else {
            if (oldPassword == null || oldPassword == "") {
                this.log.warn("[ACCOUNT_MANAGER] Change account password for account ["
                    + userID + "]: no old password supplied."
                    + " Operation will fail unless sender is an administrator.");
                oldPassword = "";
            }
            this.messageManager.emitSocketMessage(com.socket24eventName.CHANGE_ACCOUNT_PASSWORD, userID, oldPassword, newPassword);
        }
    };

// =============================================================================
// ADD/REMOVE ROLE
// =============================================================================

    com.socket24.AccountManager.prototype.addRole = function (userID, role) {
        if (userID == null || userID == "") {
            this.log.warn("[ACCOUNT_MANAGER] Add role failed. No userID supplied.");
        } else if (role == null || role == "") {
            this.log.warn("[ACCOUNT_MANAGER] Add role failed for account ["
                + userID + "]. No role supplied.");
        } else {
            this.messageManager.emitSocketMessage(com.socket24eventName.ADD_ROLE, userID, role);
        }
    };

    com.socket24.AccountManager.prototype.removeRole = function (userID, role) {
        if (userID == null || userID == "") {
            this.log.warn("[ACCOUNT_MANAGER] Remove role failed. No userID supplied.");
        } else if (role == null || role == "") {
            this.log.warn("[ACCOUNT_MANAGER] Remove role failed for account ["
                + userID + "]. No role supplied.");
        } else {
            this.messageManager.emitSocketMessage(com.socket24eventName.REMOVE_ROLE, userID, role);
        }
    };

// =============================================================================
// LOCAL ACCOUNT CREATION/REMOVAL
// =============================================================================

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.requestAccount = function (userID) {
        var account;

        if (userID == null || userID == "") {
            return null;
        } else {
            account = this.getAccount(userID);
            if (account == null) {
                account = new com.socket24.UserAccount(userID, this.log, this, this.clientManager, this.roomManager);
                account.setAttributeManager(new com.socket24.AttributeManager(account, this.messageManager, this.log));
                this.accountCache.put(userID, account);
            }
            return account;
        }
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.deserializeWatchedAccounts = function (ids) {
        var idList = ids.split(Tokens.RS);
        var idHash = new com.socket24.utilities.UDictionary();
        var len = idList.length;

        // Generate a hash of clientID keys to dummy values for quick lookup
        for (var i = len; --i >= 0;) {
            idHash[idList[i]] = 1;
        }

        // Remove all local accounts that are not in the new list from the server
        var accountStillExists;
        for (var accountID in watchedAccounts.getAll()) {
            if (!idHash.hasOwnProperty(accountID)) {
                removeWatchedAccount(accountID);
            }
        }

        // Add accounts from the new list that are not known locally. Do not add
        // clients for the accounts because "watch for accounts" does not
        // include client knowledge.
        if (ids != "") {  // Empty string means no accounts are on the server
            for (accountID in idHash) {
                if (accountID != "") {
                    if (!this.watchedAccounts.containsUserID(accountID)) {
                        this.addWatchedAccount(this.requestAccount(accountID));
                    }
                } else {
                    throw new Error("[CORE_MESSAGE_LISTENER] Received empty account id in user list (u127).");
                }
            }
        }

        this.fireSynchronize();
    };

// =============================================================================
// OBSERVED ACCOUNTS
// =============================================================================

    com.socket24.AccountManager.prototype.observeAccount = function (userID) {
        this.messageManager.emitSocketMessage(com.socket24eventName.OBSERVE_ACCOUNT, userID);
    };

// This method is internal because the developer is expected to access
// stopObserving() through the UserAccount directly. AccountManager's
// observeAccount() exists only to allow developers to observe a
// user that is currently unknown.
    /**
     * @private
     */
    com.socket24.AccountManager.prototype.stopObservingAccount = function (userID) {
        this.messageManager.emitSocketMessage(com.socket24eventName.STOP_OBSERVING_ACCOUNT, userID);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.addObservedAccount = function (account) {
        this.observedAccounts.add(account);
        this.fireObserveAccount(account.getUserID());
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.removeObservedAccount = function (userID) {
        var account = this.observedAccounts.removeByUserID(userID);
        this.fireStopObservingAccount(userID);
        return account;
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.removeAllObservedAccounts = function () {
        this.observedAccounts.removeAll();
    }

    com.socket24.AccountManager.prototype.isObservingAccount = function (userID) {
        return this.observedAccounts.containsUserID(userID);
    }

//==============================================================================
// WATCH FOR ACCOUNTS
//==============================================================================

    com.socket24.AccountManager.prototype.watchForAccounts = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.WATCH_FOR_ACCOUNTS);
    }

    com.socket24.AccountManager.prototype.stopWatchingForAccounts = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.STOP_WATCHING_FOR_ACCOUNTS_RESULT);
    }

    com.socket24.AccountManager.prototype.isWatchingForAccounts = function () {
        return this._isWatchingForAccounts;
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.setIsWatchingForAccounts = function (value) {
        this._isWatchingForAccounts = value;
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.addWatchedAccount = function (account) {
        this.watchedAccounts.add(account);
        this.fireAccountAdded(account.getUserID(), account);
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.removeWatchedAccount = function (userID) {
        return this.watchedAccounts.removeByUserID(userID);
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.removeAllWatchedAccounts = function () {
        this.watchedAccounts.removeAll();
    }

    com.socket24.AccountManager.prototype.hasWatchedAccount = function (userID) {
        return this.watchedAccounts.containsUserID(userID);
    }

// =============================================================================
// CLIENT ACCESS
// =============================================================================

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.getClientsForObservedAccounts = function () {
        var clients = new Object();
        var client;

        var accounts = this.observedAccounts.getAll();
        var account;
        for (var userID in accounts) {
            account = accounts[userID];
            client = account.getInternalClient();
            if (client != null) {
                clients[client.getClientID()] = client;
            }
        }

        return clients;
    }

// =============================================================================
// LOCAL ACCOUNT ACCESS
// =============================================================================

    com.socket24.AccountManager.prototype.getAccount = function (userID) {
        // Look in account cache
        var account = this.accountCache.get(userID);
        if (account) {
            return account;
        }

        // Look in observed accounts
        account = this.observedAccounts.getByUserID(userID);
        if (account) {
            return account;
        }

        // Look in watched accounts
        account = this.watchedAccounts.getByUserID(userID);
        if (account) {
            return account;
        }

        // Look in connected accounts
        var connectedAccounts = new Object();
        var clients = this.clientManager.getInternalClients();
        var client;
        for (var clientID in clients) {
            account = clients[clientID].getAccount();
            if (account != null && account.getUserID() == userID) {
                return account;
            }
        }

        return null;
    };

    com.socket24.AccountManager.prototype.selfAccount = function () {
        return this.clientManager.self().getAccount();
    };

    com.socket24.AccountManager.prototype.getAccounts = function () {
        var connectedAccounts = new Object();
        var account;

        var clients = this.clientManager.getInternalClients();
        var client;
        for (var clientID in clients) {
            account = client.getAccount();
            if (account != null) {
                connectedAccounts[account.getUserID()] = account;
            }
        }

        return com.socket24.utilities.ObjectUtil.combine(connectedAccounts, this.observedAccounts.getAll(), this.watchedAccounts.getAll());
    };

    com.socket24.AccountManager.prototype.accountIsKnown = function (userID) {
        for (var knownUserID in this.getAccounts()) {
            if (knownUserID == userID) {
                return true;
            }
        }
        return false;
    };

    com.socket24.AccountManager.prototype.getNumAccounts = function () {
        return this.getAccounts().length;
    };

    com.socket24.AccountManager.prototype.getNumAccountsOnServer = function () {
        return this.watchedAccounts.length();
    };

    com.socket24.AccountManager.prototype.getNumLoggedInAccounts = function () {
        var count;
        var account;
        var accounts = this.getAccounts();
        for (var userID in accounts) {
            account = accounts[userID];
            if (account.isLoggedIn()) {
                count++;
            }
        }
        return count;
    };

// =============================================================================
// LOGIN/LOGOFF
// =============================================================================

    com.socket24.AccountManager.prototype.login = function (userID, password) {
        if (this.clientManager.self().getConnectionState() == com.socket24.ConnectionState.LOGGED_IN) {
            this.log.warn("[ACCOUNT_MANAGER] User [" + userID + "]: Login attempt"
                + " ignored. Already logged in. Current client must logoff before"
                + " logging in again.");
            this.fireLoginResult(userID, com.socket24.Status.ERROR);
        } else if (userID == null) {
            this.log.warn("[ACCOUNT_MANAGER] Login attempt"
                + " failed. No userID supplied.");
        } else if (password == null) {
            this.log.warn("[ACCOUNT_MANAGER] Login attempt failed for user "
                + "[" + userID + "] failed. No password supplied.");
        } else {
            this.messageManager.emitSocketMessage(com.socket24eventName.LOGIN, userID, password);
        }
    };

    com.socket24.AccountManager.prototype.logoff = function (userID, password) {
        if (userID == null) {
            // Current client
            if (this.clientManager.self().getConnectionState() != com.socket24.ConnectionState.LOGGED_IN) {
                this.log.warn("[ACCOUNT_MANAGER] Logoff failed. The current user is not logged in.");
            } else {
                this.clientManager.self().getAccount().logoff();
            }
        } else if (userID == "") {
            // Invalid client
            this.log.warn("[ACCOUNT_MANAGER] Logoff failed. Supplied userID must not be the empty string.");
        } else {
            // UserID supplied
            if (password == null || password == "") {
                if (this.clientManager.self().getConnectionState() != com.socket24.ConnectionState.LOGGED_IN) {
                    this.log.warn("[ACCOUNT_MANAGER] Logoff: no password supplied." +
                        " Operation will fail unless sender is an administrator.");
                }
                password = "";
            }
            this.messageManager.emitSocketMessage(com.socket24eventName.LOGOFF, userID, password);
        }
    }

//==============================================================================
// EVENT DISPATCHING
//==============================================================================

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireCreateAccountResult = function (userID, status) {
        var e = new com.socket24.AccountManagerEvent(com.socket24.AccountManagerEvent.CREATE_ACCOUNT_RESULT,
            userID, this.getAccount(userID), status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireRemoveAccountResult = function (userID, status) {
        var e = new com.socket24.AccountManagerEvent(com.socket24.AccountManagerEvent.REMOVE_ACCOUNT_RESULT,
            userID, this.getAccount(userID), status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireChangePasswordResult = function (userID, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.CHANGE_PASSWORD_RESULT,
            status, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireAccountAdded = function (userID, account) {
        this.dispatchEvent(new com.socket24.AccountManagerEvent(com.socket24.AccountManagerEvent.ACCOUNT_ADDED,
            userID, account));
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireAccountRemoved = function (userID, account) {
        this.dispatchEvent(new com.socket24.AccountManagerEvent(com.socket24.AccountManagerEvent.ACCOUNT_REMOVED,
            userID, account));
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireLogoffResult = function (userID, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGOFF_RESULT,
            status, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireLogoff = function (account, clientID) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGOFF,
            com.socket24.Status.SUCCESS, account.getUserID(), clientID);
        e.setAccount(account);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireLoginResult = function (userID, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGIN_RESULT,
            status, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireLogin = function (account, clientID) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGIN,
            com.socket24.Status.SUCCESS, account.getUserID(), clientID);
        e.setAccount(account);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireChangePassword = function (userID) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.CHANGE_PASSWORD,
            com.socket24.Status.SUCCESS, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireObserveAccount = function (userID) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.OBSERVE,
            null, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireStopObservingAccount = function (userID) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.STOP_OBSERVING,
            null, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireStopWatchingForAccountsResult = function (status) {
        this.dispatchEvent(new com.socket24.AccountManagerEvent(com.socket24.AccountManagerEvent.STOP_WATCHING_FOR_ACCOUNTS_RESULT,
            null, null, status));
    }

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireWatchForAccountsResult = function (status) {
        this.dispatchEvent(new com.socket24.AccountManagerEvent(com.socket24.AccountManagerEvent.WATCH_FOR_ACCOUNTS_RESULT,
            null, null, status));
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireObserveAccountResult = function (userID, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.OBSERVE_RESULT,
            status, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireStopObservingAccountResult = function (userID, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.STOP_OBSERVING_RESULT,
            status, userID);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireAddRoleResult = function (userID, role, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.ADD_ROLE_RESULT,
            status, userID, null, role);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireRemoveRoleResult  = function (userID, role, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.REMOVE_ROLE_RESULT,
            status, userID, null, role);
        e.setAccount(this.getAccount(userID));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.fireSynchronize = function () {
        this.dispatchEvent(new com.socket24.AccountManagerEvent(com.socket24.AccountManagerEvent.SYNCHRONIZE));
    }

//==============================================================================
// CLEANUP AND DISPOSAL
//==============================================================================

    /**
     * @private
     */
    com.socket24.AccountManager.prototype.cleanup = function () {
        this.log.info("[ACCOUNT_MANAGER] Cleaning resources.");
        this.removeAllObservedAccounts();
        this.removeAllWatchedAccounts();
        this.setIsWatchingForAccounts(false);
    };

//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.AccountManagerEvent = function (type,
                                                 userID,
                                                 account,
                                                 status) {
        com.socket24.events.Event.call(this, type);

        this.account = account;
        this.userID = userID;
        this.status = status;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.AccountManagerEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.AccountManagerEvent.CREATE_ACCOUNT_RESULT = "CREATE_ACCOUNT_RESULT";
    /** @constant */
    com.socket24.AccountManagerEvent.REMOVE_ACCOUNT_RESULT = "REMOVE_ACCOUNT_RESULT";
    /** @constant */
    com.socket24.AccountManagerEvent.ACCOUNT_ADDED = "ACCOUNT_ADDED";
    /** @constant */
    com.socket24.AccountManagerEvent.ACCOUNT_REMOVED = "ACCOUNT_REMOVED";
    /** @constant */
    com.socket24.AccountManagerEvent.WATCH_FOR_ACCOUNTS_RESULT = "WATCH_FOR_ACCOUNTS_RESULT";
    /** @constant */
    com.socket24.AccountManagerEvent.STOP_WATCHING_FOR_ACCOUNTS_RESULT = "STOP_WATCHING_FOR_ACCOUNTS_RESULT";
    /** @constant */
    com.socket24.AccountManagerEvent.SYNCHRONIZE = "SYNCHRONIZE";

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.AccountManagerEvent.prototype.getStatus = function () {
        return this.status;
    };

    com.socket24.AccountManagerEvent.prototype.getUserID = function () {
        return this.userID;
    };

    com.socket24.AccountManagerEvent.prototype.getAccount = function () {
        return this.account;
    };

    com.socket24.AccountManagerEvent.prototype.toString = function () {
        return "[object AccountManagerEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.AccountSet = function () {
        this.accounts = new com.socket24.utilities.UDictionary();
    };

    com.socket24.AccountSet.prototype.add = function (account) {
        this.accounts[account.getUserID()] = account;
    };

    com.socket24.AccountSet.prototype.remove = function (account) {
        var account = this.accounts[account.getUserID()];
        delete this.accounts[account.getUserID()];
        return account;
    }

    com.socket24.AccountSet.prototype.removeAll = function () {
        this.accounts = new com.socket24.utilities.UDictionary();
    }

    com.socket24.AccountSet.prototype.removeByUserID = function (userID) {
        var account = this.accounts[userID];
        delete this.accounts[userID];
        return account;
    }

    com.socket24.AccountSet.prototype.contains = function (account) {
        return this.accounts[account.getUserID()] != null;
    }

    com.socket24.AccountSet.prototype.containsUserID = function (userID) {
        if (userID == "" || userID == null) {
            return false;
        }
        return this.getByUserID(userID) != null;
    }

    com.socket24.AccountSet.prototype.getByUserID = function (userID) {
        return this.accounts[userID];
    }

    com.socket24.AccountSet.prototype.getByClient = function (client) {
        var account;
        for (var userID in this.accounts) {
            account = this.accounts[userID];
            if (account.getInternalClient() == client) {
                return account;
            }
        }
        return null;
    }

    com.socket24.AccountSet.prototype.getAll = function () {
        return this.accounts;
    }

    com.socket24.AccountSet.prototype.length = function () {
        var count;
        for (var userID in this.accounts) {
            count++;
        }
        return count;
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.AccountSnapshot = function (userID) {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.manifest = null;
        this.method = com.socket24eventName.GET_ACCOUNT_SNAPSHOT;
        this.args   = [userID];
        this.hasStatus = true;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.AccountSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.AccountSnapshot.prototype.setManifest = function (value) {
        this.manifest = value;
    };

    com.socket24.snapshot.AccountSnapshot.prototype.getAttribute = function (name, scope) {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.persistentAttributes.getAttribute(name, scope);
    };

    com.socket24.snapshot.AccountSnapshot.prototype.getAttributes = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.persistentAttributes.getAll();
    };

    com.socket24.snapshot.AccountSnapshot.prototype.getUserID = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.userID;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.filters.BooleanGroup
     */
    com.socket24.filters.AndGroup = function () {
        com.socket24.filters.BooleanGroup.call(this, com.socket24.filters.BooleanGroupType.AND);
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.filters.AndGroup, com.socket24.filters.BooleanGroup);
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.filters.AndGroup
     */
    com.socket24.filters.Filter = function (filterType) {
        com.socket24.filters.AndGroup.call(this);
        this.filterType = filterType;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.filters.Filter, com.socket24.filters.AndGroup);

    com.socket24.filters.Filter.prototype.toXMLString = function () {
        var s = '<f t="' + this.filterType + '">\n';

        var comparison;
        for (var i = 0; i < this.comparisons.length; i++) {
            comparison = this.comparisons[i];
            s += comparison.toXMLString() + "\n";
        }
        s += '</f>';
        return s;
    };
    com.socket24.utilities.ArrayUtil.combine = function () {
        var source = arguments.length == 1 ? arguments[0] : arguments;
        var master = [];

        var array;
        var element;
        for (var i = 0; i < source.length; i++) {
            array = source[i];
            if (com.socket24.utilities.ArrayUtil.isArray(array)) {
                for (var j = 0; j < array.length; j++) {
                    element = array[j];
                    if (com.socket24.utilities.ArrayUtil.indexOf(master, element) == -1) {
                        master.push(element);
                    }
                }
            }
        }
        return master;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.Attribute = function (name,
                                       value,
                                       oldValue,
                                       scope,
                                       byClient) {
        /**
         * @field
         */
        this.name = name;
        /**
         * @field
         */
        this.value = value;
        /**
         * @field
         */
        this.oldValue = oldValue;
        /**
         * @field
         */
        this.scope = (scope == com.socket24.Tokens.GLOBAL_ATTR) || (scope == null) ? null : scope;
        /**
         * @field
         */
        this.byClient = byClient;
    }

    com.socket24.Attribute.prototype.toString = function () {
        return "Attribute: " + (this.scope == null ? "" : this.scope + ".") + this.name + " = " + this.value + "." + " Old value: " + this.oldValue;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The AttributeCollection class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.AttributeEvent.UPDATE}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.DELETE}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.AttributeCollection = function () {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.attributes = new Object();
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.AttributeCollection, com.socket24.events.EventDispatcher);

// =============================================================================
// ATTRIBUTE ASSIGNMENT
// =============================================================================
    /**
     * @private
     */
    com.socket24.AttributeCollection.prototype.setAttribute = function (name, value, scope, byClient) {
        var scopeExists
        var attrExists;
        var oldVal;

        // null scope means global scope
        scope = scope == null ? com.socket24.Tokens.GLOBAL_ATTR : scope;
        // Check if the scope and attr exist already
        scopeExists =  this.attributes.hasOwnProperty(scope);
        attrExists  = scopeExists ? this.attributes[scope].hasOwnProperty(name) : false;

        // Find old value, if any
        if (attrExists) {
            oldVal = this.attributes[scope][name];
            if (oldVal == value) {
                // Attribute value is unchanged, so abort
                return false;
            }
        }

        // Make the scope record if necessary
        if (!scopeExists) {
            this.attributes[scope] = new Object();
        }

        // Set the attribute value
        this.attributes[scope][name] = value;

        // Notify listeners
        this.fireUpdateAttribute(name, value, scope, oldVal, byClient);

        return true;
    };

// =============================================================================
// ATTRIBUTE DELETION
// =============================================================================
    /**
     * @private
     */
    com.socket24.AttributeCollection.prototype.deleteAttribute = function (name, scope, byClient) {
        var lastAttr = true;
        var value;

        // If the attribute exists...
        if (this.attributes.hasOwnProperty(scope)
            && this.attributes[scope].hasOwnProperty(name)) {
            value = this.attributes[scope][name];
            delete this.attributes[scope][name];
            // Check if this is the last attribute. If it is, remove the room scope object.
            for (var p in this.attributes[scope]) {
                lastAttr = false;
                break;
            }
            if (lastAttr) {
                delete this.attributes[scope];
            }

            // Notify listeners
            this.fireDeleteAttribute(name, value, scope, byClient);
            return true;
        }
        return false;
    };

    /**
     * @private
     */
    com.socket24.AttributeCollection.prototype.clear = function () {
        this.attributes = new Object();
    };

// =============================================================================
// ATTRIBUTE RETRIEVAL
// =============================================================================

    com.socket24.AttributeCollection.prototype.getByScope = function (scope) {
        var obj = new Object();

        if (scope == null) {
            for (var attrscope in this.attributes) {
                obj[attrscope] = new Object();
                for (var attrname in this.attributes[attrscope]) {
                    obj[attrscope][attrname] = this.attributes[attrscope][attrname];
                }
            }
        } else {
            for (var name in this.attributes[scope]) {
                obj[name] = this.attributes[scope][name];
            }
        }

        return obj;
    };

    com.socket24.AttributeCollection.prototype.getAttributesNamesForScope = function (scope) {
        var names = new Array();
        for (var name in this.attributes[scope]) {
            names.push(name);
        }
        return names;
    };

    com.socket24.AttributeCollection.prototype.getAll = function () {
        var attrs = new Object();
        for (var attrScope in this.attributes) {
            for (var attrName in this.attributes[attrScope]) {
                attrs[attrScope == com.socket24.Tokens.GLOBAL_ATTR ? attrName : (attrScope + "." + attrName)] = this.attributes[attrScope][attrName];
            }
        }
        return attrs;
    }

    com.socket24.AttributeCollection.prototype.getAttribute = function (attrName, attrScope) {
        // Use the global scope when no scope is specified
        if (attrScope == null) {
            attrScope = com.socket24.Tokens.GLOBAL_ATTR;
        }

        // Find and return the attribute.
        if (this.attributes.hasOwnProperty(attrScope)
            && this.attributes[attrScope].hasOwnProperty(attrName)) {
            return this.attributes[attrScope][attrName];
        } else {
            // No attribute was found, so quit.
            return null;
        }
    };

    com.socket24.AttributeCollection.prototype.getScopes = function () {
        var scopes = new Array();
        for (var scope in this.attributes) {
            scopes.push(scope);
        }
        return scopes;
    };

// =============================================================================
// COLLECTION INSPECTION
// =============================================================================

    com.socket24.AttributeCollection.prototype.contains = function (name, scope) {
        return this.attributes.hasOwnProperty(scope) ? this.attributes[scope].hasOwnProperty(name) : false;
    };

// =============================================================================
// MERGING
// =============================================================================

    /**
     * @private
     */
    com.socket24.AttributeCollection.prototype.add = function (collection) {
        var scopes = collection.getScopes();
        var scope;

        var names;
        var name;

        for (var i = 0; i <= scopes.length; i++) {
            scope = scopes[i];
            names = collection.getAttributesNamesForScope(scope);
            for (var j = 0; j < names.length; j++) {
                name = names[j];
                this.setAttribute(name, collection.getAttribute(name, scope), scope);
            }
        }
    };

    /**
     * @private
     */
    com.socket24.AttributeCollection.prototype.synchronizeScope = function (scope,
                                                                            collection) {
        // Delete all existing attributes that are not in the new collection
        var names = this.getAttributesNamesForScope(scope);
        var name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            if (!collection.contains(name, scope)) {
                this.deleteAttribute(name, scope);
            }
        }

        // Set all new attributes (unchanged attributes are ignored)
        var names = collection.getAttributesNamesForScope(scope);
        for (i = 0; i < names.length; i++) {
            name = names[i];
            this.setAttribute(name, collection.getAttribute(name, scope), scope);
        }
    };

// =============================================================================
// EVENT DISPATCHING
// =============================================================================
    /**
     * @private
     */
    com.socket24.AttributeCollection.prototype.fireUpdateAttribute = function (attrName,
                                                                               attrVal,
                                                                               attrScope,
                                                                               oldVal,
                                                                               byClient) {
        var changedAttr = new com.socket24.Attribute(attrName, attrVal, oldVal, attrScope, byClient);
        var e = new com.socket24.AttributeEvent(com.socket24.AttributeEvent.UPDATE,
            changedAttr);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AttributeCollection.prototype.fireDeleteAttribute = function (attrName,
                                                                               attrValue,
                                                                               attrScope,
                                                                               byClient) {
        var changedAttr = new com.socket24.Attribute(attrName, null, attrValue, attrScope, byClient);
        var e = new com.socket24.AttributeEvent(com.socket24.AttributeEvent.DELETE,
            changedAttr);
        this.dispatchEvent(e);
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.filters.AttributeComparison = function (name,
                                                         value,
                                                         compareType) {
        if (!com.socket24.Validator.isValidAttributeName(name)) {
            throw new Error("Invalid attribute name specified for AttributeComparison: "
                + name);
        }
        this.name = name;
        this.value = value;
        this.compareType = compareType;
    };

    com.socket24.filters.AttributeComparison.prototype.toXMLString = function () {
        return '<a c="' + this.compareType + '"><n><![CDATA[' + this.name + ']]></n><v><![CDATA[' + this.value.toString() + ']]></v></a>';
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.AttributeEvent = function (type,
                                            changedAttr,
                                            status) {
        com.socket24.events.Event.call(this, type);

        this.changedAttr = changedAttr;
        this.status = status;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.AttributeEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.AttributeEvent.UPDATE = "UPDATE";
    /** @constant */
    com.socket24.AttributeEvent.DELETE = "DELETE";
    /** @constant */
    com.socket24.AttributeEvent.DELETE_RESULT = "DELETE_RESULT";
    /** @constant */
    com.socket24.AttributeEvent.SET_RESULT = "SET_RESULT";

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.AttributeEvent.prototype.getChangedAttr = function () {
        return this.changedAttr;
    }

    com.socket24.AttributeEvent.prototype.getStatus = function () {
        return this.status;
    }

    com.socket24.AttributeEvent.prototype.toString = function () {
        return "[object AttributeEvent]";
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.filters.Filter
     */
    com.socket24.filters.AttributeFilter = function () {
        com.socket24.filters.Filter.call(this, "A");
    };


//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.filters.AttributeFilter, com.socket24.filters.Filter);
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.AttributeManager = function (owner,
                                              messageManager,
                                              log) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.attributes = null;
        this.owner = owner;
        this.messageManager = messageManager;
        this.log = log;
        this.setAttributeCollection(new com.socket24.AttributeCollection());
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.AttributeManager, com.socket24.events.EventDispatcher);

//==============================================================================
// DEPENDENCIES
//==============================================================================

    com.socket24.AttributeManager.prototype.getAttributeCollection = function () {
        return this.attributes;
    };

    com.socket24.AttributeManager.prototype.setAttributeCollection = function (value) {
        this.unregisterAttributeListeners();
        this.attributes = value;
        this.registerAttributeListeners();
    };

//==============================================================================
// SERVER-SIDE ASSIGNMENT
//==============================================================================

    com.socket24.AttributeManager.prototype.setAttribute = function (setRequest) {
        this.messageManager.emitSocketMessageObject(setRequest);
    }

//==============================================================================
// SERVER-SIDE DELETION
//==============================================================================

    com.socket24.AttributeManager.prototype.deleteAttribute = function (deleteRequest) {
        this.messageManager.emitSocketMessageObject(deleteRequest);
    }

//==============================================================================
// LOCAL RETRIEVAL
//==============================================================================

    com.socket24.AttributeManager.prototype.getAttribute = function (attrName, attrScope) {
        // Quit if there are no attrbutes.
        if (this.attributes == null) {
            return null;
        } else {
            return this.attributes.getAttribute(attrName, attrScope);
        }
    };

    com.socket24.AttributeManager.prototype.getAttributes = function () {
        return this.attributes.getAll();
    }

    com.socket24.AttributeManager.prototype.getAttributesByScope = function (scope) {
        return this.attributes.getByScope(scope);
    };

//==============================================================================
// LOCAL ASSIGNMENT
//==============================================================================

    /**
     * @private
     */
    com.socket24.AttributeManager.prototype.setAttributeLocal = function (attrName,
                                                                          attrVal,
                                                                          attrScope,
                                                                          byClient) {
        var changed = this.attributes.setAttribute(attrName, attrVal, attrScope, byClient);
        if (!changed) {
            this.log.info(this.owner + " New attribute value for [" + attrName + "] matches old value. Not changed.");
        }
    };

//==============================================================================
// LOCAL REMOVAL
//==============================================================================

    /**
     * @private
     */
    com.socket24.AttributeManager.prototype.removeAttributeLocal = function (attrName,
                                                                             attrScope,
                                                                             byClient) {
        var deleted = this.attributes.deleteAttribute(attrName, attrScope, byClient);
        if (!deleted) {
            this.log.info(owner + " Delete attribute failed for [" + attrName + "]. No such attribute.");
        }
    };

    /**
     * @private
     */
    com.socket24.AttributeManager.prototype.removeAll = function () {
        this.attributes.clear();
    }

//==============================================================================
// EVENT REGISTRATION
//==============================================================================

    com.socket24.AttributeManager.prototype.registerAttributeListeners = function () {
        if (this.attributes != null) {
            // Can't use migrateListeners() here because we need to specify the listener priority (int.MAX_VALUE)
            this.attributes.addEventListener(com.socket24.AttributeEvent.UPDATE, this.updateAttributeListener, this, com.socket24.utilities.integer.MAX_VALUE);
            this.attributes.addEventListener(com.socket24.AttributeEvent.DELETE, this.deleteAttributeListener, this, com.socket24.utilities.integer.MAX_VALUE);
        }
    };

    com.socket24.AttributeManager.prototype.unregisterAttributeListeners = function () {
        if (this.attributes != null) {
            this.attributes.removeEventListener(com.socket24.AttributeEvent.UPDATE, this.updateAttributeListener, this);
            this.attributes.removeEventListener(com.socket24.AttributeEvent.DELETE, this.deleteAttributeListener, this);
        }
    }

//==============================================================================
// EVENT LISTENERS
//==============================================================================

    com.socket24.AttributeManager.prototype.updateAttributeListener = function (e) {
        var attr = e.getChangedAttr();

        this.log.info(this.owner + " Setting attribute ["
            + ((attr.scope == null) ? "" : attr.scope + ".")
            + attr.name + "]. New value: [" + attr.value + "]. Old value: ["
            + attr.oldValue + "].");
        this.owner.dispatchEvent(e);
    };

    com.socket24.AttributeManager.prototype.deleteAttributeListener = function (e) {
        this.owner.dispatchEvent(e);
    }

//==============================================================================
// EVENT DISPATCHING
//==============================================================================

    /**
     * @private
     */
    com.socket24.AttributeManager.prototype.fireSetAttributeResult = function (attrName,
                                                                               attrScope,
                                                                               status) {
        var attr = new com.socket24.Attribute(attrName, null, null, attrScope);

        // Trigger event on listeners.
        var e = new com.socket24.AttributeEvent(com.socket24.AttributeEvent.SET_RESULT,
            attr, status);
        this.owner.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.AttributeManager.prototype.fireDeleteAttributeResult = function (attrName,
                                                                                  attrScope,
                                                                                  status) {
        var attr = new com.socket24.Attribute(attrName, null, null, attrScope);

        // Trigger event on listeners.
        var e = new com.socket24.AttributeEvent(com.socket24.AttributeEvent.DELETE_RESULT,
            attr, status);
        this.owner.dispatchEvent(e);
    };

// =============================================================================
// DISPOSAL
// =============================================================================

    /**
     * @private
     */
    com.socket24.AttributeManager.prototype.dispose = function () {
        this.messageManager = null;
        this.attributes = null;
        this.owner = null;
        this.log = null;
    };
//==============================================================================
//  ATTRIBUTE_OPTIONS CONSTANTS
//==============================================================================
    /** @class
     @private */
    com.socket24.AttributeOptions = new Object();

    /** @private */
    com.socket24.AttributeOptions.FLAG_SHARED     = 1 << 2;
    /** @private */
    com.socket24.AttributeOptions.FLAG_PERSISTENT = 1 << 3;
    /** @private */
    com.socket24.AttributeOptions.FLAG_IMMUTABLE  = 1 << 5;
    /** @private */
    com.socket24.AttributeOptions.FLAG_EVALUATE   = 1 << 8;
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.BannedListSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.bannedList = null;
        this.method = com.socket24eventName.GET_BANNED_LIST_SNAPSHOT;
    }

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.BannedListSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.BannedListSnapshot.prototype.setBannedList = function (value) {
        this.bannedList = value;
    };

    com.socket24.snapshot.BannedListSnapshot.prototype.getBannedList = function () {
        if (!this.bannedList) {
            return null;
        }
        return this.bannedList.slice();
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.utilities.CacheNode = function () {
        /** @field */
        this.next;
        /** @field */
        this.prev;
        /** @field */
        this.key;
        /** @field */
        this.value;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The Client class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.ClientEvent.JOIN_ROOM}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.LEAVE_ROOM}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.OBSERVE_ROOM}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.STOP_OBSERVING_ROOM}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.OBSERVE}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.STOP_OBSERVING}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.OBSERVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.STOP_OBSERVING_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGIN}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGOFF}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.SYNCHRONIZE}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.DELETE}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.UPDATE}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.SET_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.DELETE_RESULT}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.Client = function (clientID,
                                    clientManager,
                                    messageManager,
                                    roomManager,
                                    connectionManager,
                                    server,
                                    log) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.clientID = "";
        this._isSelf = false;
        this.account = null;
        this.disposed = false;

        this.messageManager    = messageManager;
        this.clientManager     = clientManager;
        this.roomManager       = roomManager;
        this.connectionManager = connectionManager;
        this.server            = server;
        this.log               = log;
        this.occupiedRoomIDs   = new Array();
        this.observedRoomIDs   = new Array();
        this.customClients     = new Object();
        this.attributeManager  = new com.socket24.AttributeManager(this, this.messageManager, this.log);
        this.connectionState   = com.socket24.ConnectionState.UNKNOWN;

        this.setClientID(clientID);
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.Client, com.socket24.events.EventDispatcher);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @private */
    com.socket24.Client.FLAG_ADMIN = 1 << 2;

// =============================================================================
// CLIENT ID
// =============================================================================
    com.socket24.Client.prototype.getClientID = function () {
        return this.clientID;
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.setClientID = function (id) {
        if (this.clientID != id) {
            this.clientID = id;
        }
    };

    com.socket24.Client.prototype.isSelf = function () {
        return this._isSelf;
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.setIsSelf = function () {
        this._isSelf = true;
    };

// =============================================================================
// CONNECTION STATUS
// =============================================================================

    com.socket24.Client.prototype.getConnectionState = function () {
        if (this.isSelf()) {
            if (this.disposed
                || this.clientManager.getInternalClient(this.getClientID()) == null) {
                return com.socket24.ConnectionState.NOT_CONNECTED;
            } else {
                return this.account != null ? this.account.getConnectionState() : this.connectionManager.getConnectionState();
            }
        } else {
            if (this.connectionState != com.socket24.ConnectionState.UNKNOWN) {
                return this.connectionState;
            } else if (this.disposed
                || this.clientManager.getInternalClient(this.getClientID()) == null) {
                return com.socket24.ConnectionState.UNKNOWN;
            } else {
                return this.account != null ? this.account.getConnectionState() : com.socket24.ConnectionState.READY;
            }
        }
    };

// Normally, this client's connection state is not assigned directly; it
// it is deduced within getConnectionState(). But when Union
// sends a u103, we know that this client has definitely disconnected from
// the server, and this client object will never be reused, so CoreMessageListener
// permanently assigns its connection state to NOT_CONNECTED.
    com.socket24.Client.prototype.setConnectionState = function (newState) {
        this.connectionState = newState;
    };

// =============================================================================
// ROLES
// =============================================================================
    com.socket24.Client.prototype.isAdmin = function () {
        var rolesAttr = this.getAttribute(Tokens.ROLES_ATTR);
        var roles;
        if (rolesAttr != null) {
            return parseInt(rolesAttr) & com.socket24.Client.FLAG_ADMIN;
        } else {
            this.log.warn("[" + this.toString() + "] Could not determine admin status because the client is not synchronized.");
            return false;
        }
    };

// =============================================================================
// OBSERVATION
// =============================================================================

    com.socket24.Client.prototype.observe = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.OBSERVE_CLIENT, this.clientID);
    };

    com.socket24.Client.prototype.stopObserving = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.STOP_OBSERVING_CLIENT, this.clientID);
    };

// =============================================================================
// KICK / BAN
// =============================================================================

    com.socket24.Client.prototype.kick = function () {
        if (this.getClientID() == null) {
            this.log.warn(this + " Kick attempt failed. Client not currently connected.");
        }
        this.messageManager.emitSocketMessage(com.socket24eventName.KICK_CLIENT, getClientID());
    };

    com.socket24.Client.prototype.ban = function (duration, reason) {
        if (this.getClientID() == null) {
            this.log.warn(this + " Ban attempt failed. Client not currently connected.");
        }
        this.messageManager.emitSocketMessage(com.socket24eventName.BAN, null, getClientID(), duration.toString(), reason);
    };

// =============================================================================
// CUSTOM CLASS MANAGEMENT
// =============================================================================

    com.socket24.Client.prototype.setClientClass = function (scope,
                                                             clientClass) {
        var fallbackClasses = Array.prototype.slice.call(arguments).slice(2);
        if (!this.isSelf()) {
            throw new Error("Custom client class assignment failed for : "
                + clientClass + ". A custom"
                + " class can be set for the current client ("
                + " i.e., ClientManager.self()) only.");
        }

        fallbackClasses.unshift(clientClass);
        var classList = fallbackClasses.join(" ");
        setAttribute(Tokens.CUSTOM_CLASS_ATTR, classList, scope);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.getCustomClient = function (scope) {
        var customClient;

        // If the custom client already exists for the specified scope, return it.
        customClient = this.customClients[scope];
        if (customClient != null) {
            return customClient;
        }

        // Look for a custom class for the given scope, and create a custom client
        if (scope == null) {
            return this.setGlobalCustomClient();
        } else {
            return this.setCustomClientForScope(scope);
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.setGlobalCustomClient = function () {
        var defaultClientClass;
        var globalDefaultClientClass;
        var customClient;

        // If this client has a default custom client class, use it
        defaultClientClass = this.getClientClass(null);
        if (defaultClientClass != null) {
            return this.createCustomClient(defaultClientClass, null);
        }

        // No global class was set on the client, so check for a system-wide default
        globalDefaultClientClass = this.clientManager.getDefaultClientClass();
        if (globalDefaultClientClass == null) {
            // No global custom client class exists
            return null;
        } else {
            // Global default class exists
            return this.createCustomClient(globalDefaultClientClass, null);
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.setCustomClientForScope = function (scope) {
        var theRoom;
        var clientClass;
        var roomDefaultClientClass;
        var globalDefaultClientClass;

        // If this client has a default custom client class, use it
        clientClass = this.getClientClass(scope);
        if (clientClass != null) {
            return this.createCustomClient(clientClass, scope);
        }

        // No class was set on the client for the scope, so check for a room default
        theRoom = this.roomManager.getRoom(scope);
        if (theRoom != null) {
            roomDefaultClientClass = theRoom.getDefaultClientClass();
            if (roomDefaultClientClass != null) {
                return this.createCustomClient(roomDefaultClientClass, scope);
            }
        }

        // No class was set on the room for the scope, so check for a system-wide default
        // If a custom global client already exists, return it.
        var customClient = this.customClients[null];
        if (customClient != null) {
            return customClient;
        } else {
            globalDefaultClientClass = this.clientManager.getDefaultClientClass();
            if (globalDefaultClientClass == null) {
                // No global custom client class exists
                return null;
            } else {
                // Global default class exists
                return this.createCustomClient(globalDefaultClientClass, null);
            }
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.getClientClass = function (scope) {
        var clientClassNames = this.getAttribute(com.socket24.Tokens.CUSTOM_CLASS_ATTR, scope);
        var clientClassList;

        // Convert the custom class names to an array for processing
        if (clientClassNames != null) {
            clientClassList = clientClassNames.split(" ");
        }

        // Search for a matching class definition. The first definition that's
        // found is returned.
        var className;
        if (clientClassList != null) {
            for (var i = 0; i < clientClassList.length; i++) {
                try {
                    var theClass = com.socket24.utilities.resolveMemberExpression(className);
                    if (!theClass instanceof Function) {
                        this.log.debug(this.toString() + ": Definition for client class [" + className + "] is not a constructor function.");
                        continue;
                    }
                    return theClass;
                } catch (e) {
                    this.log.debug(this.toString() + ": No definition found for client class [" + className + "]");
                    continue;
                }
            }
        }
        return null;
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.createCustomClient = function (wrapperClass, scope) {
        var customClient;

        // Wrap the client
        customClient = new wrapperClass();
        this.customClients[scope] = customClient;

        // Do custom client setup
        if (customClient instanceof CustomClient) {
            customClient.setClient(this);
            customClient.init();
            return customClient;
        } else {
            this.log.debug("[CLIENT_MANAGER] Custom client class [" + wrapperClass + "] does not "
                + " extend CustomClient. Assuming specified class will manually "
                + " compose its own Client instance for client ID: " + clientID
                + ". See Client.setClientClass().");
            return customClient;
        }
    };

// =============================================================================
// ROOM MANAGEMENT
// =============================================================================

    /**
     * @private
     */
    com.socket24.Client.prototype.removeOccupiedRoomID = function (roomID) {
        if (this.isInRoom(roomID) && roomID != null) {
            this.occupiedRoomIDs.splice(com.socket24.utilities.ArrayUtil.indexOf(this.occupiedRoomIDs, roomID), 1);
            return true;
        } else {
            return false;
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.removeObservedRoomID = function (roomID) {
        if (this.isObservingRoom(roomID) && roomID != null) {
            this.observedRoomIDs.splice(com.socket24.utilities.ArrayUtil.indexOf(this.observedRoomIDs, roomID), 1);
            return true;
        } else {
            return false;
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.addOccupiedRoomID = function (roomID) {
        if (!this.isInRoom(roomID) && roomID != null) {
            this.log.info(this.toString() + " added occupied room ID [" + roomID + "].");
            this.occupiedRoomIDs.push(roomID);
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.addObservedRoomID = function (roomID) {
        if (!this.isObservingRoom(roomID) && roomID != null) {
            this.log.info("Client [" + this.getClientID() + "] added observed room ID [" + roomID + "].");
            this.observedRoomIDs.push(roomID);
        }
    };

    com.socket24.Client.prototype.isInRoom = function (roomID) {
        return com.socket24.utilities.ArrayUtil.indexOf(this.getOccupiedRoomIDs(), roomID) != -1;
    };

    com.socket24.Client.prototype.isObservingRoom = function (roomID) {
        return com.socket24.utilities.ArrayUtil.indexOf(this.getObservedRoomIDs(), roomID) != -1;
    };

    com.socket24.Client.prototype.getOccupiedRoomIDs = function () {
        var ids;
        if (this.clientManager.isObservingClient(this.getClientID())) {
            // This client is under observation, so its occupiedRoomIDs array is
            // 100% accurate.
            return this.occupiedRoomIDs == null ? [] : this.occupiedRoomIDs.slice(0);
        } else {
            // This client is not under observation, so the current client can only
            // deduce this client's occupied room list based on its current sphere of awareness.
            ids = [];
            var knownRooms = this.roomManager.getRooms();
            var numKnownRooms = knownRooms.length;
            var room;
            for (var i = 0; i < numKnownRooms; i++) {
                room = knownRooms[i];
                if (room.clientIsInRoom(this.getClientID())) {
                    ids.push(room.getRoomID());
                }
            }
            return ids;
        }
    };

    com.socket24.Client.prototype.getObservedRoomIDs = function () {
        var ids;
        if (this.clientManager.isObservingClient(this.getClientID())) {
            // This client is under observation, so its occupiedRoomIDs array is
            // 100% accurate.
            return this.observedRoomIDs == null ? [] : this.observedRoomIDs.slice(0);
        } else {
            // This client is not under observation, so the current client can only
            // deduce this client's occupied room list based on its current sphere of awareness.
            ids = [];
            var knownRooms = this.roomManager.getRooms();
            var numKnownRooms = knownRooms.length;
            var room;
            for (var i = 0; i < numKnownRooms; i++) {
                room = knownRooms[i];
                if (room.clientIsObservingRoom(this.getClientID())) {
                    ids.push(room.getRoomID());
                }
            }
            return ids;
        }
    };

    com.socket24.Client.prototype.getUpdateLevels = function (roomID) {
        var levels;
        var levelsAttr = this.getAttribute("_UL", roomID);

        if (levelsAttr != null) {
            levels = new com.socket24.UpdateLevels();
            levels.fromInt(parseInt(levelsAttr));
            return levels;
        } else {
            return null;
        }
    };

// =============================================================================
// BUILT-IN ATTRIBUTE RETRIEVAL
// =============================================================================

    com.socket24.Client.prototype.getIP = function () {
        return this.getAttribute("_IP");
    };

    com.socket24.Client.prototype.getConnectTime = function () {
        var ct = this.getAttribute("_CT");
        return ct == null ? NaN : parseFloat(ct);
    };

    com.socket24.Client.prototype.getPing = function () {
        var ping = this.getAttribute("_PING");
        return ping == null ? -1 : parseInt(ping);
    };

    com.socket24.Client.prototype.getTimeOnline = function () {
        return this.server == null ? NaN : this.server.getServerTime() - this.getConnectTime();
    };

// =============================================================================
// MESSAGING
// =============================================================================

    com.socket24.Client.prototype.sendMessage = function (messageName) {
        if (this.clientManager == null) {
            return;
        }
        // Delegate to ClientManager
        var rest = Array.prototype.slice.call(arguments).slice(1);
        var args = [messageName,
            [this.getClientID()],
            null];
        this.clientManager.sendMessage.apply(this.clientManager, args.concat(rest));
    };

// =============================================================================
// ATTRIBUTES: PUBLIC API
// =============================================================================
    com.socket24.Client.prototype.setAttribute = function (attrName,
                                                           attrValue,
                                                           attrScope,
                                                           isShared,
                                                           evaluate) {
        attrScope = attrScope == undefined ? null : attrScope;
        isShared = isShared == undefined ? true : isShared;
        evaluate = evaluate == undefined ? false : evaluate;

        // Create an integer to hold the attribute options.
        var attrOptions = (isShared     ? com.socket24.AttributeOptions.FLAG_SHARED     : 0)
            | (evaluate     ? com.socket24.AttributeOptions.FLAG_EVALUATE   : 0);
        // Make the SetClientAttr UPC first so inputs are validated
        var setClientAttr = new com.socket24eventName.SetClientAttr(attrName, attrValue, attrOptions, attrScope, this.getClientID());

        // Set the attribute locally now, unless:
        // -it is another client's attribute
        // -it is the current client's attribute, and the value has changed
        if (!(!this.isSelf() || evaluate)) {
            // Set the attribute locally
            this.attributeManager.setAttributeLocal(attrName, attrValue, attrScope, this);
        }

        // Set the attribute on the server.
        this.messageManager.emitSocketMessageObject(setClientAttr);
    };

    com.socket24.Client.prototype.deleteAttribute = function (attrName, attrScope) {
        var deleteRequest = new com.socket24eventName.RemoveClientAttr(this.getClientID(), null, attrName, attrScope);
        this.attributeManager.deleteAttribute(deleteRequest);
    };

    com.socket24.Client.prototype.getAttribute = function (attrName, attrScope) {
        return this.attributeManager.getAttribute(attrName, attrScope);
    };

    com.socket24.Client.prototype.getAttributes = function () {
        return this.attributeManager.getAttributes();
    };

    com.socket24.Client.prototype.getAttributesByScope = function (scope) {
        return this.attributeManager.getAttributesByScope(scope);
    };

// =============================================================================
// SYNCHRONIZATION
// =============================================================================

    /**
     * @private
     */
    com.socket24.Client.prototype.synchronize = function (clientManifest) {
        var scopes;
        this.synchronizeOccupiedRoomIDs(clientManifest.occupiedRoomIDs);
        this.synchronizeObservedRoomIDs(clientManifest.observedRoomIDs);

        // Synchronize Client attributes
        scopes = clientManifest.transientAttributes.getScopes();
        for (var i = scopes.length; --i >= 0;) {
            this.attributeManager.getAttributeCollection().synchronizeScope(scopes[i], clientManifest.transientAttributes);
        }
        // Synchronize UserAccount attributes
        if (this.account != null) {
            scopes = clientManifest.persistentAttributes.getScopes();
            for (i = scopes.length; --i >= 0;) {
                this.account.getAttributeManager().getAttributeCollection().synchronizeScope(scopes[i], clientManifest.persistentAttributes);
            }
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.synchronizeOccupiedRoomIDs = function (newOccupiedRoomIDs) {
        if (newOccupiedRoomIDs == null) {
            // Nothing to synchronize
            return;
        }

        // Remove any rooms that are not in the new list
        var roomID;
        for (var i = this.occupiedRoomIDs.length; --i >= 0;) {
            roomID = this.occupiedRoomIDs[i];
            if (com.socket24.utilities.ArrayUtil.indexOf(newOccupiedRoomIDs, roomID) == -1) {
                this.removeOccupiedRoomID(roomID);
            }
        }

        // Add any rooms that are not in the old list (existing room IDs are ignored)
        for (i = newOccupiedRoomIDs.length; --i >= 0;) {
            roomID = newOccupiedRoomIDs[i];
            this.addOccupiedRoomID(roomID);
        }
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.synchronizeObservedRoomIDs = function (newObservedRoomIDs) {
        if (newObservedRoomIDs == null) {
            // Nothing to synchronize
            return;
        }
        // Remove any rooms that are not in the new list
        var roomID;
        for (var i = this.observedRoomIDs.length; --i >= 0;) {
            roomID = this.observedRoomIDs[i];
            if (com.socket24.utilities.ArrayUtil.indexOf(newObservedRoomIDs, roomID) == -1) {
                this.removeObservedRoomID(roomID);
            }
        }

        // Add any rooms that are not in the old list (existing room IDs are ignored)
        for (i = newObservedRoomIDs.length; --i >= 0;) {
            roomID = newObservedRoomIDs[i];
            this.addObservedRoomID(roomID);
        }
    };

// =============================================================================
// DEPENDENCIES
// =============================================================================

    /**
     * @private
     */
    com.socket24.Client.prototype.getAttributeManager = function () {
        return this.attributeManager;
    };

    com.socket24.Client.prototype.getClientManager = function () {
        return this.clientManager;
    };

    com.socket24.Client.prototype.getAccount = function () {
        return this.account;
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.setAccount = function (value) {
        if (value == null) {
            this.account = null;
        } else {
            if (this.account != value) {
                this.account = value;
                this.account.setClient(this);
            }
        }
    };

// =============================================================================
// TOSTRING
// =============================================================================

    com.socket24.Client.prototype.toString = function () {
        return "[CLIENT clientID: " + this.getClientID() + ", userID: " + (this.account == null ? "" : this.account.getUserID())  + "]";
    };

// =============================================================================
// EVENT DISPATCHING
// =============================================================================

    /**
     * @private
     */
    com.socket24.Client.prototype.fireJoinRoom = function (room, roomID) {
        this.log.debug(this + " triggering ClientEvent.JOIN_ROOM event.");
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.JOIN_ROOM,
            null, room, roomID, this);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireLeaveRoom = function (room, roomID) {
        this.log.debug(this + " triggering ClientEvent.LEAVE_ROOM event.");
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.LEAVE_ROOM,
            null, room, roomID, this);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireObserveRoom = function (room, roomID) {
        this.log.debug(this + " triggering ClientEvent.OBSERVE_ROOM event.");
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.OBSERVE_ROOM,
            null, room, roomID, this);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireStopObservingRoom = function (room, roomID) {
        this.log.debug(this + " triggering ClientEvent.STOP_OBSERVING_ROOM event.");
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.STOP_OBSERVING_ROOM,
            null, room, roomID, this);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireObserve = function () {
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.OBSERVE, null, null, null, this);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireStopObserving = function () {
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.STOP_OBSERVING, null, null, null, this);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireObserveResult = function (status) {
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.OBSERVE_RESULT,
            null, null, null, this, status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireStopObservingResult = function (status) {
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.STOP_OBSERVING_RESULT,
            null, null, null, this, status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireLogin = function () {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGIN,
            com.socket24.Status.SUCCESS, this.getAccount().getUserID(), this.getClientID());
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireLogoff = function (userID) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGOFF,
            com.socket24.Status.SUCCESS, userID, this.getClientID());
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Client.prototype.fireSynchronize = function () {
        // Trigger event on listeners.
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.SYNCHRONIZE, null, null, null, this);
        this.dispatchEvent(e);
    };

// =============================================================================
// DISPOSAL
// =============================================================================

    com.socket24.Client.prototype.dispose = function () {
        this.occupiedRoomIDs = null;
        this.attributeManager.dispose();
        this.attributeManager = null;
        this.clientID = null;
        this.log = null;
        this.account = null;
        this.customClients = null;
        this.messageManager = null;
        this.clientManager = null;
        this.roomManager = null;
        this.server = null;
        this.disposed = true;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.ClientCountSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.count = 0;
        this.method = com.socket24eventName.GET_CLIENTCOUNT_SNAPSHOT;
        this.hasStatus = true;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.ClientCountSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.ClientCountSnapshot.prototype.setCount = function (value) {
        this.count = value;
    };

    com.socket24.snapshot.ClientCountSnapshot.prototype.getCount = function () {
        return this.count;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.ClientEvent = function (type,
                                         changedAttr,
                                         room,
                                         roomID,
                                         client,
                                         status,
                                         clientID) {
        com.socket24.events.Event.call(this, type);

        this.changedAttr = changedAttr;
        this.room = room;
        this.roomID = roomID;
        this.client = client;
        this.status = status;
        this.clientID = clientID;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.ClientEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    /** @constant */
    com.socket24.ClientEvent.JOIN_ROOM = "JOIN_ROOM";
    /** @constant */
    com.socket24.ClientEvent.LEAVE_ROOM = "LEAVE_ROOM";
    /** @constant */
    com.socket24.ClientEvent.OBSERVE_ROOM = "OBSERVE_ROOM";
    /** @constant */
    com.socket24.ClientEvent.STOP_OBSERVING_ROOM = "STOP_OBSERVING_ROOM";
    /** @constant */
    com.socket24.ClientEvent.OBSERVE = "OBSERVE";
    /** @constant */
    com.socket24.ClientEvent.STOP_OBSERVING = "STOP_OBSERVING";
    /** @constant */
    com.socket24.ClientEvent.OBSERVE_RESULT = "OBSERVE_RESULT";
    /** @constant */
    com.socket24.ClientEvent.STOP_OBSERVING_RESULT = "STOP_OBSERVING_RESULT";
    /** @constant */
    com.socket24.ClientEvent.SYNCHRONIZE = "SYNCHRONIZE";

    com.socket24.ClientEvent.prototype.getClient = function () {
        return this.client;
    };

    com.socket24.ClientEvent.prototype.getClientID = function () {
        if (this.client != null) {
            return this.client.getClientID();
        } else {
            return this.clientID;
        }
    };

    com.socket24.ClientEvent.prototype.getRoom = function () {
        return this.room;
    };

    com.socket24.ClientEvent.prototype.getRoomID = function () {
        return this.roomID;
    }

    com.socket24.ClientEvent.prototype.getStatus = function () {
        return this.status;
    };

    com.socket24.ClientEvent.prototype.toString = function () {
        return "[object ClientEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.ClientListSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.clientList;
        this.method = com.socket24eventName.GET_CLIENTLIST_SNAPSHOT;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.ClientListSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.ClientListSnapshot.prototype.setClientList = function (value) {
        this.clientList = value;
    };

    com.socket24.snapshot.ClientListSnapshot.prototype.getClientList = function () {
        if (!this.clientList) {
            return null;
        }
        return this.clientList.slice();
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The ClientManager class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.CREATE_ACCOUNT_RESULT}</li>

     <li class="fixedFont">{@link com.socket24.ClientEvent.OBSERVE}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.STOP_OBSERVING}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.CLIENT_CONNECTED}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.CLIENT_DISCONNECTED}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_CLIENTS_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.WATCH_FOR_CLIENTS_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.OBSERVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientEvent.STOP_OBSERVING_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.KICK_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.BAN_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.UNBAN_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.WATCH_FOR_BANNED_ADDRESSES_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.ADDRESS_BANNED}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.ADDRESS_UNBANNED}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.SYNCHRONIZE_BANLIST}</li>
     <li class="fixedFont">{@link com.socket24.ClientManagerEvent.SYNCHRONIZE}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.ClientManager = function (roomManager,
                                           accountManager,
                                           connectionManager,
                                           messageManager,
                                           server,
                                           log) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.selfReference = null;
        this.defaultClientClass = null;
        this.lifetimeClientsRequested = 0;

        this._isWatchingForClients;
        this._isWatchingForUsers;
        this._isWatchingForBannedAddresses;

        this.watchedClients  = new com.socket24.ClientSet();
        this.observedClients = new com.socket24.ClientSet();
        this.bannedAddresses = [];
        this.clientCache     = new com.socket24.utilities.LRUCache(5000);

        this.roomManager       = roomManager;
        this.accountManager    = accountManager;
        this.connectionManager = connectionManager;
        this.messageManager    = messageManager;
        this.server            = server;
        this.log               = log;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.ClientManager, com.socket24.events.EventDispatcher);

//==============================================================================
// CLIENT OBJECT CREATION AND ACCESS
//==============================================================================

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.requestClient = function (clientID) {
        var client;

        if (clientID == null || clientID === "") {
            throw new Error("[CLIENT_MANAGER] requestClient() called with empty clientID.");
        }

        client = this.getInternalClient(clientID);

        // If the client isn't already known
        if (client === null) {
            client = new com.socket24.Client(clientID, this, this.messageManager, this.roomManager, this.connectionManager, this.server, this.log);
            this.lifetimeClientsRequested++;
            this.clientCache.put(clientID, client);
        }

        return client;
    }

    com.socket24.ClientManager.prototype.getClient = function (clientID, scope) {
        var theClient;
        var theCustomClient;

        if (clientID === "" || clientID == null) {
            throw new Error("ClientManager.getClient() failed. Client ID must not be null or the" +
                " empty string.");
        }

        theClient = this.getInternalClient(clientID);
        if (theClient === null) {
            this.log.debug("[CLIENT_MANAGER] getClient() called for unknown client ID ["
                + clientID + "].");
            return null;
        } else {
            theCustomClient = theClient.getCustomClient(scope);
            return theCustomClient === null ? theClient : theCustomClient;
        }
    };

    com.socket24.ClientManager.prototype.getClients = function () {
        // Get all internal clients
        var clients = this.getInternalClients();
        var clientsList  = new Array();
        var customClient;

        // Replace internal clients with custom clients where available
        var client;
        for (var clientID in clients) {
            client = clients[clientID];
            customClient = client.getCustomClient(null);
            if (customClient != null) {
                clientsList.push(customClient);
            } else {
                clientsList.push(client);
            }
        }
        return clientsList;
    }

    com.socket24.ClientManager.prototype.getInternalClients = function () {
        var clients = com.socket24.utilities.ObjectUtil.combine(this.roomManager.getAllClients(),
            this.accountManager.getClientsForObservedAccounts(),
            this.observedClients.getAll(),
            this.watchedClients.getAll());
        if (this.selfReference != null) {
            clients[this.selfReference.getClientID()] = this.selfReference;
        }
        return clients;
    };

    com.socket24.ClientManager.prototype.getInternalClient = function (clientID) {
        var theClient;

        // Error checking
        if (clientID === "" || clientID == null) {
            throw new Error("[CLIENT_MANAGER] this.getInternalClient() failed. Client ID must not be null or the" +
                " empty string.");
        }

        theClient = this.clientCache.get(clientID);

        if (theClient != null) {
            return theClient;
        } else {
            // Find the client...

            // Look in rooms
            var clients = this.roomManager.getAllClients();
            theClient = clients[clientID];
            if (theClient != null) {
                this.clientCache.put(clientID, theClient);
                return theClient;
            }

            // Look in observed accounts
            clients = this.accountManager.getClientsForObservedAccounts();
            theClient = clients[clientID];
            if (theClient != null) {
                this.clientCache.put(clientID, theClient);
                return theClient;
            }

            // Look in observed clients
            theClient = this.observedClients.getByClientID(clientID);
            if (theClient != null) {
                this.clientCache.put(clientID, theClient);
                return theClient;
            }

            // Look in watched clients
            theClient = this.watchedClients.getByClientID(clientID);
            if (theClient != null) {
                this.clientCache.put(clientID, theClient);
                return theClient;
            }
        }

        // Client not found
        return null;
    }

    com.socket24.ClientManager.prototype.getClientByUserID = function (userID, scope) {
        var theClient;
        var theCustomClient;
        var account;

        if (userID === "" || userID == null) {
            throw new Error("ClientManager.getClientByUserID() failed. User ID must not be null or the" +
                " empty string.");
        }

        // Search for the client in all known clients
        var client;
        var clients = this.getInternalClients();
        for (var clientID in clients) {
            client = clients[clientID];
            account = client.getAccount();
            if (account != null && account.getUserID() === userID) {
                theClient = client;
                break;
            }
        }

        if (theClient === null) {
            this.log.debug("[CLIENT_MANAGER] getClientByUserID() called for unknown user ID ["
                + userID + "].");
            return null;
        } else {
            theCustomClient = theClient.getCustomClient(scope);
            return theCustomClient === null ? theClient : theCustomClient;
        }
    };

    com.socket24.ClientManager.prototype.getClientByAttribute  = function (attributeName,
                                                                           attributeValue,
                                                                           attributeScope,
                                                                           roomScope) {
        var theCustomClient;

        // Validate
        if (attributeName == null || attributeName === "") {
            return null;
        }

        // Search for the client in all known clients
        var client;
        var clients = this.getInternalClients();
        for (var clientID in clients) {
            client = clients[clientID];
            if (client.getAttribute(attributeName, attributeScope)
                === attributeValue) {
                theCustomClient = client.getCustomClient(roomScope);
                return theCustomClient === null ? client : theCustomClient;
            }
        }
        return null;
    };

    com.socket24.ClientManager.prototype.clientIsKnown = function (clientID) {
        return this.getInternalClients()[clientID] !== null;
    };

// =============================================================================
// WATCHED CLIENTS
// =============================================================================

    com.socket24.ClientManager.prototype.watchForClients = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.WATCH_FOR_CLIENTS);
    };

    com.socket24.ClientManager.prototype.stopWatchingForClients = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.STOP_WATCHING_FOR_CLIENTS);
    };

    com.socket24.ClientManager.prototype.isWatchingForClients = function () {
        return this._isWatchingForClients;
    };

    com.socket24.ClientManager.prototype.hasWatchedClient = function (clientID) {
        return this.watchedClients.containsClientID(clientID);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.setIsWatchingForClients = function (value) {
        this._isWatchingForClients = value;
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.addWatchedClient = function (client) {
        var customClient = client.getCustomClient(null);
        this.watchedClients.add(client);
        this.fireClientConnected(customClient === null ? client : customClient);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.removeWatchedClient = function (clientID) {
        this.watchedClients.removeByClientID(clientID);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.removeAllWatchedClients = function () {
        this.watchedClients.removeAll();
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.deserializeWatchedClients = function (ids) {
        var idList = ids.split(com.socket24.Tokens.RS);
        var idHash = new Object();
        var localClients = this.watchedClients.getAll();
        var len = idList.length;
        var theClient;
        var accountID;

        // Client list received, so set isWatchingForClients now, otherwise, code
        // with side-effects may take action against the clients being added
        this.setIsWatchingForClients(true);

        // Generate a hash of clientID keys to accountID values
        for (var i = len-2; i >= 0; i-=2) {
            idHash[idList[i]] = idList[i+1];
        }

        // Remove all local clients that are not in the new list from the server
        var clientStillExists;
        for (var clientID in localClients) {
            if (!idHash.hasOwnProperty(clientID)) {
                // For best performance, use direct access rather than removeByClientID()
                delete localClients[clientID];
            }
        }

        // Add all new clients that are not in the local set
        for (clientID in idHash) {
            if (clientID != "") {
                if (!this.watchedClients.containsClientID(clientID)) {
                    theClient = this.requestClient(clientID);
                    accountID = idHash[clientID];
                    if (accountID != "") {
                        theClient.setAccount(this.accountManager.requestAccount(accountID));
                    }
                    this.addWatchedClient(theClient);
                }
            } else {
                throw new Error("[CLIENT_MANAGER] Received empty client id in client list (u101).");
            }
        }

        this.fireSynchronize();
    };

// =============================================================================
// OBSERVED CLIENTS
// =============================================================================

    com.socket24.ClientManager.prototype.observeClient = function (clientID) {
        this.messageManager.emitSocketMessage(com.socket24eventName.OBSERVE_CLIENT, clientID);
    };

    com.socket24.ClientManager.prototype.isObservingClient = function (clientID) {
        return this.observedClients.containsClientID(clientID);
    }

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.addObservedClient = function (client) {
        var customClient = client.getCustomClient(null);
        this.observedClients.add(client);
        this.fireObserveClient(customClient === null ? client : customClient);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.removeObservedClient = function (clientID) {
        var client = this.observedClients.removeByClientID(clientID);
        var customClient;
        if (client != null) {
            customClient = client.getCustomClient(null);
            this.fireStopObservingClient(customClient === null ? client : customClient);
        }
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.removeAllObservedClients = function () {
        this.observedClients.removeAll();
    };

//==============================================================================
// CLIENT ATTRIBUTE ACCESS
//==============================================================================

    com.socket24.ClientManager.prototype.getAttributeForClients = function (clientIDs,
                                                                            attrName,
                                                                            attrScope) {
        var clientAttributes = new Array();
        var thisClient;

        for (var i = 0; i < clientIDs.length; i++) {
            thisClient = this.getInternalClient(clientIDs[i]);
            if (thisClient != null) {
                clientAttributes.push({clientID: clientIDs[i],
                    value: thisClient.getAttribute(attrName, attrScope)});
            } else {
                this.log.debug("[CLIENT_MANAGER] Attribute retrieval failed during "
                    + " getAttributeForClients(). Unknown client ID [" + clientIDs[i] + "]");
            }
        }
        return clientAttributes;
    };

//==============================================================================
// CUSTOM CLIENT MANAGEMENT
//==============================================================================

    com.socket24.ClientManager.prototype.setDefaultClientClass = function (defaultClass) {
        this.defaultClientClass = defaultClass;
    };

    com.socket24.ClientManager.prototype.getDefaultClientClass = function () {
        return this.defaultClientClass;
    };

//==============================================================================
// CURRENT CLIENT ASSIGNMENT AND ACCESS
//==============================================================================

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.self = function () {
        return this.selfReference;
    }

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.setSelf = function (client) {
        this.selfReference = client;
        client.setIsSelf();
    }

//==============================================================================
// CLIENT MESSAGING
//==============================================================================

    com.socket24.ClientManager.prototype.sendMessage = function (messageName,
                                                                 clientIDs,
                                                                 filters) {
        var rest = Array.prototype.slice.call(arguments).slice(3);

        // An array of arguments to send to the server.
        var args;

        // Can't continue without a valid methodName.
        if (messageName == null || messageName == "") {
            this.log.warn("[CLIENT_MANAGER] sendMessage() failed. No messageName supplied.");
            return;
        }

        // Send the UPC.
        args = [com.socket24eventName.SEND_MESSAGE_TO_CLIENTS,
            messageName,
            clientIDs.join(com.socket24.Tokens.RS),
            filters != null ? filters.toXMLString() : ""];
        this.messageManager.emitSocketMessage.apply(this.messageManager, args.concat(rest));
    };

// =============================================================================
// BAN / UNBAN / KICK
// =============================================================================

    com.socket24.ClientManager.prototype.ban = function (address, duration, reason) {
        this.messageManager.emitSocketMessage(com.socket24eventName.BAN, address, null, duration.toString(), reason);
    };

    com.socket24.ClientManager.prototype.unban = function (address) {
        this.messageManager.emitSocketMessage(com.socket24eventName.UNBAN, address);
    };

    com.socket24.ClientManager.prototype.kickClient = function (clientID) {
        if (clientID == null || clientID == "") {
            this.log.warn("[CLIENT_MANAGER] Kick attempt failed. No clientID supplied.");
        }
        this.messageManager.emitSocketMessage(com.socket24eventName.KICK_CLIENT, clientID);
    }

// =============================================================================
// WATCH BANNED ADDRESSES
// =============================================================================

    com.socket24.ClientManager.prototype.watchForBannedAddresses = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.WATCH_FOR_BANNED_ADDRESSES);
    };

    com.socket24.ClientManager.prototype.stopWatchingForBannedAddresses = function () {
        this.messageManager.emitSocketMessage(com.socket24eventName.STOP_WATCHING_FOR_BANNED_ADDRESSES);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.setWatchedBannedAddresses = function (bannedList) {
        this.bannedAddresses = bannedList;
        this.fireSynchronizeBanlist();
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.addWatchedBannedAddress = function (address) {
        this.bannedAddresses.push(address);
        this.fireAddressBanned(address);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.removeWatchedBannedAddress = function (address) {
        var idx = com.socket24.util.ArrayUtil.indexOf(bannedAddresses, address);
        if (idx === -1) {
            this.log.warn("[CLIENT_MANAGER] Request to remove watched banned address failed."
                + " Address not found.");
        }
        this.bannedAddresses.splice(idx, 1);
        this.fireAddressUnbanned(address);
    }

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.setIsWatchingForBannedAddresses = function (value) {
        this._isWatchingForBannedAddresses = value;
    };

    com.socket24.ClientManager.prototype.isWatchingForBannedAddresses = function () {
        return this._isWatchingForBannedAddresses;
    };

    com.socket24.ClientManager.prototype.getBannedAddresses = function () {
        return this.bannedAddresses.slice(0);
    };

//==============================================================================
// STATISTICS
//==============================================================================

    com.socket24.ClientManager.prototype.getLifetimeNumClientsKnown = function () {
        // -1 for each "ready" state the connection has achieved because we don't
        // count the current client ("self")
        return this.lifetimeClientsRequested-this.connectionManager.getReadyCount();
    };

    com.socket24.ClientManager.prototype.getNumClients = function () {
        return com.socket24.utilities.ObjectUtil.length(this.getInternalClients());
    };

    com.socket24.ClientManager.prototype.getNumClientsOnServer = function () {
        return this.watchedClients.length();
    }

//==============================================================================
// EVENT DISPATCHING
//==============================================================================

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireObserveClient = function (client) {
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.OBSERVE, null, null, null, client);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireStopObservingClient = function (client) {
        var e = new com.socket24.ClientEvent(com.socket24.ClientEvent.STOP_OBSERVING, null, null, null, client);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireClientConnected = function (client) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.CLIENT_CONNECTED,
            client.getClientID(), client));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireClientDisconnected = function (client) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.CLIENT_DISCONNECTED,
            client.getClientID(), client));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireStopWatchingForClientsResult = function (status) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_CLIENTS_RESULT,
            null, null, null, status));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireWatchForClientsResult = function (status) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.WATCH_FOR_CLIENTS_RESULT,
            null, null, null, status));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireObserveClientResult = function (clientID, status) {
        this.dispatchEvent(new com.socket24.ClientEvent(com.socket24.ClientEvent.OBSERVE_RESULT,
            null, null, null, this.getClient(clientID), status, clientID));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireStopObservingClientResult = function (clientID, status) {
        this.dispatchEvent(new com.socket24.ClientEvent(com.socket24.ClientEvent.STOP_OBSERVING_RESULT,
            null, null, null, this.getClient(clientID), status, clientID));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireKickClientResult = function (clientID, status) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.KICK_RESULT,
            clientID, null, null, status));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireBanClientResult = function (address, clientID, status) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.BAN_RESULT,
            clientID, null, address, status));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireUnbanClientResult = function (address, status) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.UNBAN_RESULT,
            null, null, address, status));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireWatchForBannedAddressesResult = function (status) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.WATCH_FOR_BANNED_ADDRESSES_RESULT,
            null, null, null, status));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireStopWatchingForBannedAddressesResult = function (status) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT,
            null, null, null, status));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireAddressBanned = function (address) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.ADDRESS_BANNED,
            null, null, address));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireAddressUnbanned = function (address) {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.ADDRESS_UNBANNED,
            null, null, address));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireSynchronizeBanlist = function () {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.SYNCHRONIZE_BANLIST));
    };

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.fireSynchronize = function () {
        this.dispatchEvent(new com.socket24.ClientManagerEvent(com.socket24.ClientManagerEvent.SYNCHRONIZE));
    };

//==============================================================================
// CLEANUP AND DISPOSAL
//==============================================================================

    /**
     * @private
     */
    com.socket24.ClientManager.prototype.cleanup = function () {
        this.log.info("[CLIENT_MANAGER] Cleaning resources.");
        this.selfReference = null;
        this.removeAllObservedClients();
        this.removeAllWatchedClients();
        this.setIsWatchingForClients(false);
    };

    com.socket24.ClientManager.prototype.dispose = function () {
        this.log.info("[CLIENT_MANAGER] Disposing resources.");
        this.watchedClients = null;
        this.observedClients = null;
        this.defaultClientClass = null;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.ClientManagerEvent = function (type,
                                                clientID,
                                                client,
                                                address,
                                                status) {
        com.socket24.events.Event.call(this, type);

        this.clientID = clientID;
        this.client   = client;
        this.address  = address;
        this.status   = status;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.ClientManagerEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    /** @constant */
    com.socket24.ClientManagerEvent.WATCH_FOR_CLIENTS_RESULT = "WATCH_FOR_CLIENTS_RESULT";
    /** @constant */
    com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_CLIENTS_RESULT = "STOP_WATCHING_FOR_CLIENTS_RESULT";
    /** @constant */
    com.socket24.ClientManagerEvent.CLIENT_DISCONNECTED = "CLIENT_DISCONNECTED";
    /** @constant */
    com.socket24.ClientManagerEvent.CLIENT_CONNECTED = "CLIENT_CONNECTED";
    /** @constant */
    com.socket24.ClientManagerEvent.KICK_RESULT = "KICK_RESULT";
    /** @constant */
    com.socket24.ClientManagerEvent.BAN_RESULT = "BAN_RESULT";
    /** @constant */
    com.socket24.ClientManagerEvent.UNBAN_RESULT = "UNBAN_RESULT";
    /** @constant */
    com.socket24.ClientManagerEvent.WATCH_FOR_BANNED_ADDRESSES_RESULT = "WATCH_FOR_BANNED_ADDRESSES_RESULT";
    /** @constant */
    com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT = "STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT";
    /** @constant */
    com.socket24.ClientManagerEvent.ADDRESS_BANNED = "ADDRESS_BANNED";
    /** @constant */
    com.socket24.ClientManagerEvent.ADDRESS_UNBANNED = "ADDRESS_UNBANNED";
    /** @constant */
    com.socket24.ClientManagerEvent.SYNCHRONIZE_BANLIST = "SYNCHRONIZE_BANLIST";
    /** @constant */
    com.socket24.ClientManagerEvent.SYNCHRONIZE = "SYNCHRONIZE";

    com.socket24.ClientManagerEvent.prototype.getClientID = function () {
        return this.clientID;
    };

    com.socket24.ClientManagerEvent.prototype.getClient = function () {
        return this.client;
    };

    com.socket24.ClientManagerEvent.prototype.getAddress = function () {
        return this.address;
    };

    com.socket24.ClientManagerEvent.prototype.getStatus = function () {
        return this.status;
    };

    com.socket24.ClientManagerEvent.prototype.toString = function () {
        return "[object ClientManagerEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    com.socket24.ClientManifest = function () {
        this.clientID = null;
        this.userID = null;
        this.persistentAttributes = new com.socket24.AttributeCollection();
        this.transientAttributes = new com.socket24.AttributeCollection();
        this.occupiedRoomIDs = null;
        this.observedRoomIDs = null;
    };

    /**
     * @private
     */
    com.socket24.ClientManifest.prototype.deserialize = function (clientID,
                                                                  userID,
                                                                  serializedOccupiedRoomIDs,
                                                                  serializedObservedRoomIDs,
                                                                  globalAttrs,
                                                                  roomAttrs) {
        this.clientID = clientID == "" ? null : clientID;
        this.userID   = userID == "" ? null : userID;

        // Room ids
        this.deserializeOccupiedRoomIDs(serializedOccupiedRoomIDs);
        this.deserializeObservedRoomIDs(serializedObservedRoomIDs);

        // Global attrs
        this.deserializeAttributesByScope(com.socket24.Tokens.GLOBAL_ATTR, globalAttrs);

        // Room attrs
        for (var i = 0; i < roomAttrs.length; i += 2) {
            this.deserializeAttributesByScope(roomAttrs[i], roomAttrs[i+1]);
        }
    };

    /**
     * @private
     */
    com.socket24.ClientManifest.prototype.deserializeOccupiedRoomIDs = function (roomIDs) {
        // No rooms included in the manifest
        if (roomIDs == null) {
            return;
        }
        // Client is in no rooms
        if (roomIDs == "") {
            this.occupiedRoomIDs = [];
            return;
        }
        // Client is in one or more room
        this.occupiedRoomIDs = roomIDs.split(com.socket24.Tokens.RS);
    };

    /**
     * @private
     */
    com.socket24.ClientManifest.prototype.deserializeObservedRoomIDs = function (roomIDs) {
        if (roomIDs == null) {
            return;
        }
        if (roomIDs == "") {
            this.observedRoomIDs = [];
            return;
        }
        this.observedRoomIDs = roomIDs.split(com.socket24.Tokens.RS);
    };

    /**
     * @private
     */
    com.socket24.ClientManifest.prototype.deserializeAttributesByScope = function (scope,
                                                                                   serializedAttributes) {
        var attrList;
        if (serializedAttributes == null || serializedAttributes == "") {
            return;
        }
        attrList = serializedAttributes.split(com.socket24.Tokens.RS);
        for (var i = attrList.length-3; i >= 0; i -=3) {
            if (parseInt(attrList[i+2]) & com.socket24.AttributeOptions.FLAG_PERSISTENT) {
                // Persistent
                this.persistentAttributes.setAttribute(attrList[i], attrList[i+1], scope);
            } else {
                // Non-persistent
                this.transientAttributes.setAttribute(attrList[i], attrList[i+1], scope);
            }
        }
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.ClientSet = function () {
        this.clients = new com.socket24.utilities.UDictionary();
    };

    com.socket24.ClientSet.prototype.add = function (client) {
        this.clients[client.getClientID()] = client;
    };

    com.socket24.ClientSet.prototype.remove = function (client) {
        var client = clients[client.getClientID()];
        delete this.clients[client.getClientID()];
        return client;
    };

    com.socket24.ClientSet.prototype.removeAll = function () {
        this.clients = new com.socket24.utilities.UDictionary();
    }

    com.socket24.ClientSet.prototype.removeByClientID = function (clientID) {
        var client = this.clients[clientID];
        delete this.clients[clientID];
        return client;
    };

    com.socket24.ClientSet.prototype.contains = function (client) {
        return this.clients[client.getClientID()] != null;
    };

    com.socket24.ClientSet.prototype.containsClientID = function (clientID) {
        if (clientID == "" || clientID == null) {
            return false;
        }
        return this.getByClientID(clientID) != null;
    };

    com.socket24.ClientSet.prototype.getByClientID = function (clientID) {
        return this.clients[clientID];
    };

    com.socket24.ClientSet.prototype.getByUserID = function (userID) {
        var account;

        var client;
        for (var clientID in this.clients) {
            client = this.clients[clientID];
            account = client.getAccount();
            if (account != null && account.getUserID() == userID) {
                return client;
            }
        }
        return null;
    };

    com.socket24.ClientSet.prototype.getAll = function () {
        return this.clients;
    }

    com.socket24.ClientSet.prototype.getAllIDs = function () {
        var ids = [];
        for (var clientID in this.clients) {
            ids.push(clientID);
        }
        return ids;
    };

    com.socket24.ClientSet.prototype.length = function () {
        return com.socket24.utilities.ObjectUtil.length(this.clients);
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.ClientSnapshot = function (clientID) {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.manifest = null;
        this.method = com.socket24eventName.GET_CLIENT_SNAPSHOT;
        this.args   = [clientID];
        this.hasStatus = true;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.ClientSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.ClientSnapshot.prototype.setManifest = function (value) {
        this.manifest = value;
    };

    com.socket24.snapshot.ClientSnapshot.prototype.getAttribute = function (name, scope) {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.transientAttributes.getAttribute(name, scope);
    };

    com.socket24.snapshot.ClientSnapshot.prototype.getAttributes = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.transientAttributes.getAll();
    };

    com.socket24.snapshot.ClientSnapshot.prototype.getClientID = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.clientID;
    };

    com.socket24.snapshot.ClientSnapshot.prototype.getUserID = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.userID;
    };

    com.socket24.snapshot.ClientSnapshot.prototype.getOccupiedRoomIDs = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.occupiedRoomIDs.slice();
    };

    com.socket24.snapshot.ClientSnapshot.prototype.getObservedRoomIDs = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.observedRoomIDs.slice();
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.CollectionEvent = function (type, item) {
        com.socket24.events.Event.call(this, type);

        this.item = item;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.CollectionEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.CollectionEvent.REMOVE_ITEM = "REMOVE_ITEM";
    /** @constant */
    com.socket24.CollectionEvent.ADD_ITEM = "ADD_ITEM";

    com.socket24.CollectionEvent.prototype.getItem = function () {
        return this.item;
    };

    com.socket24.CollectionEvent.prototype.toString = function () {
        return "[object CollectionEvent]";
    };
//==============================================================================
// COMPARE TYPE CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.filters.CompareType = new Object();
    /** @constant */
    com.socket24.filters.CompareType.EQUAL = "eq";
    /** @constant */
    com.socket24.filters.CompareType.NOT_EQUAL = "ne";
    /** @constant */
    com.socket24.filters.CompareType.GREATER_THAN = "gt";
    /** @constant */
    com.socket24.filters.CompareType.GREATER_THAN_OR_EQUAL = "ge";
    /** @constant */
    com.socket24.filters.CompareType.LESS_THAN = "lt";
    /** @constant */
    com.socket24.filters.CompareType.LESS_THAN_OR_EQUAL = "le";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.CoreEventLogger = function (log,
                                             connectionMan,
                                             roomMan,
                                             accountMan,
                                             server,
                                             clientMan,
                                             vaida) {
        this.log = log;

        roomMan.addEventListener(com.socket24.RoomManagerEvent.STOP_WATCHING_FOR_ROOMS_RESULT,
            this.stopWatchingForRoomsResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomManagerEvent.WATCH_FOR_ROOMS_RESULT,
            this.watchForRoomsResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomManagerEvent.CREATE_ROOM_RESULT,
            this.createRoomResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomManagerEvent.REMOVE_ROOM_RESULT,
            this.removeRoomResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomManagerEvent.ROOM_ADDED,
            this.roomAddedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomManagerEvent.ROOM_REMOVED,
            this.roomRemovedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomManagerEvent.ROOM_COUNT,
            this.roomCountListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomEvent.JOIN_RESULT,
            this.joinRoomResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomEvent.LEAVE_RESULT,
            this.leaveRoomResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomEvent.OBSERVE_RESULT,
            this.observeRoomResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        roomMan.addEventListener(com.socket24.RoomEvent.STOP_OBSERVING_RESULT,
            this.stopObservingRoomResultListener, this, com.socket24.utilities.integer.MAX_VALUE);

        accountMan.addEventListener(com.socket24.AccountManagerEvent.CREATE_ACCOUNT_RESULT,
            this.createAccountResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountManagerEvent.REMOVE_ACCOUNT_RESULT,
            this.removeAccountResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.CHANGE_PASSWORD_RESULT,
            this.changePasswordResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountManagerEvent.ACCOUNT_ADDED,
            this.accountAddedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountManagerEvent.ACCOUNT_REMOVED,
            this.accountRemovedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.LOGOFF_RESULT,
            this.logoffResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.LOGOFF,
            this.logoffListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.LOGIN_RESULT,
            this.loginResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.LOGIN,
            this.loginListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.CHANGE_PASSWORD,
            this.changePasswordListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.OBSERVE,
            this.observeAccountListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.STOP_OBSERVING,
            this.stopObservingAccountListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountManagerEvent.STOP_WATCHING_FOR_ACCOUNTS_RESULT,
            this.stopWatchingForAccountsResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountManagerEvent.WATCH_FOR_ACCOUNTS_RESULT,
            this.watchForAccountsResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.OBSERVE_RESULT,
            this.observeAccountResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountEvent.STOP_OBSERVING_RESULT,
            this.stopObservingAccountResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        accountMan.addEventListener(com.socket24.AccountManagerEvent.SYNCHRONIZE,
            this.synchronizeAccountsListener, this, com.socket24.utilities.integer.MAX_VALUE);

        server.addEventListener(com.socket24.ServerEvent.TIME_SYNC, this.timeSyncListener, this, com.socket24.utilities.integer.MAX_VALUE);

        connectionMan.addEventListener(com.socket24.ConnectionManagerEvent.CONNECT_FAILURE,
            this.connectFailureListener, this, com.socket24.utilities.integer.MAX_VALUE);
        connectionMan.addEventListener(com.socket24.ConnectionManagerEvent.CLIENT_KILL_CONNECT,
            this.clientKillConnectListener, this, com.socket24.utilities.integer.MAX_VALUE);
        connectionMan.addEventListener(com.socket24.ConnectionManagerEvent.SERVER_KILL_CONNECT,
            this.serverKillConnectListener, this, com.socket24.utilities.integer.MAX_VALUE);

        clientMan.addEventListener(com.socket24.ClientEvent.OBSERVE,
            this.observeClientListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientEvent.STOP_OBSERVING,
            this.stopObservingClientListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.CLIENT_CONNECTED,
            this.clientConnectedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.CLIENT_DISCONNECTED,
            this.clientDisconnectedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_CLIENTS_RESULT,
            this.stopWatchingForClientsResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.WATCH_FOR_CLIENTS_RESULT,
            this.watchForClientsResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientEvent.OBSERVE_RESULT,
            this.observeClientResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientEvent.STOP_OBSERVING_RESULT,
            this.stopObservingClientResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.SYNCHRONIZE,
            this.synchronizeClientsListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.ADDRESS_BANNED,
            this.addressBannedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.ADDRESS_UNBANNED,
            this.addressUnbannedListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT,
            this.stopWatchingForBannedAddressesResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.WATCH_FOR_BANNED_ADDRESSES_RESULT,
            this.watchForBannedAddressesResultListener, this, com.socket24.utilities.integer.MAX_VALUE);
        clientMan.addEventListener(com.socket24.ClientManagerEvent.SYNCHRONIZE_BANLIST,
            this.synchronizeBanlistListener, this, com.socket24.utilities.integer.MAX_VALUE);


        vaida.addEventListener(com.socket24.VaidaEvent.READY, this.readyListener, this, com.socket24.utilities.integer.MAX_VALUE);
        vaida.addEventListener(com.socket24.VaidaEvent.PROTOCOL_INCOMPATIBLE, this.protocolIncompatibleListener, this, com.socket24.utilities.integer.MAX_VALUE);
        vaida.addEventListener(com.socket24.VaidaEvent.CONNECT_REFUSED, this.connectRefusedListener, this, com.socket24.utilities.integer.MAX_VALUE);

        this.log.addEventListener(com.socket24.logger.LogEvent.LEVEL_CHANGE, this.logLevelChangeListener, this, com.socket24.utilities.integer.MAX_VALUE);
    };


// =============================================================================
// Logger EVENT LISTENERS
// =============================================================================

    /**
     * @private
     */
    com.socket24.CoreEventLogger.prototype.logLevelChangeListener = function (e) {
        this.log.info("[LOGGER] Log level set to: [" + e.getLevel() + "].");
    };

// =============================================================================
// Vaida EVENT LISTENERS
// =============================================================================

    /**
     * @private
     */
    com.socket24.CoreEventLogger.prototype.readyListener = function (e) {
        this.log.info("[vaida] Vaida now connected and ready.");
    };

    /**
     * @private
     */
    com.socket24.CoreEventLogger.prototype.protocolIncompatibleListener = function (e) {
        this.log.warn("[vaida] Vaida UPC protocol incompatibility detected. Client "
            + "UPC version: " + e.target.getSystem().getUPCVersion().toString()
            + ". Server version: " + e.getServerUPCVersion().toString() + ".");
    };

    /**
     * @private
     */
    com.socket24.CoreEventLogger.prototype.connectRefusedListener = function (e) {
        if (e.getConnectionRefusal().reason == com.socket24.ConnectionRefusalReason.BANNED) {
            this.log.warn("[vaida] Union Server refused the connection because the"
                + " client address is banned for the following reason: ["
                + e.getConnectionRefusal().banReason + "]. The ban started at: ["
                + new Date(e.getConnectionRefusal().bannedAt) + "]. The ban duration is: ["
                + com.socket24.utilities.NumericFormatter.msToElapsedDayHrMinSec(e.getConnectionRefusal().banDuration*1000) + "].");
        } else {
            this.log.warn("[vaida] Union Server refused the connection. Reason: ["
                + e.getConnectionRefusal().reason + "]. Description: ["
                + e.getConnectionRefusal().description + "].");
        }
    }

// =============================================================================
// Server EVENT LISTENERS
// =============================================================================

    com.socket24.CoreEventLogger.prototype.timeSyncListener = function (e) {
        this.log.info("[SERVER] Server time synchronized with client. Approximate time on " +
            "server is now: " + new Date(e.target.getServerTime()));
    };

// =============================================================================
// AccountManager EVENT LISTENERS
// =============================================================================
    com.socket24.CoreEventLogger.prototype.createAccountResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Result for createAccount(). Account: "
            + e.getUserID() + ", Status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.removeAccountResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Result for removeAccount(). Account: "
            + e.getUserID() + ", Status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.changePasswordResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Result for changePassword(). Account: "
            + e.getUserID() + ", Status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.accountAddedListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Account added: " + e.getAccount());
    };

    com.socket24.CoreEventLogger.prototype.accountRemovedListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Account removed: " + e.getAccount());
    };

    com.socket24.CoreEventLogger.prototype.logoffResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Result for logoff(). Account: "
            + e.getAccount() + ", Status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.logoffListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Account logged off: " + e.getAccount());
    };

    com.socket24.CoreEventLogger.prototype.loginResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Result for login(). Account: "
            + e.getAccount() + ", Status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.loginListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Account logged in: " + e.getAccount());
    };

    com.socket24.CoreEventLogger.prototype.changePasswordListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Password changed for account: " + e.getUserID());
    };

    com.socket24.CoreEventLogger.prototype.observeAccountListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Account observed: " + e.getAccount());
    };

    com.socket24.CoreEventLogger.prototype.stopObservingAccountListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] Stopped observing account: " + e.getUserID());
    };

    com.socket24.CoreEventLogger.prototype.stopWatchingForAccountsResultListener = function (e) {
        this.log.info("[SERVER] 'Stop watching for accounts' result: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.watchForAccountsResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] 'Watch for accounts' result: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.observeAccountResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] 'Observe account result' for account: "
            + e.getAccount() + ", Status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.stopObservingAccountResultListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] 'Stop observing account result' for account: "
            + e.getUserID() + ", Status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.synchronizeAccountsListener = function (e) {
        this.log.info("[ACCOUNT_MANAGER] User account list synchronized with server.");
    };

// =============================================================================
// CONNECTION EVENT LISTENERS
// =============================================================================

    com.socket24.CoreEventLogger.prototype.connectFailureListener = function (e) {
        this.log.info("[CONNECTION_MANAGER] " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.serverKillConnectListener = function (e) {
        this.log.info("[CONNECTION_MANAGER] Server closed the connection.");
    };

    com.socket24.CoreEventLogger.prototype.clientKillConnectListener = function (e) {
        this.log.info("[CONNECTION_MANAGER] Connection to server closed by client.");
    };

// =============================================================================
// RoomManager EVENT LISTENERS
// =============================================================================

    com.socket24.CoreEventLogger.prototype.watchForRoomsResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] 'Watch for rooms' result for qualifier ["
            + e.getRoomIdQualifier() + "]: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.stopWatchingForRoomsResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] 'Stop watching for rooms' result for"
            + " qualifier [" + e.getRoomIdQualifier()
            + "]: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.createRoomResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] Room creation result for room ["
            + e.getRoomID() + "]: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.removeRoomResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] Room removal result for room ["
            + e.getRoomID() + "]: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.roomAddedListener = function (e) {
        this.log.info("[ROOM_MANAGER] Room added: " + e.getRoom() + ".");
    };

    com.socket24.CoreEventLogger.prototype.roomRemovedListener = function (e) {
        this.log.info("[ROOM_MANAGER] Room removed: " + e.getRoom() + ".");
    };

    com.socket24.CoreEventLogger.prototype.roomCountListener = function (e) {
        this.log.info("[ROOM_MANAGER] New room count: " + e.getNumRooms() + ".");
    };

    com.socket24.CoreEventLogger.prototype.joinRoomResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] Join result for room ["
            + e.getRoomID() + "]: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.leaveRoomResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] Leave result for room ["
            + e.getRoomID() + "]: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.observeRoomResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] Observe result for room ["
            + e.getRoomID() + "]: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.stopObservingRoomResultListener = function (e) {
        this.log.info("[ROOM_MANAGER] Stop observing result for room ["
            + e.getRoomID() + "]: " + e.getStatus());
    };

// =============================================================================
// ClientManager EVENT LISTENERS
// =============================================================================

    com.socket24.CoreEventLogger.prototype.observeClientListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Client observed: " + e.getClient());
    };

    com.socket24.CoreEventLogger.prototype.stopObservingClientListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Stopped observing client: " + e.getClient());
    };

    com.socket24.CoreEventLogger.prototype.clientConnectedListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Foreign client connected. ClientID: [" + e.getClientID()
            + "].");
    };

    com.socket24.CoreEventLogger.prototype.clientDisconnectedListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Foreign client disconnected. ClientID: [" + e.getClientID()
            + "].");
    };

    com.socket24.CoreEventLogger.prototype.stopWatchingForClientsResultListener = function (e) {
        this.log.info("[CLIENT_MANAGER] 'Stop watching for clients' result: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.watchForClientsResultListener = function (e) {
        this.log.info("[CLIENT_MANAGER] 'Watch for clients' result: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.observeClientResultListener = function (e) {
        this.log.info("[CLIENT_MANAGER] 'Observe client' result for client: "
            + e.getClient() + ", status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.stopObservingClientResultListener = function (e) {
        this.log.info("[CLIENT_MANAGER] 'Stop observing client' result for client: "
            + e.getClient() + ", status: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.synchronizeClientsListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Client list synchronized with server.");
    };

    com.socket24.CoreEventLogger.prototype.addressBannedListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Client address banned: [" + e.getAddress()
            + "].");
    };

    com.socket24.CoreEventLogger.prototype.addressUnbannedListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Client address unbanned. ClientID: [" + e.getAddress()
            + "].");
    };

    com.socket24.CoreEventLogger.prototype.stopWatchingForBannedAddressesResultListener = function (e) {
        this.log.info("[CLIENT_MANAGER] 'Stop watching for banned addresses' result: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.watchForBannedAddressesResultListener = function (e) {
        this.log.info("[CLIENT_MANAGER] 'Watch for banned addresses' result: " + e.getStatus());
    };

    com.socket24.CoreEventLogger.prototype.synchronizeBanlistListener = function (e) {
        this.log.info("[CLIENT_MANAGER] Banned list synchronized with server.");
    };





//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * The CoreMessageListener class is an internal class that responds to the
     * built-in UPC messages sent by the Union Server to the Vaida. The
     * CoreMessageListener class does not define any public methods or variables.
     *
     * @private
     */
    com.socket24.CoreMessageListener = function (vaida) {
        /**
         * @type com.socket24.Vaida
         */
        this.vaida = vaida;
        this.log = vaida.getLog();
        this.registerCoreListeners();
        this.vaida.getConnectionManager().addEventListener(com.socket24.ConnectionManagerEvent.SELECT_CONNECTION,
            this.selectConnectionListener, this);

        this.roomMan = this.vaida.getRoomManager();
        this.accountMan = this.vaida.getAccountManager();
        this.clientMan = this.vaida.getClientManager();
        this.snapshotMan = this.vaida.getSnapshotManager();
    };

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.CoreMessageListener.prototype.registerCoreListeners = function () {
        var msgMan = this.vaida.getMessageManager();
        msgMan.addMessageListener(com.socket24eventName.JOINED_ROOM, this.u6, this);
        msgMan.addMessageListener(com.socket24eventName.RECEIVE_MESSAGE, this.u7, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_ATTR_UPDATE, this.u8, this);
        msgMan.addMessageListener(com.socket24eventName.ROOM_ATTR_UPDATE, this.u9, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_METADATA, this.u29, this);
        msgMan.addMessageListener(com.socket24eventName.CREATE_ROOM_RESULT, this.u32, this);
        msgMan.addMessageListener(com.socket24eventName.REMOVE_ROOM_RESULT, this.u33, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENTCOUNT_SNAPSHOT, this.u34, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_ADDED_TO_ROOM, this.u36, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_REMOVED_FROM_ROOM, this.u37, this);
        msgMan.addMessageListener(com.socket24eventName.ROOMLIST_SNAPSHOT, this.u38, this);
        msgMan.addMessageListener(com.socket24eventName.ROOM_ADDED, this.u39, this);
        msgMan.addMessageListener(com.socket24eventName.ROOM_REMOVED, this.u40, this);
        msgMan.addMessageListener(com.socket24eventName.WATCH_FOR_ROOMS_RESULT, this.u42, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_WATCHING_FOR_ROOMS_RESULT, this.u43, this);
        msgMan.addMessageListener(com.socket24eventName.LEFT_ROOM, this.u44, this);
        msgMan.addMessageListener(com.socket24eventName.CHANGE_ACCOUNT_PASSWORD_RESULT, this.u46, this);
        msgMan.addMessageListener(com.socket24eventName.CREATE_ACCOUNT_RESULT, this.u47, this);
        msgMan.addMessageListener(com.socket24eventName.REMOVE_ACCOUNT_RESULT, this.u48, this);
        msgMan.addMessageListener(com.socket24eventName.LOGIN_RESULT, this.u49, this);
        msgMan.addMessageListener(com.socket24eventName.ROOM_SNAPSHOT, this.u54, this);
        msgMan.addMessageListener(com.socket24eventName.OBSERVED_ROOM, this.u59, this);
        msgMan.addMessageListener(com.socket24eventName.GET_ROOM_SNAPSHOT_RESULT, this.u60, this);
        msgMan.addMessageListener(com.socket24eventName.STOPPED_OBSERVING_ROOM, this.u62, this);
        msgMan.addMessageListener(com.socket24eventName.SERVER_HELLO, this.u66, this);
        msgMan.addMessageListener(com.socket24eventName.JOIN_ROOM_RESULT, this.u72, this);
        msgMan.addMessageListener(com.socket24eventName.SET_CLIENT_ATTR_RESULT, this.u73, this);
        msgMan.addMessageListener(com.socket24eventName.SET_ROOM_ATTR_RESULT, this.u74, this);
        msgMan.addMessageListener(com.socket24eventName.GET_CLIENTCOUNT_SNAPSHOT_RESULT, this.u75, this);
        msgMan.addMessageListener(com.socket24eventName.LEAVE_ROOM_RESULT, this.u76, this);
        msgMan.addMessageListener(com.socket24eventName.OBSERVE_ROOM_RESULT, this.u77, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_OBSERVING_ROOM_RESULT, this.u78, this);
        msgMan.addMessageListener(com.socket24eventName.ROOM_ATTR_REMOVED, this.u79, this);
        msgMan.addMessageListener(com.socket24eventName.REMOVE_ROOM_ATTR_RESULT, this.u80, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_ATTR_REMOVED, this.u81, this);
        msgMan.addMessageListener(com.socket24eventName.REMOVE_CLIENT_ATTR_RESULT, this.u82, this);
        msgMan.addMessageListener(com.socket24eventName.SESSION_TERMINATED, this.u84, this);
        msgMan.addMessageListener(com.socket24eventName.LOGOFF_RESULT, this.u87, this);
        msgMan.addMessageListener(com.socket24eventName.LOGGED_IN, this.u88, this);
        msgMan.addMessageListener(com.socket24eventName.LOGGED_OFF, this.u89, this);
        msgMan.addMessageListener(com.socket24eventName.ACCOUNT_PASSWORD_CHANGED, this.u90, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENTLIST_SNAPSHOT, this.u101, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_ADDED_TO_SERVER, this.u102, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_REMOVED_FROM_SERVER, this.u103, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_SNAPSHOT, this.u104, this);
        msgMan.addMessageListener(com.socket24eventName.OBSERVE_CLIENT_RESULT, this.u105, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_OBSERVING_CLIENT_RESULT, this.u106, this);
        msgMan.addMessageListener(com.socket24eventName.WATCH_FOR_CLIENTS_RESULT, this.u107, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_WATCHING_FOR_CLIENTS_RESULT, this.u108, this);
        msgMan.addMessageListener(com.socket24eventName.WATCH_FOR_ACCOUNTS_RESULT, this.u109, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_WATCHING_FOR_ACCOUNTS_RESULT, this.u110, this);
        msgMan.addMessageListener(com.socket24eventName.ACCOUNT_ADDED, this.u111, this);
        msgMan.addMessageListener(com.socket24eventName.ACCOUNT_REMOVED, this.u112, this);
        msgMan.addMessageListener(com.socket24eventName.JOINED_ROOM_ADDED_TO_CLIENT, this.u113, this);
        msgMan.addMessageListener(com.socket24eventName.JOINED_ROOM_REMOVED_FROM_CLIENT, this.u114, this);
        msgMan.addMessageListener(com.socket24eventName.GET_CLIENT_SNAPSHOT_RESULT, this.u115, this);
        msgMan.addMessageListener(com.socket24eventName.GET_ACCOUNT_SNAPSHOT_RESULT, this.u116, this);
        msgMan.addMessageListener(com.socket24eventName.OBSERVED_ROOM_ADDED_TO_CLIENT, this.u117, this);
        msgMan.addMessageListener(com.socket24eventName.OBSERVED_ROOM_REMOVED_FROM_CLIENT, this.u118, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_OBSERVED, this.u119, this);
        msgMan.addMessageListener(com.socket24eventName.STOPPED_OBSERVING_CLIENT, this.u120, this);
        msgMan.addMessageListener(com.socket24eventName.OBSERVE_ACCOUNT_RESULT, this.u123, this);
        msgMan.addMessageListener(com.socket24eventName.ACCOUNT_OBSERVED, this.u124, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_OBSERVING_ACCOUNT_RESULT, this.u125, this);
        msgMan.addMessageListener(com.socket24eventName.STOPPED_OBSERVING_ACCOUNT, this.u126, this);
        msgMan.addMessageListener(com.socket24eventName.ACCOUNT_LIST_UPDATE, this.u127, this);
        msgMan.addMessageListener(com.socket24eventName.UPDATE_LEVELS_UPDATE, this.u128, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_OBSERVED_ROOM, this.u129, this);
        msgMan.addMessageListener(com.socket24eventName.CLIENT_STOPPED_OBSERVING_ROOM, this.u130, this);
        msgMan.addMessageListener(com.socket24eventName.ROOM_OCCUPANTCOUNT_UPDATE, this.u131, this);
        msgMan.addMessageListener(com.socket24eventName.ROOM_OBSERVERCOUNT_UPDATE, this.u132, this);
        msgMan.addMessageListener(com.socket24eventName.ADD_ROLE_RESULT, this.u134, this);
        msgMan.addMessageListener(com.socket24eventName.REMOVE_ROLE_RESULT, this.u136, this);
        msgMan.addMessageListener(com.socket24eventName.BAN_RESULT, this.u138, this);
        msgMan.addMessageListener(com.socket24eventName.UNBAN_RESULT, this.u140, this);
        msgMan.addMessageListener(com.socket24eventName.BANNED_LIST_SNAPSHOT, this.u142, this);
        msgMan.addMessageListener(com.socket24eventName.WATCH_FOR_BANNED_ADDRESSES_RESULT, this.u144, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT, this.u146, this);
        msgMan.addMessageListener(com.socket24eventName.BANNED_ADDRESS_ADDED, this.u147, this);
        msgMan.addMessageListener(com.socket24eventName.BANNED_ADDRESS_REMOVED, this.u148, this);
        msgMan.addMessageListener(com.socket24eventName.KICK_CLIENT_RESULT, this.u150, this);
        msgMan.addMessageListener(com.socket24eventName.SERVERMODULELIST_SNAPSHOT, this.u152, this);
        msgMan.addMessageListener(com.socket24eventName.GET_UPC_STATS_SNAPSHOT_RESULT, this.u155, this);
        msgMan.addMessageListener(com.socket24eventName.UPC_STATS_SNAPSHOT, this.u156, this);
        msgMan.addMessageListener(com.socket24eventName.RESET_UPC_STATS_RESULT, this.u158, this);
        msgMan.addMessageListener(com.socket24eventName.WATCH_FOR_PROCESSED_UPCS_RESULT, this.u160, this);
        msgMan.addMessageListener(com.socket24eventName.PROCESSED_UPC_ADDED, this.u161, this);
        msgMan.addMessageListener(com.socket24eventName.STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT, this.u163, this);
        msgMan.addMessageListener(com.socket24eventName.NODELIST_SNAPSHOT, this.u166, this);
        msgMan.addMessageListener(com.socket24eventName.GATEWAYS_SNAPSHOT, this.u168, this);
    }

    com.socket24.CoreMessageListener.prototype.createHashFromArg = function (arg) {
        var list = arg.split(com.socket24.Tokens.RS);
        var hash = new Object();

        for (var i = 0; i < list.length; i += 2) {
            hash[list[i]] = list[i+1];
        }
        return hash;
    };

    com.socket24.CoreMessageListener.prototype.selectConnectionListener = function (e) {
        var msgMan = this.vaida.getMessageManager();
        if (msgMan.removeListenersOnDisconnect) {
            this.registerCoreListeners();
        }
    };

    /**
     * Room joined.
     */
    com.socket24.CoreMessageListener.prototype.u6 = function (roomID) {
        // Add the room to the occupied room list
        var room = this.roomMan.addOccupiedRoom(roomID);
        // Tell the room to do its join duties
        room.doJoin();
        // Fire JOIN through the client
        var selfClient = this.clientMan.self();
        if (selfClient) {
            selfClient.fireJoinRoom(room, roomID);
        }
    };

    /**
     * Handles sendMessage() calls sent by other clients.
     */
    com.socket24.CoreMessageListener.prototype.u7 = function (message,
                                                              broadcastType,
                                                              fromClientID,
                                                              toRoomID) {
        var msgMan = this.vaida.getMessageManager();
        var listenerError;
        var fromClient;
        var toRoom;
        var args;  // Args passed to the messsage listener
        var userDefinedArgs = Array.prototype.slice.call(arguments).slice(4);

        // Retrieve the Room object for the recipient room.
        toRoom = this.roomMan.getRoom(toRoomID);

        // Retrieve the Client object for the sender
        if (fromClientID == "") {
            // No client ID was supplied, so the message was generated by the
            // server, not by a client, so set fromClient to null.
            fromClient = null;
        } else {
            // A valid ID was supplied, so find or create the matching IClient object
            fromClient = this.clientMan.getClient(fromClientID);
            fromClient = fromClient == null ? this.clientMan.requestClient(fromClientID) : fromClient;
        }

        // ===== To Clients, or To Server =====
        // If the message was sent to a specific client, a list of specific clients,
        // or to the whole server, then args passed to registered message listeners
        // are: the Client object plus all user-defined arguments originally passed
        // to sendMessage().
        if (broadcastType != com.socket24.ReceiveMessageBroadcastType.TO_ROOMS) {
            args = [fromClient].concat(userDefinedArgs);
            try {
                msgMan.notifyMessageListeners(message, args);
            } catch (e) {
                listenerError = e;
            }
        } else {

            // ===== To Rooms =====
            // Check if the room is valid
            if (toRoom == null) {
                this.log.warn("Message (u7) received for unknown room: [" + toRoomID + "]"
                    + "Message: [" + message + "]");
                return;
            }

            // RECEIVE_MESSAGE was a response to SEND_MESSAGE_TO_ROOMS, so
            // we notify listeners only if they asked to be told about messages
            // sent to the recipient room.

            // First, get the list of messsage listeners for this message
            var listeners = msgMan.getMessageListeners(message);

            // Split the recipient room ID into two parts
            var toRoomSimpleID  = com.socket24.RoomIDParser.getSimpleRoomID(toRoomID);
            var toRoomQualifier = com.socket24.RoomIDParser.getQualifier(toRoomID);

            // If the message can be dispatched, set to true.
            var listenerFound;
            // If the listener isn't interested in messages sent to the
            // recipient room, set to true.
            var listenerIgnoredMessage;

            // ===== Run once for each message listener =====
            var messageListener;
            for (var i = 0; i < listeners.length; i++) {
                messageListener = listeners[i];

                // Assume this listener ignored the message until we prove it didn't
                listenerIgnoredMessage = true;

                // --- Has no "forRoomIDs" filter ---
                // If the listener doesn't specify any forRoomIDs, then
                // just send it the message notification. (No-rooms-specified
                // means the listener wants all of these messages, no matter
                // which room they were sent to.) This listener is told which
                // room the message was sent to via args[1] (toRoomID).
                if (messageListener.getForRoomIDs() == null) {
                    args = [fromClient, toRoom].concat(userDefinedArgs);
                    try {
                        messageListener.getListenerFunction().apply(messageListener.getThisArg(), args);
                    } catch (e) {
                        listenerError = e;
                    }
                    listenerFound = true;
                    listenerIgnoredMessage = false;
                    continue;  // Done with this listener. On to the next.
                }

                // --- Has a "forRoomIDs" filter ---
                // If the message was sent to any of the rooms the listener is
                // interested in, then notify that listener. Note that a listener
                // for messages sent to room foo.* means the listener wants
                // notifications for all rooms whose ids start with foo.
                var listenerRoomIDs  = messageListener.getForRoomIDs();
                var listenerRoomQualifier;
                var listenerRoomSimpleID;
                // ===== Run once for each room id =====
                var listenerRoomIDString;
                for (var j = 0; j < listenerRoomIDs.length; j++) {
                    listenerRoomIDString = listenerRoomIDs[j];
                    // Split the room id
                    listenerRoomQualifier = com.socket24.RoomIDParser.getQualifier(listenerRoomIDString);
                    listenerRoomSimpleID  = com.socket24.RoomIDParser.getSimpleRoomID(listenerRoomIDString);

                    // Check if the listener is interested in the recipient room...
                    if (listenerRoomQualifier == toRoomQualifier
                        &&
                        (listenerRoomSimpleID == toRoomSimpleID
                            || listenerRoomSimpleID == "*")) {
                        // Found a match. Notify the listener...

                        // Prepare args.
                        if (listenerRoomIDs.length == 1) {
                            // The listener is interested in messages sent to a
                            // specific room only, so omit the "toRoom" arg.
                            // (The listener already knows the target room because
                            // it's only notified if the message was sent to that room.)
                            args = [fromClient].concat(userDefinedArgs);
                        } else {
                            // The listener is interested in messages sent to
                            // multiple rooms. In this case, we have to
                            // include the "toRoom" arg so the listener knows
                            // which room received the message.
                            args = [fromClient, toRoom].concat(userDefinedArgs);
                        }

                        try {
                            messageListener.getListenerFunction().apply(messageListener.getThisArg(), args);
                        } catch (e) {
                            listenerError = e;
                        }
                        listenerFound = true;
                        listenerIgnoredMessage = false;
                        break; // Stop looking at this listener's room ids
                    }
                } // Done looking at this listener's room ids
                if (listenerIgnoredMessage) {
                    this.log.debug("Message listener ignored message: " + message + ". "
                        + "Listener registered to receive "
                        + "messages sent to: " + messageListener.getForRoomIDs()
                        + ", but message was sent to: " + toRoomID);
                }
            }
            if (!listenerFound) {
                this.log.warn("No message listener handled incoming message: "
                    + message + ", sent to: " + toRoomID);
            }
        } // Done looking at listeners for the incoming message

        if (listenerError != null) {
            throw new Error("A message listener for incoming message [" + message + "]" +
                (fromClient == null ? "" : ", received from client [" + fromClient.getClientID() + "],") +
                " encountered an error:\n\n" + listenerError.toString() +
                "\n\nEnsure that all [" + message + "] listeners supply a first" +
                " parameter whose datatype is Client (or a compatible type). Listeners" +
                " that registered for the message via MessageManager's addMessageListener()" +
                " with anything other than a single roomID for the toRoomIDs parameter must" +
                " also define a second paramter whose" +
                " datatype is Room (or a compatible type). Finally, ensure that" +
                " the listener's declared message parameters match the following actual message" +
                " arguments:\n    " + userDefinedArgs
                + (typeof listenerError.stack === "undefined" ? "" : "\n\nStack trace follows:\n" + listenerError.stack)
            );
        }
    }

    /**
     * Client attribute update
     */
    com.socket24.CoreMessageListener.prototype.u8 = function (attrScope,
                                                              clientID,
                                                              userID,
                                                              attrName,
                                                              attrVal,
                                                              attrOptions) {
        var client;
        var account;
        var options = parseInt(attrOptions);

        if (options &com.socket24.AttributeOptions.FLAG_PERSISTENT) {
            account = this.accountMan.getAccount(userID);
            if (account != null) {
                account.getAttributeManager().setAttributeLocal(attrName, attrVal, attrScope);
            } else {
                throw new Error("[CORE_MESSAGE_LISTENER] Received an attribute update for "
                    + " an unknown user account [" + userID + "]. Please report this error with"
                    + " the following log to union@user1.net.\n"
                    + this.log.getHistory().join("\n"));
            }
        } else {
            client = this.clientMan.getInternalClient(clientID);
            if (client != null) {
                client.getAttributeManager().setAttributeLocal(attrName, attrVal, attrScope);
            } else {
                throw new Error("[CORE_MESSAGE_LISTENER] Received an attribute update for "
                    + " an unknown client [" + clientID + "]. Please report this error with"
                    + " the following log to union@user1.net.\n"
                    + this.log.getHistory().join("\n"));
            }
        }
    };

    /**
     * Room attribute update
     */
    com.socket24.CoreMessageListener.prototype.u9 = function (roomID,
                                                              byClientID,
                                                              attrName,
                                                              attrVal) {
        var theRoom = this.roomMan.getRoom(roomID);
        var byClient;

        // Quit if the room isn't found
        if (theRoom == null) {
            this.log.warn("Room attribute update received for server-side room with no" +
                " matching client-side Room object. Room ID [" +
                roomID + "]. Attribute: [" + attrName + "].");
            return;
        }

        // Retrieve the Client object for the sender
        if (byClientID == "") {
            // No client ID was supplied, so the message was generated by the
            // server, not by a client, so set fromClient to null.
            byClient = null;
        } else {
            // A valid ID was supplied, so find or create the matching IClient object
            byClient = this.clientMan.getClient(byClientID);
            byClient = byClient == null ? this.clientMan.requestClient(byClientID) : byClient;
        }

        theRoom.getAttributeManager().setAttributeLocal(attrName, attrVal, com.socket24.Tokens.GLOBAL_ATTR, byClient);
    };

    /**
     * CLIENT_METADATA
     */
    com.socket24.CoreMessageListener.prototype.u29 = function (id) {
        var theClient = this.clientMan.requestClient(id);
        this.clientMan.setSelf(theClient);
    };

    /**
     * CREATE_ROOM_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u32 = function (roomID, status) {
        var theRoom = this.roomMan.getRoom(roomID);
        switch (status) {
            case com.socket24.Status.ERROR:
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ROOM_EXISTS:
            case com.socket24.Status.PERMISSION_DENIED:
                this.roomMan.fireCreateRoomResult(com.socket24.RoomIDParser.getQualifier(roomID),
                    com.socket24.RoomIDParser.getSimpleRoomID(roomID),
                    status);
                break;

            default:
                this.log.warn("Unrecognized status code for u32."
                    + " Room ID: [" + roomID + "], status: [" + status + "].");
        }
    };

    /**
     * REMOVE_ROOM_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u33 = function (roomID, status) {
        this.roomMan.fireRemoveRoomResult(com.socket24.RoomIDParser.getQualifier(roomID),
            com.socket24.RoomIDParser.getSimpleRoomID(roomID),
            status);
        switch (status) {
            case com.socket24.Status.ERROR:
                this.log.warn("Server error for room removal attempt: " + roomID);
                break;
            case com.socket24.Status.PERMISSION_DENIED:
                this.log.info("Attempt to remove room [" + roomID
                    + "] failed. Permission denied. See server log for details.");
                break;

            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ROOM_NOT_FOUND:
                if (this.roomMan.getRoom(roomID) != null) {
                    this.roomMan.disposeRoom(roomID);
                }
                break;

            case com.socket24.Status.AUTHORIZATION_REQUIRED:
            case com.socket24.Status.AUTHORIZATION_FAILED:
                break;

            default:
                this.log.warn("Unrecognized status code for u33."
                    + " Room ID: [" + roomID + "], status: [" + status + "].");
        }
    };

    /**
     * CLIENTCOUNT_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u34 = function (requestID,
                                                               numClients) {
        this.snapshotMan.receiveClientCountSnapshot(requestID, parseInt(numClients));
    };

    /**
     * CLIENT_ADDED_TO_ROOM
     */
    com.socket24.CoreMessageListener.prototype.u36 = function (roomID,
                                                               clientID,
                                                               userID,
                                                               globalAttributes,
                                                               roomAttributes) {
        var theClient = this.clientMan.requestClient(clientID);
        var account = this.accountMan.requestAccount(userID);
        var clientManifest;
        if (account != null
            && theClient.getAccount() != account) {
            theClient.setAccount(account);
        }

        // If it's not the current client, set the client's attributes.
        // (The current client obtains its own attributes through separate u8s.)
        var theRoom = this.roomMan.getRoom(roomID);
        if (!theClient.isSelf()) {
            clientManifest = new com.socket24.ClientManifest();
            clientManifest.deserialize(clientID, userID, null,
                null, globalAttributes, [roomID, roomAttributes]);
            theClient.synchronize(clientManifest);

            // If the client is observed, don't fire JOIN; observed clients always
            // fire JOIN based on observation updates. Likewise, don't fire JOIN
            // on self; self fires JOIN when it receives a u6.
            if (!this.clientMan.isObservingClient(clientID)) {
                theClient.fireJoinRoom(theRoom, roomID);
            }
        }

        // Add the client to the given room.
        theRoom.addOccupant(theClient);
    };

    /**
     * CLIENT_REMOVED_FROM_ROOM
     */
    com.socket24.CoreMessageListener.prototype.u37 = function (roomID,
                                                               clientID) {
        // Remove the room from the client's list of occupied rooms
        var theClient = this.clientMan.requestClient(clientID);
        var theRoom = this.roomMan.getRoom(roomID);

        // Remove the client from the given room
        theRoom.removeOccupant(clientID);

        // Don't fire LEAVE on self; self fires LEAVE when it receives a u44.
        if (!theClient.isSelf()) {
            // If the client is observed, don't fire LEAVE; observed clients always
            // fire LEAVE based on observation updates.
            if (!this.clientMan.isObservingClient(clientID)) {
                theClient.fireLeaveRoom(theRoom, roomID);
            }
        }
    };

    /**
     * ROOMLIST_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u38 = function (requestID,
                                                               requestedRoomIDQualifier,
                                                               recursive) {
        var args = Array.prototype.slice.call(arguments).slice(3);
        var roomQualifier;
        var roomIDs;
        var roomList = [];

        if (requestID == "") {
            // Synchronize
            for (var i = 0; i < args.length; i+=2) {
                roomQualifier = args[i];
                roomIDs       = args[i+1].split(com.socket24.Tokens.RS);

                this.roomMan.setWatchedRooms(roomQualifier, roomIDs);
            }
        } else {
            // Snapshot
            for (i = 0; i < args.length; i+=2) {
                roomQualifier = args[i];
                roomIDs = args[i+1].split(com.socket24.Tokens.RS);
                for (var j = 0; j < roomIDs.length; j++) {
                    roomList.push(roomQualifier + (roomQualifier == "" ? "" : ".") + roomIDs[j]);
                }
            }
            this.snapshotMan.receiveRoomListSnapshot(requestID, roomList, requestedRoomIDQualifier, recursive == "true");
        }
    };

    /**
     * ROOM_ADDED
     */
    com.socket24.CoreMessageListener.prototype.u39 = function (roomID) {
        // Add the room
        this.roomMan.addWatchedRoom(roomID);
    };

    /**
     * ROOM_REMOVED
     */
    com.socket24.CoreMessageListener.prototype.u40 = function (roomID) {
        this.roomMan.removeWatchedRoom(roomID);
        if (this.roomMan.getRoom(roomID) != null) {
            this.roomMan.disposeRoom(roomID);
        }
    };

    /**
     * WATCH_FOR_ROOMS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u42 = function (roomIdQualifier, recursive, status) {
        // Broadcast the result of the observation attempt.
        this.roomMan.fireWatchForRoomsResult(roomIdQualifier, status);
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.INVALID_QUALIFIER:
            case com.socket24.Status.ALREADY_WATCHING:
            case com.socket24.Status.PERMISSION_DENIED:
                break;

            default:
                this.log.warn("Unrecognized status code for u42."
                    + " Room ID Qualifier: [" + roomIdQualifier + "], recursive: ["
                    + recursive + "], status: [" + status + "].");
        }
    };

    /**
     * STOP_WATCHING_FOR_ROOMS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u43 = function (roomIdQualifier, recursive, status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
                if (roomIdQualifier == "" && recursive == "true") {
                    this.roomMan.removeAllWatchedRooms();
                } else {
                    // Remove all watched rooms for the qualifier
                    this.roomMan.setWatchedRooms(roomIdQualifier, []);
                }
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_WATCHING:
            case com.socket24.Status.INVALID_QUALIFIER:
                this.roomMan.fireStopWatchingForRoomsResult(roomIdQualifier, status);
                break;

            default:
                this.log.warn("Unrecognized status code for u43."
                    + " Room ID Qualifier: [" + roomIdQualifier + "], recursive: ["
                    + recursive + "], status: [" + status + "].");
        }
    };

    /**
     * LEFT_ROOM
     */
    com.socket24.CoreMessageListener.prototype.u44 = function (roomID) {
        var leftRoom = this.roomMan.getRoom(roomID);
        this.roomMan.removeOccupiedRoom(roomID);
        if (leftRoom != null) {
            leftRoom.doLeave();
            this.clientMan.self().fireLeaveRoom(leftRoom, roomID);
        }
    };

    /**
     * CHANGE_ACCOUNT_PASSWORD_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u46 = function (userID, status) {
        var account = this.accountMan.getAccount(userID);
        if (account != null) {
            account.fireChangePasswordResult(status);
        }
        this.accountMan.fireChangePasswordResult(userID, status);
    };

    /**
     * CREATE_ACCOUNT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u47 = function (userID, status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ACCOUNT_EXISTS:
            case com.socket24.Status.PERMISSION_DENIED:
                this.vaida.getAccountManager().fireCreateAccountResult(userID, status);
                break;
            default:
                this.log.warn("Unrecognized status code for u47."
                    + " Account: [" + userID + "], status: [" + status + "].");
        }
    };

    /**
     * REMOVE_ACCOUNT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u48 = function (userID, status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
            case com.socket24.Status.AUTHORIZATION_FAILED:
            case com.socket24.Status.PERMISSION_DENIED:
                this.vaida.getAccountManager().fireRemoveAccountResult(userID, status);
                break;
            default:
                this.log.warn("Unrecognized status code for u48."
                    + " Account: [" + userID + "], status: [" + status + "].");
        }
    };

    /**
     * LOGIN_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u49 = function (userID, status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_LOGGED_IN:
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
            case com.socket24.Status.AUTHORIZATION_FAILED:
            case com.socket24.Status.PERMISSION_DENIED:
                this.vaida.getAccountManager().fireLoginResult(userID, status);
                break;
            default:
                this.log.warn("Unrecognized status code for u49."
                    + " Account: [" + userID + "], status: [" + status + "].");
        }
    };

    /**
     * ROOM_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u54 = function (requestID,
                                                               roomID,
                                                               occupantCount,
                                                               observerCount,
                                                               roomAttributes) {
        var clientList = Array.prototype.slice.call(arguments).slice(5);
        var clientManifest;
        var roomManifest = new com.socket24.RoomManifest();
        var theRoom;
        roomManifest.deserialize(roomID,
            roomAttributes,
            clientList,
            parseInt(occupantCount),
            parseInt(observerCount));

        if (requestID == "") {
            // Synchronize
            theRoom = this.roomMan.getRoom(roomID);

            if (theRoom == null) {
                // If the server makes the current client join or observe a room, it
                // will first send a u54 before sending the u6 or u59 notice. In that
                // case, the room might be unknown briefly, so create a cached room
                // then wait for the u6 or u59 to arrive.
                theRoom = this.roomMan.addCachedRoom(roomID);
            }

            theRoom.synchronize(roomManifest);
        } else {
            // Snapshot
            this.snapshotMan.receiveRoomSnapshot(requestID, roomManifest);
        }
    };


    /**
     * OBSERVED_ROOM
     */
    com.socket24.CoreMessageListener.prototype.u59 = function (roomID) {
        // Add the room to the observed room list
        var room = this.roomMan.addObservedRoom(roomID);
        // Tell the room to do its join duties
        room.doObserve();
        // Fire OBSERVE through the client
        this.clientMan.self().fireObserveRoom(room, roomID);
    };

    /**
     * GET_ROOM_SNAPSHOT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u60 = function (requestID,
                                                               roomID,
                                                               status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ROOM_NOT_FOUND:
            case com.socket24.Status.AUTHORIZATION_REQUIRED:
            case com.socket24.Status.AUTHORIZATION_FAILED:
            case com.socket24.Status.PERMISSION_DENIED:
                this.snapshotMan.receiveSnapshotResult(requestID, status);
                break;
            default:
                this.log.warn("Unrecognized status code for u60."
                    + " Request ID: [" + requestID + "], Room ID: ["
                    + roomID + "], status: [" + status + "].");
        }
    };

    /**
     * STOPPED_OBSERVING_ROOM
     */
    com.socket24.CoreMessageListener.prototype.u62 = function (roomID) {
        var theRoom = this.roomMan.getRoom(roomID);
        this.roomMan.removeObservedRoom(roomID);
        if (theRoom != null) {
            theRoom.doStopObserving();
            // self() might return null if a STOP_OBSERVING listener has closed the connection
            if (this.clientMan.self() != null) {
                this.clientMan.self().fireStopObservingRoom(theRoom, roomID);
            }
        }
    };

    /**
     * SERVER_HELLO
     */
    com.socket24.CoreMessageListener.prototype.u66 = function (serverVersion,
                                                               sessionID,
                                                               serverUPCVersionString,
                                                               protocolCompatible,
                                                               affinityAddress,
                                                               affinityDuration) {
        this.log.info("[vaida] Server version: " + serverVersion);
        this.log.info("[vaida] Server UPC version: " + serverUPCVersionString);

        var serverUPCVersion = new com.socket24.VersionNumber();
        serverUPCVersion.fromVersionString(serverUPCVersionString);
        this.vaida.getServer().setVersion(serverVersion);
        this.vaida.getServer().setUPCVersion(serverUPCVersion);


        var inProgressConnection = this.vaida.getConnectionManager().getInProgressConnection();
        var inProgressConnectionHost = inProgressConnection.getHost();
        if (affinityAddress != ""
            && typeof affinityAddress !== "undefined"
            && affinityAddress != inProgressConnectionHost) {
            this.vaida.getConnectionManager().setAffinity(inProgressConnectionHost,
                affinityAddress,
                parseFloat(affinityDuration));
            inProgressConnection.applyAffinity();
        }
    };


    /**
     * JOIN_ROOM_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u72 = function (roomID,
                                                               status) {
        var theRoom = this.roomMan.getRoom(roomID);
        switch (status) {
            case com.socket24.Status.ROOM_NOT_FOUND:
                if (this.roomMan.getRoom(roomID) != null) {
                    this.roomMan.disposeRoom(roomID);
                }

            case com.socket24.Status.ERROR:
            case com.socket24.Status.ROOM_FULL:
            case com.socket24.Status.AUTHORIZATION_REQUIRED:
            case com.socket24.Status.AUTHORIZATION_FAILED:
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ALREADY_IN_ROOM:
            case com.socket24.Status.PERMISSION_DENIED:
                this.roomMan.fireJoinRoomResult(roomID, status);
                if (theRoom != null) {
                    theRoom.doJoinResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u72."
                    + " Room ID: [" + roomID + "], status: [" + status + "].");
        }
    };

    /**
     * SET_CLIENT_ATTR_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u73 = function (attrScope,
                                                               clientID,
                                                               userID,
                                                               attrName,
                                                               attrOptions,
                                                               status) {
        var theClient;
        var theAccount;

        switch (status) {
            case com.socket24.Status.CLIENT_NOT_FOUND:
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
                break;

            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.DUPLICATE_VALUE:
            case com.socket24.Status.IMMUTABLE:
            case com.socket24.Status.SERVER_ONLY:
            case com.socket24.Status.EVALUATION_FAILED:
            case com.socket24.Status.PERMISSION_DENIED:
                if (parseInt(attrOptions) & com.socket24.AttributeOptions.FLAG_PERSISTENT) {
                    // Persistent attr
                    theAccount = this.accountMan.requestAccount(userID);
                    theAccount.getAttributeManager().fireSetAttributeResult(attrName, attrScope, status);
                } else {
                    // Non-persistent attr
                    theClient = this.clientMan.requestClient(clientID);
                    theClient.getAttributeManager().fireSetAttributeResult(attrName, attrScope, status);
                }
                break;

            default:
                this.log.warn("Unrecognized status received for u73: " + status);
        }
    };

    /**
     * SET_ROOM_ATTR_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u74 = function (roomID,
                                                               attrName,
                                                               status) {
        var theRoom = this.roomMan.getRoom(roomID);

        // Quit if the room isn't found
        if (theRoom == null) {
            this.log.warn("Room attribute update received for room with no" +
                " client-side Room object. Room ID [" +
                roomID + "]. Attribute: [" + attrName + "]. Status: ["
                + status + "].");
            return;
        }

        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.IMMUTABLE:
            case com.socket24.Status.SERVER_ONLY:
            case com.socket24.Status.EVALUATION_FAILED:
            case com.socket24.Status.ROOM_NOT_FOUND:
            case com.socket24.Status.PERMISSION_DENIED:
                theRoom.getAttributeManager().fireSetAttributeResult(attrName,
                    com.socket24.Tokens.GLOBAL_ATTR,
                    status);
                break;

            default:
                this.log.warn("Unrecognized status received for u74: " + status);
        }
    };

    /**
     * GET_CLIENTCOUNT_SNAPSHOT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u75 = function (requestID,
                                                               status) {
        this.snapshotMan.receiveSnapshotResult(requestID, status);
    };

    /**
     * LEAVE_ROOM_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u76 = function (roomID,
                                                               status) {
        var leftRoom = this.roomMan.getRoom(roomID);

        switch (status) {
            case com.socket24.Status.ROOM_NOT_FOUND:
                if (leftRoom != null) {
                    this.roomMan.disposeRoom(roomID);
                }

            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_IN_ROOM:
                this.roomMan.fireLeaveRoomResult(roomID, status);
                if (leftRoom != null) {
                    leftRoom.doLeaveResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u76."
                    + " Room ID: [" + roomID + "]. Status: [" + status + "].");
        }
    };

    /**
     * OBSERVE_ROOM_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u77 = function (roomID,
                                                               status) {
        var theRoom = this.roomMan.getRoom(roomID);
        switch (status) {
            case com.socket24.Status.ROOM_NOT_FOUND:
                if (theRoom != null) {
                    this.roomMan.disposeRoom(roomID);
                }

            case com.socket24.Status.ERROR:
            case com.socket24.Status.AUTHORIZATION_REQUIRED:
            case com.socket24.Status.AUTHORIZATION_FAILED:
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ALREADY_OBSERVING:
            case com.socket24.Status.PERMISSION_DENIED:
                this.roomMan.fireObserveRoomResult(roomID, status);

                if (theRoom) {
                    theRoom.doObserveResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u77."
                    + " Room ID: [" + roomID + "], status: " + status + ".");
        }
    }

    /**
     * STOP_OBSERVING_ROOM_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u78 = function (roomID,
                                                               status) {
        var theRoom = this.roomMan.getRoom(roomID);

        switch (status) {
            case com.socket24.Status.ROOM_NOT_FOUND:
                if (theRoom != null) {
                    this.roomMan.disposeRoom(roomID);
                }

            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_OBSERVING:
                this.roomMan.fireStopObservingRoomResult(roomID, status);

                if (theRoom != null) {
                    theRoom.doStopObservingResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u78."
                    + " Room ID: [" + roomID + "], status: " + status + ".");
        }
    };

    /**
     * ROOM_ATTR_REMOVED
     */
    com.socket24.CoreMessageListener.prototype.u79 = function (roomID,
                                                               byClientID,
                                                               attrName) {
        var theRoom = this.roomMan.getRoom(roomID);
        var theClient;

        // Quit if the room isn't found
        if (theRoom == null) {
            this.log.warn("Room attribute removal notification received for room with no" +
                " client-side Room object. Room ID [" +
                roomID + "]. Attribute: [" + attrName + "].");
            return;
        }

        // If the clientID is "", the server removed the room, so there's no
        // corresponding client.
        theClient = byClientID == "" ? null : this.clientMan.requestClient(byClientID);
        theRoom.getAttributeManager().removeAttributeLocal(attrName, com.socket24.Tokens.GLOBAL_ATTR, theClient)
    }

    /**
     * REMOVE_ROOM_ATTR_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u80 = function (roomID,
                                                               attrName,
                                                               status) {
        var theRoom = this.roomMan.getRoom(roomID);
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.IMMUTABLE:
            case com.socket24.Status.SERVER_ONLY:
            case com.socket24.Status.ROOM_NOT_FOUND:
            case com.socket24.Status.ATTR_NOT_FOUND:
            case com.socket24.Status.PERMISSION_DENIED:
                if (theRoom != null) {
                    theRoom.getAttributeManager().fireDeleteAttributeResult(attrName,
                        com.socket24.Tokens.GLOBAL_ATTR,
                        status);
                }
                break;

            default:
                this.log.warn("Unrecognized status received for u80: " + status);
        }
    };

    /**
     * CLIENT_ATTR_REMOVED
     */
    com.socket24.CoreMessageListener.prototype.u81 = function (attrScope,
                                                               clientID,
                                                               userID,
                                                               attrName,
                                                               attrOptions) {
        var client;
        var account;

        if (parseInt(attrOptions) & com.socket24.AttributeOptions.FLAG_PERSISTENT) {
            // Persistent attr
            account = this.accountMan.requestAccount(userID);
            account.getAttributeManager().removeAttributeLocal(attrName, attrScope);
        } else {
            // Non-persistent attr
            client = this.clientMan.requestClient(clientID);
            client.getAttributeManager().removeAttributeLocal(attrName, attrScope);
        }
    };

    /**
     * REMOVE_CLIENT_ATTR_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u82 = function (attrScope,
                                                               clientID,
                                                               userID,
                                                               attrName,
                                                               attrOptions,
                                                               status) {
        var client;
        var account;


        switch (status) {
            case com.socket24.Status.CLIENT_NOT_FOUND:
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
                break;
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.IMMUTABLE:
            case com.socket24.Status.SERVER_ONLY:
            case com.socket24.Status.ATTR_NOT_FOUND:
            case com.socket24.Status.EVALUATION_FAILED:
            case com.socket24.Status.PERMISSION_DENIED:
                if (parseInt(attrOptions) & com.socket24.AttributeOptions.FLAG_PERSISTENT) {
                    // Persistent attr
                    account = this.accountMan.requestAccount(userID);
                    account.getAttributeManager().fireDeleteAttributeResult(attrName, attrScope, status);
                } else {
                    // Non-persistent attr
                    client = this.clientMan.requestClient(clientID);
                    client.getAttributeManager().fireDeleteAttributeResult(attrName, attrScope, status);
                }
                break;

            default:
                this.log.warn("Unrecognized status received for u82: " + status);
        }
    };

    /**
     * SESSION_TERMINATED
     */
    com.socket24.CoreMessageListener.prototype.u84 = function () {
        this.vaida.getConnectionManager().dispatchSessionTerminated();
    };

    /**
     * LOGOFF_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u87 = function (userID, status) {
        var account = this.accountMan.getAccount(userID);

        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.AUTHORIZATION_FAILED:
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
            case com.socket24.Status.NOT_LOGGED_IN:
            case com.socket24.Status.PERMISSION_DENIED:
                if (account != null) {
                    account.fireLogoffResult(status);
                }
                // Tell the account manager
                this.accountMan.fireLogoffResult(userID, status);
                break;
            default:
                this.log.warn("Unrecognized status received for u87: " + status);
        }
    };

    /**
     * LOGGED_IN
     */
    com.socket24.CoreMessageListener.prototype.u88 = function (clientID,
                                                               userID,
                                                               globalAttrs) {
        var roomAttrs = Array.prototype.slice.call(arguments).slice(3);
        var account = this.accountMan.requestAccount(userID);
        var client = this.clientMan.requestClient(clientID);
        var clientManifest = new com.socket24.ClientManifest();
        clientManifest.deserialize(clientID, userID, null, null, globalAttrs, roomAttrs);
        // Update the account
        var scopes = clientManifest.persistentAttributes.getScopes();
        var accountAttrs = account.getAttributeManager().getAttributeCollection();
        for (var i = scopes.length; --i >= 0;) {
            accountAttrs.synchronizeScope(scopes[i], clientManifest.persistentAttributes);
        }

        if (client.getAccount() == null) {
            // Client doesn't know about this account yet
            client.setAccount(account);
            client.fireLogin();
            account.doLoginTasks();
            this.accountMan.fireLogin(account, clientID);
        } else {
            // Do nothing if the account is known. Logins are reported for
            // observe-account, observe-client, and watch-for-clients, so a
            // client might receive multiple login notifications.
        }
    };

    /**
     * LOGGED_OFF
     */
    com.socket24.CoreMessageListener.prototype.u89 = function (clientID, userID) {
        var client = this.clientMan.getInternalClient(clientID);
        var account = this.accountMan.getAccount(userID);

        if (account != null) {
            if (account.getConnectionState() == com.socket24.ConnectionState.LOGGED_IN) {
                if (client != null) {
                    client.fireLogoff(userID);
                }
                account.doLogoffTasks();
                this.accountMan.fireLogoff(account, clientID);
            } else {
                // Do nothing if the account is unknown. Logoffs are reported for
                // observe-account, observe-client, and watch-for-clients, so a
                // client might receive multiple logoff notifications.
            }
        } else {
            throw new Error("LOGGED_OFF (u89) received for an unknown user: [" + userID + "].");
        }
    }

    /**
     * PASSWORD_CHANGED
     */
    com.socket24.CoreMessageListener.prototype.u90 = function () {
        var self = this.vaida.self();
        var selfAccount = self.getAccount();
        if (selfAccount != null) {
            selfAccount.fireChangePassword();
        }
        this.accountMan.fireChangePassword(selfAccount ? selfAccount.getUserID() : null);
    };

    /**
     * CLIENTLIST_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u101 = function (requestID, serializedIDs) {
        var ids = serializedIDs.split(com.socket24.Tokens.RS);
        var clientList;
        var thisUserID;

        if (requestID == "") {
            // Synchronize
            this.clientMan.deserializeWatchedClients(serializedIDs);
        } else {
            // Snapshot
            clientList = [];
            for (var i = ids.length-1; i >= 0; i-=2) {
                thisUserID = ids[i];
                thisUserID = thisUserID == "" ? null : thisUserID;
                clientList.push({clientID:ids[i-1], userID:thisUserID});
            }
            this.snapshotMan.receiveClientListSnapshot(requestID, clientList);
        }
    };

    /**
     * CLIENT_ADDED_TO_SERVER
     */
    com.socket24.CoreMessageListener.prototype.u102 = function (clientID) {
        this.clientMan.addWatchedClient(this.clientMan.requestClient(clientID));
    };

    /**
     * CLIENT_REMOVED_FROM_SERVER
     */
    com.socket24.CoreMessageListener.prototype.u103 = function (clientID) {
        var client = this.clientMan.getInternalClient(clientID);

        if (this.clientMan.hasWatchedClient(clientID)) {
            this.clientMan.removeWatchedClient(clientID);
        }
        if (this.clientMan.isObservingClient(clientID)) {
            this.clientMan.removeObservedClient(clientID);
        }

        // If the current client is both observing a client and watching for clients,
        // it will receive two u103 notifications. When the second one arrives, the
        // client will be unknown, so no disconnection event should be dispatched.
        if (client != null) {
            client.setConnectionState(com.socket24.ConnectionState.NOT_CONNECTED);
            // Retrieve the client reference using getClient() here so that the
            // ClientManagerEvent.CLIENT_DISCONNECTED event provides the application
            // with access to the custom client, if available.
            this.clientMan.fireClientDisconnected(this.clientMan.getClient(clientID));
        }
    };

    /**
     * CLIENT_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u104 = function (requestID,
                                                                clientID,
                                                                userID,
                                                                serializedOccupiedRoomIDs,
                                                                serializedObservedRoomIDs,
                                                                globalAttrs) {
        var roomAttrs = Array.prototype.slice.call(arguments).slice(7);
        var theClient;
        var account = this.accountMan.requestAccount(userID);
        var clientManifest = new com.socket24.ClientManifest();
        clientManifest.deserialize(clientID, userID, serializedOccupiedRoomIDs,
            serializedObservedRoomIDs, globalAttrs, roomAttrs);
        var scopes; // Used with UserAccount only

        if (clientID != "") {
            // --- Client update ---

            if (requestID == "") {
                // Synchronize
                theClient = this.clientMan.requestClient(clientID);
                theClient.setAccount(account);
                theClient.synchronize(clientManifest);
                theClient.fireSynchronize();
            } else {
                // Snapshot
                this.snapshotMan.receiveClientSnapshot(requestID, clientManifest);
            }
        } else {
            // --- User account update ---

            if (requestID == "") {
                // Synchronize
                scopes = clientManifest.persistentAttributes.getScopes();
                for (var i = scopes.length; --i >= 0;) {
                    account.getAttributeManager().getAttributeCollection().synchronizeScope(scopes[i], clientManifest.persistentAttributes);
                }
                account.fireSynchronize();
            } else {
                // Snapshot
                this.snapshotMan.receiveAccountSnapshot(requestID, clientManifest);
            }
        }
    };

    /**
     * OBSERVE_CLIENT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u105 = function (clientID, status) {
        var theClient = this.clientMan.getInternalClient(clientID);
        switch (status) {
            case com.socket24.Status.CLIENT_NOT_FOUND:
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_OBSERVING:
            case com.socket24.Status.PERMISSION_DENIED:
                this.clientMan.fireObserveClientResult(clientID, status);
                if (theClient != null) {
                    theClient.fireObserveResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u105."
                    + " Client ID: [" + clientID + "], status: [" + status + "].");
        }
    };

    /**
     * STOP_OBSERVING_CLIENT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u106 = function (clientID, status) {
        var theClient = this.clientMan.getInternalClient(clientID);
        switch (status) {
            case com.socket24.Status.CLIENT_NOT_FOUND:
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_OBSERVING:
                this.clientMan.fireStopObservingClientResult(clientID, status);
                if (theClient != null) {
                    theClient.fireStopObservingResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u106."
                    + " Client ID: [" + clientID + "], status: [" + status + "].");
        }
    };

    /**
     * WATCH_FOR_CLIENTS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u107 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_WATCHING:
                this.clientMan.fireWatchForClientsResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u107."
                    + "Status: [" + status + "].");
        }
    };

    /**
     * STOP_WATCHING_FOR_CLIENTS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u108 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
                this.clientMan.setIsWatchingForClients(false);
                this.clientMan.removeAllWatchedClients();
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_WATCHING:
                this.clientMan.fireStopWatchingForClientsResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u108."
                    + "Status: [" + status + "].");
        }
    };

    /**
     * WATCH_FOR_USERS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u109 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
                this.accountMan.setIsWatchingForAccounts(true);
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_WATCHING:
                this.accountMan.fireWatchForAccountsResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u109."
                    + "Status: [" + status + "].");
        }
    };

    /**
     * STOP_WATCHING_FOR_USERS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u110 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
                this.accountMan.setIsWatchingForAccounts(false);
                this.accountMan.removeAllWatchedAccounts();
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_WATCHING:
                this.accountMan.fireStopWatchingForAccountsResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u110."
                    + "Status: [" + status + "].");
        }
    };

    /**
     * USER_ADDED
     */
    com.socket24.CoreMessageListener.prototype.u111 = function (userID) {
        this.accountMan.addWatchedAccount(this.accountMan.requestAccount(userID));
    };

    /**
     * USER_REMOVED
     */
    com.socket24.CoreMessageListener.prototype.u112 = function (userID) {
        var account;
        if (this.accountMan.hasWatchedAccount(userID)) {
            account = this.accountMan.removeWatchedAccount(userID);
        }
        if (this.accountMan.isObservingAccount(userID)) {
            account = this.accountMan.removeObservedAccount(userID);
        }
        this.accountMan.fireAccountRemoved(userID, account);
    };

    /**
     * JOINED_ROOM_ADDED_TO_CLIENT
     */
    com.socket24.CoreMessageListener.prototype.u113 = function (clientID, roomID) {
        var client = this.clientMan.requestClient(clientID);
        client.addOccupiedRoomID(roomID);
        client.fireJoinRoom(this.roomMan.getRoom(roomID), roomID);
    }

    /**
     * JOINED_ROOM_REMOVED_FROM_CLIENT
     */
    com.socket24.CoreMessageListener.prototype.u114 = function (clientID, roomID) {
        var client = this.clientMan.requestClient(clientID);
        client.removeOccupiedRoomID(roomID);
        client.fireLeaveRoom(this.roomMan.getRoom(roomID), roomID);
    };

    /**
     * GET_CLIENT_SNAPSHOT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u115 = function (requestID,
                                                                clientID,
                                                                status) {
        this.snapshotMan.receiveSnapshotResult(requestID, status);
    };

    /**
     * GET_ACCOUNT_SNAPSHOT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u116 = function (requestID,
                                                                userID,
                                                                status) {
        this.snapshotMan.receiveSnapshotResult(requestID, status);
    };

    /**
     * OBSERVED_ROOM_ADDED_TO_CLIENT
     */
    com.socket24.CoreMessageListener.prototype.u117 = function (clientID, roomID) {
        var client = this.clientMan.requestClient(clientID);
        client.addObservedRoomID(roomID);
        client.fireObserveRoom(this.roomMan.getRoom(roomID), roomID);
    };

    /**
     * OBSERVED_ROOM_REMOVED_FROM_CLIENT
     */
    com.socket24.CoreMessageListener.prototype.u118 = function (clientID, roomID) {
        var client = this.clientMan.requestClient(clientID);
        client.removeObservedRoomID(roomID);
        client.fireStopObservingRoom(this.roomMan.getRoom(roomID), roomID);
    }

    /**
     * CLIENT_OBSERVED
     */
    com.socket24.CoreMessageListener.prototype.u119 = function (clientID) {
        var client = this.clientMan.requestClient(clientID);
        this.clientMan.addObservedClient(client);
        client.fireObserve();
    };

    /**
     * STOPPED_OBSERVING_CLIENT
     */
    com.socket24.CoreMessageListener.prototype.u120 = function (clientID) {
        var client = this.clientMan.getInternalClient(clientID)
        this.clientMan.removeObservedClient(clientID);
        if (client != null) {
            client.fireStopObserving();
        }
    };

    /**
     * OBSERVE_ACCOUNT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u123 = function (userID, status) {
        var theAccount = this.accountMan.getAccount(userID);
        switch (status) {
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_OBSERVING:
                this.accountMan.fireObserveAccountResult(userID, status);
                if (theAccount) {
                    theAccount.fireObserveResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u123."
                    + " User ID: [" + userID + "], status: [" + status + "].");
        }
    };

    /**
     * ACCOUNT_OBSERVED
     */
    com.socket24.CoreMessageListener.prototype.u124 = function (userID) {
        var theAccount = this.accountMan.requestAccount(userID);
        this.accountMan.addObservedAccount(theAccount);
        theAccount.fireObserve();
    };

    /**
     * STOP_OBSERVING_ACCOUNT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u125 = function (userID, status) {
        var theAccount = this.accountMan.getAccount(userID);
        switch (status) {
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_OBSERVING:
                this.accountMan.fireStopObservingAccountResult(userID, status);
                if (theAccount) {
                    theAccount.fireStopObservingResult(status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u125."
                    + " User ID: [" + userID + "], status: [" + status + "].");
        }
    };

    /**
     * STOPPED_OBSERVING_ACCOUNT
     */
    com.socket24.CoreMessageListener.prototype.u126 = function (userID) {
        var account = this.accountMan.getAccount(userID);
        this.accountMan.removeObservedAccount(userID);
        if (account != null) {
            account.fireStopObserving();
        }
    };

    /**
     * ACCOUNT_LIST_UPDATE
     */
    com.socket24.CoreMessageListener.prototype.u127 = function (requestID, serializedIDs) {
        var ids = serializedIDs.split(com.socket24.Tokens.RS);
        var accountList;

        if (requestID == "") {
            // Synchronize
            this.accountMan.deserializeWatchedAccounts(serializedIDs);
        } else {
            // Snapshot
            accountList = [];
            for (var i = ids.length; --i >= 0;) {
                accountList.push(ids[i]);
            }
            this.snapshotMan.receiveAccountListSnapshot(requestID, accountList);
        }
    };

    /**
     * UPDATE_LEVELS_UPDATE
     */
    com.socket24.CoreMessageListener.prototype.u128 = function (updateLevels, roomID) {
        var room = this.roomMan.getRoom(roomID);
        var levels = new com.socket24.UpdateLevels();
        levels.fromInt(parseInt(updateLevels));
        if (room != null) {
            if (!levels.occupantList) {
                var occupantID;
                var occupantIDs = room.getOccupantIDs();
                var numOccupantIDs = occupantIDs.length;
                for (var i = 0; i < numOccupantIDs; i++) {
                    occupantID = occupantIDs[i];
                    room.removeOccupant(occupantID);
                }
            }
            if (!levels.observerList) {
                var observerID;
                var observerIDs = room.getObserverIDs();
                var numObserverIDs = observerIDs.length;
                for (i = 0; i < numObserverIDs; i++) {
                    observerID = observerIDs[i];
                    room.removeObserver(observerID);
                }
            }
            if (!levels.sharedRoomAttributes
                && !levels.allRoomAttributes) {
                room.getAttributeManager().removeAll();
            }
        }
    };

    /**
     * CLIENT_OBSERVED_ROOM
     */
    com.socket24.CoreMessageListener.prototype.u129 = function (roomID,
                                                                clientID,
                                                                userID,
                                                                globalAttributes,
                                                                roomAttributes) {
        var theClient = this.clientMan.requestClient(clientID);
        var account = this.accountMan.requestAccount(userID);
        var clientManifest;
        if (account != null
            && theClient.getAccount() != account) {
            theClient.setAccount(account);
        }

        // If it's not the current client, set the client's attributes.
        // (The current client obtains its own attributes through separate u8s.)
        var theRoom = this.roomMan.getRoom(roomID);
        if (!theClient.isSelf()) {
            clientManifest = new com.socket24.ClientManifest();
            clientManifest.deserialize(clientID, userID, null,
                null, globalAttributes, [roomID, roomAttributes]);
            theClient.synchronize(clientManifest);

            // If the client is observed, don't fire OBSERVE_ROOM; observed clients always
            // fire OBSERVE_ROOM based on observation updates. Likewise, don't fire OBSERVE_ROOM
            // on self; self fires OBSERVE_ROOM when it receives a u59.
            if (!this.clientMan.isObservingClient(clientID)) {
                theClient.fireObserveRoom(theRoom, roomID);
            }
        }

        // Add the client to the room's observer list
        theRoom.addObserver(theClient);
    };

    /**
     * CLIENT_STOPPED_OBSERVING_ROOM
     */
    com.socket24.CoreMessageListener.prototype.u130 = function (roomID,
                                                                clientID) {
        // Remove the room from the client's list of observed rooms
        var theClient = this.clientMan.requestClient(clientID);
        var theRoom = this.roomMan.getRoom(roomID);

        // Remove the client from the given room
        theRoom.removeObserver(clientID);

        // Don't fire STOP_OBSERVING_ROOM on self; self fires STOP_OBSERVING_ROOM
        // when it receives a u62.
        if (!theClient.isSelf()) {
            // If the client is observed, don't fire STOP_OBSERVING_ROOM; observed
            // clients always fire STOP_OBSERVING_ROOM based on observation updates.
            if (!this.clientMan.isObservingClient(clientID)) {
                theClient.fireStopObservingRoom(theRoom, roomID);
            }
        }
    };

    /**
     * ROOM_OCCUPANTCOUNT_UPDATE
     */
    com.socket24.CoreMessageListener.prototype.u131 = function (roomID,
                                                                numClients) {
        var levels = this.clientMan.self().getUpdateLevels(roomID);

        if (levels != null) {
            if (!levels.occupantList) {
                this.roomMan.getRoom(roomID).setNumOccupants(parseInt(numClients));
            }
        } else {
            throw new Error("[CORE_MESSAGE_LISTENER] Received a room occupant count" +
                " update (u131), but update levels are unknown for the room. Synchronization" +
                " error. Please report this error to union@user1.net.");
        }
    };

    /**
     * ROOM_OBSERVERCOUNT_UPDATE
     */
    com.socket24.CoreMessageListener.prototype.u132 = function (roomID,
                                                                numClients) {
        var levels = this.clientMan.self().getUpdateLevels(roomID);

        if (levels != null) {
            if (!levels.observerList) {
                this.roomMan.getRoom(roomID).setNumObservers(parseInt(numClients));
            }
        } else {
            throw new Error("[CORE_MESSAGE_LISTENER] Received a room observer count" +
                " update (u132), but update levels are unknown for the room. Synchronization" +
                " error. Please report this error to union@user1.net.");
        }
    }

    /**
     * ADD_ROLE_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u134 = function (userID, role, status) {
        var theAccount = this.accountMan.getAccount(userID);
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
            case com.socket24.Status.ROLE_NOT_FOUND:
            case com.socket24.Status.ALREADY_ASSIGNED:
            case com.socket24.Status.PERMISSION_DENIED:
                this.accountMan.fireAddRoleResult(userID, role, status);
                if (theAccount) {
                    theAccount.fireAddRoleResult(role, status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u134."
                    + " User ID: [" + userID + "], role: [" + role
                    + "], status: [" + status + "].");
        }
    };

    /**
     * REMOVE_ROLE_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u136 = function (userID, role, status) {
        var theAccount = this.accountMan.getAccount(userID);
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ACCOUNT_NOT_FOUND:
            case com.socket24.Status.ROLE_NOT_FOUND:
            case com.socket24.Status.NOT_ASSIGNED:
            case com.socket24.Status.PERMISSION_DENIED:
                this.accountMan.fireRemoveRoleResult(userID, role, status);
                if (theAccount) {
                    theAccount.fireRemoveRoleResult(role, status);
                }
                break;

            default:
                this.log.warn("Unrecognized status code for u136."
                    + " User ID: [" + userID + "], role: [" + role
                    + "], status: [" + status + "].");
        }
    };

    /**
     * BAN_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u138 = function (address, clientID, status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.CLIENT_NOT_FOUND:
            case com.socket24.Status.ALREADY_BANNED:
            case com.socket24.Status.PERMISSION_DENIED:
                this.clientMan.fireBanClientResult(address, clientID, status);
                break;

            default:
                this.log.warn("Unrecognized status code for u138."
                    + " Address: [" + address + "], clientID: [" + clientID
                    + "], status: [" + status + "].");
        }
    };

    /**
     * UNBAN_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u140 = function (address, status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_BANNED:
            case com.socket24.Status.PERMISSION_DENIED:
                this.clientMan.fireUnbanClientResult(address, status);
                break;

            default:
                this.log.warn("Unrecognized status code for u140."
                    + " Address: [" + address + "],"
                    + " status: [" + status + "].");
        }
    };

    /**
     * BANNED_LIST_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u142 = function (requestID, bannedListSource) {
        var bannedList = bannedListSource == "" ? [] : bannedListSource.split(com.socket24.Tokens.RS);

        if (requestID == "") {
            this.clientMan.setWatchedBannedAddresses(bannedList);
        } else {
            // Snapshot
            this.snapshotMan.receiveBannedListSnapshot(requestID, bannedList);
        }
    };

    /**
     * WATCH_FOR_BANNED_ADDRESSES_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u144 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_WATCHING:
            case com.socket24.Status.PERMISSION_DENIED:
                this.clientMan.fireWatchForBannedAddressesResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u144:"
                    + " [" + status + "].");
        }
    };

    /**
     * STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u146 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_WATCHING:
                this.clientMan.fireStopWatchingForBannedAddressesResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u146:"
                    + " [" + status + "].");
        }
    };

    /**
     * BANNED_ADDRESS_ADDED
     */
    com.socket24.CoreMessageListener.prototype.u147 = function (address) {
        this.clientMan.addWatchedBannedAddress(address);
    };

    /**
     * BANNED_ADDRESS_REMOVED
     */
    com.socket24.CoreMessageListener.prototype.u148 = function (address) {
        this.clientMan.removeWatchedBannedAddress(address);
    };

    /**
     * KICK_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u150 = function (clientID, status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.CLIENT_NOT_FOUND:
            case com.socket24.Status.PERMISSION_DENIED:
                this.clientMan.fireKickClientResult(clientID, status);
                break;

            default:
                this.log.warn("Unrecognized status code for u150:"
                    + " [" + status + "].");
        }
    };

    /**
     * SERVERMODULELIST_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u152 = function (requestID, serverModuleListSource) {
        var moduleListArray = serverModuleListSource == "" ? [] : serverModuleListSource.split(com.socket24.Tokens.RS);
        var moduleList = [];
        for (var i = 0; i < moduleListArray.length; i+= 3) {
            moduleList.push(new ModuleDefinition(moduleListArray[i],
                moduleListArray[i+1],
                moduleListArray[i+2]));
        }

        if (requestID == "") {
            this.log.warn("Incoming SERVERMODULELIST_SNAPSHOT UPC missing required requestID. Ignoring message.");
        } else {
            // Snapshot
            this.snapshotMan.receiveServerModuleListSnapshot(requestID, moduleList);
        }
    };

    /**
     * GET_UPC_STATS_SNAPSHOT_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u155 = function (requestID,
                                                                status) {
        this.snapshotMan.receiveSnapshotResult(requestID, status);
    };

    /**
     * UPC_STATS_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u156 = function (requestID,
                                                                totalUPCsProcessed,
                                                                numUPCsInQueue,
                                                                lastQueueWaitTime) {
        var longestUPCProcesses = Array.prototype.slice.call(arguments).slice(5);
        var upcProcessingRecord;
        for (var i = 0; i < longestUPCProcesses.length; i++) {
            upcProcessingRecord = new com.socket24eventNameProcessingRecord();
            upcProcessingRecord.deserialize(longestUPCProcesses[i]);
            longestUPCProcesses[i] = upcProcessingRecord;
        }

        this.snapshotMan.receiveUPCStatsSnapshot(requestID,
            parseFloat(totalUPCsProcessed),
            parseFloat(numUPCsInQueue),
            parseFloat(lastQueueWaitTime),
            longestUPCProcesses);
    };

    /**
     * RESET_UPC_STATS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u158 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
            case com.socket24.Status.ERROR:
            case com.socket24.Status.PERMISSION_DENIED:
                this.vaida.getServer().dispatchResetUPCStatsResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u158."
                    + "Status: [" + status + "].");
        }
    };

    /**
     * WATCH_FOR_PROCESSED_UPCS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u160 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
                this.vaida.getServer().setIsWatchingForProcessedUPCs(true);
            case com.socket24.Status.ERROR:
            case com.socket24.Status.ALREADY_WATCHING:
            case com.socket24.Status.PERMISSION_DENIED:
                this.vaida.getServer().dispatchWatchForProcessedUPCsResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u160."
                    + "Status: [" + status + "].");
        }
    };

    /**
     * PROCESSED_UPC_ADDED
     */
    com.socket24.CoreMessageListener.prototype.u161 = function (fromClientID,
                                                                fromUserID,
                                                                fromClientAddress,
                                                                queuedAt,
                                                                processingStartedAt,
                                                                processingFinishedAt,
                                                                source) {
        var upcProcessingRecord = new com.socket24eventNameProcessingRecord();
        upcProcessingRecord.deserializeParts(fromClientID,
            fromUserID,
            fromClientAddress,
            queuedAt,
            processingStartedAt,
            processingFinishedAt,
            source);
        this.vaida.getServer().dispatchUPCProcessed(upcProcessingRecord);
    };

    /**
     * STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT
     */
    com.socket24.CoreMessageListener.prototype.u163 = function (status) {
        switch (status) {
            case com.socket24.Status.SUCCESS:
                this.vaida.getServer().setIsWatchingForProcessedUPCs(false);
            case com.socket24.Status.ERROR:
            case com.socket24.Status.NOT_WATCHING:
            case com.socket24.Status.PERMISSION_DENIED:
                this.vaida.getServer().dispatchStopWatchingForProcessedUPCsResult(status);
                break;

            default:
                this.log.warn("Unrecognized status code for u163."
                    + "Status: [" + status + "].");
        }
    };


    /**
     * NODELIST_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u166 = function (requestID, nodeListSource) {
        var nodeIDs = nodeListSource == "" ? [] : nodeListSource.split(com.socket24.Tokens.RS);

        if (requestID == "") {
            this.log.warn("Incoming NODELIST_SNAPSHOT UPC missing required requestID. Ignoring message.");
        } else {
            // Snapshot
            this.snapshotMan.receiveNodeListSnapshot(requestID, nodeIDs);
        }
    };

    /**
     * GATEWAYS_SNAPSHOT
     */
    com.socket24.CoreMessageListener.prototype.u168 = function (requestID) {
        var gatewayListSource = Array.prototype.slice.call(arguments).slice(1);
        var gateways = [];

        var gateway;
        var gatewayBandwidth;
        var gatewayBandwidthSource;
        var gatewayIntervalSource;
        for (var i = 0; i < gatewayListSource.length; i+=8) {
            gateway = new com.socket24.Gateway();
            gateway.id = gatewayListSource[i];
            gateway.type = gatewayListSource[i+1];

            gateway.lifetimeConnectionsByCategory = gatewayListSource[i+2] === "" ? {} : this.createHashFromArg(gatewayListSource[i+2]);
            for (var p in gateway.lifetimeConnectionsByCategory) {
                gateway.lifetimeConnectionsByCategory[p] = parseFloat(gateway.lifetimeConnectionsByCategory[p]);
            }
            gateway.lifetimeClientsByType = gatewayListSource[i+3] === "" ? {} : this.createHashFromArg(gatewayListSource[i+3]);
            for (p in gateway.lifetimeClientsByType) {
                gateway.lifetimeClientsByType[p] = parseFloat(gateway.lifetimeClientsByType[p]);
            }
            gateway.lifetimeClientsByUPCVersion = gatewayListSource[i+4] === "" ? {} : this.createHashFromArg(gatewayListSource[i+4]);
            for (p in gateway.lifetimeClientsByUPCVersion) {
                gateway.lifetimeClientsByUPCVersion[p] = parseFloat(gateway.lifetimeClientsByUPCVersion[p]);
            }
            gateway.attributes = gatewayListSource[i+5] === "" ? {} : this.createHashFromArg(gatewayListSource[i+5]);

            gatewayIntervalSource = gatewayListSource[i+6].split(com.socket24.Tokens.RS);
            gateway.connectionsPerSecond = parseFloat(gatewayIntervalSource[0]);
            gateway.maxConnectionsPerSecond = parseFloat(gatewayIntervalSource[1]);
            gateway.clientsPerSecond = parseFloat(gatewayIntervalSource[2]);
            gateway.maxClientsPerSecond = parseFloat(gatewayIntervalSource[3]);

            gatewayBandwidth = new com.socket24.GatewayBandwidth();
            gatewayBandwidthSource = gatewayListSource[i+7].split(com.socket24.Tokens.RS);
            gatewayBandwidth.lifetimeRead = gatewayBandwidthSource[0] === "" ? 0 : parseFloat(gatewayBandwidthSource[0]);
            gatewayBandwidth.lifetimeWritten = gatewayBandwidthSource[1] === "" ? 0 : parseFloat(gatewayBandwidthSource[1]);
            gatewayBandwidth.averageRead = gatewayBandwidthSource[2] === "" ? 0 : parseFloat(gatewayBandwidthSource[2]);
            gatewayBandwidth.averageWritten = gatewayBandwidthSource[3] === "" ? 0 : parseFloat(gatewayBandwidthSource[3]);
            gatewayBandwidth.intervalRead = gatewayBandwidthSource[4] === "" ? 0 : parseFloat(gatewayBandwidthSource[4]);
            gatewayBandwidth.intervalWritten = gatewayBandwidthSource[5] === "" ? 0 : parseFloat(gatewayBandwidthSource[5]);
            gatewayBandwidth.maxIntervalRead = gatewayBandwidthSource[6] === "" ? 0 : parseFloat(gatewayBandwidthSource[6]);
            gatewayBandwidth.maxIntervalWritten = gatewayBandwidthSource[7] === "" ? 0 : parseFloat(gatewayBandwidthSource[7]);
            gatewayBandwidth.scheduledWrite = gatewayBandwidthSource[8] === "" ? 0 : parseFloat(gatewayBandwidthSource[8]);
            gateway.bandwidth = gatewayBandwidth;
            gateways.push(gateway);
        }

        if (requestID == "") {
            this.log.warn("Incoming GATEWAYS_SNAPSHOT UPC missing required requestID. Ignoring message.");
        } else {
            // Snapshot
            this.snapshotMan.receiveGatewaysSnapshot(requestID, gateways);
        }
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.CustomClient = function () {
        this.client = null;
    };

    /**
     * An initialization method invoked when this CustomClient object is ready
     * for use. Subclasses wishing to perform initialization tasks that require
     * this CustomClient's composed Client object should override this method.
     *
     * @since Vaida 1.0.0
     */
    com.socket24.CustomClient.prototype.init = function () {
    };

    com.socket24.CustomClient.prototype.addEventListener = function (type,
                                                                     listener,
                                                                     thisArg,
                                                                     priority) {
        this.client.addEventListener(type, listener, thisArg, priority);
    };

    com.socket24.CustomClient.prototype.dispatchEvent = function (event) {
        return this.client.dispatchEvent(event);
    };

    com.socket24.CustomClient.prototype.hasEventListener = function (type) {
        return this.client.hasEventListener(type);
    };

    com.socket24.CustomClient.prototype.removeEventListener = function (type,
                                                                        listener,
                                                                        thisObj) {
        this.client.removeEventListener(type, listener, thisObj);
    };

    com.socket24.CustomClient.prototype.willTrigger = function (type) {
        return this.client.willTrigger(type);
    };

    com.socket24.CustomClient.prototype.setClient = function (client) {
        this.client = client;
    };

    com.socket24.CustomClient.prototype.getClientID = function () {
        return this.client.getClientID();
    };

    com.socket24.CustomClient.prototype.getConnectionState = function () {
        return this.client.getConnectionState();
    };

    com.socket24.CustomClient.prototype.isSelf = function () {
        return this.client.isSelf();
    };

    com.socket24.CustomClient.prototype.setClientClass = function (scope,
                                                                   clientClass) {
        var fallbackClasses = Array.prototype.slice.call(arguments).slice(2);
        this.client.setClientClass.apply(this.client, [scope, clientClass].concat(fallbackClasses));
    };

    com.socket24.CustomClient.prototype.isInRoom = function (roomID) {
        return this.client.isInRoom(roomID);
    };

    com.socket24.CustomClient.prototype.isObservingRoom = function (roomID) {
        return this.client.isObservingRoom(roomID);
    };

    com.socket24.CustomClient.prototype.getOccupiedRoomIDs = function () {
        return this.client.getOccupiedRoomIDs();
    };

    com.socket24.CustomClient.prototype.getObservedRoomIDs = function () {
        return this.client.getObservedRoomIDs();
    };

    com.socket24.CustomClient.prototype.getIP = function () {
        return this.client.getIP();
    };

    com.socket24.CustomClient.prototype.getConnectTime = function () {
        return this.client.getConnectTime();
    };

    com.socket24.CustomClient.prototype.getPing = function () {
        return this.client.getPing();
    };

    com.socket24.CustomClient.prototype.getTimeOnline = function () {
        return this.client.getTimeOnline();
    };

    com.socket24.CustomClient.prototype.sendMessage = function (messageName) {
        var args = Array.prototype.slice.call(arguments).slice(0);
        this.client.sendMessage.apply(this.client, args);
    };

    com.socket24.CustomClient.prototype.setAttribute = function (attrName,
                                                                 attrValue,
                                                                 attrScope,
                                                                 isShared,
                                                                 evaluate) {
        this.client.setAttribute(attrName, attrValue, attrScope, isShared, evaluate);
    };

    com.socket24.CustomClient.prototype.deleteAttribute = function (attrName, attrScope) {
        this.client.deleteAttribute(attrName, attrScope);
    };

    com.socket24.CustomClient.prototype.getAttribute = function (attrName, attrScope) {
        return this.client.getAttribute(attrName, attrScope);
    };

    com.socket24.CustomClient.prototype.getAttributes = function () {
        return this.client.getAttributes();
    };

    com.socket24.CustomClient.prototype.getAttributesByScope = function (scope) {
        return this.client.getAttributesByScope();
    };

    com.socket24.CustomClient.prototype.getClientManager = function () {
        return this.client.getClientManager();
    };

    com.socket24.CustomClient.prototype.getAccount = function () {
        return this.client.getAccount();
    };

    com.socket24.CustomClient.prototype.kick = function () {
        this.client.kick();
    };

    com.socket24.CustomClient.prototype.ban = function (duration, reason) {
        this.client.ban(duration, reason);
    };

    com.socket24.CustomClient.prototype.observe = function () {
        this.client.observe();
    };

    com.socket24.CustomClient.prototype.stopObserving = function () {
        this.client.stopObserving();
    };

    com.socket24.CustomClient.prototype.isAdmin = function () {
        return this.client.isAdmin();
    };

    com.socket24.CustomClient.prototype.toString = function () {
        return "[object CustomClient, ID: " + this.getClientID() + "]";
    };
//==============================================================================
// EVENT UTILITIES
//==============================================================================
    /** @class */
    com.socket24.utilities.EventUtil = new Object();

    com.socket24.utilities.EventUtil.migrateListeners = function (oldObject,
                                                                  newObject,
                                                                  events,
                                                                  thisObj) {
        var len = events.length
        for (var i = 0; i < len; i += 2) {
            if (oldObject != null) {
                oldObject.removeEventListener(events[i], events[i+1], thisObj);
            }
            if (newObject != null) {
                newObject.addEventListener(events[i], events[i+1], thisObj);
            }
        }
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.filters.FilterSet = function () {
        this.filters = new Array();
    };

    com.socket24.filters.FilterSet.prototype.addFilter = function (filter) {
        this.filters.push(filter);
    };

    com.socket24.filters.FilterSet.prototype.getFilters = function () {
        return this.filters.slice(0);
    };

    com.socket24.filters.FilterSet.prototype.toXMLString = function () {
        var s = "<filters>\n";

        var filter;
        for (var i = 0; i < this.filters.length; i++) {
            filter = this.filters[i];
            s += filter.toXMLString() + "\n";
        }
        s += "</filters>";
        return s;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.GatewayBandwidth = function () {
        /**
         * @field
         * @type Number
         */
        this.lifetimeRead = 0;
        /**
         * @field
         * @type Number
         */
        this.lifetimeWritten = 0;
        /**
         * @field
         * @type Number
         */
        this.averageRead = 0;
        /**
         * @field
         * @type Number
         */
        this.averageWritten = 0;
        /**
         * @field
         * @type Number
         */
        this.intervalRead = 0;
        /**
         * @field
         * @type Number
         */
        this.intervalWritten = 0;
        /**
         * @field
         * @type Number
         */
        this.maxIntervalRead = 0;
        /**
         * @field
         * @type Number
         */
        this.maxIntervalWritten = 0;
        /**
         * @field
         * @type Number
         */
        this.scheduledWrite = 0;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.Gateway = function () {
        /**
         * @field
         * @type String
         this.id = null;
         /**
         * @field
         * @type String
         */
        this.type = null;
        /**
         * @field
         * @type Object
         */
        this.lifetimeConnectionsByCategory = null;
        /**
         * @field
         * @type Object
         */
        this.lifetimeClientsByType = null;
        /**
         * @field
         * @type Object
         */
        this.lifetimeClientsByUPCVersion = null;
        /**
         * @field
         * @type Object
         */
        this.attributes = null;
        /**
         * @field
         * @type Number
         */
        this.connectionsPerSecond = 0;
        /**
         * @field
         * @type Number
         */
        this.maxConnectionsPerSecond = 0;
        /**
         * @field
         * @type Number
         */
        this.clientsPerSecond = 0;
        /**
         * @field
         * @type Number
         */
        this.maxClientsPerSecond = 0;
        /**
         * @field
         * @type com.socket24.GatewayBandwidth
         */
        this.bandwidth = null;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.utilities.LRUCache = function (maxLength) {
        this.maxLength = maxLength;
        this.length = 0;
        this.hash = new com.socket24.utilities.UDictionary();
        this.first = null;
        this.last = null;
    };

    com.socket24.utilities.LRUCache.prototype.get = function (key) {
        var node = this.hash[key];

        if (node != null) {
            this.moveToHead(node);
            return node.value;
        } else {
            return null;
        }
    };

    com.socket24.utilities.LRUCache.prototype.put = function (key, value) {
        var node = this.hash[key];
        if (node == null) {
            if (this.length >= this.maxLength) {
                this.removeLast();
            } else {
                this.length++;
            }
            node = new com.socket24.utilities.CacheNode();
        }

        node.value = value;
        node.key = key;
        this.moveToHead(node);
        this.hash[key] = node;
    };

    com.socket24.utilities.LRUCache.prototype.remove = function (key) {
        var node = this.hash[key];
        if (node != null) {
            if (node.prev != null) {
                node.prev.next = node.next;
            }
            if (node.next != null) {
                node.next.prev = node.prev;
            }
            if (this.last == node) {
                this.last = node.prev;
            }
            if (this.first == node) {
                this.first = node.next;
            }
        }
        return node;
    }

    com.socket24.utilities.LRUCache.prototype.clear = function () {
        this.first = null;
        this.last = null;
        this.length = 0;
        this.hash = new com.socket24.utilities.UDictionary();
    };

    /**
     * @private
     */
    com.socket24.utilities.LRUCache.prototype.removeLast = function () {
        if (this.last != null) {
            delete this.hash[this.last.key];
            if (this.last.prev != null) {
                this.last.prev.next = null;
            } else {
                this.first = null;
            }
            this.last = this.last.prev;
        }
    };

    /**
     * @private
     */
    com.socket24.utilities.LRUCache.prototype.moveToHead = function (node) {
        if (node == this.first) {
            return;
        }
        if (node.prev != null) {
            node.prev.next = node.next;
        }
        if (node.next != null) {
            node.next.prev = node.prev;
        }
        if (this.last == node) {
            this.last = node.prev;
        }
        if (this.first != null) {
            node.next = this.first;
            this.first.prev = node;
        }
        this.first = node;
        node.prev = null;
        if (this.last == null) {
            this.last = this.first;
        }
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.ModuleDefinition = function (id, type, source) {
        this.id = id;
        this.type = type;
        this.source = source;
    };
//==============================================================================
// MODULE TYPE CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.ModuleType = new Object();
    /** @constant */
    com.socket24.ModuleType.CLASS = "class";
    /** @constant */
    com.socket24.ModuleType.SCRIPT = "script";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.NodeListSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.nodeList = null;
        this.method = com.socket24eventName.GET_NODELIST_SNAPSHOT;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.NodeListSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.NodeListSnapshot.prototype.setNodeList = function (value) {
        this.nodeList = value;
    }

    com.socket24.snapshot.NodeListSnapshot.prototype.getNodeList = function () {
        if (!this.nodeList) {
            return null;
        }
        return this.nodeList.slice();
    };
//==============================================================================
// A COLLECTION OF NUMERIC UTILITIES
//==============================================================================
    /** @class */
    com.socket24.utilities.integer = new Object();
    /** @constant */
    com.socket24.utilities.integer.MAX_VALUE = Math.pow(2,32) - 1;
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.filters.BooleanGroup
     */
    com.socket24.filters.OrGroup = function () {
        com.socket24.filters.BooleanGroup.call(this, com.socket24.filters.BooleanGroupType.OR);
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.filters.OrGroup, com.socket24.filters.BooleanGroup);
    /**
     * @private
     */
    com.socket24eventName.RemoveClientAttr = function (clientID, userID, name, scope) {
        // Abort if name is invalid.
        if (!com.socket24.Validator.isValidAttributeName(name)) {
            throw new Error("Cannot delete attribute. Illegal name" +
                " (see Validator.isValidAttributeName()): " + name);
        }

        // Abort if scope is invalid.
        if (!com.socket24.Validator.isValidAttributeScope(scope)) {
            throw new Error("Cannot delete client attribute. Illegal scope" +
                " (see Validator.isValidAttributeScope()): " + scope);
        }

        this.method = com.socket24eventName.REMOVE_CLIENT_ATTR;
        this.args   = [clientID, userID, name, scope];
    };
    /**
     * @private
     */
    com.socket24eventName.RemoveRoomAttr = function (roomID, name) {
        // Abort if name is invalid.
        if (!com.socket24.Validator.isValidAttributeName(name)) {
            throw new Error("Cannot delete attribute. Illegal name" +
                " (see Validator.isValidAttributeName()): " + name);
        }

        this.method = com.socket24eventName.REMOVE_ROOM_ATTR;
        this.args   = [roomID, name];
    };
    /** @function */
    com.socket24.utilities.resolveMemberExpression = function (value) {
        var parts = value.split(".");
        var reference = globalObject;
        for (var i = 0; i < parts.length; i++) {
            reference = reference[parts[i]];
        }
        return reference;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The Room class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.RoomEvent.JOIN}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.JOIN_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.LEAVE}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.LEAVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.ADD_OCCUPANT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.REMOVE_OCCUPANT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.ADD_OBSERVER}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.REMOVE_OBSERVER}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.UPDATE_CLIENT_ATTRIBUTE}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.DELETE_CLIENT_ATTRIBUTE}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.OCCUPANT_COUNT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.OSERVER_COUNT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.SYNCHRONIZE}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.OBSERVE}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.OBSERVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.STOP_OBSERVING}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.STOP_OBSERVING_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.REMOVED}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.DELETE}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.UPDATE}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.SET_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AttributeEvent.DELETE_RESULT}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.Room = function (id,
                                  roomManager,
                                  messageManager,
                                  clientManager,
                                  accountManager,
                                  log) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        // Variables
        this.disposed = false;
        this.id = null;
        this.syncState = null;
        this._clientIsInRoom = false;
        this._clientIsObservingRoom = false;
        this.numOccupants = 0;
        this.numObservers = 0;
        this.defaultClientClass = null;

        // Initialization
        this.setRoomID(id);
        this.roomManager    = roomManager;
        this.messageManager = messageManager;
        this.clientManager  = clientManager;
        this.accountManager = accountManager;
        this.log = log;

        this.occupantList     = new com.socket24.ClientSet();
        this.observerList     = new com.socket24.ClientSet();
        this.attributeManager = new com.socket24.AttributeManager(this, this.messageManager, this.log);

        this.setSyncState(com.socket24.SynchronizationState.NOT_SYNCHRONIZED);
    }

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.Room, com.socket24.events.EventDispatcher);

// =============================================================================
// DEPENDENCIES
// =============================================================================
    /** @private */
    com.socket24.Room.prototype.getAttributeManager = function () {
        return this.attributeManager;
    };

// =============================================================================
// ROOM ID MANAGEMENT
// =============================================================================

    /**
     * @private
     */
    com.socket24.Room.prototype.setRoomID = function (roomID) {
        var errorMsg;
        if (!com.socket24.Validator.isValidResolvedRoomID(roomID)) {
            errorMsg = "Invalid room ID specified during room creation. Offending ID: " + roomID;
            this.log.error(errorMsg);
            throw new Error(errorMsg);
        }
        this.id = roomID;
    };

    com.socket24.Room.prototype.getRoomID = function () {
        return this.id;
    };

    com.socket24.Room.prototype.getSimpleRoomID = function () {
        return com.socket24.RoomIDParser.getSimpleRoomID(this.id);
    };

    com.socket24.Room.prototype.getQualifier = function () {
        return com.socket24.RoomIDParser.getQualifier(this.id);
    };

// =============================================================================
// JOIN/LEAVE
// =============================================================================

    com.socket24.Room.prototype.join = function (password,
                                                 updateLevels) {
        if (this.disposed) return;

        // Client can't join a room the its already in.
        if (this.clientIsInRoom()) {
            this.log.warn(this + "Room join attempt aborted. Already in room.");
            return;
        }
        // Validate the password
        if (password == null) {
            password = "";
        }
        if (!com.socket24.Validator.isValidPassword(password)) {
            this.log.error(this + "Invalid room password supplied to join(). "
                + " Join request not sent. See Validator.isValidPassword().");
            return;
        }

        // If any update levels are specified, send them before joining.
        if (updateLevels != null) {
            this.setUpdateLevels(updateLevels);
        }

        this.messageManager.emitSocketMessage(com.socket24eventName.JOIN_ROOM,
            this.getRoomID(),
            password);
    };

    com.socket24.Room.prototype.leave = function () {
        if (this.disposed) return;

        if (this.clientIsInRoom()) {
            this.messageManager.emitSocketMessage(com.socket24eventName.LEAVE_ROOM, this.getRoomID());
        } else {
            this.log.debug(this + " Leave-room request ignored. Not in room.");
        }
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.doJoin = function () {
        this._clientIsInRoom = true;
        this.fireJoin();
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.doJoinResult = function (status) {
        this.fireJoinResult(status);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.doLeave = function () {
        var rid = this.getRoomID();

        // If the client is not observing the room, then dispose
        // of all of the room's information.
        if (!this.clientIsObservingRoom()) {
            this.purgeRoomData();
        }

        // Note that the client is no longer in this room.
        this._clientIsInRoom = false;
        this.fireLeave();
    }

    /**
     * @private
     */
    com.socket24.Room.prototype.doLeaveResult = function (status) {
        this.fireLeaveResult(status);
    };

//==============================================================================
// MESSAGING
//==============================================================================

    com.socket24.Room.prototype.sendMessage = function (messageName,
                                                        includeSelf,
                                                        filters) {
        if (this.disposed) return;

        // Delegate to RoomManager.sendMessage()
        var rest = Array.prototype.slice.call(arguments).slice(3)
        var roomMan = this.roomManager;
        var args = [messageName,
            [this.getRoomID()],
            includeSelf,
            filters != null ? filters : null];
        roomMan.sendMessage.apply(roomMan, args.concat(rest));
    };

    com.socket24.Room.prototype.addMessageListener = function (message, listener, thisArg) {
        if (this.messageManager != null) {
            this.messageManager.addMessageListener(message,
                listener,
                thisArg,
                [this.getRoomID()]);
        }
    };

    com.socket24.Room.prototype.removeMessageListener = function (message, listener) {
        if (this.messageManager != null) {
            this.messageManager.removeMessageListener(message,
                listener);
        }
    };

    com.socket24.Room.prototype.hasMessageListener = function (message,
                                                               listener) {
        // First, get the list of messsage listeners for this message
        var listeners = this.messageManager.getMessageListeners(message);
        var messageListener;
        for (var i = 0; i < listeners.length; i++) {
            messageListener = listeners[i];
            var listenerRoomIDs = messageListener.getForRoomIDs();
            // ===== Run once for each room id =====
            var listenerRoomID;
            for (var j = 0; j < listenerRoomIDs.length; j++) {
                listenerRoomID = listenerRoomIDs[i];
                if (listenerRoomID == this.getRoomID()) {
                    return true;
                }
            }
        }
        return false;
    };

//==============================================================================
// SYNCHRONIZATION
//==============================================================================

    /**
     * @private
     */
    com.socket24.Room.prototype.synchronize = function (manifest) {
        var oldSyncState = this.getSyncState();
        this.log.debug(this + " Begin synchronization.");
        this.setSyncState(com.socket24.SynchronizationState.SYNCHRONIZING);

        // SYNC ROOM ATTRIBUTES
        this.getAttributeManager().getAttributeCollection().synchronizeScope(com.socket24.Tokens.GLOBAL_ATTR, manifest.attributes);
        if (this.disposed) {
            return;
        }

        // SYNC OCCUPANT LIST
        var oldOccupantList = this.getOccupantIDs();
        var newOccupantList = [];
        var thisOccupantClientID;
        var thisOccupantUserID;
        var thisOccupant;
        var thisOccupantAccount;

        // Add all unknown occupants to the room's occupant list, and
        // synchronize all existing occupants.
        for (var i = manifest.occupants.length; --i >= 0;) {
            thisOccupantClientID = manifest.occupants[i].clientID;
            thisOccupantUserID = manifest.occupants[i].userID;

            newOccupantList.push(thisOccupantClientID);

            thisOccupant = this.clientManager.requestClient(thisOccupantClientID);
            // Init user account, if any
            thisOccupantAccount = this.accountManager.requestAccount(thisOccupantUserID);
            if (thisOccupantAccount != null) {
                thisOccupant.setAccount(thisOccupantAccount);
            }

            // If it's not the current client, update it.
            // The current client obtains its attributes through separate u8s.
            if (!thisOccupant.isSelf()) {
                thisOccupant.synchronize(manifest.occupants[i]);
            }

            this.addOccupant(thisOccupant);
            if (this.disposed) {
                return;
            }
        }

        // Remove occupants that are now gone...
        var oldClientID;
        for (i = oldOccupantList.length; --i >= 0;) {
            oldClientID = oldOccupantList[i];
            if (com.socket24.utilities.ArrayUtil.indexOf(newOccupantList, oldClientID) == -1) {
                this.removeOccupant(oldClientID);
                if (this.disposed) {
                    return;
                }
            }
        }

        // SYNC OBSERVER LIST
        var oldObserverList = this.getObserverIDs();
        var newObserverList = [];
        var thisObserverClientID;
        var thisObserverUserID;
        var thisObserver;
        var thisObserverAccount;

        // Add all unknown observers to the room's observer list, and
        // synchronize all existing observers.
        for (i = manifest.observers.length; --i >= 0;) {
            thisObserverClientID = manifest.observers[i].clientID;
            thisObserverUserID = manifest.observers[i].userID;

            newObserverList.push(thisObserverClientID);

            thisObserver = this.clientManager.requestClient(thisObserverClientID);
            // Init user account, if any
            thisObserverAccount = this.accountManager.requestAccount(thisObserverUserID);
            if (thisObserverAccount != null) {
                thisObserver.setAccount(thisObserverAccount);
            }

            // If it's not the current client, update it.
            // The current client obtains its attributes through separate u8s.
            if (!thisObserver.isSelf()) {
                thisObserver.synchronize(manifest.observers[i]);
            }

            this.addObserver(thisObserver);
            if (this.disposed) {
                return;
            }
        }

        // Remove observers that are now gone...
        var oldClientID;
        for (i = oldObserverList.length; --i >= 0;) {
            oldClientID = oldObserverList[i]
            if (com.socket24.utilities.ArrayUtil.indexOf(newObserverList, oldClientID) == -1) {
                this.removeObserver(oldClientID);
                if (this.disposed) {
                    return;
                }
            }
        }

        // UPDATE CLIENT COUNTS
        //   If a client list is available, use its length to calculate the
        //   client count. That way, the list length and the "get count" method
        //   return values will be the same (e.g., getOccupants().length and
        //   getNumOccupants()). Otherwise, rely on the server's reported count.
        var levels = this.clientManager.self().getUpdateLevels(this.getRoomID());
        if (levels.occupantList) {
            this.setNumOccupants(this.occupantList.length());
        } else if (levels.occupantCount) {
            this.setNumOccupants(manifest.occupantCount);
        }
        if (levels.observerList) {
            this.setNumObservers(this.observerList.length());
        } else if (levels.observerCount) {
            this.setNumObservers(manifest.observerCount);
        }

        // Update sync state
        this.setSyncState(oldSyncState);

        // Tell listeners that synchronization is complete
        this.fireSynchronize(com.socket24.Status.SUCCESS);
    }

    /**
     * @private
     */
    com.socket24.Room.prototype.setSyncState = function (newSyncState) {
        this.syncState = newSyncState;
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.updateSyncState = function () {
        if (this.disposed) {
            this.setSyncState(com.socket24.SynchronizationState.NOT_SYNCHRONIZED);
        } else {
            if (this.roomManager.hasObservedRoom(this.getRoomID())
                || this.roomManager.hasOccupiedRoom(this.getRoomID())
                || this.roomManager.hasWatchedRoom(this.getRoomID())) {
                this.setSyncState(com.socket24.SynchronizationState.SYNCHRONIZED);
            } else {
                this.setSyncState(com.socket24.SynchronizationState.NOT_SYNCHRONIZED);
            }
        }
    }

    com.socket24.Room.prototype.getSyncState = function () {
        return this.syncState;
    };

//==============================================================================
// UPDATE LEVELS
//==============================================================================

    com.socket24.Room.prototype.setUpdateLevels = function (updateLevels) {
        if (this.messageManager) {
            this.messageManager.emitSocketMessage(com.socket24eventName.SET_ROOM_UPDATE_LEVELS,
                this.getRoomID(),
                updateLevels.toInt());
        }
    };

//==============================================================================
// OBSERVATION
//==============================================================================

    com.socket24.Room.prototype.observe = function (password,
                                                    updateLevels) {
        if (this.disposed) return;

        this.roomManager.observeRoom(this.getRoomID(),
            password,
            updateLevels);
    };


    com.socket24.Room.prototype.stopObserving = function () {
        if (this.disposed) return;

        if (this.clientIsObservingRoom()) {
            this.messageManager.emitSocketMessage(com.socket24eventName.STOP_OBSERVING_ROOM, this.getRoomID());
        } else {
            this.log.debug(this + " Stop-observing-room request ignored. Not observing room.");
        }
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.doObserve = function () {
        this._clientIsObservingRoom = true;
        this.fireObserve();
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.doObserveResult = function (status) {
        this.fireObserveResult(status);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.doStopObserving = function () {
        var rid = this.getRoomID();

        // If the client is not in the room, then we dispose
        // of all of the room's information.
        if (!this.clientIsInRoom()) {
            this.purgeRoomData();
        }

        this._clientIsObservingRoom = false;

        this.fireStopObserving();
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.doStopObservingResult = function (status) {
        this.fireStopObservingResult(status);
    }

//==============================================================================
// OCCUPANT MANAGEMENT
//==============================================================================

    /**
     * @private
     */
    com.socket24.Room.prototype.addOccupant = function (client) {
        // Don't add the client if it's already in the list.
        if (this.occupantList.contains(client)) {
            this.log.info(this + " ignored addOccupant() request. Occupant list" +
                " already contains client:" + client + ".");
            return;
        }

        // Add the client
        this.occupantList.add(client);

        // Update the number of clients in the room
        this.setNumOccupants(this.occupantList.length());

        // Register for attribute change events
        if (!this.observerList.contains(client)) {
            this.addClientAttributeListeners(client);
        }

        // Tell listeners an occupant was added
        this.fireAddOccupant(client.getClientID());
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.removeOccupant = function (clientID) {
        var client = this.occupantList.removeByClientID(clientID);
        var clientFound = client != null;

        // Update the number of clients in the room
        this.setNumOccupants(this.occupantList.length());

        // Unregister for attribute change events
        if (!this.observerList.contains(client)) {
            this.removeClientAttributeListeners(client);
        }

        // Tell listeners an occupant was removed
        var customClient = client.getCustomClient(this.getRoomID());
        this.fireRemoveOccupant(customClient != null ? customClient : client);

        if (!clientFound) {
            this.log.debug(this + " could not remove occupant: "
                + clientID + ". No such client in the room's occupant list.");
        }
    };

    com.socket24.Room.prototype.getOccupantIDs = function () {
        if (this.disposed) return null;

        return this.occupantList.getAllIDs();
    }

    com.socket24.Room.prototype.getOccupants = function () {
        if (this.disposed) return null;

        var occupants = this.occupantList.getAll();
        var occupantsList = new Array();
        var customClient;
        var occupant;

        for (var clientID in occupants) {
            occupant = occupants[clientID];
            customClient = occupant.getCustomClient(this.getRoomID());
            if (customClient != null) {
                occupantsList.push(customClient);
            } else {
                occupantsList.push(occupant);
            }
        }
        return occupantsList;
    }

    /**
     * @private
     */
    com.socket24.Room.prototype.getOccupantsInternal = function () {
        return this.occupantList.getAll();
    }

    com.socket24.Room.prototype.clientIsInRoom = function (clientID) {
        if (this.disposed) return false;

        if (clientID == null) {
            return this._clientIsInRoom;
        }
        return this.occupantList.containsClientID(clientID);
    };

    com.socket24.Room.prototype.getNumOccupants = function () {
        if (this.disposed) return 0;

        var levels = this.clientManager.self().getUpdateLevels(this.getRoomID());;
        if (levels != null) {
            if (levels.occupantCount || levels.occupantList) {
                return this.numOccupants;
            } else {
                this.log.warn(this + " getNumOccupants() called, but no occupant count is " +
                    "available. To enable occupant count, turn on occupant list" +
                    " updates or occupant count updates via the Room's setUpdateLevels()" +
                    " method.");
                return 0;
            }
        } else {
            this.log.debug(this + " getNumOccupants() called, but the current client's update"
                + " levels for the room are unknown. To determine the room's"
                + " occupant count, first join or observe the room.");
            return 0;
        }
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.setNumOccupants = function (newNumOccupants) {
        var oldNumClients = this.numOccupants;
        this.numOccupants = newNumOccupants;

        // Tell listeners that the number of clients in the room has changed.
        if (oldNumClients != newNumOccupants) {
            this.fireOccupantCount(newNumOccupants);
        }
    };

//==============================================================================
// ROOM SETTINGS
//==============================================================================

    com.socket24.Room.prototype.getRoomSettings = function () {
        if (this.disposed) return null;

        var settings = new com.socket24.RoomSettings();
        var maxClients = this.getAttribute(com.socket24.Tokens.MAX_CLIENTS_ATTR);
        var removeOnEmpty = this.getAttribute(com.socket24.Tokens.REMOVE_ON_EMPTY_ATTR);

        settings.maxClients = maxClients == null ? null : maxClients;
        switch (removeOnEmpty) {
            case null:
                settings.removeOnEmpty = null;
                break;

            case "true":
                settings.removeOnEmpty = true;
                break;

            case "false":
                settings.removeOnEmpty = false;
                break;
        }

        return settings;
    };

    com.socket24.Room.prototype.setRoomSettings = function (settings) {
        if (this.disposed) return;

        if (settings.maxClients != null) {
            this.setAttribute(com.socket24.Tokens.MAX_CLIENTS_ATTR, settings.maxClients.toString());
        }
        if (settings.password != null) {
            this.setAttribute(com.socket24.Tokens.PASSWORD_ATTR, settings.password);
        }
        if (settings.removeOnEmpty != null) {
            this.setAttribute(com.socket24.Tokens.REMOVE_ON_EMPTY_ATTR, settings.removeOnEmpty.toString());
        }
    };

//==============================================================================
// OBSERVER MANAGEMENT
//==============================================================================

    /**
     * @private
     */
    com.socket24.Room.prototype.addObserver = function (client) {
        // Don't add the client if it's already in the list.
        if (this.observerList.contains(client)) {
            this.log.info(this + " ignored addObserver() request. Observer list" +
                " already contains client:" + client + ".");
            return;
        }

        // Add the client
        this.observerList.add(client);

        // Update the number of clients in the room
        this.setNumObservers(this.observerList.length());

        // Register for attribute change events
        if (!this.occupantList.contains(client)) {
            this.addClientAttributeListeners(client);
        }

        // Tell listeners an observer was added
        this.fireAddObserver(client.getClientID());
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.removeObserver = function (clientID) {
        var client = this.observerList.removeByClientID(clientID);
        var clientFound = client != null;

        // Update the number of clients in the room
        this.setNumObservers(this.observerList.length());

        // Unregister for attribute change events
        if (!this.occupantList.contains(client)) {
            this.removeClientAttributeListeners(client);
        }

        // Tell listeners an observer was removed
        var customClient = client.getCustomClient(this.getRoomID());
        this.fireRemoveObserver(customClient != null ? customClient : client);

        if (!clientFound) {
            this.log.debug(this + " could not remove observer: "
                + clientID + ". No such client in the room's observer list.");
        }
    };

    com.socket24.Room.prototype.getObserverIDs = function () {
        if (this.disposed) return null;

        return this.observerList.getAllIDs();
    };

    com.socket24.Room.prototype.getObservers = function () {
        if (this.disposed) return null;

        var observers = this.observerList.getAll();
        var observersList = new Array();
        var customClient;
        var observer;

        for (var clientID in observers) {
            observer = observers[clientID];
            customClient = observer.getCustomClient(this.getRoomID());
            if (customClient != null) {
                observersList.push(customClient);
            } else {
                observersList.push(observer);
            }
        }
        return observersList;
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.getObserversInternal = function () {
        return this.observerList.getAll();
    }

    com.socket24.Room.prototype.clientIsObservingRoom = function (clientID) {
        if (this.disposed) return false;

        if (clientID == null) {
            return this._clientIsObservingRoom;
        }
        return this.observerList.containsClientID(clientID);
    }

    com.socket24.Room.prototype.getNumObservers = function () {
        if (this.disposed) return 0;

        var levels = this.clientManager.self().getUpdateLevels(this.getRoomID());
        if (levels != null) {
            if (levels.observerCount || levels.observerList) {
                return this.numObservers;
            } else {
                this.log.warn(this + " getNumObservers() called, but no observer count is " +
                    "available. To enable observer count, turn on observer list" +
                    " updates or observer count updates via the Room's setUpdateLevels()" +
                    " method.");
                return 0;
            }
        } else {
            this.log.warn(this + " getNumObservers() called, but the current client's update "
                + " levels for the room are unknown. Please report this issue to union@user1.net.");
            return 0;
        }
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.setNumObservers = function (newNumObservers) {
        var oldNumClients = this.numObservers;
        this.numObservers = newNumObservers;

        // Tell listeners that the number of clients in the room has changed.
        if (oldNumClients != newNumObservers) {
            this.fireObserverCount(newNumObservers);
        }
    };

//==============================================================================
// CLIENT ACCESS
//==============================================================================

    com.socket24.Room.prototype.getClient = function (id) {
        if (this.disposed) return null;

        var customClient;
        var client = this.occupantList.getByClientID(id);
        client = (client == null) ? this.observerList.getByClientID(id) : client;

        if (client != null) {
            customClient = client.getCustomClient(this.getRoomID());
        }
        return customClient == null ? client : customClient;
    };

//==============================================================================
// CLIENT ATTRIBUTE LISTENERS
//==============================================================================
    /** private */
    com.socket24.Room.prototype.addClientAttributeListeners = function (client) {
        client.addEventListener(com.socket24.AttributeEvent.UPDATE, this.updateClientAttributeListener, this);
        client.addEventListener(com.socket24.AttributeEvent.DELETE, this.deleteClientAttributeListener, this);
    };

    /** private */
    com.socket24.Room.prototype.removeClientAttributeListeners = function (client) {
        client.removeEventListener(com.socket24.AttributeEvent.UPDATE, this.updateClientAttributeListener, this);
        client.removeEventListener(com.socket24.AttributeEvent.DELETE, this.deleteClientAttributeListener, this);
    };

    /** private */
    com.socket24.Room.prototype.updateClientAttributeListener = function (e) {
        var attr = e.getChangedAttr();
        var client = e.target;
        var customClient = client.getCustomClient(this.getRoomID());

        this.fireUpdateClientAttribute(customClient == null ? client : customClient,
            attr.scope, attr.name, attr.value, attr.oldValue);
    };

    /** private */
    com.socket24.Room.prototype.deleteClientAttributeListener = function (e) {
        var attr = e.getChangedAttr();
        var client = e.target;
        var customClient = client.getCustomClient(this.getRoomID());

        this.fireDeleteClientAttribute(customClient == null ? client : customClient,
            attr.scope, attr.name, attr.value);
    }

//==============================================================================
// CLIENT CLASS
//==============================================================================

    com.socket24.Room.prototype.setDefaultClientClass = function (defaultClass) {
        this.defaultClientClass = defaultClass;
    };

    com.socket24.Room.prototype.getDefaultClientClass = function () {
        return this.defaultClientClass;
    }

//==============================================================================
// ATTRIBUTES
//==============================================================================

    com.socket24.Room.prototype.setAttribute = function (attrName,
                                                         attrValue,
                                                         isShared,
                                                         isPersistent,
                                                         evaluate) {
        if (this.disposed) return;

        if (isShared !== false) {
            isShared = true;
        }

        // Create an integer to hold the attribute options.
        var attrOptions = (isShared     ? com.socket24.AttributeOptions.FLAG_SHARED     : 0)
            | (isPersistent ? com.socket24.AttributeOptions.FLAG_PERSISTENT : 0)
            | (evaluate     ? com.socket24.AttributeOptions.FLAG_EVALUATE   : 0);
        this.attributeManager.setAttribute(new com.socket24eventName.SetRoomAttr(attrName, attrValue, attrOptions, this.getRoomID()));
    }

    com.socket24.Room.prototype.deleteAttribute = function (attrName) {
        if (this.disposed) return;

        var deleteRequest = new com.socket24eventName.RemoveRoomAttr(this.getRoomID(), attrName);
        this.attributeManager.deleteAttribute(deleteRequest);
    };

    com.socket24.Room.prototype.getAttribute = function (attrName) {
        if (this.disposed) return null;

        return this.attributeManager.getAttribute(attrName);
    };

    com.socket24.Room.prototype.getAttributes = function () {
        if (this.disposed) return null;

        // Room attributes are considered global
        return this.attributeManager.getAttributesByScope(com.socket24.Tokens.GLOBAL_ATTR);
    }

// =============================================================================
// ROOM MODULES
// =============================================================================

    com.socket24.Room.prototype.sendModuleMessage = function (messageName,
                                                              messageArguments) {
        if (this.disposed) return;

        var sendupcArgs = [com.socket24eventName.SEND_ROOMMODULE_MESSAGE, this.getRoomID(), messageName];

        for (var arg in messageArguments) {
            sendupcArgs.push(arg + "|" + messageArguments[arg]);
        }

        this.messageManager.emitSocketMessage.apply(this.messageManager, sendupcArgs);
    };

// =============================================================================
// ROOM REMOVAL
// =============================================================================

    com.socket24.Room.prototype.remove = function (password) {
        if (this.disposed) return;

        this.roomManager.removeRoom(this.getRoomID(), password);
    };

// =============================================================================
// TOSTRING
// =============================================================================

    com.socket24.Room.prototype.toString = function () {
        return "[ROOM id: " + this.getRoomID() + "]";
    };


// =============================================================================
// EVENT DISPATCHING
// =============================================================================

    /**
     * @private
     */
    com.socket24.Room.prototype.fireJoin = function () {
        if (this.log) this.log.info(this + " Room joined.");

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.JOIN);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireJoinResult = function (status) {
        if (this.log) this.log.info(this + " Join result: " + status);

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.JOIN_RESULT,
            null,  null, status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireLeave = function () {
        if (this.log) this.log.info(this + " Room left.");

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.LEAVE);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireLeaveResult = function (status) {
        if (this.log) this.log.info(this + " Leave result: " + status);

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.LEAVE_RESULT,
            null, null, status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireAddOccupant = function (id) {
        if (this.log) this.log.info(this + " Added occupant: [" + id + "].");

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.ADD_OCCUPANT,
            this.getClient(id),
            id);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireRemoveOccupant = function (client) {
        if (this.log) this.log.info(this + " Removed occupant: " + client + ".");

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.REMOVE_OCCUPANT,
            client,
            client.getClientID());
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireAddObserver = function (id) {
        if (this.log) this.log.info(this + " Added observer: [" + id + "].");

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.ADD_OBSERVER,
            this.getClient(id),
            id);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireRemoveObserver = function (client) {
        if (this.log) this.log.info(this + " Removed observer: " + client + ".");

        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.REMOVE_OBSERVER,
            client,
            client.getClientID());
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireUpdateClientAttribute = function (client,
                                                                      scope,
                                                                      attrName,
                                                                      attrVal,
                                                                      oldVal) {
        if (this.log) this.log.info(this + " Client attribute updated on " + client + "."
            + " Attribute [" + attrName + "] is now: ["
            + attrVal + "]. Old value was: [" + oldVal + "].");

        var changedAttr = new com.socket24.Attribute (attrName,
            attrVal,
            oldVal,
            scope);
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.UPDATE_CLIENT_ATTRIBUTE,
            client,
            client.getClientID(),
            null,
            changedAttr);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireDeleteClientAttribute = function (client,
                                                                      scope,
                                                                      attrName,
                                                                      attrValue) {
        if (this.log) this.log.info(this + " Client attribute deleted from " + client + "."
            + " Deleted attribute: [" + attrName + "].");

        var deletedAttr = new com.socket24.Attribute(attrName, attrValue, null, scope);

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.DELETE_CLIENT_ATTRIBUTE,
            client,
            client.getClientID(),
            null,
            deletedAttr);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireOccupantCount = function (newNumClients) {
        if (this.log) this.log.info(this + " New occupant count: " + newNumClients);

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.OCCUPANT_COUNT,
            null, null, null, null, newNumClients);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireObserverCount = function (newNumClients) {
        if (this.log) this.log.info(this + " New observer count: " + newNumClients);

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.OBSERVER_COUNT,
            null, null, null, null, newNumClients);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireSynchronize = function (status) {
        if (this.log) this.log.info(this + " Synchronization complete.");

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.SYNCHRONIZE,
            null, null, status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireObserve = function () {
        if (this.log) this.log.info(this + " Room observed.");

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.OBSERVE);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireObserveResult = function (status) {
        if (this.log) this.log.info(this + " Observe result: " + status);

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.OBSERVE_RESULT, null, null, status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireStopObserving = function () {
        if (this.log) this.log.info(this + " Observation stopped.");

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.STOP_OBSERVING);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireStopObservingResult = function (status) {
        if (this.log) this.log.info(this + "Stop observing result:  " +
            status);

        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.STOP_OBSERVING_RESULT,
            null, null, status);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.fireRemoved = function () {
        // Trigger event on listeners.
        var e = new com.socket24.RoomEvent(com.socket24.RoomEvent.REMOVED);
        this.dispatchEvent(e);
    };

//==============================================================================
// CLEANUP and DISPOSAL
//==============================================================================
    /** private */
    com.socket24.Room.prototype.purgeRoomData = function () {
        if (this.disposed) return;

        // Clear the client lists
        this.log.debug(this + " Clearing occupant list.");
        for (var occupantID in this.occupantList.getAll()) {
            this.removeClientAttributeListeners(this.occupantList.getByClientID(occupantID));
        }
        this.occupantList.removeAll();

        this.log.debug(this + " Clearing observer list.");
        for (var observerID in this.observerList.getAll()) {
            this.removeClientAttributeListeners(this.observerList.getByClientID(observerID));
        }
        this.observerList.removeAll();

        // Clear room attributes.
        this.log.debug(this + " Clearing room attributes.");
        this.attributeManager.removeAll();
    };

    /**
     * @private
     */
    com.socket24.Room.prototype.shutdown = function () {
        if (this.disposed) return;

        // Store a temp reference to the log for use in this method after
        // the room has released all its resources.
        var theLog = this.log;

        theLog.debug(this + " Shutdown started.");

        // Notify the room's listeners that the client left the room.
        if (this.clientIsInRoom()) {
            theLog.info(this + " Current client is in the room. Forcing the client to leave...");
            this.doLeave();
        }

        // Notify the room's listeners that the client stopped observing the room.
        if (this.clientIsObservingRoom()) {
            theLog.info(this + " Current client is observing the room. Forcing the client to stop observing...");
            this.doStopObserving();
        }

        theLog.info(this + " Dereferencing resources.");

        // Dereference objects.
        this.purgeRoomData();

        this.attributeManager.dispose();
        // Fire removed before nulling the MessageManager object so that listeners have a
        // last chance to respond by communicating with the server (or by
        // removing themselves from the connection's listener list)
        this.fireRemoved();
        this.dispose();

        theLog.info(this + " Shutdown complete.");
    }

    /**
     * @private
     */
    com.socket24.Room.prototype.dispose = function () {
        this.log = null;
        this.syncState = null;
        this.occupantList = null;
        this.observerList = null;
        this.attributeManager = null;
        this.numOccupants = 0;
        this.defaultClientClass = null
        this.messageManager = null;
        this.roomManager = null;
        this.disposed = true;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24.RoomClassRegistry = function () {
        this.registry = new Object();
    };

    com.socket24.RoomClassRegistry.prototype.setRoomClass = function (roomID, roomClass) {
        this.registry[roomID] = roomClass;
    };

    com.socket24.RoomClassRegistry.prototype.clearRoomClass = function (roomID) {
        delete this.registry[roomID];
    };


    com.socket24.RoomClassRegistry.prototype.getRoomClass = function (roomID) {
        return this.registry[roomID] ? this.registry[roomID] : com.socket24.Room;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.RoomEvent = function (type,
                                       client,
                                       clientID,
                                       status,
                                       changedAttr,
                                       numClients,
                                       roomID) {
        com.socket24.events.Event.call(this, type);

        this.client = client;
        this.clientID = clientID == "" ? null : clientID;
        this.status = status;
        this.changedAttr = changedAttr;
        this.numClients = numClients;
        this.roomID = roomID;
    };


//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.RoomEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.RoomEvent.JOIN = "JOIN";
    /** @constant */
    com.socket24.RoomEvent.JOIN_RESULT = "JOIN_RESULT";
    /** @constant */
    com.socket24.RoomEvent.LEAVE = "LEAVE";
    /** @constant */
    com.socket24.RoomEvent.LEAVE_RESULT = "LEAVE_RESULT";
    /** @constant */
    com.socket24.RoomEvent.OBSERVE = "OBSERVE";
    /** @constant */
    com.socket24.RoomEvent.OBSERVE_RESULT = "OBSERVE_RESULT";
    /** @constant */
    com.socket24.RoomEvent.STOP_OBSERVING = "STOP_OBSERVING";
    /** @constant */
    com.socket24.RoomEvent.STOP_OBSERVING_RESULT = "STOP_OBSERVING_RESULT";
    /** @constant */
    com.socket24.RoomEvent.SYNCHRONIZE = "SYNCHRONIZE";
    /** @constant */
    com.socket24.RoomEvent.UPDATE_CLIENT_ATTRIBUTE = "UPDATE_CLIENT_ATTRIBUTE";
    /** @constant */
    com.socket24.RoomEvent.DELETE_CLIENT_ATTRIBUTE = "DELETE_CLIENT_ATTRIBUTE";
    /** @constant */
    com.socket24.RoomEvent.ADD_OCCUPANT = "ADD_OCCUPANT";
    /** @constant */
    com.socket24.RoomEvent.REMOVE_OCCUPANT = "REMOVE_OCCUPANT";
    /** @constant */
    com.socket24.RoomEvent.ADD_OBSERVER = "ADD_OBSERVER";
    /** @constant */
    com.socket24.RoomEvent.REMOVE_OBSERVER = "REMOVE_OBSERVER";
    /** @constant */
    com.socket24.RoomEvent.OCCUPANT_COUNT = "OCCUPANT_COUNT";
    /** @constant */
    com.socket24.RoomEvent.OBSERVER_COUNT = "OBSERVER_COUNT";
    /** @constant */
    com.socket24.RoomEvent.REMOVED = "REMOVED";


    com.socket24.RoomEvent.prototype.getRoomID = function () {
        return this.roomID;
    };

    com.socket24.RoomEvent.prototype.getClient = function () {
        return this.client;
    };

    com.socket24.RoomEvent.prototype.getClientID = function () {
        return this.clientID;
    };

    com.socket24.RoomEvent.prototype.getStatus = function () {
        return this.status;
    };

    com.socket24.RoomEvent.prototype.getNumClients = function () {
        return this.numClients;
    };

    com.socket24.RoomEvent.prototype.getChangedAttr = function () {
        return this.changedAttr;
    };

    com.socket24.RoomEvent.prototype.toString = function () {
        return "[object RoomEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.RoomList = function () {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.rooms = new Array();
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.RoomList, com.socket24.events.EventDispatcher);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.RoomList.prototype.add = function (room) {
        if (!this.contains(room)) {
            this.rooms.push(room);
            this.dispatchAddItem(room);
            return room;
        } else {
            return null;
        }
    };

    com.socket24.RoomList.prototype.remove = function (room) {
        var index = com.socket24.utilities.ArrayUtil.indexOf(this.rooms, room);
        if (index != -1) {
            this.rooms.splice(index, 1)[0];
            this.dispatchRemoveItem(room);
            return room;
        } else {
            return null;
        }
    };

    com.socket24.RoomList.prototype.removeAll = function () {
        var room;
        for (var i = this.rooms.length; --i >= 0; ) {
            room = this.rooms.splice(i, 1)[0];
            this.dispatchRemoveItem(room);
        }
    };

    com.socket24.RoomList.prototype.removeByRoomID = function (roomID) {
        var room;
        for (var i = this.rooms.length; --i >= 0; ) {
            if (this.rooms[i].getRoomID() == roomID) {
                room = this.rooms.splice(i, 1)[0];
                this.dispatchRemoveItem(room);
                return room;
            }
        }
        return null;
    };

    com.socket24.RoomList.prototype.contains = function (room) {
        return com.socket24.utilities.ArrayUtil.indexOf(this.rooms, room) != -1;
    }

    com.socket24.RoomList.prototype.containsRoomID = function (roomID) {
        if (roomID == "" || roomID == null) {
            return false;
        }
        return this.getByRoomID(roomID) != null;
    }

    com.socket24.RoomList.prototype.getByRoomID = function (roomID) {
        var room;
        for (var i = this.rooms.length; --i >= 0;) {
            room = this.rooms[i];
            if (room.getRoomID() == roomID) {
                return room;
            }
        }
        return null;
    };

    com.socket24.RoomList.prototype.getAll = function () {
        return this.rooms.slice(0);
    };

    com.socket24.RoomList.prototype.length = function () {
        return this.rooms.length;
    }

    com.socket24.RoomList.prototype.dispatchAddItem = function (item) {
        this.dispatchEvent(new com.socket24.CollectionEvent(com.socket24.CollectionEvent.ADD_ITEM, item));
    };

    com.socket24.RoomList.prototype.dispatchRemoveItem = function (item) {
        this.dispatchEvent(new com.socket24.CollectionEvent(com.socket24.CollectionEvent.REMOVE_ITEM, item));
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.RoomListSnapshot = function (qualifier,
                                                       recursive) {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.roomList = null;
        this.qualifier = null;
        this.recursive = null;
        this.method = com.socket24eventName.GET_ROOMLIST_SNAPSHOT;
        this.args   = [qualifier,
            recursive];
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.RoomListSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.RoomListSnapshot.prototype.setRoomList = function (value) {
        this.roomList = value;
    };

    com.socket24.snapshot.RoomListSnapshot.prototype.getRoomList = function () {
        if (!this.roomList) {
            return null;
        }
        return this.roomList.slice();
    };

    com.socket24.snapshot.RoomListSnapshot.prototype.getQualifier = function () {
        return this.qualifier;
    };

    /**
     * @private
     */
    com.socket24.snapshot.RoomListSnapshot.prototype.setQualifier = function (value) {
        this.qualifier = value;
    };

    com.socket24.snapshot.RoomListSnapshot.prototype.getRecursive = function () {
        return this.recursive;
    };

    /**
     * @private
     */
    com.socket24.snapshot.RoomListSnapshot.prototype.setRecursive = function (value) {
        this.recursive = value;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The RoomManager class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.RoomManagerEvent.WATCH_FOR_ROOMS_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomManagerEvent.STOP_WATCHING_FOR_ROOMS_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomManagerEvent.CREATE_ROOM_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomManagerEvent.REMOVE_ROOM_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomManagerEvent.ROOM_ADDED}</li>
     <li class="fixedFont">{@link com.socket24.RoomManagerEvent.ROOM_REMOVED}</li>
     <li class="fixedFont">{@link com.socket24.RoomManagerEvent.ROOM_COUNT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.JOIN_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.LEAVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.OBSERVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.RoomEvent.STOP_OBSERVING_RESULT}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.RoomManager = function (vaida) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.watchedQualifiers = [];

        this.cachedRooms = new com.socket24.RoomList();
        this.occupiedRooms = new com.socket24.RoomList();
        this.observedRooms = new com.socket24.RoomList();
        this.watchedRooms = new com.socket24.RoomList();

        this.cachedRooms.addEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);
        this.occupiedRooms.addEventListener(com.socket24.CollectionEvent.ADD_ITEM, this.addRoomListener, this);
        this.occupiedRooms.addEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);
        this.observedRooms.addEventListener(com.socket24.CollectionEvent.ADD_ITEM, this.addRoomListener, this);
        this.observedRooms.addEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);
        this.watchedRooms.addEventListener(com.socket24.CollectionEvent.ADD_ITEM, this.addRoomListener, this);
        this.watchedRooms.addEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);

        this.vaida = vaida;

        this.addEventListener(com.socket24.RoomManagerEvent.WATCH_FOR_ROOMS_RESULT,
            this.watchForRoomsResultListener, this);
        this.addEventListener(com.socket24.RoomManagerEvent.STOP_WATCHING_FOR_ROOMS_RESULT,
            this.stopWatchingForRoomsResultListener, this);


        this.roomClassRegistry = new com.socket24.RoomClassRegistry();

        // Store a reference to the this.log.
        this.log = this.vaida.getLog();
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.RoomManager, com.socket24.events.EventDispatcher);

//==============================================================================
// ROOM CREATION AND REMOVAL
//==============================================================================
    /**
     * @param attributes An array of JavaScript objects that describes the initial room
     * attributes for the room in the following format (note that this format differs
     * from the XML format used for createRoom() by Reactor, Union's Flash client framework):
     *
     * [
     *   attribute: {
     *     name:"attrName1",
     *     value:"attrValue1",
     *     shared:true,
     *     persistent:false,
     *     immutable:false
     *   },
     *   attribute: {
     *     name:"attrName2",
     *     value:"attrValue2",
     *     shared:true,
     *     persistent:false,
     *     immutable:false
     *   }
     * ]
     * </listing>
     */

    com.socket24.RoomManager.prototype.createRoom = function (roomID,
                                                              roomSettings,
                                                              attributes,
                                                              modules) {
        // GET ROOM SETTINGS
        if (roomSettings == null) {
            roomSettings = new com.socket24.RoomSettings();
        }

        // GET ROOM MODULES
        if (modules == null) {
            modules = new com.socket24.RoomModules();
        }

        // ERROR CHECKING

        // Abort if invalid module name found.
        var moduleIDs = modules.getIdentifiers();
        var moduleID;
        for (var i = moduleIDs.length; --i >= 0;) {
            var moduleID = moduleIDs[i];
            if (!com.socket24.Validator.isValidModuleName(moduleID)) {
                throw new Error("[ROOM_MANAGER] createRoom() failed. Illegal room module name: ["
                    + moduleID + "]. See com.socket24.Validator.isValidModuleName().");
            }
        }

        // If a roomID is specified, we must validated it
        if (roomID != null) {
            // Abort if the supplied id can't be resolved to a single room
            if (!com.socket24.Validator.isValidResolvedRoomID(roomID)) {
                throw new Error("[ROOM_MANAGER] createRoom() failed. Illegal room id: ["
                    + roomID + "]. See com.socket24.Validator.isValidResolvedRoomID().");
            }
        }

        // MAKE THE ROOM LOCALLY

        // Send "" as the roomID if no roomID is specified. When the server
        // receives a request to create a roomID of "", it auto-generates
        // the id, and returns it via RoomManagerEvent.CREATE_ROOM_RESULT.
        if (roomID == null) {
            // Don't make the local room. Instead wait for the server to
            // report the new room via u39.
            roomID = "";
        } else {
            // Make the local room.
            this.addCachedRoom(roomID);
        }

        // TELL THE SERVER TO MAKE THE ROOM

        // Create attributes
        if (attributes != null) {
            var attr;
            var attrArg = "";
            for (var i = 0; i < attributes.length; i++) {
                attr = attributes[i];
                attrSettings = 0;
                attrSettings |= attr.shared ? AttributeOptions.FLAG_SHARED : 0;
                attrSettings |= attr.persistent ? AttributeOptions.FLAG_PERSISTENT : 0;
                attrSettings |= attr.immutable ? AttributeOptions.FLAG_IMMUTABLE : 0;
                attrArg += attr.NAME
                    + com.socket24.Tokens.RS + attr.VALUE
                    + com.socket24.Tokens.RS + attrSettings.toString();

                if (i < attributes.length-1) {
                    attrArg += Tokens.RS;
                }
            }
        }

        // Send the create room request to the server.
        var msgMan = this.vaida.getMessageManager();
        msgMan.emitSocketMessage(com.socket24eventName.CREATE_ROOM,
            roomID,
            roomSettings.serialize(),
            attrArg,
            modules.serialize());

        // RETURN A REFERENCE TO THE LOCAL ROOM, IF ONE WAS CREATED
        if (roomID == "") {
            return null;
        } else {
            return this.getRoom(roomID);
        }
    };

    com.socket24.RoomManager.prototype.removeRoom = function (roomID, password) {
        // Quit if no room specified.
        if (roomID == null || !com.socket24.Validator.isValidResolvedRoomID(roomID)) {
            throw new Error("Invalid room id supplied to removeRoom(): ["
                + roomID + "]. Request not sent.");
        }

        if (password == null) {
            password = "";
        }

        var msgMan = this.vaida.getMessageManager();
        msgMan.emitSocketMessage(com.socket24eventName.REMOVE_ROOM,
            roomID,
            password);
    };

//==============================================================================
// ROOM OBSERVATION
//==============================================================================

    com.socket24.RoomManager.prototype.observeRoom = function (roomID,
                                                               password,
                                                               updateLevels) {
        var theRoom;

        // If the room is not valid, quit
        if (!com.socket24.Validator.isValidResolvedRoomID(roomID)) {
            throw new Error("Invalid room id supplied to observeRoom(): ["
                + roomID + "]. Request not sent."
                + " See com.socket24.Validator.isValidResolvedRoomID().");
        }

        // Try to get a reference to the room
        theRoom = this.getRoom(roomID);

        // If the room exists
        if (theRoom != null) {
            if (theRoom.clientIsObservingRoom()) {
                this.log.warn("[ROOM_MANAGER] Room observe attempt ignored. Already observing room: '"
                    + roomID + "'.");
                return null;
            }
        } else {
            // Make the local room
            theRoom = this.addCachedRoom(roomID);
        }

        // Validate the password
        if (password == null) {
            password = "";
        }
        if (!com.socket24.Validator.isValidPassword(password)) {
            throw new Error("Invalid room password supplied to observeRoom(). "
                + " Room ID: [" + roomID + "], password: [" + password + "]."
                + " See com.socket24.Validator.isValidPassword().");
        }

        // If update levels were specified for this room, send them now.
        if (updateLevels != null) {
            theRoom.setUpdateLevels(updateLevels);
        }

        // Send the UPC only if at least one valid room was found
        var msgMan = this.vaida.getMessageManager();
        msgMan.emitSocketMessage(com.socket24eventName.OBSERVE_ROOM,
            roomID,
            password);

        return theRoom;
    };

//==============================================================================
// WATCHING FOR ROOMS
//==============================================================================

    com.socket24.RoomManager.prototype.watchForRooms = function (roomQualifier) {
        var recursive = false;

        // null means watch the whole server
        if (roomQualifier == null) {
            roomQualifier = "";
            recursive = true;
        }

        var msgMan = this.vaida.getMessageManager();
        msgMan.emitSocketMessage(com.socket24eventName.WATCH_FOR_ROOMS,
            roomQualifier,
            recursive.toString());
    };

    com.socket24.RoomManager.prototype.stopWatchingForRooms = function (roomQualifier) {
        var recursive = false;
        // null means whole server
        if (roomQualifier == null) {
            roomQualifier = "";
            recursive = true;
        }

        var msgMan = this.vaida.getMessageManager();
        msgMan.emitSocketMessage(com.socket24eventName.STOP_WATCHING_FOR_ROOMS,
            roomQualifier,
            recursive.toString());
    };

    com.socket24.RoomManager.prototype.isWatchingQualifier = function (qualifier) {
        return com.socket24.utilities.ArrayUtil.indexOf(this.watchedQualifiers, qualifier) != -1;
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.watchForRoomsResultListener = function (e) {
        if (e.getStatus() == com.socket24.Status.SUCCESS) {
            this.watchedQualifiers.push(e.getRoomIdQualifier());
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.stopWatchingForRoomsResultListener = function (e) {
        var unwatchedQualifier = e.getRoomIdQualifier();
        var unwatchedQualifierIndex;

        if (e.getStatus() == com.socket24.Status.SUCCESS) {
            unwatchedQualifierIndex = com.socket24.utilities.ArrayUtil.indexOf(watchedQualifiers, unwatchedQualifier);
            if (unwatchedQualifierIndex != -1) {
                watchedQualifiers.splice(unwatchedQualifierIndex, 1);
            }
        }
    };

//==============================================================================
// SENDING MESSAGES
//==============================================================================

    com.socket24.RoomManager.prototype.sendMessage = function (messageName,
                                                               rooms,
                                                               includeSelf,
                                                               filters) {
        var rest = Array.prototype.slice.call(arguments).slice(4);

        // An array of arguments to send to the server.
        var args;

        // Can't continue without a valid messageName.
        if (messageName == null || messageName == "") {
            this.log.warn("[ROOM_MANAGER]  sendMessage() failed. No messageName supplied.");
            return;
        }

        // Send the UPC.
        var msgMan = this.vaida.getMessageManager();
        args = [com.socket24eventName.SEND_MESSAGE_TO_ROOMS,
            messageName,
            rooms.join(com.socket24.Tokens.RS),
            String(includeSelf),
            filters != null ? filters.toXMLString() : ""];
        msgMan.emitSocketMessage.apply(msgMan, args.concat(rest));
    }


//==============================================================================
// JOINING ROOMS
//==============================================================================

    com.socket24.RoomManager.prototype.joinRoom = function (roomID,
                                                            password,
                                                            updateLevels) {
        if (!this.vaida.isReady()) {
            this.log.warn("[ROOM_MANAGER] Connection not open. Request to join room ["
                + roomID + "] could not be sent.");
            return null;
        }

        // If the room ID is not valid, quit
        if (!com.socket24.Validator.isValidResolvedRoomID(roomID)) {
            this.log.error("[ROOM_MANAGER] Invalid room id supplied to joinRoom(): ["
                + roomID + "]. Join request not sent."
                + " See com.socket24.Validator.isValidResolvedRoomID().");
            return null;
        }

        // Try to get a reference to the room
        var theRoom = this.getRoom(roomID);

        // If the room exists
        if (theRoom != null) {
            // Can't join a room you're already in.
            if (theRoom.clientIsInRoom()) {
                this.log.warn("[ROOM_MANAGER] Room join attempt aborted. Already in room: ["
                    + theRoom.getRoomID() + "].");
                return theRoom;
            }
        } else {
            // Make the local room.
            theRoom = this.addCachedRoom(roomID);
        }

        // Validate the password
        if (password == null) {
            password = "";
        }
        if (!com.socket24.Validator.isValidPassword(password)) {
            this.log.error("[ROOM_MANAGER] Invalid room password supplied to joinRoom(): ["
                + roomID + "]. Join request not sent."
                + " See com.socket24.Validator.isValidPassword().");
            return theRoom;
        }


        // If any update levels are specified, send them before joining.
        if (updateLevels != null) {
            theRoom.setUpdateLevels(updateLevels);
        }

        var msgMan = this.vaida.getMessageManager();
        msgMan.emitSocketMessage(com.socket24eventName.JOIN_ROOM,
            roomID,
            password);
        return theRoom;
    };

// =============================================================================
// ROOM OBJECT CREATION/DISPOSAL
// =============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.requestRoom = function (roomID) {
        if (roomID == "") {
            this.log.warn("[ROOM_MANAGER] requestRoom() failed. Supplied room ID was empty.");
            return null;
        }

        var theRoom = this.getRoom(roomID);
        if (theRoom != null) {
            return theRoom;
        } else {
            this.log.debug("[ROOM_MANAGER] Creating new room object for id: [" + roomID + "]");
            var RoomClass = this.roomClassRegistry.getRoomClass(roomID);
            theRoom = new RoomClass(roomID,
                this,
                this.vaida.getMessageManager(),
                this.vaida.getClientManager(),
                this.vaida.getAccountManager(),
                this.log);
            return theRoom;
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.disposeRoom = function (roomID) {
        var room = this.getRoom(roomID);
        if (room != null) {
            this.log.debug("[ROOM_MANAGER] Disposing room: " + room);
            this.removeCachedRoom(roomID);
            this.removeWatchedRoom(roomID);
            this.removeOccupiedRoom(roomID);
            this.removeObservedRoom(roomID);
        } else {
            this.log.debug("[ROOM_MANAGER] disposeRoom() called for unknown room: [" + roomID + "]");
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.removeAllRooms = function () {
        this.log.debug("[ROOM_MANAGER] Removing all local room object references.");
        this.cachedRooms.removeAll();
        this.watchedRooms.removeAll();
        this.occupiedRooms.removeAll();
        this.observedRooms.removeAll();
    };

// =============================================================================
// CACHED ROOMS
// =============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.addCachedRoom = function (roomID) {
        var cachedRoom = this.cachedRooms.getByRoomID(roomID);
        if (cachedRoom == null) {
            this.log.debug("[ROOM_MANAGER] Adding cached room: [" + roomID + "]");
            return this.cachedRooms.add(this.requestRoom(roomID));
        } else {
            return cachedRoom;
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.removeCachedRoom = function (roomID) {
        if (this.cachedRooms.containsRoomID(roomID)) {
            this.cachedRooms.removeByRoomID(roomID);
        } else {
            throw new Error("[ROOM_MANAGER] Could not remove cached room: [" + roomID + "]."
                + " Room not found.");
        }
    };

    com.socket24.RoomManager.prototype.hasCachedRoom = function (roomID) {
        return this.cachedRooms.containsRoomID(roomID);
    };

    com.socket24.RoomManager.prototype.disposeCachedRooms = function () {
        var room;
        var rooms = cachedRooms.getAll();
        for (var i = 0; i <= rooms.length; i++) {
            room = rooms[i];
            removeCachedRoom(room.getRoomID());
        }
    };

// =============================================================================
// WATCHED ROOMS
// =============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.addWatchedRoom = function (roomID) {
        this.log.debug("[ROOM_MANAGER] Adding watched room: [" + roomID + "]");
        var room = this.watchedRooms.add(this.requestRoom(roomID));
        room.updateSyncState();
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.removeWatchedRoom = function (roomID) {
        var room = this.watchedRooms.removeByRoomID(roomID);
        if (room != null) {
            room.updateSyncState();
        } else {
            this.log.debug("[ROOM_MANAGER] Request to remove watched room ["
                + roomID + "] ignored; room not in watched list.");
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.removeAllWatchedRooms = function () {
        var rooms = this.watchedRooms.getAll();
        var room;
        for (var i = 0; i <= rooms.length; i++) {
            room = rooms[i];
            removeWatchedRoom(room.getRoomID());
            room.updateSyncState();
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.setWatchedRooms = function (qualifier, newRoomIDs) {
        // Remove rooms from local list
        var rooms = this.getRoomsWithQualifier(qualifier);
        var room;
        for (var i = 0; i < rooms.length; i++) {
            room = rooms[i];
            if (com.socket24.utilities.ArrayUtil.indexOf(newRoomIDs, room.getSimpleRoomID()) == -1) {
                this.removeWatchedRoom(room.getRoomID());
            }
        }
        // Add rooms to local list
        var fullRoomID;
        var roomID;
        for (var i = 0; i < newRoomIDs.length; i++) {
            roomID = newRoomIDs[i];
            fullRoomID = qualifier + (qualifier != "" ? "." : "") + roomID;
            if (!this.watchedRooms.containsRoomID(fullRoomID)) {
                this.addWatchedRoom(fullRoomID);
            }
        }
    };

    com.socket24.RoomManager.prototype.hasWatchedRoom = function (roomID) {
        return this.watchedRooms.containsRoomID(roomID);
    }

// =============================================================================
// OCCUPIED ROOMS
// =============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.addOccupiedRoom = function (roomID) {
        this.log.debug("[ROOM_MANAGER] Adding occupied room: [" + roomID + "]");
        var room = this.occupiedRooms.add(this.requestRoom(roomID));
        room.updateSyncState();
        return room;
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.removeOccupiedRoom = function (roomID) {
        var room = this.occupiedRooms.removeByRoomID(roomID);
        if (room != null) {
            room.updateSyncState();
        } else {
            this.log.debug("[ROOM_MANAGER] Request to remove occupied room ["
                + roomID + "] ignored; client is not in room.");
        }
    };

    com.socket24.RoomManager.prototype.hasOccupiedRoom = function (roomID) {
        return this.occupiedRooms.containsRoomID(roomID);
    };

// =============================================================================
// OBSERVED ROOMS
// =============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.addObservedRoom = function (roomID) {
        this.log.debug("[ROOM_MANAGER] Adding observed room: [" + roomID + "]");
        var room = this.observedRooms.add(this.requestRoom(roomID));
        room.updateSyncState();
        return room;
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.removeObservedRoom = function (roomID) {
        var room = this.observedRooms.removeByRoomID(roomID);
        if (room != null) {
            room.updateSyncState();
        } else {
            this.log.debug("[ROOM_MANAGER] Request to remove observed room ["
                + roomID + "] ignored; client is not observing room.");
        }
    };

    com.socket24.RoomManager.prototype.hasObservedRoom = function (roomID) {
        return this.observedRooms.containsRoomID(roomID);
    };

//==============================================================================
// ROOM LIST LISTENERS
//==============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.addRoomListener = function (e) {
        var room = e.getItem();

        // Only trigger added for first known reference
        if (this.getKnownReferenceCount(room.getRoomID()) == 1) {
            this.fireRoomAdded(room.getQualifier(), room.getRoomID(), room);
            this.fireRoomCount(this.getNumRooms());
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.removeRoomListener = function (e) {
        var room = e.getItem();
        var knownReferenceCount = this.getKnownReferenceCount(room.getRoomID());

        switch (e.target) {
            case this.occupiedRooms:
                this.log.debug("[ROOM_MANAGER] Removed occupied room: " + room);
                if (knownReferenceCount == 0) {
                    this.fireRoomRemoved(room.getQualifier(), room.getRoomID(), room);
                    this.fireRoomCount(this.getNumRooms());
                }
                break;

            case this.observedRooms:
                this.log.debug("[ROOM_MANAGER] Removed observed room: " + room);
                if (knownReferenceCount == 0) {
                    this.fireRoomRemoved(room.getQualifier(), room.getRoomID(), room);
                    this.fireRoomCount(this.getNumRooms());
                }
                break;

            case this.watchedRooms:
                this.log.debug("[ROOM_MANAGER] Removed watched room: " + room);
                if (knownReferenceCount == 0) {
                    this.fireRoomRemoved(room.getQualifier(), room.getRoomID(), room);
                    this.fireRoomCount(this.getNumRooms());
                }
                break;

            case this.cachedRooms:
                this.log.debug("[ROOM_MANAGER] Removed cached room: " + room);
                break;
        }

        // When the RoomManager has no more references to the room, shut it down
        if (knownReferenceCount == 0 && !this.cachedRooms.contains(room)) {
            room.shutdown();
        }
    };

//==============================================================================
// ROOM ACCESS
//==============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.getKnownReferenceCount = function (roomID) {
        var count = 0;
        count += this.hasObservedRoom(roomID) ? 1 : 0;
        count += this.hasOccupiedRoom(roomID) ? 1 : 0;
        count += this.hasWatchedRoom(roomID) ? 1 : 0;
        return count;
    }

    com.socket24.RoomManager.prototype.getRooms = function () {
        var roomlist = com.socket24.utilities.ArrayUtil.combine(this.occupiedRooms.getAll(),
            this.observedRooms.getAll(),
            this.watchedRooms.getAll());
        return roomlist;
    };

    com.socket24.RoomManager.prototype.roomIsKnown = function (roomID) {
        var rooms = this.getRooms();
        var room;
        for (var i = rooms.length; --i >= 0;) {
            room = rooms[i];
            if (room.getRoomID() == roomID) {
                return true;
            }
        }
        return false;
    };

    com.socket24.RoomManager.prototype.getRoomIDs = function () {
        var roomIDs = new Array();
        var rooms = this.getRooms();

        for (var i = 0; i <= rooms.length; i++) {
            roomIDs.push(rooms[i].getRoomID());
        }

        return roomIDs;
    };

    com.socket24.RoomManager.prototype.getAllRooms = function () {
        var roomlist = com.socket24.utilities.ArrayUtil.combine(this.occupiedRooms.getAll(),
            this.observedRooms.getAll(),
            this.watchedRooms.getAll(),
            this.cachedRooms.getAll());

        return roomlist;
    };

    com.socket24.RoomManager.prototype.getRoomsWithQualifier = function (qualifier) {
        if (qualifier == null)  {
            return this.getRooms();
        }

        var roomlist = [];
        var rooms = this.getRooms();
        var room;
        for (var i = 0; i < rooms.length; i++) {
            room = rooms[i];
            if (com.socket24.RoomIDParser.getQualifier(room.getRoomID()) == qualifier) {
                roomlist.push(room);
            }
        }

        return roomlist;
    };

    com.socket24.RoomManager.prototype.getNumRooms = function (qualifier) {
        return this.getRoomsWithQualifier(qualifier).length;
    }

    com.socket24.RoomManager.prototype.getRoom = function (roomID) {
        var rooms = this.getAllRooms();
        var room;
        for (var i = rooms.length; --i >= 0;) {
            room = rooms[i];
            if (room.getRoomID() == roomID) {
                return room;
            }
        }
        return null;
    };

// =============================================================================
// ROOM CLASS REGISTRY
// =============================================================================

    com.socket24.RoomManager.prototype.getRoomClassRegistry = function () {
        return this.roomClassRegistry;
    };

// =============================================================================
// CLIENT ACCESS
// =============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.getAllClients = function () {
        var clientSets = [];
        var rooms = this.getRooms();
        var room;
        for (var i = rooms.length; --i >= 0;) {
            room = rooms[i];
            clientSets.push(room.getOccupantsInternal());
            clientSets.push(room.getObserversInternal());
        }
        return com.socket24.utilities.ObjectUtil.combine(clientSets);
    };

    com.socket24.RoomManager.prototype.clientIsKnown = function (clientID) {
        var clientSets = [];

        var rooms = this.getRooms();
        var room;
        for (var i = rooms.length; --i >= 0;) {
            room = rooms[i];
            clientSets.push(room.getOccupantsInternal());
            clientSets.push(room.getObserversInternal());
        }

        for (var i = clientSets.length; --i >= 0;) {
            if (clientSets[i][clientID] != null) {
                return true;
            }
        }
        return false;
    };

// =============================================================================
// EVENT DISPATCHING
// =============================================================================

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireWatchForRoomsResult = function (roomIDQualifier,
                                                                           status) {
        var e = new com.socket24.RoomManagerEvent(
            com.socket24.RoomManagerEvent.WATCH_FOR_ROOMS_RESULT,
            null, status, roomIDQualifier);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireStopWatchingForRoomsResult = function (roomIDQualifier,
                                                                                  status) {
        var e = new com.socket24.RoomManagerEvent(
            com.socket24.RoomManagerEvent.STOP_WATCHING_FOR_ROOMS_RESULT,
            null, status, roomIDQualifier);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireCreateRoomResult = function (roomIDQualifier,
                                                                        roomID,
                                                                        status) {
        var e = new com.socket24.RoomManagerEvent(
            com.socket24.RoomManagerEvent.CREATE_ROOM_RESULT,
            roomID, status, roomIDQualifier);
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireRemoveRoomResult = function (roomIDQualifier,
                                                                        roomID,
                                                                        status) {
        var e = new com.socket24.RoomManagerEvent(
            com.socket24.RoomManagerEvent.REMOVE_ROOM_RESULT,
            roomID, status, roomIDQualifier);

        this.dispatchEvent(e);
    }

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireRoomAdded = function (roomIDQualifier,
                                                                 roomID,
                                                                 theRoom) {
        var e = new com.socket24.RoomManagerEvent(
            com.socket24.RoomManagerEvent.ROOM_ADDED,
            roomID, null, roomIDQualifier, theRoom);
        this.dispatchEvent(e);
    }

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireRoomRemoved = function (roomIDQualifier,
                                                                   roomID,
                                                                   theRoom) {
        var e = new com.socket24.RoomManagerEvent(
            com.socket24.RoomManagerEvent.ROOM_REMOVED,
            roomID,
            null,
            roomIDQualifier,
            theRoom);
        this.dispatchEvent(e);
    }

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireRoomCount = function (numRooms) {
        this.dispatchEvent(new com.socket24.RoomManagerEvent(com.socket24.RoomManagerEvent.ROOM_COUNT,
            null, null, null, null, numRooms));
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireJoinRoomResult = function (roomID, status) {
        this.dispatchEvent(new com.socket24.RoomEvent(com.socket24.RoomEvent.JOIN_RESULT, null, null,
            status, null, 0, roomID));
    }

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireLeaveRoomResult = function (roomID, status) {
        this.dispatchEvent(new com.socket24.RoomEvent(com.socket24.RoomEvent.LEAVE_RESULT, null, null,
            status, null, 0, roomID));
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireObserveRoomResult = function (roomID, status) {
        this.dispatchEvent(new com.socket24.RoomEvent(com.socket24.RoomEvent.OBSERVE_RESULT, null, null,
            status, null, 0, roomID));
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.fireStopObservingRoomResult = function (roomID, status) {
        this.dispatchEvent(new com.socket24.RoomEvent(com.socket24.RoomEvent.STOP_OBSERVING_RESULT, null, null,
            status, null, 0, roomID));
    };


// =============================================================================
// CLEANUP and DISPOSAL
// =============================================================================

    /**
     * @private
     *
     * Clears all resources. The object remains alive, and can be reused. To
     * permanently deactivate this object, use dispose().
     */
    com.socket24.RoomManager.prototype.cleanup = function () {
        this.log.info("[ROOM_MANAGER] Cleaning resources.");
        this.removeAllRooms();
        this.watchedQualifiers = [];
    };

    /**
     * @private
     */
    com.socket24.RoomManager.prototype.dispose = function () {
        this.log.info("[ROOM_MANAGER] Disposing resources.");
        this.watchedQualifiers = null;
        var room;
        var rooms = this.getAllRooms();
        for (var i = this.getAllRooms().length; --i >= 0;) {
            room = rooms[i];
            room.dispose();
        }
        this.cachedRooms.removeEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);
        this.occupiedRooms.removeEventListener(com.socket24.CollectionEvent.ADD_ITEM, this.addRoomListener, this);
        this.occupiedRooms.removeEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);
        this.observedRooms.removeEventListener(com.socket24.CollectionEvent.ADD_ITEM, this.addRoomListener, this);
        this.observedRooms.removeEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);
        this.watchedRooms.removeEventListener(com.socket24.CollectionEvent.ADD_ITEM, this.addRoomListener, this);
        this.watchedRooms.removeEventListener(com.socket24.CollectionEvent.REMOVE_ITEM, this.removeRoomListener, this);
        this.occupiedRooms = null;
        this.observedRooms = null;
        this.watchedRooms  = null;
        this.cachedRooms  = null;
        this.log = null;
        this.vaida = null;
        this.roomClassRegistry = null;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.RoomManagerEvent = function (type,
                                              roomID,
                                              status,
                                              roomIdQualifier,
                                              room,
                                              numRooms) {
        com.socket24.events.Event.call(this, type);

        this.roomID = roomID;
        this.status = status;
        this.roomIdQualifier  = roomIdQualifier;
        this.room = room;
        this.numRooms = numRooms;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.RoomManagerEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.RoomManagerEvent.CREATE_ROOM_RESULT = "CREATE_ROOM_RESULT";
    /** @constant */
    com.socket24.RoomManagerEvent.REMOVE_ROOM_RESULT = "REMOVE_ROOM_RESULT";
    /** @constant */
    com.socket24.RoomManagerEvent.WATCH_FOR_ROOMS_RESULT = "WATCH_FOR_ROOMS_RESULT";
    /** @constant */
    com.socket24.RoomManagerEvent.STOP_WATCHING_FOR_ROOMS_RESULT = "STOP_WATCHING_FOR_ROOMS_RESULT";
    /** @constant */
    com.socket24.RoomManagerEvent.ROOM_ADDED = "ROOM_ADDED";
    /** @constant */
    com.socket24.RoomManagerEvent.ROOM_REMOVED = "ROOM_REMOVED";
    /** @constant */
    com.socket24.RoomManagerEvent.ROOM_COUNT = "ROOM_COUNT";

    com.socket24.RoomManagerEvent.prototype.getRoomIdQualifier = function () {
        if (this.roomIdQualifier == null && this.room != null) {
            return this.room.getQualifier();
        } else {
            return this.roomIdQualifier;
        }
    };

    com.socket24.RoomManagerEvent.prototype.getRoomID = function () {
        var fullRoomID;
        var qualifier;

        if (this.room != null) {
            return this.room.getRoomID();
        } else if (this.roomID == null) {
            return null;
        } else {
            qualifier = this.getRoomIdQualifier();
            fullRoomID = qualifier == "" || qualifier == null
                ? this.roomID
                : qualifier + "." + this.roomID;
            return fullRoomID;
        }
    };

    com.socket24.RoomManagerEvent.prototype.getSimpleRoomID = function () {
        if (this.roomID == null && this.room != null) {
            return this.room.getSimpleRoomID();
        } else {
            return this.roomID;
        }
    };

    com.socket24.RoomManagerEvent.prototype.getRoom = function () {
        return this.room;
    }

    com.socket24.RoomManagerEvent.prototype.getStatus = function () {
        return this.status;
    }

    com.socket24.RoomManagerEvent.prototype.getNumRooms = function () {
        return this.numRooms;
    }

    com.socket24.RoomManagerEvent.prototype.toString = function () {
        return "[object RoomManagerEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     */
    com.socket24.RoomManifest = function () {
    };

    com.socket24.RoomManifest.prototype.deserialize = function (roomID,
                                                                serializedAttributes,
                                                                clientList,
                                                                occupantCount,
                                                                observerCount) {
        this.roomID = roomID;
        this.attributes = null;
        this.occupantCount = occupantCount;
        this.observerCount = observerCount;
        this.occupants = [];
        this.observers = [];

        this.deserializeAttributes(serializedAttributes);
        this.deserializeClientList(clientList);
    };

    /**
     * @private
     */
    com.socket24.RoomManifest.prototype.deserializeAttributes = function (serializedAttributes) {
        var attrList = serializedAttributes.split(com.socket24.Tokens.RS);
        this.attributes = new com.socket24.AttributeCollection();

        for (var i = attrList.length-2; i >= 0; i -=2) {
            this.attributes.setAttribute(attrList[i], attrList[i+1], com.socket24.Tokens.GLOBAL_ATTR);
        }
    };

    /**
     * @private
     */
    com.socket24.RoomManifest.prototype.deserializeClientList = function (clientList) {
        var clientManifest;

        for (var i = clientList.length-5; i >= 0; i -=5) {
            clientManifest = new com.socket24.ClientManifest();
            clientManifest.deserialize(clientList[i], clientList[i+1], null, null, clientList[i+3], [this.roomID, clientList[i+4]]);
            if (clientList[i+2] == "0") {
                this.occupants.push(clientManifest);
            } else {
                this.observers.push(clientManifest);
            }
        }
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     *
     * @example
     * var modules = new com.socket24.RoomModules();
     * modules.addModule("com.business.StockTickerListener", com.socket24.ModuleType.CLASS);
     * vaida.getRoomManager().createRoom("someRoomID",
     *                           null,
     *                           null,
     *                           modules);
     */
    com.socket24.RoomModules = function () {
        this.modules = new Array();
    };

    com.socket24.RoomModules.prototype.addModule = function (identifier,
                                                             type) {
        this.modules.push([type, identifier]);
    };

    com.socket24.RoomModules.prototype.serialize = function () {
        var modulesString = "";

        var numModules = this.modules.length;
        for (var i = 0; i < numModules; i++) {
            modulesString += this.modules[i][0] + com.socket24.Tokens.RS + this.modules[i][1];
            if (i < numModules-1) {
                modulesString += com.socket24.Tokens.RS;
            }
        }

        return modulesString;
    };

    com.socket24.RoomModules.prototype.getIdentifiers = function () {
        var ids = new Array();

        var module;
        for (var i = 0; i < this.modules.length; i++) {
            module = this.modules[i];
            ids.push(module[1]);
        }
        return ids;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.RoomSettings = function () {
        this.removeOnEmpty = null;
        this.maxClients = null;
        this.password = null;
    };

    com.socket24.RoomSettings.prototype.serialize = function () {
        var RS = com.socket24.Tokens.RS;
        var settingsString =
            com.socket24.Tokens.REMOVE_ON_EMPTY_ATTR + RS +
            (this.removeOnEmpty == null ? "true" : this.removeOnEmpty.toString())
            + RS + com.socket24.Tokens.MAX_CLIENTS_ATTR + RS +
            (this.maxClients == null ? "-1" : this.maxClients.toString())
            + RS + com.socket24.Tokens.PASSWORD_ATTR + RS +
            (this.password == null ? "" : this.password);
        return settingsString;
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.RoomSnapshot = function (roomID, password, updateLevels) {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.manifest = null;
        this.method = com.socket24eventName.GET_ROOM_SNAPSHOT;
        this.args   = [roomID, password, updateLevels != null ? updateLevels.toInt() : ""];
        this.hasStatus = true;
    };
//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.RoomSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.RoomSnapshot.prototype.setManifest = function (value) {
        this.manifest = value;
    };

    com.socket24.snapshot.RoomSnapshot.prototype.getAttribute = function (name) {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.attributes.getAttribute(name, com.socket24.Tokens.GLOBAL_ATTR);
    };

    com.socket24.snapshot.RoomSnapshot.prototype.getAttributes = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.attributes.getByScope(com.socket24.Tokens.GLOBAL_ATTR);
    };

    com.socket24.snapshot.RoomSnapshot.prototype.getRoomID = function () {
        if (!this.manifest) {
            return null;
        }
        return this.manifest.roomID;
    };

    com.socket24.snapshot.RoomSnapshot.prototype.getOccupants = function () {
        return this.manifest.occupants.slice();
    }

    com.socket24.snapshot.RoomSnapshot.prototype.getObservers = function () {
        return this.manifest.observers.slice();
    }

    com.socket24.snapshot.RoomSnapshot.prototype.getOccupant = function (clientID) {
        var client;
        for (var i = this.manifest.occupants.length; --i >= 0;) {
            if (this.manifest.occupants[i].clientID == clientID) {
                return this.manifest.occupants[i];
            }
        }
        return null;
    };

    com.socket24.snapshot.RoomSnapshot.prototype.getObserver = function (clientID) {
        var client;
        for (var i = this.manifest.observers.length; --i >= 0;) {
            if (this.manifest.observers[i].clientID == clientID) {
                return this.manifest.observers[i];
            }
        }
        return null;
    };

    com.socket24.snapshot.RoomSnapshot.prototype.getNumOccupants = function () {
        return Math.max(this.manifest.occupants.length, this.manifest.occupantCount);
    }

    com.socket24.snapshot.RoomSnapshot.prototype.getNumObservers = function () {
        return Math.max(this.manifest.observers.length, this.manifest.observerCount);
    }
//==============================================================================
//  SECURITY_ROLE CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.SecurityRole = new Object();
    /** @constant */
    com.socket24.SecurityRole.MODERATOR = "MODERATOR";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The Server class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.ServerEvent.TIME_SYNC}</li>
     <li class="fixedFont">{@link com.socket24.ServerEvent.UPC_PROCESSED}</li>
     <li class="fixedFont">{@link com.socket24.ServerEvent.WATCH_FOR_PROCESSED_UPCS_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.ServerEvent.STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */
    com.socket24.Server = function (vaida) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        this.vaida = vaida;
        this.version = null;
        this.upcVersion = null;
        this.localAgeAtLastSync = NaN;
        this.lastKnownServerTime = NaN;
        this._isWatchingForProcessedUPCs = false;

        this.log = vaida.getLog();

        vaida.addEventListener(com.socket24.VaidaEvent.READY, this.readyListener, this);
    }

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.Server, com.socket24.events.EventDispatcher);

// =============================================================================
// SERVER-WIDE MESSAGING
// =============================================================================
    com.socket24.Server.prototype.sendMessage = function (messageName,
                                                          includeSelf,
                                                          filters) {
        var rest = Array.prototype.slice.call(arguments).slice(3);
        var args;

        if (messageName == null || messageName == "") {
            this.log.warn("Server.sendMessage() failed. No messageName supplied.");
            return;
        }

        var msgMan = this.vaida.getMessageManager();
        args = [com.socket24eventName.SEND_MESSAGE_TO_SERVER,
            messageName,
            includeSelf.toString(),
            filters != null ? filters.toXMLString() : ""];
        msgMan.emitSocketMessage.apply(msgMan, args.concat(rest));
    };

// =============================================================================
// SERVER MODULES
// =============================================================================
    com.socket24.Server.prototype.sendModuleMessage = function (moduleID,
                                                                messageName,
                                                                messageArguments) {
        var sendupcArgs = [com.socket24eventName.SEND_SERVERMODULE_MESSAGE, moduleID, messageName];

        for (var arg in messageArguments) {
            sendupcArgs.push(arg + com.socket24.Tokens.RS + messageArguments[arg]);
        }

        this.vaida.getMessageManager().emitSocketMessage.apply(this.vaida.getMessageManager(), sendupcArgs);
    };

    com.socket24.Server.prototype.clearModuleCache = function () {
        this.vaida.getMessageManager().emitSocketMessage(com.socket24eventName.CLEAR_MODULE_CACHE);
    };

// =============================================================================
// VERSION ACCESS
// =============================================================================

    /**
     * @private
     */
    com.socket24.Server.prototype.setVersion = function (value) {
        this.version = value;
    };

    com.socket24.Server.prototype.getVersion = function () {
        return this.version;
    };

    /**
     * @private
     */
    com.socket24.Server.prototype.setUPCVersion = function (value) {
        this.upcVersion = value;
    };

    com.socket24.Server.prototype.getUPCVersion = function () {
        return this.upcVersion;
    };

// =============================================================================
// UPC STATS AND PROCESSING
// =============================================================================

    com.socket24.Server.prototype.resetUPCStats = function () {
        this.vaida.getMessageManager().emitSocketMessage(UPC.RESET_UPC_STATS);
    };

    com.socket24.Server.prototype.watchForProcessedUPCs = function () {
        this.vaida.getMessageManager().emitSocketMessage(com.socket24eventName.WATCH_FOR_PROCESSED_UPCS);
    };

    com.socket24.Server.prototype.stopWatchingForProcessedUPCs = function () {
        this.vaida.getMessageManager().emitSocketMessage(com.socket24eventName.STOP_WATCHING_FOR_PROCESSED_UPCS);
    };

    com.socket24.Server.prototype.isWatchingForProcessedUPCs = function () {
        return this._isWatchingForProcessedUPCs;
    };

    com.socket24.Server.prototype.setIsWatchingForProcessedUPCs = function (value) {
        this._isWatchingForProcessedUPCs = value;
    };

// =============================================================================
// TIME RETRIEVAL METHODS
// =============================================================================
    com.socket24.Server.prototype.getServerTime = function () {
        var self = this.vaida.self();
        var lastServerTime = NaN;
        var estimatedServerTime = NaN;

        if (self != null) {
            lastServerTime = isNaN(this.lastKnownServerTime)
                ? self.getConnectTime()
                : this.lastKnownServerTime;

            estimatedServerTime = isNaN(lastServerTime)
                ? NaN
                : (lastServerTime + (new Date().getTime()-this.localAgeAtLastSync));
        }

        if (estimatedServerTime == 0) {
            log.warn("Server time requested, but is unknown.");
        }

        return estimatedServerTime;
    };

    com.socket24.Server.prototype.syncTime = function () {
        var msgMan = this.vaida.getMessageManager();
        msgMan.emitSocketMessage(com.socket24eventName.SYNC_TIME);
    };

    /**
     * @private
     */
    com.socket24.Server.prototype.readyListener = function (e) {
        this.vaida.getMessageManager().addMessageListener(com.socket24eventName.SERVER_TIME_UPDATE, this.u50);
        this.localAgeAtLastSync = new Date().getTime();;
    };

// =============================================================================
// EVENT DISPATCHING
// =============================================================================

    /**
     * @private
     */
    com.socket24.Server.prototype.fireTimeSync = function () {
        this.dispatchEvent(new com.socket24.ServerEvent(ServerEvent.TIME_SYNC));
    };

    /**
     * @private
     */
    com.socket24.Server.prototype.dispatchWatchForProcessedUPCsResult = function (status) {
        this.dispatchEvent(new com.socket24.ServerEvent(com.socket24.ServerEvent.WATCH_FOR_PROCESSED_UPCS_RESULT,
            null, status));
    };

    /**
     * @private
     */
    com.socket24.Server.prototype.dispatchStopWatchingForProcessedUPCsResult = function (status) {
        this.dispatchEvent(new com.socket24.ServerEvent(com.socket24.ServerEvent.STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT,
            null, status));
    };

    /**
     * @private
     */
    com.socket24.Server.prototype.dispatchUPCProcessed = function (record) {
        this.dispatchEvent(new com.socket24.ServerEvent(com.socket24.ServerEvent.UPC_PROCESSED, record));
    };

    /**
     * @private
     */
    com.socket24.Server.prototype.dispatchResetUPCStatsResult = function (status) {
        this.dispatchEvent(new com.socket24.ServerEvent(com.socket24.ServerEvent.RESET_UPC_STATS_RESULT,
            null, status));
    };

//==============================================================================
// UPC LISTENERS
//==============================================================================

    /**
     * @private
     */
    com.socket24.Server.prototype.u50 = function (newTime) {             // SERVER_TIME
        this.lastKnownServerTime = Number(newTime);
        this.localAgeAtLastSync  = new Date().getTime();
        this.fireTimeSync();
    }

//==============================================================================
// CLEANUP AND DISPOSAL
//==============================================================================
    /**
     * @private
     */
    com.socket24.Server.prototype.cleanup = function () {
        this.log.info("[SERVER] Cleaning resources.");
        this.setIsWatchingForProcessedUPCs(false);
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.GatewaysSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.gateways = null;
        this.method = com.socket24eventName.GET_GATEWAYS_SNAPSHOT;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.GatewaysSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.GatewaysSnapshot.prototype.setGateways = function (value) {
        this.gateways = value;
    };

    com.socket24.snapshot.GatewaysSnapshot.prototype.getGateways = function () {
        if (!this.gateways) {
            return [];
        }
        return this.gateways.slice();
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.ServerEvent = function (type,
                                         upcProcessingRecord,
                                         status) {
        com.socket24.events.Event.call(this, type);

        this.upcProcessingRecord = upcProcessingRecord;
        this.status = status;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.ServerEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.ServerEvent.TIME_SYNC = "TIME_SYNC";
    /** @constant */
    com.socket24.ServerEvent.UPC_PROCESSED = "UPC_PROCESSED";
    /** @constant */
    com.socket24.ServerEvent.WATCH_FOR_PROCESSED_UPCS_RESULT = "WATCH_FOR_PROCESSED_UPCS_RESULT";
    /** @constant */
    com.socket24.ServerEvent.STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT = "STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT";
    /** @constant */
    com.socket24.ServerEvent.RESET_UPC_STATS_RESULT = "RESET_UPC_STATS_RESULT";

//==============================================================================
// VARIABLES
//==============================================================================
    com.socket24.ServerEvent.prototype.getUPCProcessingRecord = function () {
        return upcProcessingRecord;
    }

    com.socket24.ServerEvent.prototype.getStatus = function () {
        return status;
    }


    com.socket24.ServerEvent.prototype.toString = function () {
        return "[object ServerEvent]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.ServerModuleListSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.moduleList = null;
        this.method = com.socket24eventName.GET_SERVERMODULELIST_SNAPSHOT;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.ServerModuleListSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.ServerModuleListSnapshot.prototype.setModuleList = function (value) {
        this.moduleList = value;
    }

    com.socket24.snapshot.ServerModuleListSnapshot.prototype.getModuleList = function () {
        if (!this.moduleList) {
            return null;
        }
        return this.moduleList.slice();
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @private
     * @class
     */
    com.socket24eventName.SetAttr = function (name,
                                          value,
                                          options) {

        // Abort if name is invalid.
        if (!com.socket24.Validator.isValidAttributeName(name)) {
            throw new Error("Cannot set attribute. Illegal name" +
                " (see Validator.isValidAttributeName()). " +
                " Illegal attribute is: " + name + "=" + value);
        }

        // Abort if value is invalid.
        if (!com.socket24.Validator.isValidAttributeValue(value)) {
            throw new Error("Cannot set attribute. Illegal value" +
                " (see Validator.isValidAttributeValue()). " +
                " Illegal attribute is: " + name + "=" + value);
        }

        if (value == null) {
            value = "";
        }

        // Validation passed, so assign instance vars.
        this.name = name;
        this.value = value;
        this.options = options;
    };
    /**
     * @private
     */
    com.socket24eventName.SetClientAttr = function (name,
                                                value,
                                                options,
                                                scope,
                                                clientID,
                                                userID) {
        // Call superconstructor
        com.socket24eventName.SetAttr.call(this, name, value, options);

        // Abort if scope is invalid.
        if (!com.socket24.Validator.isValidAttributeScope(scope)) {
            throw new Error("Cannot set client attribute. Illegal scope" +
                " (see Validator.isValidAttributeScope()). " +
                " Illegal attribute is: " + name + "=" + value);
        }

        // A scope null means the attribute is global.
        if (scope == null) {
            scope = com.socket24.Tokens.GLOBAL_ATTR;
        }

        this.method = com.socket24eventName.SET_CLIENT_ATTR;
        this.args   = [clientID, userID, name, value, scope, options.toString()];
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24eventName.SetClientAttr, com.socket24eventName.SetAttr);
    /**
     * @private
     */
    com.socket24eventName.SetRoomAttr = function (name,
                                              value,
                                              options,
                                              roomID) {
        // Call superconstructor
        com.socket24eventName.SetAttr.call(this, name, value, options);

        this.method = com.socket24eventName.SET_ROOM_ATTR;
        this.args   = [roomID, name, value, options.toString()];
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24eventName.SetRoomAttr, com.socket24eventName.SetAttr);
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     *
     * Note: Due to JavaScript's lack of memory measurement APIs and byte-measurement
     * APIs, Vaida's Statistics class does not include many of the statistics found
     * in the equivalent Reactor Statistics class.
     */
    com.socket24.Statistics = function (vaida) {
        this.statsTimer;
        this.lastTick = NaN;
        this.lastTotalMessages = 0;
        this.messagesPerSecond = 0;

        // Peaks
        this.peakMessagesPerSecond = 0;

        this.vaida = null;
        this.connection = null;

        this.statsIntervalID = -1;

        this.init(vaida);
    };

    /**
     * @private
     */
    com.socket24.Statistics.prototype.init = function (vaida) {
        this.setVaida(vaida);
        this.start();
    };

    /**
     * @private
     */
    com.socket24.Statistics.prototype.setVaida = function (vaida) {
        // Register new vaida
        this.vaida = vaida;
    };

    com.socket24.Statistics.prototype.start = function () {
        this.stop();

        this.statsIntervalID = setInterval(statsTimerListener, 1000);

        this.lastTick = new Date().getTime();
        this.lastTotalMessages = this.getTotalMessages();
    };

    com.socket24.Statistics.prototype.stop = function () {
        clearInterval(statsIntervalID);
        this.clearStats();
    };

    /**
     * @private
     */
    com.socket24.Statistics.prototype.clearStats = function () {
        this.lastTick = 0;
        this.lastTotalMessages = 0;
        this.messagesPerSecond = 0;
        this.peakMessagesPerSecond = 0;
    };

    com.socket24.Statistics.prototype.getLifetimeNumClientsConnected = function () {
        return this.vaida.getClientManager().getLifetimeNumClientsKnown();
    };

    com.socket24.Statistics.prototype.getCurrentNumClientsConnected = function () {
        return this.vaida.getClientManager().getNumClients();
    };

    com.socket24.Statistics.prototype.getTotalMessagesReceived = function () {
        return this.vaida.getMessageManager().getNumMessagesReceived();
    }

    com.socket24.Statistics.prototype.getTotalMessagesSent = function () {
        return this.vaida.getMessageManager().getNumMessagesSent();
    };

    com.socket24.Statistics.prototype.getTotalMessages = function () {
        return this.getTotalMessagesReceived() + this.getTotalMessagesSent();
    };

    com.socket24.Statistics.prototype.getMessagesPerSecond = function () {
        return this.messagesPerSecond;
    };

//==============================================================================
// PEAK MESSAGES PER SECOND
//==============================================================================

    com.socket24.Statistics.prototype.getPeakMessagesPerSecond = function () {
        return this.peakMessagesPerSecond;
    };

// =============================================================================
// TIMER LISTENER
// =============================================================================

    /**
     * @private
     */
    com.socket24.Statistics.prototype.statsTimerListener = function (e) {
        // Check elapsed time
        var now = new Date().getTime();
        var elapsed = now - lastTick;
        lastTick = now;

        // Calculate number of messages sent and received since last tick
        var totalMessages = this.getTotalMessages();
        var tickNumMsgs   = totalMessages - this.lastTotalMessages;
        this.lastTotalMessages        = totalMessages;
        this.messagesPerSecond        = Math.round((1000/elapsed) * tickNumMsgs);
        if (this.messagesPerSecond > this.peakMessagesPerSecond) {
            this.peakMessagesPerSecond = this.messagesPerSecond;
        }
    };
//==============================================================================
//  STATUS CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.Status = new Object();
    /** @constant */
    com.socket24.Status.ACCOUNT_EXISTS         = "ACCOUNT_EXISTS";
    /** @constant */
    com.socket24.Status.ACCOUNT_NOT_FOUND      = "ACCOUNT_NOT_FOUND";
    /** @constant */
    com.socket24.Status.AUTHORIZATION_REQUIRED = "AUTHORIZATION_REQUIRED";
    /** @constant */
    com.socket24.Status.AUTHORIZATION_FAILED   = "AUTHORIZATION_FAILED";
    /** @constant */
    com.socket24.Status.ALREADY_ASSIGNED       = "ALREADY_ASSIGNED";
    /** @constant */
    com.socket24.Status.ALREADY_BANNED         = "ALREADY_BANNED";
    /** @constant */
    com.socket24.Status.ALREADY_IN_ROOM        = "ALREADY_IN_ROOM";
    /** @constant */
    com.socket24.Status.ALREADY_LOGGED_IN      = "ALREADY_LOGGED_IN";
    /** @constant */
    com.socket24.Status.ALREADY_OBSERVING      = "ALREADY_OBSERVING";
    /** @constant */
    com.socket24.Status.ALREADY_SYNCHRONIZED   = "ALREADY_SYNCHRONIZED";
    /** @constant */
    com.socket24.Status.ALREADY_WATCHING       = "ALREADY_WATCHING";
    /** @constant */
    com.socket24.Status.ATTR_NOT_FOUND         = "ATTR_NOT_FOUND";
    /** @constant */
    com.socket24.Status.CLIENT_NOT_FOUND       = "CLIENT_NOT_FOUND";
    /** @constant */
    com.socket24.Status.ERROR                  = "ERROR";
    /** @constant */
    com.socket24.Status.EVALUATION_FAILED      = "EVALUATION_FAILED";
    /** @constant */
    com.socket24.Status.DUPLICATE_VALUE        = "DUPLICATE_VALUE";
    /** @constant */
    com.socket24.Status.IMMUTABLE              = "IMMUTABLE";
    /** @constant */
    com.socket24.Status.INVALID_QUALIFIER      = "INVALID_QUALIFIER";
    /** @constant */
    com.socket24.Status.NAME_NOT_FOUND         = "NAME_NOT_FOUND";
    /** @constant */
    com.socket24.Status.NAME_EXISTS            = "NAME_EXISTS";
    /** @constant */
    com.socket24.Status.NOT_ASSIGNED           = "NOT_ASSIGNED";
    /** @constant */
    com.socket24.Status.NOT_BANNED             = "NOT_BANNED";
    /** @constant */
    com.socket24.Status.NOT_IN_ROOM            = "NOT_IN_ROOM";
    /** @constant */
    com.socket24.Status.NOT_LOGGED_IN          = "NOT_LOGGED_IN";
    /** @constant */
    com.socket24.Status.NOT_OBSERVING          = "NOT_OBSERVING";
    /** @constant */
    com.socket24.Status.NOT_WATCHING           = "NOT_WATCHING";
    /** @constant */
    com.socket24.Status.PERMISSION_DENIED      = "PERMISSION_DENIED";
    /** @constant */
    com.socket24.Status.REMOVED                = "REMOVED";
    /** @constant */
    com.socket24.Status.ROLE_NOT_FOUND         = "ROLE_NOT_FOUND";
    /** @constant */
    com.socket24.Status.ROOM_EXISTS            = "ROOM_EXISTS";
    /** @constant */
    com.socket24.Status.ROOM_FULL              = "ROOM_FULL";
    /** @constant */
    com.socket24.Status.ROOM_NOT_FOUND         = "ROOM_NOT_FOUND";
    /** @constant */
    com.socket24.Status.SERVER_ONLY            = "SERVER_ONLY";
    /** @constant */
    com.socket24.Status.SUCCESS                = "SUCCESS";
//==============================================================================
//  STATUS CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.SynchronizationState = new Object();
    /** @constant */
    com.socket24.SynchronizationState.SYNCHRONIZED     = "SYNCHRONIZED";
    /** @constant */
    com.socket24.SynchronizationState.NOT_SYNCHRONIZED = "NOT_SYNCHRONIZED";
    /** @constant */
    com.socket24.SynchronizationState.SYNCHRONIZING    = "SYNCHRONIZING";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     */
    com.socket24eventNameProcessingRecord = function () {
        /**
         * @field
         */
        this.fromClientID = null;
        /**
         * @field
         */
        this.fromUserID = null;
        /**
         * @field
         */
        this.fromClientAddress = null;
        /**
         * @field
         */
        this.processingStartedAt = NaN;
        /**
         * @field
         */
        this.processingFinishedAt = NaN;
        /**
         * @field
         */
        this.processingDuration = NaN;
        /**
         * @field
         */
        this.queuedAt = NaN;
        /**
         * @field
         */
        this.queueDuration = NaN;
        /**
         * @field
         */
        this.UPCSource = null;
    };

    /**
     * @private
     */
    com.socket24eventNameProcessingRecord.prototype.deserialize = function (serializedRecord) {
        var recordParts = [];
        var numSignificantSeparators = 6;
        var separatorIndices = [];
        var thisSeparatorIndex = 0;
        var previousSeparatorIndex = -1;

        // Don't use split because the source might contain the record separator
        for (var i = 0; i < numSignificantSeparators; i++) {
            thisSeparatorIndex = serializedRecord.indexOf(com.socket24.Tokens.RS, previousSeparatorIndex+1);
            recordParts.push(serializedRecord.substring(previousSeparatorIndex+1, thisSeparatorIndex));
            previousSeparatorIndex = thisSeparatorIndex;
        }
        recordParts.push(serializedRecord.substring(thisSeparatorIndex+1));

        this.deserializeParts(recordParts[0],
            recordParts[1],
            recordParts[2],
            recordParts[3],
            recordParts[4],
            recordParts[5],
            recordParts[6]);
    };

    /**
     * @private
     */
    com.socket24eventNameProcessingRecord.prototype.deserializeParts = function (fromClientID,
                                                                             fromUserID,
                                                                             fromClientAddress,
                                                                             queuedAt,
                                                                             processingStartedAt,
                                                                             processingFinishedAt,
                                                                             source) {
        this.fromClientID = fromClientID;
        this.fromUserID = fromUserID;
        this.fromClientAddress = fromClientAddress;
        this.processingStartedAt = parseFloat(processingStartedAt);
        this.processingFinishedAt = parseFloat(processingFinishedAt);
        this.processingDuration = this.processingFinishedAt - this.processingStartedAt;
        this.queuedAt = parseFloat(queuedAt);
        this.queueDuration = this.processingStartedAt - this.queuedAt;
        this.UPCSource = source;
        var escapedCDStart = /<!\(\[CDATA\[/gi;
        var escapedCDEnd = /\]\]\)>/gi;
        this.UPCSource = this.UPCSource.replace(escapedCDStart, "<![CDATA[");
        this.UPCSource = this.UPCSource.replace(escapedCDEnd, "]]>");
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     * @extends com.socket24.snapshot.Snapshot
     */
    com.socket24.snapshot.UPCStatsSnapshot = function () {
        // Call superconstructor
        com.socket24.snapshot.Snapshot.call(this);
        this.totalUPCsProcessed;
        this.numUPCsInQueue;
        this.lastQueueWaitTime;
        this.longestUPCProcesses;
        this.method = com.socket24eventName.GET_UPC_STATS_SNAPSHOT;
        this.hasStatus = true;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.snapshot.UPCStatsSnapshot, com.socket24.snapshot.Snapshot);

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /**
     * @private
     */
    com.socket24.snapshot.UPCStatsSnapshot.prototype.setTotalUPCsProcessed = function (value) {
        this.totalUPCsProcessed = value;
    };

    com.socket24.snapshot.UPCStatsSnapshot.prototype.getTotalUPCsProcessed = function () {
        return this.totalUPCsProcessed;
    };

    /**
     * @private
     */
    com.socket24.snapshot.UPCStatsSnapshot.prototype.setNumUPCsInQueue = function (value) {
        this.numUPCsInQueue = value;
    };

    com.socket24.snapshot.UPCStatsSnapshot.prototype.getNumUPCsInQueue = function () {
        return this.numUPCsInQueue;
    };

    /**
     * @private
     */
    com.socket24.snapshot.UPCStatsSnapshot.prototype.setLastQueueWaitTime = function (value) {
        this.lastQueueWaitTime = value;
    };

    com.socket24.snapshot.UPCStatsSnapshot.prototype.getLastQueueWaitTime = function () {
        return this.lastQueueWaitTime;
    };

    /**
     * @private
     */
    com.socket24.snapshot.UPCStatsSnapshot.prototype.setLongestUPCProcesses = function (value) {
        this.longestUPCProcesses = value;
    };

    com.socket24.snapshot.UPCStatsSnapshot.prototype.getLongestUPCProcesses = function () {
        if (!this.longestUPCProcesses) {
            return null;
        }
        return this.longestUPCProcesses.slice();
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    com.socket24.UpdateLevels = function () {
        this.restoreDefaults();
    };

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    com.socket24.UpdateLevels.FLAG_ROOM_MESSAGES     = 1;
    com.socket24.UpdateLevels.FLAG_SHARED_ROOM_ATTRIBUTES = 1 << 1;
    com.socket24.UpdateLevels.FLAG_OCCUPANT_COUNT = 1 << 2;
    com.socket24.UpdateLevels.FLAG_OBSERVER_COUNT = 1 << 3;
    com.socket24.UpdateLevels.FLAG_OCCUPANT_LIST = 1 << 4;
    com.socket24.UpdateLevels.FLAG_OBSERVER_LIST = 1 << 5;
    com.socket24.UpdateLevels.FLAG_SHARED_OCCUPANT_ATTRIBUTES_ROOM = 1 << 6;
    com.socket24.UpdateLevels.FLAG_SHARED_OBSERVER_ATTRIBUTES_ROOM = 1 << 7;
    com.socket24.UpdateLevels.FLAG_SHARED_OCCUPANT_ATTRIBUTES_GLOBAL = 1 << 8;
    com.socket24.UpdateLevels.FLAG_SHARED_OBSERVER_ATTRIBUTES_GLOBAL = 1 << 9;
    com.socket24.UpdateLevels.FLAG_OCCUPANT_LOGIN_LOGOFF = 1 << 10;
    com.socket24.UpdateLevels.FLAG_OBSERVER_LOGIN_LOGOFF = 1 << 11;
    com.socket24.UpdateLevels.FLAG_ALL_ROOM_ATTRIBUTES = 1 << 12;

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.UpdateLevels.prototype.clearAll = function () {
        this.roomMessages = false;
        this.sharedRoomAttributes = false;
        this.occupantCount = false;
        this.observerCount = false;
        this.occupantList = false;
        this.observerList = false;
        this.sharedOccupantAttributesRoom = false;
        this.sharedOccupantAttributesGlobal = false;
        this.sharedObserverAttributesRoom = false;
        this.sharedObserverAttributesGlobal = false;
        this.occupantLoginLogoff = false;
        this.observerLoginLogoff = false;
        this.allRoomAttributes = false;
    };

    com.socket24.UpdateLevels.prototype.restoreDefaults = function () {
        this.roomMessages = true;
        this.sharedRoomAttributes = true;
        this.occupantCount = false;
        this.observerCount = false;
        this.occupantList = true;
        this.observerList = false;
        this.sharedOccupantAttributesRoom = true;
        this.sharedOccupantAttributesGlobal = true;
        this.sharedObserverAttributesRoom = false;
        this.sharedObserverAttributesGlobal = false;
        this.occupantLoginLogoff = true;
        this.observerLoginLogoff = false;
        this.allRoomAttributes = false;
    };

    com.socket24.UpdateLevels.prototype.toInt = function () {
        var levels = (this.roomMessages ? com.socket24.UpdateLevels.FLAG_ROOM_MESSAGES : 0)
            | (this.sharedRoomAttributes ? com.socket24.UpdateLevels.FLAG_SHARED_ROOM_ATTRIBUTES : 0)
            | (this.occupantCount ? com.socket24.UpdateLevels.FLAG_OCCUPANT_COUNT : 0)
            | (this.observerCount ? com.socket24.UpdateLevels.FLAG_OBSERVER_COUNT : 0)
            | (this.occupantList ? com.socket24.UpdateLevels.FLAG_OCCUPANT_LIST : 0)
            | (this.observerList ? com.socket24.UpdateLevels.FLAG_OBSERVER_LIST : 0)
            | (this.sharedOccupantAttributesRoom ? com.socket24.UpdateLevels.FLAG_SHARED_OCCUPANT_ATTRIBUTES_ROOM : 0)
            | (this.sharedOccupantAttributesGlobal ? com.socket24.UpdateLevels.FLAG_SHARED_OCCUPANT_ATTRIBUTES_GLOBAL : 0)
            | (this.sharedObserverAttributesRoom ? com.socket24.UpdateLevels.FLAG_SHARED_OBSERVER_ATTRIBUTES_ROOM : 0)
            | (this.sharedObserverAttributesGlobal ? com.socket24.UpdateLevels.FLAG_SHARED_OBSERVER_ATTRIBUTES_GLOBAL : 0)
            | (this.occupantLoginLogoff ? com.socket24.UpdateLevels.FLAG_OCCUPANT_LOGIN_LOGOFF : 0)
            | (this.observerLoginLogoff ? com.socket24.UpdateLevels.FLAG_OBSERVER_LOGIN_LOGOFF : 0)
            | (this.allRoomAttributes ? com.socket24.UpdateLevels.FLAG_ALL_ROOM_ATTRIBUTES : 0);

        return levels;
    };

    com.socket24.UpdateLevels.prototype.fromInt = function (levels) {
        roomMessages                   = levels & com.socket24.UpdateLevels.FLAG_ROOM_MESSAGES;
        sharedRoomAttributes           = levels & com.socket24.UpdateLevels.FLAG_SHARED_ROOM_ATTRIBUTES;
        occupantCount                  = levels & com.socket24.UpdateLevels.FLAG_OCCUPANT_COUNT;
        observerCount                  = levels & com.socket24.UpdateLevels.FLAG_OBSERVER_COUNT;
        occupantList                   = levels & com.socket24.UpdateLevels.FLAG_OCCUPANT_LIST;
        observerList                   = levels & com.socket24.UpdateLevels.FLAG_OBSERVER_LIST;
        sharedOccupantAttributesRoom   = levels & com.socket24.UpdateLevels.FLAG_SHARED_OCCUPANT_ATTRIBUTES_ROOM;
        sharedOccupantAttributesGlobal = levels & com.socket24.UpdateLevels.FLAG_SHARED_OCCUPANT_ATTRIBUTES_GLOBAL;
        sharedObserverAttributesRoom   = levels & com.socket24.UpdateLevels.FLAG_SHARED_OBSERVER_ATTRIBUTES_ROOM;
        sharedObserverAttributesGlobal = levels & com.socket24.UpdateLevels.FLAG_SHARED_OBSERVER_ATTRIBUTES_GLOBAL;
        occupantLoginLogoff            = levels & com.socket24.UpdateLevels.FLAG_OCCUPANT_LOGIN_LOGOFF;
        observerLoginLogoff            = levels & com.socket24.UpdateLevels.FLAG_OBSERVER_LOGIN_LOGOFF;
        allRoomAttributes              = levels & com.socket24.UpdateLevels.FLAG_ALL_ROOM_ATTRIBUTES;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class

        The UserAccount class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGIN}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGOFF_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.LOGOFF}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.CHANGE_PASSWORD_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.CHANGE_PASSWORD}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.SYNCHRONIZE}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.OBSERVE}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.OBSERVE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.STOP_OBSERVING}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.STOP_OBSERVING_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.ADD_ROLE_RESULT}</li>
     <li class="fixedFont">{@link com.socket24.AccountEvent.REMOVE_ROLE_RESULT}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher
     */

    com.socket24.UserAccount = function (userID,
                                         log,
                                         accountManager,
                                         clientManager,
                                         roomManager) {
        com.socket24.events.EventDispatcher.call(this);

        this.userID = userID;
        this.attributeManager = null;
        this.connectionState = 0;
        this.password = null;
        this.lastAttemptedPassword = null;
        this._client = null;
        this._accountManager = null;
        this._clientManager = null;
        this._roomManager = null;
        this._log = null;

        this.setLog(log);
        this.setAccountManager(accountManager);
        this.setClientManager(clientManager);
        this.setRoomManager(roomManager);
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.UserAccount, com.socket24.events.EventDispatcher);

//==============================================================================
// STATIC VARIABLES
//==============================================================================
    /** @private */
    com.socket24.UserAccount.FLAG_MODERATOR = 1 << 1;

//==============================================================================
// DEPENDENCIES
//==============================================================================

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.getAttributeCollection = function () {
        return this.attributeManager.getAttributeCollection();
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.setAttributeManager = function (value) {
        this.attributeManager = value;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.getAttributeManager = function () {
        return this.attributeManager;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.getClientManager = function () {
        return this._clientManager;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.setClientManager = function (value) {
        this._clientManager = value;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.getRoomManager = function () {
        return this._roomManager;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.setRoomManager = function (value) {
        this._roomManager = value;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.getLog = function () {
        return this._log;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.setLog = function (value) {
        this._log = value;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.getAccountManager = function () {
        return this._accountManager;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.setAccountManager = function (value) {
        this._accountManager = value;
    };

    com.socket24.UserAccount.prototype.getClient = function () {
        var customClient;
        this.validateClientReference();
        if (this._client != null) {
            customClient = this._client.getCustomClient(null);
            return customClient == null ? this._client : customClient;
        } else {
            return null;
        }
    };

    com.socket24.UserAccount.prototype.getInternalClient = function () {
        this.validateClientReference();
        return this._client;
    }

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.setClient = function (value) {
        if (value == null) {
            this._client = null;
        } else {
            if (this._client != value) {
                this._client = value;
                this._client.setAccount(this);
            }
        }
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.validateClientReference = function () {
        if (this._client != null) {
            if (!this._client.isSelf()
                && !this._clientManager.isWatchingForClients()
                && !this._accountManager.isObservingAccount(this.getUserID())
                && !this._clientManager.isObservingClient(this._client.getClientID())
                && !this._roomManager.clientIsKnown(this._client.getClientID())) {
                this.setClient(null);
            }
        }
    };

//==============================================================================
// IS SELF
//==============================================================================

    com.socket24.UserAccount.prototype.isSelf = function () {
        return this._client == null ? false : this._client.isSelf();
    };

//==============================================================================
// CONNECTION STATE
//==============================================================================

    com.socket24.UserAccount.prototype.getConnectionState = function () {
        if (this.getInternalClient() != null) {
            return com.socket24.ConnectionState.LOGGED_IN;
        } else if (!this._accountManager.isObservingAccount(this.getUserID())) {
            return com.socket24.ConnectionState.NOT_CONNECTED;
        } else if (this._clientManager.isWatchingForClients()) {
            return com.socket24.ConnectionState.NOT_CONNECTED;
        } else {
            // Not observing this user, not watching for clients, and no client means
            // this account's state is unknown. (This happens when watching for user
            // accounts).
            return com.socket24.ConnectionState.UNKNOWN;
        }
    };

    com.socket24.UserAccount.prototype.isLoggedIn = function () {
        return this.getConnectionState() == com.socket24.ConnectionState.LOGGED_IN;
    };

//==============================================================================
// USER ID
//==============================================================================

    com.socket24.UserAccount.prototype.getUserID = function () {
        return this.userID;
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.setUserID = function (userID) {
        if (this.userID != userID) {
            this.userID = userID;
        }
    };

// =============================================================================
// LOGOFF
// =============================================================================

    com.socket24.UserAccount.prototype.logoff = function (password) {
        this._accountManager.logoff(this.getUserID(), password);
    };

// =============================================================================
// CHANGE PASSWORD
// =============================================================================

    com.socket24.UserAccount.prototype.changePassword = function (newPassword, oldPassword) {
        this._accountManager.changePassword(this.getUserID(), newPassword, oldPassword);
    };

// =============================================================================
// ROLES
// =============================================================================

    com.socket24.UserAccount.prototype.addRole = function (role) {
        this._accountManager.addRole(this.getUserID(), role);
    };

    com.socket24.UserAccount.prototype.removeRole = function (userID, role) {
        this._accountManager.removeRole(this.getUserID(), role);
    };

    com.socket24.UserAccount.prototype.isModerator = function () {
        var rolesAttr = this.getAttribute(com.socket24.Tokens.ROLES_ATTR);
        var roles;
        if (rolesAttr != null) {
            return (parseInt(rolesAttr) & UserAccount.FLAG_MODERATOR) > 0;
        } else {
            this.getLog().warn(this.toString() + " Could not determine moderator status because the account is not synchronized.");
            return false;
        }
    };

// =============================================================================
// LOGIN/LOGOFF TASKS
// =============================================================================

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.doLoginTasks = function () {
        this.fireLogin();
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.doLogoffTasks = function () {
        this.setClient(null);
        this.fireLogoff();
    };

// =============================================================================
// OBSERVATION
// =============================================================================

    com.socket24.UserAccount.prototype.observe = function () {
        this._accountManager.observeAccount(this.getUserID());
    };

    com.socket24.UserAccount.prototype.stopObserving = function () {
        this._accountManager.stopObservingAccount(this.getUserID());
    };

// =============================================================================
// ATTRIBUTES: PUBLIC API
// =============================================================================

    com.socket24.UserAccount.prototype.setAttribute = function (attrName,
                                                                attrValue,
                                                                attrScope,
                                                                isShared,
                                                                evaluate) {
        // Create an integer to hold the attribute options
        var attrOptions = com.socket24.AttributeOptions.FLAG_PERSISTENT
            | (isShared     ? com.socket24.AttributeOptions.FLAG_SHARED     : 0)
            | (evaluate     ? com.socket24.AttributeOptions.FLAG_EVALUATE   : 0);

        // Set the attribute on the server.
        this.attributeManager.setAttribute(new com.socket24eventName.SetClientAttr(attrName, attrValue, attrOptions, attrScope, null, this.getUserID()));
    };

    com.socket24.UserAccount.prototype.deleteAttribute = function (attrName, attrScope) {
        var deleteRequest = new com.socket24eventName.RemoveClientAttr(null, this.getUserID(), attrName, attrScope);
        this.attributeManager.deleteAttribute(deleteRequest);
    };

    com.socket24.UserAccount.prototype.getAttribute = function (attrName, attrScope) {
        return this.attributeManager.getAttribute(attrName, attrScope);
    };

    com.socket24.UserAccount.prototype.getAttributes = function () {
        return this.attributeManager.getAttributes();
    };

    com.socket24.UserAccount.prototype.getAttributesByScope = function (scope) {
        return this.attributeManager.getAttributesByScope(scope);
    };

//==============================================================================
// TOSTRING
//==============================================================================

    com.socket24.UserAccount.prototype.toString = function () {
        return "[USER_ACCOUNT userid: " + this.getUserID() + ", clientid: " + (this._client == null ? "" : this._client.getClientID()) + "]";
    };

//==============================================================================
// EVENT DISPATCHING
//==============================================================================

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireLogin = function () {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGIN,
            com.socket24.Status.SUCCESS, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireLogoffResult = function (status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGOFF_RESULT,
            status, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireLogoff = function () {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.LOGOFF,
            com.socket24.Status.SUCCESS, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireChangePasswordResult = function (status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.CHANGE_PASSWORD_RESULT,
            status, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireChangePassword = function () {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.CHANGE_PASSWORD,
            com.socket24.Status.SUCCESS, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireSynchronize = function () {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.SYNCHRONIZE,
            com.socket24.Status.SUCCESS, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireObserve = function () {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.OBSERVE,
            com.socket24.Status.SUCCESS, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireObserveResult = function (status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.OBSERVE_RESULT,
            status, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireStopObserving = function () {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.STOP_OBSERVING,
            com.socket24.Status.SUCCESS, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireStopObservingResult = function (status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.STOP_OBSERVING_RESULT,
            status, this.getUserID(), (this._client == null ? null : this._client.getClientID()));
        this.dispatchEvent(e);
    };

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireAddRoleResult = function (role, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.ADD_ROLE_RESULT,
            status, this.getUserID(),
            (this._client == null ? null : this._client.getClientID()), role);
        this.dispatchEvent(e);
    }

    /**
     * @private
     */
    com.socket24.UserAccount.prototype.fireRemoveRoleResult = function (role, status) {
        var e = new com.socket24.AccountEvent(com.socket24.AccountEvent.REMOVE_ROLE_RESULT,
            status, this.getUserID(),
            (this._client == null ? null : this._client.getClientID()), role);
        this.dispatchEvent(e);
    }













//==============================================================================
// VALIDATION UTILITIES
//==============================================================================
    com.socket24.Validator = new Object();

    com.socket24.Validator.isValidRoomID = function (value) {
        // Can't be null, nor the empty string
        if (value == null || value == "") {
            return false;
        }
        // Can't contain "."
        if (value.indexOf(".") != -1) {
            return false;
        }
        // Can't contain RS
        if (value.indexOf(com.socket24.Tokens.RS) != -1) {
            return false;
        }
        // Can't contain WILDCARD
        if (value.indexOf(com.socket24.Tokens.WILDCARD) != -1) {
            return false;
        }

        return true;
    };

    com.socket24.Validator.isValidRoomQualifier = function (value) {
        if (value == null || value == "") {
            return false;
        }
        // "*" is valid (it means the unnamed qualifier)
        if (value == "*") {
            return true;
        }

        // Can't contain RS
        if (value.indexOf(com.socket24.Tokens.RS) != -1) {
            return false;
        }
        // Can't contain WILDCARD
        if (value.indexOf(com.socket24.Tokens.WILDCARD) != -1) {
            return false;
        }

        return true;
    };

    com.socket24.Validator.isValidResolvedRoomID = function (value) {
        // Can't be null, nor the empty string
        if (value == null || value == "") {
            return false;
        }

        // Can't contain RS
        if (value.indexOf(com.socket24.Tokens.RS) != -1) {
            return false;
        }
        // Can't contain WILDCARD
        if (value.indexOf(com.socket24.Tokens.WILDCARD) != -1) {
            return false;
        }

        return true;
    };

    com.socket24.Validator.isValidAttributeName = function (value) {
        // Can't be empty
        if (value == "" || value == null) {
            return false;
        }

        // Can't contain RS
        if (value.indexOf(com.socket24.Tokens.RS) != -1) {
            return false;
        }

        return true;
    };

    com.socket24.Validator.isValidAttributeValue = function (value) {
        // Can't contain RS
        if (typeof value != "string") {
            // Non-string attribute values are coerced to strings at send time
            value = value.toString();
        }
        if (value.indexOf(com.socket24.Tokens.RS) == -1) {
            return true;
        } else {
            return false;
        }
    };

    com.socket24.Validator.isValidAttributeScope = function (value) {
        // Can't contain RS
        if (value != null) {
            return this.isValidResolvedRoomID(value);
        } else {
            return true;
        }
    };

    com.socket24.Validator.isValidModuleName = function (value) {
        // Can't be empty (can be null)
        if (value == "") {
            return false;
        }

        // Can't contain RS
        if (value.indexOf(com.socket24.Tokens.RS) != -1) {
            return false;
        }

        return true;
    };

    com.socket24.Validator.isValidPassword = function (value) {
        // Can't contain RS
        if (value != null && value.indexOf(com.socket24.Tokens.RS) != -1) {
            return false;
        }

        return true;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     * The Vaida class is the root class of every Vaida application.
     * It provides basic tools for connecting to Union server, and gives
     * the application access to the core Vaida system modules.
     * Vaida dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.VaidaEvent.READY}</li>
     <li class="fixedFont">{@link com.socket24.VaidaEvent.CLOSE}</li>
     <li class="fixedFont">{@link com.socket24.VaidaEvent.CONNECT_REFUSED}</li>
     <li class="fixedFont">{@link com.socket24.VaidaEvent.PROTOCOL_INCOMPATIBLE}</li>
     </ul>

     * To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.
     *
     * @param configURL The URL of a connection-configuration file. When the file
     * finishes loading, the Vaida client automatically attempts to connect to
     * Union Server at the specified address(es). Note that the configuration file
     * need not be loaded at construction time; it can be loaded later via Vaida's
     * loadConfig() method. For configuration file details, see loadConfig().
     *
     * @param traceLogMessages A flag indicating whether to send log messages to the
     * JavaScript output console. Applies to environments that support the
     * console.log() function only.
     *
     * @extends com.socket24.events.EventDispatcher
     */
    com.socket24.Vaida = function (configURL,
                                      traceLogMessages) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        // Initialization. For non-browser environments, set window to null.
        this.window = typeof window == "undefined" ? null : window;

        traceLogMessages = traceLogMessages == null ? true : traceLogMessages;

        this.useSecureConnect = false;
        this.statistics = null;
        this.sessionID = null;

        // Initialize system versions
        this.system = new com.socket24.System(this.window);

        // Set up the this.log.
        this.log = new com.socket24.logger.Logger();

        // Output host version information.
        if (typeof navigator != "undefined") {
            this.log.info("User Agent: " + navigator.userAgent + " " + navigator.platform);
        }
        this.log.info("Union Client Version: " + this.system.getClientType() + " " + this.system.getClientVersion().toStringVerbose());
        this.log.info("Client UPC Protocol Version: " + this.system.getUPCVersion().toString());
        this.consoleLogger = null;

        // Set up the connection manager.
        this.connectionMan = new com.socket24.ConnectionManager(this);

        // Set up the room manager.
        this.roomMan = new com.socket24.RoomManager(this);

        // Set up the message manager.
        this.messageMan = new com.socket24.MessageManager(this.log, this.connectionMan);

        // Set up the server
        this.server = new com.socket24.Server(this);

        // Make the account manager.
        this.accountMan = new com.socket24.AccountManager(this.log);

        // Set up the client manager.
        this.clientMan = new com.socket24.ClientManager(this.roomMan, this.accountMan, this.connectionMan, this.messageMan, this.server, this.log);

        // Set up the account manager.
        this.accountMan.setClientManager(this.clientMan);
        this.accountMan.setMessageManager(this.messageMan);
        this.accountMan.setRoomManager(this.roomMan);

        // Set up the snapshot manager.
        this.snapshotMan = new com.socket24.SnapshotManager(this.messageMan);

        // Set up the core message listener
        this.coreMsgListener = new com.socket24.CoreMessageListener(this);

        // Log the core Reactor events
        this.coreEventLogger = new com.socket24.CoreEventLogger(this.log, this.connectionMan, this.roomMan,
            this.accountMan, this.server, this.clientMan,
            this);

        // Register for ConnectionManager events.
        this.connectionMan.addEventListener(com.socket24.ConnectionManagerEvent.READY,
            this.readyListener, this);
        this.connectionMan.addEventListener(com.socket24.ConnectionManagerEvent.CONNECT_FAILURE,
            this.connectFailureListener, this);
        this.connectionMan.addEventListener(com.socket24.ConnectionManagerEvent.DISCONNECT,
            this.disconnectListener, this);

        // Set up the connection monitor
        this.connectionMonitor = new com.socket24.ConnectionMonitor(this);
        this.connectionMonitor.restoreDefaults();

        // Register to be notified when a new connection is about to be opened
        this.connectionMan.addEventListener(com.socket24.ConnectionManagerEvent.SELECT_CONNECTION,
            this.selectConnectionListener, this);

        // Enable HTTP failover connections
        this.httpFailoverEnabled = true;

        if (traceLogMessages) {
            this.enableConsole();
        }

        // If the Reactor wasn't constructed with a config argument...
        if (configURL == null || configURL == "") {
            this.log.info("[vaida] Initialization complete.");
        } else {
            // ...otherwise, retrieve system settings from specified config file.
            this.loadConfig(configURL);
        }
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.Vaida, com.socket24.events.EventDispatcher);

//==============================================================================
// XML CONFIG METHODS
//==============================================================================

    /**
     * Loads the client-configuration file. When the file load completes,
     * Vaida automatically attempts to connect to Union Server using
     * the settings specified by the configuration file.
     *
     * The configuration file has the following format:
     *
     * <pre>
     * &lt;?xml version="1.0"?>
     * &lt;config>
     *   &lt;connections>
     *     &lt;connection host="hostNameOrIP1" port="portNumber1" type="connectionType1" senddelay="milliseconds1" secure="false" />
     *     &lt;connection host="hostNameOrIP2" port="portNumber2" type="connectionType2" senddelay="milliseconds2" secure="false" />
     *     ...
     *     &lt;connection host="hostNameOrIPn" port="portNumbern" type="connectionTypen" senddelay="millisecondsn" secure="false" />
     *   &lt;/connections>
     *   &lt;autoreconnectfrequency>frequency&lt;/autoreconnectfrequency>
     *   &lt;connectiontimeout>duration&lt;/connectiontimeout>
     *   &lt;heartbeatfrequency>frequency&lt;/heartbeatfrequency>
     *   &lt;readytimeout>timeout&lt;/readytimeout>
     *   &lt;loglevel>level&lt;/loglevel>
     * &lt;/config>
     * </pre>
     *
     * When the <code>secure</code> attribute is true, communication is
     * conducted over WSS or HTTPS using the environment's TLS implementation.
     */
    com.socket24.Vaida.prototype.loadConfig = function (configURL) {
        this.log.info("[vaida] Loading config from " + configURL +".");
        var request = new XMLHttpRequest();
        var self = this;

        request.onerror = function () {
            self.configErrorListener();
        };

        request.onreadystatechange = function (state) {
            if (request.readyState == 4) {
                self.configLoadCompleteListener(request);
            }
        }
        request.open("GET", configURL);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        request.send(null);
    };

    /**
     * @private
     */
    com.socket24.Vaida.prototype.getTextForNode = function (tree, tagname) {
        var nodes = tree.getElementsByTagName(tagname);
        var node;
        if (nodes.length > 0) {
            node = nodes[0];
        }

        if (node != null
            && node.firstChild != null
            && node.firstChild.nodeType == 3
            && node.firstChild.nodeValue.length > 0) {
            return node.firstChild.nodeValue;
        } else {
            return null;
        }
    };


    /**
     * @private
     */
    com.socket24.Vaida.prototype.configLoadCompleteListener = function (request) {
        var config = request.responseXML;
        if ((request.status != 200 && request.status != 0) || config == null) {
            this.log.error("[vaida] Configuration file failed to load.");
            return;
        }
        this.log.error("[vaida] Configuration file loaded.");
        try {
            var loglevel = this.getTextForNode(config, "logLevel");
            if (loglevel != null) {
                this.log.setLevel(loglevel);
            }

            var autoreconnectfrequencyNodes = config.getElementsByTagName("autoreconnectfrequency");
            var autoreconnectfrequencyNode = null;
            if (autoreconnectfrequencyNodes.length == 1) {
                autoreconnectfrequencyNode = autoreconnectfrequencyNodes[0];
                var nodetext = this.getTextForNode(config, "autoreconnectfrequency");
                if (nodetext != null && !isNaN(parseInt(nodetext))) {
                    this.connectionMonitor.setAutoReconnectFrequency(
                        parseInt(nodetext),
                        parseInt(nodetext),
                        autoreconnectfrequencyNode.getAttribute("delayfirstattempt") == null ? false :
                            autoreconnectfrequencyNode.getAttribute("delayfirstattempt").toLowerCase() == "true"
                    );
                } else {
                    this.connectionMonitor.setAutoReconnectFrequency(
                        parseInt(autoreconnectfrequencyNode.getAttribute("minms")),
                        parseInt(autoreconnectfrequencyNode.getAttribute("maxms")),
                        autoreconnectfrequencyNode.getAttribute("delayfirstattempt") == null ? false :
                            autoreconnectfrequencyNode.getAttribute("delayfirstattempt").toLowerCase() == "true"
                    );
                }
                if (autoreconnectfrequencyNode.getAttribute("maxattempts") != null
                    && autoreconnectfrequencyNode.getAttribute("maxattempts").length > 0) {
                    this.connectionMonitor.setAutoReconnectAttemptLimit(
                        parseInt(autoreconnectfrequencyNode.getAttribute("maxattempts"))
                    );
                }
            }

            var connectiontimeout = this.getTextForNode(config, "connectionTimeout");
            if (connectiontimeout != null) {
                this.connectionMonitor.setConnectionTimeout(parseInt(connectiontimeout));
            }

            var heartbeatfrequency = this.getTextForNode(config, "heartbeatFrequency");
            if (heartbeatfrequency != null) {
                this.connectionMonitor.setHeartbeatFrequency(parseInt(heartbeatfrequency));
            }

            var readytimeout = this.getTextForNode(config, "readyTimeout");
            if (readytimeout != null) {
                this.connectionMan.setReadyTimeout(parseInt(readytimeout));
            }

            var connections = config.getElementsByTagName("connection");
            if (connections.length == 0) {
                this.log.error("[vaida] No connections specified in Vaida configuration file.");
                return;
            }

            // Make connections
            var connection;
            var host;
            var port;
            var type;
            var secure;
            var sendDelay;

            for (var i = 0; i < connections.length; i++) {
                connection = connections[i];
                host = connection.getAttribute("host");
                port = connection.getAttribute("port");
                type = connection.getAttribute("type");
                if (type != null) {
                    type = type.toUpperCase();
                }
                secure = connection.getAttribute("secure");
                sendDelay = connection.getAttribute("senddelay");

                switch (type) {
                    // No type means make a socket connection with an http backup
                    case null:
                        if (secure === "true") {
                            this.buildConnection(host, port, com.socket24.ConnectionType.SECURE_WEBSOCKET, -1);
                            this.buildConnection(host, port, com.socket24.ConnectionType.SECURE_HTTP, sendDelay);
                        } else {
                            this.buildConnection(host, port, com.socket24.ConnectionType.WEBSOCKET, -1);
                            this.buildConnection(host, port, com.socket24.ConnectionType.HTTP, sendDelay);
                        }
                        break;

                    case com.socket24.ConnectionType.WEBSOCKET:
                        if (secure === "true") {
                            this.buildConnection(host, port, com.socket24.ConnectionType.SECURE_WEBSOCKET, -1);
                        } else {
                            this.buildConnection(host, port, com.socket24.ConnectionType.WEBSOCKET, -1);
                        }
                        break;

                    case com.socket24.ConnectionType.HTTP:
                        if (secure === "true") {
                            this.buildConnection(host, port, com.socket24.ConnectionType.SECURE_HTTP, sendDelay);
                        } else {
                            this.buildConnection(host, port, com.socket24.ConnectionType.HTTP, sendDelay);
                        }
                        break;

                    default:
                        this.log.error("[vaida] Unrecognized connection type in Vaida configuration file: [" + type + "]. Connection ignored.");
                }
            }
        } catch (error) {
            this.log.error("[vaida] Error parsing connection in Vaida configuration file: \n"
                + request.responseText + "\n" + error.toString());
        }

        this.connect();
    };

    /** @private */
    com.socket24.Vaida.prototype.buildConnection = function (host, port, type, sendDelay) {

        var connection;

        switch (type) {

            case com.socket24.ConnectionType.WEBSOCKET:
                connection = new com.socket24.WebSocketConnection();
                break;

            case com.socket24.ConnectionType.SECURE_WEBSOCKET:
                connection = new com.socket24.SecureWebSocketConnection();
                break;

            default:
                throw new Error("[vaida] Error at buildConnection(). Invalid type specified: [" + type + "]");
        }

        try {
            connection.setServer(host, port);
        } catch (e) {
            this.log.error("[CONNECTION] " + connection.toString() + " " + e);
        } finally {
            this.connectionMan.addConnection(connection);
        }

    };

    /**
     * @private
     */
    com.socket24.Vaida.prototype.configErrorListener = function (e) {
        this.log.fatal("[vaida] Configuration file could not be loaded.");
    };

//==============================================================================
// CONNECTION METHODS
//==============================================================================

    /**
     * <p>
     * The connect() method attempts to connect to Union Server at the specified
     * host and ports. If no host and ports are specified, Vaida attempts to
     * connect using the ConnectionManager's current list of hosts and ports.
     * </p>
     *
     * @param host
     * @param port1
     * @param port2
     * @param ...
     * @param portn
     */
    com.socket24.Vaida.prototype.connect = function (host) {
        this.useSecureConnect = true;
        this.doConnect.apply(this, arguments);
    };

    /**
     * <p>
     * The secureConnect() method is identical to the connect() method, except that
     * it uses an encrypted connection (TLS or SSL) rather than an
     * unencrypted connection. Before secureConnect() can be used, Union Server
     * must be configured to accept client communications over a secure gateway,
     * which includes the installation of a server-side security certificate. For
     * instructions on configuring Union Server for secure communications, see
     * Union Server's documentation at http://unionplatform.com.
     * </p>
     *
     * @see com.socket24.Vaida#connect
     */
    com.socket24.Vaida.prototype.secureConnect = function (host) {
        this.useSecureConnect = true;
        this.doConnect.apply(this, arguments);
    };

    /**
     * @private
     */
    com.socket24.Vaida.prototype.doConnect = function (host) {
        var ports = Array.prototype.slice.call(arguments).slice(1);
        if (host != null) {
            this.setServer.apply(this, [host].concat(ports));
        }
        this.log.info("[vaida] Connecting to Union...");
        this.connectionMan.connect();
    };

    com.socket24.Vaida.prototype.disconnect = function () {
        this.connectionMan.disconnect();
    };

    com.socket24.Vaida.prototype.setServer = function (host) {
        var ports = Array.prototype.slice.call(arguments).slice(1);
        if (host != null && ports.length > 0) {
            if (this.connectionMan.getConnections().length > 0) {
                this.connectionMan.removeAllConnections();
            }
            // Where possible, create WebSocket connections for the specified
            // host and its ports.
            var connectionType;
            if (this.system.hasWebSocket()) {
                for (var i = 1; i < arguments.length; i++) {
                    connectionType = this.useSecureConnect
                        ? com.socket24.ConnectionType.SECURE_WEBSOCKET
                        : com.socket24.ConnectionType.WEBSOCKET;
                    this.buildConnection(host, arguments[i], connectionType, -1);
                }
            } else {
                this.log.info("[vaida] WebSocket not found in host environment. Trying HTTP.");
            }
            // Next, if failover is enabled or WebSocket is not supported, create HTTPConnections
            if (this.isHTTPFailoverEnabled() || !this.system.hasWebSocket()) {
                for (i = 1; i < arguments.length; i++) {
                    connectionType = this.useSecureConnect
                        ? com.socket24.ConnectionType.SECURE_WEBSOCKET
                        : com.socket24.ConnectionType.WEBSOCKET;
                    this.buildConnection(host, arguments[i], connectionType, -1);
                }
            }
        } else {
            this.log.error("[vaida] setServer() failed. Invalid host [" + host + "] or port [" + ports.join(",") + "].");
        }
    };

    com.socket24.Vaida.prototype.isReady = function () {
        return this.connectionMan.isReady();
    };

//==============================================================================
// HTTP FAILOVER CONFIGURATION
//==============================================================================

    com.socket24.Vaida.prototype.enableHTTPFailover = function () {
        this.httpFailoverEnabled = true;
    };

    com.socket24.Vaida.prototype.disableHTTPFailover = function () {
        this.httpFailoverEnabled = false;
    };

    com.socket24.Vaida.prototype.isHTTPFailoverEnabled = function () {
        return this.httpFailoverEnabled;
    };

//==============================================================================
// STATISTICS MANAGEMENT
//==============================================================================

    com.socket24.Vaida.prototype.enableStatistics = function () {
        if (this.statistics == null) {
            this.statistics = new com.socket24.Statistics(this);
        }
    }

    com.socket24.Vaida.prototype.disableStatistics = function () {
        if (this.statistics != null) {
            this.statistics.stop();
        }
    }

    com.socket24.Vaida.prototype.getStatistics = function () {
        return this.statistics;
    }

//==============================================================================
// MANAGER AND SERVICE RETRIEVAL
//==============================================================================
    com.socket24.Vaida.prototype.getSystem = function () {
        return this.system;
    };

    com.socket24.Vaida.prototype.getRoomManager = function () {
        return this.roomMan;
    };

    com.socket24.Vaida.prototype.getConnectionManager = function () {
        return this.connectionMan;
    };

    com.socket24.Vaida.prototype.getClientManager = function () {
        return this.clientMan;
    };

    com.socket24.Vaida.prototype.getAccountManager = function () {
        return this.accountMan;
    };

    com.socket24.Vaida.prototype.getMessageManager = function () {
        return this.messageMan;
    };

    com.socket24.Vaida.prototype.getServer = function () {
        return this.server;
    };

    com.socket24.Vaida.prototype.getConnectionMonitor = function () {
        return this.connectionMonitor;
    };

    /**
     * @private
     */
    com.socket24.Vaida.prototype.getCoreMessageListener = function () {
        return this.coreMsgListener;
    }

    com.socket24.Vaida.prototype.getLog = function () {
        return this.log;
    }

    com.socket24.Vaida.prototype.self = function () {
        var customGlobalClient;

        if (this.clientMan == null || !this.isReady()) {
            return null;
        } else {
            customGlobalClient = this.clientMan.self().getCustomClient(null);
            if (customGlobalClient != null) {
                return customGlobalClient;
            } else {
                return this.clientMan.self();
            }
        }
    };

    /**
     * @private
     */
    com.socket24.Vaida.prototype.getSnapshotManager = function () {
        return this.snapshotMan;
    };

//==============================================================================
// SNAPSHOT API
//==============================================================================

    com.socket24.Vaida.prototype.updateSnapshot = function (snapshot) {
        this.snapshotMan.updateSnapshot(snapshot);
    }

//==============================================================================
// CONNECTION EVENT LISTENERS
//==============================================================================

    /**
     * @private
     * Responds to a connection failure.
     */
    com.socket24.Vaida.prototype.connectFailureListener = function (e) {
        // Tell listeners that the connection is now closed.
        this.fireClose();
    };

    /**
     * @private
     * Triggers a CLOSE event when the connection is lost.
     */
    com.socket24.Vaida.prototype.disconnectListener = function (e) {
        this.accountMan.cleanup();
        this.roomMan.cleanup();
        this.clientMan.cleanup();
        this.server.cleanup();
        this.fireClose();
    };

    /**
     * @private
     * Triggers a READY event when the connection is ready.
     */
    com.socket24.Vaida.prototype.readyListener = function (e) {
        this.fireReady();
    };

    com.socket24.Vaida.prototype.selectConnectionListener = function (e) {
        this.messageMan.addMessageListener(com.socket24eventName.SERVER_HELLO, this.u66, this);
        this.messageMan.addMessageListener(com.socket24eventName.CONNECTION_REFUSED, this.u164, this);
    }

//==============================================================================
// CLIENT ID
//==============================================================================
    com.socket24.Vaida.prototype.getClientID = function () {
        return this.self() ? this.self().getClientID() : "";
    };

//==============================================================================
// EVENT DISPATCHING
//==============================================================================

    /**
     * @private
     * Notifies listeners that this Vaida object's connection to the server
     * was lost or could not be established.
     */
    com.socket24.Vaida.prototype.fireClose = function () {
        this.dispatchEvent(new com.socket24.VaidaEvent(com.socket24.VaidaEvent.CLOSE));
    };

    /**
     * @private
     * Notifies listeners that the Vaida is fully initialized and
     * ready to transact with the server.
     */
    com.socket24.Vaida.prototype.fireReady = function () {
        this.dispatchEvent(new com.socket24.VaidaEvent(com.socket24.VaidaEvent.READY));
    };

    /**
     * @private
     * Notifies listeners that the Vaida is fully initialized and
     * ready to transact with the server.
     */
    com.socket24.Vaida.prototype.fireProtocolIncompatible = function (serverUPCVersion) {
        this.dispatchEvent(new com.socket24.VaidaEvent(com.socket24.VaidaEvent.PROTOCOL_INCOMPATIBLE,
            serverUPCVersion));
    };

    /**
     * @private
     * Notifies listeners that the server refused the connection.
     */
    com.socket24.Vaida.prototype.dispatchConnectRefused = function (refusal) {
        this.dispatchEvent(new com.socket24.VaidaEvent(com.socket24.VaidaEvent.CONNECT_REFUSED,
            null, refusal));
    };

//==============================================================================
// UPC Listeners
//==============================================================================

    /**
     * @private
     * SERVER_HELLO
     */
    com.socket24.Vaida.prototype.u66 = function (serverVersion,
                                                    sessionID,
                                                    serverUPCVersionString,
                                                    protocolCompatible,
                                                    affinityAddress,
                                                    affinityDuration) {
        var serverUPCVersion = new com.socket24.VersionNumber();
        serverUPCVersion.fromVersionString(serverUPCVersionString);
        if (protocolCompatible == "false") {
            this.fireProtocolIncompatible(serverUPCVersion);
        }
    };

    /**
     * @private
     * CONNECTION_REFUSED
     */
    com.socket24.Vaida.prototype.u164 = function (reason, description) {
        this.connectionMonitor.setAutoReconnectFrequency(-1);
        this.dispatchConnectRefused(new com.socket24.ConnectionRefusal(reason, description));
    };

//==============================================================================
// SESSION ID
//==============================================================================

    com.socket24.Vaida.prototype.getSessionID = function () {
        return this.sessionID == null ? "" : this.sessionID;
    };

    /**
     * @private
     */
    com.socket24.Vaida.prototype.setSessionID = function (id) {
        this.sessionID = id;
    };

//==============================================================================
// CONSOLE LOGGING
//==============================================================================
    com.socket24.Vaida.prototype.enableConsole = function () {
        if (this.consoleLogger == null) {
            this.consoleLogger = new com.socket24.logger.ConsoleLogger(this.log);
        }
    };

    com.socket24.Vaida.prototype.disableConsole = function () {
        if (this.consoleLogger != null) {
            this.consoleLogger.dispose();
            this.consoleLogger = null;
        }
    };

//==============================================================================
// CLEANUP
//==============================================================================

    /**
     * Permanently disables this object and releases all of its
     * resources. Once dispose() is called, the object can never
     * be used again. Use dispose() only when purging an object
     * from memory, as is required when unloading an iframe.
     *
     * To simply disconnect an Vaida object, use disconnect().
     */
    com.socket24.Vaida.prototype.dispose = function () {
        this.log.info("[vaida] Beginning disposal of all resources...");
        this.connectionMan.dispose();
        this.roomMan.dispose();
        this.connectionMonitor.dispose();
        this.clientMan.dispose();
        this.messageMan.dispose();
        if (this.statistics != null) {
            this.statistics.stop();
        }
        this.log.info("[vaida] Disposal complete.");
    }
//==============================================================================
// CONNECTION STATE CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.ConnectionState = new Object();
    /** @constant */
    com.socket24.ConnectionState.UNKNOWN                    = -1;
    /** @constant */
    com.socket24.ConnectionState.NOT_CONNECTED              = 0;
    /** @constant */
    com.socket24.ConnectionState.READY                      = 1;
    /** @constant */
    com.socket24.ConnectionState.CONNECTION_IN_PROGRESS     = 2;
    /** @constant */
    com.socket24.ConnectionState.DISCONNECTION_IN_PROGRESS  = 3;
    /** @constant */
    com.socket24.ConnectionState.LOGGED_IN                  = 4;
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     @extends com.socket24.events.Event
     */
    com.socket24.ConnectionEvent = function (type, upc, data, connection, status) {
        com.socket24.events.Event.call(this, type);

        this.upc = upc;
        this.data = data;
        this.connection = connection
        this.status = status;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.ConnectionEvent, com.socket24.events.Event);

//==============================================================================
// STATIC VARIABLES
//==============================================================================

    /** @constant */
    com.socket24.ConnectionEvent.BEGIN_CONNECT = "BEGIN_CONNECT";
    /** @constant */
    com.socket24.ConnectionEvent.BEGIN_HANDSHAKE = "BEGIN_HANDSHAKE";
    /** @constant */
    com.socket24.ConnectionEvent.READY = "READY";
    /** @constant */
    com.socket24.ConnectionEvent.CONNECT_FAILURE = "CONNECT_FAILURE";
    /** @constant */
    com.socket24.ConnectionEvent.CLIENT_KILL_CONNECT = "CLIENT_KILL_CONNECT";
    /** @constant */
    com.socket24.ConnectionEvent.SERVER_KILL_CONNECT = "SERVER_KILL_CONNECT";
    /** @constant */
    com.socket24.ConnectionEvent.DISCONNECT = "DISCONNECT";
    /** @constant */
    com.socket24.ConnectionEvent.RECEIVE_UPC = "RECEIVE_UPC";
    /** @constant */
    com.socket24.ConnectionEvent.SEND_DATA = "SEND_DATA";
    /** @constant */
    com.socket24.ConnectionEvent.RECEIVE_DATA = "RECEIVE_DATA";
    /** @constant */
    com.socket24.ConnectionEvent.SESSION_TERMINATED = "SESSION_TERMINATED";
    /** @constant */
    com.socket24.ConnectionEvent.SESSION_NOT_FOUND = "SESSION_NOT_FOUND";

//==============================================================================
// INSTANCE METHODS
//==============================================================================

    com.socket24.ConnectionEvent.prototype.getUPC = function () {
        return this.upc;
    }

    com.socket24.ConnectionEvent.prototype.getData = function () {
        return this.data;
    }

    com.socket24.ConnectionEvent.prototype.getStatus = function () {
        return this.status;
    }

    com.socket24.ConnectionEvent.prototype.toString = function () {
        return "[object ConnectionEvent]";
    }

//==============================================================================
// HTTP REQUEST MODE CONSTANTS
//==============================================================================
    /** @class */
    com.socket24.ConnectionType = new Object();
    /** @constant */
    com.socket24.ConnectionType.HTTP =  "HTTP";
    /** @constant */
    com.socket24.ConnectionType.SECURE_HTTP =  "SECURE_HTTP";
    /** @constant */
    com.socket24.ConnectionType.WEBSOCKET =  "WEBSOCKET";
    /** @constant */
    com.socket24.ConnectionType.SECURE_WEBSOCKET =  "SECURE_WEBSOCKET";
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     * Connection is the abstract superclass of HTTPConnection and WebSocketConnection;
     * it is used internally by Vaida, and is not intended for direct use by Vaida
     * developers. For information on communication with Union Server, see
     * Vaida's connect() method, the WebSocketConnection class and the
     * HTTPDirectConnection and HTTPIFrameConnection classes.
     *
     * The Connection class dispatches the following events:

     <ul class="summary">
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.BEGIN_CONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.BEGIN_HANDSHAKE}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.READY}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.CONNECT_FAILURE}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.CLIENT_KILL_CONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.SERVER_KILL_CONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.DISCONNECT}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.RECEIVE_UPC}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.SEND_DATA}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.RECEIVE_DATA}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.SESSION_TERMINATED}</li>
     <li class="fixedFont">{@link com.socket24.ConnectionEvent.SESSION_NOT_FOUND}</li>
     </ul>

     To register for events, use {@link com.socket24.events.EventDispatcher#addEventListener}.

     @extends com.socket24.events.EventDispatcher

     *
     * @see com.socket24.Vaida#connect
     * @see com.socket24.Vaida#secureConnect
     * @see com.socket24.HTTPDirectConnection
     * @see com.socket24.HTTPIFrameConnection
     * @see com.socket24.WebSocketConnection
     * @see com.socket24.SecureHTTPDirectConnection
     * @see com.socket24.SecureHTTPIFrameConnection
     * @see com.socket24.SecureWebSocketConnection
     */
    com.socket24.Connection = function (host, port, type) {
        // Call superconstructor
        com.socket24.events.EventDispatcher.call(this);

        // Variables
        this.mostRecentConnectAchievedReady = false;
        this.mostRecentConnectTimedOut = false;
        this.readyCount = 0;
        this.connectAttemptCount = 0;
        this.connectAbortCount = 0;
        this.readyTimeoutID = 0;
        this.readyTimeout = 0;
        this.vaida = null;
        this.disposed = false;
        this.requestedHost = null;

        // Initialization
        this.setServer(host, port);
        this.connectionType = type;
        this.connectionState = com.socket24.ConnectionState.NOT_CONNECTED;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.Connection, com.socket24.events.EventDispatcher);

//==============================================================================
// DEPENDENCIES
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.setVaida = function (vaida) {
        if (this.vaida != null) {
            this.vaida.getMessageManager().removeMessageListener("u63", this.u63);
            this.vaida.getMessageManager().removeMessageListener("u66", this.u66);
            this.vaida.getMessageManager().removeMessageListener("u84", this.u84);
            this.vaida.getMessageManager().removeMessageListener("u85", this.u85);
        }
        this.vaida = vaida;
    }

//==============================================================================
// CONNECT/DISCONNECT
//==============================================================================
    com.socket24.Connection.prototype.connect = function () {
        this.disconnect();
        this.applyAffinity();
        this.vaida.getLog().info(this.toString() + " Attempting connection...");
        this.connectAttemptCount++;
        this.mostRecentConnectAchievedReady = false;
        this.mostRecentConnectTimedOut = false;
        this.connectionState = com.socket24.ConnectionState.CONNECTION_IN_PROGRESS;
        // Start the ready timer. Ready state must be achieved before the timer
        // completes or the connection will auto-disconnect.
        this.startReadyTimer();
        this.dispatchBeginConnect();
    }

    com.socket24.Connection.prototype.disconnect = function () {
        var state = this.connectionState;

        if (state != com.socket24.ConnectionState.NOT_CONNECTED) {
            this.deactivateConnection();

            if (state == com.socket24.ConnectionState.CONNECTION_IN_PROGRESS) {
                this.connectAbortCount++;
                this.dispatchConnectFailure("Client closed connection before READY state was achieved.");
            } else {
                this.dispatchClientKillConnect();
            }
        }
    }

    /** @private */
    com.socket24.Connection.prototype.deactivateConnection = function () {
        this.connectionState = com.socket24.ConnectionState.NOT_CONNECTED;
        this.stopReadyTimer();
        this.vaida.setSessionID("");
    }

//==============================================================================
// CONNECTION CONFIGURATION
//==============================================================================
    com.socket24.Connection.prototype.setServer = function (host,
                                                            port) {
        this.requestedHost = host;

        // Check for valid ports
        if (port < 1 || port > 65536) {
            throw new Error("Illegal port specified [" + port + "]. Must be greater than 0 and less than 65537.");
        }
        this.port  = port;
    }

    com.socket24.Connection.prototype.getRequestedHost = function () {
        return this.requestedHost;
    };

    com.socket24.Connection.prototype.getHost = function () {
        if (this.host == null) {
            return this.getRequestedHost();
        } else {
            return this.host;
        }
    };

    com.socket24.Connection.prototype.getPort = function () {
        return this.port;
    };

    com.socket24.Connection.prototype.getType = function () {
        return this.connectionType;
    };

//==============================================================================
// READY HANDSHAKE
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.beginReadyHandshake = function () {

        this.dispatchBeginHandshake();

        if (!this.vaida.getMessageManager().hasMessageListener("u63", this.u63)) {
            this.vaida.getMessageManager().addMessageListener("u63", this.u63, this);
            this.vaida.getMessageManager().addMessageListener("u66", this.u66, this);
            this.vaida.getMessageManager().addMessageListener("u84", this.u84, this);
            this.vaida.getMessageManager().addMessageListener("u85", this.u85, this);
        }

        this.sendHello();

    }

    /** @private */
    com.socket24.Connection.prototype.sendHello = function() {
        var helloString = this.buildHelloMessage();
        this.vaida.getLog().debug(this.toString() + " Sending CLIENT_HELLO: " + helloString);
        this.transmitHelloMessage(helloString);
    }

    /** @private */
    com.socket24.Connection.prototype.buildHelloMessage = function () {

        var helloObject = {
            U: {
                M: com.socket24eventName.CLIENT_HELLO,
                L: {
                    A: [
                        this.vaida.getSystem().getClientType(),
                        (typeof navigator != "undefined" ? navigator.userAgent + ";" : "")
                        + this.vaida.getSystem().getClientVersion().toStringVerbose(),
                        this.vaida.getSystem().getUPCVersion().toString()
                    ]
                }
            }
        }

        return helloObject;

    }

    /** @private */
    com.socket24.Connection.prototype.transmitHelloMessage = function (helloString) {
        this.send(helloString);
    }

//==============================================================================
// READY TIMER
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.readyTimerListener = function () {
        this.stopReadyTimer();
        if (this.connectionState == com.socket24.ConnectionState.CONNECTION_IN_PROGRESS) {
            this.vaida.getLog().warn("[CONNECTION] " + this.toString() + " Failed to achieve" +
                " ready state after " + this.readyTimeout + "ms. Aborting connection...");
            this.mostRecentConnectTimedOut = true;
            this.disconnect();
        }
    }

    /** @private */
    com.socket24.Connection.prototype.stopReadyTimer = function () {
        if (this.readyTimeoutID != -1) {
            clearTimeout(this.readyTimeoutID);
        }
    }

    /** @private */
    com.socket24.Connection.prototype.startReadyTimer = function () {
        var currentObj = this;
        var callback   = this.readyTimerListener;
        this.stopReadyTimer();
        this.readyTimeout = this.vaida.getConnectionManager().getReadyTimeout();
        var self = this;
        this.readyTimeoutID = setTimeout (function () {
            callback.call(currentObj);
        }, self.readyTimeout);
    }

//==============================================================================
// READY STATE ACCESS
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.getReadyCount = function () {
        return this.readyCount;
    }

    com.socket24.Connection.prototype.isReady = function () {
        return this.connectionState == com.socket24.ConnectionState.READY;
    }

    /** @private */
    com.socket24.Connection.prototype.isValid = function () {
        if (this.mostRecentConnectAchievedReady) {
            this.vaida.getLog().debug(this.toString() + " Connection is"
                + " valid because its last connection attempt succeeded.");
            return true;
        }

        if (this.connectAttemptCount == 0) {
            this.vaida.getLog().debug(this.toString() + " Connection is"
                + " valid because it has either never attempted to connect, or has not"
                + " attempted to connect since its last successful connection.");
            return true;
        }

        if ((this.connectAttemptCount > 0) &&
            (this.connectAttemptCount == this.connectAbortCount)
            && !this.mostRecentConnectTimedOut) {
            this.vaida.getLog().debug(this.toString() + " Connection is"
                + " valid because either all connection attempts ever or all"
                + " connection attempts since its last successful connection were"
                + " aborted before the ready timeout was reached.");
            return true;
        }

        this.vaida.getLog().debug(this.toString() + " Connection is not"
            + " valid; its most recent connection failed to achieve a ready state.");
        return false;
    }


//==============================================================================
// UPC LISTENERS
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.u63 = function () {
        this.stopReadyTimer();
        this.connectionState = com.socket24.ConnectionState.READY;
        this.mostRecentConnectAchievedReady = true;
        this.readyCount++;
        this.connectAttemptCount = 0;
        this.connectAbortCount   = 0;
        this.dispatchReady();
    }

    /** @private */
    com.socket24.Connection.prototype.u66 = function (serverVersion,
                                                      sessionID,
                                                      upcVersion,
                                                      protocolCompatible,
                                                      affinityAddress,
                                                      affinityDuration) {
        this.vaida.setSessionID(sessionID);
    };

    /** @private */
    com.socket24.Connection.prototype.u84 = function () {
        this.dispatchSessionTerminated();
    }

    /** @private */
    com.socket24.Connection.prototype.u85 = function () {
        this.dispatchSessionNotFound();
    }

//==============================================================================
// SERVER AFFINITY
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.applyAffinity = function () {
        var affinityAddress = this.vaida.getConnectionManager().getAffinity(this.requestedHost);
        if (affinityAddress == this.requestedHost) {
            this.vaida.getLog().info(this.toString() + " No affinity address found for requested host ["
                + this.requestedHost + "]. Using requested host for next connection attempt.");
        } else {
            this.vaida.getLog().info(this.toString() + " Applying affinity address [" + affinityAddress + "] for supplied host [" + this.requestedHost + "].");
        }
        this.host = affinityAddress;
    }

//==============================================================================
// TOSTRING
//==============================================================================
    com.socket24.Connection.prototype.toString = function () {
        var s = "[" + this.connectionType + ", requested host: " + this.requestedHost
            + ", host: " + (this.host == null ? "" : this.host)
            + ", port: " + this.port + "]";
        return s;
    }

//==============================================================================
// EVENT DISPATCHING
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.dispatchSendData = function (data) {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.SEND_DATA,
            null, data, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchReceiveData = function (data) {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.RECEIVE_DATA,
            null, data, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchConnectFailure = function (status) {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.CONNECT_FAILURE,
            null, null, this, status));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchBeginConnect = function () {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.BEGIN_CONNECT,
            null, null, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchBeginHandshake = function () {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.BEGIN_HANDSHAKE,
            null, null, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchReady = function () {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.READY,
            null, null, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchServerKillConnect  = function () {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.SERVER_KILL_CONNECT,
            null, null, this));
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.DISCONNECT,
            null, null, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchClientKillConnect = function () {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.CLIENT_KILL_CONNECT,
            null, null, this));
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.DISCONNECT,
            null, null, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchSessionTerminated = function () {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.SESSION_TERMINATED,
            null, null, this));
    }

    /** @private */
    com.socket24.Connection.prototype.dispatchSessionNotFound = function () {
        this.dispatchEvent(new com.socket24.ConnectionEvent(com.socket24.ConnectionEvent.SESSION_NOT_FOUND,
            null, null, this));
    }

//==============================================================================
// DISPOSAL
//==============================================================================
    /** @private */
    com.socket24.Connection.prototype.dispose = function () {
        this.disposed = true;
        this.messageManager.removeMessageListener("u63", this.u63);
        this.messageManager.removeMessageListener("u66", this.u66);
        this.messageManager.removeMessageListener("u84", this.u84);
        this.messageManager.removeMessageListener("u85", this.u85);
        this.stopReadyTimer();
        this.readyTimer = null;
        this.vaida = null;
    }
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /**
     * @class
     *
     * <p>
     * The WebSocketConnection class is used by Vaida to communicate with
     * Union Server over a persistent TCP/IP socket. Normally, developers need not
     * use the WebSocketConnection class directly, and should instead make connections
     * via the Vaida class's connect() method. However, the
     * WebSocketConnection class is required for fine-grained connection configuration,
     * such as defining failover socket connections for multiple Union Servers
     * running at different host addresses.
     * </p>
     *
     * <p>
     * By default, Vaida uses WebSocketConnection connections to communicate
     * with Union Server. WebSocketConnection connections offer faster response times than
     * HTTP connections, but occupy an operating-system-level socket continuously
     * for the duration of the connection. If a WebSocketConnection connection
     * cannot be established (due to, say, a restrictive firewall), Vaida
     * automatically attempts to communicate using HTTP requests sent via an
     * HTTPDirectConnection or HTTPIFrameConnection. Developers can override
     * Vaida's default connection failover system by manually configuring
     * connections using the ConnectionManager class and Vaida's
     * disableHTTPFailover() method.</p>
     *
     * <p>
     * For secure WebSocket and HTTP communications, see SecureWebSocketConnection,
     * SecureHTTPDirectConnection, and SecureHTTPIFrameConnection.
     * </p>
     *
     * For a list of events dispatched by WebSocketConnection, see
     * WebSocketConnection's superclass, {@link com.socket24.Connection}.
     *
     * @extends com.socket24.Connection
     *
     * @see com.socket24.Vaida#connect
     * @see com.socket24.Vaida#secureConnect
     * @see com.socket24.SecureWebSocketConnection
     * @see com.socket24.SecureHTTPDirectConnection
     * @see com.socket24.SecureHTTPIFrameConnection
     */
    com.socket24.WebSocketConnection = function (host, port, type) {
        // Invoke superclass constructor
        com.socket24.Connection.call(this, host, port, type || com.socket24.ConnectionType.WEBSOCKET);

        this.socket = null;
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.WebSocketConnection, com.socket24.Connection);

//==============================================================================
// SOCKET OBJECT MANAGEMENT
//==============================================================================
    /** @private */
    com.socket24.WebSocketConnection.prototype.getNewSocket = function () {
        // Deactivate the old socket
        this.deactivateSocket(this.socket);

        // Register for socket events
        var self = this;

        this.socketIO = io(this.buildURL(true, false), { query: "id=4ny1d" });

        this.socketIO.on('connected', (data) => {

            //console.error('connected');

            self.connectListener(data);

        });

        this.socketIO.on('error', (data) => {

            console.error('UNKNOWN ERROR', data);

            self.ioErrorListener(data);

        });

        this.socketIO.on('upc', (data) => {

            //console.error('upc received', data);

            self.dataListener(data);

        });


        this.socketIO.on('disconnect', (data) => {

            console.error('user disconnected');

            self.closeListener(data);

        });

        /*

        this.socket.onopen = function (e) {self.connectListener(e)};
        this.socket.onmessage = function (e) {self.dataListener(e)};
        this.socket.onclose = function (e) {self.closeListener(e)};
        this.socket.onerror = function (e) {self.ioErrorListener(e)};

         */

    };

    /** @private */
    com.socket24.WebSocketConnection.prototype.buildURL = function () {

        return "http://" + this.host + ":" + this.port;

    };

    /** @private */
    com.socket24.WebSocketConnection.prototype.deactivateSocket = function (oldSocket) {
        if (oldSocket == null) {
            return;
        }

        this.socket.onopen = null;
        this.socket.onmessage = null;
        this.socket.onclose = null;
        this.socket.onerror = null;

        try {
            oldSocket.close()
        } catch (e) {
            // Do nothing
        }

        this.socket = null;
    };

//==============================================================================
// CONNECTION AND DISCONNECTION
//==============================================================================

    com.socket24.WebSocketConnection.prototype.connect = function () {
        com.socket24.Connection.prototype.connect.call(this);

        // Attempt to connect
        try {
            this.getNewSocket();
        } catch (e) {
            // Socket could not be opened
            this.deactivateConnection();
            this.dispatchConnectFailure(e.toString());
        }
    };

    /** @private */
    com.socket24.WebSocketConnection.prototype.deactivateConnection = function () {
        this.vaida.getLog().debug("[CONNECTION] " + this.toString() + " Deactivating...");
        this.connectionState = com.socket24.ConnectionState.DISCONNECTION_IN_PROGRESS;
        this.deactivateSocket(this.socket);
        com.socket24.Connection.prototype.deactivateConnection.call(this);
    };

//==============================================================================
// SOCKET CONNECTION LISTENERS
//==============================================================================
    /** @private */
    com.socket24.WebSocketConnection.prototype.connectListener = function (e) {
        if (this.disposed) return;

        this.vaida.getLog().debug(this.toString() + " Socket connected.");

        this.beginReadyHandshake();

    }

    /** @private */
    com.socket24.WebSocketConnection.prototype.closeListener = function (e) {
        if (this.disposed) return;

        var state = this.connectionState;
        this.deactivateConnection();

        if (state == com.socket24.ConnectionState.CONNECTION_IN_PROGRESS) {
            this.dispatchConnectFailure("WebSocket onclose: Server closed connection before READY state was achieved.");
        } else {
            this.dispatchServerKillConnect();
        }
    };

    /** @private */
    com.socket24.WebSocketConnection.prototype.ioErrorListener = function (e) {
        if (this.disposed) return;

        var state = this.connectionState;
        this.deactivateConnection();

        // Note: when Union closes the connection, Firefox 7 dispatches onerror, not
        // onclose, so treat onerror like an onclose event
        if (state == com.socket24.ConnectionState.CONNECTION_IN_PROGRESS) {
            this.dispatchConnectFailure("WebSocket onerror: Server closed connection before READY state was achieved.");
        } else {
            this.dispatchServerKillConnect();
        }
    };

//==============================================================================
// DATA RECEIVING AND SENDING
//==============================================================================
    /** @private */
    com.socket24.WebSocketConnection.prototype.dataListener = function (dataEvent) {
        if (this.disposed) return;

        //console.error("RECEIVED::::", dataEvent);

        var data = dataEvent

        this.dispatchReceiveData(data);

        if (data) { //TODO check if valid message
            this.dispatchEvent(new com.socket24.ConnectionEvent(
                com.socket24.ConnectionEvent.RECEIVE_UPC,
                data));
        } else {
            // The message isn't UPC. Must be an error...
            this.vaida.getLog().error(this.toString() + " Received invalid message"
                + " (not UPC or malformed UPC): " + data);
        }
    };

    /** @private */
    com.socket24.WebSocketConnection.prototype.send = function (data) {
        this.dispatchSendData(data);
        this.socketIO.emit('upc', data);
    };

// =============================================================================
// DISPOSAL
// =============================================================================
    /** @private */
    com.socket24.WebSocketConnection.prototype.dispose = function () {
        com.socket24.Connection.prototype.dispose.call(this);
        this.deactivateSocket(this.socket);
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class
     *
     * <p>
     * The SecureWebSocketConnection class is identical to WebSocketConnection
     * except that it performs communications over WSS (i.e., an encrypted TLS or
     * SSL socket connection) rather than plain WebSocket.</p>
     *
     * For a list of events dispatched by SecureWebSocketConnection, see
     * {@link com.socket24.Connection}.
     *
     * @extends com.socket24.WebSocketConnection
     *
     * @see com.socket24.WebSocketConnection
     */
    com.socket24.SecureWebSocketConnection = function (host, port) {
        // Invoke superclass constructor
        com.socket24.WebSocketConnection.call(this, host, port, com.socket24.ConnectionType.SECURE_WEBSOCKET);
    };

//==============================================================================
// INHERITANCE
//==============================================================================
    com.socket24.utilities.extend(com.socket24.SecureWebSocketConnection, com.socket24.WebSocketConnection);

    /** @private */
    com.socket24.SecureWebSocketConnection.prototype.buildURL = function () {
        return "https://" + this.host + ":" + this.port;
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @private */
    com.socket24.MessageListener = function (listener,
                                             forRoomIDs,
                                             thisArg) {
        this.listener   = listener;
        this.forRoomIDs = forRoomIDs;
        this.thisArg    = thisArg;
    };

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    /** @private */
    com.socket24.MessageListener.prototype.getListenerFunction = function () {
        return this.listener;
    };

    /** @private */
    com.socket24.MessageListener.prototype.getForRoomIDs = function () {
        return this.forRoomIDs;
    };

    /** @private */
    com.socket24.MessageListener.prototype.getThisArg = function () {
        return this.thisArg;
    };

    /** @private */
    com.socket24.MessageListener.prototype.toString = function () {
        return "[object MessageListener]";
    };
//==============================================================================
// CLASS DECLARATION
//==============================================================================
    /** @class */
    com.socket24.MessageManager = function (log, connectionManager) {
        this.log = log;
        this.messageListeners = new Object();
        this.removeListenersOnDisconnect = true;
        this.numMessagesSent = 0;
        this.numMessagesReceived = 0;
        this.currentConnection = null;
        this.connectionManager = connectionManager;
        this.connectionManager.addEventListener(com.socket24.ConnectionManagerEvent.SELECT_CONNECTION,
            this.selectConnectionListener, this);
    };

//==============================================================================
// INSTANCE METHODS
//==============================================================================
    com.socket24.MessageManager.prototype.getNumMessagesReceived = function () {
        return this.numMessagesReceived;
    }

    com.socket24.MessageManager.prototype.getNumMessagesSent = function () {
        return this.numMessagesSent;
    }

    com.socket24.MessageManager.prototype.getTotalMessages = function () {
        return this.numMessagesSent + this.numMessagesReceived;
    }

    /** @private */
    com.socket24.MessageManager.prototype.selectConnectionListener = function (e) {
        if (this.currentConnection != null) {
            this.currentConnection.removeEventListener(com.socket24.ConnectionEvent.RECEIVE_UPC,
                this.upcReceivedListener, this);
            this.currentConnection.removeEventListener(com.socket24.ConnectionEvent.DISCONNECT,
                this.disconnectListener, this);
            this.currentConnection.removeEventListener(com.socket24.ConnectionEvent.CONNECT_FAILURE,
                this.connectFailureListener, this);
        }

        this.currentConnection = e.getConnection();

        this.currentConnection.addEventListener(com.socket24.ConnectionEvent.RECEIVE_UPC,
            this.upcReceivedListener, this);
        this.currentConnection.addEventListener(com.socket24.ConnectionEvent.DISCONNECT,
            this.disconnectListener, this);
        this.currentConnection.addEventListener(com.socket24.ConnectionEvent.CONNECT_FAILURE,
            this.connectFailureListener, this);
    }

    /** @private */
    com.socket24.MessageManager.prototype.disconnectListener = function (e) {
        this.cleanupAfterClosedConnection(e.target);
    }

    /** @private */
    com.socket24.MessageManager.prototype.connectFailureListener = function (e) {
        this.cleanupAfterClosedConnection(e.target);
    }

    /** @private */
    com.socket24.MessageManager.prototype.cleanupAfterClosedConnection = function (connection) {
        var listenerList;
        if (this.removeListenersOnDisconnect) {
            this.log.info("[MESSAGE_MANAGER] Removing registered message listeners.");
            for (var message in this.messageListeners) {
                listenerList = this.messageListeners[message];
                for (var p in listenerList) {
                    this.removeMessageListener(message, listenerList[p].getListenerFunction());
                }
            }
        } else {
            this.log.warn("[MESSAGE_MANAGER] Leaving message listeners registered. \n"
                + "Be sure to remove any unwanted message listeners manually.");
        }

        this.numMessagesReceived = 0;
        this.numMessagesSent = 0;
    }

    com.socket24.MessageManager.prototype.emitSocketMessage = function (message) {
        // Quit if the connection isn't ready...
        if (!this.connectionManager.isReady()) {
            this.log.warn("[MESSAGE_MANAGER] Connection not ready. UPC not sent. Message: "
                + message);
            return;
        }

        // Build the UPC to send.
        var theUPC = { U: { M: message, L: { A: [] } } };

        var a;

        if (arguments.length > 1) {

            for (var i = 1; i < arguments.length; i++) {

                a = arguments[i];

                a = a == undefined ? "" : a.toString();

                theUPC.U.L.A.push(a);

            }

        }

        // Count the message
        this.numMessagesSent++;

        // Send the UPC to the server
        this.log.debug("[MESSAGE_MANAGER] UPC sent: " + JSON.stringify(theUPC));
        this.connectionManager.getActiveConnection().send(theUPC);
    };

    /** @private */
    com.socket24.MessageManager.prototype.emitSocketMessageObject = function (upc) {
        var args = upc.args.slice();
        args.unshift(upc.method);
        this.emitSocketMessage.apply(this, args);
    };

    /** @private */
    com.socket24.MessageManager.prototype.upcReceivedListener = function (e) {

        this.numMessagesReceived++;

        var upc = e.getUPC();

        if("U" in upc){
            upc = upc.U;
        }

        console.log("[MESSAGE_MANAGER] UPC received: ",upc);

        this.log.debug("[MESSAGE_MANAGER] UPC received: " + JSON.stringify(upc));

        var method = upc.M;
        var upcArgs = upc.L.A;

        console.warn("UPC::SEND::", method, upcArgs);

        this.notifyMessageListeners(method, upcArgs);

    };

    com.socket24.MessageManager.prototype.addMessageListener = function (message,
                                                                         listener,
                                                                         thisArg,
                                                                         forRoomIDs) {
        if (forRoomIDs != null) {
            var typeString = Object.prototype.toString.call(forRoomIDs);
            if (typeString != "[object Array]") {
                throw new Error("[MESSAGE_MANAGER] Illegal argument type " + typeString
                    + " supplied for addMessageListener()'s forRoomIDs"
                    + " parameter. Value must be an Array.");
            }
        }

        // Each message gets a list of MessageListener objects.
        // If this message has no such list, make one.
        if (this.messageListeners[message] === undefined) {
            this.messageListeners[message] = new Array();
        }
        var listenerArray = this.messageListeners[message];

        // Quit if the listener is already registered
        if (this.hasMessageListener(message, listener)) {
            return false;
        }

        // Add the listener
        var newListener = new com.socket24.MessageListener(listener,
            forRoomIDs === undefined ? null : forRoomIDs,
            thisArg);
        listenerArray.push(newListener);
        return true;
    };

    com.socket24.MessageManager.prototype.removeMessageListener = function (message,
                                                                            listener) {
        // Quit if the message has no listeners
        var listenerArray = this.messageListeners[message];
        if (listenerArray == null) {
            return false;
        }

        // Remove the listener
        var foundListener;
        for (var i = 0; i < listenerArray.length; i++) {
            if (listenerArray[i].getListenerFunction() == listener) {
                foundListener = true;
                listenerArray.splice(i, 1);
                break;
            }
        }

        // Delete the listeners array if it's now empty
        if (listenerArray.length == 0) {
            delete this.messageListeners[message];
        }

        return foundListener;
    };

    com.socket24.MessageManager.prototype.hasMessageListener = function (message,
                                                                         listener) {
        // Quit if the message has no listeners
        var listenerArray = this.messageListeners[message];
        if (listenerArray == null) {
            return false;
        }

        // Check for the listener
        for (var i = 0; i < listenerArray.length; i++) {
            if (listenerArray[i].getListenerFunction()
                == listener) {
                return true;
            }
        }
        return false;
    };

    com.socket24.MessageManager.prototype.getMessageListeners = function (message) {
        return this.messageListeners[message] != undefined ? this.messageListeners[message] : [];
    };

    /** @private */
    com.socket24.MessageManager.prototype.notifyMessageListeners = function (message, args) {
        // Retrieve the list of listeners for this message.
        var listeners = this.messageListeners[message];
        // If there are no listeners registered, then quit
        if (listeners === undefined) {
            // Log a warning if it's not a UPC
            if (!(message.charAt(0) == "u" && parseInt(message.substring(1)) > 1)) {
                this.log.warn("Message delivery failed. No listeners found. Message: " +
                    message + ". Arguments: " + args.join());
            }
            return;
        } else {
            listeners = listeners.slice(0);
        }
        var numListeners = listeners.length;
        for (var i = 0; i < numListeners; i++) {
            listeners[i].getListenerFunction().apply(listeners[i].getThisArg(), args);
        }
    };

    com.socket24.MessageManager.prototype.dispose = function () {
        this.log.info("[MESSAGE_MANAGER] Disposing resources.");
        this.log = null;
        this.vaida = null;
        this.messageListeners = null;
        this.numMessagesSent = 0;
        this.numMessagesReceived = 0;
        this.currentConnection = null;
    }

    com.socket24.MessageManager.prototype.toString = function () {
        return "[object MessageManager]";
    };

//==============================================================================
// UPC CONSTANTS
//==============================================================================
    /** @class */
    com.socket24eventName = new Object();

// CLIENT TO SERVER
    /** @constant */
    com.socket24eventName.SEND_MESSAGE_TO_ROOMS = "u1";
    /** @constant */
    com.socket24eventName.SEND_MESSAGE_TO_CLIENTS = "u2";
    /** @constant */
    com.socket24eventName.SET_CLIENT_ATTR = "u3";
    /** @constant */
    com.socket24eventName.JOIN_ROOM = "u4";
    /** @constant */
    com.socket24eventName.SET_ROOM_ATTR = "u5";
    /** @constant */
    com.socket24eventName.LEAVE_ROOM = "u10";
    /** @constant */
    com.socket24eventName.CREATE_ACCOUNT = "u11";
    /** @constant */
    com.socket24eventName.REMOVE_ACCOUNT = "u12";
    /** @constant */
    com.socket24eventName.CHANGE_ACCOUNT_PASSWORD = "u13";
    /** @constant */
    com.socket24eventName.LOGIN = "u14";
    /** @constant */
    com.socket24eventName.GET_CLIENTCOUNT_SNAPSHOT = "u18";
    /** @constant */
    com.socket24eventName.SYNC_TIME = "u19";
    /** @constant */
    com.socket24eventName.GET_ROOMLIST_SNAPSHOT = "u21";
    /** @constant */
    com.socket24eventName.CREATE_ROOM = "u24";
    /** @constant */
    com.socket24eventName.REMOVE_ROOM = "u25";
    /** @constant */
    com.socket24eventName.WATCH_FOR_ROOMS = "u26";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_ROOMS = "u27";
    /** @constant */
    com.socket24eventName.GET_ROOM_SNAPSHOT = "u55";
    /** @constant */
    com.socket24eventName.SEND_MESSAGE_TO_SERVER = "u57";
    /** @constant */
    com.socket24eventName.OBSERVE_ROOM = "u58";
    /** @constant */
    com.socket24eventName.STOP_OBSERVING_ROOM = "u61";
    /** @constant */
    com.socket24eventName.SET_ROOM_UPDATE_LEVELS = "u64";
    /** @constant */
    com.socket24eventName.CLIENT_HELLO = "u65";
    /** @constant */
    com.socket24eventName.REMOVE_ROOM_ATTR = "u67";
    /** @constant */
    com.socket24eventName.REMOVE_CLIENT_ATTR = "u69";
    /** @constant */
    com.socket24eventName.SEND_ROOMMODULE_MESSAGE = "u70";
    /** @constant */
    com.socket24eventName.SEND_SERVERMODULE_MESSAGE = "u71";
    /** @constant */
    com.socket24eventName.TERMINATE_SESSION = "u83";
    /** @constant */
    com.socket24eventName.LOGOFF = "u86";
    /** @constant */
    com.socket24eventName.GET_CLIENTLIST_SNAPSHOT = "u91";
    /** @constant */
    com.socket24eventName.WATCH_FOR_CLIENTS = "u92";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_CLIENTS = "u93";
    /** @constant */
    com.socket24eventName.GET_CLIENT_SNAPSHOT = "u94";
    /** @constant */
    com.socket24eventName.OBSERVE_CLIENT = "u95";
    /** @constant */
    com.socket24eventName.STOP_OBSERVING_CLIENT = "u96";
    /** @constant */
    com.socket24eventName.GET_ACCOUNTLIST_SNAPSHOT = "u97";
    /** @constant */
    com.socket24eventName.WATCH_FOR_ACCOUNTS = "u98";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_ACCOUNTS = "u99";
    /** @constant */
    com.socket24eventName.GET_ACCOUNT_SNAPSHOT = "u100";
    /** @constant */
    com.socket24eventName.OBSERVE_ACCOUNT = "u121";
    /** @constant */
    com.socket24eventName.STOP_OBSERVING_ACCOUNT = "u122";
    /** @constant */
    com.socket24eventName.ADD_ROLE = "u133";
    /** @constant */
    com.socket24eventName.REMOVE_ROLE = "u135";
    /** @constant */
    com.socket24eventName.KICK_CLIENT = "u149";
    /** @constant */
    com.socket24eventName.BAN = "u137";
    /** @constant */
    com.socket24eventName.UNBAN = "u139";
    /** @constant */
    com.socket24eventName.GET_BANNED_LIST_SNAPSHOT = "u141";
    /** @constant */
    com.socket24eventName.WATCH_FOR_BANNED_ADDRESSES = "u143";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_BANNED_ADDRESSES = "u145";
    /** @constant */
    com.socket24eventName.GET_NODELIST_SNAPSHOT = "u165";
    /** @constant */
    com.socket24eventName.GET_GATEWAYS_SNAPSHOT = "u167";

// SERVER TO CLIENT
    /** @constant */
    com.socket24eventName.JOINED_ROOM = "u6";
    /** @constant */
    com.socket24eventName.RECEIVE_MESSAGE = "u7";
    /** @constant */
    com.socket24eventName.CLIENT_ATTR_UPDATE = "u8";
    /** @constant */
    com.socket24eventName.ROOM_ATTR_UPDATE = "u9";
    /** @constant */
    com.socket24eventName.CLIENT_METADATA = "u29";
    /** @constant */
    com.socket24eventName.CREATE_ROOM_RESULT = "u32";
    /** @constant */
    com.socket24eventName.REMOVE_ROOM_RESULT = "u33";
    /** @constant */
    com.socket24eventName.CLIENTCOUNT_SNAPSHOT = "u34";
    /** @constant */
    com.socket24eventName.CLIENT_ADDED_TO_ROOM = "u36";
    /** @constant */
    com.socket24eventName.CLIENT_REMOVED_FROM_ROOM = "u37";
    /** @constant */
    com.socket24eventName.ROOMLIST_SNAPSHOT = "u38";
    /** @constant */
    com.socket24eventName.ROOM_ADDED = "u39";
    /** @constant */
    com.socket24eventName.ROOM_REMOVED = "u40";
    /** @constant */
    com.socket24eventName.WATCH_FOR_ROOMS_RESULT = "u42";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_ROOMS_RESULT = "u43";
    /** @constant */
    com.socket24eventName.LEFT_ROOM = "u44";
    /** @constant */
    com.socket24eventName.CHANGE_ACCOUNT_PASSWORD_RESULT = "u46";
    /** @constant */
    com.socket24eventName.CREATE_ACCOUNT_RESULT = "u47";
    /** @constant */
    com.socket24eventName.REMOVE_ACCOUNT_RESULT = "u48";
    /** @constant */
    com.socket24eventName.LOGIN_RESULT = "u49";
    /** @constant */
    com.socket24eventName.SERVER_TIME_UPDATE = "u50";
    /** @constant */
    com.socket24eventName.ROOM_SNAPSHOT = "u54";
    /** @constant */
    com.socket24eventName.OBSERVED_ROOM = "u59";
    /** @constant */
    com.socket24eventName.GET_ROOM_SNAPSHOT_RESULT = "u60";
    /** @constant */
    com.socket24eventName.STOPPED_OBSERVING_ROOM = "u62";
    /** @constant */
    com.socket24eventName.CLIENT_READY = "u63";
    /** @constant */
    com.socket24eventName.SERVER_HELLO = "u66";
    /** @constant */
    com.socket24eventName.JOIN_ROOM_RESULT = "u72";
    /** @constant */
    com.socket24eventName.SET_CLIENT_ATTR_RESULT = "u73";
    /** @constant */
    com.socket24eventName.SET_ROOM_ATTR_RESULT = "u74";
    /** @constant */
    com.socket24eventName.GET_CLIENTCOUNT_SNAPSHOT_RESULT = "u75";
    /** @constant */
    com.socket24eventName.LEAVE_ROOM_RESULT = "u76";
    /** @constant */
    com.socket24eventName.OBSERVE_ROOM_RESULT = "u77";
    /** @constant */
    com.socket24eventName.STOP_OBSERVING_ROOM_RESULT = "u78";
    /** @constant */
    com.socket24eventName.ROOM_ATTR_REMOVED = "u79";
    /** @constant */
    com.socket24eventName.REMOVE_ROOM_ATTR_RESULT = "u80";
    /** @constant */
    com.socket24eventName.CLIENT_ATTR_REMOVED = "u81";
    /** @constant */
    com.socket24eventName.REMOVE_CLIENT_ATTR_RESULT = "u82";
    /** @constant */
    com.socket24eventName.SESSION_TERMINATED = "u84";
    /** @constant */
    com.socket24eventName.SESSION_NOT_FOUND = "u85";
    /** @constant */
    com.socket24eventName.LOGOFF_RESULT = "u87";
    /** @constant */
    com.socket24eventName.LOGGED_IN = "u88";
    /** @constant */
    com.socket24eventName.LOGGED_OFF = "u89";
    /** @constant */
    com.socket24eventName.ACCOUNT_PASSWORD_CHANGED = "u90";
    /** @constant */
    com.socket24eventName.CLIENTLIST_SNAPSHOT = "u101";
    /** @constant */
    com.socket24eventName.CLIENT_ADDED_TO_SERVER = "u102";
    /** @constant */
    com.socket24eventName.CLIENT_REMOVED_FROM_SERVER = "u103";
    /** @constant */
    com.socket24eventName.CLIENT_SNAPSHOT = "u104";
    /** @constant */
    com.socket24eventName.OBSERVE_CLIENT_RESULT = "u105";
    /** @constant */
    com.socket24eventName.STOP_OBSERVING_CLIENT_RESULT = "u106";
    /** @constant */
    com.socket24eventName.WATCH_FOR_CLIENTS_RESULT = "u107";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_CLIENTS_RESULT = "u108";
    /** @constant */
    com.socket24eventName.WATCH_FOR_ACCOUNTS_RESULT = "u109";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_ACCOUNTS_RESULT = "u110";
    /** @constant */
    com.socket24eventName.ACCOUNT_ADDED = "u111";
    /** @constant */
    com.socket24eventName.ACCOUNT_REMOVED = "u112";
    /** @constant */
    com.socket24eventName.JOINED_ROOM_ADDED_TO_CLIENT = "u113";
    /** @constant */
    com.socket24eventName.JOINED_ROOM_REMOVED_FROM_CLIENT = "u114";
    /** @constant */
    com.socket24eventName.GET_CLIENT_SNAPSHOT_RESULT = "u115";
    /** @constant */
    com.socket24eventName.GET_ACCOUNT_SNAPSHOT_RESULT = "u116";
    /** @constant */
    com.socket24eventName.OBSERVED_ROOM_ADDED_TO_CLIENT = "u117";
    /** @constant */
    com.socket24eventName.OBSERVED_ROOM_REMOVED_FROM_CLIENT = "u118";
    /** @constant */
    com.socket24eventName.CLIENT_OBSERVED = "u119";
    /** @constant */
    com.socket24eventName.STOPPED_OBSERVING_CLIENT = "u120";
    /** @constant */
    com.socket24eventName.OBSERVE_ACCOUNT_RESULT = "u123";
    /** @constant */
    com.socket24eventName.ACCOUNT_OBSERVED = "u124";
    /** @constant */
    com.socket24eventName.STOP_OBSERVING_ACCOUNT_RESULT = "u125";
    /** @constant */
    com.socket24eventName.STOPPED_OBSERVING_ACCOUNT = "u126";
    /** @constant */
    com.socket24eventName.ACCOUNT_LIST_UPDATE = "u127";
    /** @constant */
    com.socket24eventName.UPDATE_LEVELS_UPDATE = "u128";
    /** @constant */
    com.socket24eventName.CLIENT_OBSERVED_ROOM = "u129";
    /** @constant */
    com.socket24eventName.CLIENT_STOPPED_OBSERVING_ROOM = "u130";
    /** @constant */
    com.socket24eventName.ROOM_OCCUPANTCOUNT_UPDATE = "u131";
    /** @constant */
    com.socket24eventName.ROOM_OBSERVERCOUNT_UPDATE = "u132";
    /** @constant */
    com.socket24eventName.ADD_ROLE_RESULT = "u134";
    /** @constant */
    com.socket24eventName.REMOVE_ROLE_RESULT = "u136";
    /** @constant */
    com.socket24eventName.BAN_RESULT = "u138";
    /** @constant */
    com.socket24eventName.UNBAN_RESULT = "u140";
    /** @constant */
    com.socket24eventName.BANNED_LIST_SNAPSHOT = "u142";
    /** @constant */
    com.socket24eventName.WATCH_FOR_BANNED_ADDRESSES_RESULT = "u144";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT = "u146";
    /** @constant */
    com.socket24eventName.BANNED_ADDRESS_ADDED = "u147";
    /** @constant */
    com.socket24eventName.BANNED_ADDRESS_REMOVED = "u148";
    /** @constant */
    com.socket24eventName.KICK_CLIENT_RESULT = "u150";
    /** @constant */
    com.socket24eventName.SERVERMODULELIST_SNAPSHOT = "u152";
    /** @constant */
    com.socket24eventName.GET_UPC_STATS_SNAPSHOT_RESULT = "u155";
    /** @constant */
    com.socket24eventName.UPC_STATS_SNAPSHOT = "u156";
    /** @constant */
    com.socket24eventName.RESET_UPC_STATS_RESULT = "u158";
    /** @constant */
    com.socket24eventName.WATCH_FOR_PROCESSED_UPCS_RESULT = "u160";
    /** @constant */
    com.socket24eventName.PROCESSED_UPC_ADDED = "u161";
    /** @constant */
    com.socket24eventName.STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT = "u163";
    /** @constant */
    com.socket24eventName.CONNECTION_REFUSED = "u164";
    /** @constant */
    com.socket24eventName.NODELIST_SNAPSHOT = "u166";
    /** @constant */
    com.socket24eventName.GATEWAYS_SNAPSHOT = "u168";
//==============================================================================
// LOADED FLAG
//==============================================================================
    /**
     * @constant
     *
     * Indicates that Vaida has finished loading.
     */
    com.socket24.LOADED = true;

})((typeof window == "undefined") ? this : window);
