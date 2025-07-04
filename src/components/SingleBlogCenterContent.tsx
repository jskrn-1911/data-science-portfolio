import { PortableText, PortableTextBlock } from 'next-sanity';
import React from 'react'
interface SingleBlogCenterContentProps {
    title: string;
    content?: PortableTextBlock[];
}
const SingleBlogCenterContent: React.FC<SingleBlogCenterContentProps> = ({ title, content }) => {
    return (
        <>
            <div className="order-1 xl:order-2 xl:px-4 shrink-[2] grow">
                <h2 className='text-[32px] p-0.5 bg-pastel-yellow w-fit text-black hidden xl:inline'>{title}</h2>
                {content && (
                    <div className="xl:mt-6 blog-portable-text">
                        <PortableText value={content} />
                    </div>
                )}
            </div>
        </>
    )
}

export default SingleBlogCenterContent