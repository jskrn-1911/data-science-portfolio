"use client"
import React, { useRef, useState } from 'react'

interface FAQCardProps {
    question?: string;
    answer?: string;
}
const FAQCard:React.FC<FAQCardProps> = ({question, answer}) => {
    const contentRef = useRef<HTMLParagraphElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {

        if (contentRef.current && contentContainerRef.current) {
            if(contentContainerRef.current.style.height === '0px' || contentContainerRef.current.style.height === '') {
                contentContainerRef.current.style.height = `${contentRef.current.scrollHeight}px`;
            }
            else {
                contentContainerRef.current.style.height = '0px';
            }
        }
        setIsOpen(prev => !prev);
    }


    return (
        <>
            <div className={`border border-black  rounded-[16px] ${isOpen ? 'bg-pastel-yellow' : 'bg-light-sky-blue'} flex flex-col transition-all duration-300 hover-scale`}>
                <button className='cursor-pointer flex items-center p-6 justify-between text-2xl text-black' onClick={toggleAccordion}>
                    {question}
                    <span className={`inline-block size-6 ${isOpen ? '' : '-rotate-45'} transition-all duration-300`}>
                        <svg width="24" height="24" fill="none" id="svg1533868417_191"><path d="M17 7 7 17M7 7l10 10" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </button>
                <div className="transition-all duration-300 overflow-hidden h-0" ref={contentContainerRef}>
                    <p className='text-xl text-black p-6 pt-2' ref={contentRef}>
                       {answer}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FAQCard