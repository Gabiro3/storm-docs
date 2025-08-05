"use client"

import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { CheckIcon, CopyIcon, MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install storm-sdk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <Link
        href="https://storm-pay.vercel.app"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Create a Storm Pay Account{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Build powerful payment experiences with Storm SDK
      </h1>
      <p className="mb-8 md:text-lg text-base max-w-[1200px] text-muted-foreground text-left sm:text-center">
        Welcome to the official documentation for Storm Pay — a secure and scalable digital payments infrastructure. Use the Storm SDK to integrate seamless payment flows, manage wallets, and monitor transactions with ease.
      </p>

      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="https://discord.gg/EgzNm9bx"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Join Community
        </Link>
      </div>
      <span className="sm:flex hidden flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-5 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        <span>npm install storm-sdk</span>
        <button
          onClick={handleCopy}
          className="ml-2 p-1 rounded hover:bg-muted/30 transition"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <CheckIcon className="w-4 h-4 text-green-500" />
          ) : (
            <CopyIcon className="w-4 h-4" />
          )}
        </button>
      </span>
    </div>
  );
}
