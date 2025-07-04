import { fetchBlogBySlug } from '@/lib/fetchers';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params; 
  const blog = await fetchBlogBySlug(slug);
  
  if (!blog) return { title: 'Not found' };
  
  return {
    title: blog.title,
    description: blog.description || '',
  };
};

const page = async ({ params }: Props) => {
  const { slug } = await params; 
  const blog = await fetchBlogBySlug(slug);
  
  if (!blog) return notFound();
  
  return (
    <main>
      <h1>{blog.title}</h1>
      <pre>{JSON.stringify(blog, null, 2)}</pre>
    </main>
  );
};

export default page;