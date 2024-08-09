require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ['f04cd3450afd78b9216b61cceabe68884e554ba8131aa8e1e9703b18f785e961'],
      chainId: 80001,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
