import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image | undefined): ImageUrlBuilder | null => {
  if (!source?.asset?._ref) {
    return null
  }
  return imageBuilder?.image(source).auto('format').fit('max')
}
