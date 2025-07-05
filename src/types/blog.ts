import { PortableTextBlock } from 'next-sanity';

export interface SanityImage {
  asset: {
    _type: string;
    _ref: string;
  };
}

// export interface PortableTextBlock {
//   _type: string;
//   [key: string]: any;
// }

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  excerpt: string;
  views?: number;
  coverImage: SanityImage;
  content: PortableTextBlock[];
  publishedAt: string; 
  category: string;
  categories?: string[];
  authorName?: string;
  featured?: boolean;
}

export interface BlogsCardsSectionProps{
    blogs: BlogPost[]
}

export interface BlogCardProps {
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  imgSrc: SanityImage;
  background: string;
  buttonLabel?: string;
  publishedAt?: string;
  category?: string;
  views?: number;
  excerpt?: string;
}