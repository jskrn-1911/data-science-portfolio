import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const token = process.env.SANITY_API_WRITE_TOKEN;

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
    return builder.image(source).url()
}