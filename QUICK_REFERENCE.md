# Chama DAO - Quick Reference Card

## 🚀 Essential Commands

### Local Development
```bash
# Terminal 1: Start blockchain
yarn chain

# Terminal 2: Deploy contracts
yarn deploy

# Terminal 3: Start frontend
yarn start

# Visit: http://localhost:3000
```

### Deployment
```bash
# Deploy to Sepolia (Ethereum)
yarn deploy --network sepolia

# Deploy to Base Sepolia (Ethereum L2)
yarn deploy --network baseSepolia

# Verify contract
yarn verify --network sepolia
```

### Git & GitHub
```bash
# Initialize & push
git init
git add .
git commit -m "Chama DAO - ETH Safari 2025"
git remote add origin https://github.com/YOUR_USERNAME/chama-dao.git
git push -u origin main
```

### Vercel Deployment
```bash
# Install & deploy
npm i -g vercel
vercel login
cd packages/nextjs
vercel --prod
```

---

## 📁 Key Files

### Smart Contract
- `packages/hardhat/contracts/ChamaDAO.sol` - Main contract
- `packages/hardhat/deploy/01_deploy_chama_dao.ts` - Deploy script

### Frontend Pages
- `packages/nextjs/app/page.tsx` - Homepage
- `packages/nextjs/app/create/page.tsx` - Create Chama
- `packages/nextjs/app/my-chamas/page.tsx` - Dashboard
- `packages/nextjs/app/chama/[id]/page.tsx` - Chama Detail
- `packages/nextjs/app/explore/page.tsx` - Explore Chamas

### Configuration
- `packages/nextjs/scaffold.config.ts` - Network settings
- `packages/hardhat/hardhat.config.ts` - Hardhat config

### Documentation
- `CHAMA_DAO_README.md` - Main documentation
- `ETHEREUM_DEPLOYMENT_STRATEGY.md` - Deployment strategy
- `QUICK_START.md` - Setup guide
- `PROGRESS_SUMMARY.md` - Current status

---

## 🌐 Networks

### Ethereum Sepolia (Primary)
- **Network**: Sepolia
- **Chain ID**: 11155111
- **RPC**: https://eth-sepolia.g.alchemy.com/v2/[API_KEY]
- **Explorer**: https://sepolia.etherscan.io
- **Faucet**: https://sepoliafaucet.com

### Base Sepolia (Bonus)
- **Network**: Base Sepolia
- **Chain ID**: 84532
- **RPC**: https://sepolia.base.org
- **Explorer**: https://sepolia.basescan.org
- **Faucet**: https://www.coinbase.com/faucets

---

## 🎯 Testing Checklist

### Local Testing
- [ ] Create Chama works
- [ ] Join Chama works
- [ ] Contribute works
- [ ] Request loan works
- [ ] Vote on loan works
- [ ] Execute loan works
- [ ] All pages load
- [ ] Mobile responsive
- [ ] No console errors

### Testnet Testing
- [ ] Contract deployed
- [ ] Contract verified
- [ ] Frontend connects
- [ ] Wallet connects
- [ ] Transactions work
- [ ] Events emit correctly

---

## 🎥 Demo Video Outline

### 1. Introduction (30s)
- "Hi, I'm [Name]"
- "Built Chama DAO for ETH Safari"
- "Brings African savings groups to Ethereum"

### 2. Problem (30s)
- "$1B+ in informal Chamas"
- "Lack transparency, prone to fraud"
- "Need blockchain solution"

### 3. Demo (2-3min)
- Connect wallet
- Create Chama
- Join as member
- Make contribution
- Request loan
- Vote on loan
- Show treasury

### 4. Technical (30s)
- "Deployed on Ethereum Sepolia"
- "Also on Base for scalability"
- "Production-ready smart contracts"

### 5. Impact (30s)
- "Empowers millions of Africans"
- "Transparent, secure, democratic"
- "Financial inclusion through Ethereum"

