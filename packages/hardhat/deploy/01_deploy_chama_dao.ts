import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys the ChamaDAO contract
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployChamaDAO: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ChamaDAO", {
    from: deployer,
    // No constructor arguments needed
    args: [],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract
  const chamaDAO = await hre.ethers.getContract<Contract>("ChamaDAO", deployer);
  console.log("✅ ChamaDAO deployed successfully!");
  console.log("📊 Total Chamas:", await chamaDAO.chamaCount());
};

export default deployChamaDAO;

deployChamaDAO.tags = ["ChamaDAO"];
