module.exports = {
	
	getSQL: function (message_id, message_name, args, options) {
		
		let sql = false;
		
		switch (message_id) {
			
			//SEND_MESSAGE_TO_ROOMS
			case "u1": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//SEND_MESSAGE_TO_CLIENTS
			case "u2": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//SEND_MESSAGE_TO_SERVER
			case "u57": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//SET_CLIENT_ATTR
			case "u3": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//JOIN_ROOM
			case "u4": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_name` = '" + args["roomID"] + "';";
				break;
			}
			
			//SET_ROOM_ATTR
			case "u5": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//LEAVE_ROOM
			case "u10": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//CREATE_ACCOUNT
			case "u11": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//REMOVE_ACCOUNT
			case "u12": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//CHANGE_ACCOUNT_PASSWORD
			case "u13": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//LOGIN
			case "u14": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_CLIENTCOUNT_SNAPSHOT
			case "u18": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//SYNC_TIME
			case "u19": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_ROOMLIST_SNAPSHOT
			case "u21": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//CREATE_ROOM
			case "u24": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_name` = '" + args["roomID"] + "';";
				break;
			}
			
			//REMOVE_ROOM
			case "u25": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//WATCH_FOR_ROOMS
			case "u26": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_WATCHING_FOR_ROOMS
			case "u27": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_ROOM_SNAPSHOT
			case "u55": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//OBSERVE_ROOM
			case "u58": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_OBSERVING_ROOM
			case "u61": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//SET_ROOM_UPDATE_LEVELS
			case "u64": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//CLIENT_HELLO
			case "u65": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//REMOVE_ROOM_ATTR
			case "u67": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//REMOVE_CLIENT_ATTR
			case "u69": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//SEND_ROOMMODULE_MESSAGE
			case "u70": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//SEND_SERVERMODULE_MESSAGE
			case "u71": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//TERMINATE_SESSION
			case "u83": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//LOGOFF
			case "u86": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_CLIENTLIST_SNAPSHOT
			case "u91": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//WATCH_FOR_CLIENTS
			case "u92": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_WATCHING_FOR_CLIENTS
			case "u93": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_CLIENT_SNAPSHOT
			case "u94": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//OBSERVE_CLIENT
			case "u95": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_OBSERVING_CLIENT
			case "u96": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_ACCOUNTLIST_SNAPSHOT
			case "u97": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//WATCH_FOR_ACCOUNTS
			case "u98": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_WATCHING_FOR_ACCOUNTS
			case "u99": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_ACCOUNT_SNAPSHOT
			case "u100": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//OBSERVE_ACCOUNT
			case "u121": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_OBSERVING_ACCOUNT
			case "u122": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//ADD_ROLE
			case "u133": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//REMOVE_ROLE
			case "u135": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//BAN
			case "u137": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//UNBAN
			case "u139": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_BANNED_LIST_SNAPSHOT
			case "u141": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//WATCH_FOR_BANNED_ADDRESSES
			case "u143": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_WATCHING_FOR_BANNED_ADDRESSES
			case "u145": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//KICK_CLIENT
			case "u149": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_SERVERMODULELIST_SNAPSHOT
			case "u151": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//CLEAR_MODULE_CACHE
			case "u153": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_UPC_STATS_SNAPSHOT
			case "u154": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//RESET_UPC_STATS
			case "u157": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//WATCH_FOR_PROCESSED_UPCS
			case "u159": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//STOP_WATCHING_FOR_PROCESSED_UPCS
			case "u162": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_NODELIST_SNAPSHOT
			case "u165": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			//GET_GATEWAYS_SNAPSHOT
			case "u167": {
				sql = "SELECT * FROM `socket24db`.`tbl_rooms` WHERE `room_uuid` = '" + args[""] + "';";
				break;
			}
			
			default: {
				break;
			}
			
		}
		
		return sql;
		
	},
	
	getSQLCreateClient: function (clientMetaData) {
		
		let sql = "INSERT INTO `socket24db`.`tbl_clients` (`client_id`, `user_id`, `client_uuid`, `client_type`, `client_upc_version`, `client_socket_id`, `client_agent`, `client_version`, `client_gateway`, `client_ip_address`, `client_roles`, `client_connected_time`, `client_connection_type`, `client_is_active`) VALUES (NULL, NULL, MD5('" + clientMetaData.client_ip_address + "'), '" + clientMetaData.client_type + "', '" + clientMetaData.client_upc_version + "', '" + clientMetaData.client_socket_id + "', '" + clientMetaData.client_agent + "', '" + clientMetaData.client_version + "', '" + clientMetaData.client_gateway + "', '" + clientMetaData.client_ip_address + "', '" + clientMetaData.client_roles + "', current_timestamp(), '" + clientMetaData.client_connection_type + "', '1');";
		
		return sql;
		
	},
	
	getSQLDeleteClient: function (clientID) {
		
		let sql = "DELETE FROM `socket24db`.`tbl_clients` WHERE `client_id` = '" + clientID + "';";
		
		return sql;
		
	},
	
	getSQLAssignClientUserId: function (client_id, user_id) {
		
		let sql = "UPDATE `tbl_clients` SET `user_id` = '" + user_id + "' WHERE `tbl_clients`.`client_id` = '" + client_id + "';";
		
		return sql;
		
	},
	
	getSQLAddClientAttribute: function (clientID, attrName, attrValue) {
		
		let sql = "INSERT INTO `tbl_client_attributes` (`client_attribute_id`, `client_id`, `client_attribute_name`, `client_attribute_value`) VALUES (NULL, '" + clientID + "', '" + attrName + "', '" + attrValue + "');";
		return sql;
		
	},
	
	getSQLUpdateClientAttribute: function (clientID, attrName, attrValue) {
		
		let sql = "UPDATE `tbl_client_attributes` SET `client_attribute_value` = '" + attrValue + "' WHERE `tbl_client_attributes`.`client_attribute_name` = '" + attrName + "' AND `tbl_client_attributes`.`client_id` = '" + clientID + "' ;";
		return sql;
		
	},
	
	getSQLDeleteClientAttributes: function (clientID) {
		
		let sql = "DELETE FROM `socket24db`.`tbl_client_attributes` WHERE `client_id` = '" + clientID + "';";
		
		return sql;
		
	},
	
	getSQLGetClientAttributes: function (clientID, attrName) {
		
		let sql = "SELECT * FROM `tbl_client_attributes` WHERE `tbl_client_attributes`.`client_id` = '" + clientID + "' ;";
		return sql;
		
	},
	
	getSQLGetClientAttributeByName: function (clientID, attrName) {
		
		let sql = "SELECT * FROM `tbl_client_attributes` WHERE `tbl_client_attributes`.`client_attribute_name` = '" + attrName + "' AND `tbl_client_attributes`.`client_id` = '" + clientID + "' ;";
		return sql;
		
	},
	
	getSQLCreateRoom: function (roomMetaData) {
		
		let sql = "INSERT INTO `socket24db`.`tbl_rooms` (`room_id`, `user_id`, `room_uuid`, `room_type`, `room_upc_version`, `room_socket_id`, `room_agent`, `room_version`, `room_gateway`, `room_ip_address`, `room_roles`, `room_connected_time`, `room_connection_type`, `room_is_active`) VALUES (NULL, NULL, MD5('" + roomMetaData.room_ip_address + "'), '" + roomMetaData.room_type + "', '" + roomMetaData.room_upc_version + "', '" + roomMetaData.room_socket_id + "', '" + roomMetaData.room_agent + "', '" + roomMetaData.room_version + "', '" + roomMetaData.room_gateway + "', '" + roomMetaData.room_ip_address + "', '" + roomMetaData.room_roles + "', current_timestamp(), '" + roomMetaData.room_connection_type + "', '1');";
		
		return sql;
		
	},
	
	getSQLDeleteRoom: function (roomID) {
		
		let sql = "DELETE FROM `socket24db`.`tbl_rooms` WHERE `room_id` = '" + roomID + "';";
		
		return sql;
		
	},
	
	getSQLAddRoomAttribute: function (roomID, attrName, attrValue) {
		
		let sql = "INSERT INTO `tbl_room_attributes` (`room_attribute_id`, `room_id`, `room_attribute_name`, `room_attribute_value`) VALUES (NULL, '" + roomID + "', '" + attrName + "', '" + attrValue + "');";
		return sql;
		
	},
	
	getSQLUpdateRoomAttribute: function (roomID, attrName, attrValue) {
		
		let sql = "UPDATE `tbl_room_attributes` SET `room_attribute_value` = '" + attrValue + "' WHERE `tbl_room_attributes`.`room_attribute_name` = '" + attrName + "' AND `tbl_room_attributes`.`room_id` = '" + roomID + "' ;";
		return sql;
		
	},
	
	getSQLDeleteRoomAttributes: function (roomID) {
		
		let sql = "DELETE FROM `socket24db`.`tbl_room_attributes` WHERE `room_id` = '" + roomID + "';";
		
		return sql;
		
	},
	
	getSQLGetRoomAttributes: function (roomID, attrName) {
		
		let sql = "SELECT * FROM `tbl_room_attributes` WHERE `tbl_room_attributes`.`room_id` = '" + roomID + "' ;";
		return sql;
		
	},
	
	getSQLGetRoomAttributeByName: function (roomID, attrName) {
		
		let sql = "SELECT * FROM `tbl_room_attributes` WHERE `tbl_room_attributes`.`room_attribute_name` = '" + attrName + "' AND `tbl_room_attributes`.`room_id` = '" + roomID + "' ;";
		return sql;
		
	},
	
	getSQLCreateUser: function (userMetaData) {
		
		let sql = "INSERT INTO `tbl_users` (`user_id`, `user_name`, `user_fullname`, `user_email`, `user_password`, `user_created_time`, `user_is_active`, `user_ban_until`, `user_icon`) VALUES (NULL, '" + userMetaData.username + "', '" + userMetaData.fullname + "', '" + userMetaData.email + "', MD5('" + userMetaData.password + "'), current_timestamp(), '1', NULL, 'default.png');";
		
		return sql;
		
	},
	
	getSQLLoggedInUser: function (user_id, session_id, agent) {
		
		let sql = "INSERT INTO `tbl_login_logs` (`login_log_id`, `user_id`, `session_id`, `user_agent`, `logged_in_on`) VALUES (NULL, '" + user_id + "', '" + session_id + "', '" + agent + "', current_timestamp());";
		
		return sql;
		
	},
	
	getSQLNewRoomOccupant: function (client_id, user_id, room_id) {
		
		let sql = "INSERT INTO `tbl_room_occupants` (`occupant_id`, `client_id`, `user_id`, `room_id`) VALUES (NULL," +
			" '" + client_id + "', '" + user_id + "', '" + room_id + "');";
		
		return sql;
		
	},
	
	getSQLUserOnline: function (client_id, user_id, session_id) {
		
		let sql = "INSERT INTO `tbl_online_users` (`user_id`, `client_id`, `session_id`," +
			" `logged_in_on`) VALUES ('" + user_id + "', '" + client_id + "', '" + session_id + "', current_timestamp());";
		
		return sql;
		
	},
	
	getSQLUserOffline: function (client_id) {
		
		let sql = "DELETE FROM `tbl_online_users` WHERE `client_id` = '" + client_id + "';";
		
		return sql;
		
	},
	
	getSQLBanRoomUser: function (client_id, user_id, room_id, ban_until) {
		
		let sql = "INSERT INTO `tbl_room_banned_occupants` (`client_id`, `user_id`, `room_id`, `banned_until`) VALUES" +
			" ('" + client_id + "', '" + user_id + "', '" + room_id + "', '" + ban_until + "');";
		
		return sql;
		
	},
	
	getSQLUnBanRoomUser: function (client_id, room_id) {
		
		let sql = "DELETE FROM `tbl_room_banned_occupants` WHERE `client_id` = '" + client_id + "' AND `room_id` = '" + room_id + "';";
		
		return sql;
		
	},
	
	getSQLRemoveRoomOccupant: function (client_id, room_id) {
		
		let sql = "DELETE FROM `tbl_room_occupants` WHERE  `tbl_room_occupants`.`client_id` = '" + client_id + "' AND" +
			" `tbl_room_occupants`.`room_id` = '" + room_id + "');";
		
		return sql;
		
	},
	
	getSQLNewMessage: function (messageMetaData) {
		
		let sql = "INSERT INTO `tbl_messages` (`messages_id`, `message_name`, `message_text`, `message_to`, `message_from`, `message_sent`, `message_delivered`, `message_read`, `message_to_room`, `messages_to_user`, `messages_to_client`) VALUES (NULL, '" + messageMetaData.message_name + "', '" + messageMetaData.message_text + "', '" + messageMetaData.message_to + "', '" + messageMetaData.message_from + "', current_timestamp(), NULL, NULL, '1', '1', NULL);";
		
		return sql;
		
	},
	
	getSQLRestartServer: function () {
		
		let sql = "TRUNCATE `socket24db`.`tbl_clients`;";
		sql += "TRUNCATE `socket24db`.`tbl_client_attributes`;";
		sql += "TRUNCATE `socket24db`.`tbl_online_users`;";
		
		return sql;
		
	},
	
	getSQLBackupDB: function () {
		
		let sql = "";
		
		return sql;
		
	}
	
}