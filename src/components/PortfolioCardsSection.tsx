import React from 'react'
import PortfolioCard from './PortfolioCard'
import { urlForImage } from '@/lib/sanityImage';


type Project = {
    title: string;
    images?: {
        asset: {
            _type: string;
            _ref: string;
        };
    }[];
};

interface PortfolioCardsSectionProps {
    projects: Project[];
}
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
                                imgSrc={
                                    project.images?.[0]?.asset
                                        ? urlForImage(project.images[0])
                                        : '/fallback.jpg' // optional fallback image
                                }
                                background={bgColors[index % bgColors.length]}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioCardsSection