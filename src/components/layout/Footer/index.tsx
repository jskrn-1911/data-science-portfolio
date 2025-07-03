import Button from '@/components/ui/Button'
import { FooterProps } from '@/types/types'
import Link from 'next/link'
import React from 'react'
import { FaDribbble } from 'react-icons/fa'
import { FaBehance, FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer: React.FC<FooterProps> = ({ heading, subheading, hireMeLink, pageLinks, socialLinks }) => {
    return (
        <>
            <footer className='px-5 md:px-8 bg-black rounded-tl-[16px] rounded-tr-[16px] pt-8 pb-6 md:py-6 space-y-10 md:space-y-[60px]'>
                <div className="flex items-center justify-between flex-col md:flex-row gap-8">
                    <div className="flex items-center flex-col md:flex-row gap-8">
                        {pageLinks.map(link => (
                            <Link key={link.title} href={link.href} className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300">
                                {link.title}
                                <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300" />
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center  gap-4">
                        {socialLinks.map(social => (
                            <Link key={social.platform} href={social.url} target='_blank' className="hover:rotate-[16deg] transition-all duration-300 text-white">
                                {social.platform.toLowerCase() === 'twitter' && <FaXTwitter className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'dribbble' && <FaDribbble className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'instagram' && <FaInstagram className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'linkedin' && <FaLinkedin className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'github' && <FaGithub className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'facebook' && <FaFacebook className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'youtube' && <FaYoutube className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'behance' && <FaBehance className="w-6 h-6" />}
                                {social.platform.toLowerCase() === 'website' && <FaGlobe className="w-6 h-6" />}
                                {/* {!['twitter', 'dribbble', 'instagram', 'linkedin', 'github', 'facebook', 'youtube', 'behance', 'website'].includes(social.platform) && (
                                    <FaGlobe className="w-6 h-6" />
                                )} */}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="text-center space-y-2 md:space-y-4">
                        <h2 className='text-[32px] text-white font-normal'>{heading}</h2>
                        <p className='text-xl text-[#fff9] md:max-w-[440px] w-full mx-auto'>{subheading}</p>
                    </div>
                    <div className="w-fit mx-auto">
                        <Button label="Hire Me!" variant="secondary2" type='link' href={hireMeLink.text} />
                    </div>
                </div>

                <div className="flex items-center flex-col md:flex-row gap-4 justify-between">
                    <p className='text-xl text-white'>
                        {/* Monica */}
                        <span className='text-[#fff9]'>©all rights reserved</span>
                    </p>
                    <div className="flex items-center gap-4 md:gap-8 ">
                        {/* <Link href="#" className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300 whitespace-nowrap">Buy this Template
                            <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300"></div>
                        </Link>
                        <Link href="#" className="text-xl relative p-1 z-2 group text-white hover:text-black transition-all duration-300 whitespace-nowrap">Made in Framer
                            <div className="absolute top-0 left-0 w-[0%] group-hover:w-full bg-white h-full z-[-1] transition-all duration-300"></div>
                        </Link> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer