import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/ui/Button";
import feature_card_image from '@/assets/images/feature_card_image.avif'

import { fetchHomePage } from "@/lib/fetchers"; // adjust the path accordingly
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import ExprienceCard from "@/components/ExprienceCard";
import Footer from "@/components/layout/Footer";

export default async function Home() {
  const data = await fetchHomePage();
  // console.log("Homepage =>",data);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[120px] xl:pt-[140px]">
    <FeatureCard background="bg-[#9ddcff]" imgSrc={feature_card_image} title="Dry Sun Logo" leftTilte/>
    <FeatureCard background="bg-[#ffe68c]" imgSrc={feature_card_image} title="Green Strike Logo" rightTilte/>
    <FeatureCard background="bg-[#ffc9f0]" imgSrc={feature_card_image} title="Clean Ocean Logo" leftTilte/>

    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <ServiceCard background="bg-[#ffc9f0]" title="Branding and Identity"/>
      <ServiceCard background="bg-[#ffe68c]" title="Print Design"/>
      <ServiceCard background="bg-[#9ddcff]" title="Packaging Design"/>
      <ServiceCard background="bg-[#ffc9f0]" title="Illustration and Art"/>
    </div>


    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
<PortfolioCard  imgSrc={feature_card_image} title="Clean Ocean" background="bg-[#9ddcff]"/>
<PortfolioCard  imgSrc={feature_card_image} title="Dry Sun" background="bg-[#ffe68c]"/>
<PortfolioCard  imgSrc={feature_card_image} title="Green Strike" background="bg-[#ffc9f0]"/>
<PortfolioCard  imgSrc={feature_card_image} title="Life Atom" background="bg-[#9ddcff]"/>
    </div>


    <div className="space-y-4">
      <ExprienceCard background="bg-[#9ddcff]" period="2021 - Present" title="Graphic Designer at Creative Solutions" description="My work includes developing innovative website designs, crafting unique branding materials, and producing high-quality promotional content that consistently exceeds client expectations." />
      <ExprienceCard background="bg-[#ffe68c]" period="2021 - Present" title="Graphic Designer at Creative Solutions" description="My work includes developing innovative website designs, crafting unique branding materials, and producing high-quality promotional content that consistently exceeds client expectations." />
      <ExprienceCard background="bg-[#ffc9f0]" period="2021 - Present" title="Graphic Designer at Creative Solutions" description="My work includes developing innovative website designs, crafting unique branding materials, and producing high-quality promotional content that consistently exceeds client expectations." />
      <ExprienceCard background="bg-[#9ddcff]" period="2021 - Present" title="Graphic Designer at Creative Solutions" description="My work includes developing innovative website designs, crafting unique branding materials, and producing high-quality promotional content that consistently exceeds client expectations." />
    </div>


    <Footer/>
    </>
  );
}
