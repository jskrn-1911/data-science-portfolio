import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from '../Button'
import { FeaturedProjectCardProps } from '@/types/types'


const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ imgSrc, background, slug, rightTilte, leftTilte, title, buttonLabel = "See Project" }) => {
    const isStaticImage = typeof imgSrc !== 'string'

    return (
        <>
            <div className={`${background} rounded-[16px] p-3 border border-black space-y-3 will-change-transform ${leftTilte ? 'rotate-[-3deg]' : rightTilte ? 'rotate-[3deg]' : ''} hover-scale`}>
                <Image src={imgSrc} alt="Feature Card Image" width={isStaticImage ? (imgSrc as StaticImageData).width : 600}
                    height={isStaticImage ? (imgSrc as StaticImageData).height : 400} className="rounded-sm w-full h-auto object-cover border border-black" />
                <h3 className='text-2xl text-black text-center'>{title}</h3>
                <div className="w-fit mx-auto">
                    <Button label={buttonLabel} variant="secondary" type='link' href={`/portfolio/${slug.current}`} />
                </div>
            </div>
        </>
    )
}

export default FeaturedProjectCard