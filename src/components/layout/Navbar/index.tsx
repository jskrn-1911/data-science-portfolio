'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaYoutube, FaBehance, FaGlobe } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import Button from '@/components/ui/Button';
import { usePathname } from 'next/navigation';
import { NavbarProps } from '@/types/types';

export default function Navbar({ logoText, menuLinks, socialLinks, hireMeLink }: NavbarProps) {
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
    <>
      <header className='pt-4 outer-spacing fixed top-0 w-full z-50'>
        <div className={`bg-white main-container py-4 px-4 xl:ps-8 xl:pe-4 border border-black ${isOpen ? 'rounded-[20px] xl:rounded-[60px]' : 'rounded-[60px]'} flex items-stretch xl:items-center justify-between flex-col xl:flex-row transition-all duration-300 overflow-hidden`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="block text-xl leading-7 bg-light-pink font-semibold w-fit p-1 text-black">{logoText}</Link>
            <button className='cursor-pointer xl:hidden size-10 relative' onClick={toggleMenu}>
              <div className={`rounded-sm will-change-transform origin-[50%_50%_0] h-[3px] bg-black w-8 absolute ${isOpen ? 'top-[calc(50.00000000000002%_-_3px_/_2)] rotate-[135deg]' : 'top-2'} left-[calc(50.00000000000002%_-_32px_/_2)] transition-all duration-300`}></div>
              <div className={`rounded-sm  origin-[50%_50%_0] h-[3px] bg-black  absolute top-[calc(50.00000000000002%_-_3px_/_2)] ${isOpen ? 'w-0 left-[calc(50.00000000000002%_-_0px_/_2)]' : 'left-[calc(50.00000000000002%_-_32px_/_2)] w-8'} transition-all duration-300`}></div>
              <div className={`rounded-sm will-change-transform origin-[50%_50%_0] h-[3px] bg-black w-8 absolute ${isOpen ? 'top-[calc(50.00000000000002%_-_3px_/_2)] rotate-[-135deg]' : 'bottom-2'} left-[calc(50.00000000000002%_-_32px_/_2)] transition-all duration-300`}></div>
            </button>
          </div>
          <div className="overflow-hidden h-0 xl:!h-auto transition-all duration-300" ref={menuLinksContainerRef}>
            <div className={`flex items-center flex-col xl:flex-row gap-8 pb-5 pt-8 xl:pt-0 xl:pb-0 `} ref={menuLinksRef}>
              <div className="flex items-center flex-col xl:flex-row gap-6 xl:gap-8">
                {menuLinks.map(link => (
                  <Link key={link.url} href={link.url} className="text-xl relative p-1 z-2 group text-black">
                    {link.text}
                    <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-light-sky-blue h-full z-[-1] transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map(social => (
                  <Link key={social.platform} href={social.href} target='_blank' className="hover:rotate-[16deg] transition-all duration-300 text-black">
                    {social.icon.toLowerCase() === 'twitter' && <FaXTwitter className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'dribbble' && <FaDribbble className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'instagram' && <FaInstagram className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'linkedin' && <FaLinkedin className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'github' && <FaGithub className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'facebook' && <FaFacebook className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'youtube' && <FaYoutube className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'behance' && <FaBehance className="w-6 h-6" />}
                    {social.icon.toLowerCase() === 'website' && <FaGlobe className="w-6 h-6" />}
                  </Link>
                ))}
              </div>
              <Button label={hireMeLink.text} variant="primary" type="link" href={hireMeLink.link} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
