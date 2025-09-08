import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";
import { DotPattern } from "../../assets/svg";

const Faq = () => {
  return (
    <section id="faq" className="relative z-20 overflow-hidden bg-white pb-8 pt-12 dark:bg-dark lg:pb-[50px] lg:pt-[80px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Any Questions? Answered"
          paragraph="Find answers to the most commonly asked questions about our software, features, and services. If you can't find what you're looking for, feel free to reach out to our support team."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="What software solutions does Zryth develop?"
              answer="We build custom business software, AI agents, web applications, mobile apps, and enterprise systems tailored to your specific needs and industry requirements."
            />
            <SingleFaq
              question="How does your tech consultancy work?"
              answer="We analyze your current systems, identify improvement opportunities, and provide strategic recommendations for technology stack selection and digital transformation planning."
            />
            <SingleFaq
              question="What is your typical project timeline?"
              answer="Projects typically range from 4-16 weeks depending on complexity. We follow agile methodology with regular client communication and milestone reviews."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Do you provide post-launch support?"
              answer="Yes, we offer comprehensive support including bug fixes, performance optimization, feature updates, and technical maintenance with flexible service packages available."
            />
            <SingleFaq
              question="What technologies do you use?"
              answer="We work with React, Node.js, Python, cloud platforms (AWS, Azure, GCP), databases (PostgreSQL, MongoDB), and modern AI/ML frameworks."
            />
            <SingleFaq
              question="How do you ensure software quality?"
              answer="We implement industry-standard security practices, conduct thorough code reviews, perform comprehensive testing, and follow secure coding guidelines throughout development."
            />
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <DotPattern color="#13C296" />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <DotPattern color="#3758F9" />
        </span>
      </div>
    </section>
  );
};

export default Faq;
