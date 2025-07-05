import React from 'react'

interface BlogsHeadingSectionProps {
    title?: string;
    description?: string;
}
const BlogsHeadingSection:React.FC<BlogsHeadingSectionProps> = ({title, description}) => {
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className=" mb-10">
                        <h1 className='text-[40px] xl:text-[60px] leading-[56px] xl:leading-[70px] text-black px-0.5 font-semibold bg-pastel-yellow w-fit'>{title}</h1>
                        <p className='text-black text-xl mt-5 md:max-w-[440px]'>{description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsHeadingSection