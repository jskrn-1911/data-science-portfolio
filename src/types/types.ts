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

export interface FeatureProjectSectionProps {
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

export interface FeatureProjectCardProps {
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