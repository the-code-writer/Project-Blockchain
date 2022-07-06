require("dotenv").config();

var params = new Promise(function (resolve, reject) {

  const res = [
    process.env.ERC20_TOKEN_NAME,
    process.env.ERC20_TOKEN_SYMBOL,
    process.env.ERC20_TOKEN_DECIMALS,
    process.env.ERC20_TOKEN_CAP_SUPPLY,
    process.env.ERC20_TOKEN_INI_SUPPLY,
    process.env.ERC20_TOKEN_CONTRACT_ADDRESS
  ];

  resolve(res);

});

module.exports = params;
