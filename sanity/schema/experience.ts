import { defineType, defineField } from 'sanity'

const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'designation',
            title: 'Designation / Role',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            hidden: ({ parent }) => parent?.currentlyWorking === true,
        }),
        defineField({
            name: 'currentlyWorking',
            title: 'Currently Working Here?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Describe your responsibilities, achievements, etc.',
        }),
    ],
    preview: {
        select: {
            title: 'designation',
            subtitle: 'company',
        },
    },
})

export default experience