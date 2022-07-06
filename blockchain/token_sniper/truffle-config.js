module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      skipDryRun: true // Match any network id
    },
    bsc: {
      provider: () => new HDWalletProvider("worry angle trophy artwork level brief record pottery hill verify tired kiss", "https://bsc-dataseed1.binance.org/"),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      production: true    // Treats this network as if it was a public net. (default: false)
    },
  },

  compilers: {
    solc: {
      version: '0.8.9',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};