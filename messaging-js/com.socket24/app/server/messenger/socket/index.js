'use strict';
/* api/socket/index.js */

/*
  Configure socket.io events.
*/

let bootstrap = (io, config, sql, db, snippet) => {
  // connection event
  io.on('connection', (socket) => {

    config.io = io;
  
    config.socket = socket;

    const Vaida = require('../vpc/vaida').init(config, io, socket, sql, db, snippet);

    let queries = socket.handshake.query;

    // get the public key from the ssl
    // pass it to the client to encrypt data

    let responseData = {session: socket.id, queries: queries, encryptData: false};

    if(config.isSecure){

      if(config.encryptData){

        responseData.pubKey = "";
        responseData.encryptData = true;

      }

    }

    socket.emit("connected", responseData);

    io.on('disconnect', function (socket) {
      console.log("DISCONNECTED SERVER", socket.id);
    });

    //###########################################

    socket.on('upc', function (msg) {

      console.log('RECEIVED CLIENT UPC: ', JSON.stringify(msg));

      if ("U" in msg) {

        if ("M" in msg.U) {

          let args = msg.U.L.A;

          let message_id = msg.U.M;

          // don't forget to call .trim() to remove the \n
          const fn = message_id.toString().trim();

          // function exists
          if (fn in Vaida && typeof Vaida[fn] === "function") {

            Vaida[fn].apply(this, args);

          }
          // function does not exist
          else {

            let err = {"message": "Message Function [" + fn + "] Not Found", "message_id": message_id, "args": args};

            console.log(err);

            socket.emit("onerror", err );

          }

        }

      }

    });

    //###########################################

    socket.broadcast.emit('user connected', socket.username);

    // disconnect event
    socket.on('disconnect', () => {
      socket.broadcast.emit('user disconnected', socket.username);
    });

    // user typing event
    socket.on('user typing', (isTyping) => {
      if (isTyping === true) {
        socket.broadcast.emit('user typing', {
          nickname: socket.username,
          isTyping: true
        });
      } else {
        socket.broadcast.emit('user typing', {
          nickname: socket.username,
          isTyping: false
        });
      }
    });

  });

};

module.exports = {
  bootstrap: bootstrap
};
