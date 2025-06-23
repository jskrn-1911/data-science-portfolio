import Button from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import { FaDribbble } from 'react-icons/fa'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <footer className='px-5 md:px-8 bg-black rounded-tl-[16px] rounded-tr-[16px] pt-8 pb-6 md:py-6 space-y-10 md:space-y-[60px]'>
                <div className="flex items-center justify-between flex-col md:flex-row gap-8">
                    <div className="flex items-center flex-col md:flex-row gap-8">
                        <Link href="#" className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300">Portfolio
                            <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300"></div>
                        </Link>
                        <Link href="#" className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300">FAQ
                            <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300"></div>
                        </Link>
                        <Link href="#" className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300">Resume
                            <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300"></div>
                        </Link>
                    </div>
                    <div className="flex items-center  gap-4">
                        <Link href="#" className='hover:rotate-[16deg] transition-all duration-300 text-white'><FaXTwitter className="w-6 h-6" /></Link>
                        <Link href="#" className='hover:rotate-[16deg] transition-all duration-300 text-white'><FaDribbble className="w-6 h-6" /></Link>
                        <Link href="#" className='hover:rotate-[16deg] transition-all duration-300 text-white'><FaInstagram className="w-6 h-6" /></Link>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="text-center space-y-2 md:space-y-4">
                        <h2 className='text-[32px] text-white font-normal'>Ready to Bring Your Vision to Life?</h2>
                        <p className='text-xl text-[#fff9] md:max-w-[440px] w-full mx-auto'>Let’s make something incredible together! Reach out to discuss your project, and let’s create designs that resonate and inspire.</p>
                    </div>
                    <div className="w-fit mx-auto">
                    <Button label="Hire Me!" variant="secondary2"  />
                    </div>
                </div>

                <div className="flex items-center flex-col md:flex-row gap-4 justify-between">
                    <p className='text-xl text-white'>Monica <span className='text-[#fff9]'> ©all rights reserved</span></p>
                    <div className="flex items-center gap-4 md:gap-8 ">
                        <Link href="#" className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300 whitespace-nowrap">Buy this Template
                            <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300"></div>
                        </Link>
                        <Link href="#" className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300 whitespace-nowrap">Made in Framer
                            <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300"></div>
                        </Link>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer