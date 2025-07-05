import React from 'react'
import bg_image_dots from '@/assets/images/bg_image_dots.svg'
import Image from 'next/image'

interface ServiceCardProps {
    background?: string;
    title?: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ background, title }) => {
    return (
        <div className={`${background} border border-black rounded-[16px] h-[160px] flex items-center justify-center relative hover-scale`}>
            <div className="size-7 absolute top-3 right-3 bg-white border border-black rounded-full overflow-hidden">
                <Image src={bg_image_dots} alt="Background Dots" className="w-full h-full object-center opacity-[0.1]" />
            </div>
            <h3 className='text-2xl text-black '>{title}</h3>
        </div>
    )
}

export default ServiceCard