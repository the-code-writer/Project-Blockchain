#!/usr/bin/env node
'use strict';

module.exports.init = function (config, io, socket, sqlObj, db, snippet) {
	
	let server_config = config;
	
	let server_socket = socket;
	
	const S2C = {
		
		
		// RECEIVE_MESSAGE (u7)
		
		/**
		/*
		/* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		RECEIVE_MESSAGE_1: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var receive_message_data = {};
			
			
			//============== BEGIN u7 ==============
			
			//Response Message : RECEIVE_MESSAGE (u7)
			
			
			/***
  		/*
  		/* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
  		/*
  		/**/
			
			
			let u7_message_id = "u7";
			
			let u7_message_name = "RECEIVE_MESSAGE";
			
			let u7_message_args = [];
			
			// Set the arguments for the u7 message
			
			let u7_messageName = "";
			
			let u7_broadcastType = "";
			
			let u7_fromClientID = "";
			
			let u7_roomID = "";
			
			let u7___messageArgs = "";
			
			u7_message_args.push(u7_messageName);
			
			u7_message_args.push(u7_broadcastType);
			
			u7_message_args.push(u7_fromClientID);
			
			u7_message_args.push(u7_roomID);
			
			u7_message_args.push(u7___messageArgs);
			
			
			// Now compose the u7 message and add the upc message to the array
			receive_message_data["0XRECEIVE_MESSAGE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u7_message_id, u7_message_name, u7_message_args)};
			
			//=============== END u7 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(receive_message_data);
			
		},
		
		
		// RECEIVE_MESSAGE (u7)
		
		/**
		/*
		/* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		RECEIVE_MESSAGE_2: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var receive_message_data = {};
			
			
			//============== BEGIN u7 ==============
			
			//Response Message : RECEIVE_MESSAGE (u7)
			
			
			/***
  		/*
  		/* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
  		/*
  		/**/
			
			
			let u7_message_id = "u7";
			
			let u7_message_name = "RECEIVE_MESSAGE";
			
			let u7_message_args = [];
			
			// Set the arguments for the u7 message
			
			let u7_messageName = "";
			
			let u7_broadcastType = "";
			
			let u7_fromClientID = "";
			
			let u7_roomID = "";
			
			let u7___messageArgs = "";
			
			u7_message_args.push(u7_messageName);
			
			u7_message_args.push(u7_broadcastType);
			
			u7_message_args.push(u7_fromClientID);
			
			u7_message_args.push(u7_roomID);
			
			u7_message_args.push(u7___messageArgs);
			
			
			// Now compose the u7 message and add the upc message to the array
			receive_message_data["0XRECEIVE_MESSAGE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u7_message_id, u7_message_name, u7_message_args)};
			
			//=============== END u7 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(receive_message_data);
			
		},
		
		
		// RECEIVE_MESSAGE (u7)
		
		/**
		/*
		/* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		RECEIVE_MESSAGE_3: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var receive_message_data = {};
			
			
			//============== BEGIN u7 ==============
			
			//Response Message : RECEIVE_MESSAGE (u7)
			
			
			/***
  		/*
  		/* Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
  		/*
  		/**/
			
			
			let u7_message_id = "u7";
			
			let u7_message_name = "RECEIVE_MESSAGE";
			
			let u7_message_args = [];
			
			// Set the arguments for the u7 message
			
			let u7_messageName = "";
			
			let u7_broadcastType = "";
			
			let u7_fromClientID = "";
			
			let u7_roomID = "";
			
			let u7___messageArgs = "";
			
			u7_message_args.push(u7_messageName);
			
			u7_message_args.push(u7_broadcastType);
			
			u7_message_args.push(u7_fromClientID);
			
			u7_message_args.push(u7_roomID);
			
			u7_message_args.push(u7___messageArgs);
			
			
			// Now compose the u7 message and add the upc message to the array
			receive_message_data["0XRECEIVE_MESSAGE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u7_message_id, u7_message_name, u7_message_args)};
			
			//=============== END u7 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(receive_message_data);
			
		},
		
		
		// SET_CLIENT_ATTR_RESULT (u73)
		
		/**
		/*
		/* Reports the result of a request to change a client attribute.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		SET_CLIENT_ATTR_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var set_client_attr_result_data = {};
			
			
			//============== BEGIN u73 ==============
			
			//Response Message : SET_CLIENT_ATTR_RESULT (u73)
			
			
			/***
  		/*
  		/* Reports the result of a request to change a client attribute.
  		/*
  		/**/
			
			
			let u73_message_id = "u73";
			
			let u73_message_name = "SET_CLIENT_ATTR_RESULT";
			
			let u73_message_args = [];
			
			// Set the arguments for the u73 message
			
			let u73_roomID = "";
			
			let u73_clientID = "";
			
			let u73_userID = "";
			
			let u73_attrName = "";
			
			let u73_attrOptions = "";
			
			let u73_status = "";
			
			u73_message_args.push(u73_roomID);
			
			u73_message_args.push(u73_clientID);
			
			u73_message_args.push(u73_userID);
			
			u73_message_args.push(u73_attrName);
			
			u73_message_args.push(u73_attrOptions);
			
			u73_message_args.push(u73_status);
			
			
			// Now compose the u73 message and add the upc message to the array
			set_client_attr_result_data["0XSET_CLIENT_ATTR_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u73_message_id, u73_message_name, u73_message_args)};
			
			//=============== END u73 =============
			
			
			//============== BEGIN u8 ==============
			
			//Response Message : CLIENT_ATTR_UPDATE (u8)
			
			
			let u8_message_id = "u8";
			
			let u8_message_name = "CLIENT_ATTR_UPDATE";
			
			let u8_message_args = [];
			
			// Set the arguments for the u8 message
			
			let u8_roomID = "";
			
			let u8_clientID = "";
			
			let u8_userID = "";
			
			let u8_attrName = "";
			
			let u8_attrVal = "";
			
			let u8_attrOptions = "";
			
			u8_message_args.push(u8_roomID);
			
			u8_message_args.push(u8_clientID);
			
			u8_message_args.push(u8_userID);
			
			u8_message_args.push(u8_attrName);
			
			u8_message_args.push(u8_attrVal);
			
			u8_message_args.push(u8_attrOptions);
			
			
			// Now compose the u8 message and add the upc message to the array
			set_client_attr_result_data["1XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
			
			//=============== END u8 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(set_client_attr_result_data);
			
		},
		
		
		// JOIN_ROOM_RESULT (u72)
		
		/**
		/*
		/* Reports the result of a join-room request (u4). If status is SUCCESS, the client is also sent a separate u6 message.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		JOIN_ROOM_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var join_room_result_data = {};
			
			if (data.length < 1) {
				
				setTimeout(function () {
					
					root.JOIN_ROOM_RESULT(message_id, message_name, args, data, callBackFunction);
					
				}, 500);
				
			} else {
				
				const room_object = data[0];
				
				let room_name = room_object.room_name;
				
				server_socket.join([room_name], function (room_join_result) {
					
					console.log("ROOM JOIN RESULT", room_join_result);
					
					//============== BEGIN u8 ==============
					
					//Response Message : ROOM_ATTR_UPDATE (u8)
					
					let u8_message_id = "u8";
					
					let u8_message_name = "ROOM_ATTR_UPDATE";
					
					//#1
					
					let u8_message_args = [];
					
					// Set the arguments for the u8 message
					u8_message_args.push(args["roomID"]);
					u8_message_args.push(socket.id);
					u8_message_args.push("");
					u8_message_args.push("_UL");
					u8_message_args.push(4095);
					u8_message_args.push(2);
					
					// Now compose the u8 message and add the upc message to the array
					join_room_result_data["0XROOM_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
					
					//=============== END u8 =============
					
					//============== BEGIN u54 ==============
					
					//Response Message : ROOM_SNAPSHOT (u54)
					
					let u54_message_id = "u54";
					
					let u54_message_name = "ROOM_SNAPSHOT";
					
					let u54_message_args = [];
					
					// Set the arguments for the u54 message
					
					let u54_requestID = "";
					
					let u54_roomID = room_name;
					
					let u54_occupantCount = 0;
					
					let u54_observerCount = 0;
					
					let u54_roomAttrs = "_MAX_CLIENTS|-1|_DIE_ON_EMPTY|true";
					
					let u54_client1clientID = socket.id;
					
					let u54_client1userID = "";
					
					let u54_client1occupantObserverIndicator = 4;
					
					let u54_clientGlobalAttrs = "_ROLES|0|68|_CT|1601117365244|36";
					
					let u54_clientRoomAttrs = "";
					
					u54_message_args.push(u54_requestID);
					
					u54_message_args.push(u54_roomID);
					
					u54_message_args.push(u54_occupantCount);
					
					u54_message_args.push(u54_observerCount);
					
					u54_message_args.push(u54_roomAttrs);
					
					u54_message_args.push(u54_client1clientID);
					
					u54_message_args.push(u54_client1userID);
					
					u54_message_args.push(u54_client1occupantObserverIndicator);
					
					u54_message_args.push(u54_clientGlobalAttrs);
					
					u54_message_args.push(u54_clientRoomAttrs);
					
					
					// Now compose the u54 message and add the upc message to the array
					join_room_result_data["1XROOM_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u54_message_id, u54_message_name, u54_message_args)};
					
					//=============== END u54 =============
					
					//============== BEGIN u131 ==============
					
					//Response Message : ROOM_OCCUPANTCOUNT_UPDATE (u131)
					
					/***
					/*
					/* Informs the client that it joined a room.
					/*
					/**/
					
					let u131_message_id = "u131";
					
					let u131_message_name = "ROOM_OCCUPANTCOUNT_UPDATE";
					
					let u131_message_args = [];
					
					// Set the arguments for the u131 message
					
					let u131_roomID = room_name;
					
					let u131_numOccupants = 1;
					
					u131_message_args.push(u131_roomID);
					
					u131_message_args.push(u131_numOccupants);
					
					// Now compose the u131 message and add the upc message to the array
					join_room_result_data["2XROOM_OCCUPANTCOUNT_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u131_message_id, u131_message_name, u131_message_args)};
					
					//=============== END 131 =============
					
					//============== BEGIN u6 ==============
					
					//Response Message : JOINED_ROOM (u6)
					
					/***
					/*
					/* Informs the client that it joined a room.
					/*
					/**/
					
					let u6_message_id = "u6";
					
					let u6_message_name = "JOINED_ROOM";
					
					let u6_message_args = [];
					
					// Set the arguments for the u6 message
					
					let u6_roomID = room_name;
					
					let u6_status = "SUCCESS";
					
					u6_message_args.push(u6_roomID);
					
					u6_message_args.push(u6_status);
					
					// Now compose the u6 message and add the upc message to the array
					join_room_result_data["3XJOINED_ROOM"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u6_message_id, u6_message_name, u6_message_args)};
					
					//=============== END u6 =============
					
					//============== BEGIN u72 ==============
					
					//Response Message : JOIN_ROOM_RESULT (u72)
					
					
					/***
					/*
					/* Reports the result of a join-room request (u4). If status is SUCCESS, the client is also sent a separate u6 message.
					/*
					/**/
					
					let u72_message_id = "u72";
					
					let u72_message_name = "JOIN_ROOM_RESULT";
					
					let u72_message_args = [];
					
					// Set the arguments for the u72 message
					
					let u72_roomID = room_name;
					
					let u72_status = "SUCCESS";
					
					u72_message_args.push(u72_roomID);
					
					u72_message_args.push(u72_status);
					
					// Now compose the u72 message and add the upc message to the array
					join_room_result_data["4XJOIN_ROOM_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u72_message_id, u72_message_name, u72_message_args)};
					
					//=============== END u72 =============
					
					//============== BEGIN u36 ==============
					
					//Response Message : CLIENT_ADDED_TO_ROOM (u36)
					
					
					/***
				   /*
				   /* Reports that the specified client has joined the specified room.
				   /*
				   /**/
					
					let u36_message_id = "u36";
					
					let u36_message_name = "CLIENT_ADDED_TO_ROOM";
					
					let u36_message_args = [];
					
					// Set the arguments for the u36 message
					
					let u36_roomID = room_name;
					let u36_clientID = socket.id;
					let u36_userID = "";
					let u36_globalAttr = "";
					let u36_roomAttr = "";
					
					u36_message_args.push(u36_roomID);
					u36_message_args.push(u36_clientID);
					u36_message_args.push(u36_userID);
					u36_message_args.push(u36_globalAttr);
					u36_message_args.push(u36_roomAttr);
					
					// Now compose the u36 message and add the upc message to the array
					join_room_result_data["5XCLIENT_ADDED_TO_ROOM"] = {sendTo: 'SENDER_ROOM', roomId: u36_roomID, upcData: server_config.composeUPC(u36_message_id, u36_message_name, u36_message_args)};
					
					//=============== END u36 =============
					
					
					//Pass the resultant object to the array
					callBackFunction(join_room_result_data);
					
				});
				
			}
			
		},
		
		
		// SET_ROOM_ATTR_RESULT (u74)
		
		/**
		/*
		/* Reports the result of a request to change a room attribute.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		SET_ROOM_ATTR_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var set_room_attr_result_data = {};
			
			
			//============== BEGIN u74 ==============
			
			//Response Message : SET_ROOM_ATTR_RESULT (u74)
			
			
			/***
  		/*
  		/* Reports the result of a request to change a room attribute.
  		/*
  		/**/
			
			
			let u74_message_id = "u74";
			
			let u74_message_name = "SET_ROOM_ATTR_RESULT";
			
			let u74_message_args = [];
			
			// Set the arguments for the u74 message
			
			let u74_roomID = "";
			
			let u74_attrName = "";
			
			let u74_status = "";
			
			u74_message_args.push(u74_roomID);
			
			u74_message_args.push(u74_attrName);
			
			u74_message_args.push(u74_status);
			
			
			// Now compose the u74 message and add the upc message to the array
			set_room_attr_result_data["0XSET_ROOM_ATTR_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u74_message_id, u74_message_name, u74_message_args)};
			
			//=============== END u74 =============
			
			
			//============== BEGIN u9 ==============
			
			//Response Message : ROOM_ATTR_UPDATE (u9)
			
			
			let u9_message_id = "u9";
			
			let u9_message_name = "ROOM_ATTR_UPDATE";
			
			let u9_message_args = [];
			
			// Set the arguments for the u9 message
			
			let u9_roomID = "";
			
			let u9_clientID = "";
			
			let u9_attrName = "";
			
			let u9_attrVal = "";
			
			u9_message_args.push(u9_roomID);
			
			u9_message_args.push(u9_clientID);
			
			u9_message_args.push(u9_attrName);
			
			u9_message_args.push(u9_attrVal);
			
			
			// Now compose the u9 message and add the upc message to the array
			set_room_attr_result_data["1XROOM_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u9_message_id, u9_message_name, u9_message_args)};
			
			//=============== END u9 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(set_room_attr_result_data);
			
		},
		
		
		// LEAVE_ROOM_RESULT (u76)
		
		/**
		/*
		/* Reports the result of an attempt to leave the specified roomID. See u10.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		LEAVE_ROOM_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var leave_room_result_data = {};
			
			
			//============== BEGIN u76 ==============
			
			//Response Message : LEAVE_ROOM_RESULT (u76)
			
			
			/***
			/*
			/* Reports the result of an attempt to leave the specified roomID. See u10.
			/*
			/**/
			
			
			let u76_message_id = "u76";
			
			let u76_message_name = "LEAVE_ROOM_RESULT";
			
			let u76_message_args = [];
			
			// Set the arguments for the u76 message
			
			let u76_roomID = "";
			
			let u76_status = "";
			
			u76_message_args.push(u76_roomID);
			
			u76_message_args.push(u76_status);
			
			
			// Now compose the u76 message and add the upc message to the array
			leave_room_result_data["0XLEAVE_ROOM_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u76_message_id, u76_message_name, u76_message_args)};
			
			//=============== END u76 =============
			
			
			//============== BEGIN u44 ==============
			
			//Response Message : LEFT_ROOM (u44)
			
			
			let u44_message_id = "u44";
			
			let u44_message_name = "LEFT_ROOM";
			
			let u44_message_args = [];
			
			// Set the arguments for the u44 message
			
			let u44_roomID = "";
			
			u44_message_args.push(u44_roomID);
			
			
			// Now compose the u44 message and add the upc message to the array
			leave_room_result_data["1XLEFT_ROOM"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u44_message_id, u44_message_name, u44_message_args)};
			
			//=============== END u44 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(leave_room_result_data);
			
		},
		
		
		// CREATE_ACCOUNT_RESULT (u47)
		
		/**
		/*
		/* Reports the result of an attempt to create the client account specified by userID. See u11.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		CREATE_ACCOUNT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var create_account_result_data = {};
			
			
			//============== BEGIN u47 ==============
			
			//Response Message : CREATE_ACCOUNT_RESULT (u47)
			
			
			/***
  		/*
  		/* Reports the result of an attempt to create the client account specified by userID. See u11.
  		/*
  		/**/
			
			
			let u47_message_id = "u47";
			
			let u47_message_name = "CREATE_ACCOUNT_RESULT";
			
			let u47_message_args = [];
			
			// Set the arguments for the u47 message
			
			let u47_userID = "";
			
			let u47_status = "";
			
			u47_message_args.push(u47_userID);
			
			u47_message_args.push(u47_status);
			
			
			// Now compose the u47 message and add the upc message to the array
			create_account_result_data["0XCREATE_ACCOUNT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u47_message_id, u47_message_name, u47_message_args)};
			
			//=============== END u47 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(create_account_result_data);
			
		},
		
		
		// REMOVE_ACCOUNT_RESULT (u48)
		
		/**
		/*
		/* Reports the result of an attempt to remove (delete) the client account specified by userID. See u12.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		REMOVE_ACCOUNT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var remove_account_result_data = {};
			
			
			//============== BEGIN u48 ==============
			
			//Response Message : REMOVE_ACCOUNT_RESULT (u48)
			
			
			/***
  		/*
  		/* Reports the result of an attempt to remove (delete) the client account specified by userID. See u12.
  		/*
  		/**/
			
			
			let u48_message_id = "u48";
			
			let u48_message_name = "REMOVE_ACCOUNT_RESULT";
			
			let u48_message_args = [];
			
			// Set the arguments for the u48 message
			
			let u48_userID = "";
			
			let u48_status = "";
			
			u48_message_args.push(u48_userID);
			
			u48_message_args.push(u48_status);
			
			
			// Now compose the u48 message and add the upc message to the array
			remove_account_result_data["0XREMOVE_ACCOUNT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u48_message_id, u48_message_name, u48_message_args)};
			
			//=============== END u48 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(remove_account_result_data);
			
		},
		
		
		// CHANGE_ACCOUNT_PASSWORD_RESULT (u46)
		
		/**
		/*
		/* Reports the result of an attempt to change the password for the account specified by userID. See u13.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		CHANGE_ACCOUNT_PASSWORD_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var change_account_password_result_data = {};
			
			
			//============== BEGIN u46 ==============
			
			//Response Message : CHANGE_ACCOUNT_PASSWORD_RESULT (u46)
			
			
			/***
  		/*
  		/* Reports the result of an attempt to change the password for the account specified by userID. See u13.
  		/*
  		/**/
			
			
			let u46_message_id = "u46";
			
			let u46_message_name = "CHANGE_ACCOUNT_PASSWORD_RESULT";
			
			let u46_message_args = [];
			
			// Set the arguments for the u46 message
			
			let u46_userID = "";
			
			let u46_status = "";
			
			u46_message_args.push(u46_userID);
			
			u46_message_args.push(u46_status);
			
			
			// Now compose the u46 message and add the upc message to the array
			change_account_password_result_data["0XCHANGE_ACCOUNT_PASSWORD_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u46_message_id, u46_message_name, u46_message_args)};
			
			//=============== END u46 =============
			
			
			//============== BEGIN u90 ==============
			
			//Response Message : ACCOUNT_PASSWORD_CHANGED (u90)
			
			
			let u90_message_id = "u90";
			
			let u90_message_name = "ACCOUNT_PASSWORD_CHANGED";
			
			let u90_message_args = [];
			
			// Set the arguments for the u90 message
			
			
			// Now compose the u90 message and add the upc message to the array
			change_account_password_result_data["1XACCOUNT_PASSWORD_CHANGED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u90_message_id, u90_message_name, u90_message_args)};
			
			//=============== END u90 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(change_account_password_result_data);
			
		},
		
		
		// LOGIN_RESULT (u49)
		
		/**
		/*
		/* Reports the result of a login attempt made by the receiving client. See u14.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		LOGIN_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var login_result_data = {};
			
			
			//============== BEGIN u49 ==============
			
			//Response Message : LOGIN_RESULT (u49)
			
			
			/***
  		/*
  		/* Reports the result of a login attempt made by the receiving client. See u14.
  		/*
  		/**/
			
			
			let u49_message_id = "u49";
			
			let u49_message_name = "LOGIN_RESULT";
			
			let u49_message_args = [];
			
			// Set the arguments for the u49 message
			
			let u49_userID = "";
			
			let u49_status = "";
			
			u49_message_args.push(u49_userID);
			
			u49_message_args.push(u49_status);
			
			
			// Now compose the u49 message and add the upc message to the array
			login_result_data["0XLOGIN_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u49_message_id, u49_message_name, u49_message_args)};
			
			//=============== END u49 =============
			
			
			//============== BEGIN u88 ==============
			
			//Response Message : LOGGED_IN (u88)
			
			
			let u88_message_id = "u88";
			
			let u88_message_name = "LOGGED_IN";
			
			let u88_message_args = [];
			
			// Set the arguments for the u88 message
			
			let u88_clientID = "";
			
			let u88_userID = "";
			
			let u88_globalAttrs = "";
			
			let u88_roomID1 = "";
			
			let u88___roomAttrs = "";
			
			u88_message_args.push(u88_clientID);
			
			u88_message_args.push(u88_userID);
			
			u88_message_args.push(u88_globalAttrs);
			
			u88_message_args.push(u88_roomID1);
			
			u88_message_args.push(u88___roomAttrs);
			
			
			// Now compose the u88 message and add the upc message to the array
			login_result_data["1XLOGGED_IN"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u88_message_id, u88_message_name, u88_message_args)};
			
			//=============== END u88 =============
			
			
			//============== BEGIN u8 ==============
			
			//Response Message : CLIENT_ATTR_UPDATE (u8)
			
			
			let u8_message_id = "u8";
			
			let u8_message_name = "CLIENT_ATTR_UPDATE";
			
			let u8_message_args = [];
			
			// Set the arguments for the u8 message
			
			let u8_roomID = "";
			
			let u8_clientID = "";
			
			let u8_userID = "";
			
			let u8_attrName = "";
			
			let u8_attrVal = "";
			
			let u8_attrOptions = "";
			
			u8_message_args.push(u8_roomID);
			
			u8_message_args.push(u8_clientID);
			
			u8_message_args.push(u8_userID);
			
			u8_message_args.push(u8_attrName);
			
			u8_message_args.push(u8_attrVal);
			
			u8_message_args.push(u8_attrOptions);
			
			
			// Now compose the u8 message and add the upc message to the array
			login_result_data["2XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
			
			//=============== END u8 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(login_result_data);
			
		},
		
		
		// GET_CLIENTCOUNT_SNAPSHOT_RESULT (u75)
		
		/**
		/*
		/* Reports the result of a request for the number of clients on the server.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		GET_CLIENTCOUNT_SNAPSHOT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var get_clientcount_snapshot_result_data = {};
			
			
			//============== BEGIN u75 ==============
			
			//Response Message : GET_CLIENTCOUNT_SNAPSHOT_RESULT (u75)
			
			
			/***
  		/*
  		/* Reports the result of a request for the number of clients on the server.
  		/*
  		/**/
			
			
			let u75_message_id = "u75";
			
			let u75_message_name = "GET_CLIENTCOUNT_SNAPSHOT_RESULT";
			
			let u75_message_args = [];
			
			// Set the arguments for the u75 message
			
			let u75_requestID = "";
			
			let u75_status = "";
			
			u75_message_args.push(u75_requestID);
			
			u75_message_args.push(u75_status);
			
			
			// Now compose the u75 message and add the upc message to the array
			get_clientcount_snapshot_result_data["0XGET_CLIENTCOUNT_SNAPSHOT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u75_message_id, u75_message_name, u75_message_args)};
			
			//=============== END u75 =============
			
			
			//============== BEGIN u34 ==============
			
			//Response Message : CLIENTCOUNT_SNAPSHOT (u34)
			
			
			let u34_message_id = "u34";
			
			let u34_message_name = "CLIENTCOUNT_SNAPSHOT";
			
			let u34_message_args = [];
			
			// Set the arguments for the u34 message
			
			let u34_requestID = "";
			
			let u34_numClients = "";
			
			u34_message_args.push(u34_requestID);
			
			u34_message_args.push(u34_numClients);
			
			
			// Now compose the u34 message and add the upc message to the array
			get_clientcount_snapshot_result_data["1XCLIENTCOUNT_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u34_message_id, u34_message_name, u34_message_args)};
			
			//=============== END u34 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(get_clientcount_snapshot_result_data);
			
		},
		
		
		// SERVER_TIME_UPDATE (u50)
		
		/**
		/*
		/* Reports the current time on the server, in UTC, using milliseconds-from-1970 format. See u19.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		SERVER_TIME_UPDATE: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var server_time_update_data = {};
			
			
			//============== BEGIN u50 ==============
			
			//Response Message : SERVER_TIME_UPDATE (u50)
			
			
			/***
  		/*
  		/* Reports the current time on the server, in UTC, using milliseconds-from-1970 format. See u19.
  		/*
  		/**/
			
			
			let u50_message_id = "u50";
			
			let u50_message_name = "SERVER_TIME_UPDATE";
			
			let u50_message_args = [];
			
			// Set the arguments for the u50 message
			
			let u50_timeOnServer = "";
			
			u50_message_args.push(u50_timeOnServer);
			
			
			// Now compose the u50 message and add the upc message to the array
			server_time_update_data["0XSERVER_TIME_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u50_message_id, u50_message_name, u50_message_args)};
			
			//=============== END u50 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(server_time_update_data);
			
		},
		
		
		// ROOMLIST_SNAPSHOT (u38)
		
		/**
		/*
		/* Provides a list of rooms on the server. A u38 is sent in response to u21 and u26. The requestedRoomIDQualifier and recursive arguments are the original values supplied to the call that generated the room list.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		ROOMLIST_SNAPSHOT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var roomlist_snapshot_data = {};
			
			
			//============== BEGIN u38 ==============
			
			//Response Message : ROOMLIST_SNAPSHOT (u38)
			
			
			/***
  		/*
  		/* Provides a list of rooms on the server. A u38 is sent in response to u21 and u26. The requestedRoomIDQualifier and recursive arguments are the original values supplied to the call that generated the room list.
  		/*
  		/**/
			
			
			let u38_message_id = "u38";
			
			let u38_message_name = "ROOMLIST_SNAPSHOT";
			
			let u38_message_args = [];
			
			// Set the arguments for the u38 message
			
			let u38_requestID = "";
			
			let u38_requestedRoomIDQualifier = "";
			
			let u38_recursive = "";
			
			let u38___roomIDQualifiers = "";
			
			u38_message_args.push(u38_requestID);
			
			u38_message_args.push(u38_requestedRoomIDQualifier);
			
			u38_message_args.push(u38_recursive);
			
			u38_message_args.push(u38___roomIDQualifiers);
			
			
			// Now compose the u38 message and add the upc message to the array
			roomlist_snapshot_data["0XROOMLIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u38_message_id, u38_message_name, u38_message_args)};
			
			//=============== END u38 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(roomlist_snapshot_data);
			
		},
		
		
		// CREATE_ROOM_RESULT (u32)
		
		/**
		/*
		/* Reports the result of a room-creation attempt to the client.
	 /*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		CREATE_ROOM_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			//Execute an SQL statement to create a new room in the database. Get the resultant roomID
			
			var create_room_result_data = {};
			
			//============== BEGIN u32 ==============
			
			//Response Message : CREATE_ROOM_RESULT (u32)
			
			
			/***
			    /*
			    /* Reports the result of a room-creation attempt to the client.
			    /*
			    /**/
			
			
			let u32_message_id = "u32";
			
			let u32_message_name = "CREATE_ROOM_RESULT";
			
			let u32_message_args = [];
			
			let u32_status = "SUCCESS";
			
			console.log("CREATE_ROOM_RESULT", data.length !== 0);
			
			if (data.length !== 0) {
				
				// Set the arguments for the u32 message
				
				u32_status = "ROOM_EXISTS";
				
				let u32_roomID = data[0].room_name;
				
				u32_message_args.push(u32_roomID);
				
				u32_message_args.push(u32_status);
				
				// Now compose the u32 message and add the upc message to the array
				create_room_result_data["0XCREATE_ROOM_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u32_message_id, u32_message_name, u32_message_args)};
				
			} else {
				
				let room_name = args["roomID"];
				let room_settings = args["roomSettings"].toString().split("|");
				let room_die_on_empty = room_settings[1] === "true" ? 1 : 0;
				let room_max_clients = parseInt(room_settings[3]);
				let room_password = room_settings[5] === "" ? "NO_PASSWORD" : room_settings[5];
				let room_slug = snippet.toUsername(args["roomID"]);
				
				let sql = "INSERT INTO `socket24db`.`tbl_rooms` (`room_id`, `room_uuid`, `room_name`, `room_slug`, `room_description`, `room_icon`, `room_created_by`, `room_admins`, `room_type`, `room_is_public`, `room_password`, `room_is_active`, `room_created_time`, `room_max_occupants`, `room_die_on_empty`) VALUES (NULL, MD5('" + room_slug + "'), '" + room_name + "', '" + room_slug + "', NULL, 'default.png', '1', '1', 'DEFAULT', '1', MD5('" + room_password + "'), '1', current_timestamp(), '" + room_max_clients + "', '" + room_die_on_empty + "');";
				
				db.exeSQL(sql, function (result, fields) {
					
					// Set the arguments for the u32 message
					
					//console.log("::FIELDS", fields);
					
					u32_status = "SUCCESS";
					
					let u32_roomID = args["roomID"];
					
					u32_message_args.push(u32_roomID);
					
					u32_message_args.push(u32_status);
					
					// Now compose the u32 message and add the upc message to the array
					create_room_result_data["0XCREATE_ROOM_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u32_message_id, u32_message_name, u32_message_args)};
					
				});
				
				//=============== END u32 =============
				
			}
			
			//Pass the resultant object to the array
			callBackFunction(create_room_result_data);
			
		},
		
		// ROOM_ADDED (u39)
		
		/**
		/*
		/* Reports that the specified room was added. Sent to clients watching the specified room's qualifier. See u26.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		ROOM_ADDED: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			//Execute an SQL statement to create a new room in the database. Get the resultant roomID
			
			var room_added_data = {};
			
			//============== BEGIN u39 ==============
			
			//Response Message : ROOM_ADDED (u39)
			
			
			/***
			   /*
			   /* Reports that the specified room was added. Sent to clients watching the specified room's qualifier. See u26.
			   /*
			   /**/
			
			
			let u39_message_id = "u39";
			
			let u39_message_name = "ROOM_ADDED";
			
			let u39_message_args = [];
			
			let u39_roomID = data[0].room_name;
			
			u39_message_args.push(u39_roomID);
			
			// Now compose the u39 message and add the upc message to the array
			room_added_data["6XROOM_ADDED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u39_message_id, u39_message_name, u39_message_args)};
			
			//=============== END u39 =============
			
			//Pass the resultant object to the array
			callBackFunction(room_added_data);
			
		},
		
		
		// ROOM_REMOVED (u40)
		
		/**
		/*
		/* Reports that the specified room was removed. Sent to clients watching the specified room's qualifier. See u26. Also sent to clients in or observing a room when the room is removed (regardless of their update levels). Note that clients do not receive separate u37 (CLIENT_REMOVED) notifications for clients that are forced out of a room when it is removed.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		ROOM_REMOVED: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var room_removed_data = {};
			
			
			//============== BEGIN u40 ==============
			
			//Response Message : ROOM_REMOVED (u40)
			
			
			/***
  		/*
  		/* Reports that the specified room was removed. Sent to clients watching the specified room's qualifier. See u26. Also sent to clients in or observing a room when the room is removed (regardless of their update levels). Note that clients do not receive separate u37 (CLIENT_REMOVED) notifications for clients that are forced out of a room when it is removed.
  		/*
  		/**/
			
			
			let u40_message_id = "u40";
			
			let u40_message_name = "ROOM_REMOVED";
			
			let u40_message_args = [];
			
			// Set the arguments for the u40 message
			
			let u40_roomID = "";
			
			u40_message_args.push(u40_roomID);
			
			
			// Now compose the u40 message and add the upc message to the array
			room_removed_data["0XROOM_REMOVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u40_message_id, u40_message_name, u40_message_args)};
			
			//=============== END u40 =============
			
			
			//============== BEGIN u33 ==============
			
			//Response Message : REMOVE_ROOM_RESULT (u33)
			
			
			let u33_message_id = "u33";
			
			let u33_message_name = "REMOVE_ROOM_RESULT";
			
			let u33_message_args = [];
			
			// Set the arguments for the u33 message
			
			let u33_roomID = "";
			
			let u33_status = "";
			
			u33_message_args.push(u33_roomID);
			
			u33_message_args.push(u33_status);
			
			
			// Now compose the u33 message and add the upc message to the array
			room_removed_data["1XREMOVE_ROOM_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u33_message_id, u33_message_name, u33_message_args)};
			
			//=============== END u33 =============
			
			
			//============== BEGIN u37 ==============
			
			//Response Message : CLIENT_REMOVED_FROM_ROOM (u37)
			
			
			let u37_message_id = "u37";
			
			let u37_message_name = "CLIENT_REMOVED_FROM_ROOM";
			
			let u37_message_args = [];
			
			// Set the arguments for the u37 message
			
			let u37_roomID = "";
			
			let u37_clientID = "";
			
			u37_message_args.push(u37_roomID);
			
			u37_message_args.push(u37_clientID);
			
			
			// Now compose the u37 message and add the upc message to the array
			room_removed_data["2XCLIENT_REMOVED_FROM_ROOM"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u37_message_id, u37_message_name, u37_message_args)};
			
			//=============== END u37 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(room_removed_data);
			
		}
		,
		
		
		// WATCH_FOR_ROOMS_RESULT (u42)
		
		/**
		/*
		/* Reports the result of a u26 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		WATCH_FOR_ROOMS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var watch_for_rooms_result_data = {};
			
			
			//============== BEGIN u42 ==============
			
			//Response Message : WATCH_FOR_ROOMS_RESULT (u42)
			
			
			/***
  		/*
  		/* Reports the result of a u26 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
  		/*
  		/**/
			
			
			let u42_message_id = "u42";
			
			let u42_message_name = "WATCH_FOR_ROOMS_RESULT";
			
			let u42_message_args = [];
			
			// Set the arguments for the u42 message
			
			let u42_roomIdQualifier = "";
			
			let u42_recursive = "";
			
			let u42_status = "";
			
			u42_message_args.push(u42_roomIdQualifier);
			
			u42_message_args.push(u42_recursive);
			
			u42_message_args.push(u42_status);
			
			
			// Now compose the u42 message and add the upc message to the array
			watch_for_rooms_result_data["0XWATCH_FOR_ROOMS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u42_message_id, u42_message_name, u42_message_args)};
			
			//=============== END u42 =============
			
			
			//============== BEGIN u38 ==============
			
			//Response Message : ROOMLIST_SNAPSHOT (u38)
			
			
			let u38_message_id = "u38";
			
			let u38_message_name = "ROOMLIST_SNAPSHOT";
			
			let u38_message_args = [];
			
			// Set the arguments for the u38 message
			
			let u38_requestID = "";
			
			let u38_requestedRoomIDQualifier = "";
			
			let u38_recursive = "";
			
			let u38___roomIDQualifiers = "";
			
			u38_message_args.push(u38_requestID);
			
			u38_message_args.push(u38_requestedRoomIDQualifier);
			
			u38_message_args.push(u38_recursive);
			
			u38_message_args.push(u38___roomIDQualifiers);
			
			
			// Now compose the u38 message and add the upc message to the array
			watch_for_rooms_result_data["1XROOMLIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u38_message_id, u38_message_name, u38_message_args)};
			
			//=============== END u38 =============
			
			
			//============== BEGIN u39 ==============
			
			//Response Message : ROOM_ADDED (u39)
			
			
			let u39_message_id = "u39";
			
			let u39_message_name = "ROOM_ADDED";
			
			let u39_message_args = [];
			
			// Set the arguments for the u39 message
			
			let u39_roomID = "";
			
			u39_message_args.push(u39_roomID);
			
			
			// Now compose the u39 message and add the upc message to the array
			watch_for_rooms_result_data["2XROOM_ADDED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u39_message_id, u39_message_name, u39_message_args)};
			
			//=============== END u39 =============
			
			
			//============== BEGIN u40 ==============
			
			//Response Message : ROOM_REMOVED (u40)
			
			
			let u40_message_id = "u40";
			
			let u40_message_name = "ROOM_REMOVED";
			
			let u40_message_args = [];
			
			// Set the arguments for the u40 message
			
			let u40_roomID = "";
			
			u40_message_args.push(u40_roomID);
			
			
			// Now compose the u40 message and add the upc message to the array
			watch_for_rooms_result_data["3XROOM_REMOVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u40_message_id, u40_message_name, u40_message_args)};
			
			//=============== END u40 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(watch_for_rooms_result_data);
			
		}
		,
		
		
		// STOP_WATCHING_FOR_ROOMS_RESULT (u43)
		
		/**
		/*
		/* Reports the result of a u27 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_WATCHING_FOR_ROOMS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_watching_for_rooms_result_data = {};
			
			
			//============== BEGIN u43 ==============
			
			//Response Message : STOP_WATCHING_FOR_ROOMS_RESULT (u43)
			
			
			/***
  		/*
  		/* Reports the result of a u27 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
  		/*
  		/**/
			
			
			let u43_message_id = "u43";
			
			let u43_message_name = "STOP_WATCHING_FOR_ROOMS_RESULT";
			
			let u43_message_args = [];
			
			// Set the arguments for the u43 message
			
			let u43_roomIdQualifier = "";
			
			let u43_recursive = "";
			
			let u43_status = "";
			
			u43_message_args.push(u43_roomIdQualifier);
			
			u43_message_args.push(u43_recursive);
			
			u43_message_args.push(u43_status);
			
			
			// Now compose the u43 message and add the upc message to the array
			stop_watching_for_rooms_result_data["0XSTOP_WATCHING_FOR_ROOMS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u43_message_id, u43_message_name, u43_message_args)};
			
			//=============== END u43 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_watching_for_rooms_result_data);
			
		}
		,
		
		
		// GET_ROOM_SNAPSHOT_RESULT (u60)
		
		/**
		/*
		/* Reports the result of a u55 request by the client.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		GET_ROOM_SNAPSHOT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var get_room_snapshot_result_data = {};
			
			
			//============== BEGIN u60 ==============
			
			//Response Message : GET_ROOM_SNAPSHOT_RESULT (u60)
			
			
			/***
  		/*
  		/* Reports the result of a u55 request by the client.
  		/*
  		/**/
			
			
			let u60_message_id = "u60";
			
			let u60_message_name = "GET_ROOM_SNAPSHOT_RESULT";
			
			let u60_message_args = [];
			
			// Set the arguments for the u60 message
			
			let u60_requestID = "";
			
			let u60_roomID = "";
			
			let u60_status = "";
			
			u60_message_args.push(u60_requestID);
			
			u60_message_args.push(u60_roomID);
			
			u60_message_args.push(u60_status);
			
			
			// Now compose the u60 message and add the upc message to the array
			get_room_snapshot_result_data["0XGET_ROOM_SNAPSHOT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u60_message_id, u60_message_name, u60_message_args)};
			
			//=============== END u60 =============
			
			
			//============== BEGIN u54 ==============
			
			//Response Message : ROOM_SNAPSHOT (u54)
			
			
			let u54_message_id = "u54";
			
			let u54_message_name = "ROOM_SNAPSHOT";
			
			let u54_message_args = [];
			
			// Set the arguments for the u54 message
			
			let u54_requestID = "";
			
			let u54_roomID = "";
			
			let u54_occupantCount = "";
			
			let u54_observerCount = "";
			
			let u54_roomAttrs = "";
			
			let u54_client1clientID = "";
			
			let u54_client1userID = "";
			
			let u54_client1occupantObserverIndicator = "";
			
			let u54___globalAttrs = "";
			
			u54_message_args.push(u54_requestID);
			
			u54_message_args.push(u54_roomID);
			
			u54_message_args.push(u54_occupantCount);
			
			u54_message_args.push(u54_observerCount);
			
			u54_message_args.push(u54_roomAttrs);
			
			u54_message_args.push(u54_client1clientID);
			
			u54_message_args.push(u54_client1userID);
			
			u54_message_args.push(u54_client1occupantObserverIndicator);
			
			u54_message_args.push(u54___globalAttrs);
			
			
			// Now compose the u54 message and add the upc message to the array
			get_room_snapshot_result_data["1XROOM_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u54_message_id, u54_message_name, u54_message_args)};
			
			//=============== END u54 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(get_room_snapshot_result_data);
			
		}
		,
		
		
		// OBSERVE_ROOM_RESULT (u77)
		
		/**
		/*
		/* Reports the result of a room observation attempt (u58) by the client. If status is SUCCESS, the client is also sent a separate u59 message.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		OBSERVE_ROOM_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var observe_room_result_data = {};
			
			
			//============== BEGIN u77 ==============
			
			//Response Message : OBSERVE_ROOM_RESULT (u77)
			
			
			/***
  		/*
  		/* Reports the result of a room observation attempt (u58) by the client. If status is SUCCESS, the client is also sent a separate u59 message.
  		/*
  		/**/
			
			
			let u77_message_id = "u77";
			
			let u77_message_name = "OBSERVE_ROOM_RESULT";
			
			let u77_message_args = [];
			
			// Set the arguments for the u77 message
			
			let u77_roomID = "";
			
			let u77_status = "";
			
			u77_message_args.push(u77_roomID);
			
			u77_message_args.push(u77_status);
			
			
			// Now compose the u77 message and add the upc message to the array
			observe_room_result_data["0XOBSERVE_ROOM_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u77_message_id, u77_message_name, u77_message_args)};
			
			//=============== END u77 =============
			
			
			//============== BEGIN u59 ==============
			
			//Response Message : OBSERVED_ROOM (u59)
			
			
			let u59_message_id = "u59";
			
			let u59_message_name = "OBSERVED_ROOM";
			
			let u59_message_args = [];
			
			// Set the arguments for the u59 message
			
			let u59_roomID = "";
			
			u59_message_args.push(u59_roomID);
			
			
			// Now compose the u59 message and add the upc message to the array
			observe_room_result_data["1XOBSERVED_ROOM"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u59_message_id, u59_message_name, u59_message_args)};
			
			//=============== END u59 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(observe_room_result_data);
			
		}
		,
		
		
		// STOP_OBSERVING_ROOM_RESULT (u78)
		
		/**
		/*
		/* Reports the result of an attempt to stop observing the specified roomID. See u61.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_OBSERVING_ROOM_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_observing_room_result_data = {};
			
			
			//============== BEGIN u78 ==============
			
			//Response Message : STOP_OBSERVING_ROOM_RESULT (u78)
			
			
			/***
  		/*
  		/* Reports the result of an attempt to stop observing the specified roomID. See u61.
  		/*
  		/**/
			
			
			let u78_message_id = "u78";
			
			let u78_message_name = "STOP_OBSERVING_ROOM_RESULT";
			
			let u78_message_args = [];
			
			// Set the arguments for the u78 message
			
			let u78_roomID = "";
			
			let u78_status = "";
			
			u78_message_args.push(u78_roomID);
			
			u78_message_args.push(u78_status);
			
			
			// Now compose the u78 message and add the upc message to the array
			stop_observing_room_result_data["0XSTOP_OBSERVING_ROOM_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u78_message_id, u78_message_name, u78_message_args)};
			
			//=============== END u78 =============
			
			
			//============== BEGIN u62 ==============
			
			//Response Message : STOPPED_OBSERVING_ROOM (u62)
			
			
			let u62_message_id = "u62";
			
			let u62_message_name = "STOPPED_OBSERVING_ROOM";
			
			let u62_message_args = [];
			
			// Set the arguments for the u62 message
			
			let u62_roomID = "";
			
			u62_message_args.push(u62_roomID);
			
			
			// Now compose the u62 message and add the upc message to the array
			stop_observing_room_result_data["1XSTOPPED_OBSERVING_ROOM"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u62_message_id, u62_message_name, u62_message_args)};
			
			//=============== END u62 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_observing_room_result_data);
			
		}
		,
		
		
		// UPDATE_LEVELS_UPDATE (u128)
		
		/**
		/*
		/* forms the receiving client that its update levels for a room have changed. See u64.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		UPDATE_LEVELS_UPDATE: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var update_levels_update_data = {};
			
			
			//============== BEGIN u128 ==============
			
			//Response Message : UPDATE_LEVELS_UPDATE (u128)
			
			
			/***
  		/*
  		/* forms the receiving client that its update levels for a room have changed. See u64.
  		/*
  		/**/
			
			
			let u128_message_id = "u128";
			
			let u128_message_name = "UPDATE_LEVELS_UPDATE";
			
			let u128_message_args = [];
			
			// Set the arguments for the u128 message
			
			let u128_updateLevels = "";
			
			let u128_roomID = "";
			
			u128_message_args.push(u128_updateLevels);
			
			u128_message_args.push(u128_roomID);
			
			
			// Now compose the u128 message and add the upc message to the array
			update_levels_update_data["0XUPDATE_LEVELS_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u128_message_id, u128_message_name, u128_message_args)};
			
			//=============== END u128 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(update_levels_update_data);
			
		}
		,
		
		
		// SERVER_HELLO (u66)
		
		/**
		/*
		/* SERVER_HELLO is the second step in the client-server connection process. It tells the client the server's version and protocol version, and provides the client with a server-side session ID used to identify the connection. If the server determines the client to be unacceptably protocol-incompatible, the server will automatically disconnect the client. For compatibility details, see u65. The affinityAddress indicates the server's public address. When affinityAddress is provided, clients must send all communications to that address for the specified affinityDuration, which is given in minutes. Union Platform's affinity system ensures that a given client will connect to a specific Union Server node in a cluster for a specified duration, as is required in load-balanced configurations.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		SERVER_HELLO: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var server_hello_data = {};
			
			
			//============== BEGIN u66 ==============
			
			//Response Message : SERVER_HELLO (u66)
			
			
			/***
  		/*
  		/* SERVER_HELLO is the second step in the client-server connection process. It tells the client the server's version and protocol version, and provides the client with a server-side session ID used to identify the connection. If the server determines the client to be unacceptably protocol-incompatible, the server will automatically disconnect the client. For compatibility details, see u65. The affinityAddress indicates the server's public address. When affinityAddress is provided, clients must send all communications to that address for the specified affinityDuration, which is given in minutes. Union Platform's affinity system ensures that a given client will connect to a specific Union Server node in a cluster for a specified duration, as is required in load-balanced configurations.
  		/*
  		/**/
			
			
			let u66_message_id = "u66";
			
			let u66_message_name = "SERVER_HELLO";
			
			let u66_message_args = [];
			
			// Set the arguments for the u66 message
			
			let u66_serverVersion = server_config.server.serverVersion;
			
			let u66_sessionID = socket.id;
			
			let u66_upcVersion = server_config.server.upcVersion;
			
			let u66_protocolCompatible = (args["upcVersion"] === server_config.server.upcVersion);
			
			let u66_affinityAddress = server_config.server.affinityAddress;
			
			let u66_affinityDuration = server_config.server.affinityDuration;
			
			u66_message_args.push(u66_serverVersion);
			
			u66_message_args.push(u66_sessionID);
			
			u66_message_args.push(u66_upcVersion);
			
			u66_message_args.push(u66_protocolCompatible);
			
			u66_message_args.push(u66_affinityAddress);
			
			u66_message_args.push(u66_affinityDuration);
			
			// Now compose the u66 message and add the upc message to the array
			server_hello_data["0XSERVER_HELLO"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u66_message_id, u66_message_name, u66_message_args)};
			
			//=============== END u66 =============
			
			var client_metadata = snippet.clients.getMetadata(args, server_socket.id, server_socket.handshake.address, 0);
			
			let sql = sqlObj.getSQLCreateClient(client_metadata);
			
			db.exeSQL(sql, function (result, fields) {
				
				if (result.affectedRows > 0) {
					
					let new_client_id = result.insertId;
					
					//Update the Socket ID
					server_socket.id = new_client_id;
					
					//============== BEGIN u29 ==============
					
					//Response Message : CLIENT_METADATA (u29)
					
					console.log("CLIENT_META_DATA", fields, result);
					
					let u29_message_id = "u29";
					
					let u29_message_name = "CLIENT_METADATA";
					
					let u29_message_args = [];
					
					// Set the arguments for the u29 message
					
					let u29_clientID = new_client_id;
					
					u29_message_args.push(u29_clientID);
					
					
					// Now compose the u29 message and add the upc message to the array
					server_hello_data["1XCLIENT_METADATA"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u29_message_id, u29_message_name, u29_message_args)};
					
					//=============== END u29 =============
					
					
					//============== BEGIN u8 ==============
					
					//Response Message : CLIENT_ATTR_UPDATE (u8)
					
					let u8_message_id = "u8";
					
					let u8_message_name = "CLIENT_ATTR_UPDATE";
					
					//#1
					
					let u8_message_args = [];
					
					// Set the arguments for the u8 message
					u8_message_args.push("");
					u8_message_args.push(new_client_id);
					u8_message_args.push("");
					u8_message_args.push("_CT");
					u8_message_args.push(new Date().getTime());
					u8_message_args.push(36);
					
					// Now compose the u8 message and add the upc message to the array
					server_hello_data["1.1XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
					
					//#2
					
					u8_message_args = [];
					
					// Set the arguments for the u8 message
					u8_message_args.push("");
					u8_message_args.push(new_client_id);
					u8_message_args.push("");
					u8_message_args.push("_IP");
					u8_message_args.push(server_socket.handshake.address);
					u8_message_args.push(36);
					
					// Now compose the u8 message and add the upc message to the array
					server_hello_data["1.2XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
					
					//#3
					
					u8_message_args = [];
					
					// Set the arguments for the u8 message
					u8_message_args.push("");
					u8_message_args.push(new_client_id);
					u8_message_args.push("");
					u8_message_args.push("_GATEWAY_ID");
					u8_message_args.push(client_metadata.client_gateway);
					u8_message_args.push(36);
					
					// Now compose the u8 message and add the upc message to the array
					server_hello_data["1.3XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
					
					//#4
					
					u8_message_args = [];
					
					// Set the arguments for the u8 message
					u8_message_args.push("");
					u8_message_args.push(new_client_id);
					u8_message_args.push("");
					u8_message_args.push("_GATEWAY_TYPE");
					u8_message_args.push(client_metadata.gateway_type);
					u8_message_args.push(36);
					
					// Now compose the u8 message and add the upc message to the array
					server_hello_data["1.4XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
					
					//#5
					
					u8_message_args = [];
					
					// Set the arguments for the u8 message
					u8_message_args.push("");
					u8_message_args.push(new_client_id);
					u8_message_args.push("");
					u8_message_args.push("_CONNECTION_TYPE");
					u8_message_args.push(client_metadata.client_connection_type);
					u8_message_args.push(36);
					
					// Now compose the u8 message and add the upc message to the array
					server_hello_data["1.5XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
					
					//#6
					
					u8_message_args = [];
					
					// Set the arguments for the u8 message
					u8_message_args.push("");
					u8_message_args.push(new_client_id);
					u8_message_args.push("");
					u8_message_args.push("_CLIENT_TYPE");
					u8_message_args.push(client_metadata.client_connection_type);
					u8_message_args.push(36);
					
					// Now compose the u8 message and add the upc message to the array
					server_hello_data["1.6XCLIENT_ATTR_UPDATE"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u8_message_id, u8_message_name, u8_message_args)};
					
					//=============== END u8 =============
					
					// Save client data to database
					
					//============== BEGIN u63 ==============
					
					//Response Message : CLIENT_READY (u63)
					
					
					let u63_message_id = "u63";
					
					let u63_message_name = "CLIENT_READY";
					
					let u63_message_args = [];
					
					// Set the arguments for the u63 message
					
					// Now compose the u63 message and add the upc message to the array
					server_hello_data["2XCLIENT_READY"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u63_message_id, u63_message_name, u63_message_args)};
					
					//=============== END u63 =============
					
					console.warn('Client connected : CLIENT#00' + server_socket.id);
					
					//Pass the resultant object to the array
					callBackFunction(server_hello_data);
					
				}
				
			});
			
		}
		,
		
		
		// REMOVE_ROOM_ATTR_RESULT (u80)
		
		/**
		/*
		/* Reports the result of a request to remove a room attribute.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		REMOVE_ROOM_ATTR_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var remove_room_attr_result_data = {};
			
			
			//============== BEGIN u80 ==============
			
			//Response Message : REMOVE_ROOM_ATTR_RESULT (u80)
			
			
			/***
  		/*
  		/* Reports the result of a request to remove a room attribute.
  		/*
  		/**/
			
			
			let u80_message_id = "u80";
			
			let u80_message_name = "REMOVE_ROOM_ATTR_RESULT";
			
			let u80_message_args = [];
			
			// Set the arguments for the u80 message
			
			let u80_roomID = "";
			
			let u80_attrName = "";
			
			let u80_status = "";
			
			u80_message_args.push(u80_roomID);
			
			u80_message_args.push(u80_attrName);
			
			u80_message_args.push(u80_status);
			
			
			// Now compose the u80 message and add the upc message to the array
			remove_room_attr_result_data["0XREMOVE_ROOM_ATTR_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u80_message_id, u80_message_name, u80_message_args)};
			
			//=============== END u80 =============
			
			
			//============== BEGIN u79 ==============
			
			//Response Message : ROOM_ATTR_REMOVED (u79)
			
			
			let u79_message_id = "u79";
			
			let u79_message_name = "ROOM_ATTR_REMOVED";
			
			let u79_message_args = [];
			
			// Set the arguments for the u79 message
			
			let u79_roomID = "";
			
			let u79_clientID = "";
			
			let u79_attrName = "";
			
			u79_message_args.push(u79_roomID);
			
			u79_message_args.push(u79_clientID);
			
			u79_message_args.push(u79_attrName);
			
			
			// Now compose the u79 message and add the upc message to the array
			remove_room_attr_result_data["1XROOM_ATTR_REMOVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u79_message_id, u79_message_name, u79_message_args)};
			
			//=============== END u79 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(remove_room_attr_result_data);
			
		}
		,
		
		
		// REMOVE_CLIENT_ATTR_RESULT (u82)
		
		/**
		/*
		/* Reports the result of a request to remove a client attribute.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		REMOVE_CLIENT_ATTR_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var remove_client_attr_result_data = {};
			
			
			//============== BEGIN u82 ==============
			
			//Response Message : REMOVE_CLIENT_ATTR_RESULT (u82)
			
			
			/***
  		/*
  		/* Reports the result of a request to remove a client attribute.
  		/*
  		/**/
			
			
			let u82_message_id = "u82";
			
			let u82_message_name = "REMOVE_CLIENT_ATTR_RESULT";
			
			let u82_message_args = [];
			
			// Set the arguments for the u82 message
			
			let u82_roomID = "";
			
			let u82_clientID = "";
			
			let u82_userID = "";
			
			let u82_attrName = "";
			
			let u82_attrOptions = "";
			
			let u82_status = "";
			
			u82_message_args.push(u82_roomID);
			
			u82_message_args.push(u82_clientID);
			
			u82_message_args.push(u82_userID);
			
			u82_message_args.push(u82_attrName);
			
			u82_message_args.push(u82_attrOptions);
			
			u82_message_args.push(u82_status);
			
			
			// Now compose the u82 message and add the upc message to the array
			remove_client_attr_result_data["0XREMOVE_CLIENT_ATTR_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u82_message_id, u82_message_name, u82_message_args)};
			
			//=============== END u82 =============
			
			
			//============== BEGIN u81 ==============
			
			//Response Message : CLIENT_ATTR_REMOVED (u81)
			
			
			let u81_message_id = "u81";
			
			let u81_message_name = "CLIENT_ATTR_REMOVED";
			
			let u81_message_args = [];
			
			// Set the arguments for the u81 message
			
			let u81_roomID = "";
			
			let u81_clientID = "";
			
			let u81_userID = "";
			
			let u81_attrName = "";
			
			let u81_attrOptions = "";
			
			u81_message_args.push(u81_roomID);
			
			u81_message_args.push(u81_clientID);
			
			u81_message_args.push(u81_userID);
			
			u81_message_args.push(u81_attrName);
			
			u81_message_args.push(u81_attrOptions);
			
			
			// Now compose the u81 message and add the upc message to the array
			remove_client_attr_result_data["1XCLIENT_ATTR_REMOVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u81_message_id, u81_message_name, u81_message_args)};
			
			//=============== END u81 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(remove_client_attr_result_data);
			
		}
		,
		
		
		// DONT_REPLY (u00)
		
		/**
		/*
		/* <p>Do not send any reponse
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		DONT_REPLY: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var dont_reply_data = {};
			
			
			//============== BEGIN u00 ==============
			
			//Response Message : DONT_REPLY (u00)
			
			
			/***
  		/*
  		/* <p>Do not send any reponse
  		/*
  		/**/
			
			
			let u00_message_id = "u00";
			
			let u00_message_name = "DONT_REPLY";
			
			let u00_message_args = [];
			
			// Set the arguments for the u00 message
			
			
			// Now compose the u00 message and add the upc message to the array
			dont_reply_data["0XDONT_REPLY"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u00_message_id, u00_message_name, u00_message_args)};
			
			//=============== END u00 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(dont_reply_data);
			
		}
		,
		
		// LOGOFF_RESULT (u87)
		
		/**
		/*
		/* Reports the result of an attempt to log off the client with the specified userID. See u86.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		LOGOFF_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var logoff_result_data = {};
			
			
			//============== BEGIN u87 ==============
			
			//Response Message : LOGOFF_RESULT (u87)
			
			
			/***
  		/*
  		/* Reports the result of an attempt to log off the client with the specified userID. See u86.
  		/*
  		/**/
			
			
			let u87_message_id = "u87";
			
			let u87_message_name = "LOGOFF_RESULT";
			
			let u87_message_args = [];
			
			// Set the arguments for the u87 message
			
			let u87_userID = "";
			
			let u87_status = "";
			
			u87_message_args.push(u87_userID);
			
			u87_message_args.push(u87_status);
			
			
			// Now compose the u87 message and add the upc message to the array
			logoff_result_data["0XLOGOFF_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u87_message_id, u87_message_name, u87_message_args)};
			
			//=============== END u87 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(logoff_result_data);
			
		}
		,
		
		
		// CLIENTLIST_SNAPSHOT (u101)
		
		/**
		/*
		/* Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		CLIENTLIST_SNAPSHOT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var clientlist_snapshot_data = {};
			
			
			//============== BEGIN u101 ==============
			
			//Response Message : CLIENTLIST_SNAPSHOT (u101)
			
			
			/***
  		/*
  		/* Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
  		/*
  		/**/
			
			
			let u101_message_id = "u101";
			
			let u101_message_name = "CLIENTLIST_SNAPSHOT";
			
			let u101_message_args = [];
			
			// Set the arguments for the u101 message
			
			let u101_requestID = "";
			
			let u101___clientIDs = "";
			
			u101_message_args.push(u101_requestID);
			
			u101_message_args.push(u101___clientIDs);
			
			
			// Now compose the u101 message and add the upc message to the array
			clientlist_snapshot_data["0XCLIENTLIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u101_message_id, u101_message_name, u101_message_args)};
			
			//=============== END u101 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(clientlist_snapshot_data);
			
		}
		,
		
		
		// WATCH_FOR_CLIENTS_RESULT (u107)
		
		/**
		/*
		/* Reports the result of a WATCH_FOR_CLIENTS (u92) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		WATCH_FOR_CLIENTS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var watch_for_clients_result_data = {};
			
			
			//============== BEGIN u107 ==============
			
			//Response Message : WATCH_FOR_CLIENTS_RESULT (u107)
			
			
			/***
  		/*
  		/* Reports the result of a WATCH_FOR_CLIENTS (u92) request made by the recipient.
  		/*
  		/**/
			
			
			let u107_message_id = "u107";
			
			let u107_message_name = "WATCH_FOR_CLIENTS_RESULT";
			
			let u107_message_args = [];
			
			// Set the arguments for the u107 message
			
			let u107_status = "";
			
			u107_message_args.push(u107_status);
			
			
			// Now compose the u107 message and add the upc message to the array
			watch_for_clients_result_data["0XWATCH_FOR_CLIENTS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u107_message_id, u107_message_name, u107_message_args)};
			
			//=============== END u107 =============
			
			
			//============== BEGIN u101 ==============
			
			//Response Message : CLIENTLIST_SNAPSHOT (u101)
			
			
			let u101_message_id = "u101";
			
			let u101_message_name = "CLIENTLIST_SNAPSHOT";
			
			let u101_message_args = [];
			
			// Set the arguments for the u101 message
			
			let u101_requestID = "";
			
			let u101___clientIDs = "";
			
			u101_message_args.push(u101_requestID);
			
			u101_message_args.push(u101___clientIDs);
			
			
			// Now compose the u101 message and add the upc message to the array
			watch_for_clients_result_data["1XCLIENTLIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u101_message_id, u101_message_name, u101_message_args)};
			
			//=============== END u101 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(watch_for_clients_result_data);
			
		}
		,
		
		
		// STOP_WATCHING_FOR_CLIENTS_RESULT (u108)
		
		/**
		/*
		/* Reports the result of a STOP_WATCHING_FOR_CLIENTS (u93) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_WATCHING_FOR_CLIENTS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_watching_for_clients_result_data = {};
			
			
			//============== BEGIN u108 ==============
			
			//Response Message : STOP_WATCHING_FOR_CLIENTS_RESULT (u108)
			
			
			/***
  		/*
  		/* Reports the result of a STOP_WATCHING_FOR_CLIENTS (u93) request made by the recipient.
  		/*
  		/**/
			
			
			let u108_message_id = "u108";
			
			let u108_message_name = "STOP_WATCHING_FOR_CLIENTS_RESULT";
			
			let u108_message_args = [];
			
			// Set the arguments for the u108 message
			
			let u108_status = "";
			
			u108_message_args.push(u108_status);
			
			
			// Now compose the u108 message and add the upc message to the array
			stop_watching_for_clients_result_data["0XSTOP_WATCHING_FOR_CLIENTS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u108_message_id, u108_message_name, u108_message_args)};
			
			//=============== END u108 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_watching_for_clients_result_data);
			
		}
		,
		
		
		// GET_CLIENT_SNAPSHOT_RESULT (u115)
		
		/**
		/*
		/* Reports the result of a u94 request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		GET_CLIENT_SNAPSHOT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var get_client_snapshot_result_data = {};
			
			
			//============== BEGIN u115 ==============
			
			//Response Message : GET_CLIENT_SNAPSHOT_RESULT (u115)
			
			
			/***
  		/*
  		/* Reports the result of a u94 request made by the recipient.
  		/*
  		/**/
			
			
			let u115_message_id = "u115";
			
			let u115_message_name = "GET_CLIENT_SNAPSHOT_RESULT";
			
			let u115_message_args = [];
			
			// Set the arguments for the u115 message
			
			let u115_requestID = "";
			
			let u115_clientID = "";
			
			let u115_status = "";
			
			u115_message_args.push(u115_requestID);
			
			u115_message_args.push(u115_clientID);
			
			u115_message_args.push(u115_status);
			
			
			// Now compose the u115 message and add the upc message to the array
			get_client_snapshot_result_data["0XGET_CLIENT_SNAPSHOT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u115_message_id, u115_message_name, u115_message_args)};
			
			//=============== END u115 =============
			
			
			//============== BEGIN u104 ==============
			
			//Response Message : CLIENT_SNAPSHOT (u104)
			
			
			let u104_message_id = "u104";
			
			let u104_message_name = "CLIENT_SNAPSHOT";
			
			let u104_message_args = [];
			
			// Set the arguments for the u104 message
			
			let u104_requestID = "";
			
			let u104_clientID = "";
			
			let u104_userID = "";
			
			let u104_occupiedRooms = "";
			
			let u104_observedRooms = "";
			
			let u104_globalAttrs = "";
			
			let u104_roomID = "";
			
			let u104___roomAttrs = "";
			
			u104_message_args.push(u104_requestID);
			
			u104_message_args.push(u104_clientID);
			
			u104_message_args.push(u104_userID);
			
			u104_message_args.push(u104_occupiedRooms);
			
			u104_message_args.push(u104_observedRooms);
			
			u104_message_args.push(u104_globalAttrs);
			
			u104_message_args.push(u104_roomID);
			
			u104_message_args.push(u104___roomAttrs);
			
			
			// Now compose the u104 message and add the upc message to the array
			get_client_snapshot_result_data["1XCLIENT_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u104_message_id, u104_message_name, u104_message_args)};
			
			//=============== END u104 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(get_client_snapshot_result_data);
			
		}
		,
		
		
		// OBSERVE_CLIENT_RESULT (u105)
		
		/**
		/*
		/* Reports the result of a client observation attempt (u95) made by the recipient. If status is SUCCESS, the client is also sent a separate u119 message.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		OBSERVE_CLIENT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var observe_client_result_data = {};
			
			
			//============== BEGIN u105 ==============
			
			//Response Message : OBSERVE_CLIENT_RESULT (u105)
			
			
			/***
  		/*
  		/* Reports the result of a client observation attempt (u95) made by the recipient. If status is SUCCESS, the client is also sent a separate u119 message.
  		/*
  		/**/
			
			
			let u105_message_id = "u105";
			
			let u105_message_name = "OBSERVE_CLIENT_RESULT";
			
			let u105_message_args = [];
			
			// Set the arguments for the u105 message
			
			let u105_clientID = "";
			
			let u105_status = "";
			
			u105_message_args.push(u105_clientID);
			
			u105_message_args.push(u105_status);
			
			
			// Now compose the u105 message and add the upc message to the array
			observe_client_result_data["0XOBSERVE_CLIENT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u105_message_id, u105_message_name, u105_message_args)};
			
			//=============== END u105 =============
			
			
			//============== BEGIN u119 ==============
			
			//Response Message : CLIENT_OBSERVED (u119)
			
			
			let u119_message_id = "u119";
			
			let u119_message_name = "CLIENT_OBSERVED";
			
			let u119_message_args = [];
			
			// Set the arguments for the u119 message
			
			let u119_clientID = "";
			
			u119_message_args.push(u119_clientID);
			
			
			// Now compose the u119 message and add the upc message to the array
			observe_client_result_data["1XCLIENT_OBSERVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u119_message_id, u119_message_name, u119_message_args)};
			
			//=============== END u119 =============
			
			
			//============== BEGIN u104 ==============
			
			//Response Message : CLIENT_SNAPSHOT (u104)
			
			
			let u104_message_id = "u104";
			
			let u104_message_name = "CLIENT_SNAPSHOT";
			
			let u104_message_args = [];
			
			// Set the arguments for the u104 message
			
			let u104_requestID = "";
			
			let u104_clientID = "";
			
			let u104_userID = "";
			
			let u104_occupiedRooms = "";
			
			let u104_observedRooms = "";
			
			let u104_globalAttrs = "";
			
			let u104_roomID = "";
			
			let u104___roomAttrs = "";
			
			u104_message_args.push(u104_requestID);
			
			u104_message_args.push(u104_clientID);
			
			u104_message_args.push(u104_userID);
			
			u104_message_args.push(u104_occupiedRooms);
			
			u104_message_args.push(u104_observedRooms);
			
			u104_message_args.push(u104_globalAttrs);
			
			u104_message_args.push(u104_roomID);
			
			u104_message_args.push(u104___roomAttrs);
			
			
			// Now compose the u104 message and add the upc message to the array
			observe_client_result_data["2XCLIENT_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u104_message_id, u104_message_name, u104_message_args)};
			
			//=============== END u104 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(observe_client_result_data);
			
		}
		,
		
		
		// STOP_OBSERVING_CLIENT_RESULT (u106)
		
		/**
		/*
		/* Reports the result of an attempt by the recipient to stop observing the specified client (see u96). If status is SUCCESS, the client is also sent a separate u120 message.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_OBSERVING_CLIENT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_observing_client_result_data = {};
			
			
			//============== BEGIN u106 ==============
			
			//Response Message : STOP_OBSERVING_CLIENT_RESULT (u106)
			
			
			/***
  		/*
  		/* Reports the result of an attempt by the recipient to stop observing the specified client (see u96). If status is SUCCESS, the client is also sent a separate u120 message.
  		/*
  		/**/
			
			
			let u106_message_id = "u106";
			
			let u106_message_name = "STOP_OBSERVING_CLIENT_RESULT";
			
			let u106_message_args = [];
			
			// Set the arguments for the u106 message
			
			let u106_clientID = "";
			
			let u106_status = "";
			
			u106_message_args.push(u106_clientID);
			
			u106_message_args.push(u106_status);
			
			
			// Now compose the u106 message and add the upc message to the array
			stop_observing_client_result_data["0XSTOP_OBSERVING_CLIENT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u106_message_id, u106_message_name, u106_message_args)};
			
			//=============== END u106 =============
			
			
			//============== BEGIN u120 ==============
			
			//Response Message : STOPPED_OBSERVING_CLIENT (u120)
			
			
			let u120_message_id = "u120";
			
			let u120_message_name = "STOPPED_OBSERVING_CLIENT";
			
			let u120_message_args = [];
			
			// Set the arguments for the u120 message
			
			let u120_clientID = "";
			
			u120_message_args.push(u120_clientID);
			
			
			// Now compose the u120 message and add the upc message to the array
			stop_observing_client_result_data["1XSTOPPED_OBSERVING_CLIENT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u120_message_id, u120_message_name, u120_message_args)};
			
			//=============== END u120 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_observing_client_result_data);
			
		}
		,
		
		
		// ACCOUNTLIST_SNAPSHOT (u127)
		
		/**
		/*
		/* Provides a list of all user accounts currently registered on the server. See u97.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		ACCOUNTLIST_SNAPSHOT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var accountlist_snapshot_data = {};
			
			
			//============== BEGIN u127 ==============
			
			//Response Message : ACCOUNTLIST_SNAPSHOT (u127)
			
			
			/***
  		/*
  		/* Provides a list of all user accounts currently registered on the server. See u97.
  		/*
  		/**/
			
			
			let u127_message_id = "u127";
			
			let u127_message_name = "ACCOUNTLIST_SNAPSHOT";
			
			let u127_message_args = [];
			
			// Set the arguments for the u127 message
			
			let u127_requestID = "";
			
			let u127_userIDs = "";
			
			u127_message_args.push(u127_requestID);
			
			u127_message_args.push(u127_userIDs);
			
			
			// Now compose the u127 message and add the upc message to the array
			accountlist_snapshot_data["0XACCOUNTLIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u127_message_id, u127_message_name, u127_message_args)};
			
			//=============== END u127 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(accountlist_snapshot_data);
			
		}
		,
		
		
		// WATCH_FOR_ACCOUNTS_RESULT (u109)
		
		/**
		/*
		/* Reports the result of a WATCH_FOR_ACCOUNTS (u98) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		WATCH_FOR_ACCOUNTS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var watch_for_accounts_result_data = {};
			
			
			//============== BEGIN u109 ==============
			
			//Response Message : WATCH_FOR_ACCOUNTS_RESULT (u109)
			
			
			/***
  		/*
  		/* Reports the result of a WATCH_FOR_ACCOUNTS (u98) request made by the recipient.
  		/*
  		/**/
			
			
			let u109_message_id = "u109";
			
			let u109_message_name = "WATCH_FOR_ACCOUNTS_RESULT";
			
			let u109_message_args = [];
			
			// Set the arguments for the u109 message
			
			let u109_status = "";
			
			u109_message_args.push(u109_status);
			
			
			// Now compose the u109 message and add the upc message to the array
			watch_for_accounts_result_data["0XWATCH_FOR_ACCOUNTS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u109_message_id, u109_message_name, u109_message_args)};
			
			//=============== END u109 =============
			
			
			//============== BEGIN u127 ==============
			
			//Response Message : ACCOUNTLIST_SNAPSHOT (u127)
			
			
			let u127_message_id = "u127";
			
			let u127_message_name = "ACCOUNTLIST_SNAPSHOT";
			
			let u127_message_args = [];
			
			// Set the arguments for the u127 message
			
			let u127_requestID = "";
			
			let u127_userIDs = "";
			
			u127_message_args.push(u127_requestID);
			
			u127_message_args.push(u127_userIDs);
			
			
			// Now compose the u127 message and add the upc message to the array
			watch_for_accounts_result_data["1XACCOUNTLIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u127_message_id, u127_message_name, u127_message_args)};
			
			//=============== END u127 =============
			
			
			//============== BEGIN u111 ==============
			
			//Response Message : ACCOUNT_ADDED (u111)
			
			
			let u111_message_id = "u111";
			
			let u111_message_name = "ACCOUNT_ADDED";
			
			let u111_message_args = [];
			
			// Set the arguments for the u111 message
			
			let u111_userID = "";
			
			u111_message_args.push(u111_userID);
			
			
			// Now compose the u111 message and add the upc message to the array
			watch_for_accounts_result_data["2XACCOUNT_ADDED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u111_message_id, u111_message_name, u111_message_args)};
			
			//=============== END u111 =============
			
			
			//============== BEGIN u112 ==============
			
			//Response Message : ACCOUNT_REMOVED (u112)
			
			
			let u112_message_id = "u112";
			
			let u112_message_name = "ACCOUNT_REMOVED";
			
			let u112_message_args = [];
			
			// Set the arguments for the u112 message
			
			let u112_userID = "";
			
			u112_message_args.push(u112_userID);
			
			
			// Now compose the u112 message and add the upc message to the array
			watch_for_accounts_result_data["3XACCOUNT_REMOVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u112_message_id, u112_message_name, u112_message_args)};
			
			//=============== END u112 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(watch_for_accounts_result_data);
			
		}
		,
		
		
		// STOP_WATCHING_FOR_ACCOUNTS_RESULT (u110)
		
		/**
		/*
		/* Reports the result of a STOP_WATCHING_FOR_ACCOUNTS (u99) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_WATCHING_FOR_ACCOUNTS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_watching_for_accounts_result_data = {};
			
			
			//============== BEGIN u110 ==============
			
			//Response Message : STOP_WATCHING_FOR_ACCOUNTS_RESULT (u110)
			
			
			/***
  		/*
  		/* Reports the result of a STOP_WATCHING_FOR_ACCOUNTS (u99) request made by the recipient.
  		/*
  		/**/
			
			
			let u110_message_id = "u110";
			
			let u110_message_name = "STOP_WATCHING_FOR_ACCOUNTS_RESULT";
			
			let u110_message_args = [];
			
			// Set the arguments for the u110 message
			
			let u110_status = "";
			
			u110_message_args.push(u110_status);
			
			
			// Now compose the u110 message and add the upc message to the array
			stop_watching_for_accounts_result_data["0XSTOP_WATCHING_FOR_ACCOUNTS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u110_message_id, u110_message_name, u110_message_args)};
			
			//=============== END u110 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_watching_for_accounts_result_data);
			
		}
		,
		
		
		// GET_ACCOUNT_SNAPSHOT_RESULT (u116)
		
		/**
		/*
		/* Reports the result of a u100 request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		GET_ACCOUNT_SNAPSHOT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var get_account_snapshot_result_data = {};
			
			
			//============== BEGIN u116 ==============
			
			//Response Message : GET_ACCOUNT_SNAPSHOT_RESULT (u116)
			
			
			/***
  		/*
  		/* Reports the result of a u100 request made by the recipient.
  		/*
  		/**/
			
			
			let u116_message_id = "u116";
			
			let u116_message_name = "GET_ACCOUNT_SNAPSHOT_RESULT";
			
			let u116_message_args = [];
			
			// Set the arguments for the u116 message
			
			let u116_requestID = "";
			
			let u116_userID = "";
			
			let u116_status = "";
			
			u116_message_args.push(u116_requestID);
			
			u116_message_args.push(u116_userID);
			
			u116_message_args.push(u116_status);
			
			
			// Now compose the u116 message and add the upc message to the array
			get_account_snapshot_result_data["0XGET_ACCOUNT_SNAPSHOT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u116_message_id, u116_message_name, u116_message_args)};
			
			//=============== END u116 =============
			
			
			//============== BEGIN u104 ==============
			
			//Response Message : CLIENT_SNAPSHOT (u104)
			
			
			let u104_message_id = "u104";
			
			let u104_message_name = "CLIENT_SNAPSHOT";
			
			let u104_message_args = [];
			
			// Set the arguments for the u104 message
			
			let u104_requestID = "";
			
			let u104_clientID = "";
			
			let u104_userID = "";
			
			let u104_occupiedRooms = "";
			
			let u104_observedRooms = "";
			
			let u104_globalAttrs = "";
			
			let u104_roomID = "";
			
			let u104___roomAttrs = "";
			
			u104_message_args.push(u104_requestID);
			
			u104_message_args.push(u104_clientID);
			
			u104_message_args.push(u104_userID);
			
			u104_message_args.push(u104_occupiedRooms);
			
			u104_message_args.push(u104_observedRooms);
			
			u104_message_args.push(u104_globalAttrs);
			
			u104_message_args.push(u104_roomID);
			
			u104_message_args.push(u104___roomAttrs);
			
			
			// Now compose the u104 message and add the upc message to the array
			get_account_snapshot_result_data["1XCLIENT_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u104_message_id, u104_message_name, u104_message_args)};
			
			//=============== END u104 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(get_account_snapshot_result_data);
			
		}
		,
		
		
		// OBSERVE_ACCOUNT_RESULT (u123)
		
		/**
		/*
		/* Reports the result of a user-account observation attempt (u121) made by the recipient. If status is SUCCESS, the client is also sent a separate u124 message.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		OBSERVE_ACCOUNT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var observe_account_result_data = {};
			
			
			//============== BEGIN u123 ==============
			
			//Response Message : OBSERVE_ACCOUNT_RESULT (u123)
			
			
			/***
  		/*
  		/* Reports the result of a user-account observation attempt (u121) made by the recipient. If status is SUCCESS, the client is also sent a separate u124 message.
  		/*
  		/**/
			
			
			let u123_message_id = "u123";
			
			let u123_message_name = "OBSERVE_ACCOUNT_RESULT";
			
			let u123_message_args = [];
			
			// Set the arguments for the u123 message
			
			let u123_userID = "";
			
			let u123_status = "";
			
			u123_message_args.push(u123_userID);
			
			u123_message_args.push(u123_status);
			
			
			// Now compose the u123 message and add the upc message to the array
			observe_account_result_data["0XOBSERVE_ACCOUNT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u123_message_id, u123_message_name, u123_message_args)};
			
			//=============== END u123 =============
			
			
			//============== BEGIN u124 ==============
			
			//Response Message : ACCOUNT_OBSERVED (u124)
			
			
			let u124_message_id = "u124";
			
			let u124_message_name = "ACCOUNT_OBSERVED";
			
			let u124_message_args = [];
			
			// Set the arguments for the u124 message
			
			let u124_userID = "";
			
			u124_message_args.push(u124_userID);
			
			
			// Now compose the u124 message and add the upc message to the array
			observe_account_result_data["1XACCOUNT_OBSERVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u124_message_id, u124_message_name, u124_message_args)};
			
			//=============== END u124 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(observe_account_result_data);
			
		}
		,
		
		
		// STOP_OBSERVING_ACCOUNT_RESULT (u125)
		
		/**
		/*
		/* Reports the result of an attempt by the recipient to stop observing the specified user account (see u122). If status is SUCCESS, the client is also sent a separate u126 message.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_OBSERVING_ACCOUNT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_observing_account_result_data = {};
			
			
			//============== BEGIN u125 ==============
			
			//Response Message : STOP_OBSERVING_ACCOUNT_RESULT (u125)
			
			
			/***
  		/*
  		/* Reports the result of an attempt by the recipient to stop observing the specified user account (see u122). If status is SUCCESS, the client is also sent a separate u126 message.
  		/*
  		/**/
			
			
			let u125_message_id = "u125";
			
			let u125_message_name = "STOP_OBSERVING_ACCOUNT_RESULT";
			
			let u125_message_args = [];
			
			// Set the arguments for the u125 message
			
			let u125_userID = "";
			
			let u125_status = "";
			
			u125_message_args.push(u125_userID);
			
			u125_message_args.push(u125_status);
			
			
			// Now compose the u125 message and add the upc message to the array
			stop_observing_account_result_data["0XSTOP_OBSERVING_ACCOUNT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u125_message_id, u125_message_name, u125_message_args)};
			
			//=============== END u125 =============
			
			
			//============== BEGIN u126 ==============
			
			//Response Message : STOPPED_OBSERVING_ACCOUNT (u126)
			
			
			let u126_message_id = "u126";
			
			let u126_message_name = "STOPPED_OBSERVING_ACCOUNT";
			
			let u126_message_args = [];
			
			// Set the arguments for the u126 message
			
			let u126_userID = "";
			
			u126_message_args.push(u126_userID);
			
			
			// Now compose the u126 message and add the upc message to the array
			stop_observing_account_result_data["1XSTOPPED_OBSERVING_ACCOUNT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u126_message_id, u126_message_name, u126_message_args)};
			
			//=============== END u126 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_observing_account_result_data);
			
		}
		,
		
		
		// ADD_ROLE_RESULT (u134)
		
		/**
		/*
		/* Reports the result of an add-role attempt (u133) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		ADD_ROLE_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var add_role_result_data = {};
			
			
			//============== BEGIN u134 ==============
			
			//Response Message : ADD_ROLE_RESULT (u134)
			
			
			/***
  		/*
  		/* Reports the result of an add-role attempt (u133) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
  		/*
  		/**/
			
			
			let u134_message_id = "u134";
			
			let u134_message_name = "ADD_ROLE_RESULT";
			
			let u134_message_args = [];
			
			// Set the arguments for the u134 message
			
			let u134_userID = "";
			
			let u134_role = "";
			
			let u134_status = "";
			
			u134_message_args.push(u134_userID);
			
			u134_message_args.push(u134_role);
			
			u134_message_args.push(u134_status);
			
			
			// Now compose the u134 message and add the upc message to the array
			add_role_result_data["0XADD_ROLE_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u134_message_id, u134_message_name, u134_message_args)};
			
			//=============== END u134 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(add_role_result_data);
			
		}
		,
		
		
		// REMOVE_ROLE_RESULT (u136)
		
		/**
		/*
		/* Reports the result of a remove-role attempt (u135) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		REMOVE_ROLE_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var remove_role_result_data = {};
			
			
			//============== BEGIN u136 ==============
			
			//Response Message : REMOVE_ROLE_RESULT (u136)
			
			
			/***
  		/*
  		/* Reports the result of a remove-role attempt (u135) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
  		/*
  		/**/
			
			
			let u136_message_id = "u136";
			
			let u136_message_name = "REMOVE_ROLE_RESULT";
			
			let u136_message_args = [];
			
			// Set the arguments for the u136 message
			
			let u136_userID = "";
			
			let u136_role = "";
			
			let u136_status = "";
			
			u136_message_args.push(u136_userID);
			
			u136_message_args.push(u136_role);
			
			u136_message_args.push(u136_status);
			
			
			// Now compose the u136 message and add the upc message to the array
			remove_role_result_data["0XREMOVE_ROLE_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u136_message_id, u136_message_name, u136_message_args)};
			
			//=============== END u136 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(remove_role_result_data);
			
		}
		,
		
		
		// BAN_RESULT (u138)
		
		/**
		/*
		/* Reports the result of a ban attempt (u137) made by the recipient. If status is SUCCESS, connection attempts by any client at the specified address are refused by Union Server. If the original u137 included a clientID and no address, that clientID is returned via u138's clientID.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		BAN_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var ban_result_data = {};
			
			
			//============== BEGIN u138 ==============
			
			//Response Message : BAN_RESULT (u138)
			
			
			/***
  		/*
  		/* Reports the result of a ban attempt (u137) made by the recipient. If status is SUCCESS, connection attempts by any client at the specified address are refused by Union Server. If the original u137 included a clientID and no address, that clientID is returned via u138's clientID.
  		/*
  		/**/
			
			
			let u138_message_id = "u138";
			
			let u138_message_name = "BAN_RESULT";
			
			let u138_message_args = [];
			
			// Set the arguments for the u138 message
			
			let u138_address = "";
			
			let u138_clientID = "";
			
			let u138_status = "";
			
			u138_message_args.push(u138_address);
			
			u138_message_args.push(u138_clientID);
			
			u138_message_args.push(u138_status);
			
			
			// Now compose the u138 message and add the upc message to the array
			ban_result_data["0XBAN_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u138_message_id, u138_message_name, u138_message_args)};
			
			//=============== END u138 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(ban_result_data);
			
		}
		,
		
		
		// UNBAN_RESULT (u140)
		
		/**
		/*
		/* Reports the result of an unban attempt (u137) made by the recipient. If status is SUCCESS, 'any' previous connection ban on the specified address is lifted.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		UNBAN_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var unban_result_data = {};
			
			
			//============== BEGIN u140 ==============
			
			//Response Message : UNBAN_RESULT (u140)
			
			
			/***
  		/*
  		/* Reports the result of an unban attempt (u137) made by the recipient. If status is SUCCESS, 'any' previous connection ban on the specified address is lifted.
  		/*
  		/**/
			
			
			let u140_message_id = "u140";
			
			let u140_message_name = "UNBAN_RESULT";
			
			let u140_message_args = [];
			
			// Set the arguments for the u140 message
			
			let u140_address = "";
			
			let u140_status = "";
			
			u140_message_args.push(u140_address);
			
			u140_message_args.push(u140_status);
			
			
			// Now compose the u140 message and add the upc message to the array
			unban_result_data["0XUNBAN_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u140_message_id, u140_message_name, u140_message_args)};
			
			//=============== END u140 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(unban_result_data);
			
		}
		,
		
		
		// BANNED_LIST_SNAPSHOT (u142)
		
		/**
		/*
		/* Provides a list of addresses currently banned from connecting to the server. A u142 is sent in response to u141 and u143.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		BANNED_LIST_SNAPSHOT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var banned_list_snapshot_data = {};
			
			
			//============== BEGIN u142 ==============
			
			//Response Message : BANNED_LIST_SNAPSHOT (u142)
			
			
			/***
  		/*
  		/* Provides a list of addresses currently banned from connecting to the server. A u142 is sent in response to u141 and u143.
  		/*
  		/**/
			
			
			let u142_message_id = "u142";
			
			let u142_message_name = "BANNED_LIST_SNAPSHOT";
			
			let u142_message_args = [];
			
			// Set the arguments for the u142 message
			
			let u142_requestID = "";
			
			let u142___addresses = "";
			
			u142_message_args.push(u142_requestID);
			
			u142_message_args.push(u142___addresses);
			
			
			// Now compose the u142 message and add the upc message to the array
			banned_list_snapshot_data["0XBANNED_LIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u142_message_id, u142_message_name, u142_message_args)};
			
			//=============== END u142 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(banned_list_snapshot_data);
			
		}
		,
		
		
		// WATCH_FOR_BANNED_ADDRESSES_RESULT (u144)
		
		/**
		/*
		/* Reports the result of a WATCH_FOR_BANNED_ADDRESSES (u143) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		WATCH_FOR_BANNED_ADDRESSES_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var watch_for_banned_addresses_result_data = {};
			
			
			//============== BEGIN u144 ==============
			
			//Response Message : WATCH_FOR_BANNED_ADDRESSES_RESULT (u144)
			
			
			/***
  		/*
  		/* Reports the result of a WATCH_FOR_BANNED_ADDRESSES (u143) request made by the recipient.
  		/*
  		/**/
			
			
			let u144_message_id = "u144";
			
			let u144_message_name = "WATCH_FOR_BANNED_ADDRESSES_RESULT";
			
			let u144_message_args = [];
			
			// Set the arguments for the u144 message
			
			let u144_status = "";
			
			u144_message_args.push(u144_status);
			
			
			// Now compose the u144 message and add the upc message to the array
			watch_for_banned_addresses_result_data["0XWATCH_FOR_BANNED_ADDRESSES_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u144_message_id, u144_message_name, u144_message_args)};
			
			//=============== END u144 =============
			
			
			//============== BEGIN u142 ==============
			
			//Response Message : BANNED_LIST_SNAPSHOT (u142)
			
			
			let u142_message_id = "u142";
			
			let u142_message_name = "BANNED_LIST_SNAPSHOT";
			
			let u142_message_args = [];
			
			// Set the arguments for the u142 message
			
			let u142_requestID = "";
			
			let u142___addresses = "";
			
			u142_message_args.push(u142_requestID);
			
			u142_message_args.push(u142___addresses);
			
			
			// Now compose the u142 message and add the upc message to the array
			watch_for_banned_addresses_result_data["1XBANNED_LIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u142_message_id, u142_message_name, u142_message_args)};
			
			//=============== END u142 =============
			
			
			//============== BEGIN u147 ==============
			
			//Response Message : BANNED_ADDRESS_ADDED (u147)
			
			
			let u147_message_id = "u147";
			
			let u147_message_name = "BANNED_ADDRESS_ADDED";
			
			let u147_message_args = [];
			
			// Set the arguments for the u147 message
			
			let u147_address = "";
			
			u147_message_args.push(u147_address);
			
			
			// Now compose the u147 message and add the upc message to the array
			watch_for_banned_addresses_result_data["2XBANNED_ADDRESS_ADDED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u147_message_id, u147_message_name, u147_message_args)};
			
			//=============== END u147 =============
			
			
			//============== BEGIN u148 ==============
			
			//Response Message : BANNED_ADDRESS_REMOVED (u148)
			
			
			let u148_message_id = "u148";
			
			let u148_message_name = "BANNED_ADDRESS_REMOVED";
			
			let u148_message_args = [];
			
			// Set the arguments for the u148 message
			
			let u148_address = "";
			
			u148_message_args.push(u148_address);
			
			
			// Now compose the u148 message and add the upc message to the array
			watch_for_banned_addresses_result_data["3XBANNED_ADDRESS_REMOVED"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u148_message_id, u148_message_name, u148_message_args)};
			
			//=============== END u148 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(watch_for_banned_addresses_result_data);
			
		}
		,
		
		
		// STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT (u146)
		
		/**
		/*
		/* Reports the result of a STOP_WATCHING_FOR_BANNED_ADDRESSES (u145) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_watching_for_banned_addresses_result_data = {};
			
			
			//============== BEGIN u146 ==============
			
			//Response Message : STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT (u146)
			
			
			/***
  		/*
  		/* Reports the result of a STOP_WATCHING_FOR_BANNED_ADDRESSES (u145) request made by the recipient.
  		/*
  		/**/
			
			
			let u146_message_id = "u146";
			
			let u146_message_name = "STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT";
			
			let u146_message_args = [];
			
			// Set the arguments for the u146 message
			
			let u146_status = "";
			
			u146_message_args.push(u146_status);
			
			
			// Now compose the u146 message and add the upc message to the array
			stop_watching_for_banned_addresses_result_data["0XSTOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u146_message_id, u146_message_name, u146_message_args)};
			
			//=============== END u146 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_watching_for_banned_addresses_result_data);
			
		}
		,
		
		
		// KICK_CLIENT_RESULT (u150)
		
		/**
		/*
		/* Reports the result of a KICK_CLIENT (u149) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		KICK_CLIENT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var kick_client_result_data = {};
			
			
			//============== BEGIN u150 ==============
			
			//Response Message : KICK_CLIENT_RESULT (u150)
			
			
			/***
  		/*
  		/* Reports the result of a KICK_CLIENT (u149) request made by the recipient.
  		/*
  		/**/
			
			
			let u150_message_id = "u150";
			
			let u150_message_name = "KICK_CLIENT_RESULT";
			
			let u150_message_args = [];
			
			// Set the arguments for the u150 message
			
			let u150_status = "";
			
			u150_message_args.push(u150_status);
			
			
			// Now compose the u150 message and add the upc message to the array
			kick_client_result_data["0XKICK_CLIENT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u150_message_id, u150_message_name, u150_message_args)};
			
			//=============== END u150 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(kick_client_result_data);
			
		}
		,
		
		
		// SERVERMODULELIST_SNAPSHOT (u152)
		
		/**
		/*
		/* Provides a list of server modules currently active on Union Server. A u152 is sent in response to u151.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		SERVERMODULELIST_SNAPSHOT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var servermodulelist_snapshot_data = {};
			
			
			//============== BEGIN u152 ==============
			
			//Response Message : SERVERMODULELIST_SNAPSHOT (u152)
			
			
			/***
  		/*
  		/* Provides a list of server modules currently active on Union Server. A u152 is sent in response to u151.
  		/*
  		/**/
			
			
			let u152_message_id = "u152";
			
			let u152_message_name = "SERVERMODULELIST_SNAPSHOT";
			
			let u152_message_args = [];
			
			// Set the arguments for the u152 message
			
			let u152_requestID = "";
			
			let u152___serverModules = "";
			
			u152_message_args.push(u152_requestID);
			
			u152_message_args.push(u152___serverModules);
			
			
			// Now compose the u152 message and add the upc message to the array
			servermodulelist_snapshot_data["0XSERVERMODULELIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u152_message_id, u152_message_name, u152_message_args)};
			
			//=============== END u152 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(servermodulelist_snapshot_data);
			
		}
		,
		
		// GET_UPC_STATS_SNAPSHOT_RESULT (u155)
		
		/**
		/*
		/* Reports the result of a GET_UPC_STATS_SNAPSHOT (u154) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		GET_UPC_STATS_SNAPSHOT_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var get_upc_stats_snapshot_result_data = {};
			
			
			//============== BEGIN u155 ==============
			
			//Response Message : GET_UPC_STATS_SNAPSHOT_RESULT (u155)
			
			
			/***
  		/*
  		/* Reports the result of a GET_UPC_STATS_SNAPSHOT (u154) request made by the recipient.
  		/*
  		/**/
			
			
			let u155_message_id = "u155";
			
			let u155_message_name = "GET_UPC_STATS_SNAPSHOT_RESULT";
			
			let u155_message_args = [];
			
			// Set the arguments for the u155 message
			
			let u155_requestID = "";
			
			let u155_status = "";
			
			u155_message_args.push(u155_requestID);
			
			u155_message_args.push(u155_status);
			
			
			// Now compose the u155 message and add the upc message to the array
			get_upc_stats_snapshot_result_data["0XGET_UPC_STATS_SNAPSHOT_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u155_message_id, u155_message_name, u155_message_args)};
			
			//=============== END u155 =============
			
			
			//============== BEGIN u156 ==============
			
			//Response Message : UPC_STATS_SNAPSHOT (u156)
			
			
			let u156_message_id = "u156";
			
			let u156_message_name = "UPC_STATS_SNAPSHOT";
			
			let u156_message_args = [];
			
			// Set the arguments for the u156 message
			
			let u156_requestID = "";
			
			let u156_totalUPCsProcessed = "";
			
			let u156_numUPCsInQueue = "";
			
			let u156_lastQueueWaitTime = "";
			
			let u156___fromClient = "";
			
			u156_message_args.push(u156_requestID);
			
			u156_message_args.push(u156_totalUPCsProcessed);
			
			u156_message_args.push(u156_numUPCsInQueue);
			
			u156_message_args.push(u156_lastQueueWaitTime);
			
			u156_message_args.push(u156___fromClient);
			
			
			// Now compose the u156 message and add the upc message to the array
			get_upc_stats_snapshot_result_data["1XUPC_STATS_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u156_message_id, u156_message_name, u156_message_args)};
			
			//=============== END u156 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(get_upc_stats_snapshot_result_data);
			
		}
		,
		
		
		// RESET_UPC_STATS_RESULT (u158)
		
		/**
		/*
		/* Reports the result of a RESET_UPC_STATS (u157) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		RESET_UPC_STATS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var reset_upc_stats_result_data = {};
			
			
			//============== BEGIN u158 ==============
			
			//Response Message : RESET_UPC_STATS_RESULT (u158)
			
			
			/***
  		/*
  		/* Reports the result of a RESET_UPC_STATS (u157) request made by the recipient.
  		/*
  		/**/
			
			
			let u158_message_id = "u158";
			
			let u158_message_name = "RESET_UPC_STATS_RESULT";
			
			let u158_message_args = [];
			
			// Set the arguments for the u158 message
			
			let u158_status = "";
			
			u158_message_args.push(u158_status);
			
			
			// Now compose the u158 message and add the upc message to the array
			reset_upc_stats_result_data["0XRESET_UPC_STATS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u158_message_id, u158_message_name, u158_message_args)};
			
			//=============== END u158 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(reset_upc_stats_result_data);
			
		}
		,
		
		
		// WATCH_FOR_PROCESSED_UPCS_RESULT (u160)
		
		/**
		/*
		/* Reports the result of a WATCH_FOR_PROCESSED_UPCS (u159) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		WATCH_FOR_PROCESSED_UPCS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var watch_for_processed_upcs_result_data = {};
			
			
			//============== BEGIN u160 ==============
			
			//Response Message : WATCH_FOR_PROCESSED_UPCS_RESULT (u160)
			
			
			/***
  		/*
  		/* Reports the result of a WATCH_FOR_PROCESSED_UPCS (u159) request made by the recipient.
  		/*
  		/**/
			
			
			let u160_message_id = "u160";
			
			let u160_message_name = "WATCH_FOR_PROCESSED_UPCS_RESULT";
			
			let u160_message_args = [];
			
			// Set the arguments for the u160 message
			
			let u160_status = "";
			
			u160_message_args.push(u160_status);
			
			
			// Now compose the u160 message and add the upc message to the array
			watch_for_processed_upcs_result_data["0XWATCH_FOR_PROCESSED_UPCS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u160_message_id, u160_message_name, u160_message_args)};
			
			//=============== END u160 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(watch_for_processed_upcs_result_data);
			
		}
		,
		
		
		// STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT (u163)
		
		/**
		/*
		/* Reports the result of a STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT (u162) request made by the recipient.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var stop_watching_for_processed_upcs_result_data = {};
			
			
			//============== BEGIN u163 ==============
			
			//Response Message : STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT (u163)
			
			
			/***
  		/*
  		/* Reports the result of a STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT (u162) request made by the recipient.
  		/*
  		/**/
			
			
			let u163_message_id = "u163";
			
			let u163_message_name = "STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT";
			
			let u163_message_args = [];
			
			// Set the arguments for the u163 message
			
			let u163_status = "";
			
			u163_message_args.push(u163_status);
			
			
			// Now compose the u163 message and add the upc message to the array
			stop_watching_for_processed_upcs_result_data["0XSTOP_WATCHING_FOR_PROCESSED_UPCS_RESULT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u163_message_id, u163_message_name, u163_message_args)};
			
			//=============== END u163 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(stop_watching_for_processed_upcs_result_data);
			
		}
		,
		
		
		// NODELIST_SNAPSHOT (u166)
		
		/**
		/*
		/* Provides a list of IDs for the cluster nodes currently connected to the server. Each ID is an arbitrary, statistically unique string generated automatically by Union Server. A server's nodeID is guaranteed to be the same for a given server until that server shuts down. u166 is sent in response to u165.
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		NODELIST_SNAPSHOT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var nodelist_snapshot_data = {};
			
			
			//============== BEGIN u166 ==============
			
			//Response Message : NODELIST_SNAPSHOT (u166)
			
			
			/***
  		/*
  		/* Provides a list of IDs for the cluster nodes currently connected to the server. Each ID is an arbitrary, statistically unique string generated automatically by Union Server. A server's nodeID is guaranteed to be the same for a given server until that server shuts down. u166 is sent in response to u165.
  		/*
  		/**/
			
			
			let u166_message_id = "u166";
			
			let u166_message_name = "NODELIST_SNAPSHOT";
			
			let u166_message_args = [];
			
			// Set the arguments for the u166 message
			
			let u166_requestID = "";
			
			let u166___nodes = "";
			
			u166_message_args.push(u166_requestID);
			
			u166_message_args.push(u166___nodes);
			
			
			// Now compose the u166 message and add the upc message to the array
			nodelist_snapshot_data["0XNODELIST_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u166_message_id, u166_message_name, u166_message_args)};
			
			//=============== END u166 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(nodelist_snapshot_data);
			
		}
		,
		
		
		// GATEWAYS_SNAPSHOT (u168)
		
		/**
		/*
		/* <p>Provides gateway statistics in response to u167.</p> <p>The list of NUM_CONNECTIONS_CATEGORYn gives the number of connections to the gateway, 'broken' down by connection type. Connection types are determined by each gateway. For example, 'the' built-in gateways for Adobe Flash clients include the connection types 'POLICYFILE' (for Flash policy file requests) and 'CLIENT' (for connections that are determined to be legitimate Union clients). For every gateway, 'one' of the categories in the NUM_CONNECTIONS_CATEGORYn list is always guaranteed to be 'TOTAL'. The 'TOTAL' connection category indicates the total raw number of lifetime connections to the specified gateway, 'including' all connection types.</p> <p>The list of NUM_CLIENTS_CLIENTTYPEn gives the number of Union clients that have connected to the gateway, 'broken' down by client type. For example, 'a' gateway might have had 150 Reactor (Flash) client connections and 35 Orbiter (JavaScript) client connections.</p> <p>The list of NUM_CLIENTS_UPCVERSION n gives the number of Union clients that have connected to the gateway, 'broken' down by UPC version. For example, 'a' gateway might have had 25 clients that used UPC version 1.4.0 and 40 clients that used UPC version 1.5.0.</p> <p>The 'lifetimeRead...' argument lists the gateway's bandwidth usage. All bandwidth statistics are given in bytes. Bandwidth averages are per second. Intervals are the most recent second at the time of the request.</p>
		/*
		/* @param  {String} message_id - Upc message id
		/* @param  {String} message_name - Upc message name
		/* @param  {Array}  args - Upc message arguments
		/* @param  {Object} data - The data object from the database
		/* @param  {Function} callBackFunction
		/*
		 **/
		
		GATEWAYS_SNAPSHOT: function (message_id, message_name, args, data, callBackFunction) {
			
			// Reference the Server to Client (S2C) Object
			var root = S2C;
			
			// Reference this as self for later
			var self = this;
			
			// Create an array to hold a series of resultant upc messages
			var gateways_snapshot_data = {};
			
			
			//============== BEGIN u168 ==============
			
			//Response Message : GATEWAYS_SNAPSHOT (u168)
			
			
			/***
  		/*
  		/* <p>Provides gateway statistics in response to u167.</p> <p>The list of NUM_CONNECTIONS_CATEGORYn gives the number of connections to the gateway, 'broken' down by connection type. Connection types are determined by each gateway. For example, 'the' built-in gateways for Adobe Flash clients include the connection types 'POLICYFILE' (for Flash policy file requests) and 'CLIENT' (for connections that are determined to be legitimate Union clients). For every gateway, 'one' of the categories in the NUM_CONNECTIONS_CATEGORYn list is always guaranteed to be 'TOTAL'. The 'TOTAL' connection category indicates the total raw number of lifetime connections to the specified gateway, 'including' all connection types.</p> <p>The list of NUM_CLIENTS_CLIENTTYPEn gives the number of Union clients that have connected to the gateway, 'broken' down by client type. For example, 'a' gateway might have had 150 Reactor (Flash) client connections and 35 Orbiter (JavaScript) client connections.</p> <p>The list of NUM_CLIENTS_UPCVERSION n gives the number of Union clients that have connected to the gateway, 'broken' down by UPC version. For example, 'a' gateway might have had 25 clients that used UPC version 1.4.0 and 40 clients that used UPC version 1.5.0.</p> <p>The 'lifetimeRead...' argument lists the gateway's bandwidth usage. All bandwidth statistics are given in bytes. Bandwidth averages are per second. Intervals are the most recent second at the time of the request.</p>
  		/*
  		/**/
			
			
			let u168_message_id = "u168";
			
			let u168_message_name = "GATEWAYS_SNAPSHOT";
			
			let u168_message_args = [];
			
			// Set the arguments for the u168 message
			
			let u168_requestID = "";
			
			let u168_gatewayID1 = "";
			
			let u168_gatewayType1 = "";
			
			let u168_NUM_CONNECTIONS_CATEGORY = "";
			
			let u168_NUM_CLIENTS_CLIENTTYPE = "";
			
			let u168_NUM_CLIENTS_UPCVERSION = "";
			
			let u168_gateway1Attr = "";
			
			let u168_connections = "";
			
			let u168_lifetimeRead = "";
			
			let u168___args = "";
			
			u168_message_args.push(u168_requestID);
			
			u168_message_args.push(u168_gatewayID1);
			
			u168_message_args.push(u168_gatewayType1);
			
			u168_message_args.push(u168_NUM_CONNECTIONS_CATEGORY);
			
			u168_message_args.push(u168_NUM_CLIENTS_CLIENTTYPE);
			
			u168_message_args.push(u168_NUM_CLIENTS_UPCVERSION);
			
			u168_message_args.push(u168_gateway1Attr);
			
			u168_message_args.push(u168_connections);
			
			u168_message_args.push(u168_lifetimeRead);
			
			u168_message_args.push(u168___args);
			
			
			// Now compose the u168 message and add the upc message to the array
			gateways_snapshot_data["0XGATEWAYS_SNAPSHOT"] = {sendTo: 'SENDER_SOCKET', socketId: server_socket.id, upcData: server_config.composeUPC(u168_message_id, u168_message_name, u168_message_args)};
			
			//=============== END u168 =============
			
			
			//Pass the resultant object to the array
			callBackFunction(gateways_snapshot_data);
			
		}
		,
		
	}
	
	
	return S2C;
	
}