import { sanityClient } from './sanity'

export async function fetchNavbar() {
  return sanityClient.fetch(`*[_type == "navbar"][0]{
    logoText,
    menuLinks[]{
      text,
      url
    },
    socialLinks[]{
      platform,
      icon,
      href
    },
    hireMeLink{
      text,
      link
    }
  }`)
}

export async function fetchFooter() {
  return sanityClient.fetch(`*[_type == "footer"][0]{
    heading,
    subheading,
    hireMeLink,
    pageLinks[]{
      title,
      href
    },
    socialLinks[]{
      platform,
      url
    }
  }`)
}

export async function fetchHomePage() {
  return sanityClient.fetch(`*[_type == "homePage"][0]{
    pageName,
    metaTitle,
    metaDescription,
    ogImage,
    
    hero->{
      heading,
      subheading,
      profileImage,
      hireMe {
        label,
        link
        },
      portfolio {
        label,
        link,
        },
      location,
      availableForHire,
    },

    feauredProjects[]->{
      title,
      slug,
      description,
      images,
    },

    featuredBlogs[]->{
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt
    },

    services[]->{
      title,
      description,
      image,
    },

    education[]->{
      degree,
      institution,
      startDate,
      endDate,
      currentlyStudying,
      description,
    },

    experience[]->{
      designation,
      company,
      startDate,
      endDate,
      currentlyWorking,
      description,
    },

    aboutMe->{
      title,
      description,
      images,
      contactButton {
        label,
        link
      },
    },

    faqs[]->{
      question,
      answer
    }
  }`)
}

export async function fetchContactPage() {
  return sanityClient.fetch(`*[_type == "contactPage"][0]{
    pageName,
    title,
    subtitle,
    description,
    emails,
    contactNumber,
    socialLinks,
    metaTitle,
    metaDescription,
    ogImage
  }`)
}

export async function fetchPortfolioPage() {
  return sanityClient.fetch(`*[_type == "portfolioPage"][0]{
    pageName,
    title,
    description,
    metaTitle,
    metaDescription,
    ogImage,
    projects[]->{
      title,
      slug,
      category,
      views,
      date,
      description,
      liveLink,
      githubLink,
      featured,
      images,
    }
  }`)
}

export async function fetchProjectBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    content,
    date,
    service,
    client,
    technologies,
    tools,
    images[]{
     asset->{_id, url},
     title
    },
    liveLink,
    githubLink,
    featured,
    category,
    views,
    }`,
    { slug }
  )
}

export async function fetchBlogPage() {
  return sanityClient.fetch(`*[_type == "blogsPage"][0]{
    pageName,
    title,
    description,
    metaTitle,
    metaDescription,
    ogImage,
    blogs[]->{
      title,
      slug,
      category,
      views,
      excerpt,
      coverImage,
      publishedAt,
      featured,
    }
  }`)
}

export async function fetchBlogBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      content,
      publishedAt,
      categories,
      authorName,
      featured
    }`,
    { slug }
  )
}
