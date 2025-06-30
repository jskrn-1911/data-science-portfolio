import type { Metadata } from "next";
import "../styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "Portfolio | Sanity | Next.js",
  description: "Portfolio website created with Sanity and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased font-outfit text-base font-normal relative text-black `}>
        <div className="absolute inset-0 z-[-1] opacity-[.1] bg-dots h-full"></div>
        <Navbar />  {/* ✅ Navbar visible on ALL pages */}
        <main className="py-[120px] xl:pt-[140px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
