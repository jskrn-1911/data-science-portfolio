import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button';
import { BlogCardProps } from '@/types/blog';
import { GoEye } from 'react-icons/go';
import { urlFor } from '@/lib/sanity';

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, title, background = 'bg-white', buttonLabel = 'Read More', slug, publishedAt, category, views = 0, excerpt, }) => {
    const formattedDate = publishedAt
        ? new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
        : '';
    return (
        <div className={`${background} border border-black rounded-[16px] p-3 space-y-3 hover-scale`}>
            <Image
                src={urlFor(imgSrc)}
                alt="Blog Cover"
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
            <h3 className="text-2xl text-black">{title}</h3>
            {excerpt && <p className="text-gray-700 text-base line-clamp-3">{excerpt}</p>}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                <div className="flex items-center text-gray-700 gap-1 text-sm">
                    <GoEye className="text-base h-4 w-4" />
                    <span>{views}</span>
                </div>
                <div className="max-w-fit">
                    <Button label={buttonLabel} type="link" href={`/blogs/${slug.current}`} variant="secondary" className="whitespace-nowrap" />
                </div>
            </div>
        </div>
    )
}

export default BlogCard