import { fetchProjectBySlug } from '@/lib/fetchers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 0;

interface Props {
    params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);

    if (!project) return { title: 'Not found' };

    return {
        title: project.title,
        description: project.description || '',
    };
};

const page = async ({ params }: Props) => {
    const { slug } = await params;
    const project = await fetchProjectBySlug(slug);

    if (!project) return notFound();

    return (
        <main>
            <h1>{project.title}</h1>
            <pre>{JSON.stringify(project, null, 2)}</pre>
        </main>
    );
};

export default page;