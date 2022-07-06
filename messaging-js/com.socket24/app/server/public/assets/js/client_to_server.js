
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


client_to_server_obj = {
    "u1": "SEND_MESSAGE_TO_ROOMS",
    "u2": "SEND_MESSAGE_TO_CLIENTS",
    "u3": "SET_CLIENT_ATTR",
    "u4": "JOIN_ROOM",
    "u5": "SET_ROOM_ATTR",
    "u10": "LEAVE_ROOM",
    "u11": "CREATE_ACCOUNT",
    "u12": "REMOVE_ACCOUNT",
    "u13": "CHANGE_ACCOUNT_PASSWORD",
    "u14": "LOGIN",
    "u18": "GET_CLIENTCOUNT_SNAPSHOT",
    "u19": "SYNC_TIME",
    "u21": "GET_ROOMLIST_SNAPSHOT",
    "u24": "CREATE_ROOM",
    "u25": "REMOVE_ROOM",
    "u26": "WATCH_FOR_ROOMS",
    "u27": "STOP_WATCHING_FOR_ROOMS",
    "u55": "GET_ROOM_SNAPSHOT",
    "u57": "SEND_MESSAGE_TO_SERVER",
    "u58": "OBSERVE_ROOM",
    "u61": "STOP_OBSERVING_ROOM",
    "u64": "SET_ROOM_UPDATE_LEVELS",
    "u65": "CLIENT_HELLO",
    "u67": "REMOVE_ROOM_ATTR",
    "u69": "REMOVE_CLIENT_ATTR",
    "u70": "SEND_ROOMMODULE_MESSAGE",
    "u71": "SEND_SERVERMODULE_MESSAGE",
    "u83": "TERMINATE_SESSION",
    "u86": "LOGOFF",
    "u91": "GET_CLIENTLIST_SNAPSHOT",
    "u92": "WATCH_FOR_CLIENTS",
    "u93": "STOP_WATCHING_FOR_CLIENTS",
    "u94": "GET_CLIENT_SNAPSHOT",
    "u95": "OBSERVE_CLIENT",
    "u96": "STOP_OBSERVING_CLIENT",
    "u97": "GET_ACCOUNTLIST_SNAPSHOT",
    "u98": "WATCH_FOR_ACCOUNTS",
    "u99": "STOP_WATCHING_FOR_ACCOUNTS",
    "u100": "GET_ACCOUNT_SNAPSHOT",
    "u121": "OBSERVE_ACCOUNT",
    "u122": "STOP_OBSERVING_ACCOUNT",
    "u133": "ADD_ROLE",
    "u135": "REMOVE_ROLE",
    "u149": "KICK_CLIENT",
    "u137": "BAN",
    "u139": "UNBAN",
    "u141": "GET_BANNED_LIST_SNAPSHOT",
    "u143": "WATCH_FOR_BANNED_ADDRESSES",
    "u145": "STOP_WATCHING_FOR_BANNED_ADDRESSES",
    "u165": "GET_NODELIST_SNAPSHOT",
    "u167": "GET_GATEWAYS_SNAPSHOT",
};