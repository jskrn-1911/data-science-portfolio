import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import FAQCard from '../cards/FAQCard'
import { FAQSectionProps } from '@/types/types'

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    return (
        <div id='faqs'>
            <SectionLayout heading="FAQ">
                <div className="md:max-w-[752px] mx-auto w-full space-y-4">
                    {faqs.map((item, index) => (
                        <FAQCard key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </SectionLayout>
        </div>
    )
}

export default FAQSection