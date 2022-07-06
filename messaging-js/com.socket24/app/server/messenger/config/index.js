
module.exports = {
	
	socket: null,
	
	io: null,
	
	homeDir: "",
	
	parse: function (iniFile, encoding) {
		
		if (!encoding) {
			
			encoding = 'utf-8';
			
		}
		
		var config = ini.parse(fs.readFileSync(iniFile, encoding));
		
		return config;
		
	},
	
	save: function (iniFile, config, section) {
		
		fs.writeFileSync(iniFile, ini.stringify(config, {section: section}))
		
	},
	
	encryptData: false,
	isSecure: true,
	emitTimeout: 50,
	defaultPort: 8195,
	securePort: 8195,
	upc_template: {U: {M: false, L: {A: []}, S: false, X: false}},
	
	server: {
		upc_timeout: 50,
		heartBeatFrequency: 10000,
		maxConcurrentStreams: 1000,
		serverVersion: "V.A.I.D.A Socket Server 1.0.0 (build 100)",
		upcVersion: "1.2.0",
		affinityAddress: "",
		affinityDuration: 0,
	},
	
	cert: {
		key: "/security/cert.key",
		cert: "/security/cert.pem"
	},
	
	routes: [
		{
			id: "vaida",
			url: "/assets/js/vaida.js",
			path: "/public/assets/js/vaida.js",
			isDynamic: false,
		},
		{
			id: "vaida",
			url: "/assets/js/Orbiter_2.1.2.19_Release.js",
			path: "/public/assets/js/Orbiter_2.1.2.19_Release.js",
			isDynamic: false,
		},
		{
			id: "socketio",
			url: "/assets/js/socket.io.js",
			path: "/public/assets/js/socket.io.js",
			isDynamic: false,
		},
		{
			id: "socket.io",
			url: "/socket.io",
			path: "/public/assets/js/bank_array.js",
			isDynamic: false,
		},
		{
			id: "peerjs",
			url: "/assets/js/peerjs.min.js",
			path: "/public/assets/js/peerjs.min.js",
			isDynamic: false,
		},
		{
			id: "assets",
			url: "/assets/",
			path: "/public/assets/",
			isDynamic: false,
			isStatic: true,
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
			path: "/public/index.html",
			isDynamic: false,
		},
		{
			id: "orbiter",
			url: "/orbiter",
			path: "/public/orbiter.html",
			isDynamic: false,
		},
		{
			id: "auth",
			url: "/auth",
			path: `/room/`,
			isDynamic: false,
			redirect: true
		},
	
	],
	
	db: {
		username: "root",
		password: "",
		host: "localhost"
	},
	
	composeUPC: function (message_id, message_name, arguments) {
		
		//console.log("COMPOSE:", message_name, arguments);
		
		if (this.isSecure) {
			
			if (this.encryptData) {
				
				//
				
			}
			
		}
		
		var upc_message = JSON.parse(JSON.stringify(this.upc_template));
		upc_message.U.M = message_id;
		upc_message.U.L.A = arguments;
		return upc_message;
		
	},
	
};
