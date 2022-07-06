var vaidaServerMethods = require("./server-to-client");

module.exports.init = function (config) {

    var upc_template = config.upc_template;
    
    var vaida = {

        upc: {

            com: {

                socket24eventName: {

                    SEND_MESSAGE_TO_ROOMS: "u1",
                    SEND_MESSAGE_TO_CLIENTS: "u2",
                    SET_CLIENT_ATTR: "u3",
                    JOIN_ROOM: "u4",
                    SET_ROOM_ATTR: "u5",
                    LEAVE_ROOM: "u10",
                    CREATE_ACCOUNT: "u11",
                    REMOVE_ACCOUNT: "u12",
                    CHANGE_ACCOUNT_PASSWORD: "u13",
                    LOGIN: "u14",
                    GET_CLIENTCOUNT_SNAPSHOT: "u18",
                    SYNC_TIME: "u19",
                    GET_ROOMLIST_SNAPSHOT: "u21",
                    CREATE_ROOM: "u24",
                    REMOVE_ROOM: "u25",
                    WATCH_FOR_ROOMS: "u26",
                    STOP_WATCHING_FOR_ROOMS: "u27",
                    GET_ROOM_SNAPSHOT: "u55",
                    SEND_MESSAGE_TO_SERVER: "u57",
                    OBSERVE_ROOM: "u58",
                    STOP_OBSERVING_ROOM: "u61",
                    SET_ROOM_UPDATE_LEVELS: "u64",
                    CLIENT_HELLO: "u65",
                    REMOVE_ROOM_ATTR: "u67",
                    REMOVE_CLIENT_ATTR: "u69",
                    SEND_ROOMMODULE_MESSAGE: "u70",
                    SEND_SERVERMODULE_MESSAGE: "u71",
                    TERMINATE_SESSION: "u83",
                    LOGOFF: "u86",
                    GET_CLIENTLIST_SNAPSHOT: "u91",
                    WATCH_FOR_CLIENTS: "u92",
                    STOP_WATCHING_FOR_CLIENTS: "u93",
                    GET_CLIENT_SNAPSHOT: "u94",
                    OBSERVE_CLIENT: "u95",
                    STOP_OBSERVING_CLIENT: "u96",
                    GET_ACCOUNTLIST_SNAPSHOT: "u97",
                    WATCH_FOR_ACCOUNTS: "u98",
                    STOP_WATCHING_FOR_ACCOUNTS: "u99",
                    GET_ACCOUNT_SNAPSHOT: "u100",
                    OBSERVE_ACCOUNT: "u121",
                    STOP_OBSERVING_ACCOUNT: "u122",
                    ADD_ROLE: "u133",
                    REMOVE_ROLE: "u135",
                    KICK_CLIENT: "u149",
                    BAN: "u137",
                    UNBAN: "u139",
                    GET_BANNED_LIST_SNAPSHOT: "u141",
                    WATCH_FOR_BANNED_ADDRESSES: "u143",
                    STOP_WATCHING_FOR_BANNED_ADDRESSES: "u145",
                    GET_NODELIST_SNAPSHOT: "u165",
                    GET_GATEWAYS_SNAPSHOT: "u167"

                },

                methods: {

                    //SEND_MESSAGE_TO_ROOMS

                    u1: function (socket, ...upc_args) {

                        /*** execute ***/
                        vaidaServerMethods.AccountEvent.LOGGED_IN();

                    },


                    //SEND_MESSAGE_TO_CLIENTS

                    u2: function (socket, ...upc_args) {

                        /*** execute ***/
                        var data_u3 = upc_template;
                        data_u3.U.M = "u2";
                        data_u3.U.L.A = [upc_args[1],'','_PING',14,'',0,false];
                        socket.emit("upc", data_u3);
                        console.info("SEND_MESSAGE_TO_BACK_CLIENTS_HEARTBEAT", data_u3);

                    },


                    //SET_CLIENT_ATTR

                    u3: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //JOIN_ROOM

                    u4: function (socket, ...upc_args) {

                        /*** execute ***/
                        var data_u4 = upc_template;
                        data_u4.U.M = "u4";
                        data_u4.U.L.A = [upc_args[1],'','_PING',14,'',0,false];
                        //socket.emit("upc", data_u4);
                        console.info("JOIN_ROOM", data_u4);

                    },


                    //SET_ROOM_ATTR

                    u5: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //LEAVE_ROOM

                    u10: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //CREATE_ACCOUNT

                    u11: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //REMOVE_ACCOUNT

                    u12: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //CHANGE_ACCOUNT_PASSWORD

                    u13: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //LOGIN

                    u14: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_CLIENTCOUNT_SNAPSHOT

                    u18: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //SYNC_TIME

                    u19: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_ROOMLIST_SNAPSHOT

                    u21: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //CREATE_ROOM

                    u24: function (socket, ...upc_args) {

                        /*** execute ***/

                        setTimeout(function () {
                            var data_u32 = upc_template;
                            data_u32.U.M = "u32";
                            data_u32.U.L.A = [upc_args[0],"SUCCESS"];
                            socket.emit("upc", data_u32);
                            console.info("CREATED ROOM:", data_u32);
                        },10);

                        setTimeout(function () {
                            var data_u131 = upc_template;
                            data_u131.U.M = "u131";
                            data_u131.U.L.A = [upc_args[0],131];
                            socket.emit("upc", data_u131);
                            console.info("ROOM_OCCUPANTCOUNT_UPDATE:", data_u131);
                        },50);

                        setTimeout(function () {
                            var data_u6 = upc_template;
                            data_u6.U.M = "u6";
                            data_u6.U.L.A = [upc_args[0],"SUCCESS"];
                            socket.emit("upc", data_u6);
                            console.info("JOINED_ROOM:", data_u6);
                        },100);

                        setTimeout(function () {
                            var data_u72 = upc_template;
                            data_u72.U.M = "u72";
                            data_u72.U.L.A = [upc_args[0],"SUCCESS"];
                            socket.emit("upc", data_u72);
                            console.info("JOIN_ROOM_RESULT:", data_u72);
                        },200);


                    },


                    //REMOVE_ROOM

                    u25: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //WATCH_FOR_ROOMS

                    u26: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //STOP_WATCHING_FOR_ROOMS

                    u27: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_ROOM_SNAPSHOT

                    u55: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //SEND_MESSAGE_TO_SERVER

                    u57: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //OBSERVE_ROOM

                    u58: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //STOP_OBSERVING_ROOM

                    u61: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //SET_ROOM_UPDATE_LEVELS

                    u64: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //CLIENT_HELLO

                    u65: function (socket, ...upc_args) {

                        /*** execute ***/

                        console.log(">> CLIENT HELLO:", socket, ...upc_args);

                        setTimeout(function () {
                            var data_u66 = upc_template;
                            data_u66.U.M = "u66";
                            data_u66.U.L.A = ["V.A.I.D.A Server Pro 1.0.0 (build 100)","UUID_"+socket.id,"1.0.0",true];
                            socket.emit("upc", data_u66);
                            console.info("SERVER HELLO:", data_u66);
                        },10);

                        setTimeout(function () {
                            var data_u29 = upc_template;
                            data_u29.U.M = "u29";
                            data_u29.U.L.A = [socket.id];
                            socket.emit("upc", data_u29);
                            console.info("CLIENT METADATA:", data_u29);
                        },500);

                        setTimeout(function () {
                            var data_u8A = upc_template;
                            data_u8A.U.M = "u8";
                            data_u8A.U.L.A = ['',socket.id,'','_CT', new Date().getTime(),36];
                            socket.emit("upc", data_u8A);
                            console.info("CLIENT_ATTR_UPDATE #1:", data_u8A);
                        },750);

                        setTimeout(function () {
                            var data_u8B = upc_template;
                            data_u8B.U.M = "u8";
                            data_u8B.U.L.A = ['',socket.id,'','_IP',socket.handshake.address,36];
                            socket.emit("upc", data_u8B);
                            console.info("CLIENT_ATTR_UPDATE #2:", data_u8B);
                        },1000);

                        setTimeout(function () {
                            var data_u63 = upc_template;
                            data_u63.U.M = "u63";
                            data_u63.U.L.A = [socket.id];
                            socket.emit("upc", data_u63);
                            console.info("CLIENT READY", data_u63);
                        },1200);

                    },


                    //REMOVE_ROOM_ATTR

                    u67: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //REMOVE_CLIENT_ATTR

                    u69: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //SEND_ROOMMODULE_MESSAGE

                    u70: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //SEND_SERVERMODULE_MESSAGE

                    u71: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //TERMINATE_SESSION

                    u83: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //LOGOFF

                    u86: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_CLIENTLIST_SNAPSHOT

                    u91: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //WATCH_FOR_CLIENTS

                    u92: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //STOP_WATCHING_FOR_CLIENTS

                    u93: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_CLIENT_SNAPSHOT

                    u94: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //OBSERVE_CLIENT

                    u95: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //STOP_OBSERVING_CLIENT

                    u96: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_ACCOUNTLIST_SNAPSHOT

                    u97: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //WATCH_FOR_ACCOUNTS

                    u98: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //STOP_WATCHING_FOR_ACCOUNTS

                    u99: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_ACCOUNT_SNAPSHOT

                    u100: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //OBSERVE_ACCOUNT

                    u121: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //STOP_OBSERVING_ACCOUNT

                    u122: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //ADD_ROLE

                    u133: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //REMOVE_ROLE

                    u135: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //KICK_CLIENT

                    u149: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //BAN

                    u137: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //UNBAN

                    u139: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_BANNED_LIST_SNAPSHOT

                    u141: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //WATCH_FOR_BANNED_ADDRESSES

                    u143: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //STOP_WATCHING_FOR_BANNED_ADDRESSES

                    u145: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_NODELIST_SNAPSHOT

                    u165: function (socket, ...upc_args) {

                        /*** execute ***/


                    },


                    //GET_GATEWAYS_SNAPSHOT

                    u167: function (socket, ...upc_args) {

                        /** @end */


                    },

                    defaultFX: function (msg) {
                        var data_uINVALID = upc_template;
                        data_uINVALID.U.M = "uINVALID";
                        data_uINVALID.U.L.A = ["Invalid Message", msg];
                        socket.emit("upc", data_uINVALID);
                    },

                },
                
                routeUPCMessage: function (socket, msg) {

                    if ("U" in msg) {

                        if ("M" in msg.U) {

                            var upc_tmpl = upc_template;

                            var upc_args = msg.U.L.A;

                            var upc_msgn = msg.U.M;

                            switch (upc_msgn) {

                                case vaida.upc.com.socket24eventName.SEND_MESSAGE_TO_ROOMS: {

                                    vaida.upc.com.respondClientMessage("u1", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SEND_MESSAGE_TO_CLIENTS: {

                                    vaida.upc.com.respondClientMessage("u2", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SET_CLIENT_ATTR: {

                                    vaida.upc.com.respondClientMessage("u3", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.JOIN_ROOM: {

                                    vaida.upc.com.respondClientMessage("u4", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SET_ROOM_ATTR: {

                                    vaida.upc.com.respondClientMessage("u5", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.LEAVE_ROOM: {

                                    vaida.upc.com.respondClientMessage("u10", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.CREATE_ACCOUNT: {

                                    vaida.upc.com.respondClientMessage("u11", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.REMOVE_ACCOUNT: {

                                    vaida.upc.com.respondClientMessage("u12", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.CHANGE_ACCOUNT_PASSWORD: {

                                    vaida.upc.com.respondClientMessage("u13", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.LOGIN: {

                                    vaida.upc.com.respondClientMessage("u14", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_CLIENTCOUNT_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u18", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SYNC_TIME: {

                                    vaida.upc.com.respondClientMessage("u19", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_ROOMLIST_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u21", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.CREATE_ROOM: {

                                    vaida.upc.com.respondClientMessage("u24", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.REMOVE_ROOM: {

                                    vaida.upc.com.respondClientMessage("u25", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.WATCH_FOR_ROOMS: {

                                    vaida.upc.com.respondClientMessage("u26", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.STOP_WATCHING_FOR_ROOMS: {

                                    vaida.upc.com.respondClientMessage("u27", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_ROOM_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u55", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SEND_MESSAGE_TO_SERVER: {

                                    vaida.upc.com.respondClientMessage("u57", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.OBSERVE_ROOM: {

                                    vaida.upc.com.respondClientMessage("u58", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.STOP_OBSERVING_ROOM: {

                                    vaida.upc.com.respondClientMessage("u61", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SET_ROOM_UPDATE_LEVELS: {

                                    vaida.upc.com.respondClientMessage("u64", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.CLIENT_HELLO: {

                                    vaida.upc.com.respondClientMessage("u65", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.REMOVE_ROOM_ATTR: {

                                    vaida.upc.com.respondClientMessage("u67", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.REMOVE_CLIENT_ATTR: {

                                    vaida.upc.com.respondClientMessage("u69", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SEND_ROOMMODULE_MESSAGE: {

                                    vaida.upc.com.respondClientMessage("u70", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.SEND_SERVERMODULE_MESSAGE: {

                                    vaida.upc.com.respondClientMessage("u71", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.TERMINATE_SESSION: {

                                    vaida.upc.com.respondClientMessage("u83", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.LOGOFF: {

                                    vaida.upc.com.respondClientMessage("u86", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_CLIENTLIST_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u91", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.WATCH_FOR_CLIENTS: {

                                    vaida.upc.com.respondClientMessage("u92", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.STOP_WATCHING_FOR_CLIENTS: {

                                    vaida.upc.com.respondClientMessage("u93", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_CLIENT_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u94", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.OBSERVE_CLIENT: {

                                    vaida.upc.com.respondClientMessage("u95", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.STOP_OBSERVING_CLIENT: {

                                    vaida.upc.com.respondClientMessage("u96", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_ACCOUNTLIST_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u97", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.WATCH_FOR_ACCOUNTS: {

                                    vaida.upc.com.respondClientMessage("u98", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.STOP_WATCHING_FOR_ACCOUNTS: {

                                    vaida.upc.com.respondClientMessage("u99", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_ACCOUNT_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u100", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.OBSERVE_ACCOUNT: {

                                    vaida.upc.com.respondClientMessage("u121", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.STOP_OBSERVING_ACCOUNT: {

                                    vaida.upc.com.respondClientMessage("u122", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.ADD_ROLE: {

                                    vaida.upc.com.respondClientMessage("u133", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.REMOVE_ROLE: {

                                    vaida.upc.com.respondClientMessage("u135", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.KICK_CLIENT: {

                                    vaida.upc.com.respondClientMessage("u149", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.BAN: {

                                    vaida.upc.com.respondClientMessage("u137", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.UNBAN: {

                                    vaida.upc.com.respondClientMessage("u139", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_BANNED_LIST_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u141", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.WATCH_FOR_BANNED_ADDRESSES: {

                                    vaida.upc.com.respondClientMessage("u143", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.STOP_WATCHING_FOR_BANNED_ADDRESSES: {

                                    vaida.upc.com.respondClientMessage("u145", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_NODELIST_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u165", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                case vaida.upc.com.socket24eventName.GET_GATEWAYS_SNAPSHOT: {

                                    vaida.upc.com.respondClientMessage("u167", upc_msgn, upc_args, upc_tmpl, socket);

                                    /** @end */

                                    break;

                                }

                                default: {

                                    var data_e = upc_tmpl;
                                    data_e.U.M = "u000";
                                    data_e.U.L.A.push("Invalid Message");
                                    socket.emit("onerror", data_e);

                                    /** @end */

                                    break;

                                }

                            }

                        }

                    }

                    socket.emit("onerror", "UNKNOWN ERROR");

                },

                respondClientMessage: function (message_name, upc_msgn, upc_args, upc_tmpl, socket){

                    // don't forget to call .trim() to remove the \n
                    var fn = message_name.toString().trim();

                    // function exists
                    if (fn in vaida.upc.com.methods && typeof vaida.upc.com.methods[fn] === "function") {

                        if (fn === upc_msgn) {

                            upc_args.unshift(socket);

                            vaida.upc.com.methods[fn].apply(this, upc_args);

                        } else {

                            socket.emit("onerror", ["Function Name Mismatch", fn, upc_msgn, upc_args]);

                        }

                    }

                    // function does not exist
                    else {

                        console.log("could not find " + fn + " function");

                        socket.emit("onerror", ["Message Function Not Found", message_name, upc_args]);

                    }

                }

            }

        }

    };

    return vaida;

};