"use client";

import Link from "next/link";
import { Users, Shield, Vote, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Sparkles className="h-4 w-4" />
              ETH Safari Hackathon 2025
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              <span className="text-primary-600">Chama</span>
              <span className="text-secondary-600">DAO</span>
            </h1>
            
            <p className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
              Decentralized Community Savings Groups
            </p>
            
            <p className="mb-10 text-lg text-gray-600 md:text-xl">
              Bringing traditional African Chamas to the blockchain. Save together, grow together, transparently.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/create"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl"
              >
                Create Chama
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-secondary-600 bg-white px-8 py-4 text-lg font-semibold text-secondary-700 transition-all hover:bg-secondary-50"
              >
                Explore Chamas
              </Link>
              
              <Link
                href="/my-chamas"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-600 bg-white px-8 py-4 text-lg font-semibold text-primary-700 transition-all hover:bg-primary-50"
              >
                My Chamas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              Why ChamaDAO?
            </h2>
            <p className="text-lg text-gray-600">
              Empowering African communities with transparent, secure, and democratic savings groups
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary-600" />}
              title="Community Driven"
              description="Create and join savings groups with trusted community members"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-secondary-600" />}
              title="Secure & Transparent"
              description="All funds and transactions visible on-chain, eliminating fraud"
            />
            <FeatureCard
              icon={<Vote className="h-10 w-10 text-primary-600" />}
              title="Democratic Voting"
              description="Members vote on loan requests ensuring fair distribution"
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-secondary-600" />}
              title="Grow Together"
              description="Pool resources and support each other's financial goals"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to start saving with your community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <StepCard
              number="1"
              title="Create or Join"
              description="Start a new Chama or join an existing one in your community"
            />
            <StepCard
              number="2"
              title="Contribute Regularly"
              description="Make periodic contributions to build your group's treasury"
            />
            <StepCard
              number="3"
              title="Request & Vote"
              description="Request loans when needed and vote on others' requests democratically"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-6">
            Ready to Transform Your Community Savings?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Africans building transparent, secure savings groups on the blockchain
          </p>
          <Link
            href="/create"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-700 shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 text-2xl font-bold text-white shadow-lg">
        {number}
      </div>
      <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
