import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
    return builder.image(source).url()
}