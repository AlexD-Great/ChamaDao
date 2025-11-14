"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { HandCoins, Users, Calendar, DollarSign } from "lucide-react";
import Link from "next/link";

export default function CreateChamaPage() {
  const { address, isConnected } = useAccount();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contributionAmount: "",
    contributionFrequency: "30", // days
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call smart contract createChama function
    console.log("Creating Chama:", formData);
    alert("Chama creation will be implemented with contract integration!");
  };

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <HandCoins className="mx-auto h-16 w-16 text-primary-600 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Connect Your Wallet
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Please connect your wallet to create a Chama
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
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create a New Chama
          </h1>
          <p className="text-lg text-gray-600">
            Start your community savings group on the blockchain
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Chama Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Users className="h-4 w-4" />
              Chama Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g., Village Savings Group"
            />
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <HandCoins className="h-4 w-4" />
              Description
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Describe the purpose of your Chama..."
            />
          </div>

          {/* Contribution Amount */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="h-4 w-4" />
              Contribution Amount (ETH)
            </label>
            <input
              type="number"
              step="0.001"
              min="0.001"
              required
              value={formData.contributionAmount}
              onChange={(e) => setFormData({ ...formData, contributionAmount: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="0.01"
            />
            <p className="mt-2 text-sm text-gray-500">
              Amount each member contributes per period
            </p>
          </div>

          {/* Contribution Frequency */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Calendar className="h-4 w-4" />
              Contribution Frequency
            </label>
            <select
              value={formData.contributionFrequency}
              onChange={(e) => setFormData({ ...formData, contributionFrequency: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="7">Weekly (7 days)</option>
              <option value="14">Bi-weekly (14 days)</option>
              <option value="30">Monthly (30 days)</option>
              <option value="90">Quarterly (90 days)</option>
            </select>
          </div>

          {/* Info Box */}
          <div className="rounded-lg bg-primary-50 border border-primary-200 p-4">
            <h3 className="font-semibold text-primary-900 mb-2">
              What happens next?
            </h3>
            <ul className="space-y-1 text-sm text-primary-800">
              <li>• You'll be the first member of this Chama</li>
              <li>• Others can join by contributing the set amount</li>
              <li>• Members can request loans and vote democratically</li>
              <li>• All transactions are transparent on-chain</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-primary-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl"
            >
              Create Chama
            </button>
            <Link
              href="/"
              className="rounded-lg border-2 border-gray-300 px-6 py-4 text-lg font-semibold text-gray-700 transition-all hover:bg-gray-50"
            >
              Cancel
            </Link>
          </div>
        </form>

        {/* Connected Wallet Info */}
        <div className="mt-8 rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Connected as:</span>{" "}
            <span className="font-mono">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
