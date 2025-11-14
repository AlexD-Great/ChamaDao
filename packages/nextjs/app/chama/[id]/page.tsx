"use client";

import { useParams } from "next/navigation";
import { useAccount } from "wagmi";
import { useState } from "react";
import {
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  HandCoins,
  Vote,
  ArrowLeft,
  Plus,
} from "lucide-react";
import Link from "next/link";

// Mock data - will be replaced with contract data
const mockChamaData = {
  id: 1,
  name: "Village Savings Group",
  description: "Community savings for local development projects",
  creator: "0x1234...5678",
  members: 12,
  totalContributions: "2.5",
  contributionAmount: "0.1",
  frequency: "Monthly",
  createdAt: "2024-01-15",
  isActive: true,
};

const mockMembers = [
  { address: "0x1234...5678", contributions: "0.8", joinedAt: "2024-01-15", role: "Creator" },
  { address: "0xabcd...efgh", contributions: "0.5", joinedAt: "2024-01-20", role: "Member" },
  { address: "0x9876...4321", contributions: "0.3", joinedAt: "2024-02-01", role: "Member" },
];

const mockLoanRequests = [
  {
    id: 1,
    borrower: "0xabcd...efgh",
    amount: "0.5",
    purpose: "Small business expansion",
    votesFor: 8,
    votesAgainst: 2,
    status: "Active",
  },
];

export default function ChamaDetailPage() {
  const params = useParams();
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<"overview" | "members" | "loans">("overview");

  const isMember = mockMembers.some((m) => m.address === address);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link
        href="/my-chamas"
        className="mb-6 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to My Chamas
      </Link>

      {/* Header */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {mockChamaData.name}
            </h1>
            <p className="text-lg text-gray-600">{mockChamaData.description}</p>
          </div>
          {!isMember && isConnected && (
            <button className="flex items-center gap-2 rounded-lg bg-secondary-600 px-6 py-3 text-white shadow-lg transition-all hover:bg-secondary-700">
              <Plus className="h-5 w-5" />
              Join Chama
            </button>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard
            icon={<Users className="h-6 w-6 text-primary-600" />}
            label="Members"
            value={mockChamaData.members.toString()}
          />
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-secondary-600" />}
            label="Total Saved"
            value={`${mockChamaData.totalContributions} ETH`}
          />
          <StatCard
            icon={<DollarSign className="h-6 w-6 text-primary-600" />}
            label="Contribution"
            value={`${mockChamaData.contributionAmount} ETH`}
          />
          <StatCard
            icon={<Calendar className="h-6 w-6 text-secondary-600" />}
            label="Frequency"
            value={mockChamaData.frequency}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2 border-b border-gray-200">
        <TabButton
          active={activeTab === "overview"}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </TabButton>
        <TabButton
          active={activeTab === "members"}
          onClick={() => setActiveTab("members")}
        >
          Members ({mockMembers.length})
        </TabButton>
        <TabButton
          active={activeTab === "loans"}
          onClick={() => setActiveTab("loans")}
        >
          Loan Requests ({mockLoanRequests.length})
        </TabButton>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Chama Information
            </h2>
            <dl className="space-y-3">
              <InfoRow label="Creator" value={mockChamaData.creator} />
              <InfoRow label="Created" value={mockChamaData.createdAt} />
              <InfoRow label="Status" value={mockChamaData.isActive ? "Active" : "Inactive"} />
              <InfoRow label="Chama ID" value={`#${params.id}`} />
            </dl>
          </div>

          {isMember && (
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <ActionButton
                  icon={<DollarSign className="h-5 w-5" />}
                  label="Make Contribution"
                  onClick={() => alert("Contribution feature coming soon!")}
                />
                <ActionButton
                  icon={<HandCoins className="h-5 w-5" />}
                  label="Request Loan"
                  onClick={() => alert("Loan request feature coming soon!")}
                />
                <ActionButton
                  icon={<Vote className="h-5 w-5" />}
                  label="Vote on Loans"
                  onClick={() => setActiveTab("loans")}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "members" && (
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Members
          </h2>
          <div className="space-y-3">
            {mockMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-mono text-sm font-medium text-gray-900">
                      {member.address}
                    </p>
                    <p className="text-xs text-gray-500">
                      Joined {member.joinedAt}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    {member.contributions} ETH
                  </p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "loans" && (
        <div className="space-y-4">
          {isMember && (
            <button className="w-full rounded-lg border-2 border-dashed border-primary-300 bg-primary-50 p-6 text-primary-700 transition-all hover:bg-primary-100">
              <Plus className="mx-auto h-8 w-8 mb-2" />
              <p className="font-semibold">Request a Loan</p>
            </button>
          )}

          {mockLoanRequests.map((loan) => (
            <div
              key={loan.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {loan.purpose}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Requested by {loan.borrower}
                  </p>
                </div>
                <span className="rounded-full bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-700">
                  {loan.status}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-bold text-gray-900">{loan.amount} ETH</p>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Votes</span>
                  <span>
                    {loan.votesFor} For • {loan.votesAgainst} Against
                  </span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-secondary-600"
                    style={{
                      width: `${(loan.votesFor / (loan.votesFor + loan.votesAgainst)) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {isMember && (
                <div className="flex gap-3">
                  <button className="flex-1 rounded-lg bg-secondary-600 px-4 py-2 text-white hover:bg-secondary-700">
                    Vote For
                  </button>
                  <button className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Vote Against
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="mb-2">{icon}</div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium transition-colors ${
        active
          ? "border-b-2 border-primary-600 text-primary-600"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
      <dt className="text-gray-600">{label}</dt>
      <dd className="font-medium text-gray-900">{value}</dd>
    </div>
  );
}

function ActionButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-lg border-2 border-primary-200 bg-white p-4 text-left transition-all hover:border-primary-400 hover:bg-primary-50"
    >
      <div className="rounded-lg bg-primary-100 p-2 text-primary-600">
        {icon}
      </div>
      <span className="font-medium text-gray-900">{label}</span>
    </button>
  );
}
