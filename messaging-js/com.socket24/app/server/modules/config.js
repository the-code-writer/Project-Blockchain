const { v4: uuidV4 } = require('uuid');

module.exports = {
    
   parse: function(iniFile, encoding) {
       
       if(!encoding){
           
           encoding = 'utf-8';
           
       }
           
        var config = ini.parse(fs.readFileSync(iniFile, encoding));
        
        return config;
          
    },
   
   save: function(iniFile, config, section) {
        
        fs.writeFileSync(iniFile, ini.stringify(config, { section: section }))
          
    },

    encryptData: false,

    isSecure: true,

    defaultPort: 8195,

    securePort: 8195,

    upc_template: {U: {M: false, L: {A: []}, S: false, X: false}},

    cert: {
        key: "C:\\Users\\user\\WebstormProjects\\com.socket24\\app\\server\\security\\cert.key",
        cert: "C:\\Users\\user\\WebstormProjects\\com.socket24\\app\\server\\security\\cert.pem"
    },

    routes: [
        {
            id: "vaida",
            url: "/dev/js/vaida.js",
            path: "/public/dev/js/vaida.js",
            isDynamic: false,
        },
        {
            id: "socketio",
            url: "/dev/js/socket.io.js",
            path: "/public/dev/js/socket.io.js",
            isDynamic: false,
        },
        {
            id: "peerjs",
            url: "/dev/js/peerjs.min.js",
            path: "/public/dev/js/peerjs.min.js",
            isDynamic: false,
        },
        {
            id: "room",
            url: "/room/:room",
            path: "/public/chat/room.html",
            isDynamic: true,
        },
        {
            id: "home",
            url: "/",
            path: "/public/vaida-test.html",
            isDynamic: false,
        },
        {
            id: "auth",
            url: "/auth",
            path: `/room/${uuidV4()}`,
            isDynamic: false,
            redirect: true
        },

    ],
   
};
