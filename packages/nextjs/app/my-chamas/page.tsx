"use client";

import { useAccount } from "wagmi";
import { HandCoins, Plus, TrendingUp, Users, Calendar, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useTotalChamas, useChamaDetails, useIsMember, useMemberDetails } from "../../hooks/useChamaDAO";
import { formatEther } from "viem";
import { useMemo } from "react";

// Component to display a single user's Chama
function UserChamaCard({ chamaId, userAddress }: { chamaId: number; userAddress: `0x${string}` }) {
  const { data: chamaData, isLoading: loadingChama } = useChamaDetails(chamaId);
  const { data: isMember } = useIsMember(chamaId, userAddress);
  const { data: memberData, isLoading: loadingMember } = useMemberDetails(chamaId, userAddress);

  if (loadingChama || loadingMember) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
        </div>
      </div>
    );
  }

  if (!chamaData || !isMember) return null;

  const [name, description, creator, contributionAmount, contributionFrequency, totalContributions, memberCount, isActive] = chamaData as any[];
  const [hasJoined, contributions, , lastContribution] = memberData || [false, BigInt(0), BigInt(0), BigInt(0)];

  if (!isActive || !hasJoined) return null;

  const frequencyMap: Record<number, string> = {
    7: "Weekly",
    14: "Bi-weekly",
    30: "Monthly",
    90: "Quarterly",
  };

  const isCreator = creator?.toLowerCase() === userAddress?.toLowerCase();

  return (
    <Link
      href={`/chama/${chamaId}`}
      className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 mb-1">
            {name}
          </h3>
          <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
            {isCreator ? "Creator" : "Member"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">My Contributions</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatEther(contributions || BigInt(0))} ETH
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Pool</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatEther(totalContributions || BigInt(0))} ETH
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Members</p>
          <p className="text-lg font-semibold text-gray-900">
            {memberCount?.toString() || "0"}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Frequency</p>
          <p className="text-lg font-semibold text-gray-900">
            {frequencyMap[Number(contributionFrequency)] || "Monthly"}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          {formatEther(contributionAmount || BigInt(0))} ETH per period
        </span>
        <ArrowRight className="h-5 w-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default function MyChamasPage() {
  const { address, isConnected } = useAccount();
  const { data: totalChamas, isLoading: loadingTotal } = useTotalChamas();

  const chamaIds = useMemo(() => {
    if (!totalChamas) return [];
    const count = Number(totalChamas);
    return Array.from({ length: count }, (_, i) => i);
  }, [totalChamas]);

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
          label="Network"
          value="Sepolia"
          icon={<HandCoins className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          label="Total Chamas"
          value={loadingTotal ? "..." : (totalChamas?.toString() || "0")}
          icon={<TrendingUp className="h-6 w-6 text-secondary-600" />}
        />
        <StatCard
          label="Your Wallet"
          value={`${address?.slice(0, 6)}...${address?.slice(-4)}`}
          icon={<Users className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          label="Status"
          value="Connected"
          icon={<Users className="h-6 w-6 text-secondary-600" />}
        />
      </div>

      {/* Chamas List */}
      {loadingTotal ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-12 w-12 animate-spin text-primary-600" />
        </div>
      ) : chamaIds.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Chamas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chamaIds.map((id) => address && (
              <UserChamaCard key={id} chamaId={id} userAddress={address} />
            ))}
          </div>
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
