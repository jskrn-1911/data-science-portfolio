import React from 'react'
import ServiceCard from '../ui/cards/ServiceCard'
import SectionLayout from '../layout/SectionLayout'
import { ServiceSectionProps } from '@/types/types'

const ServiceSection: React.FC<ServiceSectionProps> = ({ services }) => {
    const backgrounds = ['bg-light-pink', 'bg-pastel-yellow', 'bg-light-sky-blue']
    return (
        <>
            <SectionLayout heading="My Service">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            background={backgrounds[index % backgrounds.length]}
                        />
                    ))}
                </div>
            </SectionLayout>
        </>
    )
}

export default ServiceSection