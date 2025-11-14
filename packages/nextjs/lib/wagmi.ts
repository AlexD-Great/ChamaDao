import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia, hardhat } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "ChamaDAO",
  projectId: "YOUR_PROJECT_ID", // Get from WalletConnect Cloud
  chains: [hardhat, sepolia],
  ssr: true,
});
