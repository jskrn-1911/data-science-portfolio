import React from 'react'
import Image from 'next/image'
import btn_star_1 from '@/assets/images/btn_star_1.svg'
import btn_star_2 from '@/assets/images/btn_star_2.svg'
import btn_star_3 from '@/assets/images/btn_star_3.svg'
import btn_star_4 from '@/assets/images/btn_star_4.svg'
import Link from 'next/link'


interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | 'link';
  href?: string;
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'primary2' | 'secondary' | 'secondary2';
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, variant, type = "button", href = "#", disable }) => {
  const buttonClasses = variant === 'primary'
    ? 'bg-black text-white relative overflow-hidden z-[2] group'
    : variant === 'primary2'
      ? 'bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300'
      : variant === 'secondary'
        ? 'bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300'
        : variant === 'secondary2'
          ? 'bg-white border border-black text-black relative overflow-hidden z-[2] group transition-all duration-300'
          : 'bg-black text-white';



  function renderHoverEffect() {
    if (variant !== 'primary' && variant !== 'secondary2') return null;
    return (
      <>
        {variant === 'primary' && (
          <>
            <div className="absolute top-0.5 right-1.5 z-[-1] delay-[100ms] -rotate-180 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Image src={btn_star_1} alt="Star 1" className="w-4 h-4" />
            </div>
            <div className="absolute -left-0.5 top-[13px] z-[-1]  -rotate-180 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Image src={btn_star_2} alt="Star 2" className="w-4 h-4" />
            </div>
            <div className="absolute -bottom-[3px] right-[35px] z-[-1] delay-[125ms] -rotate-180 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Image src={btn_star_3} alt="Star 3" className="w-4 h-4" />
            </div>
          </>
        )}
        {variant === 'secondary2' && (
          <>
            <div className="absolute top-0.5 right-1.5 z-[-1] delay-[100ms] -rotate-180 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Image src={btn_star_4} alt="Star 1" className="w-4 h-4" />
            </div>
            <div className="absolute -left-0.5 top-[13px] z-[-1]  -rotate-180 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Image src={btn_star_4} alt="Star 2" className="w-4 h-4" />
            </div>
            <div className="absolute -bottom-[3px] right-[35px] z-[-1] delay-[125ms] -rotate-180 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Image src={btn_star_4} alt="Star 3" className="w-4 h-4" />
            </div>
          </>
        )}
      </>
    )
  }


  if (type === 'link' && typeof href === 'string') {
    return (
      <Link href={href} className={`cursor-pointer block rounded-full text-xl px-5 pt-[11px] pb-[13px] ${buttonClasses} ${className}`}>{label}
        {renderHoverEffect()}
      </Link>
    )
  }
  return (
    <>
      <button  onClick={onClick} className={`cursor-pointer rounded-full text-xl px-5 pt-[11px] pb-[13px] ${buttonClasses} ${className}`} disabled={disable}>{label}
        {renderHoverEffect()}
      </button>
      {/* <button className="rounded-full bg-white border border-black text-xl px-5 pt-[11px] pb-[13px] text-black hover:bg-black hover:text-white transition-all duration-300">See My Portfolio</button> */}
    </>
  )
}

export default Button