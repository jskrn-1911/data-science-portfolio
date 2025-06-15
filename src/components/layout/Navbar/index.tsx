'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, Menu, Dribbble, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border rounded-full px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <div className="bg-pink-300 px-2 py-1 font-bold text-black rounded-sm">Monica</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-black">
        <Link href="#">Portfolio</Link>
        <Link href="#">FAQ</Link>
        <Link href="#">Resume</Link>
        <Link href="#"><X className="w-5 h-5" /></Link>
        <Link href="#"><Dribbble className="w-5 h-5" /></Link>
        <Link href="#"><Instagram className="w-5 h-5" /></Link>
        <Link href="#">
          <button className="bg-black text-white px-4 py-2 rounded-full">Hire Me!</button>
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div className="bg-pink-300 px-2 py-1 font-bold text-black rounded-sm">Monica</div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-lg text-black mt-8">
            <Link href="#">Portfolio</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Resume</Link>
            <div className="flex gap-4">
              <Link href="#"><X className="w-6 h-6" /></Link>
              <Link href="#"><Dribbble className="w-6 h-6" /></Link>
              <Link href="#"><Instagram className="w-6 h-6" /></Link>
            </div>
            <Link href="#">
              <button className="bg-black text-white px-6 py-2 rounded-full">Hire Me!</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
