import { sanityClient } from "./sanity";

export async function incrementViewsById(_id: string) {
  return sanityClient
    .patch(_id)
    .setIfMissing({ views: 0 })
    .inc({ views: 1 })
    .commit()
    .catch((err) => console.error('Failed to update views:', err));
}
