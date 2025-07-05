
import PortfolioCardsSection from '@/components/PortfolioPage/PortfolioCardsSection';
import PortfolioHeadingSection from '@/components/PortfolioPage/PortfolioHeadingSection';
import { fetchPortfolioPage } from '@/lib/fetchers';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    const data = await fetchPortfolioPage();
    return {
        title: data?.metaTitle || 'Portfolio',
        description: data?.metaDescription || '',
        openGraph: {
            title: data?.metaTitle || 'Portfolio',
            description: data?.metaDescription || '',
            images: data?.ogImage ? [{ url: data.ogImage }] : [],
        },
    };
}

const page = async () => {
    const data = await fetchPortfolioPage();
    // console.log("Portfolio Page =>", data);
    return (
        <>
            <PortfolioHeadingSection title={data.title} description={data.description} />
            <PortfolioCardsSection projects={data.projects} />
        </>
    )
}

export default page
