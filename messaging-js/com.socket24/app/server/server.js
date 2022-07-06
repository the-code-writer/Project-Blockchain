#!/usr/bin/env node
'use strict';

const express = require('express');

const EXPS = express;

const APPX = express();

const FLSX = require('fs');

const MSGX = require('./messenger').init(__dirname);

const CNFX = MSGX.config;

let serverObject;

if (CNFX.isSecure) {

    const options = {
        key:  FLSX.readFileSync(CNFX.homeDir+CNFX.cert.key),
        cert: FLSX.readFileSync(CNFX.homeDir+CNFX.cert.cert),
        requestCert: false,
        rejectUnauthorized: true
    };

    serverObject = require('https').createServer(options, APPX);

} else {

    serverObject = require('http').createServer(APPX);

}

const SIOX = require('socket.io')(serverObject);

const PRTX = process.argv[2] || CNFX.isSecure ? CNFX.securePort : CNFX.defaultPort;

const DBSX = MSGX.database_mysql;

const SNPX = MSGX.snippets_utils;

const AJAX = MSGX.snippets_ajax;

const SQLX = MSGX.database_sqls;

// Router middleware
MSGX.router.bootstrap(APPX, EXPS, CNFX);

// Socket middleware
MSGX.socket.bootstrap(SIOX, CNFX, SQLX, DBSX, SNPX);

serverObject.listen(PRTX, function () {

    console.log(
        CNFX.server.serverVersion,
        ', UPC Version: '+CNFX.server.upcVersion,
        ', Now running on: '+(CNFX.isSecure?"https":"http")+"://"+"localhost"+":"+PRTX);

});