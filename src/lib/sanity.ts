import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
    return builder.image(source).url()
}