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
    defineField({
      name: 'mvp',
      title: 'MVP du match',
      type: 'reference',
      to: [{ type: 'player' }],
      description: 'Joueur le plus performant du match',
      hidden: ({ document }) => document?.status !== 'finished',
    }),
    defineField({
      name: 'xFactor',
      title: 'X-Factor du match',
      type: 'reference',
      to: [{ type: 'player' }],
      description: 'Joueur clé qui a fait la différence',
      hidden: ({ document }) => document?.status !== 'finished',
    }),
    defineField({
      name: 'teamStats',
      title: 'Statistiques de l\'équipe',
      type: 'object',
      hidden: ({ document }) => document?.status !== 'finished',
      fields: [
        {
          name: 'fgPercentage',
          title: 'Pourcentage de tirs réussis (%)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(100),
        },
        {
          name: 'threePointPercentage',
          title: 'Pourcentage de 3 points (%)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(100),
        },
        {
          name: 'ftPercentage',
          title: 'Pourcentage de lancers francs (%)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(100),
        },
        {
          name: 'totalRebounds',
          title: 'Rebonds totaux',
          type: 'number',
        },
        {
          name: 'assists',
          title: 'Passes décisives',
          type: 'number',
        },
        {
          name: 'steals',
          title: 'Interceptions',
          type: 'number',
        },
        {
          name: 'blocks',
          title: 'Contres',
          type: 'number',
        },
        {
          name: 'turnovers',
          title: 'Pertes de balle',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'playerStats',
      title: 'Statistiques individuelles',
      type: 'array',
      hidden: ({ document }) => document?.status !== 'finished',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'player',
              title: 'Joueur',
              type: 'reference',
              to: [{ type: 'player' }],
            },
            {
              name: 'points',
              title: 'Points',
              type: 'number',
            },
            {
              name: 'rebounds',
              title: 'Rebonds',
              type: 'number',
            },
            {
              name: 'assists',
              title: 'Passes',
              type: 'number',
            },
            {
              name: 'minutesPlayed',
              title: 'Minutes jouées',
              type: 'number',
            },
          ],
          preview: {
            select: {
              player: 'player.name',
              points: 'points',
              rebounds: 'rebounds',
              assists: 'assists',
            },
            prepare({ player, points, rebounds, assists }) {
              return {
                title: player || 'Joueur',
                subtitle: `${points || 0} PTS, ${rebounds || 0} REB, ${assists || 0} AST`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'autoGenerateArticle',
      title: 'Générer automatiquement un article',
      type: 'boolean',
      description: 'Cochez cette case pour créer automatiquement un article d\'actualité pour ce match',
      initialValue: false,
      hidden: ({ document }) => document?.status !== 'finished',
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
