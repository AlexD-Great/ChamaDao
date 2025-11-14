"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { HandCoins } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <HandCoins className="h-8 w-8 text-primary-600" />
          <span className="text-2xl font-bold">
            <span className="text-primary-600">Chama</span>
            <span className="text-secondary-600">DAO</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Explore
          </Link>
          <Link href="/my-chamas" className="text-sm font-medium hover:text-primary-600 transition-colors">
            My Chamas
          </Link>
          <Link href="/create" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Create Chama
          </Link>
        </nav>

        <ConnectButton />
      </div>
    </header>
  );
}
