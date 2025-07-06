import { fetchProjectBySlug } from '@/lib/fetchers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { incrementViewsById } from '@/lib/views';
import SinglePortfolioContent from '@/components/PortfolioPage/SinglePortfolioContent';

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
    console.log("Project Page =>", project);
    await incrementViewsById(project._id);
    return (
        <main>
            <SinglePortfolioContent project={project} />
        </main>
    );
};

export default page;