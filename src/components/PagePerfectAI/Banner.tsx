"use client";

import { ArrowRight, FileCheck, Languages, Brain, GraduationCap, Layout, Image as ImageIcon } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

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
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <div 
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                }}
              >
                <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                AI-powered Book Proofreader
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Detects grammatical, contextual, and stylistic errors, providing improvement suggestions for enhanced book quality.
              </p>
              <Link
                href="#contact"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                For pricing contact us
              </Link>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <div 
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                }}
              >
                <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <Languages className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                Multilingual Publishing AI Agent
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Translates and localizes books into multiple languages, eliminating expensive translation costs.
              </p>
              <Link
                href="#contact"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                For pricing contact us
              </Link>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <div 
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                }}
              >
                <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                AI Book Writing Agent
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Uses graph database to build plot, connect the dots, and then build a book that is actually relevant.
              </p>
              <Link
                href="#contact"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                For pricing contact us
              </Link>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <div 
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                }}
              >
                <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                Interactive Learning Generators
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Develops e-learning modules and interactive content for educational publishers.
              </p>
              <Link
                href="#contact"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                For pricing contact us
              </Link>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <div 
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                }}
              >
                <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <Layout className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                AI Template and Style Sheet Generator
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Creates ready-to-use professional book layouts and design frameworks.
              </p>
              <Link
                href="#contact"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                For pricing contact us
              </Link>
            </div>
          </div>
          <div className="flex w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 flex w-full flex-col rounded-xl bg-white p-8 shadow-testimonial dark:bg-dark dark:shadow-none" data-wow-delay=".15s">
              <div 
                className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
                }}
              >
                <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                <ImageIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                Book Cover Generator
              </h3>
              <p className="mb-6 flex-grow text-base text-body-color dark:text-dark-6">
                Designs context-aware and brand-aligned book covers using AI.
              </p>
              <Link
                href="#contact"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                For pricing contact us
              </Link>
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

