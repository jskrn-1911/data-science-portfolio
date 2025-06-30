
import PortfolioCardsSection from '@/components/PortfolioCardsSection';
import PortfolioHeadingSection from '@/components/PortfolioHeadingSection';
import { fetchPortfolioPage } from '@/lib/fetchers';
import React from 'react'

const page = async () => {
    const data = await fetchPortfolioPage();
    // console.log("Portfolio Page =>", data);
    return (
        <>
        {/* <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div> */}
            <PortfolioHeadingSection title="My Portfolio" description="Browse through the project cards for a quick overview, and click on any project to see detailed insights and creative solutions." />
            <PortfolioCardsSection projects={data.projects}/>
        </>
    )
}

export default page
