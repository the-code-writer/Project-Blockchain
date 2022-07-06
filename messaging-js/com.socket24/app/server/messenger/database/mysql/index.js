#!/usr/bin/env node
'use strict';

module.exports.init = function(config){

    var mysql = require('mysql');

    //TODO Get the file config

    var connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.username,
        password: config.db.password,
    });

    return {

        exeSQL: function(sql, callBackFunctionSuccess, callBackFunctionError){

            connection.connect(function() {

                connection.query(sql, function (err, result, fields) {

                        if (err){

                            if(typeof callBackFunctionError === "function") {

                                callBackFunctionError(err);

                            }else{

                                console.error("++++++++++++++++++++++++++++++++ MYSQL ERROR ++++++++++++++++++++++++++++++");
                                console.error("> ERROR CODE: ", err.code);
                                console.error("> ERROR NUM#: ", err.errno);
                                console.error("> ERROR MSSG: ", err.sqlMessage);
                                console.error("> ERROR SQL#: ", err.sqlState);
                                console.error("++++++++++++++++++++++++++++++++ MYSQL ERROR +++++++++++++++++++++++++++++++");

                            }

                        }else{

                            if(typeof callBackFunctionSuccess === "function") {
                                callBackFunctionSuccess(result, fields);
                            }else{
                                console.warn("QUERY RESULT:", result, fields)
                            }

                        }

                    }

                );

            });

        }

    }

}