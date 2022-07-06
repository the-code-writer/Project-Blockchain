require("dotenv").config();
const axios = require("axios");
const web3 = require("web3");

var params = new Promise(function (resolve, reject) {

  let plots = [];
  let arrName = [];
  let arrCost = [];
  let arrPosX = [];
  let arrPosY = [];
  let arrPosZ = [];
  let arrSizeX = [];
  let arrSizeY = [];
  let arrSizeZ = [];

  axios
    .get(process.env.NFT721_WEBGL_PLOTS_JSON_URL)
    .then(function (response) {
      // handle success
      console.log(
        "RESPONSE:",
        response.status,
        response.statusText,
        response.status === 200 && response.statusText === "OK"
      );

      if (response.status === 200 && response.statusText === "OK") {

        plots = response.data;

        if (plots.length > 0) {

          for (let i = 0; i < plots.length; i++) {

            arrName.push(plots[i]["name"]);
            arrCost.push(web3.utils.toWei(plots[i]["cost"], "ether"));
            arrPosX.push(plots[i]["posX"]);
            arrPosY.push(plots[i]["posY"]);
            arrPosZ.push(plots[i]["posZ"]);
            arrSizeX.push(plots[i]["sizeX"]);
            arrSizeY.push(plots[i]["sizeY"]);
            arrSizeZ.push(plots[i]["sizeZ"]);
          }

          const res = [
            process.env.NFT721_WEBGL_NAME,
            process.env.NFT721_WEBGL_SYMBOL,
            arrName,
            arrCost,
            arrPosX,
            arrPosY,
            arrPosZ,
            arrSizeX,
            arrSizeY,
            arrSizeZ,
          ];

          resolve(res);
        }
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      reject(error);
    });
});

module.exports = params;
