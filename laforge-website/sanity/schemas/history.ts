import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'history',
  title: 'Notre Histoire',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
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
      name: 'year',
      title: 'Année',
      type: 'number',
      description: 'Année de l\'événement (optionnel)',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Fondation', value: 'foundation' },
          { title: 'Moment clé', value: 'milestone' },
          { title: 'Victoire', value: 'victory' },
          { title: 'Expansion', value: 'expansion' },
          { title: 'Autre', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Ordre chronologique (du plus ancien au plus récent)',
    }),
    defineField({
      name: 'featured',
      title: 'Moment vedette',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      media: 'mainImage',
    },
    prepare({ title, year, media }) {
      return {
        title: year ? `${year} - ${title}` : title,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre chronologique',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Année',
      name: 'yearAsc',
      by: [{ field: 'year', direction: 'asc' }],
    },
  ],
})
