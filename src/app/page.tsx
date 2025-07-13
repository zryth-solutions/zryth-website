import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { generateMetadata, pageSEOConfigs } from "@/utils/metadata";

export const metadata = generateMetadata(pageSEOConfigs.home);

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <Projects />
      <CallToAction />
      <Testimonials />
      <Faq />
      <Team />
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      <Clients />
    </main>
  );
}
