import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'staff',
  title: 'Staff',
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
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'role',
      title: 'Rôle',
      type: 'string',
      options: {
        list: [
          { title: 'Entraîneur-chef', value: 'head_coach' },
          { title: 'Entraîneur adjoint', value: 'assistant_coach' },
          { title: 'Entraîneur des gardiens', value: 'guard_coach' },
          { title: 'Préparateur physique', value: 'physical_trainer' },
          { title: 'Kinésithérapeute', value: 'physiotherapist' },
          { title: 'Analyste vidéo', value: 'video_analyst' },
          { title: 'Manager', value: 'manager' },
          { title: 'Directeur général', value: 'general_manager' },
          { title: 'Autre', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customRole',
      title: 'Rôle personnalisé',
      type: 'string',
      description: 'Si "Autre" est sélectionné, spécifiez le rôle ici',
      hidden: ({ document }) => document?.role !== 'other',
    }),
    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'experience',
      title: 'Années d\'expérience',
      type: 'number',
    }),
    defineField({
      name: 'specialties',
      title: 'Spécialités',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex: Défense, Offense, Développement des jeunes, etc.',
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
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'achievements',
      title: 'Réalisations',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Titres, certifications, réalisations notables',
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
      subtitle: 'role',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      const roleLabels = {
        head_coach: 'Entraîneur-chef',
        assistant_coach: 'Entraîneur adjoint',
        guard_coach: 'Entraîneur des gardiens',
        physical_trainer: 'Préparateur physique',
        physiotherapist: 'Kinésithérapeute',
        video_analyst: 'Analyste vidéo',
        manager: 'Manager',
        general_manager: 'Directeur général',
        other: 'Autre',
      }
      return {
        title,
        subtitle: roleLabels[subtitle as keyof typeof roleLabels] || subtitle,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre personnalisé',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Nom',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
