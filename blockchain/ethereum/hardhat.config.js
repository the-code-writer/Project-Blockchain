require("dotenv").config();

// console.log(process.env);

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const payload = {
  defaultNetwork: process.env.NETWORK,
  networks: {
    localhost: {
      url: process.env.URL_LOCAL_HOST_URL + ":" + process.env.URL_LOCAL_PORT,
    },
    ropsten: {
      url: process.env.URL_ETH_ROPSTEN + process.env.INFURA_API_KEY || "",
      chainId: 3,
      accounts:
          process.env.DEPLOYMENT_ACCOUNT_KEY !== undefined
              ? [process.env.DEPLOYMENT_ACCOUNT_KEY]
              : [],
    },
    rinkeby: {
      url: process.env.URL_ETH_RINKEBY + process.env.INFURA_API_KEY || "",
      chainId: 4,
      accounts:
          process.env.DEPLOYMENT_ACCOUNT_KEY !== undefined
              ? [process.env.DEPLOYMENT_ACCOUNT_KEY]
              : [],
    },
    kovan: {
      url: process.env.URL_ETH_KOVAN + process.env.INFURA_API_KEY || "",
      chainId: 42,
      accounts:
          process.env.DEPLOYMENT_ACCOUNT_KEY !== undefined
              ? [process.env.DEPLOYMENT_ACCOUNT_KEY]
              : [],
    },
    mainnet: {
      url: process.env.URL_ETH_MAINNET + process.env.INFURA_API_KEY || "",
      chainId: 1,
      accounts:
          process.env.DEPLOYMENT_ACCOUNT_KEY !== undefined
              ? [process.env.DEPLOYMENT_ACCOUNT_KEY]
              : [],
    },
    bsc_testnet: {
      url: process.env.URL_BSC_TESTNET,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: process.env.MNEMONIC },
    },
    bsc_mainnet: {
      url: process.env.URL_BSC_MAINNET,
      chainId: 56,
      gasPrice: 20000000000,
      accounts: { mnemonic: process.env.MNEMONIC },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: process.env.REPORT_GAS_CURRENCY,
  },
  etherscan: {
    apiKey:
        process.env.BLOCKCHAIN === "ETH"
            ? process.env.ETHERSCAN_API_KEY
            : process.env.BLOCKCHAIN === "BSC"
              ? process.env.BSCSCAN_API_KEY
              : process.env.POLYGON_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: process.env.SOLC_VERSION_5,
        settings: {},
      },
      {
        version: process.env.SOLC_VERSION_6,
        settings: {},
      },
      {
        version: process.env.SOLC_VERSION_7,
        settings: {},
      },
      {
        version: process.env.SOLC_VERSION_8,
        settings: {},
      },
      {
        version: process.env.SOLC_VERSION,
        settings: {},
      },
    ],
    overrides: {
      "./src/contracts/BEP20SmartContract.sol": {
        version: process.env.SOLC_VERSION,
        settings: { }
      },
      "./src/contracts/ERC20SmartContract.sol": {
        version: process.env.SOLC_VERSION,
        settings: { }
      },
      "./src/contracts/ERC721SmartContract.sol": {
        version: process.env.SOLC_VERSION,
        settings: { }
      },
      "./src/contracts/ERC1155SmartContract.sol": {
        version: process.env.SOLC_VERSION,
        settings: { }
      },
    },
    optimizer: {
      enabled: process.env.OPTIMIZER_ENABLED === 1,
      runs: process.env.OPTIMIZER_RUNS,
    },
  },
  paths: {
    sources: process.env.CONTRACT_DIR_SOURCES+"/"+process.env.CONTRACT_NAME+"/",
    tests: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT+'/'+process.env.CONTRACT_NAME+"/"+process.env.CONTRACT_DIR_TESTS,
    cache: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT+'/'+process.env.CONTRACT_NAME+"/"+process.env.CONTRACT_DIR_CACHE,
    artifacts: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT+'/'+process.env.CONTRACT_NAME+"/"+process.env.CONTRACT_DIR_ARTIFACTS,
  },
  mocha: {
    timeout: process.env.MOCHA_TIMEOUT,
  },
};

module.exports = payload;

//console.log("HARDHAT PAYLOAD: ", JSON.stringify(payload));
