import { fetchBlogPage } from '@/lib/fetchers';
import React from 'react'

const page = async () => {
    const data = await fetchBlogPage();
    // console.log("Blogs Page =>", data);
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default page
