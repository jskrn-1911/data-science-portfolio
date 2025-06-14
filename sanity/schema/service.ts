import { defineType, defineField } from 'sanity'

const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Service Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Optional Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Use this to control display order (lower number = higher priority)',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
});

export default service;