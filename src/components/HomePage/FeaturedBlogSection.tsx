import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import Button from '../ui/Button'
import { FeaturedBlogSectionProps } from '@/types/types'
import { urlFor } from '@/lib/sanity'
import FeaturedBlogCard from '../cards/FeaturedBlogCard'

const FeaturedBlogSection: React.FC<FeaturedBlogSectionProps> = ({ featuredBlogs }) => {

    return (
        <SectionLayout heading="Featured Blogs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredBlogs.map((blog, index) => (
                    <FeaturedBlogCard
                        key={blog.slug?.current || `blog-${index}`}
                        imgSrc={urlFor(blog.coverImage).toString() || ""}
                        slug={blog.slug}
                        title={blog.title}
                        background={
                            index % 3 === 0 ? 'bg-pastel-yellow' :
                                index % 3 === 1 ? 'bg-light-pink' :
                                    'bg-light-sky-blue'
                        }
                        leftTilte={index % 2 !== 0}
                        rightTilte={index % 2 === 0}
                    />
                ))}
            </div>
            <div className="mt-10 w-fit mx-auto">
                <Button variant="secondary" label="Check my Blogs" href="/blogs" type="link" />
            </div>
        </SectionLayout>
    )
}

export default FeaturedBlogSection
