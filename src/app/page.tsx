
import { fetchHomePage } from "@/lib/fetchers"; // adjust the path accordingly
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import FeatureProjectSection from "@/components/FeatureProjectSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchHomePage();
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      images: [{ url: data.ogImage }],
    },
  };
}

export default async function Home() {
  const data = await fetchHomePage();
  console.log("Homepage data =>", data);

  return (
    <>
      <HeroSection {...data.hero} />
      <FeatureProjectSection featuredProjects={data.feauredProjects} />
      <ServiceSection services={data.services}/>
      <ExperienceSection />
      <AboutSection />
      <FAQSection />
    </>
  );
}
