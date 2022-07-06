VPC0001|CLIENT_HELLO|requestID,clientAgent,clientName,clientVersion,clientVPCVersion|VPC0002,VPC0003,VPC0004|ClientMananger.hello,Client.sendHello
VPC0002|SERVER_HELLO|requestID,serverAgent,serverName,serverVersion,serverVPCVersion,statusCode|ServerManager,Server.sendHello::
VPC0003|CLIENT_ATTRS|requestID,roomID,userID,clientID,clientName,clientVersion,clientVersion,clientCompatible,clientSessionID,clientConnectionTime,attributesMeta,statusCode|COMPATIBLE,INCOMPATIBLE,|ServerMananger.addClient,Server.addClient::
VPC0004|CLIENT_READY|requestID,clientName,clientSessionID,statusCode|READY|ServerManager.clientReady,Server.clientReady::
VPC0005|SEND_MESSAGE|requestID,clientID,userID,roomID,messageName,messageType,messageText,messageFilters,messageMetadata,includeSelf|VPC0006|MessageMananger.sendMessage,ClientMananger.sendMassage,UserMananger.sendMessage,RoomManager.sendMassage,Room.sendMessage
VPC0006
VPC0007|RECEIVE_MSSG|
VPC0008|SET_CLI_ATTR|requestID,clientID,userID,attrName,attrVal,attrScope,attrMetadata|VPC0009|Client.setAttribute,UserAccount.setAttribute
VPC0009|SET_CLA_RSLT|requestID,statusCode|SUCCESS,ERROR|ServerManager.setClientAttribute,Server.setClientAttribute::
VPC0010|SET_ROM_ATTR|requestID,roomID,attrName,attrVal,attrScope,attrMetadata|VPC0011|Room.setAttribute,RoomManager.setAttribute
VPC0011|SET_RMA_RSLT|requestID,statusCode|SUCCESS,ERROR|ServerManager.setClientAttribute,Server.setClientAttribute::
VPC0012|JOIN_ROOM_01|requestID,roomID,roomName,roomPassword|VPC0013|Room.join(), RoomManager.joinRoom()
VPC0013|JOIN_ROOM_RS|
VPC0014|CREATE_ROOMS|requestID,clientID,roomIDs,roomName,roomPassword,roomMetadata|VPC0015|RoomManager.createRoom()
VPC0015|CRT_ROOM_RST|requestID,roomID,roomAttrs|SUCCESS,ROOM_EXISTS,ERROR|RoomManager.createRo=
VPC0016|REMOVE_ROOMS|requestID,roomIDs,roomPassword|VPC0017|RoomManager.remove
VPC0017|RMV_ROOM_RST|requestID,roomIDs,statusCode|SUCCESS,ERROR,DENIED|RoomManager.removeRoom::
VPC0018|LEAVE_A_ROOM|requestID,roomID|VPC0019|RoomManager.leave,Room.leave
VPC0019|LEAVE_RM_RST|requestID,roomID,statusCode|SUCCESS,ERROR|RoomManager.leave::

