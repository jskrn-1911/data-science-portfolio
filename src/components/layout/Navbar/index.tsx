'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, Menu, Dribbble, Instagram } from 'lucide-react';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import Button from '@/components/ui/Button';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';
export default function Navbar() {
  const menuLinksRef = useRef<HTMLDivElement | null>(null);
  const menuLinksContainerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => {

      if (!prev) {
        if (menuLinksRef.current && menuLinksContainerRef.current) {

          menuLinksContainerRef.current.style.height = `${menuLinksRef.current.offsetHeight}px`;

        }
      }
      else {
        if (menuLinksContainerRef.current) {
          menuLinksContainerRef.current.style.height = '0px';
        }
      }
      return !prev
    })
  }

useEffect(() => {
  // Close menu when pathname changes (route navigation)
  setIsOpen(false);
  if (menuLinksContainerRef.current) {
    menuLinksContainerRef.current.style.height = '0px';
  }
}, [pathname]); // Runs whenever the pathname changes
  return (
    // <header className="w-full border rounded-full px-4 py-2 flex items-center justify-between">
    //   {/* Logo */}
    //   <div className="bg-pink-300 px-2 py-1 font-bold text-black rounded-sm">Monica</div>

    //   {/* Desktop Nav */}
    //   <nav className="hidden md:flex items-center gap-6 text-black">
    //     <Link href="#">Portfolio</Link>
    //     <Link href="#">FAQ</Link>
    //     <Link href="#">Resume</Link>
    //     <Link href="#"><X className="w-5 h-5" /></Link>
    //     <Link href="#"><Dribbble className="w-5 h-5" /></Link>
    //     <Link href="#"><Instagram className="w-5 h-5" /></Link>
    //     <Link href="#">
    //       <button className="bg-black text-white px-4 py-2 rounded-full">Hire Me!</button>
    //     </Link>
    //   </nav>

    //   {/* Mobile Menu Icon */}
    //   <button className="md:hidden" onClick={() => setIsOpen(true)}>
    //     <Menu className="w-6 h-6" />
    //   </button>

    //   {/* Mobile Overlay Menu */}
    //   {isOpen && (
    //     <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between rounded-lg p-6">
    //       <div className="flex justify-between items-center">
    //         <div className="bg-pink-300 px-2 py-1 font-bold text-black rounded-sm">Monica</div>
    //         <button onClick={() => setIsOpen(false)}>
    //           <X className="w-7 h-7" />
    //         </button>
    //       </div>

    //       <div className="flex flex-col items-center justify-center gap-6 text-lg text-black mt-8">
    //         <Link href="#">Portfolio</Link>
    //         <Link href="#">FAQ</Link>
    //         <Link href="#">Resume</Link>
    //         <div className="flex gap-4">
    //           <Link href="#"><X className="w-6 h-6" /></Link>
    //           <Link href="#"><Dribbble className="w-6 h-6" /></Link>
    //           <Link href="#"><Instagram className="w-6 h-6" /></Link>
    //         </div>
    //         <Link href="#">
    //           <button className="bg-black text-white px-6 py-2 rounded-full">Hire Me!</button>
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </header>
    <>
      <header className='pt-4 outer-spacing fixed top-0 w-full z-50'>
        <div className={`bg-white main-container py-4 px-4 xl:ps-8 xl:pe-4 border border-black ${isOpen ? 'rounded-[20px] xl:rounded-[60px]' : 'rounded-[60px]'} flex items-stretch xl:items-center justify-between flex-col xl:flex-row transition-all duration-300 overflow-hidden`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="block text-xl leading-7 bg-light-pink font-semibold w-fit p-1 text-black">Monica</Link>
            <button className='cursor-pointer xl:hidden size-10 relative' onClick={toggleMenu}>
                <div className={`rounded-sm will-change-transform origin-[50%_50%_0] h-[3px] bg-black w-8 absolute ${isOpen ? 'top-[calc(50.00000000000002%_-_3px_/_2)] rotate-[135deg]':'top-2'} left-[calc(50.00000000000002%_-_32px_/_2)] transition-all duration-300`}></div>
                <div className={`rounded-sm  origin-[50%_50%_0] h-[3px] bg-black  absolute top-[calc(50.00000000000002%_-_3px_/_2)] ${isOpen ? 'w-0 left-[calc(50.00000000000002%_-_0px_/_2)]' : 'left-[calc(50.00000000000002%_-_32px_/_2)] w-8'} transition-all duration-300`}></div>
                <div className={`rounded-sm will-change-transform origin-[50%_50%_0] h-[3px] bg-black w-8 absolute ${isOpen ? 'top-[calc(50.00000000000002%_-_3px_/_2)] rotate-[-135deg]' :'bottom-2'} left-[calc(50.00000000000002%_-_32px_/_2)] transition-all duration-300`}></div>
            </button>
          </div>
          <div className="overflow-hidden h-0 xl:!h-auto transition-all duration-300" ref={menuLinksContainerRef}>
            <div className={`flex items-center flex-col xl:flex-row gap-8 pb-5 pt-8 xl:pt-0 xl:pb-0 `} ref={menuLinksRef}>
              <div className="flex items-center flex-col xl:flex-row gap-6 xl:gap-8">
                <Link href="/portfolio" className="text-xl relative p-1 z-2 group text-black">Portfolio
                <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-light-sky-blue h-full z-[-1] transition-all duration-300"></div>
                </Link>
                <Link href="#" className="text-xl relative p-1 z-2 group text-black">FAQ
                 <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-light-sky-blue h-full z-[-1] transition-all duration-300"></div>
                 </Link>
                <Link href="#" className="text-xl relative p-1 z-2 group text-black">Resume
                 <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-light-sky-blue h-full z-[-1] transition-all duration-300"></div>
                 </Link>
              </div>
              <div className="flex items-center  gap-4">
                <Link href="#" className='hover:rotate-[16deg] transition-all duration-300 text-black'><FaXTwitter className="w-6 h-6" /></Link>
                <Link href="#" className='hover:rotate-[16deg] transition-all duration-300 text-black'><FaDribbble className="w-6 h-6" /></Link>
                <Link href="#" className='hover:rotate-[16deg] transition-all duration-300 text-black'><FaInstagram className="w-6 h-6" /></Link>
              </div>
              <Button label="Hire Me!" variant="primary" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
