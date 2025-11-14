// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ChamaDAO
 * @notice A decentralized autonomous organization for community savings groups (Chamas)
 * @dev Implements transparent treasury management, member contributions, and democratic loan voting
 */
contract ChamaDAO {
    // ============ State Variables ============
    
    struct Chama {
        string name;
        string description;
        address creator;
        uint256 contributionAmount;
        uint256 contributionFrequency; // in seconds (e.g., 30 days)
        uint256 createdAt;
        uint256 totalContributions;
        uint256 memberCount;
        bool isActive;
    }
    
    struct Member {
        address memberAddress;
        uint256 totalContributed;
        uint256 lastContributionTime;
        uint256 joinedAt;
        bool isActive;
    }
    
    struct LoanRequest {
        uint256 chamaId;
        address borrower;
        uint256 amount;
        string purpose;
        uint256 repaymentPeriod; // in seconds
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 createdAt;
        uint256 deadline;
        bool executed;
        bool approved;
    }
    
    // Mappings
    mapping(uint256 => Chama) public chamas;
    mapping(uint256 => mapping(address => Member)) public chamaMembers;
    mapping(uint256 => address[]) public chamaMemberList;
    mapping(uint256 => LoanRequest) public loanRequests;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    mapping(address => uint256[]) public userChamas;
    
    // Counters
    uint256 public chamaCount;
    uint256 public loanRequestCount;
    
    // ============ Events ============
    
    event ChamaCreated(
        uint256 indexed chamaId,
        string name,
        address indexed creator,
        uint256 contributionAmount,
        uint256 contributionFrequency
    );
    
    event MemberJoined(
        uint256 indexed chamaId,
        address indexed member,
        uint256 timestamp
    );
    
    event ContributionMade(
        uint256 indexed chamaId,
        address indexed member,
        uint256 amount,
        uint256 timestamp
    );
    
    event LoanRequested(
        uint256 indexed loanId,
        uint256 indexed chamaId,
        address indexed borrower,
        uint256 amount,
        string purpose
    );
    
    event VoteCast(
        uint256 indexed loanId,
        address indexed voter,
        bool support
    );
    
    event LoanApproved(
        uint256 indexed loanId,
        uint256 indexed chamaId,
        address indexed borrower,
        uint256 amount
    );
    
    event LoanRejected(
        uint256 indexed loanId,
        uint256 indexed chamaId
    );
    
    event FundsWithdrawn(
        uint256 indexed chamaId,
        address indexed recipient,
        uint256 amount
    );
    
    // ============ Modifiers ============
    
    modifier chamaExists(uint256 _chamaId) {
        require(_chamaId < chamaCount, "Chama does not exist");
        require(chamas[_chamaId].isActive, "Chama is not active");
        _;
    }
    
    modifier onlyMember(uint256 _chamaId) {
        require(
            chamaMembers[_chamaId][msg.sender].isActive,
            "Not a member of this Chama"
        );
        _;
    }
    
    modifier onlyCreator(uint256 _chamaId) {
        require(
            chamas[_chamaId].creator == msg.sender,
            "Only creator can perform this action"
        );
        _;
    }
    
    // ============ Core Functions ============
    
    /**
     * @notice Create a new Chama (savings group)
     * @param _name Name of the Chama
     * @param _description Description and purpose
     * @param _contributionAmount Required contribution amount in wei
     * @param _contributionFrequency How often members should contribute (in seconds)
     */
    function createChama(
        string memory _name,
        string memory _description,
        uint256 _contributionAmount,
        uint256 _contributionFrequency
    ) external returns (uint256) {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(_contributionAmount > 0, "Contribution amount must be greater than 0");
        require(_contributionFrequency > 0, "Contribution frequency must be greater than 0");
        
        uint256 chamaId = chamaCount++;
        
        chamas[chamaId] = Chama({
            name: _name,
            description: _description,
            creator: msg.sender,
            contributionAmount: _contributionAmount,
            contributionFrequency: _contributionFrequency,
            createdAt: block.timestamp,
            totalContributions: 0,
            memberCount: 0,
            isActive: true
        });
        
        // Creator automatically becomes first member
        _addMember(chamaId, msg.sender);
        
        emit ChamaCreated(
            chamaId,
            _name,
            msg.sender,
            _contributionAmount,
            _contributionFrequency
        );
        
        return chamaId;
    }
    
    /**
     * @notice Join an existing Chama
     * @param _chamaId ID of the Chama to join
     */
    function joinChama(uint256 _chamaId) external chamaExists(_chamaId) {
        require(
            !chamaMembers[_chamaId][msg.sender].isActive,
            "Already a member"
        );
        
        _addMember(_chamaId, msg.sender);
        
        emit MemberJoined(_chamaId, msg.sender, block.timestamp);
    }
    
    /**
     * @notice Make a contribution to the Chama
     * @param _chamaId ID of the Chama
     */
    function contribute(uint256 _chamaId) 
        external 
        payable 
        chamaExists(_chamaId) 
        onlyMember(_chamaId) 
    {
        Chama storage chama = chamas[_chamaId];
        Member storage member = chamaMembers[_chamaId][msg.sender];
        
        require(
            msg.value == chama.contributionAmount,
            "Incorrect contribution amount"
        );
        
        member.totalContributed += msg.value;
        member.lastContributionTime = block.timestamp;
        chama.totalContributions += msg.value;
        
        emit ContributionMade(_chamaId, msg.sender, msg.value, block.timestamp);
    }
    
    /**
     * @notice Request a loan from the Chama
     * @param _chamaId ID of the Chama
     * @param _amount Amount to borrow
     * @param _purpose Purpose of the loan
     * @param _repaymentPeriod Time to repay (in seconds)
     */
    function requestLoan(
        uint256 _chamaId,
        uint256 _amount,
        string memory _purpose,
        uint256 _repaymentPeriod
    ) external chamaExists(_chamaId) onlyMember(_chamaId) returns (uint256) {
        require(_amount > 0, "Amount must be greater than 0");
        require(_amount <= address(this).balance, "Insufficient Chama funds");
        require(bytes(_purpose).length > 0, "Purpose cannot be empty");
        require(_repaymentPeriod > 0, "Repayment period must be greater than 0");
        
        uint256 loanId = loanRequestCount++;
        
        loanRequests[loanId] = LoanRequest({
            chamaId: _chamaId,
            borrower: msg.sender,
            amount: _amount,
            purpose: _purpose,
            repaymentPeriod: _repaymentPeriod,
            votesFor: 0,
            votesAgainst: 0,
            createdAt: block.timestamp,
            deadline: block.timestamp + 7 days, // 7 days voting period
            executed: false,
            approved: false
        });
        
        emit LoanRequested(loanId, _chamaId, msg.sender, _amount, _purpose);
        
        return loanId;
    }
    
    /**
     * @notice Vote on a loan request
     * @param _loanId ID of the loan request
     * @param _support True to approve, false to reject
     */
    function voteOnLoan(uint256 _loanId, bool _support) external {
        require(_loanId < loanRequestCount, "Loan request does not exist");
        
        LoanRequest storage loan = loanRequests[_loanId];
        require(!loan.executed, "Loan already executed");
        require(block.timestamp < loan.deadline, "Voting period ended");
        require(
            chamaMembers[loan.chamaId][msg.sender].isActive,
            "Not a member of this Chama"
        );
        require(!hasVoted[_loanId][msg.sender], "Already voted");
        
        hasVoted[_loanId][msg.sender] = true;
        
        if (_support) {
            loan.votesFor++;
        } else {
            loan.votesAgainst++;
        }
        
        emit VoteCast(_loanId, msg.sender, _support);
    }
    
    /**
     * @notice Execute a loan request after voting period
     * @param _loanId ID of the loan request
     */
    function executeLoan(uint256 _loanId) external {
        require(_loanId < loanRequestCount, "Loan request does not exist");
        
        LoanRequest storage loan = loanRequests[_loanId];
        require(!loan.executed, "Loan already executed");
        require(block.timestamp >= loan.deadline, "Voting period not ended");
        
        loan.executed = true;
        
        // Simple majority vote
        if (loan.votesFor > loan.votesAgainst) {
            loan.approved = true;
            
            // Transfer funds to borrower
            (bool success, ) = loan.borrower.call{value: loan.amount}("");
            require(success, "Transfer failed");
            
            emit LoanApproved(_loanId, loan.chamaId, loan.borrower, loan.amount);
        } else {
            emit LoanRejected(_loanId, loan.chamaId);
        }
    }
    
    /**
     * @notice Repay a loan
     * @param _loanId ID of the loan to repay
     */
    function repayLoan(uint256 _loanId) external payable {
        require(_loanId < loanRequestCount, "Loan request does not exist");
        
        LoanRequest storage loan = loanRequests[_loanId];
        require(loan.executed && loan.approved, "Loan not approved");
        require(msg.sender == loan.borrower, "Only borrower can repay");
        require(msg.value == loan.amount, "Incorrect repayment amount");
        
        // Funds automatically added to Chama treasury
        chamas[loan.chamaId].totalContributions += msg.value;
    }
    
    // ============ View Functions ============
    
    /**
     * @notice Get Chama details
     */
    function getChama(uint256 _chamaId) 
        external 
        view 
        returns (
            string memory name,
            string memory description,
            address creator,
            uint256 contributionAmount,
            uint256 contributionFrequency,
            uint256 totalContributions,
            uint256 memberCount,
            bool isActive
        ) 
    {
        Chama memory chama = chamas[_chamaId];
        return (
            chama.name,
            chama.description,
            chama.creator,
            chama.contributionAmount,
            chama.contributionFrequency,
            chama.totalContributions,
            chama.memberCount,
            chama.isActive
        );
    }
    
    /**
     * @notice Get member details
     */
    function getMember(uint256 _chamaId, address _member)
        external
        view
        returns (
            uint256 totalContributed,
            uint256 lastContributionTime,
            uint256 joinedAt,
            bool isActive
        )
    {
        Member memory member = chamaMembers[_chamaId][_member];
        return (
            member.totalContributed,
            member.lastContributionTime,
            member.joinedAt,
            member.isActive
        );
    }
    
    /**
     * @notice Get loan request details
     */
    function getLoanRequest(uint256 _loanId)
        external
        view
        returns (
            uint256 chamaId,
            address borrower,
            uint256 amount,
            string memory purpose,
            uint256 repaymentPeriod,
            uint256 votesFor,
            uint256 votesAgainst,
            uint256 deadline,
            bool executed,
            bool approved
        )
    {
        LoanRequest memory loan = loanRequests[_loanId];
        return (
            loan.chamaId,
            loan.borrower,
            loan.amount,
            loan.purpose,
            loan.repaymentPeriod,
            loan.votesFor,
            loan.votesAgainst,
            loan.deadline,
            loan.executed,
            loan.approved
        );
    }
    
    /**
     * @notice Get all members of a Chama
     */
    function getChamaMembers(uint256 _chamaId) 
        external 
        view 
        returns (address[] memory) 
    {
        return chamaMemberList[_chamaId];
    }
    
    /**
     * @notice Get all Chamas a user is part of
     */
    function getUserChamas(address _user) 
        external 
        view 
        returns (uint256[] memory) 
    {
        return userChamas[_user];
    }
    
    /**
     * @notice Get Chama treasury balance
     */
    function getChamaBalance(uint256 _chamaId) 
        external 
        view 
        chamaExists(_chamaId) 
        returns (uint256) 
    {
        return chamas[_chamaId].totalContributions;
    }
    
    // ============ Internal Functions ============
    
    function _addMember(uint256 _chamaId, address _member) internal {
        chamaMembers[_chamaId][_member] = Member({
            memberAddress: _member,
            totalContributed: 0,
            lastContributionTime: 0,
            joinedAt: block.timestamp,
            isActive: true
        });
        
        chamaMemberList[_chamaId].push(_member);
        userChamas[_member].push(_chamaId);
        chamas[_chamaId].memberCount++;
    }
    
    // ============ Utility Functions ============
    
    /**
     * @notice Get contract balance
     */
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    receive() external payable {}
}
