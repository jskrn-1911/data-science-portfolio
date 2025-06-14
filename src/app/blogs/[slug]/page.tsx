import { fetchBlogBySlug } from '@/lib/fetchers'
import { notFound } from 'next/navigation'

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const blog = await fetchBlogBySlug(slug)

    if (!blog) return notFound()
    // console.log("Blog =>", blog);
    return (
        <main>
            <h1>{blog.title}</h1>
            <pre>{JSON.stringify(blog, null, 2)}</pre>
        </main>
    )
}
