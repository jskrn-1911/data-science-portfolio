import { fetchProjectBySlug } from '@/lib/fetchers'
import { notFound } from 'next/navigation'

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const project = await fetchProjectBySlug(slug)

    if (!project) return notFound()
    // console.log("Project =>", project);
    return (
        <main>
            <h1>{project.title}</h1>
            <pre>{JSON.stringify(project, null, 2)}</pre>
        </main>
    )
}
