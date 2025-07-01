import React from 'react'
import SectionLayout from './layout/SectionLayout'
import FAQCard from './FAQCard'

const faqData=[
    {
        question: "What services do you offer?",
        answer: "I specialize in branding, digital and print design, user experience consultation, and more. Whether you’re looking to launch a new brand or spruce up your existing designs, I have the skills to bring your ideas to life."
    },
    {
        question: "How do I start a project with you?",
        answer: "Simply reach out via the contact form on my website. We’ll schedule a consultation to discuss your needs, the scope of your project, and how we can achieve your goals together."
    },
    {
        question: "How long does a typical project take?",
        answer: "The timeline varies based on the project's complexity and scope. Simple designs can take a few days, whereas more involved projects might take several weeks. I strive to work efficiently while ensuring high-quality results."
    },
    {
        question: "Can you work within my budget?",
        answer: "I’m committed to delivering exceptional design solutions that cater to various budgets. Let’s discuss what you have in mind, and I will tailor a proposal that aligns with your financial considerations."
    },
]
const FAQSection = () => {
    return (
        <>
            <SectionLayout heading="FAQ">
                <div className="md:max-w-[752px] mx-auto w-full space-y-4">
                    {faqData.map((item, index) => (
                        <FAQCard key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </SectionLayout>
        </>
    )
}

export default FAQSection