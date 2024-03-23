"use client";
import WalletBar from "@/components/WalletBar";
import Bundler from "@/components/Bundler";
import Approve from "@/components/Approve";
import PWNInfo from "@/components/PWNInfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-12">
      <WalletBar />
      <PWNInfo />
      <Approve />
      <Bundler />
    </main>
  );
}
