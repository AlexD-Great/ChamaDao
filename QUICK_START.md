# Chama DAO - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies (if not already done)

```bash
yarn install
```

### Step 2: Start Local Blockchain

Open a terminal and run:
```bash
yarn chain
```

This starts a local Hardhat network. Keep this terminal open.

### Step 3: Deploy Smart Contracts

Open a **new terminal** and run:
```bash
yarn deploy
```

You should see:
```
✅ ChamaDAO deployed successfully!
📊 Total Chamas: 0
```

### Step 4: Start Frontend

Open a **third terminal** and run:
```bash
yarn start
```

Visit: `http://localhost:3000`

---

## 🎮 Testing the App

### 1. Connect Wallet
- Click "Connect Wallet" in the top right
- Select a wallet from the local Hardhat accounts
- You'll see your address and balance

### 2. Create Your First Chama
- Click "Create Chama" button
- Fill in the form:
  - **Name**: "Test Savings Group"
  - **Description**: "A test Chama for demo purposes"
  - **Contribution**: 0.01 (ETH)
  - **Frequency**: Monthly
- Click "Create Chama"
- Approve the transaction in your wallet

### 3. View Your Chama
- Go to "My Chamas"
- You should see your newly created Chama
- Click on it to view details

### 4. Make a Contribution
- On the Chama detail page
- Click "Contribute Now"
- Approve the transaction (0.01 ETH)
- See the treasury balance update

### 5. Join with Another Account
- Disconnect your current wallet
- Connect with a different Hardhat account
- Go to "Explore Chamas"
- Find your Chama and click "Join"
- Approve the transaction

### 6. Request a Loan
- As a member, click "Request Loan"
- Fill in:
  - **Amount**: 0.005 (ETH)
  - **Purpose**: "Emergency medical expenses"
  - **Repayment**: 30 days
- Submit the request

### 7. Vote on Loan
- Switch to another member account
- View the Chama detail page
- See the loan request
- Vote "For" or "Against"

### 8. Execute Loan
- After voting period (7 days in production, instant in testing)
- Click "Execute Loan"
- If approved (votes_for > votes_against), funds are sent to borrower

---

## 🔍 Debugging

### Contract Not Deployed?
```bash
# Clean and redeploy
yarn hardhat:clean
yarn deploy
```

### Frontend Not Loading?
```bash
# Clear Next.js cache
rm -rf packages/nextjs/.next
yarn start
```

### Wallet Connection Issues?
- Make sure MetaMask is on "Localhost 8545"
- Network ID should be 31337
- Reset account in MetaMask if needed

---

## 📱 Testing Mobile Responsiveness

### Using Browser DevTools
1. Open Chrome DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or similar
4. Test all pages and interactions

### Using Real Device
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Visit `http://[YOUR_IP]:3000` on your phone
3. Make sure phone is on same WiFi network

---

## 🧪 Running Tests

### Smart Contract Tests
```bash
yarn hardhat:test
```

### Frontend Tests
```bash
cd packages/nextjs
yarn test
```

---

## 🌐 Deploying to Testnet

### 1. Get Testnet ETH
- Visit [Sepolia Faucet](https://sepoliafaucet.com/)
- Enter your wallet address
- Receive test ETH

### 2. Configure Network
```typescript
// packages/nextjs/scaffold.config.ts
targetNetworks: [chains.sepolia]
```

### 3. Deploy Contract
```bash
yarn deploy --network sepolia
```

### 4. Verify Contract
```bash
yarn verify --network sepolia
```

### 5. Test on Testnet
- Connect wallet to Sepolia
- Visit your deployed frontend
- Test all features

---

## 📊 Monitoring

### View Contract Events
```bash
# In a new terminal
yarn hardhat:console --network localhost

# Then run:
const ChamaDAO = await ethers.getContract("ChamaDAO");
const events = await ChamaDAO.queryFilter("ChamaCreated");
console.log(events);
```

### Check Contract State
```bash
# Get Chama count
const count = await ChamaDAO.chamaCount();
console.log("Total Chamas:", count.toString());

# Get Chama details
const chama = await ChamaDAO.getChama(0);
console.log("Chama 0:", chama);
```

---

## 🎨 Customizing

### Change Theme Colors
```typescript
// packages/nextjs/tailwind.config.js
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          primary: "#your-color",
          secondary: "#your-color",
          // ...
        },
      },
    ],
  },
};
```

### Add New Pages
```typescript
// Create: packages/nextjs/app/your-page/page.tsx
"use client";

export default function YourPage() {
  return <div>Your content</div>;
}
```

---

## 🐛 Common Issues

### Issue: "Contract not found"
**Solution**: Make sure you deployed contracts with `yarn deploy`

### Issue: "Insufficient funds"
**Solution**: Use a Hardhat account with ETH or get testnet ETH

### Issue: "Transaction reverted"
**Solution**: Check contract requirements (e.g., correct contribution amount)

### Issue: "Wallet not connecting"
**Solution**: 
- Clear browser cache
- Reset MetaMask account
- Check network is Localhost 8545

---

## 📚 Next Steps

1. **Read the Documentation**: Check `CHAMA_DAO_README.md`
2. **Explore the Code**: Smart contract in `packages/hardhat/contracts/`
3. **Customize the UI**: Frontend in `packages/nextjs/app/`
4. **Deploy to Mainnet**: Follow deployment guide
5. **Share Your Chama**: Invite friends to join!

---

## 🆘 Need Help?

- **Documentation**: See `CHAMA_DAO_README.md`
- **Scaffold-ETH Docs**: https://docs.scaffoldeth.io
- **GitHub Issues**: [Your Repo]/issues
- **Discord**: Join Scaffold-ETH Discord

---

## 🎉 You're Ready!

You now have a fully functional Chama DAO running locally. 

**Next**: Create some test Chamas, invite friends, and see the power of decentralized community savings!

---

**Happy Building! 🚀**
