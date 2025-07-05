
import { fetchHomePage } from "@/lib/fetchers"; // adjust the path accordingly
import HeroSection from "@/components/HomePage/HeroSection";
import ServiceSection from "@/components/HomePage/ServiceSection";
import ExperienceSection from "@/components/HomePage/ExperienceSection";
import AboutSection from "@/components/HomePage/AboutSection";
import FAQSection from "@/components/HomePage/FAQSection";
import { Metadata } from "next";
import FeaturedProjectSection from "@/components/HomePage/FeaturedProjectSection";
import FeaturedBlogSection from "@/components/HomePage/FeaturedBlogSection";
import EducationSection from "@/components/HomePage/EducationSection";

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
