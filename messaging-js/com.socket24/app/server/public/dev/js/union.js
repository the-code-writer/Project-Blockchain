//
// Decompiled by Procyon v0.5.36
//

package net.user1.union.core.upc;

import java.util.HashMap;
import java.util.Map;

public enum UPCMethod
{
    C2S_SEND_MESSAGE_TO_ROOMS("C2S_SEND_MESSAGE_TO_ROOMS", 0, "u1", "Send Message to Rooms"),
        C2S_SEND_MESSAGE_TO_CLIENTS("C2S_SEND_MESSAGE_TO_CLIENTS", 1, "u2", "Send Message to Clients"),
        C2S_SET_CLIENT_ATTR("C2S_SET_CLIENT_ATTR", 2, "u3", "Set Client Attribute"),
        C2S_JOIN_ROOM("C2S_JOIN_ROOM", 3, "u4", "Join Room"),
        C2S_SET_ROOM_ATTR("C2S_SET_ROOM_ATTR", 4, "u5", "Set Room Attribute"),
        C2S_LEAVE_ROOM("C2S_LEAVE_ROOM", 5, "u10", "Leave Room"),
        C2S_CREATE_ACCOUNT("C2S_CREATE_ACCOUNT", 6, "u11", "Create Account"),
        C2S_REMOVE_ACCOUNT("C2S_REMOVE_ACCOUNT", 7, "u12", "Remove Account"),
        C2S_CHANGE_ACCOUNT_PASSWORD("C2S_CHANGE_ACCOUNT_PASSWORD", 8, "u13", "Change  Account Password"),
        C2S_LOGIN("C2S_LOGIN", 9, "u14", "Login"),
        C2S_GET_CLIENTCOUNT_SNAPSHOT("C2S_GET_CLIENTCOUNT_SNAPSHOT", 10, "u18", "Get Client Count Snapshot"),
        C2S_SYNC_TIME("C2S_SYNC_TIME", 11, "u19", "Sychronize Time"),
        C2S_PONG("C2S_PONG", 12, "u20", "Pong"),
        C2S_GET_ROOMLIST_SNAPSHOT("C2S_GET_ROOMLIST_SNAPSHOT", 13, "u21", "Get Room List Snapshot"),
        C2S_CREATE_ROOM("C2S_CREATE_ROOM", 14, "u24", "Create Room"),
        C2S_REMOVE_ROOM("C2S_REMOVE_ROOM", 15, "u25", "Remove Room"),
        C2S_WATCH_FOR_ROOMS("C2S_WATCH_FOR_ROOMS", 16, "u26", "Watch For Rooms"),
        C2S_STOP_WATCHING_FOR_ROOMS("C2S_STOP_WATCHING_FOR_ROOMS", 17, "u27", "Stop Watching For Rooms"),
        C2S_GET_ROOM_SNAPSHOT("C2S_GET_ROOM_SNAPSHOT", 18, "u55", "Get Room Snapshot"),
        C2S_SET_ROOM_SYNC_TYPE("C2S_SET_ROOM_SYNC_TYPE", 19, "u56", "Set Room Sync Type"),
        C2S_SEND_MESSAGE_TO_SERVER("C2S_SEND_MESSAGE_TO_SERVER", 20, "u57", "Send Message to Server"),
        C2S_OBSERVE_ROOM("C2S_OBSERVE_ROOM", 21, "u58", "Observe Room"),
        C2S_STOP_OBSERVING_ROOM("C2S_STOP_OBSERVING_ROOM", 22, "u61", "Stop Observing Room"),
        C2S_SET_ROOM_UPDATE_LEVELS("C2S_SET_ROOM_UPDATE_LEVELS", 23, "u64", "Set Room Update Levels"),
        C2S_CLIENT_HELLO("C2S_CLIENT_HELLO", 24, "u65", "Client Hello"),
        C2S_REMOVE_ROOM_ATTR("C2S_REMOVE_ROOM_ATTR", 25, "u67", "Remove Room Attribute"),
        C2S_REMOVE_CLIENT_ATTR("C2S_REMOVE_CLIENT_ATTR", 26, "u69", "Remove Client Attribute"),
        C2S_SEND_ROOMMODULE_MESSAGE("C2S_SEND_ROOMMODULE_MESSAGE", 27, "u70", "Send RoomModule Message"),
        C2S_SEND_SERVERMODULE_MESSAGE("C2S_SEND_SERVERMODULE_MESSAGE", 28, "u71", "Send ServerModule Message"),
        C2S_LOGOFF("C2S_LOGOFF", 29, "u86", "Logoff"),
        C2S_GET_CLIENTLIST_SNAPSHOT("C2S_GET_CLIENTLIST_SNAPSHOT", 30, "u91", "Get Client List Snapshot"),
        C2S_WATCH_FOR_CLIENTS("C2S_WATCH_FOR_CLIENTS", 31, "u92", "Watch For Clients"),
        C2S_STOP_WATCHING_FOR_CLIENTS("C2S_STOP_WATCHING_FOR_CLIENTS", 32, "u93", "Stop Watching For Clients"),
        C2S_GET_CLIENT_SNAPSHOT("C2S_GET_CLIENT_SNAPSHOT", 33, "u94", "Sync Client"),
        C2S_OBSERVE_CLIENT("C2S_OBSERVE_CLIENT", 34, "u95", "Observe Client"),
        C2S_STOP_OBSERVING_CLIENT("C2S_STOP_OBSERVING_CLIENT", 35, "u96", "Stop Observing Client"),
        C2S_GET_ACCOUNTLIST_SNAPSHOT("C2S_GET_ACCOUNTLIST_SNAPSHOT", 36, "u97", "Get Account List Snapshot"),
        C2S_WATCH_FOR_ACCOUNTS("C2S_WATCH_FOR_ACCOUNTS", 37, "u98", "Watch For Accounts"),
        C2S_STOP_WATCHING_FOR_ACCOUNTS("C2S_STOP_WATCHING_FOR_ACCOUNTS", 38, "u99", "Stop Watching For Accounts"),
        C2S_GET_ACCOUNT_SNAPSHOT("C2S_GET_ACCOUNT_SNAPSHOT", 39, "u100", "Get Account Snapshot"),
        C2S_OBSERVE_ACCOUNT("C2S_OBSERVE_ACCOUNT", 40, "u121", "Observe Account"),
        C2S_STOP_OBSERVING_ACCOUNT("C2S_STOP_OBSERVING_ACCOUNT", 41, "u122", "Stop Observing Account"),
        C2S_ADD_ROLE("C2S_ADD_ROLE", 42, "u133", "Add Role"),
        C2S_REMOVE_ROLE("C2S_REMOVE_ROLE", 43, "u135", "Add Role"),
        C2S_BAN("C2S_BAN", 44, "u137", "Ban"),
        C2S_UNBAN("C2S_UNBAN", 45, "u139", "Unban"),
        C2S_GET_BANNED_LIST_SNAPSHOT("C2S_GET_BANNED_LIST_SNAPSHOT", 46, "u141", "Get Banned List Snapshot"),
        C2S_WATCH_FOR_BANNED_ADDRESSES("C2S_WATCH_FOR_BANNED_ADDRESSES", 47, "u143", "Watch For Banned Addresses"),
        C2S_STOP_WATCHING_FOR_BANNED_ADDRESSES("C2S_STOP_WATCHING_FOR_BANNED_ADDRESSES", 48, "u145", "Stop Watching For Banned Addresses"),
        C2S_KICK_CLIENT("C2S_KICK_CLIENT", 49, "u149", "Kick Client."),
        C2S_GET_SERVERMODULELIST_SNAPSHOT("C2S_GET_SERVERMODULELIST_SNAPSHOT", 50, "u151", "Get Server Module Snapshot"),
        C2S_CLEAR_MODULE_CACHE("C2S_CLEAR_MODULE_CACHE", 51, "u153", "Reload Modules"),
        C2S_GET_UPC_STATS_SNAPSHOT("C2S_GET_UPC_STATS_SNAPSHOT", 52, "u154", "Get UPC Stats Snapshot"),
        C2S_RESET_UPC_STATS("C2S_RESET_UPC_STATS", 53, "u157", "Reset UPC Stats"),
        C2S_WATCH_FOR_PROCESSED_UPCS("C2S_WATCH_FOR_PROCESSED_UPCS", 54, "u159", "Watch for Processed UPCs"),
        C2S_STOP_WATCHING_FOR_PROCESSED_UPCS("C2S_STOP_WATCHING_FOR_PROCESSED_UPCS", 55, "u162", "Stop Watching for Processed UPCs"),
        C2S_GET_NODELIST_SNAPSHOT("C2S_GET_NODELIST_SNAPSHOT", 56, "u165", "Get Node List Snapshot"),
        C2S_GET_GATEWAYS_SNAPSHOT("C2S_GET_GATEWAYS_SNAPSHOT", 57, "u167", "Get Gateways Snapshot"),
        S2C_JOINED_ROOM("S2C_JOINED_ROOM", 58, "u6", "Client Joined Room"),
        S2C_RECEIVE_MESSAGE("S2C_RECEIVE_MESSAGE", 59, "u7", "Receive Message"),
        S2C_CLIENT_ATTR_UPDATE("S2C_CLIENT_ATTR_UPDATE", 60, "u8", "Client Attribute Update"),
        S2C_ROOM_ATTR_UPDATE("S2C_ROOM_ATTR_UPDATE", 61, "u9", "Room Attribute Update"),
        S2C_CLIENT_METADATA("S2C_CLIENT_METADATA", 62, "u29", "Client Metadata"),
        S2C_CREATE_ROOM_RESULT("S2C_CREATE_ROOM_RESULT", 63, "u32", "Results of Create Room Request"),
        S2C_REMOVE_ROOM_RESULT("S2C_REMOVE_ROOM_RESULT", 64, "u33", "Results of Remove Room Request"),
        S2C_CLIENTCOUNT_SNAPSHOT("S2C_CLIENTCOUNT_SNAPSHOT", 65, "u34", "Client Count Snapshot"),
        S2C_CLIENT_ADDED_TO_ROOM("S2C_CLIENT_ADDED_TO_ROOM", 66, "u36", "Client Added To Room"),
        S2C_CLIENT_REMOVED("S2C_CLIENT_REMOVED", 67, "u37", "Client Removed"),
        S2C_ROOMLIST_SNAPSHOT("S2C_ROOMLIST_SNAPSHOT", 68, "u38", "Room List Snapshot"),
        S2C_ROOM_ADDED("S2C_ROOM_ADDED", 69, "u39", "Room Added"),
        S2C_ROOM_REMOVED("S2C_ROOM_REMOVED", 70, "u40", "Room Removed"),
        S2C_WATCH_FOR_ROOMS_RESULT("S2C_WATCH_FOR_ROOMS_RESULT", 71, "u42", "Watch For Room Result"),
        S2C_STOP_WATCHING_FOR_ROOMS_RESULT("S2C_STOP_WATCHING_FOR_ROOMS_RESULT", 72, "u43", "Stop Watching For Rooms Result"),
        S2C_LEFT_ROOM("S2C_LEFT_ROOM", 73, "u44", "Leave Room Result"),
        S2C_CHANGE_ACCOUNT_PASSWORD_RESULT("S2C_CHANGE_ACCOUNT_PASSWORD_RESULT", 74, "u46", "Change Account Password Result"),
        S2C_CREATE_ACCOUNT_RESULT("S2C_CREATE_ACCOUNT_RESULT", 75, "u47", "Create Account Result"),
        S2C_REMOVE_ACCOUNT_RESULT("S2C_REMOVE_ACCOUNT_RESULT", 76, "u48", "Remove Account Result"),
        S2C_LOGIN_RESULT("S2C_LOGIN_RESULT", 77, "u49", "Login Result"),
        S2C_SERVER_TIME_UPDATE("S2C_SERVER_TIME_UPDATE", 78, "u50", "Server Time Update"),
        S2C_REDIRECT("S2C_REDIRECT", 79, "u52", "Redirect to Another Server On Cluster"),
        S2C_ROOM_SNAPSHOT("S2C_ROOM_SNAPSHOT", 80, "u54", "Room Snapshot"),
        S2C_OBSERVED_ROOM("S2C_OBSERVED_ROOM", 81, "u59", "Observed Room"),
        S2C_GET_ROOM_SNAPSHOT_RESULT("S2C_GET_ROOM_SNAPSHOT_RESULT", 82, "u60", "Get Room Snapshot Result"),
        S2C_STOPPED_OBSERVING_ROOM("S2C_STOPPED_OBSERVING_ROOM", 83, "u62", "Stopped Observing Room"),
        S2C_CLIENT_READY("S2C_CLIENT_READY", 84, "u63", "Client Ready"),
        S2C_SERVER_HELLO("S2C_SERVER_HELLO", 85, "u66", "Server Hello"),
        S2C_JOIN_ROOM_RESULT("S2C_JOIN_ROOM_RESULT", 86, "u72", "Join Room Result"),
        S2C_SET_CLIENT_ATTR_RESULT("S2C_SET_CLIENT_ATTR_RESULT", 87, "u73", "Set Client Attribute Result"),
        S2C_SET_ROOM_ATTR_RESULT("S2C_SET_ROOM_ATTR_RESULT", 88, "u74", "Set Room Attribute Result"),
        S2C_GET_CLIENTCOUNT_SNAPSHOT_RESULT("S2C_GET_CLIENTCOUNT_SNAPSHOT_RESULT", 89, "u75", "Get Client Count Snapshot Result"),
        S2C_LEAVE_ROOM_RESULT("S2C_LEAVE_ROOM_RESULT", 90, "u76", "Leave Room Result"),
        S2C_OBSERVE_ROOM_RESULT("S2C_OBSERVE_ROOM_RESULT", 91, "u77", "Observe Room Result"),
        S2C_STOP_OBSERVING_ROOM_RESULT("S2C_STOP_OBSERVING_ROOM_RESULT", 92, "u78", "Stop Observing Room Result"),
        S2C_ROOM_ATTR_REMOVED("S2C_ROOM_ATTR_REMOVED", 93, "u79", "Room Attribute Removed"),
        S2C_REMOVE_ROOM_ATTR_RESULT("S2C_REMOVE_ROOM_ATTR_RESULT", 94, "u80", "Remove Room Attribute Result"),
        S2C_CLIENT_ATTR_REMOVED("S2C_CLIENT_ATTR_REMOVED", 95, "u81", "Client Attribute Removed"),
        S2C_REMOVE_CLIENT_ATTR_RESULT("S2C_REMOVE_CLIENT_ATTR_RESULT", 96, "u82", "Remove Client Attribute Result"),
        S2C_SESSION_TERMINATED("S2C_SESSION_TERMINATED", 97, "u84", "Session Terminated"),
        S2C_SESSION_NOT_FOUND("S2C_SESSION_NOT_FOUND", 98, "u85", "Session Not Found"),
        S2C_LOGOFF_RESULT("S2C_LOGOFF_RESULT", 99, "u87", "Logoff Result"),
        S2C_LOGGED_IN("S2C_LOGGED_IN", 100, "u88", "Logged In"),
    S2C_LOGGED_OFF("S2C_LOGGED_OFF", 101, "u89", "Logged Off"),
    S2C_ACCOUNT_PASSWORD_CHANGED("S2C_ACCOUNT_PASSWORD_CHANGED", 102, "u90", "Account Password Changed"),
    S2C_CLIENTLIST_SNAPSHOT("S2C_CLIENTLIST_SNAPSHOT", 103, "u101", "Client List Snapshot"),
    S2C_CLIENT_ADDED_TO_SERVER("S2C_CLIENT_ADDED_TO_SERVER", 104, "u102", "Client Added To Server"),
    S2C_CLIENT_REMOVED_FROM_SERVER("S2C_CLIENT_REMOVED_FROM_SERVER", 105, "u103", "Client Removed From Server"),
    S2C_CLIENT_SNAPSHOT("S2C_CLIENT_SNAPSHOT", 106, "u104", "Client Snapshot"),
    S2C_OBSERVE_CLIENT_RESULT("S2C_OBSERVE_CLIENT_RESULT", 107, "u105", "Observe Client Result"),
    S2C_STOP_OBSERVING_CLIENT_RESULT("S2C_STOP_OBSERVING_CLIENT_RESULT", 108, "u106", "Stop Observing Client Result"),
    S2C_WATCH_FOR_CLIENTS_RESULT("S2C_WATCH_FOR_CLIENTS_RESULT", 109, "u107", "Watch For Clients Result"),
    S2C_STOP_WATCHING_FOR_CLIENTS_RESULT("S2C_STOP_WATCHING_FOR_CLIENTS_RESULT", 110, "u108", "Stop Watching For Clients Result"),
    S2C_WATCH_FOR_ACCOUNTS_RESULT("S2C_WATCH_FOR_ACCOUNTS_RESULT", 111, "u109", "Watch For Accounts Result"),
    S2C_STOP_WATCHING_FOR_ACCOUNTS_RESULT("S2C_STOP_WATCHING_FOR_ACCOUNTS_RESULT", 112, "u110", "Stop Watching For Accounts Result"),
    S2C_ACCOUNT_ADDED("S2C_ACCOUNT_ADDED", 113, "u111", "Account Added"),
    S2C_ACCOUNT_REMOVED("S2C_ACCOUNT_REMOVED", 114, "u112", "Account Removed"),
    S2C_JOINED_ROOM_ADDED_TO_CLIENT("S2C_JOINED_ROOM_ADDED_TO_CLIENT", 115, "u113", "Joined Room Added To Client"),
    S2C_JOINED_ROOM_REMOVED_FROM_CLIENT("S2C_JOINED_ROOM_REMOVED_FROM_CLIENT", 116, "u114", "Joined Room Removed From Client"),
    S2C_GET_CLIENT_SNAPSHOT_RESULT("S2C_GET_CLIENT_SNAPSHOT_RESULT", 117, "u115", "Get Client Snapshot Result"),
    S2C_GET_ACCOUNT_SNAPSHOT_RESULT("S2C_GET_ACCOUNT_SNAPSHOT_RESULT", 118, "u116", "Get Account Snapshot Result"),
    S2C_OBSERVED_ROOM_ADDED_TO_CLIENT("S2C_OBSERVED_ROOM_ADDED_TO_CLIENT", 119, "u117", "Observed Room Added To Client"),
    S2C_OBSERVED_ROOM_REMOVED_FROM_CLIENT("S2C_OBSERVED_ROOM_REMOVED_FROM_CLIENT", 120, "u118", "Observed Room Removed From Client"),
    S2C_CLIENT_OBSERVED("S2C_CLIENT_OBSERVED", 121, "u119", "Client Observed"),
    S2C_STOPPED_OBSERVING_CLIENT("S2C_STOPPED_OBSERVING_CLIENT", 122, "u120", "Stopped Observing Client"),
    S2C_OBSERVE_ACCOUNT_RESULT("S2C_OBSERVE_ACCOUNT_RESULT", 123, "u123", "Observe Account Result"),
    S2C_ACCOUNT_OBSERVED("S2C_ACCOUNT_OBSERVED", 124, "u124", "Account Observed"),
    S2C_STOP_OBSERVING_ACCOUNT_RESULT("S2C_STOP_OBSERVING_ACCOUNT_RESULT", 125, "u125", "Stop Observing Account Result"),
    S2C_STOPPED_OBSERVING_ACCOUNT("S2C_STOPPED_OBSERVING_ACCOUNT", 126, "u126", "Stopped Observing Account"),
    S2C_ACCOUNTLIST_SNAPSHOT("S2C_ACCOUNTLIST_SNAPSHOT", 127, "u127", "Account List Snapshot"),
    S2C_CLIENT_OBSERVED_ROOM("S2C_CLIENT_OBSERVED_ROOM", 128, "u129", "Client Stopped Observing Room"),
    S2C_CLIENT_STOPPED_OBSERVING_ROOM("S2C_CLIENT_STOPPED_OBSERVING_ROOM", 129, "u130", "Client Stopped Observing Room"),
    S2C_ROOM_OCCUPANTCOUNT_UPDATE("S2C_ROOM_OCCUPANTCOUNT_UPDATE", 130, "u131", "Room Occupant Count Update"),
    S2C_ROOM_OBSERVERCOUNT_UPDATE("S2C_ROOM_OBSERVERCOUNT_UPDATE", 131, "u132", "Room Observer Count Update"),
    S2C_ADD_ROLE_RESULT("S2C_ADD_ROLE_RESULT", 132, "u134", "Add Role Result"),
    S2C_REMOVE_ROLE_RESULT("S2C_REMOVE_ROLE_RESULT", 133, "u136", "Remove Role Result"),
    S2C_BAN_RESULT("S2C_BAN_RESULT", 134, "u138", "Ban Result"),
    S2C_UNBAN_RESULT("S2C_UNBAN_RESULT", 135, "u140", "Unban Result"),
    S2C_BANNED_LIST_SNAPSHOT("S2C_BANNED_LIST_SNAPSHOT", 136, "u142", "Get Banned List Snapshot"),
    S2C_WATCH_FOR_BANNED_ADDRESSES_RESULT("S2C_WATCH_FOR_BANNED_ADDRESSES_RESULT", 137, "u144", "Watch For Banned Addresses Result"),
    S2C_STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT("S2C_STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT", 138, "u146", "Stop Watching For Banned Addresses Result"),
    S2C_BANNED_ADDRESS_ADDED("S2C_BANNED_ADDRESS_ADDED", 139, "u147", "Banned Address Added"),
    S2C_BANNED_ADDRESS_REMOVED("S2C_BANNED_ADDRESS_REMOVED", 140, "u148", "Banned Address Removed"),
    S2C_KICK_CLIENT_RESULT("S2C_KICK_CLIENT_RESULT", 141, "u150", "Kick Client Result"),
    S2C_SERVERMODULELIST_SNAPSHOT("S2C_SERVERMODULELIST_SNAPSHOT", 142, "u152", "Serve Module List Snapshot"),
    S2C_GET_UPC_STATS_SNAPSHOT_RESULT("S2C_GET_UPC_STATS_SNAPSHOT_RESULT", 143, "u155", "Get UPC Stats Snapshot Result"),
    S2C_UPC_STATS_SNAPSHOT("S2C_UPC_STATS_SNAPSHOT", 144, "u156", "UPC Stats Snapshot"),
    S2C_RESET_UPC_STATS_RESULT("S2C_RESET_UPC_STATS_RESULT", 145, "u158", "Reset UPC Stats Snapshot"),
    S2C_WATCH_FOR_PROCESSED_UPCS_RESULT("S2C_WATCH_FOR_PROCESSED_UPCS_RESULT", 146, "u160", "Watch for Processed UPCs Result"),
    S2C_PROCESSED_UPC_ADDED("S2C_PROCESSED_UPC_ADDED", 147, "u161", "Process UPC Added"),
    S2C_STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT("S2C_STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT", 148, "u163", "Stop Watching for Processed UPCs Result"),
    S2C_CONNECTION_REFUSED("S2C_CONNECTION_REFUSED", 149, "u164", "Connection Refused"),
    S2C_NODELIST_SNAPSHOT("S2C_NODELIST_SNAPSHOT", 150, "u166", "Node List Snapshot"),
    S2C_GATEWAYS_SNAPSHOT("S2C_GATEWAYS_SNAPSHOT", 151, "u168", "Gateways Snapshot"),
    C2S_LOGIN_ADMIN("C2S_LOGIN_ADMIN", 152, "a1", "Login Admin"),
    C2S_GET_ROOM_DATA("C2S_GET_ROOM_DATA", 153, "a3", "Get Room Data"),
    C2S_STOP_SERVER("C2S_STOP_SERVER", 154, "a5", "Stop Server"),
    C2S_GET_SERVER_DATA("C2S_GET_SERVER_DATA", 155, "a6", "Get Server Data"),
    C2S_SET_LOG_LEVEL("C2S_SET_LOG_LEVEL", 156, "a8", "Set Log Level"),
    C2S_GET_GATEWAY_DATA("C2S_GET_GATEWAY_DATA", 157, "a9", "Get Gateway Data"),
    C2S_GET_POLICYFILE_DATA("C2S_GET_POLICYFILE_DATA", 158, "a11", "Get PolicyFile Data"),
    C2S_ADD_LOG_LISTENER("C2S_ADD_LOG_LISTENER", 159, "a13", "Add Log Listener."),
    C2S_REMOVE_LOG_LISTENER("C2S_REMOVE_LOG_LISTENER", 160, "a14", "Remove Log Listener."),
    C2S_RUN_DIAGNOSTIC("C2S_RUN_DIAGNOSTIC", 161, "a99", "Run Diagnostic."),
    S2C_LOGIN_ADMIN_RESULT("S2C_LOGIN_ADMIN_RESULT", 162, "a2", "Login Admin Result"),
    S2C_ROOM_DATA("S2C_ROOM_DATA", 163, "a4", "Room Data"),
    S2C_SERVER_DATA("S2C_SERVER_DATA", 164, "a7", "Server Data"),
    S2C_GATEWAY_DATA("S2C_GATEWAY_DATA", 165, "a10", "Gateway Data"),
    S2C_POLICYFILE_DATA("S2C_POLICYFILE_DATA", 166, "a12", "PolicyFile Data"),
    S2C_LOG_DATA("S2C_LOG_DATA", 167, "a15", "Log Data");

    private static Map a;
    public String id;
    public String desc;

    private UPCMethod(final String name, final int ordinal, final String id, final String desc) {
    this.id = id;
    this.desc = desc;
}

    public static UPCMethod getMethod(final String s) {
    return UPCMethod.a.get(s);
}

    static {
    UPCMethod.a = new HashMap();
    final UPCMethod[] values = values();
    for (int i = 0; i < values.length; ++i) {
        UPCMethod.a.put(values[i].id, values[i]);
    }
}
}