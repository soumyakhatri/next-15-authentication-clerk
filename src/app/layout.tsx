import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "@/components/navigation/navigation";
import Link from "next/link";
import { Home, ShieldCheck } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navigation />
          <div className="ms-5 mt-5 sm:left-8 flex inline-block bg-white/50 backdrop-blur-sm p-2 rounded-lg border border-gray-200/50">
            <Link
              href="/"
              className="px-4 py-2 flex items-center gap-2 rounded-md hover:bg-blue-50 transition-all duration-200 text-gray-600 hover:text-blue-600"
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              href="/admin"
              className="px-4 py-2 flex items-center gap-2 rounded-md hover:bg-blue-50 transition-all duration-200 text-gray-600 hover:text-blue-600"
            >
              <ShieldCheck size={18} />
              <span className="font-medium">Admin</span>
            </Link>
          </div>
          <div className="mt-5">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
