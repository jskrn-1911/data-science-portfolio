import { urlForImage } from '@/lib/sanityImage';
import Image from 'next/image'
import React from 'react'
import { PortableTextBlock } from 'next-sanity';
import SingleBlogLeftSidebar from './SingleBlogLeftSidebar';
import SingleBlogCenterContent from './SingleBlogCenterContent';
import SingleBlogRightSidebar from './SingleBlogRightSidebar';

type ImageAsset = {
    _type: string;
    _ref: string;
};

type blogType = {
    title: string;
    coverImage?: {
        asset: ImageAsset;
    };
    publishedAt: string;
    categories: string[];
    authorName?: string;
    excerpt?: string;
    content?: PortableTextBlock[];
};


interface SingleBlogContentProps {
    blog: blogType
}
const SingleBlogContent: React.FC<SingleBlogContentProps> = ({ blog }) => {
    const localDateTime = new Date(blog.publishedAt).toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true, // use false if you want 24-hour format
    });
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className="w-fit pb-[40px]">
                        <h2 className='text-[32px] p-1 bg-pastel-yellow w-fit text-black inline leading-[calc(100%_+_18px)]'>{blog.title}</h2>
                        <div className="w-[50px] h-[60px] mt-1 ml-10">
                            <svg width="50" height="60" fill="none" id="svg1928487660_1011"><path d="M46.306 49.667a1.5 1.5 0 0 0 .32-2.983l-.32 2.983ZM3.512 10.243a1.5 1.5 0 0 0-2.953.53l2.953-.53ZM35.71 55.22a1.5 1.5 0 0 0 1.696 2.474L35.71 55.22ZM45.981 50l.849 1.237L45.983 50Zm.967-3.839-1.333.688v.001l1.333-.689Zm-3.973-10.974a1.5 1.5 0 1 0-2.666 1.375l2.666-1.375Zm3.492 12.989.16-1.492h-.007a13.866 13.866 0 0 0-.18-.022 50.383 50.383 0 0 1-2.79-.455c-1.88-.36-4.509-.96-7.48-1.914-5.968-1.916-13.19-5.221-18.57-10.77l-2.154 2.087c5.866 6.051 13.615 9.551 19.807 11.54a67.403 67.403 0 0 0 7.834 2.004c.988.19 1.785.317 2.338.397a33.21 33.21 0 0 0 .875.116h.005l.162-1.491ZM17.6 33.522C6.568 22.14 3.934 12.599 3.51 10.244l-2.952.53c.525 2.932 3.432 13.02 14.887 24.838l2.155-2.088Zm19.806 24.172 9.423-6.457-1.696-2.474-9.423 6.457 1.696 2.474Zm9.424-6.457a4.49 4.49 0 0 0 1.45-5.765l-2.666 1.378a1.49 1.49 0 0 1-.482 1.913l1.698 2.474Zm1.45-5.763-5.306-10.287-2.666 1.375 5.306 10.287 2.666-1.375Z" fill="#000"></path></svg>
                        </div>
                    </div>
                    <div className="">
                        {/* <div className="p-3 mx-auto bg-light-pink rounded-[16px] md:aspect-auto h-auto border border-black">*/}
                        <div className="p-3 mx-auto bg-light-pink rounded-[16px] aspect-square w-full h-auto md:w-[700px] md:h-[700px] border border-black">
                            {/* <div className="p-3 mx-auto bg-light-pink rounded-[16px] aspect-[1.12_/_1] md:aspect-auto w-full h-auto md:w-[560px] md:h-[500px] border border-black">                        */}
                            <Image src={blog.coverImage ? urlForImage(blog.coverImage) : '/fallback.jpg'} alt={blog.title} width={800} height={800} className="w-full h-full border border-black rounded-[4px] object-cover object-center" />
                        </div>
                    </div>
                    <div className="mt-10 flex items-start justify-between flex-col xl:flex-row gap-y-4">
                        <SingleBlogLeftSidebar publishTime={localDateTime} categories={blog.categories} />
                        <SingleBlogCenterContent title={blog.title} description={blog.excerpt} content={blog.content} />
                        <SingleBlogRightSidebar publishTime={localDateTime} description={blog.excerpt} author={blog.authorName} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default SingleBlogContent