import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'player',
  title: 'Joueurs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom complet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo du joueur',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'jerseyNumber',
      title: 'Numéro de maillot',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(99),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          { title: 'Guard', value: 'guard' },
          { title: 'Forward', value: 'forward' },
          { title: 'Center', value: 'center' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Taille',
      type: 'string',
      description: 'Ex: 6\'2"',
    }),
    defineField({
      name: 'weight',
      title: 'Poids (lbs)',
      type: 'number',
    }),
    defineField({
      name: 'birthDate',
      title: 'Date de naissance',
      type: 'date',
    }),
    defineField({
      name: 'age',
      title: 'Âge',
      type: 'number',
    }),
    defineField({
      name: 'nationality',
      title: 'Nationalité',
      type: 'string',
    }),
    defineField({
      name: 'canadianResident',
      title: 'Résident canadien',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'schoolLevel',
      title: 'Niveau scolaire',
      type: 'string',
    }),
    defineField({
      name: 'gpa',
      title: 'GPA',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(4),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'highlightVideo',
      title: 'Vidéo highlights',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'text',
    }),
    defineField({
      name: 'stats',
      title: 'Statistiques',
      type: 'object',
      fields: [
        { name: 'ppg', title: 'Points par match', type: 'number' },
        { name: 'rpg', title: 'Rebonds par match', type: 'number' },
        { name: 'apg', title: 'Passes par match', type: 'number' },
        { name: 'spg', title: 'Interceptions par match', type: 'number' },
        { name: 'bpg', title: 'Contres par match', type: 'number' },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Actif',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
      jerseyNumber: 'jerseyNumber',
    },
    prepare({ title, subtitle, media, jerseyNumber }) {
      return {
        title: `#${jerseyNumber} ${title}`,
        subtitle: subtitle,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Numéro de maillot',
      name: 'jerseyNumberAsc',
      by: [{ field: 'jerseyNumber', direction: 'asc' }],
    },
    {
      title: 'Nom',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
