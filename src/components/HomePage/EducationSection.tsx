import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import { EducationSectionProps } from '@/types/types'
import EducationCard from '../cards/EducationCard'

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
    return (
        <SectionLayout heading="My Education">
            <div className="max-w-[752px] mx-auto space-y-4">
                {education.map((edu, index) => {
                    const period = edu.currentlyStudying
                        ? `${new Date(edu.startDate).getFullYear()} - Present`
                        : `${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate!).getFullYear()}`

                    return (
                        <EducationCard
                            key={`${edu.degree}-${edu.institution}`}
                            background={
                                index % 3 === 0
                                    ? 'bg-light-pink'
                                    : index % 3 === 1
                                        ? 'bg-light-sky-blue'
                                        : 'bg-pastel-yellow'
                            }
                            title={`${edu.degree} at ${edu.institution}`}
                            description={edu.description}
                            period={period}
                        />
                    )
                })}
            </div>
        </SectionLayout>
    )
}

export default EducationSection