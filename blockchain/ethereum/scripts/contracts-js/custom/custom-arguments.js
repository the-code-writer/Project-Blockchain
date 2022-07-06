require("dotenv").config();

module.exports = process.env.CUSTOM_CONTRACT_PARAMS.toString().split(process.env.CUSTOM_CONTRACT_PARAMS_SEPERATOR);
