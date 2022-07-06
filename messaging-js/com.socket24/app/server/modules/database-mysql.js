#!/usr/bin/env node
'use strict';

module.exports.init = function(config){
    
    var mysql = require('mysql');

    //TODO Get the file config
    
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "UfTqmv3XWHyf"
    });
    
    return {
    
        exeSQL: function(sql, callBackFunctionSuccess, callBackFunctionError){
            
            connection.connect(function() {
        
                    connection.query(sql, function (err, result, fields) {
                        
                            if (err){
                                
                                callBackFunctionError(err);
                                
                            }else{
                                
                                callBackFunctionSuccess(result, fields);
                                
                            }
            
                        }
                        
                    );
        
            });
        
        }
    
    }

}