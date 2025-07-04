import { defineType, defineField } from 'sanity'

const contactPage = defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({
            name: 'pageName',
            title: 'Page Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'emails',
            title: 'Emails',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add one or more email addresses for contact purposes',
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'contactNumber',
            title: 'Contact number (optional)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add one contact number for contact purposes',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'socialLink',
                    fields: [
                        defineField({
                            name: 'username',
                            title: 'Username',
                            type: 'string',
                        }),
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                        }),
                    ],
                },
            ],
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
});

export default contactPage;