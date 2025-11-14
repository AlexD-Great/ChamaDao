"use client";

import { useState, useMemo } from "react";
import { Search, Users, TrendingUp, Calendar, Plus, Loader2 } from "lucide-react";
import Link from "next/link";
import { useTotalChamas, useChamaDetails } from "../../hooks/useChamaDAO";
import { formatEther } from "viem";

// Component to display a single Chama card
function ChamaCard({ chamaId }: { chamaId: number }) {
  const { data: chamaData, isLoading } = useChamaDetails(chamaId);

  if (isLoading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
        </div>
      </div>
    );
  }

  if (!chamaData) return null;

  const [name, description, creator, contributionAmount, contributionFrequency, totalContributions, memberCount, isActive] = chamaData as any[];

  if (!isActive) return null;

  const frequencyMap: Record<number, string> = {
    7: "Weekly",
    14: "Bi-weekly",
    30: "Monthly",
    90: "Quarterly",
  };

  return (
    <Link
      href={`/chama/${chamaId}`}
      className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-lg"
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary-600" />
          <span className="text-sm text-gray-700">
            {memberCount?.toString() || "0"} Members
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-secondary-600" />
          <span className="text-sm text-gray-700">
            {formatEther(totalContributions || BigInt(0))} ETH
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary-600" />
          <span className="text-sm text-gray-700">
            {frequencyMap[Number(contributionFrequency)] || "Monthly"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            {formatEther(contributionAmount || BigInt(0))} ETH/period
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <span className="text-sm text-primary-600 font-medium group-hover:underline">
          View Details →
        </span>
      </div>
    </Link>
  );
}

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: totalChamas, isLoading: isLoadingTotal } = useTotalChamas();

  const chamaIds = useMemo(() => {
    if (!totalChamas) return [];
    const count = Number(totalChamas);
    return Array.from({ length: count }, (_, i) => i);
  }, [totalChamas]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Explore Chamas
        </h1>
        <p className="text-lg text-gray-600">
          Discover and join community savings groups
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Chamas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-600 mb-1">Total Chamas</p>
          <p className="text-3xl font-bold text-gray-900">
            {isLoadingTotal ? (
              <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
            ) : (
              totalChamas?.toString() || "0"
            )}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-600 mb-1">Active Network</p>
          <p className="text-2xl font-bold text-gray-900">Sepolia</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-600 mb-1">Contract</p>
          <a
            href="https://sepolia.etherscan.io/address/0xCD41309879BfB57c1b2b19D58b47B190C7387c54"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-primary-600 hover:underline"
          >
            0xCD41...7c54
          </a>
        </div>
      </div>

      {/* Chamas Grid */}
      {isLoadingTotal ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-12 w-12 animate-spin text-primary-600" />
        </div>
      ) : chamaIds.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chamaIds.map((id) => (
            <ChamaCard key={id} chamaId={id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Chamas Yet</h3>
          <p className="text-gray-600 mb-6">Be the first to create a Chama on the blockchain!</p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700"
          >
            <Plus className="h-5 w-5" />
            Create First Chama
          </Link>
        </div>
      )}
    </div>
  );
}
