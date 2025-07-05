import React from 'react'
import BlogCard from '../cards/BlogCard';
import { BlogPost } from '@/types/blog';

interface BlogsCardsSectionProps {
    blogs: BlogPost[];
}
const bgColors = ['bg-light-sky-blue', 'bg-pastel-yellow', 'bg-light-pink'];

const BlogsCardsSection: React.FC<BlogsCardsSectionProps> = ({ blogs }) => {
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={blog.slug.current}
                                title={blog.title}
                                slug={blog.slug}
                                excerpt={blog.excerpt}
                                imgSrc={blog.coverImage}
                                background={bgColors[index % bgColors.length]}
                                buttonLabel="Read More"
                                publishedAt={blog.publishedAt}
                                category={blog.category}
                                views={blog.views}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsCardsSection