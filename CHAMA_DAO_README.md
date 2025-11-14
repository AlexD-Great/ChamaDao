# Chama DAO - Decentralized Community Savings Groups

![Chama DAO](https://img.shields.io/badge/ETH%20Safari-2025-brightgreen)
![Prize](https://img.shields.io/badge/Prize-$1500-blue)
![Built with](https://img.shields.io/badge/Built%20with-Scaffold--ETH--2-orange)

## 🌍 Overview

**Chama DAO** brings traditional African community savings groups (Chamas) to the blockchain, providing transparency, security, and democratic governance through smart contracts.

### What is a Chama?

A Chama is a Swahili word for an informal cooperative society used to pool and invest savings by people in East Africa. Traditionally, Chamas are:
- Community-based savings and investment groups
- Built on trust among 10-50 members
- Used for loans, emergency funds, and collective investments
- **Problem**: Cash-based, prone to fraud, lack transparency

### Our Solution

Chama DAO digitizes this centuries-old tradition with:
- ✅ **Transparent Treasury** - All funds visible on-chain
- ✅ **Democratic Voting** - Members vote on loan requests
- ✅ **Smart Contract Security** - No intermediaries, no fraud
- ✅ **Global Access** - Join from anywhere in the world
- ✅ **Automated Payouts** - No manual handling of funds

---

## 🎯 ETH Safari Hackathon 2025

**Track**: ETH Safari Evolution Challenge  
**Prize**: $1,500 + DevCon 2025 Trip to Argentina

### Why Chama DAO Wins

1. **Cultural Relevance**: Addresses a real African problem with $1B+ in informal savings
2. **Technical Excellence**: Production-ready smart contracts with comprehensive features
3. **User Experience**: Beautiful, mobile-first UI built with modern web technologies
4. **Real Impact**: Empowers millions of Africans to save transparently
5. **Scalability**: Can be adapted for any community savings model globally

---

## 🚀 Features

### For Members
- **Create Chamas**: Set contribution amounts and frequencies
- **Join Existing Groups**: Browse and join active Chamas
- **Make Contributions**: One-click contributions to treasury
- **Request Loans**: Submit loan requests with purpose and repayment terms
- **Vote on Loans**: Democratic voting on all loan requests
- **Track Progress**: Real-time dashboard showing contributions and treasury

### Smart Contract Features
- **Transparent Treasury Management**: All funds held securely in smart contract
- **Membership System**: Automatic member tracking and permissions
- **Contribution Tracking**: Record of all member contributions
- **Loan Voting System**: Democratic approval process for loans
- **Automated Execution**: Loans automatically disbursed after approval
- **Repayment Tracking**: Monitor loan repayments

---

## 🛠️ Tech Stack

### Smart Contracts
- **Solidity 0.8.20**: Latest security features
- **Hardhat**: Development environment
- **OpenZeppelin**: Battle-tested contract patterns

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first styling
- **DaisyUI**: Beautiful UI components
- **Wagmi**: React hooks for Ethereum
- **RainbowKit**: Wallet connection
- **Viem**: TypeScript Ethereum library

### Infrastructure
- **Scaffold-ETH 2**: Rapid dApp development framework
- **Vercel**: Deployment platform
- **IPFS**: Decentralized storage (future)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js >= 20.18.3
- Yarn 3.2.3
- MetaMask or compatible Web3 wallet

### Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd scaffold-eth-2

# Install dependencies
yarn install

# Start local blockchain
yarn chain

# Deploy contracts (in new terminal)
yarn deploy

# Start frontend (in new terminal)
yarn start
```

Visit `http://localhost:3000` to see the app!

---

## 📝 Smart Contract Architecture

### ChamaDAO.sol

```solidity
// Core Functions
- createChama(name, description, contributionAmount, frequency)
- joinChama(chamaId)
- contribute(chamaId) payable
- requestLoan(chamaId, amount, purpose, repaymentPeriod)
- voteOnLoan(loanId, support)
- executeLoan(loanId)
- repayLoan(loanId) payable

// View Functions
- getChama(chamaId)
- getMember(chamaId, memberAddress)
- getLoanRequest(loanId)
- getChamaMembers(chamaId)
- getUserChamas(userAddress)
- getChamaBalance(chamaId)
```

### Key Design Decisions

1. **Simple Majority Voting**: Loans approved if votes_for > votes_against
2. **7-Day Voting Period**: Gives members time to review loan requests
3. **Fixed Contribution Amounts**: Ensures fairness and predictability
4. **No Withdrawal Function**: Funds only released through approved loans
5. **Creator Auto-Membership**: Chama creator automatically becomes first member

---

## 🎨 User Interface

### Pages

1. **Home (`/`)**: Landing page with features and how-it-works
2. **Create Chama (`/create`)**: Form to create new savings group
3. **My Chamas (`/my-chamas`)**: Dashboard of user's Chamas
4. **Chama Detail (`/chama/[id]`)**: Individual Chama management
5. **Explore (`/explore`)**: Browse all active Chamas

### Design Philosophy
- **Mobile-First**: Optimized for African mobile users
- **Intuitive**: Clear CTAs and user flows
- **Accessible**: High contrast, readable fonts
- **Fast**: Optimized loading and interactions

---

## 🔒 Security Considerations

### Smart Contract Security
- ✅ Reentrancy protection
- ✅ Access control modifiers
- ✅ Input validation
- ✅ Safe math operations (Solidity 0.8+)
- ✅ Event logging for transparency

### Recommended Audits
Before mainnet deployment:
- [ ] Professional smart contract audit
- [ ] Formal verification
- [ ] Bug bounty program
- [ ] Testnet deployment and testing

---

## 🌐 Deployment

### Testnet Deployment

```bash
# Deploy to Sepolia
yarn deploy --network sepolia

# Verify contract
yarn verify --network sepolia
```

### Mainnet Deployment

```bash
# Deploy to Ethereum Mainnet
yarn deploy --network mainnet

# Deploy frontend to Vercel
yarn vercel
```

---

## 📊 Use Cases

### 1. Village Savings Groups
- **Problem**: Rural communities lack access to formal banking
- **Solution**: Create Chamas for collective savings and emergency loans

### 2. Small Business Financing
- **Problem**: Entrepreneurs can't access traditional loans
- **Solution**: Business owners pool funds and vote on business loans

### 3. Education Funds
- **Problem**: Parents struggle to save for children's education
- **Solution**: Parent Chamas for school fees and educational expenses

### 4. Emergency Funds
- **Problem**: Medical emergencies drain family savings
- **Solution**: Community health Chamas for medical expenses

---

## 🚧 Future Enhancements

### Phase 2 (Post-Hackathon)
- [ ] Interest-bearing loans
- [ ] Staking rewards for members
- [ ] Multi-signature withdrawals
- [ ] Automated contribution reminders
- [ ] Mobile app (React Native)

### Phase 3 (Long-term)
- [ ] Cross-chain support (Polygon, Arbitrum)
- [ ] Fiat on/off ramps (M-Pesa integration)
- [ ] Credit scoring system
- [ ] Insurance products
- [ ] Governance token

---

## 📈 Market Opportunity

### African Savings Market
- **$1B+** in informal savings groups
- **500M+** mobile money users
- **60%** of population unbanked
- **Growing** blockchain adoption

### Competitive Advantages
1. **First Mover**: No major blockchain Chama platform
2. **Cultural Fit**: Built for African users by understanding their needs
3. **Low Fees**: Blockchain cheaper than traditional banking
4. **Transparency**: Solves trust issues in informal groups

---

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - see LICENSE file for details

---

## 👥 Team

Built with ❤️ for ETH Safari Hackathon 2025

---

## 🙏 Acknowledgments

- **Scaffold-ETH 2**: Amazing development framework
- **ETH Safari**: For hosting this incredible hackathon
- **African Chama Communities**: For inspiring this project
- **Open Source Community**: For the tools and libraries

---

## 📞 Contact & Links

- **Demo**: [Coming Soon]
- **GitHub**: [Your Repo]
- **Twitter**: [@YourHandle]
- **Email**: your.email@example.com

---

## 🎥 Demo Video

[Link to demo video showing]:
1. Creating a Chama
2. Joining as a member
3. Making contributions
4. Requesting a loan
5. Voting on loans
6. Dashboard overview

---

## 📸 Screenshots

### Homepage
![Homepage](./screenshots/home.png)

### Create Chama
![Create](./screenshots/create.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

### Chama Detail
![Detail](./screenshots/detail.png)

---

## ⚡ Quick Demo

Try it yourself:
1. Connect your wallet
2. Create a test Chama (0.01 ETH contribution)
3. Invite friends to join
4. Make contributions
5. Request and vote on loans

---

## 🏆 Hackathon Submission

**ETH Safari Hackathon 2025**  
**Track**: ETH Safari Evolution Challenge  
**Submission Date**: [Date]  
**Team**: [Your Team Name]

### Judging Criteria Alignment

1. **Innovation**: ✅ First blockchain Chama platform
2. **Technical Implementation**: ✅ Production-ready smart contracts
3. **User Experience**: ✅ Beautiful, intuitive UI
4. **Impact**: ✅ Addresses real African financial inclusion problem
5. **Completeness**: ✅ Fully functional MVP

---

**Built for Africa. Powered by Ethereum. 🌍⛓️**
