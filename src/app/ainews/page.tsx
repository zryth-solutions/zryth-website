"use client";

import Link from "next/link";
import { Industry } from "@/types/newsletter";

const industries: { name: Industry; description: string }[] = [
  {
    name: "Education",
    description: "AI developments in education and learning technology",
  },
  {
    name: "Finance",
    description: "AI innovations transforming financial services and fintech",
  },
  {
    name: "Manufacturing",
    description: "AI-powered industrial automation and optimization",
  },
  {
    name: "Healthcare",
    description: "AI-driven diagnostics and patient care innovations",
  },
  {
    name: "Pharma",
    description: "AI breakthroughs in pharmaceuticals and drug discovery",
  },
  {
    name: "Business",
    description: "AI solutions for enterprise operations and growth",
  },
  {
    name: "AI Hots",
    description: "Essential AI tools, updates, and companies to watch",
  },
];

export default function AINewsPage() {
  return (
    <section className="pb-8 pt-[120px] dark:bg-dark lg:pb-[70px] lg:pt-[140px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="mx-auto w-full max-w-[800px] px-4">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                AI Industry News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Select an industry to view today's key developments
              </p>
            </div>

            <div className="space-y-4">
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  href={`/ainews/${industry.name === "AI Hots" ? "ai-hots" : industry.name.toLowerCase()}`}
                  className="group block rounded-lg border border-stroke bg-white p-6 transition-all hover:border-primary hover:shadow-sm dark:border-dark-3 dark:bg-dark-2"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-body-color dark:text-dark-6">
                        {industry.description}
                      </p>
                    </div>
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-body-color transition-all group-hover:translate-x-1 group-hover:text-primary dark:text-dark-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

