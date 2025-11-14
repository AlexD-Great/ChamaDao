"use client";

import { useAccount } from "wagmi";
import { HandCoins, Plus, TrendingUp, Users, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock data - will be replaced with contract data
const mockUserChamas = [
  {
    id: 1,
    name: "Village Savings Group",
    role: "Creator",
    members: 12,
    myContributions: "0.8",
    totalContributions: "2.5",
    contributionAmount: "0.1",
    frequency: "Monthly",
    nextContribution: "5 days",
  },
  {
    id: 2,
    name: "Women Empowerment Chama",
    role: "Member",
    members: 8,
    myContributions: "0.3",
    totalContributions: "1.8",
    contributionAmount: "0.05",
    frequency: "Weekly",
    nextContribution: "2 days",
  },
];

export default function MyChamasPage() {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <HandCoins className="mx-auto h-16 w-16 text-primary-600 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Connect Your Wallet
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Please connect your wallet to view your Chamas
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            My Chamas
          </h1>
          <p className="text-lg text-gray-600">
            Manage your community savings groups
          </p>
        </div>
        <Link
          href="/create"
          className="flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl"
        >
          <Plus className="h-5 w-5" />
          Create Chama
        </Link>
      </div>

      {/* Overview Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <StatCard
          label="Total Chamas"
          value={mockUserChamas.length.toString()}
          icon={<HandCoins className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          label="My Contributions"
          value={`${mockUserChamas.reduce((sum, c) => sum + parseFloat(c.myContributions), 0).toFixed(2)} ETH`}
          icon={<TrendingUp className="h-6 w-6 text-secondary-600" />}
        />
        <StatCard
          label="Total Saved"
          value={`${mockUserChamas.reduce((sum, c) => sum + parseFloat(c.totalContributions), 0).toFixed(2)} ETH`}
          icon={<TrendingUp className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          label="Active Groups"
          value={mockUserChamas.length.toString()}
          icon={<Users className="h-6 w-6 text-secondary-600" />}
        />
      </div>

      {/* Chamas List */}
      {mockUserChamas.length > 0 ? (
        <div className="space-y-4">
          {mockUserChamas.map((chama) => (
            <ChamaCard key={chama.id} chama={chama} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
          <HandCoins className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Chamas Yet
          </h3>
          <p className="text-gray-600 mb-6">
            Create your first Chama or join an existing one
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700"
            >
              <Plus className="h-5 w-5" />
              Create Chama
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-600 bg-white px-6 py-3 text-primary-700 hover:bg-primary-50"
            >
              Explore Chamas
            </Link>
          </div>
        </div>
      )}

      {/* Connected Wallet Info */}
      <div className="mt-8 rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Connected as:</span>{" "}
          <span className="font-mono">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        {icon}
      </div>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function ChamaCard({ chama }: { chama: typeof mockUserChamas[0] }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {chama.name}
            </h3>
            <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
              {chama.role}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {chama.members} members
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {chama.frequency}
            </span>
          </div>
        </div>
        <Link
          href={`/chama/${chama.id}`}
          className="flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-700"
        >
          View
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
        <div>
          <p className="text-xs text-gray-600 mb-1">My Contributions</p>
          <p className="text-lg font-semibold text-gray-900">{chama.myContributions} ETH</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 mb-1">Total Saved</p>
          <p className="text-lg font-semibold text-gray-900">{chama.totalContributions} ETH</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 mb-1">Next Due</p>
          <p className="text-lg font-semibold text-gray-900">{chama.nextContribution}</p>
        </div>
      </div>
    </div>
  );
}
