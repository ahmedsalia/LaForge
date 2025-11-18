import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Galerie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Match', value: 'match' },
          { title: 'Entraînement', value: 'training' },
          { title: 'Événement', value: 'event' },
          { title: 'Portrait d\'équipe', value: 'team' },
          { title: 'Autre', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'videos',
      title: 'Vidéos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Titre',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL de la vidéo',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
      date: 'date',
    },
    prepare({ title, subtitle, media, date }) {
      return {
        title,
        subtitle: `${subtitle} - ${new Date(date).toLocaleDateString('fr-CA')}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date, plus récent',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
