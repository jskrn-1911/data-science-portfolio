import React from 'react'
import SectionLayout from './layout/SectionLayout'
import ExperienceCard from './ExperienceCard'
import { ExperienceSectionProps } from '@/types/types'

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
    return (
        <SectionLayout heading="My Experience">
            <div className="max-w-[752px] mx-auto space-y-4">
                {experience.map((exp, index) => {
                    const period = exp.currentlyWorking
                        ? `${new Date(exp.startDate).getFullYear()} - Present`
                        : `${new Date(exp.startDate).getFullYear()} - ${new Date(exp.endDate!).getFullYear()}`

                    return (
                        <ExperienceCard
                            key={`${exp.designation}-${exp.company}`}
                            background={index % 3 === 0
                                ? 'bg-light-sky-blue'
                                : index % 3 === 1
                                    ? 'bg-pastel-yellow'
                                    : 'bg-light-pink'}
                            title={`${exp.designation} at ${exp.company}`}
                            description={exp.description}
                            period={period}
                        />
                    )
                })}
            </div>
        </SectionLayout>
    )
}

export default ExperienceSection