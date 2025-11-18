import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'match',
  title: 'Matchs',
  type: 'document',
  fields: [
    defineField({
      name: 'opponent',
      title: 'Adversaire',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isHome',
      title: 'Match à domicile',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'À venir', value: 'upcoming' },
          { title: 'En cours', value: 'live' },
          { title: 'Terminé', value: 'finished' },
          { title: 'Annulé', value: 'cancelled' },
        ],
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPlayoff',
      title: 'Match éliminatoire',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ourScore',
      title: 'Notre score',
      type: 'number',
      hidden: ({ document }) => document?.status === 'upcoming',
    }),
    defineField({
      name: 'opponentScore',
      title: 'Score adverse',
      type: 'number',
      hidden: ({ document }) => document?.status === 'upcoming',
    }),
    defineField({
      name: 'period',
      title: 'Période',
      type: 'string',
      options: {
        list: [
          { title: 'Septembre - Décembre 2025', value: 'period1' },
          { title: 'Janvier - Mars 2026', value: 'period2' },
          { title: 'Éliminatoires', value: 'playoffs' },
        ],
      },
    }),
    defineField({
      name: 'opponentLogo',
      title: 'Logo de l\'adversaire',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'highlights',
      title: 'Faits saillants',
      type: 'url',
      hidden: ({ document }) => document?.status === 'upcoming',
    }),
    defineField({
      name: 'recap',
      title: 'Résumé du match',
      type: 'text',
      rows: 4,
      hidden: ({ document }) => document?.status === 'upcoming',
    }),
  ],
  preview: {
    select: {
      opponent: 'opponent',
      date: 'date',
      isHome: 'isHome',
      ourScore: 'ourScore',
      opponentScore: 'opponentScore',
      status: 'status',
    },
    prepare({ opponent, date, isHome, ourScore, opponentScore, status }) {
      const formattedDate = new Date(date).toLocaleDateString('fr-CA')
      const location = isHome ? 'Domicile' : 'Extérieur'
      const score =
        status === 'finished' ? ` (${ourScore}-${opponentScore})` : ''
      return {
        title: `vs ${opponent}${score}`,
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
    {
      title: 'Date, plus ancien',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
