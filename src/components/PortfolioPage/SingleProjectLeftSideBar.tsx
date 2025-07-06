import React from 'react'

interface SingleProjectLeftSidebarProps {
    publishTime: string;
    tools?: string[];
    technologies?: string[];
}

const SingleProjectLeftSidebar: React.FC<SingleProjectLeftSidebarProps> = ({ publishTime, tools, technologies, }) => {
    return (
        <>
            <div className="order-2 xl:order-1 xl:shrink xl:grow xl:max-w-[230px] w-full border border-black bg-white rounded-[16px] p-4">
                <div className="">
                    <h3 className='text-xl text-black bg-pastel-yellow w-fit hidden xl:block'>Pubished on</h3>
                    <p className='text-base text-black mt-1.5 ml-0.5 hidden xl:block'>{publishTime}</p>
                    <div className="xl:mt-5">
                        <h3 className='text-xl text-black bg-pastel-yellow w-fit'>Tools</h3>
                        <div className="mt-1.5">
                            {tools && tools.length > 0 ? (
                                <ul className="list-disc pl-5 flex flex-col sm:flex-row xl:flex-col flex-wrap gap-x-[30px] gap-y-1.5 xl:gap-y-1">
                                    {tools.map((tool, index) => (
                                        <li key={index} className="text-base text-black">{tool}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-lg text-gray-700">No tools listed</p>
                            )}

                        </div>
                    </div>
                    <div className="xl:mt-5">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Technologies</h3>
                        <div className="mt-1.5">
                            {technologies && technologies.length > 0 ? (
                                <ul className="list-disc pl-5 flex flex-col sm:flex-row xl:flex-col flex-wrap gap-x-[30px] gap-y-1.5 xl:gap-y-1">
                                    {technologies.map((tech, index) => (
                                        <li key={index} className="text-base text-black">{tech}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-lg text-gray-700">No technologies listed</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProjectLeftSidebar