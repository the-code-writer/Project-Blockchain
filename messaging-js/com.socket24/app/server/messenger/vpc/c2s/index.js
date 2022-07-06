#!/usr/bin/env node
'use strict';

module.exports.init = function (config, io, socket, sqlObj, db, snippet) {
	
	const S2C = require("../s2c").init(config, io, socket, sqlObj, db, snippet);
	
	let server_config = config;
	
	let server_socket = socket;
	
	const C2S = {
		
		// Asks the server to send a u7 with the specified messageName to all clients in the room list that pass the provided filter tests. The includeSelf argument is a Boolean indicating whether the message should be echoed to the sending client (assuming the sender is in the room list and passes the filter tests). If any of the rooms in the list is a room qualifier, the message is sent to all rooms qualified by that qualifier.,Qualifiers in the room list must be formed using the * character; for example, "examples.*" means "the examples qualifier" whereas "examples" means the room named "examples". To send a message to all rooms qualified by the unnamed qualifier, use "*" for the room qualifier.,The server sends separate u7 messages for every room in the room list. For example, if the room list is "chat1 [RS] chat2" and a client is in both "chat1" and "chat2", the client will receive u7 twice (once for each room).
		
		SEND_MESSAGE_TO_ROOMS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u1 SQL statement based on the SEND_MESSAGE_TO_ROOMS args: messageName, roomIDorQualifiers, includeSelf, filters, ...args
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u7(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u7(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u7(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
			
			function u7(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u7 message  (RECEIVE_MESSAGE)
				S2C.RECEIVE_MESSAGE_1(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a u7 with the specified messageName to all clients in client list that pass the provided filter tests.
		
		SEND_MESSAGE_TO_CLIENTS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u2 SQL statement based on the SEND_MESSAGE_TO_CLIENTS args: messageName, clientIDs, filters, ...args
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u7(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u7(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u7(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
			
			function u7(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u7 message  (RECEIVE_MESSAGE)
				S2C.RECEIVE_MESSAGE_2(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a u7 with the specified messageName to all clients on the server that pass the provided filter tests. The includeSelf argument is a Boolean indicating whether the message should be echoed to the sending client.
		
		SEND_MESSAGE_TO_SERVER: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u57 SQL statement based on the SEND_MESSAGE_TO_SERVER args: messageName, includeSelf, filters, ...args
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u7(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u7(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u7(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Causes the client to execute listeners registered for 'messageName'. u7 is sent in response to u1, u2, and u57. The broadcastType argument's three possible values--0, 1, or 2--indicate which clients received the message, as follows: |0 'TO SERVER':  all clients on the entire server|1 'TO ROOMS':   all clients in the specified rooms)|2 'TO CLIENTS': a list of individually specified clients. When u7 is a u1 response, broadcastType is 2, and u7's fourth argument is empty. When u7 is a u2 response, broadcastType is 1, and u7's fourth argument is the room receiving the message. When u7 is a u57 response, broadcastType is 0, and u7's fourth argument is empty
			
			function u7(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u7 message  (RECEIVE_MESSAGE)
				S2C.RECEIVE_MESSAGE_3(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to set a client attribute for client specified by clientID or the user account specified by userID. If the persistent bit is set, the server sets the attribute on the specified userID's account; if not, the server sets the attribute on the specified client. The result of the request is returned to the sender via a u73. If the attribute is shared, any clients needing to be notified of the attribute assignment will receive a u8. When the sender sets one of its own attributes via u3, the new attribute value is echoed back to the sender in a u8 in the following situations only:,The specified attrScope must be a room, and cannot be a qualifier; however, future versions of the UPC protocol might support qualifier-scoped attributes. The meanings of the "attrOptions" bits are as follows:,The persistent bit is set. The evaluate bit is set. 0 - RESERVED. 1 - RESERVED. 2 - shared: interested clients will receive notification that the attribute changed. 3 - persistent: the attribute will be stored persistently in the account specified by userID, and will be available to any client that successfully logs into that account. 4 - RETIRED (formerly "unique"). 5 - RESERVED BY SERVER. 6 - RESERVED BY SERVER. 7 - RESERVED BY SERVER. 8 - evaluate: evaluate the supplied escapedAttrValue as a mathematical expression before assignment. Within escapedAttrValue, the token "%v" represents the attribute's current value. For example, "%v+1" means "increment by one". Supported mathematical operators are: *, /, +, -, %, ., (, and ). If the expression contains any character other than a number or one of the supported operators, the attribute assignment fails and the server responds with a u73 with status of EVALUATION_FAILED.
		
		SET_CLIENT_ATTR: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u3 SQL statement based on the SET_CLIENT_ATTR args: clientID, userID, attrName, escapedAttrValue, attrScope, ...attrOptions
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u73(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u73(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u73(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a request to change a client attribute.
			
			function u73(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u73 message  (SET_CLIENT_ATTR_RESULT)
				S2C.SET_CLIENT_ATTR_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to attempt to add the sender to the specified room. The result of attempting to join the room is returned to the sender via a u72. If the attempt is successful, the sender is also sent a u6, followed by updates for the room according to the sender's specified update levels (see u64). When a room is removed from the server, clients in that room receive a u44, but do not automatically receive notification that the room was removed. Clients wishing to be notified when a room is removed must register for notifications via WATCH_FOR_ROOMS.
		
		JOIN_ROOM: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u4 SQL statement based on the JOIN_ROOM args: roomID, password
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u72(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u72(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u72(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a join-room request (u4). If status is SUCCESS, the client is also sent a separate u6 message.
			
			function u72(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u72 message  (JOIN_ROOM_RESULT)
				S2C.JOIN_ROOM_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to set a room attribute for the specified room. The result of the request is returned to the sender via a u74. If the attribute is shared, any clients needing to be notified of the attribute assignment will receive a u9. The meanings of the "attrOptions" bits are as follows: 0 - RESERVED. 1 - RESERVED. 2 - shared: interested clients will receive notification that the attribute changed. 3 - persistent: the attribute will be stored persistently, and will be available across multiple server restarts. 4 - UNUSED. 5 - RESERVED BY SERVER. 6 - RESERVED BY SERVER. 7 - RESERVED BY SERVER. 8 - evaluate: evaluate the supplied escapedAttrValue as a mathematical expression before assignment. Within escapedAttrValue, the token "%v" represents the attribute's current value. For example, "%v+1" means "increment by one". Supported mathematical operators are: *, /, +, -, %, ., (, and ). If the expression contains any character other than a number or one of the supported operators, the attribute assignment fails and the server responds with a u74 with status of EVALUATION_FAILED.
		
		SET_ROOM_ATTR: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u5 SQL statement based on the SET_ROOM_ATTR args: roomID, attrName, escapedAttrValue, ...attrOptions
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u74(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u74(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u74(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a request to change a room attribute.
			
			function u74(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u74 message  (SET_ROOM_ATTR_RESULT)
				S2C.SET_ROOM_ATTR_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove the sender from the specified room. The result of attempting to leave the room is returned to the sender via a u76. If the attempt is successful, the sender is also sent a u44.
		
		LEAVE_ROOM: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u10 SQL statement based on the LEAVE_ROOM args: roomID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u76(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u76(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u76(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt to leave the specified roomID. See u10.
			
			function u76(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u76 message  (LEAVE_ROOM_RESULT)
				S2C.LEAVE_ROOM_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to create a new user account, used to store information permanently in a persistent data source such as a database. Results of the create-account attempt are returned via a u47.
		
		CREATE_ACCOUNT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u11 SQL statement based on the CREATE_ACCOUNT args: userID, password
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u47(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u47(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u47(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt to create the client account specified by userID. See u11.
			
			function u47(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u47 message  (CREATE_ACCOUNT_RESULT)
				S2C.CREATE_ACCOUNT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove the user account for the specified userID. Results of the remove-account attempt are returned via a u48.
		
		REMOVE_ACCOUNT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u12 SQL statement based on the REMOVE_ACCOUNT args: userID, password
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u48(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u48(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u48(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt to remove (delete) the client account specified by userID. See u12.
			
			function u48(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u48 message  (REMOVE_ACCOUNT_RESULT)
				S2C.REMOVE_ACCOUNT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to change the specified userID's account password. Results of the change password attempt are returned via a u46. If the attempt succeeds, and a client is currently logged in under the specified userID, the server also sends a u90 to that client.
		
		CHANGE_ACCOUNT_PASSWORD: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u13 SQL statement based on the CHANGE_ACCOUNT_PASSWORD args: userID, oldPassword, newPassword
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u46(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u46(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u46(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt to change the password for the account specified by userID. See u13.
			
			function u46(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u46 message  (CHANGE_ACCOUNT_PASSWORD_RESULT)
				S2C.CHANGE_ACCOUNT_PASSWORD_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to login the sending client. Results of the login attempt are returned via a u49. If the attempt succeeds, the server also sends a u88 followed by a series of u8s containing the client's persistent attributes. If the userID specified for a u14 is already logged in under another client ID, the previous client is logged off and disconnected before the new login proceeds. Note that the sending client can ask to log in itself only; a u14 cannot be used to log in a foreign client.
		
		LOGIN: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u14 SQL statement based on the LOGIN args: userID, password
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u49(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u49(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u49(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a login attempt made by the receiving client. See u14.
			
			function u49(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u49 message  (LOGIN_RESULT)
				S2C.LOGIN_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to return the number of clients on the server. The result of a u18 request is returned to the sender via a u75. If the request is successful, the number of clients on the server is returned to the sender via a u34.
		
		GET_CLIENTCOUNT_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u18 SQL statement based on the GET_CLIENTCOUNT_SNAPSHOT args: requestID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u75(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u75(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u75(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a request for the number of clients on the server.
			
			function u75(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u75 message  (GET_CLIENTCOUNT_SNAPSHOT_RESULT)
				S2C.GET_CLIENTCOUNT_SNAPSHOT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to return the current time. The result is returned via a u50.
		
		SYNC_TIME: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u19 SQL statement based on the SYNC_TIME args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u50(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u50(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u50(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the current time on the server, in UTC, using milliseconds-from-1970 format. See u19.
			
			function u50(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u50 message  (SERVER_TIME_UPDATE)
				S2C.SERVER_TIME_UPDATE(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to return a list of the rooms whose ids are qualified by roomIdQualifier. The result is returned via a u38.,For a server-wide room list, supply the empty string ("") for roomIdQualifier and true for recursive.,For a list of rooms with the unnamed qualifier, supply the empty string ("") for roomIdQualifier and false for recursive.,For a list of rooms with the qualifier "chat.sports", supply "chat.sports" for roomIdQualifier and false for recursive.,Note: the recursive argument is currently available for the unnamed qualifier ("") only. Recursion for other qualifiers is planned for future versions of the UPC protocol.
		
		GET_ROOMLIST_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u21 SQL statement based on the GET_ROOMLIST_SNAPSHOT args: requestID, roomIdQualifier, recursive
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u38(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u38(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u38(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Provides a list of rooms on the server. A u38 is sent in response to u21 and u26. The requestedRoomIDQualifier and recursive arguments are the original values supplied to the call that generated the room list.
			
			function u38(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u38 message  (ROOMLIST_SNAPSHOT)
				S2C.ROOMLIST_SNAPSHOT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to create the specified room.,If roomID is empty,
		// then the server creates the room ID automatically.
		// To determine the room's ID, the client must watch for a room addition message (u39).
		// Recognized setting names for the second argument are as follows:
		// The third argument lists the room's initial attributes.
		// The fourth argument lists room's room modules, which can be defined by a script or a class.
		// Scripts and classes can be listed in any order.
		// A path to a script indicates the location of a script relative to the server's
		// central scripts directory.
		// _DIE_ON_EMPTY, _MAX_CLIENTS, _PASSWORD
		
		CREATE_ROOM: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u24 SQL statement based on the CREATE_ROOM args: roomID, roomSettings, attrOptions, qualifiedClassName
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u32(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u32(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u32(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports that the specified room was added. Sent to clients watching the specified room's qualifier. See u26.
			
			function u32(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u39 message  (ROOM_ADDED)
				S2C.CREATE_ROOM_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove the specified room. If the request is successful, the server sends a u40 to all clients in or observing the room. The client that sent the u25 message also receives a u33. Clients do not receive separate u37 (CLIENT_REMOVED) notifications for clients that are forced out of the room when it is removed.
		
		REMOVE_ROOM: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u25 SQL statement based on the REMOVE_ROOM args: roomID, password
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u40(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u40(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u40(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports that the specified room was removed. Sent to clients watching the specified room's qualifier. See u26. Also sent to clients in or observing a room when the room is removed (regardless of their update levels). Note that clients do not receive separate u37 (CLIENT_REMOVED) notifications for clients that are forced out of a room when it is removed.
			
			function u40(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u40 message  (ROOM_REMOVED)
				S2C.ROOM_REMOVED(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to inform the client when new rooms qualified by roomIdQualifier are added to or removed from the server. The server sends the result of the request via a u42. If the request was successful, the server also sends a u38. Subsequent room additions trigger u39; subsequent room removals trigger u40. It is legal to watch a qualifier that does not yet exist.,To watch for all rooms on the server, supply the empty string ("") for roomIdQualifier and true for recursive.,To watch for rooms with the unnamed qualifier, supply the empty string ("") for roomIdQualifier and false for recursive.,To watch for rooms with the qualifier "examples", supply "examples" for roomIdQualifier and false for recursive.,Note: the recursive argument is currently available for the unnamed qualifier ("") only. Recursion for other qualifiers is planned for future versions of the UPC protocol.
		
		WATCH_FOR_ROOMS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u26 SQL statement based on the WATCH_FOR_ROOMS args: roomIdQualifier, recursive
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u42(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u42(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u42(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a u26 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
			
			function u42(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u42 message  (WATCH_FOR_ROOMS_RESULT)
				S2C.WATCH_FOR_ROOMS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to stop sending room-addition-and-removal notifications for the specified roomIdQualifier. The server sends the result of the request via a u43.,To stop watching for all rooms on the server, supply the empty string ("") for roomIdQualifier and true for recursive.,To stop watching for rooms with the unnamed qualifier, supply the empty string ("") for roomIdQualifier and false for recursive.,To stop watching for rooms with the qualifier "examples", supply "examples" for roomIdQualifier and false for recursive.,Note: the recursive argument is currently available for the unnamed qualifier ("") only. Recursion for other qualifiers is planned for future versions of the UPC protocol.
		
		STOP_WATCHING_FOR_ROOMS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u27 SQL statement based on the STOP_WATCHING_FOR_ROOMS args: roomIdQualifier, recursive
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u43(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u43(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u43(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a u27 request. The roomIdQualifier and recursive arguments specify the values supplied to the instigating u26 request.
			
			function u43(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u43 message  (STOP_WATCHING_FOR_ROOMS_RESULT)
				S2C.STOP_WATCHING_FOR_ROOMS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a room snapshot for the specified room. In response, the server sends a u60 and, if the request succeeds, a u54. The updateLevels parameter specifies the amount of information that should be included in the snapshot, following the rules described under u64. If updateLevels is not supplied, the sender's update levels for the room are used. If the sender does not have update levels specified for the room, the room's maximum levels are used.
		
		GET_ROOM_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u55 SQL statement based on the GET_ROOM_SNAPSHOT args: requestID, roomID, password, updateLevels
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u60(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u60(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u60(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a u55 request by the client.
			
			function u60(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u60 message  (GET_ROOM_SNAPSHOT_RESULT)
				S2C.GET_ROOM_SNAPSHOT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Used for spectating a room the client is not in. A u58 asks the server to register the sender as an observer of the specified room. The result of attempting to observe the room is returned to the sender via a u77. If the attempt is successful, the sender is also sent a u59, and will subsequently receive updates for the room in accordance with the client's specified occupant, room, and message update levels. If a client changes its update levels, subsequent updates are sent according to the new levels. For details on which updates are sent and how levels affect updates, see u64.,If a client is in a room, it can still register to observe that room. Likewise, a client can observe a room, and then join and leave it arbitrarily without affecting observation status. When a client is both an observer and an occupant of a room, it receives updates about the room even after leaving it. Clients that observe a room and then join it will not receive a u54 at join time.,When a room is removed from the server, clients in that room receive a u62, but do not automatically receive notification that the room was removed. Clients wishing to be notified when a room is removed must register for notifications via WATCH_FOR_ROOMS.
		
		OBSERVE_ROOM: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u58 SQL statement based on the OBSERVE_ROOM args: roomID, password
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u77(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u77(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u77(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a room observation attempt (u58) by the client. If status is SUCCESS, the client is also sent a separate u59 message.
			
			function u77(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u77 message  (OBSERVE_ROOM_RESULT)
				S2C.OBSERVE_ROOM_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to unregister the sender as an observer of the specified room. The result of the request is returned to the sender via a u78. If the attempt is successful, the sender is also sent a u62.
		
		STOP_OBSERVING_ROOM: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u61 SQL statement based on the STOP_OBSERVING_ROOM args: roomID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u78(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u78(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u78(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt to stop observing the specified roomID. See u61.
			
			function u78(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u78 message  (STOP_OBSERVING_ROOM_RESULT)
				S2C.STOP_OBSERVING_ROOM_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to change the client's update levels for the specified room. The server applies only those changes permitted for the client's security level. When a client's room update levels change, the server sends that client a u128. The updateLevel parameter is an integer whose ordered bits represent the following update levels:,The update levels specified by the preceding bits determine how much information is pushed to the client when it is either in or observing a room.,In the preceding list, *, **, ***, and **** have the following meanings: 0 room messages. 1 room shared attributes *. 2 occupant count. 3 observer count. 4 occupant list *. 5 observer list *. 6 occupant shared room attributes *, **. 7 observer shared room attributes *, ***8 occupant shared global attributes *, **. 9 observer shared global attributes *, ***. 10 occupant login/logoffs *, **. 11 observer login/logoffs *, ***. 12 all room attributes *, ****. * When a client joins a room it is not already observing, or observes a room it is not already in, it is sent a u54 describing the current state of the room. ** When this bit is on, bit 4 is automatically turned on. *** When this bit is on, bit 5 is automatically turned on. **** This bit requires administrator privileges
		
		SET_ROOM_UPDATE_LEVELS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u64 SQL statement based on the SET_ROOM_UPDATE_LEVELS args: roomID, updateLevel
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u128(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u128(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u128(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// forms the receiving client that its update levels for a room have changed. See u64.
			
			function u128(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u128 message  (UPDATE_LEVELS_UPDATE)
				S2C.UPDATE_LEVELS_UPDATE(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// CLIENT_HELLO is the first step in the client-server connection process. It tells the server the client's type, the user agent (software name and version) being used to make the connection, and the UPC protocol version used by the client to communicate. The server responds with a u66, and then:,Example values for clientType are:,The userAgent is a human-readable string set arbitrarily by the client, and is used for logging purposes only. For example, "Flash Player WIN 9,0,124,0 StandAlone (debug, localTrusted)".,The upcVersion specifies the version of the UPC specification used by the client, in the format: majorNumber.minorNumber.revisionNumber. For example, 1.2.0. If the client's majorNumber, minorNumber, and revisionNumber all match the server's majorNumber, minorNumber, and revisionNumber, the server is considered compatible with the client. Otherwise:,if the client and server are considered strictly incompatible, the server disconnects the client (see compatibility details below). Otherwise, the server sends a u29 followed by a u63. Reactor, Orbiter, OrbiterMicro, Mariner. If the server's majorNumber and the client's majorNumber do not match, or the server's minorNumber and the client's minorNumber do not match, the server sends a u66 with the "upcCompatible" argument set to false, and disconnects the client. In this case, the client is considered strictly incompatible with the server. If the server's revisionNumber and the client's revisionNumber do not match, but the majorNumber and minorNumber both match, then the server sends a u66 with the "upcCompatible" argument set to false, but does not disconnect the client. In this case, the client is considered loosely incompatible with the server. Based on the features required in the application, the client application must, itself, decide whether to stay connected. For example, imagine a hypothetical UPC-specification version, 4.5.5, that is succeeded by a minor revision 4.5.6. The 4.5.6 revision is identical to its predecessor except that it contains a new UPC message, "REMOVE_ALL_ROOMS", that was not present in 4.5.5. All 4.5.5-compatible client applications can safely communicate with all 4.5.6-compatible servers because all 4.5.5 messages are still supported in revision 4.5.6. However, a 4.5.6-compatible client application, can safely communicate with a 4.5.5-compatible server only if it does not use REMOVE_ALL_ROOMS, which is not supported by the 4.5.5-compatible server. A 4.5.6-compatible client application that uses REMOVE_ALL_ROOMS would, hence, be expected to disconnect itself from a 4.5.5-compatible server.
		
		CLIENT_HELLO: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u65 SQL statement based on the CLIENT_HELLO args: clientType, userAgent, upcVersion
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u66(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u66(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u66(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// SERVER_HELLO is the second step in the client-server connection process. It tells the client the server's version and protocol version, and provides the client with a server-side session ID used to identify the connection. If the server determines the client to be unacceptably protocol-incompatible, the server will automatically disconnect the client. For compatibility details, see u65. The affinityAddress indicates the server's public address. When affinityAddress is provided, clients must send all communications to that address for the specified affinityDuration, which is given in minutes. Union Platform's affinity system ensures that a given client will connect to a specific Union Server node in a cluster for a specified duration, as is required in load-balanced configurations.
			
			function u66(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u66 message  (SERVER_HELLO)
				S2C.SERVER_HELLO(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove a room attribute from the specified room. The result is returned via a u80. If the request is successful, all clients requiring notification of the change are sent a u79.
		
		REMOVE_ROOM_ATTR: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u67 SQL statement based on the REMOVE_ROOM_ATTR args: roomID, attrName
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u80(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u80(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u80(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a request to remove a room attribute.
			
			function u80(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u80 message  (REMOVE_ROOM_ATTR_RESULT)
				S2C.REMOVE_ROOM_ATTR_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove a client attribute from the client specified by clientID or the user account specified by userID. The clientID and userID arguments are mutually exclusive; only one or the other is allowed. The result of the request is returned via a u82. If the request succeeds, all clients needing to be notified of the deletion are sent a u81. If clientID is not specified, the attribute is deleted from the sending client.
		
		REMOVE_CLIENT_ATTR: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u69 SQL statement based on the REMOVE_CLIENT_ATTR args: clientID, userID, attrName, scope
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u82(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u82(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u82(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a request to remove a client attribute.
			
			function u82(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u82 message  (REMOVE_CLIENT_ATTR_RESULT)
				S2C.REMOVE_CLIENT_ATTR_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Sends the specified message to all of the modules of the specified room. The argument names (argName1, argName2,...argNamen) must not contain the pipe (|) character. Argument values can contain the pipe (|) character.
		
		SEND_ROOMMODULE_MESSAGE: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u70 SQL statement based on the SEND_ROOMMODULE_MESSAGE args: roomID, moduleMessageName, ...argNameValuePairs
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u00(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u00(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u00(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// <p>Do not send any reponse
			
			function u00(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u00 message  (DONT_REPLY)
				S2C.DONT_REPLY(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Sends the specified message to the specified server module. The moduleID must be the ID of a deployed server module on the server. The argument names (argName1, argName2,...argNamen) must not contain the pipe (|) character. Argument values can contain the pipe (|) character.
		
		SEND_SERVERMODULE_MESSAGE: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u71 SQL statement based on the SEND_SERVERMODULE_MESSAGE args: moduleID, moduleMessageName, ...argNameValues
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u00(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u00(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u00(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// <p>Do not send any reponse
			
			function u00(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u00 message  (DONT_REPLY)
				S2C.DONT_REPLY(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to terminate the session specified by sessionID.
		
		TERMINATE_SESSION: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u83 SQL statement based on the TERMINATE_SESSION args: sessionID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u00(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u00(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u00(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// <p>Do not send any reponse
			
			function u00(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u00 message  (DONT_REPLY)
				S2C.DONT_REPLY(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to logoff the user account specified by userID. Results of the logoff attempt are returned via a u87. If the attempt succeeds, the server logs off and then disconnects the client.
		
		LOGOFF: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u86 SQL statement based on the LOGOFF args: userID, password
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u87(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u87(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u87(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt to log off the client with the specified userID. See u86.
			
			function u87(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u87 message  (LOGOFF_RESULT)
				S2C.LOGOFF_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a list of clientIDs for all clients currently connected to the server. The list will also include userIDs for all clients with user accounts that are currently logged in. The result is sent via a u101. See also u97.
		
		GET_CLIENTLIST_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u91 SQL statement based on the GET_CLIENTLIST_SNAPSHOT args: requestID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u101(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u101(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u101(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Provides a list of all clients currently connected to the server. For all clients that are logged in, 'userIDs' are also included. See u91.
			
			function u101(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u101 message  (CLIENTLIST_SNAPSHOT)
				S2C.CLIENTLIST_SNAPSHOT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to inform the client when clients connect or disconnect, or login or logoff. The server sends the result of the request via a u107. If the request was successful, the server also sends a u101. Subsequent client connections trigger a u102; subsequent client disconnections trigger a u103. Subsequent client logins trigger a u88; subsequent client logoffs trigger a u89.
		
		WATCH_FOR_CLIENTS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u92 SQL statement based on the WATCH_FOR_CLIENTS args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u107(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u107(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u107(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a WATCH_FOR_CLIENTS (u92) request made by the recipient.
			
			function u107(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u107 message  (WATCH_FOR_CLIENTS_RESULT)
				S2C.WATCH_FOR_CLIENTS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to stop sending client connection-and-disconnnection notifications. The server sends the result of the request via a u108.
		
		STOP_WATCHING_FOR_CLIENTS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u93 SQL statement based on the STOP_WATCHING_FOR_CLIENTS args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u108(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u108(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u108(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a STOP_WATCHING_FOR_CLIENTS (u93) request made by the recipient.
			
			function u108(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u108 message  (STOP_WATCHING_FOR_CLIENTS_RESULT)
				S2C.STOP_WATCHING_FOR_CLIENTS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a snapshot for the specified client. In response, the server sends a u115 and, if the request succeeds, a u104.
		
		GET_CLIENT_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u94 SQL statement based on the GET_CLIENT_SNAPSHOT args: requestID, clientID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u115(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u115(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u115(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a u94 request made by the recipient.
			
			function u115(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u115 message  (GET_CLIENT_SNAPSHOT_RESULT)
				S2C.GET_CLIENT_SNAPSHOT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to register the sender as an observer of the specified client. In response, the server sends a u105 and, if the request succeeds, a u119 followed by a u104. Subsequently if the specified client's state changes, the observing client is notified in the following ways: Observed client's attribute changes: observer receives a u8, Observed client's attribute is deleted: observer receives a u81, Observed client joins a room: observer receives a 113, Observed client leaves a room: observer receives a 114, Observed client observes a room: observer receives a 117, Observed client stops observing a room: observer receives a 118, Observed client logs in: observer receives a u88, Observed client logs off: observer receives a u89, Observed client disconnects: observer receives a u103
		
		OBSERVE_CLIENT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u95 SQL statement based on the OBSERVE_CLIENT args: clientID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u105(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u105(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u105(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a client observation attempt (u95) made by the recipient. If status is SUCCESS, the client is also sent a separate u119 message.
			
			function u105(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u105 message  (OBSERVE_CLIENT_RESULT)
				S2C.OBSERVE_CLIENT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to unregister the sender as an observer of the specified client. In response, the server sends a u106. If the request succeeds, the server also sends a u120, and stops sending updates about the specified client.
		
		STOP_OBSERVING_CLIENT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u96 SQL statement based on the STOP_OBSERVING_CLIENT args: clientID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u106(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u106(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u106(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt by the recipient to stop observing the specified client (see u96). If status is SUCCESS, the client is also sent a separate u120 message.
			
			function u106(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u106 message  (STOP_OBSERVING_CLIENT_RESULT)
				S2C.STOP_OBSERVING_CLIENT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a list of userIDs for all registered user accounts on the server. The result is sent via a u127. See also u91.
		
		GET_ACCOUNTLIST_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u97 SQL statement based on the GET_ACCOUNTLIST_SNAPSHOT args: requestID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u127(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u127(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u127(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Provides a list of all user accounts currently registered on the server. See u97.
			
			function u127(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u127 message  (ACCOUNTLIST_SNAPSHOT)
				S2C.ACCOUNTLIST_SNAPSHOT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to inform the client when new user accounts are created. The server sends the result of the request via a u109. If the request was successful, the server also sends a u127. Subsequent user-account creations trigger a u111; subsequent user-account removals trigger a u112.
		
		WATCH_FOR_ACCOUNTS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u98 SQL statement based on the WATCH_FOR_ACCOUNTS args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u109(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u109(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u109(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a WATCH_FOR_ACCOUNTS (u98) request made by the recipient.
			
			function u109(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u109 message  (WATCH_FOR_ACCOUNTS_RESULT)
				S2C.WATCH_FOR_ACCOUNTS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to stop sending user-account creation-and-removal notifications. The server sends the result of the request via a u110.
		
		STOP_WATCHING_FOR_ACCOUNTS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u99 SQL statement based on the STOP_WATCHING_FOR_ACCOUNTS args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u110(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u110(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u110(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a STOP_WATCHING_FOR_ACCOUNTS (u99) request made by the recipient.
			
			function u110(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u110 message  (STOP_WATCHING_FOR_ACCOUNTS_RESULT)
				S2C.STOP_WATCHING_FOR_ACCOUNTS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a snapshot for the specified user account, including all persistent data stored in the user's account. In response, the server sends a u116 and, if the request succeeds, a u104.
		
		GET_ACCOUNT_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u100 SQL statement based on the GET_ACCOUNT_SNAPSHOT args: requestID, userID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u116(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u116(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u116(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a u100 request made by the recipient.
			
			function u116(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u116 message  (GET_ACCOUNT_SNAPSHOT_RESULT)
				S2C.GET_ACCOUNT_SNAPSHOT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to register the sender as an observer of the specified user account. In response, the server sends a u123 and, if the request succeeds, a u124. Subsequently if the specified user account's state changes, the observing client is notified in the following ways: Observed account logs in: observer receives a u88, Observed account logs off: observer receives a u89, Observed account deleted: observer receives a u112
		
		OBSERVE_ACCOUNT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u121 SQL statement based on the OBSERVE_ACCOUNT args: userID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u123(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u123(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u123(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a user-account observation attempt (u121) made by the recipient. If status is SUCCESS, the client is also sent a separate u124 message.
			
			function u123(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u123 message  (OBSERVE_ACCOUNT_RESULT)
				S2C.OBSERVE_ACCOUNT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to unregister the sender as an observer of the specified user account. In response, the server sends a u125. If the request succeeds, the server also sends a u126, and stops sending updates about the specified user account.
		
		STOP_OBSERVING_ACCOUNT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u122 SQL statement based on the STOP_OBSERVING_ACCOUNT args: userID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u125(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u125(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u125(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an attempt by the recipient to stop observing the specified user account (see u122). If status is SUCCESS, the client is also sent a separate u126 message.
			
			function u125(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u125 message  (STOP_OBSERVING_ACCOUNT_RESULT)
				S2C.STOP_OBSERVING_ACCOUNT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to assign the specified role to the user account with the specified userID. In response, the server sends a u134. An account's role(s) determine which actions a user is allowed to perform on Union Server. For a list of security actions and corresponding rules, see Union Server's documentation. Legal values for role are: MODERATOR
		
		ADD_ROLE: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u133 SQL statement based on the ADD_ROLE args: userID, role
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u134(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u134(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u134(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an add-role attempt (u133) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
			
			function u134(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u134 message  (ADD_ROLE_RESULT)
				S2C.ADD_ROLE_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove the specified role from the user account with the specified userID. In response, the server sends a u136. Legal values for role are listed under u133.
		
		REMOVE_ROLE: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u135 SQL statement based on the REMOVE_ROLE args: userID, role
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u136(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u136(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u136(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a remove-role attempt (u135) made by the recipient. If status is SUCCESS, and the specified user is logged in, then Union Server updates the _ROLES attribute on the client under which the user logged in.
			
			function u136(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u136 message  (REMOVE_ROLE_RESULT)
				S2C.REMOVE_ROLE_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to refuse all connection attempts made by a particular client address. A "client address" is the logical origin of a client connection, typically an IP address. If the address parameter is provided, the specified address is banned and clientID is ignored. If no address parameter is provided, then clientID must be provided, and the address of the client with the specified clientID is banned. The ban lasts for the number of seconds specified by duration. The reason parameter is an arbitrary optional string indicating the reason for the ban. The reason string is stored by the server in the banned list. The result of a ban attempt is returned via a u138. A list of current banned addresses can be retrieved via a u141 or u143.
		
		BAN: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u137 SQL statement based on the BAN args: address, clientID, duration, reason
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u138(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u138(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u138(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a ban attempt (u137) made by the recipient. If status is SUCCESS, connection attempts by any client at the specified address are refused by Union Server. If the original u137 included a clientID and no address, that clientID is returned via u138's clientID.
			
			function u138(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u138 message  (BAN_RESULT)
				S2C.BAN_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove a banned a client address from the banned list. The result of the unban attempt is returned via a u140.
		
		UNBAN: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u139 SQL statement based on the UNBAN args: address
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u140(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u140(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u140(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of an unban attempt (u137) made by the recipient. If status is SUCCESS, 'any' previous connection ban on the specified address is lifted.
			
			function u140(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u140 message  (UNBAN_RESULT)
				S2C.UNBAN_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a list of addresses currently banned from connecting to the server. The result is sent via a u142. See also u143.
		
		GET_BANNED_LIST_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u141 SQL statement based on the GET_BANNED_LIST_SNAPSHOT args: requestID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u142(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u142(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u142(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Provides a list of addresses currently banned from connecting to the server. A u142 is sent in response to u141 and u143.
			
			function u142(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u142 message  (BANNED_LIST_SNAPSHOT)
				S2C.BANNED_LIST_SNAPSHOT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to inform the sending client when addresses are banned or unbanned. The server sends the result of the request via a u144. If the request was successful, the server also sends a u142. Subsequently, when an address is banned, the server sends a u147; when an address is unbanned, the server sends a u148.
		
		WATCH_FOR_BANNED_ADDRESSES: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u143 SQL statement based on the WATCH_FOR_BANNED_ADDRESSES args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u144(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u144(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u144(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a WATCH_FOR_BANNED_ADDRESSES (u143) request made by the recipient.
			
			function u144(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u144 message  (WATCH_FOR_BANNED_ADDRESSES_RESULT)
				S2C.WATCH_FOR_BANNED_ADDRESSES_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to stop sending banned-address notifications. The server sends the result of the request via a u146.
		
		STOP_WATCHING_FOR_BANNED_ADDRESSES: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u145 SQL statement based on the STOP_WATCHING_FOR_BANNED_ADDRESSES args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u146(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u146(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u146(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a STOP_WATCHING_FOR_BANNED_ADDRESSES (u145) request made by the recipient.
			
			function u146(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u146 message  (STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT)
				S2C.STOP_WATCHING_FOR_BANNED_ADDRESSES_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to forcibly disconnect the client with the specified clientID. The server sends the result of the request via a u150.
		
		KICK_CLIENT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u149 SQL statement based on the KICK_CLIENT args: clientID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u150(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u150(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u150(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a KICK_CLIENT (u149) request made by the recipient.
			
			function u150(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u150 message  (KICK_CLIENT_RESULT)
				S2C.KICK_CLIENT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a list of currently active server modules (not to be confused with room modules). The result is sent via a u152. By default, u151 requires administrator privileges.
		
		GET_SERVERMODULELIST_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u151 SQL statement based on the GET_SERVERMODULELIST_SNAPSHOT args: requestID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u152(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u152(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u152(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Provides a list of server modules currently active on Union Server. A u152 is sent in response to u151.
			
			function u152(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u152 message  (SERVERMODULELIST_SNAPSHOT)
				S2C.SERVERMODULELIST_SNAPSHOT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to remove all current module class definitions from memory. Subsequently instantiated modules will use the newly loaded module class definitions, allowing module developers to update Union Server's modules at runtime without restarting the server. By default, u153 requires administrator privileges.
		
		CLEAR_MODULE_CACHE: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u153 SQL statement based on the CLEAR_MODULE_CACHE args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u00(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u00(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u00(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// <p>Do not send any reponse
			
			function u00(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u00 message  (DONT_REPLY)
				S2C.DONT_REPLY(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to send a list of UPC-message-processing statistics. In response, the server sends a u155 and, if the request succeeds, a u156. By default, u154 requires administrator privileges.
		
		GET_UPC_STATS_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u154 SQL statement based on the GET_UPC_STATS_SNAPSHOT args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u155(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u155(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u155(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a GET_UPC_STATS_SNAPSHOT (u154) request made by the recipient.
			
			function u155(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u155 message  (GET_UPC_STATS_SNAPSHOT_RESULT)
				S2C.GET_UPC_STATS_SNAPSHOT_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to reset server-side UPC-processing statistics. The following statistics are affected by a reset:,The result of a u157 request is sent via a u158. The statistics-reset is reflected in any subsequent u156 transmission. By default, u157 requires administrator privileges.,the list of the longest UPC-message-processing times
		
		RESET_UPC_STATS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u157 SQL statement based on the RESET_UPC_STATS args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u158(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u158(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u158(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a RESET_UPC_STATS (u157) request made by the recipient.
			
			function u158(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u158 message  (RESET_UPC_STATS_RESULT)
				S2C.RESET_UPC_STATS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to notify the sending client upon processing any UPC message. The server sends the result of the request via a u160. Notifications are transmitted via u161. By default, u159 requires administrator privileges.
		
		WATCH_FOR_PROCESSED_UPCS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u159 SQL statement based on the WATCH_FOR_PROCESSED_UPCS args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u160(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u160(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u160(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a WATCH_FOR_PROCESSED_UPCS (u159) request made by the recipient.
			
			function u160(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u160 message  (WATCH_FOR_PROCESSED_UPCS_RESULT)
				S2C.WATCH_FOR_PROCESSED_UPCS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to stop sending UPC-processing notifications to the sending client. The server sends the result of the request via a u163. By default, u162 requires administrator privileges.
		
		STOP_WATCHING_FOR_PROCESSED_UPCS: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u162 SQL statement based on the STOP_WATCHING_FOR_PROCESSED_UPCS args:
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u163(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u163(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u163(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Reports the result of a STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT (u162) request made by the recipient.
			
			function u163(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u163 message  (STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT)
				S2C.STOP_WATCHING_FOR_PROCESSED_UPCS_RESULT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to return a list of the cluster nodes currently connected to the server. The result is returned via a u166.
		
		GET_NODELIST_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u165 SQL statement based on the GET_NODELIST_SNAPSHOT args: requestID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u166(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u166(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u166(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// Provides a list of IDs for the cluster nodes currently connected to the server. Each ID is an arbitrary, statistically unique string generated automatically by Union Server. A server's nodeID is guaranteed to be the same for a given server until that server shuts down. u166 is sent in response to u165.
			
			function u166(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u166 message  (NODELIST_SNAPSHOT)
				S2C.NODELIST_SNAPSHOT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		
		// Asks the server to return a per-gateway summary of connection and bandwidth statistics. The result is returned via a u168. By default, access to gateway statistics requires administrator privileges.
		
		GET_GATEWAYS_SNAPSHOT: function (message_id, message_name, args, callBackFunction) {
			
			// Reference the Client to Server (C2S) Object
			var root = C2S;
			
			// Reference this as self for later
			var self = this;
			
			// Compose an u167 SQL statement based on the GET_GATEWAYS_SNAPSHOT args: requestID
			var sql = root.composeSQL(message_id, message_name, args);
			
			//Set the counter to 0 for later use
			var count = 0;
			
			// Initiate an empty data object
			var data = [];
			
			//Check if we have an sql statement
			if (sql) {
				
				// Execute the above SQL statement
				db.exeSQL(sql, function (result, fields) {
					
					// If we got results
					if (result.length > 0) {
						
						// Loop through the result object
						result.forEach(function (listItem, index) {
							
							// Increament our counter
							count++;
							
							data.push(listItem);
							
							// Call the function when all data has been gone through
							if (count == result.length) {
								
								u168(message_id, message_name, args, data, callBackFunction);
								
							}
							
						});
						
					} else {
						
						// If there are no results, just call the server function
						u168(message_id, message_name, args, data, callBackFunction);
						
					}
					
				});
				
			} else {
				
				// Not all requests required db queries, such are ignored as below
				u168(message_id, message_name, args, null, callBackFunction);
				
			}
			
			// <p>Provides gateway statistics in response to u167.</p> <p>The list of NUM_CONNECTIONS_CATEGORYn gives the number of connections to the gateway, 'broken' down by connection type. Connection types are determined by each gateway. For example, 'the' built-in gateways for Adobe Flash clients include the connection types 'POLICYFILE' (for Flash policy file requests) and 'CLIENT' (for connections that are determined to be legitimate Union clients). For every gateway, 'one' of the categories in the NUM_CONNECTIONS_CATEGORYn list is always guaranteed to be 'TOTAL'. The 'TOTAL' connection category indicates the total raw number of lifetime connections to the specified gateway, 'including' all connection types.</p> <p>The list of NUM_CLIENTS_CLIENTTYPEn gives the number of Union clients that have connected to the gateway, 'broken' down by client type. For example, 'a' gateway might have had 150 Reactor (Flash) client connections and 35 Orbiter (JavaScript) client connections.</p> <p>The list of NUM_CLIENTS_UPCVERSION n gives the number of Union clients that have connected to the gateway, 'broken' down by UPC version. For example, 'a' gateway might have had 25 clients that used UPC version 1.4.0 and 40 clients that used UPC version 1.5.0.</p> <p>The 'lifetimeRead...' argument lists the gateway's bandwidth usage. All bandwidth statistics are given in bytes. Bandwidth averages are per second. Intervals are the most recent second at the time of the request.</p>
			
			function u168(message_id, message_name, args, data, callBackFunctionn) {
				
				
				// Call the server to client u168 message  (GATEWAYS_SNAPSHOT)
				S2C.GATEWAYS_SNAPSHOT(message_id, message_name, args, data, callBackFunctionn);
				
			}
			
		},
		
		composeSQL: function (message_id, message_name, args) {
			
			return sqlObj.getSQL(message_id, message_name, args);
			
		},
		
	}
	
	return C2S;
	
}