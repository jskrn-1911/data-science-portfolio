import React from 'react'

interface SinglePrjectRightSidebarProps {
    author?: string;
    description?: string;
    publishTime?: string;
    service?: string;
    liveLink?: string;
    githubLink?: string;
    views?: number;
}
const SingleProjectRightSidebar: React.FC<SinglePrjectRightSidebarProps> = ({ author, description, publishTime, service, liveLink, githubLink, views, }) => {
    return (
        <>
            <div className="order-2 xl:order-3 xl:shrink xl:grow xl:max-w-[230px] w-full border border-black bg-white rounded-[16px] p-4 space-y-5">
                {/* <div className="flex items-center xl:items-start justify-between flex-row xl:flex-col"> */}
                {description && (
                    <div className="hidden xl:block mb-4">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Description</h3>
                        <p className="text-base text-black mt-1.5">{description}</p>
                    </div>
                )}
                {publishTime && (
                    <div className="xl:hidden mb-4">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Published on</h3>
                        <p className="text-base text-black mt-1.5">{publishTime}</p>
                    </div>
                )}
                {author && (
                    <div className="xl:mt-2 mb-4">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Author</h3>
                        <p className="text-base text-black mt-1.5 ml-0.5">{author}</p>
                    </div>
                )}
                {service && (
                    <div className="xl:mt-2 mb-4">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Service</h3>
                        <p className="text-base text-black mt-1.5">{service}</p>
                    </div>
                )}
                {liveLink && (
                    <div className="xl:mt-2 mb-4">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Live Link</h3>
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-words text-sm"
                        >
                            {liveLink}
                        </a>
                    </div>
                )}
                {githubLink && (
                    <div className="xl:mt-2 mb-4">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">GitHub</h3>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-words text-sm"
                        >
                            {githubLink}
                        </a>
                    </div>
                )}
                {typeof views === 'number' && (
                    <div className="xl:mt-2">
                        <h3 className="text-xl text-black bg-pastel-yellow w-fit">Views</h3>
                        <p className="text-base text-black mt-1.5">{views}</p>
                    </div>
                )}
                {/* </div> */}
            </div>
        </>
    )
}

export default SingleProjectRightSidebar