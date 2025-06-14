import { defineType, defineField } from 'sanity'

const footer = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
        }),
        defineField({
            name: 'hireMeLink',
            title: 'Hire Me Link',
            type: 'string',
            description: 'Button link to contact page or section',
        }),
        defineField({
            name: 'pageLinks',
            title: 'Page Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'pageLink',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'href', title: 'URL', type: 'string' }), // Allow internal paths or hashes
                    ],
                },
            ],
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
                        defineField({ name: 'platform', title: 'Platform', type: 'string' }),
                        defineField({ name: 'url', title: 'URL', type: 'url' }),
                    ],
                },
            ],
        }),
    ],
});

export default footer;