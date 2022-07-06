#!/usr/bin/env node
'use strict';

const express = require('express');

const app = express();

var fs = require('fs');

const config = require('./modules/config');

var serverObject;

if (config.isSecure) {

    const options = {
        key:  fs.readFileSync(config.cert.key),
        cert: fs.readFileSync(config.cert.cert),
        requestCert: false,
        rejectUnauthorized: true
    };

    serverObject = require('https').createServer(options, app);

} else {

    serverObject = require('http').createServer(app);

}

const io = require('socket.io')(serverObject);

const port = process.argv[2] || config.isSecure ? config.securePort : config.defaultPort;

const vaida = require('./modules/server/com').init(config);

const db = require('./modules/database-mysql').init(config);

const snippets = require('./modules/snippets');

const ajax_requests = require('./modules/ajax');

config.routes.forEach(function(page, index){

    if(page.isDynamic) {

        app.get(page.url, function (req, res) {
            res.render(page.id, {
                roomID: req.params.room,
            });
        });

    }else {

        if(page.redirect) {

            app.get(page.url, function (req, res) {
                res.redirect( page.path);
            });

        }else{

            app.get(page.url, function (req, res) {
                res.sendFile(__dirname + page.path);
            });

        }

    }

});

app.set("view engine", "ejs");

app.use(express.static("public"));

io.on('connection', function (socket) {

    socket.emit("connected", socket.id);

    var old_id = socket.id;

    var new_id = socket.handshake.query['id'];

    socket.leave(socket.old_id);//leaving default room

    socket.join(new_id);//joining to custom room(this is admin room)

    //###########################################

    console.log('CONNECTED: ' + socket.id);

    socket.on('upc', function (msg) {

        console.log('RECEIVED CLIENT UPC: ', msg);

        vaida.upc.com.routeUPCMessage(socket, msg);

    });

    //###########################################

    socket.on('join-room', (roomID, userID) => {

        console.log("JOINED ROOM", roomID, userID);

        socket.join(roomID);

        socket.to(roomID).broadcast.emit('user-connected', userID)

        socket.on('disconnect', () => {

            console.log("DISCONNED", roomID);

            socket.to(roomID).broadcast.emit('user-disconnected', userID)
        });

    })

});

serverObject.listen(port, function () {

    console.log('Listening on PORT *:' + port);

});

console.logCopy = console.log.bind(console);

console.log = function () {
    // Timestamp to prepend
    var timestamp = new Date().toJSON();

    if (arguments.length) {
        // True array copy so we can call .splice()
        var args = Array.prototype.slice.call(arguments, 0);

        // If there is a format string then... it must
        // be a string
        if (typeof arguments[0] === "string") {
            // Prepend timestamp to the (possibly format) string
            args[0] = "%o: " + arguments[0];

            // Insert the timestamp where it has to be
            args.splice(1, 0, timestamp);

            // Log the whole array
            this.logCopy.apply(this, args);
        }
        else {
            // "Normal" log
            this.logCopy(timestamp, args);
        }

    }

};
