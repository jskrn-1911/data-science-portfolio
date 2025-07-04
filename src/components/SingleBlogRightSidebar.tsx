import React from 'react'

interface SingleBlogRightSidebarProps {
    // description: string;
    author?: string;
    description?: string;
    publishTime?: string;
}
const SingleBlogRightSidebar: React.FC<SingleBlogRightSidebarProps> = ({ author, description, publishTime }) => {
    return (
        <>
            <div className="order-2 xl:order-3 xl:shrink xl:grow xl:max-w-[230px] w-full border border-black bg-white rounded-[16px] p-4">
                <div className="flex items-center xl:items-start justify-between flex-row xl:flex-col">
                    <div className="hidden xl:block">
                        <h3 className='text-xl text-black bg-pastel-yellow w-fit'>Description</h3>
                        <p className='text-base text-black mt-1.5'>{description}</p>
                    </div>
                    <div className="xl:hidden">
                        <h3 className='text-xl text-black bg-pastel-yellow w-fit'>Pubished on</h3>
                        <p className='text-base text-black mt-1.5'>{publishTime}</p>
                    </div>
                    <div className="xl:mt-5">
                        <h3 className='text-xl text-black bg-pastel-yellow w-fit'>Author</h3>
                        <p className='text-base text-black mt-1.5 ml-0.5'>{author}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleBlogRightSidebar