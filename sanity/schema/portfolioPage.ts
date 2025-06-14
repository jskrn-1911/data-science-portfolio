import { defineField, defineType } from "sanity";

const portfolioPage = defineType({
    name: "portfolioPage",
    title: "Portfolio Page",
    type: "document",
    fields: [
        defineField({
            name: 'pageName',
            title: 'Page Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Portfolio Page Title",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "projects",
            title: "Projects",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
            validation: (Rule) => Rule.required().min(1),
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
    ]
});

export default portfolioPage;