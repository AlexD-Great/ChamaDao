# Chama DAO - Deployment Checklist

## 📋 Pre-Deployment Checklist

### Phase 1: Local Testing ✅
- [x] Smart contract created (ChamaDAO.sol)
- [x] Frontend pages built
- [x] Documentation written
- [ ] Dependencies installed (`yarn install` - in progress)
- [ ] Local blockchain tested (`yarn chain`)
- [ ] Contracts deployed locally (`yarn deploy`)
- [ ] Frontend tested locally (`yarn start`)
- [ ] All features working (create, join, contribute, loan)
- [ ] Mobile responsiveness verified
- [ ] No console errors

### Phase 2: GitHub Repository 🔄
- [ ] Create new GitHub repository
- [ ] Initialize git in project
- [ ] Add .gitignore
- [ ] Commit all code
- [ ] Push to GitHub
- [ ] Add README.md to root
- [ ] Set repository to public

### Phase 3: Testnet Deployment 🌐
- [ ] Choose network (Sepolia/Polygon/Base)
- [ ] Get testnet tokens
- [ ] Configure network in scaffold.config.ts
- [ ] Deploy smart contract to testnet
- [ ] Verify contract on block explorer
- [ ] Test contract on testnet

### Phase 4: Vercel Deployment 🚀
- [ ] Connect Vercel to GitHub
- [ ] Configure build settings
- [ ] Add environment variables
- [ ] Deploy to Vercel
- [ ] Test live deployment
- [ ] Configure custom domain (optional)

### Phase 5: Final Polish ✨
- [ ] UI improvements
- [ ] Additional features
- [ ] Demo video recording
- [ ] Hackathon submission

---

## 🔧 Detailed Steps

### Step 1: Complete Local Testing

```bash
# Terminal 1: Start local blockchain
yarn chain

# Terminal 2: Deploy contracts
yarn deploy

# Terminal 3: Start frontend
yarn start

# Visit http://localhost:3000
# Test all features:
# - Create Chama
# - Join Chama
# - Make contribution
# - Request loan
# - Vote on loan
```

### Step 2: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Chama DAO for ETH Safari Hackathon 2025"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/chama-dao.git

# Push to GitHub
git push -u origin main
```

### Step 3: Choose Deployment Network

#### Option A: Sepolia (Ethereum Testnet)
**Pros**: Standard for ETH hackathons, judges familiar  
**Cons**: Higher gas fees, slower

```typescript
// packages/nextjs/scaffold.config.ts
import * as chains from "viem/chains";

targetNetworks: [chains.sepolia]
```

**Get Sepolia ETH**: https://sepoliafaucet.com/

#### Option B: Polygon Mumbai (Recommended for Africa!)
**Pros**: Cheaper, faster, popular in Africa  
**Cons**: Judges might be less familiar

```typescript
// packages/nextjs/scaffold.config.ts
import * as chains from "viem/chains";

targetNetworks: [chains.polygonMumbai]
```

**Get Mumbai MATIC**: https://faucet.polygon.technology/

#### Option C: Base Sepolia (Coinbase L2)
**Pros**: Fast, cheap, growing in Africa  
**Cons**: Newer network

```typescript
// packages/nextjs/scaffold.config.ts
import * as chains from "viem/chains";

targetNetworks: [chains.baseSepolia]
```

**Get Base Sepolia ETH**: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet

### Step 4: Deploy Smart Contract

```bash
# Deploy to chosen network
yarn deploy --network sepolia
# OR
yarn deploy --network polygonMumbai
# OR
yarn deploy --network baseSepolia

# Note the contract address!
# Example: ChamaDAO deployed to: 0x1234...5678
```

### Step 5: Verify Contract

```bash
# Verify on Etherscan/Polygonscan
yarn verify --network sepolia
# OR
yarn verify --network polygonMumbai
```

### Step 6: Deploy to Vercel

#### Via Vercel CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd packages/nextjs
vercel --prod
```

#### Via Vercel Dashboard:
1. Go to https://vercel.com
2. Click "New Project"
3. Import from GitHub
4. Select your repository
5. Configure:
   - **Framework**: Next.js
   - **Root Directory**: `packages/nextjs`
   - **Build Command**: `yarn build`
   - **Output Directory**: `.next`
6. Add Environment Variables:
   - `NEXT_PUBLIC_ALCHEMY_API_KEY` (optional)
   - `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` (optional)
7. Click "Deploy"

### Step 7: Test Live Deployment

1. Visit your Vercel URL
2. Connect wallet (make sure on correct network)
3. Test all features:
   - Create Chama
   - Join Chama
   - Make contribution
   - Request loan
   - Vote on loan

---

## 🌍 Network Recommendation for Africa

### Best Choice: **Polygon Mumbai** (testnet) → **Polygon Mainnet** (production)

**Why Polygon for African Users:**

1. **Low Fees**: $0.001 per transaction vs $5-50 on Ethereum
2. **Fast**: 2-second block time vs 12 seconds
3. **Mobile-Friendly**: Works great on slow connections
4. **M-Pesa Integration**: Easier to integrate fiat on/off ramps
5. **Popular in Africa**: Many African dApps use Polygon
6. **Still Ethereum**: Same smart contract, same tools

### Configuration for Polygon:

```typescript
// packages/nextjs/scaffold.config.ts
import * as chains from "viem/chains";

const scaffoldConfig = {
  targetNetworks: [chains.polygonMumbai], // Testnet
  // OR for mainnet:
  // targetNetworks: [chains.polygon],
  
  pollingInterval: 30000,
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",
  onlyLocalBurnerWallet: false, // Allow real wallets
} as const satisfies ScaffoldConfig;
```

---

## 🎯 Hackathon Submission URLs

After deployment, you'll have:

1. **GitHub Repository**: `https://github.com/YOUR_USERNAME/chama-dao`
2. **Live Demo**: `https://chama-dao.vercel.app`
3. **Contract Address**: `0x1234...5678` (on chosen network)
4. **Block Explorer**: Link to verified contract

---

## ⚠️ Important Notes

### Before Pushing to GitHub:
- [ ] Remove any private keys from code
- [ ] Check `.gitignore` includes:
  - `node_modules/`
  - `.env.local`
  - `.next/`
  - `cache/`
  - `artifacts/`

### Environment Variables:
Never commit these to GitHub:
- Private keys
- API keys
- Wallet seeds

Store them in:
- `.env.local` (local development)
- Vercel dashboard (production)

---

## 🚀 Quick Deploy Commands

```bash
# 1. Test locally
yarn chain && yarn deploy && yarn start

# 2. Push to GitHub
git add . && git commit -m "Ready for deployment" && git push

# 3. Deploy contract to testnet
yarn deploy --network polygonMumbai

# 4. Deploy frontend to Vercel
vercel --prod

# 5. Test live site
# Visit your Vercel URL and test!
```

---

## 📊 Post-Deployment Checklist

- [ ] Live site loads correctly
- [ ] Wallet connects on correct network
- [ ] Can create Chama
- [ ] Can join Chama
- [ ] Can make contribution
- [ ] Can request loan
- [ ] Can vote on loan
- [ ] Mobile responsive works
- [ ] No console errors
- [ ] Contract verified on explorer

---

## 🎥 Demo Video Checklist

Record after successful deployment:
- [ ] Show live site URL
- [ ] Connect wallet
- [ ] Create Chama
- [ ] Join as second member
- [ ] Make contributions
- [ ] Request loan
- [ ] Vote on loan
- [ ] Show contract on block explorer
- [ ] Explain impact for Africa

---

**Ready to deploy! Let's make Chama DAO live! 🚀**
