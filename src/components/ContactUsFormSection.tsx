'use client';
import { useState } from 'react';
import Link from 'next/link'
import React from 'react'
import Button from './ui/Button'
import { ContactUsFormSectionProps } from '@/types/types'
import { FaXTwitter, FaDribbble, FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaYoutube, FaBehance, FaGlobe } from "react-icons/fa6";

const ContactUsFormSection: React.FC<ContactUsFormSectionProps> = ({ emails, socialLinks, contactNumber }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const data = await res.json();
            if (data.success) {
                setResponseMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage('Something went wrong. Try again later.');
            }
        } catch (error) {
            console.error(error);
            setResponseMessage('Server error. Try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <section className={`outer-spacing `}>
                <div className="main-container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            {emails?.length && (
                                <div className="space-y-4">
                                    <h3 className="text-black text-2xl bg-pastel-yellow p-1 w-fit">Email</h3>
                                    {emails.map((email, idx) => (
                                        <p key={idx} className="text-black text-xl">{email}</p>
                                    ))}
                                </div>
                            )}
                            {contactNumber && (
                                <div className="space-y-4">
                                    <h3 className="text-black text-2xl bg-pastel-yellow p-1 w-fit">Phone</h3>
                                    <p className="text-black text-xl">{contactNumber}</p>
                                </div>
                            )}
                            {socialLinks?.length && (
                                <div className="space-y-4">
                                    <h3 className='text-black text-2xl bg-pastel-yellow p-1 w-fit'>Socials</h3>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-4 md:gap-6">
                                        {socialLinks.map((social, index) => (
                                            <Link href={social.url} target='_blank' key={`${social.platform}-${index}`} className="flex items-center gap-2 cursor-pointer group">
                                                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg> */}
                                                {social.platform?.toLowerCase() === 'twitter' && <FaXTwitter className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'dribbble' && <FaDribbble className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'instagram' && <FaInstagram className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'linkedin' && <FaLinkedin className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'github' && <FaGithub className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'facebook' && <FaFacebook className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'youtube' && <FaYoutube className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'behance' && <FaBehance className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                {social.platform?.toLowerCase() === 'website' && <FaGlobe className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" />}
                                                <p className='text-black text-xl'>@{social.username || social.platform}</p>
                                            </Link>
                                        ))}
                                        {/* <Link href="#" className="flex items-center gap-2 cursor-pointer group">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                                            <p className='text-black text-xl'>@monica115</p>
                                        </Link>
                                        <Link href="#" className="flex items-center gap-2 cursor-pointer group">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>
                                            <p className='text-black text-xl'>@monica115</p>
                                        </Link>
                                        <Link href="#" className="flex items-center gap-2 cursor-pointer group">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6 group-hover:rotate-[16deg] transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                            <p className='text-black text-xl'>@monica115</p>
                                        </Link> */}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="">
                            <h3 className='text-black text-2xl bg-pastel-yellow p-1 w-fit mb-6'>Contact Form</h3>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className="border-b border-black flex items-start gap-4">
                                    <label htmlFor="name" className='text-xl text-black bg-light-sky-blue'>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder='Your Name'
                                        className='text-xl text-black h-7 focus:bg-light-pink w-full outline-none'
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="border-b border-black flex items-start gap-4">
                                    <label htmlFor="email" className='text-xl text-black bg-light-sky-blue'>Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder='youremail@mail.com'
                                        className='text-xl text-black h-7 focus:bg-light-pink w-full outline-none'
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="border-b border-black flex items-start gap-4">
                                    <label htmlFor="message" className='text-xl text-black bg-light-sky-blue whitespace-nowrap'>Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Hi, Jasbir..."
                                        rows={3} className='text-xl text-black focus:bg-light-pink w-full outline-none'
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <Button type="submit" variant='primary2' label={isSubmitting ? "Submitting..." : "Submit"} disable={isSubmitting} className='w-full' />
                                {responseMessage && <p className="text-black text-lg mt-2">{responseMessage}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsFormSection