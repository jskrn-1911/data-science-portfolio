import ContactUsFormSection from '@/components/ContactUsFormSection';
import PortfolioHeadingSection from '@/components/PortfolioHeadingSection';
import { fetchContactPage } from '@/lib/fetchers';
import React from 'react'

const page = async () => {
    const data = await fetchContactPage();
    // console.log("Contact Page =>", data);
    return (
        <>
            <PortfolioHeadingSection title={data.title} description={data.description} />
            <ContactUsFormSection emails={data.emails} socialLinks={data.socialLinks} contactNumber={data.contactNumber} />
        </>
    )
}

export default page
