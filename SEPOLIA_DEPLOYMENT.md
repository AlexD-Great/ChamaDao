# 🌐 Sepolia Testnet Deployment Guide

## Prerequisites

### 1. Get Sepolia ETH (Required!)

Visit any of these faucets:
- **Alchemy Faucet:** https://sepoliafaucet.com/
- **Infura Faucet:** https://www.infura.io/faucet/sepolia
- **QuickNode Faucet:** https://faucet.quicknode.com/ethereum/sepolia

You'll need:
- Your wallet address
- ~0.5 Sepolia ETH for deployment

### 2. Get Your Private Key

**⚠️ NEVER share your mainnet private key!**

For testnet deployment, you can use:
- A new MetaMask account (recommended)
- Export private key from MetaMask:
  1. Open MetaMask
  2. Click account menu
  3. Account details
  4. Export Private Key
  5. Enter password
  6. Copy key (starts with 0x)

---

## Deployment Steps

### Option 1: Using Environment Variables (Recommended)

1. **Create .env file**
```bash
cd C:\Users\SADAM\OneDrive\Adam\OneDrive\Documents\chamaDao\packages\hardhat
```

Create `.env` file with:
```
DEPLOYER_PRIVATE_KEY=your_private_key_here
ALCHEMY_API_KEY=oKxs-03sij-U_N0iOlrSsZFr29-IqbuF
ETHERSCAN_API_KEY=DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW
```

2. **Deploy**
```bash
npx hardhat deploy --network sepolia
```

### Option 2: Direct Deployment (Quick)

```bash
cd packages\hardhat
npx hardhat deploy --network sepolia
```

---

## What Happens During Deployment

1. **Compilation** (~30 seconds)
   - Compiles ChamaDAO.sol
   - Generates ABIs
   - Creates typechain types

2. **Deployment** (~1-2 minutes)
   - Deploys to Sepolia
   - Waits for confirmations
   - Verifies contract (optional)

3. **Output**
   - Contract address
   - Transaction hash
   - Gas used

---

## Expected Output

```
Deploying "ChamaDAO"...
Deployed at: 0x...
Transaction hash: 0x...
Gas used: ~2,000,000
```

**Save the contract address!** You'll need it for:
- Frontend integration
- Vercel environment variables
- Hackathon submission

---

## Verify Contract on Etherscan

After deployment:

```bash
npx hardhat verify --network sepolia YOUR_CONTRACT_ADDRESS
```

This makes your contract readable on Etherscan!

---

## Update Frontend

After deployment, update these files:

### 1. Create deployed contracts file

`packages/nextjs/contracts/deployedContracts.ts`:
```typescript
export const deployedContracts = {
  11155111: { // Sepolia chain ID
    ChamaDAO: {
      address: "0xYOUR_CONTRACT_ADDRESS",
      abi: [...] // Copy from artifacts
    }
  }
};
```

### 2. Update Vercel Environment Variables

Go to Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYOUR_CONTRACT_ADDRESS
NEXT_PUBLIC_CHAIN_ID=11155111
```

### 3. Redeploy Frontend

```bash
git add .
git commit -m "Add Sepolia contract address"
git push origin main
```

Vercel auto-deploys! 🚀

---

## Troubleshooting

### Error: Insufficient funds
**Solution:** Get more Sepolia ETH from faucet

### Error: Invalid nonce
**Solution:** Reset MetaMask account or wait a few minutes

### Error: Network timeout
**Solution:** Try again or use different RPC

### Error: Contract verification failed
**Solution:** Verify manually on Etherscan

---

## Network Information

- **Network Name:** Sepolia
- **Chain ID:** 11155111
- **RPC URL:** https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
- **Block Explorer:** https://sepolia.etherscan.io/
- **Currency:** SepoliaETH

---

## After Deployment Checklist

- [ ] Contract deployed successfully
- [ ] Contract address saved
- [ ] Contract verified on Etherscan
- [ ] Frontend updated with address
- [ ] Vercel redeployed
- [ ] Tested on live site
- [ ] Added to hackathon submission

---

## Quick Commands Reference

```bash
# Deploy to Sepolia
npx hardhat deploy --network sepolia

# Verify contract
npx hardhat verify --network sepolia CONTRACT_ADDRESS

# Check deployment
npx hardhat run scripts/checkDeployment.ts --network sepolia
```

---

**Ready to deploy to Sepolia?** 

1. Get Sepolia ETH from faucet
2. Run deployment command
3. Save contract address
4. Update frontend
5. Submit to hackathon!

🎯 **You're almost done!**
