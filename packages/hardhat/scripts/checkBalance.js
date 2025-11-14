const { ethers } = require("hardhat");

async function main() {
  const address = "0xe1e5d5056D8B620eB51Dc63C66A6A56889d6e831";
  const balance = await ethers.provider.getBalance(address);
  console.log("Address:", address);
  console.log("Balance:", ethers.formatEther(balance), "ETH");
  console.log("Balance (wei):", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
