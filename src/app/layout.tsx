import type { Metadata } from "next";
import "../styles/globals.css";

import Navbar from "@/components/layout/Navbar";


export const metadata: Metadata = {
  title: "Portfolio | Sanity | Next.js",
  description: "Portfolio website created with Sanity and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased font-outfit text-base font-normal relative `}>
        <div className="absolute inset-0 z-[-1] opacity-[.1] bg-dots h-full"></div>
        <Navbar />  {/* ✅ Navbar visible on ALL pages */}
        {children}
      </body>
    </html>
  );
}
