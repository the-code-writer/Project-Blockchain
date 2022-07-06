require("dotenv").config();

var params = new Promise(function (resolve, reject) {

  const res = [
    process.env.NFT721_NAME,
    process.env.NFT721_SYMBOL,
    process.env.NFT721_URI,
    process.env.NFT721_SUPPLY,
    process.env.NFT721_TOKENS,
    process.env.NFT721_ROYALTY_PERCENTAGE,
    process.env.NFT721_LISTING_FEE,
    process.env.NFT721_COST,
    process.env.NFT721_CONTRACT_ADDRESS
  ];

  resolve(res);

});

module.exports = params;
