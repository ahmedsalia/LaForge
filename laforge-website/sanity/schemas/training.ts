import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'training',
  title: 'Entraînements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lieu',
      type: 'string',
      options: {
        list: [
          { title: 'Pavillon Durocher', value: 'durocher' },
          { title: 'Pavillon Saint-Lambert', value: 'saint-lambert' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Durée (heures)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0.5).max(4),
    }),
    defineField({
      name: 'type',
      title: 'Type d\'entraînement',
      type: 'string',
      options: {
        list: [
          { title: 'Entraînement régulier', value: 'regular' },
          { title: 'Conditionnement physique', value: 'conditioning' },
          { title: 'Tactique', value: 'tactical' },
          { title: 'Tirs', value: 'shooting' },
        ],
      },
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isCancelled',
      title: 'Annulé',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      isCancelled: 'isCancelled',
    },
    prepare({ title, date, location, isCancelled }) {
      const formattedDate = new Date(date).toLocaleDateString('fr-CA')
      return {
        title: isCancelled ? `[ANNULÉ] ${title}` : title,
        subtitle: `${formattedDate} - ${location}`,
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
