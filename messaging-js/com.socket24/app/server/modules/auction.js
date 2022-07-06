#!/usr/bin/env node
'use strict';

module.exports.init =function(io, db, enable_errors){
    
    return {

    getPendingNotifications: function(){
    
    //GET PENDING NOTIFICATIONS TO BE DISPATCHED
            
            var sql1 = "SELECT * FROM supplyzonedemo.tbl_socket_notifications where notice_pushed = 0 order by notice_id desc limit 10";

            db.exeSQL(sql1, function (result, fields) {
                
                //console.log(":: NOTICES RESULTS ::", result);
                
                    for(var x=0; x< result.length; x++){
                        
                        var payload = {id: result[x].id, index: x, date: result[x].notice_date, channel: result[x].notice_channel_name, event: result[x].notice_event, raw: result[x], message: result[x].notice_message};
                        
                        io.emit('NEW_NOTIFICATION', payload);
                        
                    }
    
                }, function (err) {
                    
                    console.log("::ERROR::", arguments.callee.toString(), err);
                
                    if(enable_errors){
                        
                        throw err;
                        
                    }else{
                        
                        io.emit('CHANNEL_LOGGING', err);
                        
                    }
    
                }
                
            );
            
    },

    getAuctionBidRanges: function(){
    
    //GET BID RANGE
            
            var sql1 = "SELECT * FROM supplyzonedemo.tbl_reverse_auction WHERE auction_status = 0";

            db.exeSQL(sql1, function (result1, fields) {
                
                //console.log(":: RA RESULTS ::", result1);
            
                    result1.forEach(function(listItem, index){
                        
                        var sql3 = "SELECT supplyzonedemo.tbl_reverse_auction_bids.*, MAX(supplyzonedemo.tbl_reverse_auction_bids.bid_amount) as highest, MIN(supplyzonedemo.tbl_reverse_auction_bids.bid_amount) as lowest FROM supplyzonedemo.tbl_reverse_auction_bids WHERE supplyzonedemo.tbl_reverse_auction_bids.bid_ra_id = "+listItem["id"];

                        db.exeSQL(sql3, function (result3, fields) {
                            
                                for(var x=0; x< result3.length; x++){
                                    
                                    if(result3[x]["bid_ra_id"] !== null){
                                    
                                        var payload3 = {
                                            data_object: result3[x],
                                            auction_number: result3[x]["bid_ra_number"], 
                                            auction_id: result3[x]["bid_ra_id"],
                                            auction_currency: listItem["auction_currency"],
                                            bid_id: result3[x]["bid_id"], 
                                            company_name: result3[x]["bid_company_name"]
                                        };
                                        
                                        io.emit('AUCTION_BID_RANGE', payload3);
                                    
                                    }
                                    
                                }
                                
                        });
                        
                    });
    
                }, function (err) {
                
                    console.log("::ERROR::", arguments.callee.toString(), err);
                
                    if(enable_errors){
                        
                        throw err;
                        
                    }else{
                        
                        io.emit('CHANNEL_LOGGING', err);
                        
                    }
    
                }
                
            );
            
    },

    getAuctionRecentBids: function(){
    
    //GET BID RANGE
            
            var sql1 = "SELECT * FROM supplyzonedemo.tbl_reverse_auction WHERE auction_status = 0";

            db.exeSQL(sql1, function (result1, fields) {
                
                //console.error(sql1, result1.length);
                
                //console.log(":: RA RESULTS ::", result1);
                
                var count = 0;
                
                var masterPayload = {};
            
                    result1.forEach(function(listItem, index){
                        
                        var sql3 = "SELECT supplyzonedemo.tbl_reverse_auction_bids.* FROM supplyzonedemo.tbl_reverse_auction_bids WHERE supplyzonedemo.tbl_reverse_auction_bids.bid_ra_id = "+listItem["id"]+"  order by supplyzonedemo.tbl_reverse_auction_bids.bid_id desc";

                        db.exeSQL(sql3, function (result3, fields) {
                            
                            //console.error(listItem["auction_number"], result3.length);
                            
                            if(result3.length > 0){
                            
                                masterPayload[listItem["auction_number"]] = result3;
                                
                            }
                            
                            count++;
                            
                            //console.error("count==result1.length", (count==result1.length));
                            
                            if(count==result1.length){
                                
                                console.error("EMIT:masterPayload");
                                
                                io.emit('AUCTION_RECENT_BIDS', masterPayload);
                           
                                io.emit('AUCTION_TOTAL_BIDS', masterPayload);
                           
                            }
                        
                        });
                        
                    });
                 
                }, function (err) {
                
                    console.log("::ERROR::", arguments.callee.toString(), err);
                
                    if(enable_errors){
                        
                        throw err;
                        
                    }else{
                        
                        io.emit('CHANNEL_LOGGING', err);
                        
                    }
    
                }
                
            );
            
    }
    
    };

}