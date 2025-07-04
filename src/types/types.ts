import { PortableTextBlock } from 'next-sanity';
import { StaticImageData } from 'next/image'

export interface NavbarProps {
    logoText: string;
    menuLinks: { text: string; url: string }[];
    socialLinks: { platform: string; icon: string; href: string }[];
    hireMeLink: { text: string; link: string };
}
export interface FooterProps {
    heading: string;
    subheading: string;
    hireMeLink: {
        text: string;
        link: string;
    };
    pageLinks: {
        title: string;
        href: string;
    }[];
    socialLinks: {
        platform: string;
        url: string;
    }[];
}

export interface HeroProps {
    heading: string;
    subheading: string;
    profileImage: string; // This will be the image URL
    location: string;
    availableForHire: boolean;
    hireMe: { label: string; link: string };
    portfolio: { label: string; link: string };
}

export interface FeaturedProjectSectionProps {
    featuredProjects: {
        title: string;
        slug: {
            _type: 'slug';
            current: string;
        };
        description: string;
        images: { asset: { url: string } }[];
    }[]
}

export interface FeaturedProjectCardProps {
    imgSrc: StaticImageData | string;
    title: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    background: string;
    buttonLabel?: string;
    leftTilte?: boolean;
    rightTilte?: boolean;
}

export interface FeaturedBlogSectionProps {
    featuredBlogs: {
        title: string;
        slug: {
            _type: 'slug';
            current: string;
        };
        excerpt: string;
        coverImage: {
            asset: {
                url: string;
            };
        };
        publishedAt: string;
    }[]
}

export interface FeaturedBlogCardProps {
    imgSrc: StaticImageData | string;
    title: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    excerpt?: string;
    publishedAt?: string;
    background: string;
    buttonLabel?: string;
    leftTilte?: boolean;
    rightTilte?: boolean;
}

export interface ServiceSectionProps {
    services: {
        title: string
        description?: string
        image?: {
            asset: {
                url: string
            }
        }
    }[]
}

export interface ExperienceSectionProps {
    experience: {
        designation: string
        company: string
        startDate: string
        endDate?: string
        currentlyWorking?: boolean
        description: PortableTextBlock[]
    }[]
}

export interface ExperienceCardProps {
    background: string;
    title: string;
    period: string;
    description: PortableTextBlock[];
}

export interface EducationSectionProps {
    education: {
        degree: string
        institution: string
        startDate: string
        endDate?: string
        currentlyStudying?: boolean
        description: PortableTextBlock[]
    }[]
}

export interface EducationCardProps {
    background: string
    title: string
    period: string
    description: PortableTextBlock[]
}

export interface AboutMeProps {
    title: string;
    description: PortableTextBlock[];
    images: { asset: { url: string } }[];
    contactButton: {
        label: string;
        link: string;
    };
}

export interface FAQSectionProps {
    faqs: {
        question: string
        answer: PortableTextBlock[]
    }[]
}

export interface FAQCardProps {
    question: string;
    answer: PortableTextBlock[];
}

export interface ContactPageProps {
    pageName?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    emails?: string[];
    contactNumber?: string;
    socialLinks?: {
        platform: string;
        url: string;
        username?: string;
    }[];
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: any; // or use ImageType if available
}

export interface SocialLink {
    platform: string;
    url: string;
    username?: string;
    icon?: string;
}

export interface ContactUsFormSectionProps {
    emails?: string[];
    socialLinks?: SocialLink[];
    contactNumber?: string;
}