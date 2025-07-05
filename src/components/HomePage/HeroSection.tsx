import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import { HeroProps } from '@/types/types'
import { urlFor } from '@/lib/sanity'

const HeroSection: React.FC<HeroProps> = ({ heading, subheading, profileImage, location, availableForHire, hireMe, portfolio }) => {
    const imageUrl = profileImage ? urlFor(profileImage) : null
    return (
        <section className='outer-spacing'>
            <div className="main-container">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-x-4 xl:gap-y-4 items-center place-items-center">
                    <div className="xl:me-auto">
                        <div className="text-center xl:text-left md:max-w-[440px] w-full">
                            {availableForHire && (
                                <div className="flex items-center gap-2 justify-center xl:justify-start">
                                    <div className="size-6">
                                        <svg width="24" height="24" fill="none" id="svg365665249_512"><path d="M21 10H3m13-8v4M8 2v4m1 10 2 2 4.5-4.5M7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    <p className='text-xl'>Available for hire</p>
                                </div>
                            )}
                            {/* <h1 className='text-[40px] xl:text-[60px] mt-4 mb-2 font-semibold'>Hi, I'm <span className='bg-pastel-yellow'>Monica</span></h1> */}
                            <h1 className='text-[40px] xl:text-[60px] mt-4 mb-2 font-semibold'>{heading}</h1>
                            <p className='text-xl'>{subheading}</p>
                            <div className="mt-6 mb-6 xl:mb-10 flex items-center gap-3 justify-center xl:justify-start">
                                <Button variant='primary' label={hireMe.label} href={hireMe.link} type="link" />
                                <Button variant='secondary' label={portfolio.label} href={portfolio.link} type="link" />
                            </div>
                            <div className="flex items-center gap-2 justify-center xl:justify-start">
                                <div className="size-6">
                                    <svg width="24" height="24" fill="none" id="svg-1944344151_352"><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                                <p className='text-xl'>{location}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        <div className="p-3 rotate-[3deg] bg-light-pink rounded-[16px] aspect-[1.12_/_1] md:aspect-auto w-full h-auto md:w-[560px] md:h-[500px] border border-black">
                            {imageUrl ? (
                                <Image src={imageUrl} alt="profile" width={560} height={500} className="w-full h-full border border-black rounded-[4px] object-cover object-center" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 rounded-[4px]" />
                            )}
                        </div>
                    </div> */}
                    <div className="transition-transform duration-500 ease-in-out hover:-rotate-3 hover:-translate-y-2">
                        <div className="p-3 rotate-[3deg] bg-light-pink rounded-[16px] aspect-[1.12_/_1] md:aspect-auto w-full h-auto md:w-[560px] md:h-[500px] border border-black shadow-lg hover:shadow-xl transition-all duration-500">
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    alt="profile"
                                    width={560}
                                    height={500}
                                    className="w-full h-full border border-black rounded-[4px] object-cover object-center"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 rounded-[4px]" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection