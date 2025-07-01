import React from 'react'
import SectionLayout from './layout/SectionLayout'
import Image from 'next/image'
import profile_img from '@/assets/images/profile_img.avif'
import Button from './ui/Button'

const aboutImages=[
    {
        imgSrc:profile_img,
        rotate:'rotate-[-15deg]' ,
        background:'bg-light-sky-blue',
        zIndex: 'z-[2]'
    },
    {
        imgSrc:profile_img,
        rotate:'rotate-[15deg]' ,
        background:'bg-pastel-yellow',
        zIndex: 'z-[8]'
    },
    {
        imgSrc:profile_img,
        rotate:'rotate-[0deg]' ,
        background:'bg-light-pink',
        zIndex: 'z-10'
    },
]
const AboutSection = () => {
    return (
        <>
            <SectionLayout heading="About Me" className="overflow-hidden xl:overflow-visible">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-4 items-center">
                    <div className="p-[26px] sm:p-[60x] xl:p-[26px] md:pb-[50px]">
                        <div className="p-[26px] md:p-0 aspect-square w-full mx-auto h-auto md:w-[466px] md:h-[466px] relative">
                            {aboutImages.map((item, index) => (

                                <div key={index} className={`p-3 ${item.background} ${item.rotate} ${item.zIndex} absolute inset-0  rounded-[16px]  aspect-square w-full h-auto md:w-[466px] md:h-[466px] border border-black`}>
                                <Image src={item.imgSrc} alt="profile" className="w-full h-full border border-black rounded-[4px] object-cover object-center" />
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:ms-10">
                        <p className='text-black text-xl '>Hello! I’m Monica, a graphic designer based in sunny Los Angeles with a knack for bringing creative visions to life. With over three years of professional experience, I’ve honed my skills in both digital and print media, crafting visually compelling designs that not only look beautiful but also drive results.</p>
                        <p className='text-black text-xl mt-4'>I love collaborating with clients and creatives alike to push boundaries and produce work that not only meets but exceeds expectations. If you’re looking for someone who is passionate about design and dedicated to professionalism, let’s connect and create something amazing together!</p>
                        <div className="mt-6">
                            <Button variant='secondary' label="Contact Me" />
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </>
    )
}

export default AboutSection