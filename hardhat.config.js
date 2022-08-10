require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity:"0.8.10",
  networks: {
    // hardhat: {
    //   forking: {
    //     url: "https://polygon-mumbai.g.alchemy.com/v2/S6Pzl4_ZKJK77R8BYHcLZhKaZXmCUKZp",
    //     blockNumber: 25845542
    //   }
    // },  
    testnet: {
      url: process.env.PROVIDER,
      chainId: 80001, // Polygon Mumbai TestNet
      accounts:[`0x${PRIVATE_KEY}`],
      gas: 1200000,
      gasPrice: "auto"
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.EXPLORER_API_KEY
    } 
  }

};
