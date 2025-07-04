import React from 'react'
import PortfolioCard from './PortfolioCard'
import feature_card_image from '@/assets/images/feature_card_image.avif'
import { urlForImage } from '@/lib/sanityImage';

type ImageAsset = {
    _type: string;
    _ref: string;
};

type Project = {
    title: string;
    images?: {
        asset: ImageAsset;
    }[];
};

type BlogItem = {
    title: string;
    coverImage?: {
        asset: ImageAsset;
    };
    slug: {
        current: string;
        _type: 'slug';
    };
};

type CardItem = Project | BlogItem;

interface PortfolioCardsSectionProps {
    projects: CardItem[];
}
const bgColors = ['bg-light-sky-blue', 'bg-pastel-yellow', 'bg-light-pink'];
// Type guard functions to check the type of CardItem
const isProject = (item: CardItem): item is Project => {
    return 'images' in item;
};

const isBlogItem = (item: CardItem): item is BlogItem => {
    return 'coverImage' in item;
};

const PortfolioCardsSection: React.FC<PortfolioCardsSectionProps> = ({ projects }) => {

    const getImageSrc = (project: CardItem): string => {
        if (isProject(project) && project.images?.[0]?.asset) {
            return urlForImage(project.images[0]);
        } else if (isBlogItem(project) && project.coverImage?.asset) {
            return urlForImage(project.coverImage);
        }
        return '/fallback.jpg';
    };
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <PortfolioCard
                                key={index}
                                title={project.title}
                                imgSrc={getImageSrc(project)}
                                background={bgColors[index % bgColors.length]}
                                slug={isBlogItem(project) ? `/blogs/${project.slug.current}` : undefined}
                                buttonLabel={isBlogItem(project) ? 'Read More' : 'View Project'}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioCardsSection