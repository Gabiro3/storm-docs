import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Bricolage_Grotesque } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Storm Pay | SDK Documentation",
  metadataBase: new URL("https://stormpay.vercel.app/"),
  description:
    "Comprehensive SDK documentation for Storm Pay. Learn how to integrate Storm Pay SDK into your applications with detailed guides and examples.",
  icons: {
    icon: "/storm_logo.png", // ✅ Favicon path in public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${bricolage.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
