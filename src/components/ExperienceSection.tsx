import React from 'react'
import SectionHeading from './SectionHeading'
import SectionLayout from './layout/SectionLayout'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = () => {
    return (
        <>
            <SectionLayout heading="My Experience">
                <div className="max-w-[752px] mx-auto space-y-4">
                    <ExperienceCard
                        background='bg-light-sky-blue'
                        title="Graphic Designer at Creative Solutions"
                        description="My work includes developing innovative website designs, crafting unique branding materials, and producing high-quality promotional content that consistently exceeds client expectations."
                        period="2021 - Present"/>
                    <ExperienceCard
                        background='bg-pastel-yellow'
                        title="Junior Graphic Designer at Branding Inc."
                        description="I assisted in the design and execution of branding packages for new businesses, focusing on logo creation, brand identity, and the development of marketing materials."
                        period="2019 - 2021"/>
                    <ExperienceCard
                        background='bg-light-pink'
                        title="Design Intern at Digital Arts Studio"
                        description="As an intern at Digital Arts Studio, I supported the design team in various projects, gaining hands-on experience in web and app interface design."
                        period="Summer 2018"/>
                </div>
            </SectionLayout>
        </>
    )
}

export default ExperienceSection