import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from '../ui/Button';
import { PortfolioCardProps } from '@/types/portfolio';
import { GoEye } from "react-icons/go";

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imgSrc, title, background, buttonLabel = "Read More", slug, date, category, views }) => {
    const formattedDate = date
        ? new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
        : '';
    return (
        <>
            <div className={`${background} border border-black rounded-[16px] p-3 space-y-3 hover-scale`}>
                <Image src={typeof imgSrc === 'string' ? imgSrc : imgSrc} alt="Portfolio Card Image"
                    width={534}
                    height={308}
                    className="rounded-sm w-full h-auto object-cover border border-black"
                />
                <div className="flex items-center justify-between text-sm text-gray-600 px-1">
                    <span>{formattedDate}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium border border-black">
                        {category}
                    </span>
                </div>
                <h3 className='text-2xl text-black'>{title}</h3>
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
                    <div className="flex items-center text-gray-700 gap-1 text-sm">
                        <GoEye className="text-base h-4 w-4" />
                        <span>{views ?? 0}</span>
                    </div>
                    <div className="max-w-fit">
                        <Button label={buttonLabel} type='link' href={`/portfolio/${slug.current}`} variant="secondary" className="whitespace-nowrap w-full sm:w-auto" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PortfolioCard