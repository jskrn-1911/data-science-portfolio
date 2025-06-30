import ContactUsFormSection from '@/components/ContactUsFormSection';
import PortfolioHeadingSection from '@/components/PortfolioHeadingSection';
import { fetchContactPage } from '@/lib/fetchers';
import React from 'react'

const page = async () => {
    const data = await fetchContactPage();
    // console.log("Contact Page =>", data);
    return (
        <>
            {/* <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div> */}
            <PortfolioHeadingSection title="My Portfolio" description="Have a project in mind or a question? Reach out via the form below, email me directly, or connect with me on social media." />
                <ContactUsFormSection/>
        </>
    )
}

export default page
