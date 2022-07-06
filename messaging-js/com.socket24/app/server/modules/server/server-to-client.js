module.exports.init = function(socket, config){

    var server_config = config;

    var server_socket = socket;

    return {

        RoomEvent: {

            // JOINED_ROOM

            /**
             /* u6
             /* JOINED_ROOM
             /*
             /* Informs the client that it joined a room.
             * @param  {String} roomID
             **/

            JOIN: function (roomID) {

                var message_id = "u6";
                var arguments = []
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // CLIENT_ADDED_TO_ROOM

            /**
             /* u36
             /* CLIENT_ADDED_TO_ROOM
             /*
             /* Reports that the specified client has joined the specified room.
             * @param  {String} roomID
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} globalAttrName1 [RS] globalAttrValue1 [RS] globalAttrOptions1 [RS]
             * @param  {String} globalAttrName [RS] globalAttrValue [RS] globalAttrOptions
             * @param  {String} roomAttrName1 [RS] roomAttrValue1 [RS] roomAttrOptions1 [RS]
             * @param  {String} roomAttrName<i>n</i> [RS] roomAttrValue<i>n</i> [RS] roomAttrOptions
             **/

            ADD_OCCUPANT: function (roomID, clientID, userID, ...attrs) {

                var message_id = "u36";
                var arguments = []
                arguments.push(roomID);
                arguments.push(clientID);
                arguments.push(userID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // CLIENT_REMOVED_FROM_ROOM

            /**
             /* u37
             /* CLIENT_REMOVED_FROM_ROOM
             /*
             /* Reports that the specified client has left the specified room.
             * @param  {String} roomID
             * @param  {String} clientID
             **/

            REMOVE_OCCUPANT: function (roomID, clientID) {

                var message_id = "u37";
                var arguments = []
                arguments.push(roomID);
                arguments.push(clientID);
                this.sendS2C(message_id, arguments);

            },


            // LEFT_ROOM

            /**
             /* u44
             /* LEFT_ROOM
             /*
             /* Informs the client that it left the specified roomID, normally as a result of an earlier u10 request.
             * @param  {String} roomID
             **/

            LEAVE: function (roomID) {

                var message_id = "u44";
                var arguments = []
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // ROOM_SNAPSHOT

            /**
             /* u54
             /* ROOM_SNAPSHOT
             /*
             /* Provides a manifest of a room's contents (attributes and clients). The content of the manifest is limited by the receiving client's update levels (set via u64) and security privileges. The server sends u54 messages in response to either joining a room (u4), observing a room (u58), or requesting a room snapshot (u55). The 'occupantObserverIndicator' parameter indicates whether the client is an occupant of the room (in which case, occupantObserverIndicator is 0) or an observer of the room (in which case, occupantObserverIndicator is 1).
             * @param  {String} requestID
             * @param  {String} roomID
             * @param  {String} occupantCount
             * @param  {String} observerCount
             * @param  {String} roomAttrName1[RS]roomAttrValue1 [RS] roomAttrName2[RS]roomAttrValue2 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>
             * @param  {String} client1clientID
             * @param  {String} client1userID
             * @param  {String} client1occupantObserverIndicator
             * @param  {String} client1GlobalAttrName1 [RS] client1GlobalAttrValue1  [RS] client1GlobalAttrOptions1 [RS] <br>
             * @param  {String} client1GlobalAttrName<i>n</i> [RS] client1GlobalAttrValue<i>n</i> [RS] client1GlobalAttrOptions<i>n</i>
             * @param  {String} client1RoomAttrName1 [RS] client1RoomAttrValue1 [RS] client1RoomAttrOptions1<br>
             * @param  {String} client1RoomAttrName<i>n</i> [RS] client1RoomAttrValue<i>n</i> [RS] client1RoomAttrOptions<i>n</i>
             * @param  {String} ...
             * @param  {String} client<i>n</i>clientID
             * @param  {String} client<i>n</i>userID
             * @param  {String} client<i>n</i>occupantObserverIndicator
             * @param  {String} client<i>n</i>GlobalAttrName1 [RS] client<i>n</i>GlobalAttrValue1 [RS] client<i>n</i>GlobalAttrOptions1 [RS]<br>
             * @param  {String} client<i>n</i>GlobalAttrName<i>n</i> [RS] client<i>n</i>GlobalAttrValue<i>n</i> [RS] client<i>n</i>GlobalAttrOptions<i>n</i>
             * @param  {String} client<i>n</i>RoomAttrName1 [RS] client<i>n</i>RoomAttrValue1 [RS] client<i>n</i>RoomAttrOptions1 [RS]<br>
             * @param  {String} client<i>n</i>RoomAttrName<i>n</i> [RS] client<i>n</i>RoomAttrValue<i>n</i> [RS] client<i>n</i>RoomAttrOptions<i>n</i>
             **/

            SYNCHRONIZE: function (requestID, roomID, occupantCount, observerCount, ...attrs) {

                var message_id = "u54";
                var arguments = []
                arguments.push(requestID);
                arguments.push(roomID);
                arguments.push(occupantCount);
                arguments.push(observerCount);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // OBSERVED_ROOM

            /**
             /* u59
             /* OBSERVED_ROOM
             /*
             /* Informs the client that it started observing the specified room.
             * @param  {String} roomID
             **/

            OBSERVE: function (roomID) {

                var message_id = "u59";
                var arguments = []
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // STOP_OBSERVING_ROOM_RESULT

            /**
             /* u78
             /* STOP_OBSERVING_ROOM_RESULT
             /*
             /* Reports the result of an attempt to stop observing the specified roomID. See u61.
             * @param  {String} roomID
             * @param  {String} status
             **/

            STOP_OBSERVING: function (roomID, status) {

                var message_id = "u78";
                var arguments = []
                arguments.push(roomID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // JOIN_ROOM_RESULT

            /**
             /* u72
             /* JOIN_ROOM_RESULT
             /*
             /* Reports the result of a join-room request (u4). If status is SUCCESS, the client is also sent a separate u6 message.
             * @param  {String} roomID
             * @param  {String} status
             **/

            JOIN_RESULT: function (roomID, status) {

                var message_id = "u72";
                var arguments = []
                arguments.push(roomID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // LEAVE_ROOM_RESULT

            /**
             /* u76
             /* LEAVE_ROOM_RESULT
             /*
             /* Reports the result of an attempt to leave the specified roomID. See u10.
             * @param  {String} roomID
             * @param  {String} status
             **/

            LEAVE_RESULT: function (roomID, status) {

                var message_id = "u76";
                var arguments = []
                arguments.push(roomID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // OBSERVE_ROOM_RESULT

            /**
             /* u77
             /* OBSERVE_ROOM_RESULT
             /*
             /* Reports the result of a room observation attempt (u58) by the client. If status is SUCCESS, the client is also sent a separate u59 message.
             * @param  {String} roomID
             * @param  {String} status
             **/

            OBSERVE_RESULT: function (roomID, status) {

                var message_id = "u77";
                var arguments = []
                arguments.push(roomID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // CLIENT_OBSERVED_ROOM

            /**
             /* u129
             /* CLIENT_OBSERVED_ROOM
             /*
             /* Reports that the specified client has observed the specified room.
             * @param  {String} roomID
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} globalAttrName1 [RS] globalAttrValue1 [RS] globalAttrOptions1 [RS]. globalAttrName [RS] globalAttrValue [RS] globalAttrOptions
             * @param  {String} roomAttrName1 [RS] roomAttrValue1 [RS] roomAttrOptions1 [RS]. roomAttrName<i>n</i> [RS] roomAttrValue<i>n</i> [RS] roomAttrOptions
             **/

            ADD_OBSERVER: function (roomID, clientID, userID, ...attrs) {

                var message_id = "u129";
                var arguments = []
                arguments.push(roomID);
                arguments.push(clientID);
                arguments.push(userID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // CLIENT_STOPPED_OBSERVING_ROOM

            /**
             /* u130
             /* CLIENT_STOPPED_OBSERVING_ROOM
             /*
             /* Reports that the specified client has stopped observing the specified room.
             * @param  {String} roomID
             * @param  {String} clientID
             **/

            REMOVE_OBSERVER: function (roomID, clientID) {

                var message_id = "u130";
                var arguments = []
                arguments.push(roomID);
                arguments.push(clientID);
                this.sendS2C(message_id, arguments);

            },


            // ROOM_OCCUPANTCOUNT_UPDATE

            /**
             /* u131
             /* ROOM_OCCUPANTCOUNT_UPDATE
             /*
             /* Reports the new number of occupants in the room. u131 is sent to clients that have joined or observed a room, and have occupant-count updates enabled (see u64).
             * @param  {String} roomID
             * @param  {String} numOccupants
             **/

            OCCUPANT_COUNT: function (roomID, numOccupants) {

                var message_id = "u131";
                var arguments = []
                arguments.push(roomID);
                arguments.push(numOccupants);
                this.sendS2C(message_id, arguments);

            },


            // ROOM_OBSERVERCOUNT_UPDATE

            /**
             /* u132
             /* ROOM_OBSERVERCOUNT_UPDATE
             /*
             /* Reports the new number of observers in the room. u132 is sent to clients that have joined or observed a room, and have observer-count updates enabled (see u64).
             * @param  {String} roomID
             * @param  {String} numObservers
             **/

            OBSERVER_COUNT: function (roomID, numObservers) {

                var message_id = "u132";
                var arguments = []
                arguments.push(roomID);
                arguments.push(numObservers);
                this.sendS2C(message_id, arguments);

            },


        },
        MessageManager: {

            // RECEIVE_MESSAGE

            /**
             /* u7
             /* RECEIVE_MESSAGE
             /*
             /* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
             * @param  {String} messageName
             * @param  {String} broadcastType
             * @param  {String} fromClientID
             * @param  {String} roomID
             * @param  {String} messageArg1
             * @param  {String} messageArg2
             * @param  {String} ...
             * @param  {String} messageArg<i>n</i>
             **/

            addMessageListener: function (messageName, broadcastType, fromClientID, roomID, ...attrs) {

                var message_id = "u7";
                var arguments = []
                arguments.push(messageName);
                arguments.push(broadcastType);
                arguments.push(fromClientID);
                arguments.push(roomID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        Room: {

            // RECEIVE_MESSAGE

            /**
             /* u7
             /* RECEIVE_MESSAGE
             /*
             /* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
             * @param  {String} messageName
             * @param  {String} broadcastType
             * @param  {String} fromClientID
             * @param  {String} roomID
             * @param  {String} messageArg1
             * @param  {String} messageArg2
             * @param  {String} ...
             * @param  {String} messageArg<i>n</i>
             **/

            addMessageListener: function (messageName, broadcastType, fromClientID, roomID, ...attrs) {

                var message_id = "u7";
                var arguments = []
                arguments.push(messageName);
                arguments.push(broadcastType);
                arguments.push(fromClientID);
                arguments.push(roomID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u7
             /* RECEIVE_MESSAGE
             /*
             /* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
             * @param  {String} messageName
             * @param  {String} broadcastType
             * @param  {String} fromClientID
             * @param  {String} roomID
             * @param  {String} messageArg1
             * @param  {String} messageArg2
             * @param  {String} ...
             * @param  {String} messageArg<i>n</i>
             **/

            addMessageListener: function (messageName, broadcastType, fromClientID, roomID, ...attrs) {

                var message_id = "u7";
                var arguments = []
                arguments.push(messageName);
                arguments.push(broadcastType);
                arguments.push(fromClientID);
                arguments.push(roomID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        AttributeEvent: {

            // ROOM_ATTR_UPDATE

            /**
             /* u9
             /* ROOM_ATTR_UPDATE
             /*
             /* Reports a change to a room attribute. The clientID specifies the id of the client that changed the attribute. If the attribute was not changed by a client (as is the case when the server sets the attribute), clientID is empty.
             * @param  {String} roomID
             * @param  {String} clientID
             * @param  {String} attrName
             * @param  {String} attrVal
             **/

            UPDATE: function (roomID, clientID, attrName, attrVal) {

                var message_id = "u9";
                var arguments = []
                arguments.push(roomID);
                arguments.push(clientID);
                arguments.push(attrName);
                arguments.push(attrVal);
                this.sendS2C(message_id, arguments);

            },


            // SET_ROOM_ATTR_RESULT

            /**
             /* u74
             /* SET_ROOM_ATTR_RESULT
             /*
             /* Reports the result of a request to change a room attribute.
             * @param  {String} roomID
             * @param  {String} attrName
             * @param  {String} status
             **/

            SET_RESULT: function (roomID, attrName, status) {

                var message_id = "u74";
                var arguments = []
                arguments.push(roomID);
                arguments.push(attrName);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // CLIENT_ATTR_REMOVED

            /**
             /* u81
             /* CLIENT_ATTR_REMOVED
             /*
             /* Reports the removal of a client attribute.
             * @param  {String} roomID
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} attrName
             * @param  {String} attrOptions
             **/

            DELETE: function (roomID, clientID, userID, attrName, attrOptions) {

                var message_id = "u81";
                var arguments = []
                arguments.push(roomID);
                arguments.push(clientID);
                arguments.push(userID);
                arguments.push(attrName);
                arguments.push(attrOptions);
                this.sendS2C(message_id, arguments);

            },


            // REMOVE_CLIENT_ATTR_RESULT

            /**
             /* u82
             /* REMOVE_CLIENT_ATTR_RESULT
             /*
             /* Reports the result of a request to remove a client attribute.
             * @param  {String} roomID
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} attrName
             * @param  {String} attrOptions
             * @param  {String} status
             **/

            DELETE_RESULT: function (roomID, clientID, userID, attrName, attrOptions, status) {

                var message_id = "u82";
                var arguments = []
                arguments.push(roomID);
                arguments.push(clientID);
                arguments.push(userID);
                arguments.push(attrName);
                arguments.push(attrOptions);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


        },
        None: {

            // CLIENT_METADATA

            /**
             /* u29
             /* CLIENT_METADATA
             /*
             /* Provides each connecting client with its initial setup information.
             * @param  {String} clientID
             **/

            //This UPC is handled internally

            clientMetaData: function (clientID) {

                var message_id = "u29";
                var arguments = []
                arguments.push(clientID);
                this.sendS2C(message_id, arguments);

            },


        },
        RoomManagerEvent: {

            // CREATE_ROOM_RESULT

            /**
             /* u32
             /* CREATE_ROOM_RESULT
             /*
             /* Reports the result of a room-creation attempt to the client.
             * @param  {String} roomID
             * @param  {String} status
             **/

            CREATE_ROOM_RESULT: function (roomID, status) {

                var message_id = "u32";
                var arguments = []
                arguments.push(roomID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // REMOVE_ROOM_RESULT

            /**
             /* u33
             /* REMOVE_ROOM_RESULT
             /*
             /* Reports the result of a room-removal attempt to the client.
             * @param  {String} roomID
             * @param  {String} status
             **/

            REMOVE_ROOM_RESULT: function (roomID, status) {

                var message_id = "u33";
                var arguments = []
                arguments.push(roomID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // ROOM_ADDED

            /**
             /* u39
             /* ROOM_ADDED
             /*
             /* Reports that the specified room was added. Sent to clients watching the specified room's qualifier. See u26.
             * @param  {String} roomID
             **/

            ROOM_ADDED: function (roomID) {

                var message_id = "u39";
                var arguments = []
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // ROOM_REMOVED

            /**
             /* u40
             /* ROOM_REMOVED
             /*
             /* Reports that the specified room was removed. Sent to clients watching the specified room's qualifier. See u26. Also sent to clients in or observing a room when the room is removed (regardless of their update levels). Note that clients do not receive separate u37 (CLIENT_REMOVED) notifications for clients that are forced out of a room when it is removed.
             * @param  {String} roomID
             **/

            ROOM_REMOVED: function (roomID) {

                var message_id = "u40";
                var arguments = []
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // WATCH_FOR_ROOMS_RESULT

            /**
             /* u42
             /* WATCH_FOR_ROOMS_RESULT
             /*
             /* Reports the result of a u26 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
             * @param  {String} roomIdQualifier
             * @param  {String} recursive
             * @param  {String} status
             **/

            WATCH_FOR_ROOMS_RESULT: function (roomIdQualifier, recursive, status) {

                var message_id = "u42";
                var arguments = []
                arguments.push(roomIdQualifier);
                arguments.push(recursive);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // STOP_WATCHING_FOR_ROOMS_RESULT

            /**
             /* u43
             /* STOP_WATCHING_FOR_ROOMS_RESULT
             /*
             /* Reports the result of a u27 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
             * @param  {String} roomIdQualifier
             * @param  {String} recursive
             * @param  {String} status
             **/

            STOP_WATCHING_FOR_ROOMS_RESULT: function (roomIdQualifier, recursive, status) {

                var message_id = "u43";
                var arguments = []
                arguments.push(roomIdQualifier);
                arguments.push(recursive);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


        },
        ClientCountSnapshot: {

            // CLIENTCOUNT_SNAPSHOT

            /**
             /* u34
             /* CLIENTCOUNT_SNAPSHOT
             /*
             /* Reports the number of clients on the server.
             * @param  {String} requestID
             * @param  {String} numClients
             **/

            ClientCountSnapshot: function (requestID, numClients) {

                var message_id = "u34";
                var arguments = []
                arguments.push(requestID);
                arguments.push(numClients);
                this.sendS2C(message_id, arguments);

            },


        },
        RoomManagerEvent: {

            // ROOMLIST_SNAPSHOT

            /**
             /* u38
             /* ROOMLIST_SNAPSHOT
             /*
             /* Provides a list of rooms on the server. A u38 is sent in response to u21 and u26. The requestedRoomIDQualifier and recursive arguments are the original values supplied to the call that generated the room list.
             * @param  {String} requestID
             * @param  {String} requestedRoomIDQualifier
             * @param  {String} recursive
             * @param  {String} roomIDQualifier1
             * @param  {String} roomID1 [RS] roomID2 [RS] ...roomID
             * @param  {String} roomIDQualifier2
             * @param  {String} roomID1 [RS] roomID2 [RS] ...roomID
             * @param  {String} ...
             * @param  {String} roomIDQualifier
             * @param  {String} roomID1 [RS] roomID2 [RS] ...roomID
             **/

            ROOM_ADDED: function (requestID, requestedRoomIDQualifier, recursive, ...attrs) {

                var message_id = "u38";
                var arguments = []
                arguments.push(requestID);
                arguments.push(requestedRoomIDQualifier);
                arguments.push(recursive);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u38
             /* ROOMLIST_SNAPSHOT
             /*
             /* Provides a list of rooms on the server. A u38 is sent in response to u21 and u26. The requestedRoomIDQualifier and recursive arguments are the original values supplied to the call that generated the room list.
             * @param  {String} requestID
             * @param  {String} requestedRoomIDQualifier
             * @param  {String} recursive
             * @param  {String} roomIDQualifier1
             * @param  {String} roomID1 [RS] roomID2 [RS] ...roomID
             * @param  {String} roomIDQualifier2
             * @param  {String} roomID1 [RS] roomID2 [RS] ...roomID
             * @param  {String} ...
             * @param  {String} roomIDQualifier
             * @param  {String} roomID1 [RS] roomID2 [RS] ...roomID
             **/

            ROOM_REMOVED: function (requestID, requestedRoomIDQualifier, recursive, ...attrs) {

                var message_id = "u38";
                var arguments = []
                arguments.push(requestID);
                arguments.push(requestedRoomIDQualifier);
                arguments.push(recursive);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        AccountEvent: {

            // CHANGE_ACCOUNT_PASSWORD_RESULT

            /**
             /* u46
             /* CHANGE_ACCOUNT_PASSWORD_RESULT
             /*
             /* Reports the result of an attempt to change the password for the account specified by userID. See u13.
             * @param  {String} userID
             * @param  {String} status
             **/

            CHANGE_PASSWORD_RESULT: function (userID, status) {

                var message_id = "u46";
                var arguments = []
                arguments.push(userID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // LOGIN_RESULT

            /**
             /* u49
             /* LOGIN_RESULT
             /*
             /* Reports the result of a login attempt made by the receiving client. See u14.
             * @param  {String} userID
             * @param  {String} status
             **/

            LOGIN_RESULT: function (userID, status) {

                var message_id = "u49";
                var arguments = []
                arguments.push(userID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // LOGOFF_RESULT

            /**
             /* u87
             /* LOGOFF_RESULT
             /*
             /* Reports the result of an attempt to log off the client with the specified userID. See u86.
             * @param  {String} userID
             * @param  {String} status
             **/

            LOGOFF_RESULT: function (userID, status) {

                var message_id = "u87";
                var arguments = []
                arguments.push(userID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // LOGGED_IN

            /**
             /* u88
             /* LOGGED_IN
             /*
             /* Informs the recipient that the client with the specified clientID has logged into the account with the specified userID. See u14. Depending on the recipient's awareness of the logged in account, 'the' u88 message includes the account's persistent attributes according to the following rules:If the recipient is observing the client with the specified clientID (see u95): global attributes and room attributes are included. If the recipient is observing the account with the specified userID (see u121): global attributes are included; room attributes are not included. If the recipient is watching for clients (see u92): no attributes are loaded. If the recipient is in or observing a room that the specified client is also in or observing: global attributes and attributes scoped to that room are included in accordance with the recipient's update levels for the room. If the recipient is the client that is logging in: global attributes are included; room-scoped attributes are not included
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} globalAttrName1[RS]globalAttrValue1[RS]globalAttrOptions1 [RS] globalAttrName<i>n</i>[RS]globalAttrValue<i>n</i>[RS]globalAttrOptions<i>n</i>
             * @param  {String} roomID1
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             * @param  {String} ...
             * @param  {String} roomIDn
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             **/

            LOGGED_IN: function (clientID, userID, ...attrs) {

                var message_id = "u88";
                var arguments = []
                arguments.push(clientID);
                arguments.push(userID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // LOGGED_OFF

            /**
             /* u89
             /* LOGGED_OFF
             /*
             /* Informs the recipient that the client with the specified clientID has logged off of the account with the specified userID. That client will also subsequently be disconnected. See u86.
             * @param  {String} clientID
             * @param  {String} userID
             **/

            LOGGED_OFF: function (clientID, userID) {

                var message_id = "u89";
                var arguments = []
                arguments.push(clientID);
                arguments.push(userID);
                this.sendS2C(message_id, arguments);

            },


            // ACCOUNT_PASSWORD_CHANGED

            /**
             /* u90
             /* ACCOUNT_PASSWORD_CHANGED
             /*
             /* Informs the receiving client that its password has been changed. See u13.
             **/

            ACCOUNT_PASSWORD_CHANGED: function () {

                var message_id = "u90";
                var arguments = []
                this.sendS2C(message_id, arguments);

            },


            // OBSERVE_ACCOUNT_RESULT

            /**
             /* u123
             /* OBSERVE_ACCOUNT_RESULT
             /*
             /* Reports the result of a user-account observation attempt (u121) made by the recipient. If status is SUCCESS, the client is also sent a separate u124 message.
             * @param  {String} userID
             * @param  {String} status
             **/

            OBSERVE_RESULT: function (userID, status) {

                var message_id = "u123";
                var arguments = []
                arguments.push(userID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // ACCOUNT_OBSERVED

            /**
             /* u124
             /* ACCOUNT_OBSERVED
             /*
             /* Informs the recipient that it started observing the specified user account.
             * @param  {String} userID
             **/

            OBSERVE: function (userID) {

                var message_id = "u124";
                var arguments = []
                arguments.push(userID);
                this.sendS2C(message_id, arguments);

            },


            // STOP_OBSERVING_ACCOUNT_RESULT

            /**
             /* u125
             /* STOP_OBSERVING_ACCOUNT_RESULT
             /*
             /* Reports the result of an attempt by the recipient to stop observing the specified user account (see u122). If status is SUCCESS, the client is also sent a separate u126 message.
             * @param  {String} userID
             * @param  {String} status
             **/

            STOP_OBSERVING_RESULT: function (userID, status) {

                var message_id = "u125";
                var arguments = []
                arguments.push(userID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // STOPPED_OBSERVING_ACCOUNT

            /**
             /* u126
             /* STOPPED_OBSERVING_ACCOUNT
             /*
             /* Informs the recipient that it stopped observing the specified user account.
             * @param  {String} userID
             **/

            STOP_OBSERVING: function (userID) {

                var message_id = "u126";
                var arguments = []
                arguments.push(userID);
                this.sendS2C(message_id, arguments);

            },


            // ADD_ROLE_RESULT

            /**
             /* u134
             /* ADD_ROLE_RESULT
             /*
             /* Reports the result of an add-role attempt (u133) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
             * @param  {String} userID
             * @param  {String} role
             * @param  {String} status
             **/

            ADD_ROLE_RESULT: function (userID, role, status) {

                var message_id = "u134";
                var arguments = []
                arguments.push(userID);
                arguments.push(role);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // REMOVE_ROLE_RESULT

            /**
             /* u136
             /* REMOVE_ROLE_RESULT
             /*
             /* Reports the result of a remove-role attempt (u135) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
             * @param  {String} userID
             * @param  {String} role
             * @param  {String} status
             **/

            REMOVE_ROLE_RESULT: function (userID, role, status) {

                var message_id = "u136";
                var arguments = []
                arguments.push(userID);
                arguments.push(role);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


        },
        AccountManagerEvent: {

            // CREATE_ACCOUNT_RESULT

            /**
             /* u47
             /* CREATE_ACCOUNT_RESULT
             /*
             /* Reports the result of an attempt to create the client account specified by userID. See u11.
             * @param  {String} userID
             * @param  {String} status
             **/

            CREATE_ACCOUNT_RESULT: function (userID, status) {

                var message_id = "u47";
                var arguments = []
                arguments.push(userID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // REMOVE_ACCOUNT_RESULT

            /**
             /* u48
             /* REMOVE_ACCOUNT_RESULT
             /*
             /* Reports the result of an attempt to remove (delete) the client account specified by userID. See u12.
             * @param  {String} userID
             * @param  {String} status
             **/

            REMOVE_ACCOUNT_RESULT: function (userID, status) {

                var message_id = "u48";
                var arguments = []
                arguments.push(userID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // WATCH_FOR_ACCOUNTS_RESULT

            /**
             /* u109
             /* WATCH_FOR_ACCOUNTS_RESULT
             /*
             /* Reports the result of a WATCH_FOR_ACCOUNTS (u98) request made by the recipient.
             * @param  {String} status
             **/

            WATCH_FOR_ACCOUNTS_RESULT: function (status) {

                var message_id = "u109";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // STOP_WATCHING_FOR_ACCOUNTS_RESULT

            /**
             /* u110
             /* STOP_WATCHING_FOR_ACCOUNTS_RESULT
             /*
             /* Reports the result of a STOP_WATCHING_FOR_ACCOUNTS (u99) request made by the recipient.
             * @param  {String} status
             **/

            STOP_WATCHING_FOR_ACCOUNTS_RESULT: function (status) {

                var message_id = "u110";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // ACCOUNTLIST_SNAPSHOT

            /**
             /* u127
             /* ACCOUNTLIST_SNAPSHOT
             /*
             /* Provides a list of all user accounts currently registered on the server. See u97.
             * @param  {String} requestID
             * @param  {String} userID1 [RS] userID2 [RS]...userIDn
             **/

            ACCOUNT_ADDED: function (requestID, ...attrs) {

                var message_id = "u127";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // ACCOUNT_REMOVED

            /**
             /* u112
             /* ACCOUNT_REMOVED
             /*
             /* Informs the recipient that the user account with the specified userID was removed from the server. See u98.
             * @param  {String} userID
             **/

            ACCOUNT_REMOVED: function (userID) {

                var message_id = "u112";
                var arguments = []
                arguments.push(userID);
                this.sendS2C(message_id, arguments);

            },


        },
        ServerEvent: {

            // SERVER_TIME_UPDATE

            /**
             /* u50
             /* SERVER_TIME_UPDATE
             /*
             /* Reports the current time on the server, in UTC, using milliseconds-from-1970 format. See u19.
             * @param  {String} timeOnServer
             **/

            TIME_SYNC: function (timeOnServer) {

                var message_id = "u50";
                var arguments = []
                arguments.push(timeOnServer);
                this.sendS2C(message_id, arguments);

            },


            // RESET_UPC_STATS_RESULT

            /**
             /* u158
             /* RESET_UPC_STATS_RESULT
             /*
             /* Reports the result of a RESET_UPC_STATS (u157) request made by the recipient.
             * @param  {String} status
             **/

            RESET_UPC_STATS_RESULT: function (status) {

                var message_id = "u158";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // WATCH_FOR_PROCESSED_UPCS_RESULT

            /**
             /* u160
             /* WATCH_FOR_PROCESSED_UPCS_RESULT
             /*
             /* Reports the result of a WATCH_FOR_PROCESSED_UPCS (u159) request made by the recipient.
             * @param  {String} status
             **/

            WATCH_FOR_PROCESSED_UPCS_RESULT: function (status) {

                var message_id = "u160";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // PROCESSED_UPC_ADDED

            /**
             /* u161
             /* PROCESSED_UPC_ADDED
             /*
             /* Informs the recipient that the server processed the UPC message specified by UPCSource. See u160. Any CDATA sections contained within UPCSource are escaped according to the rules described under 'Nested CDATA'
             * @param  {String} fromClientID
             * @param  {String} fromClientUserID
             * @param  {String} fromClientAddress
             * @param  {String} UPCProcessQueuedAt
             * @param  {String} UPCProcessStartedAt
             * @param  {String} UPCProcessFinishedAt
             * @param  {String} <![CDATA[UPCSource]]>
             **/

            UPC_PROCESSED: function (fromClientID, fromClientUserID, fromClientAddress, UPCProcessQueuedAt, UPCProcessStartedAt, UPCProcessFinishedAt, UPCSource) {

                var message_id = "u161";
                var arguments = []
                arguments.push(fromClientID);
                arguments.push(fromClientUserID);
                arguments.push(fromClientAddress);
                arguments.push(UPCProcessQueuedAt);
                arguments.push(UPCProcessStartedAt);
                arguments.push(UPCProcessFinishedAt);
                arguments.push(UPCSource);
                this.sendS2C(message_id, arguments);

            },


            // STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT

            /**
             /* u163
             /* STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT
             /*
             /* Reports the result of a STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT (u162) request made by the recipient.
             * @param  {String} status
             **/

            STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT: function (status) {

                var message_id = "u163";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


        },
        SnapshotEvent: {

            // GET_UPC_STATS_SNAPSHOT_RESULT

            /**
             /* u155
             /* GET_UPC_STATS_SNAPSHOT_RESULT
             /*
             /* Reports the result of a GET_UPC_STATS_SNAPSHOT (u154) request made by the recipient.
             * @param  {String} requestID
             * @param  {String} status
             **/

            STATUS: function (requestID, status) {

                var message_id = "u155";
                var arguments = []
                arguments.push(requestID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // SERVERMODULELIST_SNAPSHOT

            /**
             /* u152
             /* SERVERMODULELIST_SNAPSHOT
             /*
             /* Provides a list of server modules currently active on Union Server. A u152 is sent in response to u151.
             * @param  {String} requestID
             * @param  {String} serverModuleID1 [RS] serverModuleType1 [RS] serverModuleSource1 [RS]...serverModuleID [RS] serverModuleType [RS] serverModuleSource
             **/

            LOAD: function (requestID, ...attrs) {

                var message_id = "u152";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        UConnectionEvent: {

            // CLIENT_READY

            /**
             /* u63
             /* CLIENT_READY
             /*
             /* Informs the client that all setup tasks have completed and the client is ready for use.
             **/

            READY: function () {

                var message_id = "u63";
                var arguments = []
                this.sendS2C(message_id, arguments);

            },


        },
        ReactorEvent: {

            // SERVER_HELLO

            /**
             /* u66
             /* SERVER_HELLO
             /*
             /* SERVER_HELLO is the second step in the client-server connection process. It tells the client the server's version and protocol version, and provides the client with a server-side session ID used to identify the connection. If the server determines the client to be unacceptably protocol-incompatible, the server will automatically disconnect the client. For compatibility details, see u65. The affinityAddress indicates the server's public address. When affinityAddress is provided, clients must send all communications to that address for the specified affinityDuration, which is given in minutes. Union Platform's affinity system ensures that a given client will connect to a specific Union Server node in a cluster for a specified duration, as is required in load-balanced configurations.
             * @param  {String} serverVersion
             * @param  {String} sessionID
             * @param  {String} upcVersion
             * @param  {String} protocolCompatible
             * @param  {String} affinityAddress
             * @param  {String} affinityDuration
             **/

            PROTOCOL_INCOMPATIBLE: function (serverVersion, sessionID, upcVersion, protocolCompatible, affinityAddress, affinityDuration) {

                var message_id = "u66";
                var arguments = []
                arguments.push(serverVersion);
                arguments.push(sessionID);
                arguments.push(upcVersion);
                arguments.push(protocolCompatible);
                arguments.push(affinityAddress);
                arguments.push(affinityDuration);
                this.sendS2C(message_id, arguments);

            },


            // CONNECTION_REFUSED

            /**
             /* u164
             /* CONNECTION_REFUSED
             /*
             /* Indicates that Union Server refused the requested client connection, 'typically' because the client's address is banned. The reason argument indicates why the client connection was refused. The value of reason is either one of the following known refusal-reason codes, or an arbitrary string supplied by custom module code. BANNED. The description argument explains the cause of the refusal. The value of description is either given in one of the following known refusal-description formats, or is an arbitrary string supplied by custom module code. bannedAt|banDuration|banReason|bannedAt<br>The time at which the recipient client's address was banned by Union Server, 'in' milliseconds-from-1970 format, 'UTC' time, 'according' to the server's clock. banDuration. The length of the ban, in seconds. banReason <br>The cause of the ban on this client's address, 'as' an arbitrary string. For example: 'You were banned for inappropriate use of language'
             * @param  {String} reason
             * @param  {String} description
             **/

            CONNECT_REFUSED: function (reason, description) {

                var message_id = "u164";
                var arguments = []
                arguments.push(reason);
                arguments.push(description);
                this.sendS2C(message_id, arguments);

            },


        },
        ClientManagerEvent: {

            // CLIENT_ADDED_TO_SERVER

            /**
             /* u102
             /* CLIENT_ADDED_TO_SERVER
             /*
             /* Informs the recipient that the client with the specified clientID has connected to the server. See u92.
             * @param  {String} clientID
             **/

            CLIENT_CONNECTED: function (clientID) {

                var message_id = "u102";
                var arguments = []
                arguments.push(clientID);
                this.sendS2C(message_id, arguments);

            },


            // CLIENT_REMOVED_FROM_SERVER

            /**
             /* u103
             /* CLIENT_REMOVED_FROM_SERVER
             /*
             /* Informs the recipient that the client with the specified clientID has disconnected from the server. See u92.
             * @param  {String} clientID
             **/

            CLIENT_DISCONNECTED: function (clientID) {

                var message_id = "u103";
                var arguments = []
                arguments.push(clientID);
                this.sendS2C(message_id, arguments);

            },


            // WATCH_FOR_CLIENTS_RESULT

            /**
             /* u107
             /* WATCH_FOR_CLIENTS_RESULT
             /*
             /* Reports the result of a WATCH_FOR_CLIENTS (u92) request made by the recipient.
             * @param  {String} status
             **/

            WATCH_FOR_CLIENTS_RESULT: function (status) {

                var message_id = "u107";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // STOP_WATCHING_FOR_CLIENTS_RESULT

            /**
             /* u108
             /* STOP_WATCHING_FOR_CLIENTS_RESULT
             /*
             /* Reports the result of a STOP_WATCHING_FOR_CLIENTS (u93) request made by the recipient.
             * @param  {String} status
             **/

            STOP_WATCHING_FOR_CLIENTS_RESULT: function (status) {

                var message_id = "u108";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // BAN_RESULT

            /**
             /* u138
             /* BAN_RESULT
             /*
             /* Reports the result of a ban attempt (u137) made by the recipient. If status is SUCCESS, connection attempts by any client at the specified address are refused by Union Server. If the original u137 included a clientID and no address, that clientID is returned via u138's clientID.
             * @param  {String} address
             * @param  {String} clientID
             * @param  {String} status
             **/

            BAN_RESULT: function (address, clientID, status) {

                var message_id = "u138";
                var arguments = []
                arguments.push(address);
                arguments.push(clientID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // UNBAN_RESULT

            /**
             /* u140
             /* UNBAN_RESULT
             /*
             /* Reports the result of an unban attempt (u137) made by the recipient. If status is SUCCESS, 'any' previous connection ban on the specified address is lifted.
             * @param  {String} address
             * @param  {String} status
             **/

            UNBAN_RESULT: function (address, status) {

                var message_id = "u140";
                var arguments = []
                arguments.push(address);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // BANNED_LIST_SNAPSHOT

            /**
             /* u142
             /* BANNED_LIST_SNAPSHOT
             /*
             /* Provides a list of addresses currently banned from connecting to the server. A u142 is sent in response to u141 and u143.
             * @param  {String} requestID
             * @param  {String} address1 [RS] address2 [RS] ...address
             **/

            SYNCHRONIZE_BANLIST: function (requestID, ...attrs) {

                var message_id = "u142";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // WATCH_FOR_BANNED_ADDRESSES_RESULT

            /**
             /* u144
             /* WATCH_FOR_BANNED_ADDRESSES_RESULT
             /*
             /* Reports the result of a WATCH_FOR_BANNED_ADDRESSES (u143) request made by the recipient.
             * @param  {String} status
             **/

            WATCH_FOR_BANNED_ADDRESSES_RESULT: function (status) {

                var message_id = "u144";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT

            /**
             /* u146
             /* STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT
             /*
             /* Reports the result of a STOP_WATCHING_FOR_BANNED_ADDRESSES (u145) request made by the recipient.
             * @param  {String} status
             **/

            STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT: function (status) {

                var message_id = "u146";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // BANNED_ADDRESS_ADDED

            /**
             /* u147
             /* BANNED_ADDRESS_ADDED
             /*
             /* Informs the recipient that the specified address has been banned from connecting to the server. See u143.
             * @param  {String} address
             **/

            ADDRESS_BANNED: function (address) {

                var message_id = "u147";
                var arguments = []
                arguments.push(address);
                this.sendS2C(message_id, arguments);

            },


            // BANNED_ADDRESS_REMOVED

            /**
             /* u148
             /* BANNED_ADDRESS_REMOVED
             /*
             /* Informs the recipient that the specified address has been unbanned. See u143.
             * @param  {String} address
             **/

            ADDRESS_UNBANNED: function (address) {

                var message_id = "u148";
                var arguments = []
                arguments.push(address);
                this.sendS2C(message_id, arguments);

            },


            // KICK_CLIENT_RESULT

            /**
             /* u150
             /* KICK_CLIENT_RESULT
             /*
             /* Reports the result of a KICK_CLIENT (u149) request made by the recipient.
             * @param  {String} status
             **/

            KICK_RESULT: function (status) {

                var message_id = "u150";
                var arguments = []
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


        },
        ClientManagerEvent: {

            // CLIENTLIST_SNAPSHOT

            /**
             /* u101
             /* CLIENTLIST_SNAPSHOT
             /*
             /* Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
             * @param  {String} requestID
             * @param  {String} clientID1 [RS] userID1 [RS] clientID2 [RS] userID2 [RS]...clientIDn [RS] userIDn
             **/

            CLIENT_CONNECTED: function (requestID, ...attrs) {

                var message_id = "u101";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u101
             /* CLIENTLIST_SNAPSHOT
             /*
             /* Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
             * @param  {String} requestID
             * @param  {String} clientID1 [RS] userID1 [RS] clientID2 [RS] userID2 [RS]...clientIDn [RS] userIDn
             **/

            CLIENT_DISCONNECTED: function (requestID, ...attrs) {

                var message_id = "u101";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                upc_message = this.config.upc_template;
                upc_message.U.M = message_id;
                upc_message.U.L.A = arguments;
                var upc_message_final = this.secureMessage(upc_message);
                var socket = this.getSocket();
                socket.emit("upc", upc_message_final);

            },


            // CLIENTLIST_SNAPSHOT

            /**
             /* u101
             /* CLIENTLIST_SNAPSHOT
             /*
             /* Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
             * @param  {String} requestID
             * @param  {String} clientID1 [RS] userID1 [RS] clientID2 [RS] userID2 [RS]...clientIDn [RS] userIDn
             **/

            CLIENT_CONNECTED: function (requestID, ...attrs) {

                var message_id = "u101";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u101
             /* CLIENTLIST_SNAPSHOT
             /*
             /* Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
             * @param  {String} requestID
             * @param  {String} clientID1 [RS] userID1 [RS] clientID2 [RS] userID2 [RS]...clientIDn [RS] userIDn
             **/

            CLIENT_DISCONNECTED: function (requestID, ...attrs) {

                var message_id = "u101";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u101
             /* CLIENTLIST_SNAPSHOT
             /*
             /* Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
             * @param  {String} requestID
             * @param  {String} clientID1 [RS] userID1 [RS] clientID2 [RS] userID2 [RS]...clientIDn [RS] userIDn
             **/

            SYNCHRONIZE: function (requestID, ...attrs) {

                var message_id = "u101";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        ClientEvent: {

            // CLIENT_SNAPSHOT

            /**
             /* u104
             /* CLIENT_SNAPSHOT
             /*
             /* Provides a manifest describing the state of the specified client (and user account, 'in' the case of logged-in clients). See u94, u95, and u100. The content of the manifest is limited by the receiving client's security privileges.
             * @param  {String} requestID
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} occupiedRoom1 [RS] occupiedRoomID2 [RS] ...occupiedRoomIDn
             * @param  {String} observedRoom1 [RS] observedRoomID2 [RS] ...observedRoomIDn
             * @param  {String} globalAttrName1[RS]globalAttrValue1[RS]globalAttrOptions1 [RS] globalAttrName<i>n</i>[RS]globalAttrValue<i>n</i>[RS]globalAttrOptions<i>n</i>
             * @param  {String} roomID1
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             * @param  {String} ...
             * @param  {String} roomIDn
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             **/

            SYNCHRONIZE: function (requestID, clientID, userID, ...attrs) {

                var message_id = "u104";
                var arguments = []
                arguments.push(requestID);
                arguments.push(clientID);
                arguments.push(userID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // OBSERVE_CLIENT_RESULT

            /**
             /* u105
             /* OBSERVE_CLIENT_RESULT
             /*
             /* Reports the result of a client observation attempt (u95) made by the recipient. If status is SUCCESS, the client is also sent a separate u119 message.
             * @param  {String} clientID
             * @param  {String} status
             **/

            OBSERVE_RESULT: function (clientID, status) {

                var message_id = "u105";
                var arguments = []
                arguments.push(clientID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // STOP_OBSERVING_CLIENT_RESULT

            /**
             /* u106
             /* STOP_OBSERVING_CLIENT_RESULT
             /*
             /* Reports the result of an attempt by the recipient to stop observing the specified client (see u96). If status is SUCCESS, the client is also sent a separate u120 message.
             * @param  {String} clientID
             * @param  {String} status
             **/

            STOP_OBSERVING_RESULT: function (clientID, status) {

                var message_id = "u106";
                var arguments = []
                arguments.push(clientID);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // JOINED_ROOM_ADDED_TO_CLIENT

            /**
             /* u113
             /* JOINED_ROOM_ADDED_TO_CLIENT
             /*
             /* Informs the recipient that the specified client joined the specified room.
             * @param  {String} clientID
             * @param  {String} roomID
             **/

            JOIN_ROOM: function (clientID, roomID) {

                var message_id = "u113";
                var arguments = []
                arguments.push(clientID);
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // JOINED_ROOM_REMOVED_FROM_CLIENT

            /**
             /* u114
             /* JOINED_ROOM_REMOVED_FROM_CLIENT
             /*
             /* Informs the recipient that the specified client left the specified room.
             * @param  {String} clientID
             * @param  {String} roomID
             **/

            LEAVE_ROOM: function (clientID, roomID) {

                var message_id = "u114";
                var arguments = []
                arguments.push(clientID);
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // OBSERVED_ROOM_ADDED_TO_CLIENT

            /**
             /* u117
             /* OBSERVED_ROOM_ADDED_TO_CLIENT
             /*
             /* Informs the recipient that the specified client observed the specified room.
             * @param  {String} clientID
             * @param  {String} roomID
             **/

            OBSERVE_ROOM: function (clientID, roomID) {

                var message_id = "u117";
                var arguments = []
                arguments.push(clientID);
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // OBSERVED_ROOM_REMOVED_FROM_CLIENT

            /**
             /* u118
             /* OBSERVED_ROOM_REMOVED_FROM_CLIENT
             /*
             /* Informs the recipient that the specified client stopped observing the specified room.
             * @param  {String} clientID
             * @param  {String} roomID
             **/

            STOP_OBSERVING_ROOM: function (clientID, roomID) {

                var message_id = "u118";
                var arguments = []
                arguments.push(clientID);
                arguments.push(roomID);
                this.sendS2C(message_id, arguments);

            },


            // CLIENT_OBSERVED

            /**
             /* u119
             /* CLIENT_OBSERVED
             /*
             /* Informs the recipient that it started observing the specified client.
             * @param  {String} clientID
             **/

            OBSERVE: function (clientID) {

                var message_id = "u119";
                var arguments = []
                arguments.push(clientID);
                this.sendS2C(message_id, arguments);

            },


            // STOPPED_OBSERVING_CLIENT

            /**
             /* u120
             /* STOPPED_OBSERVING_CLIENT
             /*
             /* Informs the recipient that it stopped observing the specified client.
             * @param  {String} clientID
             **/

            STOP_OBSERVING: function (clientID) {

                var message_id = "u120";
                var arguments = []
                arguments.push(clientID);
                this.sendS2C(message_id, arguments);

            },


        },
        AccountEvent: {

            // CLIENT_SNAPSHOT

            /**
             /* u104
             /* CLIENT_SNAPSHOT
             /*
             /* Provides a manifest describing the state of the specified client (and user account, 'in' the case of logged-in clients). See u94, u95, and u100. The content of the manifest is limited by the receiving client's security privileges.
             * @param  {String} requestID
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} occupiedRoom1 [RS] occupiedRoomID2 [RS] ...occupiedRoomIDn
             * @param  {String} observedRoom1 [RS] observedRoomID2 [RS] ...observedRoomIDn
             * @param  {String} globalAttrName1[RS]globalAttrValue1[RS]globalAttrOptions1 [RS] globalAttrName<i>n</i>[RS]globalAttrValue<i>n</i>[RS]globalAttrOptions<i>n</i>
             * @param  {String} roomID1
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             * @param  {String} ...
             * @param  {String} roomIDn
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             **/

            SYNCHRONIZE: function (requestID, clientID, userID, ...attrs) {

                var message_id = "u104";
                var arguments = []
                arguments.push(requestID);
                arguments.push(clientID);
                arguments.push(userID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u104
             /* CLIENT_SNAPSHOT
             /*
             /* Provides a manifest describing the state of the specified client (and user account, 'in' the case of logged-in clients). See u94, u95, and u100. The content of the manifest is limited by the receiving client's security privileges.
             * @param  {String} requestID
             * @param  {String} clientID
             * @param  {String} userID
             * @param  {String} occupiedRoom1 [RS] occupiedRoomID2 [RS] ...occupiedRoomIDn
             * @param  {String} observedRoom1 [RS] observedRoomID2 [RS] ...observedRoomIDn
             * @param  {String} globalAttrName1[RS]globalAttrValue1[RS]globalAttrOptions1 [RS] globalAttrName<i>n</i>[RS]globalAttrValue<i>n</i>[RS]globalAttrOptions<i>n</i>
             * @param  {String} roomID1
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             * @param  {String} ...
             * @param  {String} roomIDn
             * @param  {String} roomAttrName1[RS]roomAttrValue1[RS]roomAttrOptions1 [RS] roomAttrName<i>n</i>[RS]roomAttrValue<i>n</i>[RS]roomAttrOptions<i>n</i>
             **/

            SYNCHRONIZE: function (requestID, clientID, userID, ...attrs) {

                var message_id = "u104";
                var arguments = []
                arguments.push(requestID);
                arguments.push(clientID);
                arguments.push(userID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // ADD_ROLE_RESULT

            /**
             /* u134
             /* ADD_ROLE_RESULT
             /*
             /* Reports the result of an add-role attempt (u133) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
             * @param  {String} userID
             * @param  {String} role
             * @param  {String} status
             **/

            ADD_ROLE_RESULT: function (userID, role, status) {

                var message_id = "u134";
                var arguments = []
                arguments.push(userID);
                arguments.push(role);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u134
             /* ADD_ROLE_RESULT
             /*
             /* Reports the result of an add-role attempt (u133) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
             * @param  {String} userID
             * @param  {String} role
             * @param  {String} status
             **/

            ROLE_ADDED: function (userID, role, status) {

                var message_id = "u134";
                var arguments = []
                arguments.push(userID);
                arguments.push(role);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            // REMOVE_ROLE_RESULT

            /**
             /* u136
             /* REMOVE_ROLE_RESULT
             /*
             /* Reports the result of a remove-role attempt (u135) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
             * @param  {String} userID
             * @param  {String} role
             * @param  {String} status
             **/

            REMOVE_ROLE_RESULT: function (userID, role, status) {

                var message_id = "u136";
                var arguments = []
                arguments.push(userID);
                arguments.push(role);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u136
             /* REMOVE_ROLE_RESULT
             /*
             /* Reports the result of a remove-role attempt (u135) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
             * @param  {String} userID
             * @param  {String} role
             * @param  {String} status
             **/

            ROLE_REMOVED: function (userID, role, status) {

                var message_id = "u136";
                var arguments = []
                arguments.push(userID);
                arguments.push(role);
                arguments.push(status);
                this.sendS2C(message_id, arguments);

            },


        },
        AccountManagerEvent: {

            // ACCOUNTLIST_SNAPSHOT

            /**
             /* u127
             /* ACCOUNTLIST_SNAPSHOT
             /*
             /* Provides a list of all user accounts currently registered on the server. See u97.
             * @param  {String} requestID
             * @param  {String} userID1 [RS] userID2 [RS]...userIDn
             **/

            ACCOUNT_ADDED: function (requestID, ...attrs) {

                var message_id = "u127";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u127
             /* ACCOUNTLIST_SNAPSHOT
             /*
             /* Provides a list of all user accounts currently registered on the server. See u97.
             * @param  {String} requestID
             * @param  {String} userID1 [RS] userID2 [RS]...userIDn
             **/

            ACCOUNT_REMOVED: function (requestID, ...attrs) {

                var message_id = "u127";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            // ACCOUNTLIST_SNAPSHOT

            /**
             /* u127
             /* ACCOUNTLIST_SNAPSHOT
             /*
             /* Provides a list of all user accounts currently registered on the server. See u97.
             * @param  {String} requestID
             * @param  {String} userID1 [RS] userID2 [RS]...userIDn
             **/

            ACCOUNT_ADDED: function (requestID, ...attrs) {

                var message_id = "u127";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u127
             /* ACCOUNTLIST_SNAPSHOT
             /*
             /* Provides a list of all user accounts currently registered on the server. See u97.
             * @param  {String} requestID
             * @param  {String} userID1 [RS] userID2 [RS]...userIDn
             **/

            ACCOUNT_REMOVED: function (requestID, ...attrs) {

                var message_id = "u127";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


            /**
             /* u127
             /* ACCOUNTLIST_SNAPSHOT
             /*
             /* Provides a list of all user accounts currently registered on the server. See u97.
             * @param  {String} requestID
             * @param  {String} userID1 [RS] userID2 [RS]...userIDn
             **/

            SYNCHRONIZE: function (requestID, ...attrs) {

                var message_id = "u127";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        UPCStatsSnapshot: {

            // UPC_STATS_SNAPSHOT

            /**
             /* u156
             /* UPC_STATS_SNAPSHOT
             /*
             /* Provides statistics about UPC messages received by Union Server. A u155 is sent in response to u154. Arguments following lastQueueWaitTime specify an unsorted list of the longest UPC message processing times since either Union Server was started or since the last UPC-statistics reset command (see u157).  Any CDATA sections contained within UPCSource fields are escaped according to the rules described under 'Nested CDATA'
             * @param  {String} requestID
             * @param  {String} totalUPCsProcessed
             * @param  {String} numUPCsInQueue
             * @param  {String} lastQueueWaitTime
             * @param  {String} fromClientID1 [RS] fromClientUserID1 [RS] fromClientAddress1 [RS] longestUPCProcessQueuedAt1 [RS] longestUPCProcessStartedAt1 [RS] longestUPCProcessFinishedAt1 [RS] UPCSource1
             * @param  {String} ...
             * @param  {String} &lt;![CDATA[ fromClientID [RS] fromClientUserID [RS] fromClientAddress [RS] longestUPCProcessQueuedAt [RS] longestUPCProcessStartedAt [RS] longestUPCProcessFinishedAt [RS] UPCSource
             **/

            UPCStatsSnapshot: function (requestID, totalUPCsProcessed, numUPCsInQueue, lastQueueWaitTime, ...attrs) {

                var message_id = "u156";
                var arguments = []
                arguments.push(requestID);
                arguments.push(totalUPCsProcessed);
                arguments.push(numUPCsInQueue);
                arguments.push(lastQueueWaitTime);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        NodeListSnapshot: {

            // NODELIST_SNAPSHOT

            /**
             /* u166
             /* NODELIST_SNAPSHOT
             /*
             /* Provides a list of IDs for the cluster nodes currently connected to the server. Each ID is an arbitrary, statistically unique string generated automatically by Union Server. A server's nodeID is guaranteed to be the same for a given server until that server shuts down. u166 is sent in response to u165.
             * @param  {String} requestID
             * @param  {String} nodeID1 [RS] nodeID2 [RS] ...nodeID
             **/

            NodeListSnapshot: function (requestID, ...attrs) {

                var message_id = "u166";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },
        GatewaysSnapshot: {

            // GATEWAYS_SNAPSHOT

            /**
             /* u168
             /* GATEWAYS_SNAPSHOT
             /*
             /* <p>Provides gateway statistics in response to u167.</p> <p>The list of NUM_CONNECTIONS_CATEGORYn gives the number of connections to the gateway, 'broken' down by connection type. Connection types are determined by each gateway. For example, 'the' built-in gateways for Adobe Flash clients include the connection types 'POLICYFILE' (for Flash policy file requests) and 'CLIENT' (for connections that are determined to be legitimate Union clients). For every gateway, 'one' of the categories in the NUM_CONNECTIONS_CATEGORYn list is always guaranteed to be 'TOTAL'. The 'TOTAL' connection category indicates the total raw number of lifetime connections to the specified gateway, 'including' all connection types.</p> <p>The list of NUM_CLIENTS_CLIENTTYPEn gives the number of Union clients that have connected to the gateway, 'broken' down by client type. For example, 'a' gateway might have had 150 Reactor (Flash) client connections and 35 Orbiter (JavaScript) client connections.</p> <p>The list of NUM_CLIENTS_UPCVERSION n gives the number of Union clients that have connected to the gateway, 'broken' down by UPC version. For example, 'a' gateway might have had 25 clients that used UPC version 1.4.0 and 40 clients that used UPC version 1.5.0.</p> <p>The 'lifetimeRead...' argument lists the gateway's bandwidth usage. All bandwidth statistics are given in bytes. Bandwidth averages are per second. Intervals are the most recent second at the time of the request.</p>
             * @param  {String} requestID
             * @param  {String} gatewayID1
             * @param  {String} gatewayType1
             * @param  {String} NUM_CONNECTIONS_CATEGORY1 [RS] NUM_CONNECTIONS_CATEGORY1_VALUE [RS]  NUM_CONNECTIONS_CATEGORY2 [RS] NUM_CONNECTIONS_CATEGORY2_VALUE [RS]  NUM_CONNECTIONS_CATEGORYn [RS] NUM_CONNECTIONS_CATEGORYn_VALUE
             * @param  {String} NUM_CLIENTS_CLIENTTYPE1 [RS] NUM_CLIENTS_CLIENTTYPE1_VALUE [RS]  NUM_CLIENTS_CLIENTTYPE2 [RS] NUM_CLIENTS_CLIENTTYPE2_VALUE [RS]  NUM_CLIENTS_CLIENTTYPEn [RS] NUM_CLIENTS_CLIENTTYPEn_VALUE
             * @param  {String} NUM_CLIENTS_UPCVERSION1 [RS] NUM_CLIENTS_UPCVERSION1_VALUE [RS]  NUM_CLIENTS_UPCVERSION2 [RS] NUM_CLIENTS_UPCVERSION2_VALUE [RS]  NUM_CLIENTS_UPCVERSIONn [RS] NUM_CLIENTS_UPCVERSIONn_VALUE
             * @param  {String} gateway1AttrName1  [RS]  gateway1AttrName1  [RS]  gateway1AttrName2  [RS]  gateway1AttrName2  [RS]  gateway1AttrNamen  [RS]  gateway1AttrNamen
             * @param  {String} connectionsPerSecond [RS] maxConnectionsPerSecond [RS] clientsPerSecond [RS] maxClientsPerSecond
             * @param  {String} lifetimeRead [RS] lifetimeWritten [RS] averageRead [RS] averageWritten [RS] intervalRead [RS] intervalWritten [RS] maxIntervalRead [RS] maxIntervalWritten [RS] scheduledWrite
             * @param  {String} gatewayID
             * @param  {String} gatewayType
             * @param  {String} NUM_CONNECTIONS_CATEGORY1 [RS] NUM_CONNECTIONS_CATEGORY1_VALUE [RS]  NUM_CONNECTIONS_CATEGORY2 [RS] NUM_CONNECTIONS_CATEGORY2_VALUE [RS]  NUM_CONNECTIONS_CATEGORYn [RS] NUM_CONNECTIONS_CATEGORYn_VALUE
             * @param  {String} NUM_CLIENTS_CLIENTTYPE1 [RS] NUM_CLIENTS_CLIENTTYPE1_VALUE [RS]  NUM_CLIENTS_CLIENTTYPE2 [RS] NUM_CLIENTS_CLIENTTYPE2_VALUE [RS]  NUM_CLIENTS_CLIENTTYPEn [RS] NUM_CLIENTS_CLIENTTYPEn_VALUE
             * @param  {String} NUM_CLIENTS_UPCVERSION1 [RS] NUM_CLIENTS_UPCVERSION1_VALUE [RS]  NUM_CLIENTS_UPCVERSION2 [RS] NUM_CLIENTS_UPCVERSION2_VALUE [RS]  NUM_CLIENTS_UPCVERSIONn [RS] NUM_CLIENTS_UPCVERSIONn_VALUE
             * @param  {String} gatewayAttrName1  [RS]  gatewayAttrName1  [RS]  gatewayAttrName2  [RS]  gatewayAttrName2  [RS]  gatewayAttrNamen  [RS]  gatewayAttrNamen
             * @param  {String} connectionsPerSecond [RS] maxConnectionsPerSecond [RS] clientsPerSecond [RS] maxClientsPerSecond
             * @param  {String} lifetimeRead [RS] lifetimeWritten [RS] averageRead [RS] averageWritten [RS] intervalRead [RS] intervalWritten [RS] maxIntervalRead [RS] maxIntervalWritten [RS] scheduledWrite
             **/

            GatewaysSnapshot: function (requestID, ...attrs) {

                var message_id = "u168";
                var arguments = []
                arguments.push(requestID);
                attrs.forEach(function (attr, index) {
                    arguments.push(attr);
                });
                this.sendS2C(message_id, arguments);

            },


        },

        sendS2C: function (message_id, arguments) {

            var upc_message = server_config.upc_template;
            upc_message.U.M = message_id;
            upc_message.U.L.A = arguments;
            if(server_config.encryptData){
                upc_message = upc_message; //TODO encrypt data hereui ii                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                9
            }
            server_socket.emit("upc", upc_message);

        }

    }

};