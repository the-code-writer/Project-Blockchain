'use strict';
/* api/index.js */

module.exports.init = function (homeDir) {

    const router = require('./router');
    const sockets = require('./socket');
    const snippets_utils = require('./snippets/utils');
    const snippets_ajax = require('./snippets/ajax');
    const config_data = require('./config');
    config_data.homeDir = homeDir;
    const database_sqls = require('./database/sql');
    const database_mysql = require('./database/mysql').init(config_data);
    const vaida = require('./vpc/vaida').init(config_data, config_data.io, config_data.socket, database_sqls, database_mysql, snippets_utils);
    const client_to_server = require('./vpc/c2s').init(config_data, config_data.io, config_data.socket, database_sqls, database_mysql, snippets_utils);
    const server_to_client = require('./vpc/s2c').init(config_data, config_data.io, config_data.socket, database_sqls, database_mysql, snippets_utils);
    
    const messenger_modules = {
        snippets_utils: snippets_utils,
        snippets_ajax: snippets_ajax,
        config: config_data,
        database_sqls: database_sqls,
        database_mysql: database_mysql,
        vaida: vaida,
        client_to_server: client_to_server,
        server_to_client: server_to_client,
        router: router,
        socket: sockets,
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

    return messenger_modules;

}