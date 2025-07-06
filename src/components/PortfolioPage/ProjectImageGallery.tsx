import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { SanityImage } from '@/types/portfolio';
import SectionLayout from '../layout/SectionLayout';

interface ProjectImageGalleryProps {
    images: (SanityImage & { title?: string })[];
}

const getCardBgColor = (index: number) => {
    return index === 0
        ? 'bg-light-sky-blue'
        : index === 1
            ? 'bg-pastel-yellow'
            : 'bg-light-pink';
};

const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({ images }) => {
    if (!images?.length) return null;

    return (
        <SectionLayout heading="Project Images">
            <div className="mt-10 rounded-[16px] w-full">
                <div className="flex flex-wrap justify-center gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`p-3 ${getCardBgColor(index)} rounded-[16px] border border-black w-full max-w-[600px] space-y-3`}
                        >
                            <div className="relative w-full h-[300px] md:h-[400px] border border-black rounded-[4px] overflow-hidden">
                                <Image
                                    src={urlFor(img)}
                                    alt={img.title || `Project image ${index + 1}`}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {img.title && (
                                <p className="text-sm text-gray-700 italic bg-light-pink px-3 py-2 rounded w-full break-words text-left xl:text-center">
                                    {img.title}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SectionLayout>
    );
};

export default ProjectImageGallery;
