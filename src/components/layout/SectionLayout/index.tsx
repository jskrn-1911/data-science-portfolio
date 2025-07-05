import SectionHeading from '@/components/common/SectionHeading';
import React from 'react'

interface SectionHeadingProps {
    heading: string;
    children?: React.ReactNode;
    className?: string;
}
const SectionLayout:React.FC<SectionHeadingProps> = ({heading, children, className}) => {
    return (
        <>
            <section className={`pt-[80px] md:pt-[60px] outer-spacing ${className? className : ''}`}>
                <div className="main-container">
                    <SectionHeading heading={heading} />
                    {children}
                </div>
            </section>
        </>
    )
}

export default SectionLayout