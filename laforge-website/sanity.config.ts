import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schemaTypes } from './sanity/schemas'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: 'La Forge Basketball',

  projectId: projectId,
  dataset: dataset,

  basePath: '/studio',

  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],

  schema: {
    types: schemaTypes,
  },

  // Configuration pour améliorer les limites d'upload
  form: {
    image: {
      assetSources: (previousAssetSources: any) => {
        return previousAssetSources
      },
    },
  },

  // Augmenter les limites d'upload
  document: {
    productionUrl: async (prev: any, context: any) => {
      return prev
    },
  },
})
