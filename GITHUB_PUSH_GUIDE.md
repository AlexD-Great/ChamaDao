# 📦 Push to GitHub & Deploy to Vercel

## Step 1: Initialize Git (if not already done)

```bash
cd c:\Users\SADAM\OneDrive\Adam\OneDrive\Documents\scaffold-eth-2
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Commit Changes

```bash
git commit -m "Initial commit: Chama DAO - ETH Safari 2025"
```

## Step 4: Add Remote Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/chamadao.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

If you get an authentication error, you'll need to:
1. Generate a Personal Access Token on GitHub
2. Use it as your password when pushing

---

## 🚀 Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `chamadao`
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `packages/nextjs`
   - **Build Command**: `yarn build`
   - **Output Directory**: `.next`
   - **Install Command**: `yarn install`
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd packages/nextjs
vercel --prod
```

---

## ⚙️ Environment Variables for Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_id
```

---

## ✅ Verification

After deployment:
1. Visit your Vercel URL
2. Connect wallet
3. Test creating a Chama
4. Verify all features work

---

## 🐛 Troubleshooting

### Build fails on Vercel?
- Check that root directory is set to `packages/nextjs`
- Verify Node version is 20.x or higher
- Check build logs for specific errors

### Can't push to GitHub?
- Make sure you have write access to the repository
- Use Personal Access Token for authentication
- Check that remote URL is correct: `git remote -v`

### Frontend doesn't load?
- Check that contracts are deployed
- Verify network configuration in `scaffold.config.ts`
- Check browser console for errors

---

**Ready to deploy! 🚀**
