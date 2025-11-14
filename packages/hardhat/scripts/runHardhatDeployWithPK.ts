// This script runs hardhat deploy with a private key
// It's used by the deploy command in package.json

import { execSync } from "child_process";

const deployerPrivateKey = process.env.__RUNTIME_DEPLOYER_PRIVATE_KEY || 
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// Set the private key environment variable and run hardhat deploy
process.env.__RUNTIME_DEPLOYER_PRIVATE_KEY = deployerPrivateKey;

try {
  execSync("hardhat deploy", { stdio: "inherit", cwd: __dirname + "/.." });
} catch (error) {
  console.error("Deployment failed:", error);
  process.exit(1);
}