### 6. Closing (15s)
- "Try it at [URL]"
- "Thank you!"

---

## 📝 Submission Form Answers

### Project Name
Chama DAO

### Tagline
Decentralized community savings groups for Africa on Ethereum

### Category
ETH Safari Evolution Challenge

### Demo URL
https://chama-dao.vercel.app

### GitHub
https://github.com/YOUR_USERNAME/chama-dao

### Video
https://youtube.com/watch?v=[VIDEO_ID]

### Contract Address (Sepolia)
0x[ADDRESS_FROM_DEPLOYMENT]

### Technologies
Solidity, Hardhat, Next.js, TypeScript, Wagmi, Viem, RainbowKit, TailwindCSS, Scaffold-ETH 2

### Team
[Your Name] - Full Stack Blockchain Developer

---

## 🏆 Pitch Points

### For Judges
1. **Ethereum-Native**: Built on Ethereum, deployed on Sepolia
2. **Real Problem**: $1B+ market in African Chamas
3. **Technical Excellence**: Production-ready smart contracts
4. **Beautiful UX**: Mobile-first, culturally relevant design
5. **Scalability**: Also deployed on Base (Ethereum L2)
6. **Complete**: Fully functional MVP, not just a prototype

### One-Liner
> "Chama DAO brings $1B+ in African community savings to Ethereum, providing transparency and security through smart contracts."

---

## ⚠️ Common Issues & Fixes

### Issue: Contract not deploying
```bash
# Clean and redeploy
yarn hardhat:clean
yarn deploy
```

### Issue: Frontend not connecting
```typescript
// Check scaffold.config.ts
targetNetworks: [chains.sepolia] // or chains.hardhat for local
```

### Issue: Wallet not connecting
- Check network in MetaMask
- Reset account if needed
- Clear browser cache

### Issue: Transaction failing
- Check gas limits
- Verify contract address
- Check function parameters

---

## 📊 Success Metrics

### Must Achieve
- ✅ Smart contract deployed on Sepolia
- ✅ Frontend live on Vercel
- ✅ All features working
- ✅ Demo video uploaded
- ✅ Submission completed

### Bonus Points
- ✅ Also deployed on Base Sepolia
- ✅ Beautiful UI with animations
- ✅ Comprehensive documentation
- ✅ Social media presence

---

## 🎯 Final Checklist

### Before Submission
- [ ] All code pushed to GitHub
- [ ] Contract deployed & verified
- [ ] Frontend deployed to Vercel
- [ ] Demo video recorded & uploaded
- [ ] Screenshots taken
- [ ] README updated with live URLs
- [ ] Submission form filled out
- [ ] Social media posts ready

### Submission Links
- GitHub: _______________
- Live Demo: _______________
- Video: _______________
- Contract (Sepolia): _______________
- Contract (Base): _______________

---

## 💡 Pro Tips

1. **Test Early**: Don't wait until last minute
2. **Keep It Simple**: Focus on core features
3. **Document Everything**: Judges read docs
4. **Show, Don't Tell**: Demo video is crucial
5. **Stay Ethereum**: Don't use non-Ethereum chains
6. **Be Confident**: You've built something amazing!

---

## 🚨 Emergency Contacts

### If Stuck
- Scaffold-ETH Discord: https://discord.gg/scaffoldeth
- Hardhat Docs: https://hardhat.org/docs
- Next.js Docs: https://nextjs.org/docs

### Faucets
- Sepolia: https://sepoliafaucet.com
- Base: https://www.coinbase.com/faucets

### Block Explorers
- Sepolia: https://sepolia.etherscan.io
- Base: https://sepolia.basescan.org

---

**You've got this! 🏆⛓️**

**Current Status**: Installation building packages (almost done!)  
**Next Step**: Test locally once installation completes  
**Time Remaining**: ~18 hours  
**Confidence**: 85%

---

**Let's win ETH Safari! 🚀**
