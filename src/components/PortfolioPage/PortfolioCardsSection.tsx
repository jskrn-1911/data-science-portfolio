import React from 'react'
import PortfolioCard from '../cards/PortfolioCard';
import { urlFor } from '@/lib/sanity';
import { PortfolioCardsSectionProps } from '@/types/portfolio';

const bgColors = ['bg-light-sky-blue', 'bg-pastel-yellow', 'bg-light-pink'];

const PortfolioCardsSection: React.FC<PortfolioCardsSectionProps> = ({ projects }) => {
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <PortfolioCard
                                key={index}
                                title={project.title}
                                slug={project.slug}
                                imgSrc={
                                    project.images?.[0]?.asset
                                        ? urlFor(project.images[0])
                                        : '/fallback.jpg'
                                }
                                background={bgColors[index % bgColors.length]}
                                date={project.date}
                                description={project.description}
                                liveLink={project.liveLink}
                                githubLink={project.githubLink}
                                category={project.category}
                                views={project.views}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioCardsSection