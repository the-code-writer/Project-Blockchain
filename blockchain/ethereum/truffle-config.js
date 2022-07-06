

/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 *
 *
 *
 * TESTNET BSC
 *
 * https://data-seed-prebsc-1-s1.binance.org:8545/
 https://data-seed-prebsc-2-s1.binance.org:8545/
 https://data-seed-prebsc-1-s2.binance.org:8545/
 https://data-seed-prebsc-2-s2.binance.org:8545/
 https://data-seed-prebsc-1-s3.binance.org:8545/
 https://data-seed-prebsc-2-s3.binance.org:8545/
 */

require("dotenv").config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */

    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
        bscscan: process.env.BSCSCANAPIKEY
    },

    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        development: {
            host: process.env.URL_LOCAL_HOST,     // Localhost (default: none)
            port: process.env.URL_LOCAL_PORT,            // Standard Ethereum port (default: none)
            network_id: process.env.URL_LOCAL_NETWORK_ID,       // Any network (default: none)
        },
        bsc_testnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.URL_BSC_TESTNET),
            network_id: 97,
            confirmations: 3,
            timeoutBlocks: 200,
            skipDryRun: true,
            production: true    // Treats this network as if it was a public net. (default: false)
        },
        bsc_mainnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.URL_BSC_MAINNET),
            network_id: 56,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true,
            production: true    // Treats this network as if it was a public net. (default: false)
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(process.env.DEPLOYMENT_ACCOUNT_KEY, process.env.URL_ETH_ROPSTEN + process.env.INFURA_API_KEY);
            },
            network_id: 3
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(process.env.DEPLOYMENT_ACCOUNT_KEY, process.env.URL_ETH_RINKEBY + process.env.INFURA_API_KEY);
            },
            network_id: 4
        },
        kovan: {
            provider: function () {
                return new HDWalletProvider(process.env.DEPLOYMENT_ACCOUNT_KEY, process.env.URL_ETH_KOVAN + process.env.INFURA_API_KEY);
            },
            network_id: 42
        },
        mainnet: {
            provider: function () {
                return new HDWalletProvider(process.env.DEPLOYMENT_ACCOUNT_KEY, process.env.URL_ETH_MAINNET + process.env.INFURA_API_KEY);
            },
            network_id: 1
        }
        // Another network with more advanced options...
        // advanced: {
        // port: 8777,             // Custom port
        // network_id: 1342,       // Custom network
        // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
        // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
        // from: <address>,        // Account to send txs from (default: accounts[0])
        // websockets: true        // Enable EventEmitter interface for web3 (default: false)
        // },
        // Useful for deploying to a public network.
        // NB: It's important to wrap the provider as a function.
        // ropsten: {
        // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
        // network_id: 3,       // Ropsten's id
        // gas: 5500000,        // Ropsten has a lower block limit than mainnet
        // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        // },
        // Useful for private networks
        // private: {
        // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
        // network_id: 2111,   // This network is yours, in the cloud.
        // production: true    // Treats this network as if it was a public net. (default: false)
        // }
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        timeout: process.env.MOCHA_TIMEOUT
    },

    contracts_directory: process.env.CONTRACT_DIR_SOURCES+'/'+process.env.CONTRACT_NAME+"/",
    contracts_build_directory: process.env.CONTRACT_DIR_DEPLOYMENTS_TRUFFLE+'/'+process.env.CONTRACT_NAME+"/",

    // Configure your compilers
    compilers: {
        solc: {
            version: process.env.SOLC_VERSION,      // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,                        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {                             // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: process.env.OPTIMIZER_ENABLED === 1,
                    runs: process.env.OPTIMIZER_RUNS,
                },
                //evmVersion: "byzantium"
            }
        },
    }

};
