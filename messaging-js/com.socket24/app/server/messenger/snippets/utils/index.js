const {v4: uuidV4} = require('uuid');

module.exports = {

    toUsername: function(str) {

        return str.toString().replace(".","").replace("-","").replace(" ","").toLowerCase();

    },
    
    data: {
      
        generateUUID: function (seed) {
    
            if(seed !== null){
                return uuidV4(seed);
            }else{
                return uuidV4();
            }
            
        }
        
    },

    clients : {

        getMetadata: function (args, id, ip, roles) {

            let client_metadata = {};

            client_metadata.client_type = args["clientType"];
            client_metadata.client_upc_version = args["upcVersion"];
            client_metadata.client_socket_id = id;
            client_metadata.client_agent = args["userAgent"];
            client_metadata.client_version = args["upcVersion"];
            client_metadata.client_gateway = "PrimaryGateway";
            client_metadata.gateway_type = "TCP";
            client_metadata.client_ip_address = ip;
            client_metadata.client_roles = roles;
            client_metadata.client_connection_type = "SECURE_WEBSOCKET";

            return client_metadata;

        }

    }

}