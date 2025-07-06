import React from 'react'

interface SingleBlogLeftSidebarProps {
    publishTime: string;
    categories?: string[];
}
const SingleBlogLeftSidebar: React.FC<SingleBlogLeftSidebarProps> = ({ publishTime, categories }) => {
   
    return (
        <>
            <div className="order-2 xl:order-1 xl:shrink xl:grow xl:max-w-[230px] w-full border border-black bg-white rounded-[16px] p-4">
                <div className="">
                    <h3 className='text-xl text-black bg-pastel-yellow w-fit hidden xl:block'>Pubished on</h3>
                    <p className='text-base text-black mt-1.5 ml-0.5 hidden xl:block'>{publishTime}</p>
                    <div className="xl:mt-5">
                        <h3 className='text-xl text-black bg-pastel-yellow w-fit'>categories</h3>
                        <div className="mt-1.5">
                            {categories && categories.length > 0 ? (
                                <ul className='list-disc pl-5 flex flex-col sm:flex-row xl:flex-col flex-wrap gap-x-[30px] gap-y-1.5 xl:gap-y-1'>
                                    {categories.map((category, index) => (
                                        <li key={index} className='text-base text-black'>{category}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='text-lg text-gray-700'>No categories available</p>
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleBlogLeftSidebar