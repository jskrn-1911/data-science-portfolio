
import { fetchHomePage } from "@/lib/fetchers"; // adjust the path accordingly
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ServiceSection from "@/components/ServiceSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";

export default async function Home() {
  const data = await fetchHomePage();
  // console.log("Homepage =>",data);

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <ExperienceSection />
      <AboutSection/>
      <FAQSection/>
    </>
  );
}
