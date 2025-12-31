import About from "@/components/About";
import CallToAction from "@/components/Calendly";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

import { generateMetadata, pageSEOConfigs } from "@/utils/metadata";

export const metadata = generateMetadata(pageSEOConfigs.home);

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Clients />
      <Features />
      <Projects />
      <About />
      <CallToAction />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
    
    </main>
  );
}
