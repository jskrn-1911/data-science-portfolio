import { PortableText, PortableTextBlock } from 'next-sanity';
import React from 'react'

interface PortfolioHeadingSectionProps {
    title?: string;
    description?: string;
}
const PortfolioHeadingSection: React.FC<PortfolioHeadingSectionProps> = ({ title, description }) => {
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className=" mb-10">
                        <h1 className='text-[40px] xl:text-[60px] leading-[56px] xl:leading-[70px] text-black px-0.5 font-semibold bg-pastel-yellow w-fit'>
                            {title}
                        </h1>
                        {description && (
                            <p className="text-black text-xl mt-5 md:max-w-[440px]">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioHeadingSection