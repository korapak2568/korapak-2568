// truffle-config.js

require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const NETWORK = process.env.NETWORK || "development";

const networks = {
    development: {
        host: "127.0.0.1",
        port: 7545, // Ganache
        network_id: "*"
    },
    mainnet: {
        provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL),
        network_id: 1, // Ethereum Mainnet
        gas: 5000000,
        gasPrice: 10000000000 // 10 Gwei
    }
};

module.exports = {
    contracts_build_directory: './public/contracts',
    networks: {
        [NETWORK]: networks[NETWORK]
    },
    compilers: {
        solc: {
            version: "0.8.19" // Match OpenZeppelin's requirement
        }
    }
};
