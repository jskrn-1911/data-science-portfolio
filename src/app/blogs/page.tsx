import BlogsHeadingSection from '@/components/BlogPage/BlogsHeadingSection';
import PortfolioCardsSection from '@/components/PortfolioPage/PortfolioCardsSection';
import { fetchBlogPage } from '@/lib/fetchers';
import React from 'react'

const page = async () => {
    const data = await fetchBlogPage();
    console.log("Blogs Page =>", data);
    return (
        <>
            {/* <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div> */}
            <BlogsHeadingSection title="My Blogs" description="Browse through the project cards for a quick overview, and click on any project to see detailed insights and creative solutions." />
            <PortfolioCardsSection projects={data.blogs} />
        </>
    )
}

export default page