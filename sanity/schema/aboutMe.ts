import { defineType, defineField } from 'sanity';

const aboutMe = defineType({
    name: 'aboutMe',
    title: 'About Me Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.required().min(3).max(3),
            description: 'Exactly 3 images to showcase in About Me section',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'contactButton',
            title: 'Contact Me Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Button Label',
                    type: 'string',
                    initialValue: 'Contact Me',
                }),
                defineField({
                    name: 'link',
                    title: 'Button Link',
                    type: 'url',
                    validation: (Rule) => Rule.uri({ allowRelative: true, scheme: ['http', 'https'] }),
                }),
            ],
        }),
    ],
});

export default aboutMe;