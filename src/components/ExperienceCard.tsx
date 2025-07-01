import Image from 'next/image'
import React from 'react'
import bg_image_dots from '@/assets/images/bg_image_dots.svg'

interface ExperienceCardProps {
  background: string;
  title: string;
  period: string;
  description: string;
}
const ExperienceCard:React.FC<ExperienceCardProps> = ({background, title, period, description}) => {
  return (
    <>
      <div className={`${background} rounded-[16px] p-6 pt-4 border border-black relative hover-scale`}>
        <div className="size-7 absolute top-3 right-3 bg-white border border-black rounded-full overflow-hidden">
          <Image src={bg_image_dots} alt="Background Dots" className="w-full h-full object-center opacity-[0.1]" />
        </div>
        <div className="space-y-1">
          <p className='text-xl text-black'>{period}</p>
          <h3 className='text-2xl text-black'>{title}</h3>
        </div>
        <div className="h-px bg-black my-4 w-full"></div>
        <p className='text-xl text-black'>{description}</p>
      </div>

    </>
  )
}

export default ExperienceCard