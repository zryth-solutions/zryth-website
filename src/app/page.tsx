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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zryth - AI-Powered Software Solutions That Transform Your Business",
  description: "At Zryth, we specialize in building cutting-edge software solutions that harness the power of Artificial Intelligence to solve real-world problems across industries. From seamless CRM systems to intelligent cab booking platforms, we bring your vision to life.",
};

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
