# 🤝 ChamaDAO

<div align="center">

![ChamaDAO](https://img.shields.io/badge/ETH%20Safari-2025-brightgreen)
![Built with](https://img.shields.io/badge/Built%20with-Next.js%2015-black)
![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)

<h3><strong>Decentralized Community Savings Groups on Ethereum</strong></h3>

<p><strong>🏆 ETH Safari 2025 Hackathon Submission</strong></p>

[Live Demo](https://chama-dao-nextjs.vercel.app/) • [Video Demo](#) • [Contract](https://sepolia.etherscan.io/address/0xCD41309879BfB57c1b2b19D58b47B190C7387c54)

</div>

---

## 🌍 Overview

**ChamaDAO** brings traditional African community savings groups (Chamas) to the blockchain, providing transparency, security, and democratic governance through Ethereum smart contracts.

### 💡 The Problem

Traditional Chamas in Africa face critical challenges:
- **$1B+** locked in informal savings groups with no transparency
- High risk of fraud and mismanagement
- No verifiable records of contributions
- Limited access to traditional banking (60% unbanked)

### ✨ Our Solution

A decentralized platform where communities can:
- ✅ Create transparent savings groups
- ✅ Make verifiable contributions
- ✅ Request and vote on loans democratically
- ✅ Track all transactions on-chain
- ✅ Eliminate fraud through smart contracts

---

## ✨ Features

### Core Functionality
- **Create Chamas**: Set contribution amounts and frequencies
- **Join Groups**: Become a member with wallet connection
- **Contribute**: Make regular ETH contributions
- **Request Loans**: Submit loan requests with purpose and terms
- **Democratic Voting**: Members vote on loan approvals
- **Automated Execution**: Smart contracts handle loan disbursement
- **Repayment Tracking**: Monitor loan repayments on-chain

### Technical Features
- 🔐 **Secure Smart Contracts**: Audited Solidity code
- 🎨 **Beautiful UI**: African-inspired design
- 📱 **Mobile Responsive**: Works on all devices
- ⚡ **Fast**: Optimized for Ethereum L2s
- 🌐 **Web3 Native**: RainbowKit wallet integration

---

## 🛠 Tech Stack

- **Smart Contracts**: Solidity 0.8.20
- **Frontend**: Next.js 15, React, TypeScript
- **Web3**: Wagmi, Viem, RainbowKit
- **Styling**: TailwindCSS, DaisyUI
- **Development**: Hardhat, Scaffold-ETH 2
- **Deployment**: Vercel (Frontend), Ethereum Sepolia (Contracts)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## 🚀 Quickstart

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/chamadao.git
cd chamadao
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Run Local Development

**Terminal 1** - Start local blockchain:

```bash
yarn chain
```

**Terminal 2** - Deploy contracts:

```bash
yarn deploy
```

**Terminal 3** - Start frontend:

```bash
yarn start
```

Visit **http://localhost:3000** to see the app!

### 4. Connect Wallet

1. Add Hardhat network to MetaMask:
   - Network Name: `Hardhat Local`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `31337`
   - Currency: `ETH`

2. Import a test account (has 10,000 ETH):
   - Private Key: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

---

## 🌐 Live Deployment

### Frontend
**URL:** https://chama-dao-nextjs.vercel.app/

### Smart Contract (Sepolia Testnet)
**Address:** `0xCD41309879BfB57c1b2b19D58b47B190C7387c54`  
**Explorer:** https://sepolia.etherscan.io/address/0xCD41309879BfB57c1b2b19D58b47B190C7387c54  
**Network:** Sepolia Testnet (Chain ID: 11155111)

---

## 📖 Documentation

### Smart Contract

The main contract is `ChamaDAO.sol` located in `packages/hardhat/contracts/`

**Key Functions:**
- `createChama()` - Create a new savings group
- `joinChama()` - Join an existing Chama
- `contribute()` - Make a contribution
- `requestLoan()` - Request a loan from the treasury
- `voteOnLoan()` - Vote on loan requests
- `executeLoan()` - Execute approved loans
- `repayLoan()` - Repay borrowed funds

### Frontend Pages

- `/` - Homepage with features and CTAs
- `/explore` - Browse all Chamas
- `/my-chamas` - Your Chamas dashboard
- `/create` - Create a new Chama
- `/chama/[id]` - Individual Chama details

---

## 🌐 Deployment

### Deploy to Sepolia Testnet

1. Get Sepolia ETH from [faucet](https://sepoliafaucet.com/)

2. Deploy contract:
```bash
yarn deploy --network sepolia
```

3. Update `scaffold.config.ts`:
```typescript
targetNetworks: [chains.sepolia]
```

### Deploy Frontend to Vercel

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Set root directory: `packages/nextjs`
4. Deploy!

---

## 🎯 Roadmap

- [ ] Multi-token support (USDC, DAI)
- [ ] Automated contribution reminders
- [ ] Credit scoring system
- [ ] Mobile app (React Native)
- [ ] Integration with M-Pesa
- [ ] Governance token for platform decisions

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🏆 Hackathon

Built for **ETH Safari 2025** - Empowering African communities through blockchain technology.

---

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for Africa**

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

Visit the [What's next section of our docs](https://docs.scaffoldeth.io/quick-start/environment#whats-next) to learn how to:

- Edit your smart contracts
- Edit your deployment scripts
- Customize your frontend
- Edit the app config
- Writing and running tests
- [Setting up external services and API keys](https://docs.scaffoldeth.io/deploying/deploy-smart-contracts#configuration-of-third-party-services-for-production-grade-apps)

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn all the technical details and guides of Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
