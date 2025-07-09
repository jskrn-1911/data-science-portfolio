import type { Metadata } from "next";
import "../../styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fetchFooter, fetchNavbar } from "@/lib/fetchers";


export const metadata: Metadata = {
  title: "Portfolio | Sanity | Next.js",
  description: "Portfolio website created with Sanity and Next.js",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navbarData = await fetchNavbar();
  const footerData = await fetchFooter();

  // console.log("<<::testing for fetcher::>>", footerData);
  return (
    <html lang="en">
      <body className={`antialiased font-outfit text-base font-normal relative text-black `}>
        <div className="absolute inset-0 z-[-1] opacity-[.1] bg-dots h-full"></div>
        <Navbar {...navbarData} />
        <main className="py-[120px] xl:pt-[140px]">
          {children}
        </main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}
