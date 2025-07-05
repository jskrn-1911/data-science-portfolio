import { defineType, defineField } from 'sanity'

const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary of the blog (appears in listings, SEO)',
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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Example: Design, Development, Personal',
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      initialValue: 'Your Name',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post?',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle ON to feature this post on the homepage or blog highlights',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
})

export default blogPost