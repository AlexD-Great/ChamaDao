# 🚀 Vercel Deployment Guide for ChamaDAO

## Prerequisites
- ✅ GitHub repository pushed: https://github.com/AlexD-Great/ChamaDao
- ✅ Vercel account (free tier works!)

---

## Option 1: Deploy via Vercel Website (Recommended)

### Step 1: Go to Vercel
Visit: https://vercel.com

### Step 2: Sign In
- Click "Sign Up" or "Log In"
- Choose "Continue with GitHub"
- Authorize Vercel to access your GitHub

### Step 3: Import Project
1. Click "Add New..." button (top right)
2. Select "Project"
3. Find "AlexD-Great/ChamaDao" in the list
4. Click "Import"

### Step 4: Configure Project
**Important Settings:**

- **Framework Preset:** Next.js
- **Root Directory:** `packages/nextjs` ⚠️ CRITICAL!
- **Build Command:** `yarn build`
- **Output Directory:** `.next`
- **Install Command:** `yarn install`
- **Node Version:** 20.x

### Step 5: Environment Variables (Optional for now)
Skip for now - we'll add contract addresses later

### Step 6: Deploy!
1. Click "Deploy"
2. Wait 3-5 minutes
3. Get your live URL! 🎉

---

## Option 2: Deploy via Vercel CLI

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login to Vercel
```bash
vercel login
```

### Deploy
```bash
cd C:\Users\SADAM\OneDrive\Adam\OneDrive\Documents\chamaDao\packages\nextjs
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- Project name? **chamadao**
- Directory? **./packages/nextjs**
- Override settings? **N**

---

## Expected Deployment URL

Your app will be live at:
```
https://chamadao-[random].vercel.app
```

Or custom domain:
```
https://chamadao.vercel.app
```

---

## After Deployment

### 1. Test Your Live Site
Visit the URL and check:
- ✅ Landing page loads
- ✅ Navigation works
- ✅ All pages accessible
- ✅ Wallet connection button appears
- ✅ Responsive design works

### 2. Common Issues & Fixes

#### Issue: Build Fails
**Error:** "Module not found"
**Solution:** Check package.json dependencies

#### Issue: 404 on Pages
**Error:** Pages not found
**Solution:** Verify root directory is `packages/nextjs`

#### Issue: Slow Loading
**Error:** Large bundle size
**Solution:** Normal for first load, subsequent loads are cached

### 3. Update GitHub with Live Link

Once deployed, update your README.md:
```markdown
## 🌐 Live Demo

**Frontend:** https://your-app.vercel.app
**GitHub:** https://github.com/AlexD-Great/ChamaDao
```

---

## Vercel Dashboard Features

### Deployments Tab
- View all deployments
- See build logs
- Rollback if needed

### Settings Tab
- Environment variables
- Custom domains
- Build settings

### Analytics Tab
- Visitor stats
- Performance metrics
- Web vitals

---

## Auto-Deploy Setup

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main

# Vercel automatically deploys! 🚀
```

---

## Custom Domain (Optional)

### Add Custom Domain
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records
5. Wait for SSL certificate

---

## Environment Variables (For Later)

After deploying the contract, add these:

```
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_ALCHEMY_KEY=your_key
```

---

## Monitoring & Debugging

### View Build Logs
1. Go to Deployments
2. Click on latest deployment
3. View "Building" logs
4. Check for errors

### View Runtime Logs
1. Go to Deployments
2. Click "Functions"
3. View real-time logs

---

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Compression

---

## Troubleshooting

### Build Timeout
If build takes >10 minutes:
- Check for large dependencies
- Optimize package.json
- Use Vercel Pro for longer builds

### Memory Issues
If build fails with memory error:
- Reduce bundle size
- Split large components
- Use dynamic imports

---

## Next Steps After Deployment

1. ✅ Test all pages
2. ✅ Share live link
3. 🔄 Deploy smart contract
4. 🔄 Update contract address
5. 🔄 Redeploy with contract integration

---

## Quick Reference

**Vercel Dashboard:** https://vercel.com/dashboard
**Documentation:** https://vercel.com/docs
**Support:** https://vercel.com/support

---

**Ready to deploy? Follow the steps above! 🚀**
