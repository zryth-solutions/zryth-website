"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { newsletterData, importantTechData } from "@/data/newsletterData";
import { Industry } from "@/types/newsletter";
import NewsletterItem from "./NewsletterItem";
import ImportantTechCard from "./ImportantTechCard";

const Newsletter = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("Education");

  const currentIndustryNews = newsletterData.find(
    (news) => news.industry === selectedIndustry
  );

  const industries: Industry[] = ["Education", "Finance", "Manufacturing", "Pharma", "Business"];

  return (
    <section id="newsletter" className="bg-gray-1 pb-8 pt-12 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Industry Insights"
          title="AI News & Updates"
          paragraph="Stay ahead with the latest AI developments, trends, and opportunities across key industries. Get actionable insights delivered in a crisp, focused format."
          center
        />

        {/* Industry Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 lg:mt-16">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 md:px-8 md:py-3.5 md:text-base ${
                selectedIndustry === industry
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-dark hover:bg-gray-100 dark:bg-dark dark:text-white dark:hover:bg-dark-3"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Selected Industry News */}
        {currentIndustryNews && (
          <div className="mt-12 lg:mt-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-dark dark:text-white md:text-3xl">
                {selectedIndustry} Industry Updates
              </h3>
              <p className="mt-2 text-sm text-body-color dark:text-dark-6">
                Latest insights and developments for {selectedIndustry.toLowerCase()} sector
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {currentIndustryNews.items.map((item) => (
                <NewsletterItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Important AI Industries & Technologies */}
        <div className="mt-16 lg:mt-24">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-dark dark:text-white md:text-3xl">
              Important AI Industries & Technologies
            </h3>
            <p className="mt-2 text-sm text-body-color dark:text-dark-6">
              Key areas to watch and invest in
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {importantTechData.map((tech) => (
              <ImportantTechCard key={tech.id} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

