import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, FileTextIcon, ScrollTextIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center text-sm text-muted-foreground">
            Built by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://stormpay_rw.vercel.app"
            >
              Storm Pay Team
            </Link>
            .
            <br className="sm:hidden" />
            <span className="block sm:inline mt-2 sm:mt-0">
              © {new Date().getFullYear()} Storm Pay. All rights reserved.
            </span>
          </p>

        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://docs.google.com/document/d/1GNd-jxyb5CaDn1kvKJmeidmWQPtpMKKXvQ4RQ_dJ18k/edit?usp=sharing"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <FileTextIcon className="h-4 w-4 mr-2" />
        Privacy Policy
      </Link>

      <Link
        href="https://docs.google.com/document/d/1GNd-jxyb5CaDn1kvKJmeidmWQPtpMKKXvQ4RQ_dJ18k/edit?usp=sharing"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <ScrollTextIcon className="h-4 w-4 mr-2" />
        Terms of Use
      </Link>
    </>
  );
}
