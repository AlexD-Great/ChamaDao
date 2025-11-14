"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { HandCoins, Users, Calendar, DollarSign, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useCreateChama } from "../../hooks/useChamaDAO";
import { useRouter } from "next/navigation";

export default function CreateChamaPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { createChama, isPending, isConfirming, isSuccess, error, hash } = useCreateChama();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contributionAmount: "",
    contributionFrequency: "30", // days
  });

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        // Force a full page reload to ensure fresh data
        window.location.href = "/my-chamas";
      }, 3000);
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description || !formData.contributionAmount) {
      alert("Please fill in all fields");
      return;
    }

    try {
      createChama(
        formData.name,
        formData.description,
        formData.contributionAmount,
        parseInt(formData.contributionFrequency)
      );
    } catch (err) {
      console.error("Error creating Chama:", err);
    }
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
              💡 Important Information
            </h3>
            <ul className="space-y-2 text-sm text-primary-800">
              <li>• <strong>Creating a Chama is FREE</strong> - no payment required</li>
              <li>• You'll automatically become the first member</li>
              <li>• To add funds, visit "My Chamas" and click "Contribute"</li>
              <li>• The contribution amount is what members pay when contributing</li>
              <li>• Others can join and contribute to grow the treasury</li>
              <li>• All transactions are transparent on-chain</li>
            </ul>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="rounded-lg bg-green-50 border border-green-200 p-4 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-green-900">Chama Created Successfully!</p>
                <p className="text-sm text-green-700">Redirecting to your dashboard...</p>
                {hash && (
                  <a
                    href={`https://sepolia.etherscan.io/tx/${hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:underline"
                  >
                    View transaction
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="font-semibold text-red-900">Error Creating Chama</p>
              <p className="text-sm text-red-700">{error.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isPending || isConfirming || isSuccess}
              className="flex-1 rounded-lg bg-primary-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending || isConfirming ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  {isPending ? "Confirm in Wallet..." : "Creating Chama..."}
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Created!
                </>
              ) : (
                "Create Chama"
              )}
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
