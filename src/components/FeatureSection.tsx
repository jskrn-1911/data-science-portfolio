import React from 'react'
import FeatureCard from './FeatureCard'
import feature_card_image from '@/assets/images/feature_card_image.avif'
import SectionHeading from './SectionHeading'
import Button from './ui/Button'
import SectionLayout from './layout/SectionLayout'


const FeatureSection = () => {
    return (
        <>
            <SectionLayout heading="Featured Projects">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FeatureCard title="Dry Son Logo" imgSrc={feature_card_image} background="bg-light-sky-blue" leftTilte />
                    <FeatureCard title="Green Strik Logo" imgSrc={feature_card_image} background="bg-pastel-yellow" rightTilte />
                    <FeatureCard title="Clean Ocean Logo" imgSrc={feature_card_image} background="bg-light-pink" leftTilte />
                </div>
                <div className="mt-10 w-fit mx-auto">
                    <Button variant="secondary" label="Check my Portfolio" className="mt-6 mx-auto" />
                </div>
            </SectionLayout>
        </>
    )
}

export default FeatureSection