import React from "react";

export const metadata = {
    title: 'Data Science Portfolio',
    description: 'Explore a portfolio showcasing projects in machine learning, data visualization, and AI-driven solutions.',
    keywords: ['Data Scientist Portfolio', 'Machine Learning Projects', 'AI Portfolio', 'Data Visualization', 'Next.js Sanity Portfolio'],
    authors: [{ name: 'Portfolio Owner' }],
    creator: 'Portfolio Owner',
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
        title: 'Data Science Portfolio',
        description: 'A curated selection of data science and machine learning projects built using modern tools.',
        url: 'https://yourdomain.com',
        siteName: 'Data Science Portfolio',
        images: [
            {
                url: 'https://yourdomain.com/og-image.jpg', // replace with actual OG image URL
                width: 1200,
                height: 630,
                alt: 'Portfolio Screenshot',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};


export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}