VPC0050|SNPSHT_ROOMS|requestID,roomFilters,snapshotMetadata|VPC0051|RoomManager.getSnapshot,SnapshotManager.getRoomsSnapshot
VPC0051|SN_ROOMS_RST|requestID,roomList,statusCode|SUCCESS,ERROR,EMPTY|SnapshotManager.getRoomsSnapshot,RoomManager.getSnapshot::
VPC0052|SNPSHOT_ROOM|requestID,roomID,clientID,roomFilters,snapshotMetadata|VPC0053|RoomManager.getSnapshot,SnapshotManager.getRoomSnapshot
VPC0053|SNP_ROOM_RST|requestID,roomID,roomList,statusCode|SUCCESS,ERROR,NOT_FOUND|SnapshotManager.getRoomSnapshot,RoomManager.getSnapshot::
VPC0054|SNPSHT_CLNTS|requestID,clientFilters,snapshotMetadata|VPC0051|ClientManager.getSnapshot,SnapshotManager.getClientsSnapshot
VPC0055|SN_CLNTS_RST|requestID,clientList,statusCode|SUCCESS,ERROR,EMPTY|SnapshotManager.getClientsSnapshot,ClientManager.getSnapshot::
VPC0056|SNPSHOT_CLNT|requestID,clientID,clientID,clientFilters,snapshotMetadata|VPC0053|ClientManager.getSnapshot,SnapshotManager.getClientSnapshot
VPC0057|SNP_CLNT_RST|requestID,clientID,clientList,statusCode|SUCCESS,ERROR,NOT_FOUND|SnapshotManager.getClientSnapshot,ClientManager.getSnapshot::
VPC0058|SNPSHT_USERS|requestID,userFilters,snapshotMetadata|VPC0051|UserManager.getSnapshot,SnapshotManager.getUsersSnapshot
VPC0059|SN_USERS_RST|requestID,userList,statusCode|SUCCESS,ERROR,EMPTY|SnapshotManager.getUsersSnapshot,UserManager.getSnapshot::
VPC0060|SNPSHOT_USER|requestID,userID,clientID,userFilters,snapshotMetadata|VPC0053|UserManager.getSnapshot,SnapshotManager.getUserSnapshot
VPC0062|SNP_USER_RST|requestID,userID,userList,statusCode|SUCCESS,ERROR,NOT_FOUND|SnapshotManager.getUserSnapshot,UserManager.getSnapshot::

VPC0070|SIGN_UP_ACCN|requestID,userID,userPassword,userEmail,userFirstname,userLastname,userMobile,userAvatar,userMetadata|VPC0071|AccountManager.register,AccountManager.signUp,User.register,User.signUp,UserManager.register,UserManager.signUp
VPC0071|SIGN_UP_RSLT|requestID,userID,userAccountID,statusCode|SUCCESS,ERROR,USERNAME_EXISTS,MISSING_PARAMETERS|UserManager.register::
VPC0072|SIGN_IN_ACCN|requestID,userID,userPassword,clientUnixTime|VPC0073|AccountManager.login,AccountManager.signIn,User.login,User.signIn,UserManager.login,UserManager.signIn
VPC0073|SIGN_IN_RSLT|requestID,verificationCode,sessionID,statusCode|SUCCESS,ERROR,USERNAME_NOT_FOUND,INVALID_PASSWORD,INVALID_REQUEST|UserManager.login::
VPC0074|SIGN_OUT_ACC|requestID,verificationCode,sessionID|VPC0075|AccountManager.logout,AccountManager.signOut,User.logout,User.signOut,UserManager.logout,UserManager.signOut
VPC0073|SIGN_OUT_RST|requestID,statusCode|SUCCESS, ERROR,USERNAME_NOT_FOUND,INVALID_PASSWORD,INVALID_REQUEST|UserManager.logout::
VPC0076|CHANGE_PSSWD|requestID,userID,userPassword,userNewPassword,verificationCode,sessionID|VPC0077|UserManager.changePassword,User.changePassword
VPC0077|CHPSSWD_RSLT|requestID,statusCode|SUCCESS,ERROR,INVALID_PASSWORD,INVALID_REQUEST|UserManager.changeUserPassword::
VPC0078|CHANGE_USRID|requestID,userID,userPassword,userUserID,verificationCode,sessionID|VPC0079|UserManager.changeUserID,User.changeUserID
VPC0079|CHUSRID_RSLT|requestID,statusCode|SUCCESS,ERROR,INVALID_PASSWORD,INVALID_REQUEST|UserManager.changeUserID::
VPC0080|REMOVE_ACCNT|requestID,userID,userPassword,userNewPassword,verificationCode,sessionID|VPC0081|UserManager.removeAccount,User.removeAccount
VPC0081|RMV_ACC_RSLT|requestID,statusCode|SUCCESS,ERROR,INVALID_PASSWORD,INVALID_REQUEST|UserManager.removeUserAccount::

VPC0110|OBSERVE_ROOM|requestID,roomID,observeAttrs,observeMetadata|VPC0111|RoomManager.observeRoom,Observer.watchRoom,Room.observe
VPC0113|STP_OBSRV_RM|
VPC0114|OBSERVE_ACCN|
VPC0115|STP_OBSRV_AC|
VPC0116|OBSERVE_CLNT|
VPC0117|STP_OBSRV_CL|
VPC0118|OBSERVE_USER|
VPC0120|STP_OBSRV_US|
