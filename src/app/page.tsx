
import { fetchHomePage } from "@/lib/fetchers"; // adjust the path accordingly
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import FeaturedBlogSection from "@/components/FeaturedBlogSection";
import EducationSection from "@/components/EducationSection";

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
  // console.log("Homepage data =>", data);

  return (
    <>
      <HeroSection {...data.hero} />
      <FeaturedProjectSection featuredProjects={data.feauredProjects} />
      <FeaturedBlogSection featuredBlogs={data.featuredBlogs} />
      <ServiceSection services={data.services} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <AboutSection aboutMe={data.aboutMe} />
      <FAQSection faqs={data.faqs} />
    </>
  );
}
