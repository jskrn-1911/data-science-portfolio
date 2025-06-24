import React from 'react'
// import feature_card_image from '@/assets/images/feature_card_image.avif'
import Image, { StaticImageData } from 'next/image'
import Button from './ui/Button'

interface PortfolioCardProps {
    imgSrc: StaticImageData | string;
    title: string;
    background: string;
    buttonLabel?: string;
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({ imgSrc, title, background, buttonLabel = "See Project" }) => {
    return (
        <>
            <div className={`${background} border border-black rounded-[16px] p-3 space-y-3 hover-scale`}>
                <Image src={imgSrc} alt="Portfolio Card Image" className="rounded-sm w-full h-auto object-cover border border-black" />
                <div className="flex items-center justify-between gap-2">
                    <h3 className='text-2xl text-black '>{title}</h3>
                    <Button label={buttonLabel} variant="secondary" className="" />
                </div>
            </div>

        </>
    )
}

export default PortfolioCard