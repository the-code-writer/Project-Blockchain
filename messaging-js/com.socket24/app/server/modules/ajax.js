const axios = require('axios');
const qs = require('qs');

module.exports = {
    
   post: function(url, data, callbackSuccess, callbackError) {
           
        axios
          .request(
              {
                  url: url, 
                  data: qs.stringify(data), 
                  method: "post", 
                  headers: {
                      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                      }
                  
              }
           )
          .then((res) => {
            callbackSuccess(res)
          })
          .catch((error) => {
            callbackError(error)
          }
        );
          
    },
   
   get: function(url, data, callbackSuccess, callbackError) {
           
        axios
          .request(
              {
                  url: url, 
                  data: qs.stringify(data), 
                  method: "get", 
                  headers: {
                      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                      }
                  
              }
           )
          .then((res) => {
            callbackSuccess(res)
          })
          .catch((error) => {
            callbackError(error)
          }
        );
          
    },
   
}