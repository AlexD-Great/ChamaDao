@echo off
echo ========================================
echo   ChamaDAO - GitHub Push Script
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Adding all files...
git add .

echo.
echo Step 2: Creating commit...
git commit -m "🎉 ChamaDAO - ETH Safari 2025 Hackathon Submission

Features:
- Complete smart contract (ChamaDAO.sol)
- Full frontend with Next.js 15 + TypeScript  
- 5 pages: Landing, Create, Explore, My Chamas, Detail
- Web3 integration with RainbowKit + Wagmi
- Beautiful African-themed UI (Orange/Green)
- Comprehensive documentation

Built for ETH Safari Hackathon 2025
Track: ETH Safari Evolution Challenge
Prize: $1,500 + DevCon 2025 Trip"

echo.
echo Step 3: Setting remote...
git remote remove origin 2>nul
git remote add origin https://github.com/AlexD-Great/chamaDao.git

echo.
echo Step 4: Pushing to GitHub...
git branch -M main
git push -u origin main --force

echo.
echo ========================================
echo   Push Complete!
echo ========================================
echo.
echo Visit: https://github.com/AlexD-Great/chamaDao
echo.
pause
