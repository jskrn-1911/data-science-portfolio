import { StaticImageData } from "next/image";
import { PortableTextBlock } from 'next-sanity';

export interface SanityImage {
  asset: {
    _type: string;
    _ref?: string;
    _id?: string;
    url?: string;
  };
  title?: string;
}


// export interface PortableTextBlock {
//   _type: string;
//   [key: string]: any;
// }

export interface Project {
  _id?: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  content: PortableTextBlock[];
  date: string;
  service?: string;
  client?: string;
  technologies?: string[];
  tools?: string[];
  images: SanityImage[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  category?: string;
  views?: number;
  authorName?: string | undefined;
}

export interface PortfolioCardsSectionProps {
  projects: Project[];
}

export interface PortfolioCardProps {
  imgSrc: StaticImageData | string;
  title: string;
  background: string;
  buttonLabel?: string;
  liveLink?: string;
  githubLink?: string;
  date?: string;
  description?: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  category?: string;
  views?: number;
}

