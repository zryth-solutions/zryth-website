"use client";

import { ArrowRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const PagePerfectAIBanner = () => {
  const handleTryNow = () => {
    window.location.href = "https://pageperfectai.zryth.com/?try=1";
  };

  return (
    <section className="overflow-hidden bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Our Product"
          title="PagePerfect AI - Revolutionary AI Book Publishing Product"
          paragraph="Our flagship AI-powered book publishing product for publishers. Achieve 99.9% accuracy in manuscript review with automated editing workflows, custom knowledge base integration, and agentic workflows that transform how books are created and published."
        />

        <div className="-mx-4 mt-12 flex flex-wrap items-stretch lg:mt-20">
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                99.9% Accuracy
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Our AI models are specifically trained for manuscript analysis with unmatched precision in detecting inconsistencies, grammar issues, and style violations.
              </p>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                10x Faster Reviews
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Review entire manuscripts in minutes, not days. Our parallel processing handles multiple chapters simultaneously while maintaining consistency.
              </p>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                Custom Knowledge Base
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Upload your style guides, previous works, and reference materials. Our AI learns your unique voice and requirements for perfectly tailored audits.
              </p>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/2">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                Agentic Workflows
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Automated multi-step review processes that handle complex editing tasks, fact-checking, and consistency validation across entire manuscripts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-16">
          <div className="w-full px-4">
            <div className="rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none">
              <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                Transform Your Publishing Workflow
              </h3>
              <p className="mb-6 text-base text-body-color dark:text-dark-6">
                Join authors, publishers, and writing professionals using PagePerfect AI to achieve unmatched accuracy and 10x efficiency.
              </p>
              <button
                onClick={handleTryNow}
                className="inline-flex items-center justify-center rounded-md px-7 py-3 text-base font-medium text-white duration-300 hover:opacity-90"
                style={{
                  background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                }}
              >
                Try PagePerfect AI Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <p className="mt-4 text-sm text-body-color dark:text-dark-6">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagePerfectAIBanner;

