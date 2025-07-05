import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from './ui/Button'

interface BlogCardProps {
    imgSrc: StaticImageData | string;
    title: string;
    background: string;
    buttonLabel?: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, title, background, buttonLabel = "See Project" }) => {
    return (
        <>
            <div className={`${background} border border-black rounded-[16px] p-3 space-y-3 hover-scale`}>
                <Image src={typeof imgSrc === 'string' ? imgSrc : imgSrc} alt="Portfolio Card Image"
                    width={534}
                    height={308}
                    className="rounded-sm w-full h-auto object-cover border border-black" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <h3 className='text-2xl text-black'>{title}</h3>
                    <Button label={buttonLabel} variant="secondary" className="whitespace-nowrap w-full sm:w-auto" />
                </div>
            </div>

        </>
    )
}

export default BlogCard