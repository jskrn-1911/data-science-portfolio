import React from 'react'
import { urlForImage } from '@/lib/sanityImage';
import BlogCard from '../cards/BlogCard';


type Blog = {
    title: string;
    images?: {
        asset: {
            _type: string;
            _ref: string;
        };
    }[];
};

interface BlogsCardsSectionProps {
    projects: Blog[];
}
const bgColors = ['bg-light-sky-blue', 'bg-pastel-yellow', 'bg-light-pink'];

const BlogsCardsSection: React.FC<BlogsCardsSectionProps> = ({ projects }) => {
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <BlogCard
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

export default BlogsCardsSection