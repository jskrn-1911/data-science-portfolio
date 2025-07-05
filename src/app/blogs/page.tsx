import BlogsCardsSection from '@/components/BlogPage/BlogsCardsSection';
import BlogsHeadingSection from '@/components/BlogPage/BlogsHeadingSection';
import { fetchBlogPage } from '@/lib/fetchers';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    const data = await fetchBlogPage();
    return {
        title: data?.metaTitle || 'Blogs ',
        description: data?.metaDescription || '',
        openGraph: {
            title: data?.metaTitle || 'Blogs',
            description: data?.metaDescription || '',
            images: data?.ogImage ? [{ url: data.ogImage }] : [],
        },
    };
}

const page = async () => {
    const data = await fetchBlogPage();
    // console.log("Blogs Page =>", data);
    return (
        <>
            <BlogsHeadingSection title={data.title} description={data.description} />
            <BlogsCardsSection blogs={data.blogs} />
        </>
    )
}

export default page