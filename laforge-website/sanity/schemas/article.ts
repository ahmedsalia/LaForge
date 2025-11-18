import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Articles',
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
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
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
          { title: 'Équipe', value: 'team' },
          { title: 'Joueur', value: 'player' },
          { title: 'Événement', value: 'event' },
          { title: 'Autre', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
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
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'La Forge Basketball',
    }),
    defineField({
      name: 'featured',
      title: 'Article vedette',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare({ title, subtitle, media, publishedAt }) {
      return {
        title,
        subtitle: `${subtitle} - ${new Date(publishedAt).toLocaleDateString('fr-CA')}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date de publication, plus récent',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
