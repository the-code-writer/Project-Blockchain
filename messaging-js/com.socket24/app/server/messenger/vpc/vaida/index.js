#!/usr/bin/env node
'use strict';

module.exports.init = function (config, io, socket, sql, db, snippet) {
	
	let server_config = config;
	
	let server_io = io;
	
	let server_socket = socket;
	
	const C2S = require('../c2s').init(config, io, socket, sql, db, snippet);
	
	function serverSocketEmit(event, data) {
		
		let sendTo = data.sendTo;
		
		let upcData = data.upcData;
		
		switch (sendTo) {
			
			// Send to room
			case "ROOM" : {
				
				console.info("\nSEND_TO: ", sendTo, "\nSOCKET_ID: ", data.roomId, "\nEVENT_ID: ", event, " \nDATA: ", JSON.stringify(upcData), "\n");
				
				server_socket.broadcast.to(data.roomId).emit(event, upcData);
				break;
				
			}
			
			// Send to sender room
			case "SENDER_ROOM" : {
				
				console.info("\nSEND_TO: ", sendTo, "\nSOCKET_ID: ", data.roomId, "\nEVENT_ID: ", event, " \nDATA: ", JSON.stringify(upcData), "\n");
				server_io.sockets.in(data.roomId).emit(event, upcData);
				break;
				
			}
			
			// Send back to sender
			case "SENDER_SOCKET" : {
				
				console.info("\nSEND_TO: ", sendTo, "\nSOCKET_ID: ", data.socketId, "\nEVENT_ID: ", event, " \nDATA:" +
					" ", JSON.stringify(upcData), "\n");
				
				server_socket.emit(event, upcData);
				break;
				
			}
			
			// Same as SENDER_SOCKET. Send back to sender
			default : {
				
				server_socket.emit(event, upcData);
				break;
				
			}
			
		}
		
		
	}
	
	
	const ClientToServer = {
		
		
		/**
		/* u1
		/*
		/* SEND_MESSAGE_TO_ROOMS
		/*
		/* Asks the server to send a u7 with the specified messageName to all clients in the room list that pass the provided filter tests. The includeSelf argument is a Boolean indicating whether the message should be echoed to the sending client (assuming the sender is in the room list and passes the filter tests). If any of the rooms in the list is a room qualifier, the message is sent to all rooms qualified by that qualifier.
		/*Qualifiers in the room list must be formed using the * character; for example, "examples.*" means "the examples qualifier" whereas "examples" means the room named "examples". To send a message to all rooms qualified by the unnamed qualifier, use "*" for the room qualifier.
		/*The server sends separate u7 messages for every room in the room list. For example, if the room list is "chat1 [RS] chat2" and a client is in both "chat1" and "chat2", the client will receive u7 twice (once for each room).
		/*
		/* @param  {String} messageName
		/* @param  {String} roomIDorQualifiers
		/* @param  {String} includeSelf
		/* @param  {String} filters
		/* @param  {String} ...args
		 **/
		
		u1: function (messageName, roomIDorQualifiers, includeSelf, filters, ...args) {
			
			const root = this;
			
			let message_name = "SEND_MESSAGE_TO_ROOMS";
			
			let message_id = "u1";
			
			let message_args = {};
			
			message_args["messageName"] = messageName;
			message_args["roomIDorQualifiers"] = roomIDorQualifiers;
			message_args["includeSelf"] = includeSelf;
			message_args["filters"] = filters;
			message_args["args"] = args;
			
			C2S.SEND_MESSAGE_TO_ROOMS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u1 (SEND_MESSAGE_TO_ROOMS) is as follows:
				//The first message is u7
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u2
		/*
		/* SEND_MESSAGE_TO_CLIENTS
		/*
		/* Asks the server to send a u7 with the specified messageName to all clients in client list that pass the provided filter tests.
		/*
		/* @param  {String} messageName
		/* @param  {String} clientIDs
		/* @param  {String} filters
		/* @param  {String} ...args
		 **/
		
		u2: function (messageName, clientIDs, filters, ...args) {
			
			const root = this;
			
			let message_name = "SEND_MESSAGE_TO_CLIENTS";
			
			let message_id = "u2";
			
			let message_args = {};
			
			message_args["messageName"] = messageName;
			message_args["clientIDs"] = clientIDs;
			message_args["filters"] = filters;
			message_args["args"] = args;
			
			C2S.SEND_MESSAGE_TO_CLIENTS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u2 (SEND_MESSAGE_TO_CLIENTS) is as follows:
				//The first message is u7
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u57
		/*
		/* SEND_MESSAGE_TO_SERVER
		/*
		/* Asks the server to send a u7 with the specified messageName to all clients on the server that pass the provided filter tests. The includeSelf argument is a Boolean indicating whether the message should be echoed to the sending client.
		/*
		/* @param  {String} messageName
		/* @param  {String} includeSelf
		/* @param  {String} filters
		/* @param  {String} ...args
		 **/
		
		u57: function (messageName, includeSelf, filters, ...args) {
			
			const root = this;
			
			let message_name = "SEND_MESSAGE_TO_SERVER";
			
			let message_id = "u57";
			
			let message_args = {};
			
			message_args["messageName"] = messageName;
			message_args["includeSelf"] = includeSelf;
			message_args["filters"] = filters;
			message_args["args"] = args;
			
			C2S.SEND_MESSAGE_TO_SERVER(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u57 (SEND_MESSAGE_TO_SERVER) is as follows:
				//The first message is u7
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u3
		/*
		/* SET_CLIENT_ATTR
		/*
		/* Asks the server to set a client attribute for client specified by clientID or the user account specified by userID. If the persistent bit is set, the server sets the attribute on the specified userID's account; if not, the server sets the attribute on the specified client. The result of the request is returned to the sender via a u73. If the attribute is shared, any clients needing to be notified of the attribute assignment will receive a u8. When the sender sets one of its own attributes via u3, the new attribute value is echoed back to the sender in a u8 in the following situations only:
		/*The specified attrScope must be a room, and cannot be a qualifier; however, future versions of the UPC protocol might support qualifier-scoped attributes. The meanings of the "attrOptions" bits are as follows:
		/*The persistent bit is set. The evaluate bit is set. 0 - RESERVED. 1 - RESERVED. 2 - shared: interested clients will receive notification that the attribute changed. 3 - persistent: the attribute will be stored persistently in the account specified by userID, and will be available to any client that successfully logs into that account. 4 - RETIRED (formerly "unique"). 5 - RESERVED BY SERVER. 6 - RESERVED BY SERVER. 7 - RESERVED BY SERVER. 8 - evaluate: evaluate the supplied escapedAttrValue as a mathematical expression before assignment. Within escapedAttrValue, the token "%v" represents the attribute's current value. For example, "%v+1" means "increment by one". Supported mathematical operators are: *, /, +, -, %, ., (, and ). If the expression contains any character other than a number or one of the supported operators, the attribute assignment fails and the server responds with a u73 with status of EVALUATION_FAILED.
		/*
		/* @param  {String} clientID
		/* @param  {String} userID
		/* @param  {String} attrName
		/* @param  {String} escapedAttrValue
		/* @param  {String} attrScope
		/* @param  {String} ...attrOptions
		 **/
		
		u3: function (clientID, userID, attrName, escapedAttrValue, attrScope, ...attrOptions) {
			
			const root = this;
			
			let message_name = "SET_CLIENT_ATTR";
			
			let message_id = "u3";
			
			let message_args = {};
			
			message_args["clientID"] = clientID;
			message_args["userID"] = userID;
			message_args["attrName"] = attrName;
			message_args["escapedAttrValue"] = escapedAttrValue;
			message_args["attrScope"] = attrScope;
			message_args["attrOptions"] = attrOptions;
			
			C2S.SET_CLIENT_ATTR(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u3 (SET_CLIENT_ATTR) is as follows:
				//The first message is u73, followed by a series of u8
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u4
		/*
		/* JOIN_ROOM
		/*
		/* Asks the server to attempt to add the sender to the specified room. The result of attempting to join the room is returned to the sender via a u72. If the attempt is successful, the sender is also sent a u6, followed by updates for the room according to the sender's specified update levels (see u64). When a room is removed from the server, clients in that room receive a u44, but do not automatically receive notification that the room was removed. Clients wishing to be notified when a room is removed must register for notifications via WATCH_FOR_ROOMS.
		/*
		/* @param  {String} roomID
		/* @param  {String} password
		 **/
		
		u4: function (roomID, password) {
			
			const root = this;
			
			let message_name = "JOIN_ROOM";
			
			let message_id = "u4";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["password"] = password;
			
			C2S.JOIN_ROOM(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u4 (JOIN_ROOM) is as follows:
				//The first message is u72, followed by a series of u44
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u5
		/*
		/* SET_ROOM_ATTR
		/*
		/* Asks the server to set a room attribute for the specified room. The result of the request is returned to the sender via a u74. If the attribute is shared, any clients needing to be notified of the attribute assignment will receive a u9. The meanings of the "attrOptions" bits are as follows: 0 - RESERVED. 1 - RESERVED. 2 - shared: interested clients will receive notification that the attribute changed. 3 - persistent: the attribute will be stored persistently, and will be available across multiple server restarts. 4 - UNUSED. 5 - RESERVED BY SERVER. 6 - RESERVED BY SERVER. 7 - RESERVED BY SERVER. 8 - evaluate: evaluate the supplied escapedAttrValue as a mathematical expression before assignment. Within escapedAttrValue, the token "%v" represents the attribute's current value. For example, "%v+1" means "increment by one". Supported mathematical operators are: *, /, +, -, %, ., (, and ). If the expression contains any character other than a number or one of the supported operators, the attribute assignment fails and the server responds with a u74 with status of EVALUATION_FAILED.
		/*
		/* @param  {String} roomID
		/* @param  {String} attrName
		/* @param  {String} escapedAttrValue
		/* @param  {String} ...attrOptions
		 **/
		
		u5: function (roomID, attrName, escapedAttrValue, ...attrOptions) {
			
			const root = this;
			
			let message_name = "SET_ROOM_ATTR";
			
			let message_id = "u5";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["attrName"] = attrName;
			message_args["escapedAttrValue"] = escapedAttrValue;
			message_args["attrOptions"] = attrOptions;
			
			C2S.SET_ROOM_ATTR(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u5 (SET_ROOM_ATTR) is as follows:
				//The first message is u74, followed by a series of u9
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u10
		/*
		/* LEAVE_ROOM
		/*
		/* Asks the server to remove the sender from the specified room. The result of attempting to leave the room is returned to the sender via a u76. If the attempt is successful, the sender is also sent a u44.
		/*
		/* @param  {String} roomID
		 **/
		
		u10: function (roomID) {
			
			const root = this;
			
			let message_name = "LEAVE_ROOM";
			
			let message_id = "u10";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			
			C2S.LEAVE_ROOM(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u10 (LEAVE_ROOM) is as follows:
				//The first message is u76, followed by a series of u44
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u11
		/*
		/* CREATE_ACCOUNT
		/*
		/* Asks the server to create a new user account, used to store information permanently in a persistent data source such as a database. Results of the create-account attempt are returned via a u47.
		/*
		/* @param  {String} userID
		/* @param  {String} password
		 **/
		
		u11: function (userID, password) {
			
			const root = this;
			
			let message_name = "CREATE_ACCOUNT";
			
			let message_id = "u11";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			message_args["password"] = password;
			
			C2S.CREATE_ACCOUNT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u11 (CREATE_ACCOUNT) is as follows:
				//The first message is u47
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u12
		/*
		/* REMOVE_ACCOUNT
		/*
		/* Asks the server to remove the user account for the specified userID. Results of the remove-account attempt are returned via a u48.
		/*
		/* @param  {String} userID
		/* @param  {String} password
		 **/
		
		u12: function (userID, password) {
			
			const root = this;
			
			let message_name = "REMOVE_ACCOUNT";
			
			let message_id = "u12";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			message_args["password"] = password;
			
			C2S.REMOVE_ACCOUNT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u12 (REMOVE_ACCOUNT) is as follows:
				//The first message is u48
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u13
		/*
		/* CHANGE_ACCOUNT_PASSWORD
		/*
		/* Asks the server to change the specified userID's account password. Results of the change password attempt are returned via a u46. If the attempt succeeds, and a client is currently logged in under the specified userID, the server also sends a u90 to that client.
		/*
		/* @param  {String} userID
		/* @param  {String} oldPassword
		/* @param  {String} newPassword
		 **/
		
		u13: function (userID, oldPassword, newPassword) {
			
			const root = this;
			
			let message_name = "CHANGE_ACCOUNT_PASSWORD";
			
			let message_id = "u13";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			message_args["oldPassword"] = oldPassword;
			message_args["newPassword"] = newPassword;
			
			C2S.CHANGE_ACCOUNT_PASSWORD(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u13 (CHANGE_ACCOUNT_PASSWORD) is as follows:
				//The first message is u46, followed by a series of u90
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u14
		/*
		/* LOGIN
		/*
		/* Asks the server to login the sending client. Results of the login attempt are returned via a u49. If the attempt succeeds, the server also sends a u88 followed by a series of u8s containing the client's persistent attributes. If the userID specified for a u14 is already logged in under another client ID, the previous client is logged off and disconnected before the new login proceeds. Note that the sending client can ask to log in itself only; a u14 cannot be used to log in a foreign client.
		/*
		/* @param  {String} userID
		/* @param  {String} password
		 **/
		
		u14: function (userID, password) {
			
			const root = this;
			
			let message_name = "LOGIN";
			
			let message_id = "u14";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			message_args["password"] = password;
			
			C2S.LOGIN(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u14 (LOGIN) is as follows:
				//The first message is u49, followed by a series of u88,u8
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u18
		/*
		/* GET_CLIENTCOUNT_SNAPSHOT
		/*
		/* Asks the server to return the number of clients on the server.
		/*The result of a u18 request is returned to the sender via a u75. If the request is successful, the number of clients on the server is returned to the sender via a u34.
		/*
		/* @param  {String} requestID
		 **/
		
		u18: function (requestID) {
			
			const root = this;
			
			let message_name = "GET_CLIENTCOUNT_SNAPSHOT";
			
			let message_id = "u18";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			
			C2S.GET_CLIENTCOUNT_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u18 (GET_CLIENTCOUNT_SNAPSHOT) is as follows:
				//The first message is u75, followed by a series of u34
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u19
		/*
		/* SYNC_TIME
		/*
		/* Asks the server to return the current time. The result is returned via a u50.
		/*
		 **/
		
		u19: function (None) {
			
			const root = this;
			
			let message_name = "SYNC_TIME";
			
			let message_id = "u19";
			
			let message_args = {};
			
			
			C2S.SYNC_TIME(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u19 (SYNC_TIME) is as follows:
				//The first message is u50
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u21
		/*
		/* GET_ROOMLIST_SNAPSHOT
		/*
		/* Asks the server to return a list of the rooms whose ids are qualified by roomIdQualifier. The result is returned via a u38.
		/*For a server-wide room list, supply the empty string ("") for roomIdQualifier and true for recursive.
		/*For a list of rooms with the unnamed qualifier, supply the empty string ("") for roomIdQualifier and false for recursive.
		/*For a list of rooms with the qualifier "chat.sports", supply "chat.sports" for roomIdQualifier and false for recursive.
		/*Note: the recursive argument is currently available for the unnamed qualifier ("") only. Recursion for other qualifiers is planned for future versions of the UPC protocol.
		/*
		/* @param  {String} requestID
		/* @param  {String} roomIdQualifier
		/* @param  {String} recursive
		 **/
		
		u21: function (requestID, roomIdQualifier, recursive) {
			
			const root = this;
			
			let message_name = "GET_ROOMLIST_SNAPSHOT";
			
			let message_id = "u21";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			message_args["roomIdQualifier"] = roomIdQualifier;
			message_args["recursive"] = recursive;
			
			C2S.GET_ROOMLIST_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u21 (GET_ROOMLIST_SNAPSHOT) is as follows:
				//The first message is u38
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u24
		/*
		/* CREATE_ROOM
		/*
		/* Asks the server to create the specified room.
		/*If roomID is empty, then the server creates the room ID automatically. To determine the room's ID, the client must watch for a room addition message (u39).
		/*Recognized setting names for the second argument are as follows:
		/*The third argument lists the room's initial attributes.
		/*The fourth argument lists room's room modules, which can be defined by a script or a class. Scripts and classes can be listed in any order. A path to a script indicates the location of a script relative to the server's central scripts directory.
		/*_DIE_ON_EMPTY, _MAX_CLIENTS, _PASSWORD
		/*
		/* @param  {String} roomID
		/* @param  {String} roomSettings
		/* @param  {String} attrOptions
		/* @param  {String} qualifiedClassName
		 **/
		
		u24: function (roomID, roomSettings, attrOptions, qualifiedClassName) {
			
			const root = this;
			
			let message_name = "CREATE_ROOM";
			
			let message_id = "u24";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["roomSettings"] = roomSettings;
			message_args["attrOptions"] = attrOptions;
			message_args["qualifiedClassName"] = qualifiedClassName;
			
			C2S.CREATE_ROOM(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u24 (CREATE_ROOM) is as follows:
				//The first message is u39
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u25
		/*
		/* REMOVE_ROOM
		/*
		/* Asks the server to remove the specified room. If the request is successful, the server sends a u40 to all clients in or observing the room. The client that sent the u25 message also receives a u33. Clients do not receive separate u37 (CLIENT_REMOVED) notifications for clients that are forced out of the room when it is removed.
		/*
		/* @param  {String} roomID
		/* @param  {String} password
		 **/
		
		u25: function (roomID, password) {
			
			const root = this;
			
			let message_name = "REMOVE_ROOM";
			
			let message_id = "u25";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["password"] = password;
			
			C2S.REMOVE_ROOM(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u25 (REMOVE_ROOM) is as follows:
				//The first message is u40, followed by a series of u33,u37
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u26
		/*
		/* WATCH_FOR_ROOMS
		/*
		/* Asks the server to inform the client when new rooms qualified by roomIdQualifier are added to or removed from the server. The server sends the result of the request via a u42. If the request was successful, the server also sends a u38. Subsequent room additions trigger u39; subsequent room removals trigger u40. It is legal to watch a qualifier that does not yet exist.
		/*To watch for all rooms on the server, supply the empty string ("") for roomIdQualifier and true for recursive.
		/*To watch for rooms with the unnamed qualifier, supply the empty string ("") for roomIdQualifier and false for recursive.
		/*To watch for rooms with the qualifier "examples", supply "examples" for roomIdQualifier and false for recursive.
		/*Note: the recursive argument is currently available for the unnamed qualifier ("") only. Recursion for other qualifiers is planned for future versions of the UPC protocol.
		/*
		/* @param  {String} roomIdQualifier
		/* @param  {String} recursive
		 **/
		
		u26: function (roomIdQualifier, recursive) {
			
			const root = this;
			
			let message_name = "WATCH_FOR_ROOMS";
			
			let message_id = "u26";
			
			let message_args = {};
			
			message_args["roomIdQualifier"] = roomIdQualifier;
			message_args["recursive"] = recursive;
			
			C2S.WATCH_FOR_ROOMS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u26 (WATCH_FOR_ROOMS) is as follows:
				//The first message is u42, followed by a series of u38,u39,u40
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u27
		/*
		/* STOP_WATCHING_FOR_ROOMS
		/*
		/* Asks the server to stop sending room-addition-and-removal notifications for the specified roomIdQualifier. The server sends the result of the request via a u43.
		/*To stop watching for all rooms on the server, supply the empty string ("") for roomIdQualifier and true for recursive.
		/*To stop watching for rooms with the unnamed qualifier, supply the empty string ("") for roomIdQualifier and false for recursive.
		/*To stop watching for rooms with the qualifier "examples", supply "examples" for roomIdQualifier and false for recursive.
		/*Note: the recursive argument is currently available for the unnamed qualifier ("") only. Recursion for other qualifiers is planned for future versions of the UPC protocol.
		/*
		/* @param  {String} roomIdQualifier
		/* @param  {String} recursive
		 **/
		
		u27: function (roomIdQualifier, recursive) {
			
			const root = this;
			
			let message_name = "STOP_WATCHING_FOR_ROOMS";
			
			let message_id = "u27";
			
			let message_args = {};
			
			message_args["roomIdQualifier"] = roomIdQualifier;
			message_args["recursive"] = recursive;
			
			C2S.STOP_WATCHING_FOR_ROOMS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u27 (STOP_WATCHING_FOR_ROOMS) is as follows:
				//The first message is u43
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u55
		/*
		/* GET_ROOM_SNAPSHOT
		/*
		/* Asks the server to send a room snapshot for the specified room. In response, the server sends a u60 and, if the request succeeds, a u54. The updateLevels parameter specifies the amount of information that should be included in the snapshot, following the rules described under u64. If updateLevels is not supplied, the sender's update levels for the room are used. If the sender does not have update levels specified for the room, the room's maximum levels are used.
		/*
		/* @param  {String} requestID
		/* @param  {String} roomID
		/* @param  {String} password
		/* @param  {String} updateLevels
		 **/
		
		u55: function (requestID, roomID, password, updateLevels) {
			
			const root = this;
			
			let message_name = "GET_ROOM_SNAPSHOT";
			
			let message_id = "u55";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			message_args["roomID"] = roomID;
			message_args["password"] = password;
			message_args["updateLevels"] = updateLevels;
			
			C2S.GET_ROOM_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u55 (GET_ROOM_SNAPSHOT) is as follows:
				//The first message is u60, followed by a series of u54
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u58
		/*
		/* OBSERVE_ROOM
		/*
		/* Used for spectating a room the client is not in. A u58 asks the server to register the sender as an observer of the specified room. The result of attempting to observe the room is returned to the sender via a u77. If the attempt is successful, the sender is also sent a u59, and will subsequently receive updates for the room in accordance with the client's specified occupant, room, and message update levels. If a client changes its update levels, subsequent updates are sent according to the new levels. For details on which updates are sent and how levels affect updates, see u64.
		/*If a client is in a room, it can still register to observe that room. Likewise, a client can observe a room, and then join and leave it arbitrarily without affecting observation status. When a client is both an observer and an occupant of a room, it receives updates about the room even after leaving it. Clients that observe a room and then join it will not receive a u54 at join time.
		/*When a room is removed from the server, clients in that room receive a u62, but do not automatically receive notification that the room was removed. Clients wishing to be notified when a room is removed must register for notifications via WATCH_FOR_ROOMS.
		/*
		/* @param  {String} roomID
		/* @param  {String} password
		 **/
		
		u58: function (roomID, password) {
			
			const root = this;
			
			let message_name = "OBSERVE_ROOM";
			
			let message_id = "u58";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["password"] = password;
			
			C2S.OBSERVE_ROOM(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u58 (OBSERVE_ROOM) is as follows:
				//The first message is u77, followed by a series of u59
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u61
		/*
		/* STOP_OBSERVING_ROOM
		/*
		/* Asks the server to unregister the sender as an observer of the specified room. The result of the request is returned to the sender via a u78. If the attempt is successful, the sender is also sent a u62.
		/*
		/* @param  {String} roomID
		 **/
		
		u61: function (roomID) {
			
			const root = this;
			
			let message_name = "STOP_OBSERVING_ROOM";
			
			let message_id = "u61";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			
			C2S.STOP_OBSERVING_ROOM(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u61 (STOP_OBSERVING_ROOM) is as follows:
				//The first message is u78, followed by a series of u62
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u64
		/*
		/* SET_ROOM_UPDATE_LEVELS
		/*
		/* Asks the server to change the client's update levels for the specified room. The server applies only those changes permitted for the client's security level. When a client's room update levels change, the server sends that client a u128. The updateLevel parameter is an integer whose ordered bits represent the following update levels:
		/*The update levels specified by the preceding bits determine how much information is pushed to the client when it is either in or observing a room.
		/*In the preceding list, *, **, ***, and **** have the following meanings: 0 room messages. 1 room shared attributes *. 2 occupant count. 3 observer count. 4 occupant list *. 5 observer list *. 6 occupant shared room attributes *, **. 7 observer shared room attributes *, ***8 occupant shared global attributes *, **. 9 observer shared global attributes *, ***. 10 occupant login/logoffs *, **. 11 observer login/logoffs *, ***. 12 all room attributes *, ****. * When a client joins a room it is not already observing, or observes a room it is not already in, it is sent a u54 describing the current state of the room. ** When this bit is on, bit 4 is automatically turned on. *** When this bit is on, bit 5 is automatically turned on. **** This bit requires administrator privileges
		/*
		/* @param  {String} roomID
		/* @param  {String} updateLevel
		 **/
		
		u64: function (roomID, updateLevel) {
			
			const root = this;
			
			let message_name = "SET_ROOM_UPDATE_LEVELS";
			
			let message_id = "u64";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["updateLevel"] = updateLevel;
			
			C2S.SET_ROOM_UPDATE_LEVELS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u64 (SET_ROOM_UPDATE_LEVELS) is as follows:
				//The first message is u128
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u65
		/*
		/* CLIENT_HELLO
		/*
		/* CLIENT_HELLO is the first step in the client-server connection process. It tells the server the client's type, the user agent (software name and version) being used to make the connection, and the UPC protocol version used by the client to communicate. The server responds with a u66, and then:
		/*Example values for clientType are:
		/*The userAgent is a human-readable string set arbitrarily by the client, and is used for logging purposes only. For example, "Flash Player WIN 9,0,124,0 StandAlone (debug, localTrusted)".
		/*The upcVersion specifies the version of the UPC specification used by the client, in the format: majorNumber.minorNumber.revisionNumber. For example, 1.2.0. If the client's majorNumber, minorNumber, and revisionNumber all match the server's majorNumber, minorNumber, and revisionNumber, the server is considered compatible with the client. Otherwise:
		/*if the client and server are considered strictly incompatible, the server disconnects the client (see compatibility details below). Otherwise, the server sends a u29 followed by a u63. Reactor, Orbiter, OrbiterMicro, Mariner. If the server's majorNumber and the client's majorNumber do not match, or the server's minorNumber and the client's minorNumber do not match, the server sends a u66 with the "upcCompatible" argument set to false, and disconnects the client. In this case, the client is considered strictly incompatible with the server. If the server's revisionNumber and the client's revisionNumber do not match, but the majorNumber and minorNumber both match, then the server sends a u66 with the "upcCompatible" argument set to false, but does not disconnect the client. In this case, the client is considered loosely incompatible with the server. Based on the features required in the application, the client application must, itself, decide whether to stay connected. For example, imagine a hypothetical UPC-specification version, 4.5.5, that is succeeded by a minor revision 4.5.6. The 4.5.6 revision is identical to its predecessor except that it contains a new UPC message, "REMOVE_ALL_ROOMS", that was not present in 4.5.5. All 4.5.5-compatible client applications can safely communicate with all 4.5.6-compatible servers because all 4.5.5 messages are still supported in revision 4.5.6. However, a 4.5.6-compatible client application, can safely communicate with a 4.5.5-compatible server only if it does not use REMOVE_ALL_ROOMS, which is not supported by the 4.5.5-compatible server. A 4.5.6-compatible client application that uses REMOVE_ALL_ROOMS would, hence, be expected to disconnect itself from a 4.5.5-compatible server.
		/*
		/* @param  {String} clientType
		/* @param  {String} userAgent
		/* @param  {String} upcVersion
		 **/
		
		u65: function (clientType, userAgent, upcVersion) {
			
			const root = this;
			
			let message_name = "CLIENT_HELLO";
			
			let message_id = "u65";
			
			let message_args = {};
			
			message_args["clientType"] = clientType;
			message_args["userAgent"] = userAgent;
			message_args["upcVersion"] = upcVersion;
			
			C2S.CLIENT_HELLO(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u65 (CLIENT_HELLO) is as follows:
				//The first message is u66, followed by a series of u29,u63
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u67
		/*
		/* REMOVE_ROOM_ATTR
		/*
		/* Asks the server to remove a room attribute from the specified room. The result is returned via a u80. If the request is successful, all clients requiring notification of the change are sent a u79.
		/*
		/* @param  {String} roomID
		/* @param  {String} attrName
		 **/
		
		u67: function (roomID, attrName) {
			
			const root = this;
			
			let message_name = "REMOVE_ROOM_ATTR";
			
			let message_id = "u67";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["attrName"] = attrName;
			
			C2S.REMOVE_ROOM_ATTR(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u67 (REMOVE_ROOM_ATTR) is as follows:
				//The first message is u80, followed by a series of u79
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u69
		/*
		/* REMOVE_CLIENT_ATTR
		/*
		/* Asks the server to remove a client attribute from the client specified by clientID or the user account specified by userID. The clientID and userID arguments are mutually exclusive; only one or the other is allowed. The result of the request is returned via a u82. If the request succeeds, all clients needing to be notified of the deletion are sent a u81. If clientID is not specified, the attribute is deleted from the sending client.
		/*
		/* @param  {String} clientID
		/* @param  {String} userID
		/* @param  {String} attrName
		/* @param  {String} scope
		 **/
		
		u69: function (clientID, userID, attrName, scope) {
			
			const root = this;
			
			let message_name = "REMOVE_CLIENT_ATTR";
			
			let message_id = "u69";
			
			let message_args = {};
			
			message_args["clientID"] = clientID;
			message_args["userID"] = userID;
			message_args["attrName"] = attrName;
			message_args["scope"] = scope;
			
			C2S.REMOVE_CLIENT_ATTR(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u69 (REMOVE_CLIENT_ATTR) is as follows:
				//The first message is u82, followed by a series of u81
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u70
		/*
		/* SEND_ROOMMODULE_MESSAGE
		/*
		/* Sends the specified message to all of the modules of the specified room. The argument names (argName1, argName2,...argNamen) must not contain the pipe (|) character. Argument values can contain the pipe (|) character.
		/*
		/* @param  {String} roomID
		/* @param  {String} moduleMessageName
		/* @param  {String} ...argNameValuePairs
		 **/
		
		u70: function (roomID, moduleMessageName, ...argNameValuePairs) {
			
			const root = this;
			
			let message_name = "SEND_ROOMMODULE_MESSAGE";
			
			let message_id = "u70";
			
			let message_args = {};
			
			message_args["roomID"] = roomID;
			message_args["moduleMessageName"] = moduleMessageName;
			message_args["argNameValuePairs"] = argNameValuePairs;
			
			C2S.SEND_ROOMMODULE_MESSAGE(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u70 (SEND_ROOMMODULE_MESSAGE) is as follows:
				//The first message is u00
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u71
		/*
		/* SEND_SERVERMODULE_MESSAGE
		/*
		/* Sends the specified message to the specified server module. The moduleID must be the ID of a deployed server module on the server. The argument names (argName1, argName2,...argNamen) must not contain the pipe (|) character. Argument values can contain the pipe (|) character.
		/*
		/* @param  {String} moduleID
		/* @param  {String} moduleMessageName
		/* @param  {String} ...argNameValues
		 **/
		
		u71: function (moduleID, moduleMessageName, ...argNameValues) {
			
			const root = this;
			
			let message_name = "SEND_SERVERMODULE_MESSAGE";
			
			let message_id = "u71";
			
			let message_args = {};
			
			message_args["moduleID"] = moduleID;
			message_args["moduleMessageName"] = moduleMessageName;
			message_args["argNameValues"] = argNameValues;
			
			C2S.SEND_SERVERMODULE_MESSAGE(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u71 (SEND_SERVERMODULE_MESSAGE) is as follows:
				//The first message is u00
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u83
		/*
		/* TERMINATE_SESSION
		/*
		/* Asks the server to terminate the session specified by sessionID.
		/*
		/* @param  {String} sessionID
		 **/
		
		u83: function (sessionID) {
			
			const root = this;
			
			let message_name = "TERMINATE_SESSION";
			
			let message_id = "u83";
			
			let message_args = {};
			
			message_args["sessionID"] = sessionID;
			
			C2S.TERMINATE_SESSION(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u83 (TERMINATE_SESSION) is as follows:
				//The first message is u00
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u86
		/*
		/* LOGOFF
		/*
		/* Asks the server to logoff the user account specified by userID. Results of the logoff attempt are returned via a u87. If the attempt succeeds, the server logs off and then disconnects the client.
		/*
		/* @param  {String} userID
		/* @param  {String} password
		 **/
		
		u86: function (userID, password) {
			
			const root = this;
			
			let message_name = "LOGOFF";
			
			let message_id = "u86";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			message_args["password"] = password;
			
			C2S.LOGOFF(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u86 (LOGOFF) is as follows:
				//The first message is u87
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u91
		/*
		/* GET_CLIENTLIST_SNAPSHOT
		/*
		/* Asks the server to send a list of clientIDs for all clients currently connected to the server. The list will also include userIDs for all clients with user accounts that are currently logged in. The result is sent via a u101. See also u97.
		/*
		/* @param  {String} requestID
		 **/
		
		u91: function (requestID) {
			
			const root = this;
			
			let message_name = "GET_CLIENTLIST_SNAPSHOT";
			
			let message_id = "u91";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			
			C2S.GET_CLIENTLIST_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u91 (GET_CLIENTLIST_SNAPSHOT) is as follows:
				//The first message is u101
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u92
		/*
		/* WATCH_FOR_CLIENTS
		/*
		/* Asks the server to inform the client when clients connect or disconnect, or login or logoff. The server sends the result of the request via a u107. If the request was successful, the server also sends a u101. Subsequent client connections trigger a u102; subsequent client disconnections trigger a u103. Subsequent client logins trigger a u88; subsequent client logoffs trigger a u89.
		/*
		 **/
		
		u92: function () {
			
			const root = this;
			
			let message_name = "WATCH_FOR_CLIENTS";
			
			let message_id = "u92";
			
			let message_args = {};
			
			
			C2S.WATCH_FOR_CLIENTS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u92 (WATCH_FOR_CLIENTS) is as follows:
				//The first message is u107, followed by a series of u101
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u93
		/*
		/* STOP_WATCHING_FOR_CLIENTS
		/*
		/* Asks the server to stop sending client connection-and-disconnnection notifications. The server sends the result of the request via a u108.
		/*
		 **/
		
		u93: function () {
			
			const root = this;
			
			let message_name = "STOP_WATCHING_FOR_CLIENTS";
			
			let message_id = "u93";
			
			let message_args = {};
			
			
			C2S.STOP_WATCHING_FOR_CLIENTS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u93 (STOP_WATCHING_FOR_CLIENTS) is as follows:
				//The first message is u108
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u94
		/*
		/* GET_CLIENT_SNAPSHOT
		/*
		/* Asks the server to send a snapshot for the specified client. In response, the server sends a u115 and, if the request succeeds, a u104.
		/*
		/* @param  {String} requestID
		/* @param  {String} clientID
		 **/
		
		u94: function (requestID, clientID) {
			
			const root = this;
			
			let message_name = "GET_CLIENT_SNAPSHOT";
			
			let message_id = "u94";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			message_args["clientID"] = clientID;
			
			C2S.GET_CLIENT_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u94 (GET_CLIENT_SNAPSHOT) is as follows:
				//The first message is u115, followed by a series of u104
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u95
		/*
		/* OBSERVE_CLIENT
		/*
		/* Asks the server to register the sender as an observer of the specified client. In response, the server sends a u105 and, if the request succeeds, a u119 followed by a u104. Subsequently if the specified client's state changes, the observing client is notified in the following ways: Observed client's attribute changes: observer receives a u8, Observed client's attribute is deleted: observer receives a u81, Observed client joins a room: observer receives a 113, Observed client leaves a room: observer receives a 114, Observed client observes a room: observer receives a 117, Observed client stops observing a room: observer receives a 118, Observed client logs in: observer receives a u88, Observed client logs off: observer receives a u89, Observed client disconnects: observer receives a u103
		/*
		/* @param  {String} clientID
		 **/
		
		u95: function (clientID) {
			
			const root = this;
			
			let message_name = "OBSERVE_CLIENT";
			
			let message_id = "u95";
			
			let message_args = {};
			
			message_args["clientID"] = clientID;
			
			C2S.OBSERVE_CLIENT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u95 (OBSERVE_CLIENT) is as follows:
				//The first message is u105, followed by a series of u119,u104
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u96
		/*
		/* STOP_OBSERVING_CLIENT
		/*
		/* Asks the server to unregister the sender as an observer of the specified client. In response, the server sends a u106. If the request succeeds, the server also sends a u120, and stops sending updates about the specified client.
		/*
		/* @param  {String} clientID
		 **/
		
		u96: function (clientID) {
			
			const root = this;
			
			let message_name = "STOP_OBSERVING_CLIENT";
			
			let message_id = "u96";
			
			let message_args = {};
			
			message_args["clientID"] = clientID;
			
			C2S.STOP_OBSERVING_CLIENT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u96 (STOP_OBSERVING_CLIENT) is as follows:
				//The first message is u106, followed by a series of u120
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u97
		/*
		/* GET_ACCOUNTLIST_SNAPSHOT
		/*
		/* Asks the server to send a list of userIDs for all registered user accounts on the server. The result is sent via a u127. See also u91.
		/*
		/* @param  {String} requestID
		 **/
		
		u97: function (requestID) {
			
			const root = this;
			
			let message_name = "GET_ACCOUNTLIST_SNAPSHOT";
			
			let message_id = "u97";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			
			C2S.GET_ACCOUNTLIST_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u97 (GET_ACCOUNTLIST_SNAPSHOT) is as follows:
				//The first message is u127
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u98
		/*
		/* WATCH_FOR_ACCOUNTS
		/*
		/* Asks the server to inform the client when new user accounts are created. The server sends the result of the request via a u109. If the request was successful, the server also sends a u127. Subsequent user-account creations trigger a u111; subsequent user-account removals trigger a u112.
		/*
		 **/
		
		u98: function () {
			
			const root = this;
			
			let message_name = "WATCH_FOR_ACCOUNTS";
			
			let message_id = "u98";
			
			let message_args = {};
			
			
			C2S.WATCH_FOR_ACCOUNTS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u98 (WATCH_FOR_ACCOUNTS) is as follows:
				//The first message is u109, followed by a series of u127,u111,u112
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u99
		/*
		/* STOP_WATCHING_FOR_ACCOUNTS
		/*
		/* Asks the server to stop sending user-account creation-and-removal notifications. The server sends the result of the request via a u110.
		/*
		 **/
		
		u99: function () {
			
			const root = this;
			
			let message_name = "STOP_WATCHING_FOR_ACCOUNTS";
			
			let message_id = "u99";
			
			let message_args = {};
			
			
			C2S.STOP_WATCHING_FOR_ACCOUNTS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u99 (STOP_WATCHING_FOR_ACCOUNTS) is as follows:
				//The first message is u110
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u100
		/*
		/* GET_ACCOUNT_SNAPSHOT
		/*
		/* Asks the server to send a snapshot for the specified user account, including all persistent data stored in the user's account. In response, the server sends a u116 and, if the request succeeds, a u104.
		/*
		/* @param  {String} requestID
		/* @param  {String} userID
		 **/
		
		u100: function (requestID, userID) {
			
			const root = this;
			
			let message_name = "GET_ACCOUNT_SNAPSHOT";
			
			let message_id = "u100";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			message_args["userID"] = userID;
			
			C2S.GET_ACCOUNT_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u100 (GET_ACCOUNT_SNAPSHOT) is as follows:
				//The first message is u116, followed by a series of u104
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u121
		/*
		/* OBSERVE_ACCOUNT
		/*
		/* Asks the server to register the sender as an observer of the specified user account. In response, the server sends a u123 and, if the request succeeds, a u124. Subsequently if the specified user account's state changes, the observing client is notified in the following ways: Observed account logs in: observer receives a u88, Observed account logs off: observer receives a u89, Observed account deleted: observer receives a u112
		/*
		 **/
		
		u121: function (userID) {
			
			const root = this;
			
			let message_name = "OBSERVE_ACCOUNT";
			
			let message_id = "u121";
			
			let message_args = {};
			
			
			C2S.OBSERVE_ACCOUNT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u121 (OBSERVE_ACCOUNT) is as follows:
				//The first message is u123, followed by a series of u124
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u122
		/*
		/* STOP_OBSERVING_ACCOUNT
		/*
		/* Asks the server to unregister the sender as an observer of the specified user account. In response, the server sends a u125. If the request succeeds, the server also sends a u126, and stops sending updates about the specified user account.
		/*
		/* @param  {String} userID
		 **/
		
		u122: function (userID) {
			
			const root = this;
			
			let message_name = "STOP_OBSERVING_ACCOUNT";
			
			let message_id = "u122";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			
			C2S.STOP_OBSERVING_ACCOUNT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u122 (STOP_OBSERVING_ACCOUNT) is as follows:
				//The first message is u125, followed by a series of u126
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u133
		/*
		/* ADD_ROLE
		/*
		/* Asks the server to assign the specified role to the user account with the specified userID. In response, the server sends a u134. An account's role(s) determine which actions a user is allowed to perform on Union Server. For a list of security actions and corresponding rules, see Union Server's documentation. Legal values for role are: MODERATOR
		/*
		/* @param  {String} userID
		/* @param  {String} role
		 **/
		
		u133: function (userID, role) {
			
			const root = this;
			
			let message_name = "ADD_ROLE";
			
			let message_id = "u133";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			message_args["role"] = role;
			
			C2S.ADD_ROLE(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u133 (ADD_ROLE) is as follows:
				//The first message is u134, followed by a series of
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u135
		/*
		/* REMOVE_ROLE
		/*
		/* Asks the server to remove the specified role from the user account with the specified userID. In response, the server sends a u136. Legal values for role are listed under u133.
		/*
		/* @param  {String} userID
		/* @param  {String} role
		 **/
		
		u135: function (userID, role) {
			
			const root = this;
			
			let message_name = "REMOVE_ROLE";
			
			let message_id = "u135";
			
			let message_args = {};
			
			message_args["userID"] = userID;
			message_args["role"] = role;
			
			C2S.REMOVE_ROLE(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u135 (REMOVE_ROLE) is as follows:
				//The first message is u136
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u137
		/*
		/* BAN
		/*
		/* Asks the server to refuse all connection attempts made by a particular client address. A "client address" is the logical origin of a client connection, typically an IP address. If the address parameter is provided, the specified address is banned and clientID is ignored. If no address parameter is provided, then clientID must be provided, and the address of the client with the specified clientID is banned. The ban lasts for the number of seconds specified by duration. The reason parameter is an arbitrary optional string indicating the reason for the ban. The reason string is stored by the server in the banned list. The result of a ban attempt is returned via a u138. A list of current banned addresses can be retrieved via a u141 or u143.
		/*
		/* @param  {String} address
		/* @param  {String} clientID
		/* @param  {String} duration
		/* @param  {String} reason
		 **/
		
		u137: function (address, clientID, duration, reason) {
			
			const root = this;
			
			let message_name = "BAN";
			
			let message_id = "u137";
			
			let message_args = {};
			
			message_args["address"] = address;
			message_args["clientID"] = clientID;
			message_args["duration"] = duration;
			message_args["reason"] = reason;
			
			C2S.BAN(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u137 (BAN) is as follows:
				//The first message is u138
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u139
		/*
		/* UNBAN
		/*
		/* Asks the server to remove a banned a client address from the banned list. The result of the unban attempt is returned via a u140.
		/*
		/* @param  {String} address
		 **/
		
		u139: function (address) {
			
			const root = this;
			
			let message_name = "UNBAN";
			
			let message_id = "u139";
			
			let message_args = {};
			
			message_args["address"] = address;
			
			C2S.UNBAN(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u139 (UNBAN) is as follows:
				//The first message is 140
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u141
		/*
		/* GET_BANNED_LIST_SNAPSHOT
		/*
		/* Asks the server to send a list of addresses currently banned from connecting to the server. The result is sent via a u142. See also u143.
		/*
		/* @param  {String} requestID
		 **/
		
		u141: function (requestID) {
			
			const root = this;
			
			let message_name = "GET_BANNED_LIST_SNAPSHOT";
			
			let message_id = "u141";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			
			C2S.GET_BANNED_LIST_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u141 (GET_BANNED_LIST_SNAPSHOT) is as follows:
				//The first message is u142
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u143
		/*
		/* WATCH_FOR_BANNED_ADDRESSES
		/*
		/* Asks the server to inform the sending client when addresses are banned or unbanned. The server sends the result of the request via a u144. If the request was successful, the server also sends a u142. Subsequently, when an address is banned, the server sends a u147; when an address is unbanned, the server sends a u148.
		/*
		 **/
		
		u143: function () {
			
			const root = this;
			
			let message_name = "WATCH_FOR_BANNED_ADDRESSES";
			
			let message_id = "u143";
			
			let message_args = {};
			
			
			C2S.WATCH_FOR_BANNED_ADDRESSES(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u143 (WATCH_FOR_BANNED_ADDRESSES) is as follows:
				//The first message is u144, followed by a series of u142,u147,u148
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u145
		/*
		/* STOP_WATCHING_FOR_BANNED_ADDRESSES
		/*
		/* Asks the server to stop sending banned-address notifications. The server sends the result of the request via a u146.
		/*
		 **/
		
		u145: function () {
			
			const root = this;
			
			let message_name = "STOP_WATCHING_FOR_BANNED_ADDRESSES";
			
			let message_id = "u145";
			
			let message_args = {};
			
			
			C2S.STOP_WATCHING_FOR_BANNED_ADDRESSES(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u145 (STOP_WATCHING_FOR_BANNED_ADDRESSES) is as follows:
				//The first message is u146
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u149
		/*
		/* KICK_CLIENT
		/*
		/* Asks the server to forcibly disconnect the client with the specified clientID. The server sends the result of the request via a u150.
		/*
		/* @param  {String} clientID
		 **/
		
		u149: function (clientID) {
			
			const root = this;
			
			let message_name = "KICK_CLIENT";
			
			let message_id = "u149";
			
			let message_args = {};
			
			message_args["clientID"] = clientID;
			
			C2S.KICK_CLIENT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u149 (KICK_CLIENT) is as follows:
				//The first message is u150, followed by a series of
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u151
		/*
		/* GET_SERVERMODULELIST_SNAPSHOT
		/*
		/* Asks the server to send a list of currently active server modules (not to be confused with room modules). The result is sent via a u152. By default, u151 requires administrator privileges.
		/*
		/* @param  {String} requestID
		 **/
		
		u151: function (requestID) {
			
			const root = this;
			
			let message_name = "GET_SERVERMODULELIST_SNAPSHOT";
			
			let message_id = "u151";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			
			C2S.GET_SERVERMODULELIST_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u151 (GET_SERVERMODULELIST_SNAPSHOT) is as follows:
				//The first message is u152
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u153
		/*
		/* CLEAR_MODULE_CACHE
		/*
		/* Asks the server to remove all current module class definitions from memory. Subsequently instantiated modules will use the newly loaded module class definitions, allowing module developers to update Union Server's modules at runtime without restarting the server. By default, u153 requires administrator privileges.
		/*
		 **/
		
		u153: function () {
			
			const root = this;
			
			let message_name = "CLEAR_MODULE_CACHE";
			
			let message_id = "u153";
			
			let message_args = {};
			
			
			C2S.CLEAR_MODULE_CACHE(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u153 (CLEAR_MODULE_CACHE) is as follows:
				//The first message is u00
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u154
		/*
		/* GET_UPC_STATS_SNAPSHOT
		/*
		/* Asks the server to send a list of UPC-message-processing statistics. In response, the server sends a u155 and, if the request succeeds, a u156. By default, u154 requires administrator privileges.
		/*
		 **/
		
		u154: function () {
			
			const root = this;
			
			let message_name = "GET_UPC_STATS_SNAPSHOT";
			
			let message_id = "u154";
			
			let message_args = {};
			
			
			C2S.GET_UPC_STATS_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u154 (GET_UPC_STATS_SNAPSHOT) is as follows:
				//The first message is u155, followed by a series of u156
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u157
		/*
		/* RESET_UPC_STATS
		/*
		/* Asks the server to reset server-side UPC-processing statistics. The following statistics are affected by a reset:
		/*The result of a u157 request is sent via a u158. The statistics-reset is reflected in any subsequent u156 transmission. By default, u157 requires administrator privileges.
		/*the list of the longest UPC-message-processing times
		/*
		 **/
		
		u157: function () {
			
			const root = this;
			
			let message_name = "RESET_UPC_STATS";
			
			let message_id = "u157";
			
			let message_args = {};
			
			
			C2S.RESET_UPC_STATS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u157 (RESET_UPC_STATS) is as follows:
				//The first message is u158
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u159
		/*
		/* WATCH_FOR_PROCESSED_UPCS
		/*
		/* Asks the server to notify the sending client upon processing any UPC message. The server sends the result of the request via a u160. Notifications are transmitted via u161. By default, u159 requires administrator privileges.
		/*
		 **/
		
		u159: function () {
			
			const root = this;
			
			let message_name = "WATCH_FOR_PROCESSED_UPCS";
			
			let message_id = "u159";
			
			let message_args = {};
			
			
			C2S.WATCH_FOR_PROCESSED_UPCS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u159 (WATCH_FOR_PROCESSED_UPCS) is as follows:
				//The first message is u160
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u162
		/*
		/* STOP_WATCHING_FOR_PROCESSED_UPCS
		/*
		/* Asks the server to stop sending UPC-processing notifications to the sending client. The server sends the result of the request via a u163. By default, u162 requires administrator privileges.
		/*
		 **/
		
		u162: function () {
			
			const root = this;
			
			let message_name = "STOP_WATCHING_FOR_PROCESSED_UPCS";
			
			let message_id = "u162";
			
			let message_args = {};
			
			
			C2S.STOP_WATCHING_FOR_PROCESSED_UPCS(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u162 (STOP_WATCHING_FOR_PROCESSED_UPCS) is as follows:
				//The first message is u163
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u165
		/*
		/* GET_NODELIST_SNAPSHOT
		/*
		/* Asks the server to return a list of the cluster nodes currently connected to the server. The result is returned via a u166.
		/*
		/* @param  {String} requestID
		 **/
		
		u165: function (requestID) {
			
			const root = this;
			
			let message_name = "GET_NODELIST_SNAPSHOT";
			
			let message_id = "u165";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			
			C2S.GET_NODELIST_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u165 (GET_NODELIST_SNAPSHOT) is as follows:
				//The first message is u166
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
		
		/**
		/* u167
		/*
		/* GET_GATEWAYS_SNAPSHOT
		/*
		/* Asks the server to return a per-gateway summary of connection and bandwidth statistics. The result is returned via a u168. By default, access to gateway statistics requires administrator privileges.
		/*
		/* @param  {String} requestID
		 **/
		
		u167: function (requestID) {
			
			const root = this;
			
			let message_name = "GET_GATEWAYS_SNAPSHOT";
			
			let message_id = "u167";
			
			let message_args = {};
			
			message_args["requestID"] = requestID;
			
			C2S.GET_GATEWAYS_SNAPSHOT(message_id, message_name, message_args, function (data) {
				
				//Get the this variable to prepare the self
				const self = this;
				
				//Get the the main object for easy reference
				const root = ClientToServer;
				
				//Loop through the data to get all server responses:
				//The result of u167 (GET_GATEWAYS_SNAPSHOT) is as follows:
				//The first message is u168
				//Array forEach works better than for loop
				for (const upc in data) {
					
					const upc_object = data[upc];
					
					setTimeout(function () {
						
						serverSocketEmit("upc", upc_object);
						
					}, server_config.server.upc_timeout);
					
				}
				
				
			});
			
		},
		
	};
	
	return ClientToServer;
	
}