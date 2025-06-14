import { defineField, defineType } from "sanity";

const homePage = defineType({
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: 'pageName',
            title: 'Page Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "hero",
            title: "Hero Section",
            type: "reference",
            to: [{ type: "hero" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "feauredProjects",
            title: "Featured Projects",
            type: "array",
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "featuredBlogs",
            title: "Featured Blogs",
            type: "array",
            of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "services",
            title: "Services",
            type: "array",
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
        }),
        defineField({
            name: "education",
            title: "Education",
            type: "array",
            of: [{ type: 'reference', to: [{ type: 'education' }] }],
        }),
        defineField({
            name: "experience",
            title: "Experience",
            type: "array",
            of: [{ type: 'reference', to: [{ type: 'experience' }] }],
        }),
        defineField({
            name: "aboutMe",
            title: "About Me",
            type: "reference",
            to: [{ type: "aboutMe" }],
        }),
        defineField({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [{ type: 'reference', to: [{ type: 'faq' }] }],
        }),
        defineField({
            name: "metaTitle",
            title: "Meta Title",
            type: "string",
            description: "Used for the <title> tag and SEO title.",
            validation: (Rule) => Rule.required().max(60).warning("Try to keep under 60 characters"),
        }),
        defineField({
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
            description: "Used for <meta name='description'>. Appears in search results.",
            validation: (Rule) => Rule.required().max(160).warning("Try to keep under 160 characters"),
        }),
        defineField({
            name: "ogImage",
            title: "Open Graph Image",
            type: "image",
            description: "Image used when sharing on social platforms (recommended size: 1200x630px)",
            options: { hotspot: true },
        }),
    ],
})

export default homePage;