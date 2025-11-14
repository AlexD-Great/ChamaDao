"use client";

import { useState } from "react";
import { Search, Users, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock data - will be replaced with contract data
const mockChamas = [
  {
    id: 1,
    name: "Village Savings Group",
    description: "Community savings for local development projects",
    members: 12,
    totalContributions: "2.5",
    contributionAmount: "0.1",
    frequency: "Monthly",
  },
  {
    id: 2,
    name: "Women Empowerment Chama",
    description: "Supporting women entrepreneurs in our community",
    members: 8,
    totalContributions: "1.8",
    contributionAmount: "0.05",
    frequency: "Weekly",
  },
  {
    id: 3,
    name: "Youth Business Fund",
    description: "Helping young entrepreneurs start their businesses",
    members: 15,
    totalContributions: "3.2",
    contributionAmount: "0.08",
    frequency: "Bi-weekly",
  },
  {
    id: 4,
    name: "Education Fund",
    description: "Pooling resources for children's education",
    members: 20,
    totalContributions: "5.0",
    contributionAmount: "0.15",
    frequency: "Monthly",
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChamas = mockChamas.filter(
    (chama) =>
      chama.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chama.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <StatCard
          label="Total Chamas"
          value={mockChamas.length.toString()}
          icon={<Users className="h-6 w-6 text-primary-600" />}
        />
        <StatCard
          label="Total Members"
          value={mockChamas.reduce((sum, c) => sum + c.members, 0).toString()}
          icon={<Users className="h-6 w-6 text-secondary-600" />}
        />
        <StatCard
          label="Total Saved"
          value={`${mockChamas.reduce((sum, c) => sum + parseFloat(c.totalContributions), 0).toFixed(2)} ETH`}
          icon={<TrendingUp className="h-6 w-6 text-primary-600" />}
        />
      </div>

      {/* Chamas Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredChamas.map((chama) => (
          <ChamaCard key={chama.id} chama={chama} />
        ))}
      </div>

      {filteredChamas.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-500">No Chamas found matching your search.</p>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

function ChamaCard({ chama }: { chama: typeof mockChamas[0] }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {chama.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {chama.description}
        </p>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="h-4 w-4" />
          <span>{chama.members} members</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <TrendingUp className="h-4 w-4" />
          <span>{chama.totalContributions} ETH saved</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{chama.contributionAmount} ETH • {chama.frequency}</span>
        </div>
      </div>

      <Link
        href={`/chama/${chama.id}`}
        className="flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-700 group-hover:shadow-md"
      >
        View Details
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
