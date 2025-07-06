import { defineType, defineField } from 'sanity'

const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'views',
            title: 'Page Views',
            type: 'number',
            readOnly: true,
            initialValue: 0,
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Detailed Description / Case Study',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Completion Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Project Category',
            type: 'string',
            description: 'All lowercase (e.g. "ai", "ml", "cv")',
            validation: Rule => Rule.required().lowercase(),
        }),
        defineField({
            name: 'service',
            title: 'Service / Category',
            type: 'string',
            description: 'Type of service this project relates to (e.g. Web Design, Branding)',
        }),
        defineField({
            name: 'client',
            title: 'Client Name',
            type: 'string',
        }),
        defineField({
            name: 'technologies',
            title: 'Built Using (Technologies)',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'tools',
            title: 'Tools Used',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'images',
            title: 'Project Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Image Title',
                        }
                    ]
                }
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'liveLink',
            title: 'Live Project Link',
            type: 'url',
            validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
        }),
        defineField({
            name: 'githubLink',
            title: 'GitHub / Code Link',
            type: 'url',
            validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
        }),
        defineField({
            name: 'featured',
            title: 'Featured Project?',
            type: 'boolean',
            initialValue: false,
            description: 'Toggle ON if you want this project to be shown on homepage or featured section',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0',
        },
    },
})

export default project;