import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du Site',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du site',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description du site',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'string',
      description: 'Choisissez le logo à afficher sur le site',
      options: {
        list: [
          { title: 'Logo Principal 1', value: 'logo-primary-1.svg' },
          { title: 'Logo Principal 2', value: 'logo-primary-2.svg' },
          { title: 'LetterMark 1', value: 'lettermark-1.svg' },
          { title: 'LetterMark 2', value: 'lettermark-2.svg' },
        ],
        layout: 'radio',
      },
      initialValue: 'logo-primary-2.svg',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icône du site (recommandé: 32x32px)',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Liens Réseaux Sociaux',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Informations de Contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Téléphone',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Adresse',
          type: 'text',
          rows: 2,
        },
      ],
    }),
    defineField({
      name: 'heroText',
      title: 'Texte Hero (Page d\'accueil)',
      type: 'object',
      fields: [
        {
          name: 'tagline',
          title: 'Slogan',
          type: 'string',
          initialValue: 'Excellence • Passion • Performance',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          initialValue: 'Équipe PrepU Canada basée à Montréal',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Paramètres du Site',
        subtitle: 'Configuration générale',
      }
    },
  },
})
