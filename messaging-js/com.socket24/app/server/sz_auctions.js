#!/usr/bin/env node
'use strict';

const express = require('express');

const app = express();

var fs = require('fs');

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/hyperefficient2.net/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/hyperefficient2.net/fullchain.pem"),
  requestCert: false,
  rejectUnauthorized: true
};

const serv = require('https').createServer(options, app);

const io = require('socket.io')(serv);

var port = process.env.PORT || 8197;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

const config = {
    securePort: 8194
};

const enable_errors = false;

var heartbeat = 0;

const db = require('./modules/database-mysql').init(config);

const snippets = require('./modules/snippets');

const ajax_requests = require('./modules/ajax');

const auction = require('./modules/auction').init(io, db, enable_errors);

var port = process.argv[2] || config.securePort;

io.on('connection', function(socket){
    
            console.log(":: CONNECTED ::");
            
            var old_id = socket.id;
        
            var new_id = socket.handshake.query['id'];
        
            socket.leave(socket.old_id);//leaving default room
            
            socket.join(new_id);//joining to custom room(this is admin room)
            
            io.emit('HEARTBEAT', {old_id: old_id, new_id:new_id, heartbeat: heartbeat});
            
            heartbeat++;
    
            setInterval(function () {
                
                auction.getPendingNotifications();
                
            }, 3000);
        
            setInterval(function () {
                
                auction.getAuctionBidRanges();
                
            }, 2000);
            
            setInterval(function () {
                
                auction.getAuctionRecentBids();
                
            }, 30000);
            
            listenToSocketPorts(socket);
             
        
});

serv.listen(port, function(serverObj){
    
    console.log('Listening on PORT *:' + port, serverObj);
    
});

function listenToSocketPorts(socket){
    
    console.log('LISTEN TO SOCKETS PORTS');
    
    socket.on('SAVE_USER_BID', function(msg){
        
        console.warn('AJAX 0 SAVE_USER_BID', msg);
        
        ajax_requests.post(msg.url, msg, function(result){
            
            console.warn('AJAX 1 SAVE_USER_BID', result.data);
        
            msg.result  = result.data;
            
            socket.emit('SAVED_USER_BID', msg);
        
        },
        function(error){
            
            //console.warn('AJAX ERROR', error);
        
            socket.emit('ERROR_USER_BID', {"msg":msg, "error":error});
        
        });
        
    });
    
    console.log('FINISHED LISTEN TO SOCKETS PORTS');
    
}

console.logCopy = console.log.bind(console);

console.log = function()
{
    // Timestamp to prepend
    var timestamp = new Date().toJSON();

    if (arguments.length)
    {
        // True array copy so we can call .splice()
        var args = Array.prototype.slice.call(arguments, 0);

        // If there is a format string then... it must
        // be a string
        if (typeof arguments[0] === "string")
        {
            // Prepend timestamp to the (possibly format) string
            args[0] = "%o: " + arguments[0];

            // Insert the timestamp where it has to be
            args.splice(1, 0, timestamp);

            // Log the whole array
            this.logCopy.apply(this, args);
        }
        else
        { 
            // "Normal" log
            this.logCopy(timestamp, args);
        }
        
    }
    
};

/*

for (i = 0; i < channels.length; i++) {
    
    socket.emit('subscribe', {channel: channels[i]});
    
}
            
*/