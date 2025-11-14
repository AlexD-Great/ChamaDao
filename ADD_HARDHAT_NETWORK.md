# Add Hardhat Network to MetaMask

## Quick Setup

### Option 1: Manual Setup (Recommended)

1. **Open MetaMask**
2. **Click network dropdown** (top left, shows "Wrong network" in red)
3. **Click "Add Network"**
4. **Click "Add a network manually"**
5. **Enter these details:**

```
Network Name: Hardhat Local
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency Symbol: ETH
```

6. **Click "Save"**
7. **Switch to "Hardhat Local" network**

### Option 2: Import Hardhat Account

Hardhat provides test accounts with 10,000 ETH each!

1. **Copy a private key from the terminal where `yarn chain` is running**
   - Look for "Account #0" or any account
   - Copy the private key (starts with 0x...)

2. **Import to MetaMask:**
   - Click MetaMask icon
   - Click account icon (top right)
   - Click "Import Account"
   - Paste private key
   - Click "Import"

### Default Hardhat Accounts

Here are the first 3 accounts (each has 10,000 ETH):

**Account #0:**
- Address: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`
- Private Key: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

**Account #1:**
- Address: `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`
- Private Key: `0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d`

**Account #2:**
- Address: `0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC`
- Private Key: `0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a`

## Troubleshooting

### "Wrong network" still showing?
- Make sure you selected "Hardhat Local" in MetaMask
- Refresh the page (Ctrl+R or Cmd+R)

### Can't connect wallet?
- Make sure `yarn chain` is running
- Check that RPC URL is `http://127.0.0.1:8545`
- Try restarting MetaMask

### No test ETH?
- Import one of the Hardhat accounts above
- Each account has 10,000 ETH for testing

## After Setup

1. ✅ Network should show "Hardhat Local" or "Localhost"
2. ✅ Balance should show ~10,000 ETH
3. ✅ Click "Go to Homepage" button
4. ✅ Homepage should load with all features!

---

**Once connected, you can:**
- Create Chamas
- Join Chamas
- Make contributions
- Request loans
- Vote on loans
- Test all features!
