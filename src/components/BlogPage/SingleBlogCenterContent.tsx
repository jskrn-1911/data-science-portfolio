import { PortableText, PortableTextBlock } from 'next-sanity';
import React from 'react'
import BlogsHeadingSection from './BlogsHeadingSection';
interface SingleBlogCenterContentProps {
    title: string;
    content?: PortableTextBlock[];
    description?: string;
}
const SingleBlogCenterContent: React.FC<SingleBlogCenterContentProps> = ({ title, content, description }) => {
    return (
        <>
            <div className="order-1 xl:order-2 xl:px-4 shrink-[2] grow">
                <h2 className='text-[32px] p-0.5 bg-pastel-yellow w-fit text-black hidden xl:inline'>{title}</h2>
                {description && (
                    <div className="block xl:hidden border border-black bg-white rounded-[16px] p-4 mt-4 mb-6">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Description</h3>
                        <p className="text-black text-base mt-2">{description}</p>
                    </div>
                )}
                {content && (
                    <>
                        {content && (
                            <p className="text-sm text-gray-700 italic mt-6 mb-2 bg-light-pink inline-block px-2 py-1 rounded">
                                 Ready to dive deep? Don't worry, no life jackets required.
                            </p>
                        )}
                        <div className="xl:mt-6 blog-portable-text">
                            <PortableText value={content} />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default SingleBlogCenterContent