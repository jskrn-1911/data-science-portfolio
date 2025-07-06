import Image from 'next/image'
import React from 'react'
import bg_image_dots from '@/assets/images/bg_image_dots.svg'
import { PortableText } from '@portabletext/react'
import { EducationCardProps } from '@/types/types'

const EducationCard: React.FC<EducationCardProps> = ({ background, title, period, description }) => {
    return (
        <div className={`${background} rounded-[16px] p-6 pt-4 border border-black relative hover-scale`}>
            <div className="size-7 absolute top-3 right-3 bg-white border border-black rounded-full overflow-hidden">
                <Image src={bg_image_dots} alt="Background Dots" className="w-full h-full object-center opacity-[0.1]" />
            </div>
            <div className="space-y-1">
                <p className='text-xl text-black'>{period}</p>
                <h3 className='text-2xl text-black'>{title}</h3>
            </div>
            <div className="h-px bg-black my-4 w-full"></div>
            <div className='text-xl text-black'>
                {description?.length > 0 && <PortableText value={description} />}
            </div>
        </div>
    )
}

export default EducationCard