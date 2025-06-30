import React from 'react'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import SectionLayout from './layout/SectionLayout'

const ServiceSection = () => {
    return (
        <>
            <SectionLayout heading="My Service">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ServiceCard title="Branding and Identity" background='bg-light-pink' />
                    <ServiceCard title="Print Design" background='bg-pastel-yellow' />
                    <ServiceCard title="Packaging Design" background='bg-light-sky-blue' />
                    <ServiceCard title="Illustration and Art" background='bg-light-pink' />
                </div>
            </SectionLayout>
        </>
    )
}

export default ServiceSection