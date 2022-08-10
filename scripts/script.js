const hre = require("hardhat");

async function main() {

  const USDC = await hre.ethers.getContractFactory("USDC");
  const value = hre.ethers.BigNumber.from("1000000000000000000000");
  const usdc = await USDC.deploy(value);

  await usdc.deployed();

  console.log("USDC deployed to: ", usdc.address);

  await hre.run("verify:verify", {
    address: usdc.address,
    constructorArguments: [
      value
    ],
    contract: "contracts/USDC.sol:USDC"
  }).wait;

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
