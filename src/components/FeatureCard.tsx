import React from 'react'
import feature_card_image from '@/assets/images/feature_card_image.avif'
import Image, { StaticImageData } from 'next/image'
import Button from './ui/Button'

interface FeatureCardProps {
    imgSrc: StaticImageData | string;
    title: string;
    background: string;
    buttonLabel?: string;
    leftTilte?: boolean;
    rightTilte?: boolean;
}
const FeatureCard:React.FC<FeatureCardProps> = ({imgSrc,background,rightTilte, leftTilte, title,buttonLabel="See Project"}) => {
    return (
        <>
            <div className={`${background} rounded-[16px] p-3 border border-black space-y-3 will-change-transform ${leftTilte ? 'rotate-[-3deg]' : rightTilte ? 'rotate-[3deg]' : ''} hover-scale`}>
                <Image src={imgSrc} alt="Feature Card Image" className="rounded-sm w-full h-auto object-cover border border-black" />
                <h3 className='text-2xl text-black text-center'>{title}</h3>
                <div className="w-fit mx-auto">
                <Button label={buttonLabel} variant="secondary" className="" />
                </div>
            </div>
        </>
    )
}

export default FeatureCard