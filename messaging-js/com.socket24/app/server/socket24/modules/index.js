'use strict';
/* api/index.js */

module.exports.init = function (config, io, socket) {
    
    //TODO Modules depend on (config, io, socket, db, sql, utils);
    
    //init utils
    const utils = require('./classes/utils');
    
    // init sql
    const sql = require('./classes/database/sql');
    
    // init dbs
    const dbs = require('./classes/database/dbs');
    
    // at this point we now have config, io, socket, db, sql, utils required by modules
    
    
    //Load
    // 50  EventManager
    
    
    //Load
    // 100 SettingsManager,
    // 200 SecurityManager,
    // 300 DatabaseManager,
    // 400 ConnectionManager,
    // 500 ClientManager,
    // 600 UserManager,
    // 700 AccountManager,
    // 800 RoomManager
    // 900 MessageManager,
    // 1000 AttributesManager
    // 2000 SnapshotManager
    
    // 3000 AIML
    
    // 4000 VPCS
    
    // 5000 VAIDA
    
    // 6000 CLIENT_TO_SERVER
    
    // 7000 SERVER_TO_CLIENT
    
    // 8000
    
    // 9000
    
    // 9876
    
    
    const classes = require('./classes');
    const aiml = require('./aiml');
    const vaida = require('./vaida');
    const modules = {
        classes: classes,
        aiml: aiml,
        vaida: vaida,
    };

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

    return modules;

}