require("dotenv").config();

module.exports = [
  process.env.BEP20_TOKEN_NAME,
  process.env.BEP20_TOKEN_SYMBOL,
  process.env.BEP20_TOKEN_DECIMALS,
  process.env.BEP20_TOKEN_CAP_SUPPLY,
  process.env.BEP20_TOKEN_INI_SUPPLY,
  process.env.BEP20_TOKEN_CONTRACT_ADDRESS
  ];
