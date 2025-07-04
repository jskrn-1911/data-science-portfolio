import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from './ui/Button'
import { FeaturedBlogCardProps } from '@/types/types'
import { format } from 'date-fns'


const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({ imgSrc, background, slug, title, excerpt, publishedAt, buttonLabel = 'Read More', rightTilte, leftTilte, }) => {
    const isStaticImage = typeof imgSrc !== 'string'

    return (
        <div className={`${background} rounded-[16px] p-3 border border-black space-y-3 will-change-transform ${leftTilte ? 'rotate-[-3deg]' : rightTilte ? 'rotate-[3deg]' : ''} hover-scale`}>
            <Image src={imgSrc} alt="Feature Card Image" width={isStaticImage ? (imgSrc as StaticImageData).width : 600}
                height={isStaticImage ? (imgSrc as StaticImageData).height : 400} className="rounded-sm w-full h-auto object-cover border border-black" />
            <div className="space-y-1 text-center">
                <h3 className="text-2xl text-black">{title}</h3>
                {publishedAt && (
                    <p className="text-sm text-gray-700 italic">
                        {format(new Date(publishedAt), 'dd MMM yyyy')}
                    </p>
                )}
                {excerpt && <p className="text-gray-800 text-sm">{excerpt}</p>}
            </div>
            <div className="w-fit mx-auto">
                <Button label={buttonLabel} variant="secondary" type='link' href={`/blogs/${slug.current}`} />
            </div>
        </div>
    )
}

export default FeaturedBlogCard