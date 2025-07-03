import React from 'react'
import SectionLayout from './layout/SectionLayout'
import Button from './ui/Button'
import { FeatureProjectSectionProps } from '@/types/types'
import { urlFor } from '@/lib/sanity'
import FeatureProjectCard from './FeatureCard'

const FeatureProjectSection: React.FC<FeatureProjectSectionProps> = ({ featuredProjects }) => {

    return (
        <SectionLayout heading="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredProjects.map((project, index) => (
                    <FeatureProjectCard
                        key={project.slug?.current || `project-${index}`}
                        imgSrc={urlFor(project.images?.[0]).toString() || ""}
                        slug={project.slug}
                        title={project.title}
                        background={
                            index % 3 === 0 ? 'bg-light-sky-blue' :
                                index % 3 === 1 ? 'bg-pastel-yellow' :
                                    'bg-light-pink'
                        }
                        leftTilte={index % 2 === 0}
                        rightTilte={index % 2 !== 0}
                    />
                ))}
            </div>
            <div className="mt-10 w-fit mx-auto">
                <Button variant="secondary" label="Check my Portfolio" href="/portfolio" type="link" />
            </div>
        </SectionLayout>
    )
}

export default FeatureProjectSection
