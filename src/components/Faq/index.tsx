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
          paragraph="Find answers to the most commonly asked questions about our AI agents, knowledge bases, and automation solutions. If you can't find what you're looking for, feel free to reach out to our support team."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="What AI solutions does Zryth provide?"
              answer="We specialize in AI agents, custom knowledge bases, and workflow automation. Our flagship product is PagePerfect AI for book quality control, plus custom AI agents for customer support, data analysis, and business process automation."
            />
            <SingleFaq
              question="How do AI agents integrate with existing workflows?"
              answer="Our AI agents seamlessly integrate with your current systems through APIs, webhooks, and custom connectors. They can work alongside your team, handling routine tasks while escalating complex issues to human agents."
            />
            <SingleFaq
              question="What is PagePerfect AI and how accurate is it?"
              answer="PagePerfect AI is our specialized book quality control system for publishers. It achieves 99.9% accuracy in manuscript review, offering automated editing workflows, style consistency checks, and custom knowledge base integration for publishing houses."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Do you provide post-launch support for AI solutions?"
              answer="Yes, we offer comprehensive AI solution support including model fine-tuning, performance optimization, knowledge base updates, and continuous learning improvements with flexible service packages."
            />
            <SingleFaq
              question="What AI technologies and frameworks do you use?"
              answer="We work with advanced AI frameworks including OpenAI GPT, Anthropic Claude, LangChain, vector databases, RAG systems, and custom model training. Our solutions integrate with cloud platforms (AWS, Azure, GCP) and enterprise systems."
            />
            <SingleFaq
              question="How do you ensure AI solution accuracy and reliability?"
              answer="We implement rigorous testing protocols, continuous model validation, human-in-the-loop verification, and maintain comprehensive quality metrics. Our AI solutions undergo extensive testing before deployment and are monitored continuously for performance."
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
