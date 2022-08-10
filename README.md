# Binance Crypto Wallet + NFT

## Setting Up :

**Step 1:** Download the repository using the command:

```
 git clone -b wallet_nft "https://github.com/Arjun-Pradeep/safeCryptoWallet.git"
```

**Step 2:** Change the current working directory to "safeCryptoWallet" :

```
 cd safeCryptoWallet
```

**Step 3:** Install the dependecies :

```
 npm i --save
```

**Step 4:** Load environment variables from **.env** file

```
PRIVATE_KEY=""
PROVIDER=""
EXPLORER_API_KEY=""
```

**Step 5:** Compile the smart contracts :

```
 npx hardhat compile
```

**Step 5:** Deploy the smart contracts :

```
 npx hardhat run scripts/scripts --network testnet
```

**Step 6:** Verify the smart contracts :

```
 npx hardhat verify {CONTRACT_ADDRESS} --contract {CONTRACT_FILE_PATH:CONTRACT_NAME} --network testnet
```

