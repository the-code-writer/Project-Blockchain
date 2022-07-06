require("dotenv").config();

module.exports = {
    apiKey: {
      // ethereum
      mainnet: process.env.ETHERSCAN_API_KEY,
      ropsten: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      kovan: process.env.ETHERSCAN_API_KEY,
      // binance smart chain
      bsc: process.env.BSCSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      // huobi eco chain
      heco: "YOUR_HECOINFO_API_KEY",
      hecoTestnet: "YOUR_HECOINFO_API_KEY",
      // fantom mainnet
      opera: "YOUR_FTMSCAN_API_KEY",
      ftmTestnet: "YOUR_FTMSCAN_API_KEY",
      // optimism
      optimisticEthereum: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
      optimisticKovan: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
      // polygon
      polygon: process.env.POLYGON_API_KEY,
      polygonMumbai: process.env.POLYGON_API_KEY,
      // arbitrum
      arbitrumOne: "YOUR_ARBISCAN_API_KEY",
      arbitrumTestnet: "YOUR_ARBISCAN_API_KEY",
      // avalanche
      avalanche: "YOUR_SNOWTRACE_API_KEY",
      avalancheFujiTestnet: "YOUR_SNOWTRACE_API_KEY",
      // moonbeam
      moonbeam: "YOUR_MOONBEAM_MOONSCAN_API_KEY",
      moonriver: "YOUR_MOONRIVER_MOONSCAN_API_KEY",
      moonbaseAlpha: "YOUR_MOONBEAM_MOONSCAN_API_KEY",
      // harmony
      //harmony: "YOUR_HARMONY_API_KEY",
      //harmonyTest: "YOUR_HARMONY_API_KEY",
      // xdai and sokol don't need an API key, but you still need
      // to specify one; any string placeholder will work
      xdai: "api-key",
      sokol: "api-key"
      //aurora: "api-key",
      //auroraTestnet: "api-key",
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
          settings: {}
        },
        "./src/contracts/ERC20SmartContract.sol": {
          version: process.env.SOLC_VERSION,
          settings: {}
        },
        "./src/contracts/ERC721SmartContract.sol": {
          version: process.env.SOLC_VERSION,
          settings: {}
        },
        "./src/contracts/ERC1155SmartContract.sol": {
          version: process.env.SOLC_VERSION,
          settings: {}
        },
      },
      optimizer: {
        enabled: process.env.OPTIMIZER_ENABLED === 1,
        runs: process.env.OPTIMIZER_RUNS,
      },
    },
    paths: {
      sources: process.env.CONTRACT_DIR_SOURCES + "/" + process.env.CONTRACT_NAME + "/",
      tests: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT + '/' + process.env.CONTRACT_NAME + "/" + process.env.CONTRACT_DIR_TESTS,
      cache: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT + '/' + process.env.CONTRACT_NAME + "/" + process.env.CONTRACT_DIR_CACHE,
      artifacts: process.env.CONTRACT_DIR_DEPLOYMENTS_HARDHAT + '/' + process.env.CONTRACT_NAME + "/" + process.env.CONTRACT_DIR_ARTIFACTS,
    },
    mocha: {
      timeout: process.env.MOCHA_TIMEOUT,
    },
  };
