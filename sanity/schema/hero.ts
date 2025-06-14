import { defineType, defineField } from 'sanity'

const hero = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Main Heading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hireMe',
            title: 'Hire Me Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Button Label',
                    type: 'string',
                    initialValue: 'Hire Me',
                }),
                defineField({
                    name: 'link',
                    title: 'Button Link',
                    type: 'url',
                    validation: (Rule) => Rule.uri({ allowRelative: true, scheme: ['http', 'https'] }),
                }),
            ],
        }),
        defineField({
            name: 'portfolio',
            title: 'See Portfolio Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Button Label',
                    type: 'string',
                    initialValue: 'See Portfolio',
                }),
                defineField({
                    name: 'link',
                    title: 'Button Link',
                    type: 'url',
                    validation: (Rule) => Rule.uri({ allowRelative: true, scheme: ['http', 'https'] }),
                }),
            ],
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'availableForHire',
            title: 'Available for Hire?',
            type: 'boolean',
            initialValue: true,
        }),
    ],
})

export default hero