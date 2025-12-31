import { notFound } from "next/navigation";
import { newsletterData } from "@/data/newsletterData";
import { Industry } from "@/types/newsletter";
import NewsletterItem from "@/components/Newsletter/NewsletterItem";
import Link from "next/link";

interface IndustryPageProps {
  params: Promise<{
    industry: string;
  }>;
}

const industryMap: Record<string, Industry> = {
  education: "Education",
  finance: "Finance",
  manufacturing: "Manufacturing",
  healthcare: "Healthcare",
  pharma: "Pharma",
  business: "Business",
};

export default async function IndustryNewsPage({ params }: IndustryPageProps) {
  const { industry: industryParam } = await params;
  const industryKey = industryParam.toLowerCase();
  const industry = industryMap[industryKey];

  if (!industry) {
    notFound();
  }

  const industryNews = newsletterData.find(
    (news) => news.industry === industry
  );

  if (!industryNews) {
    notFound();
  }

  return (
    <section className="pb-8 pt-[100px] dark:bg-dark md:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="mx-auto w-full max-w-[800px] px-4">
            {/* Compact Header */}
            <div className="mb-5 flex items-center justify-between border-b border-stroke pb-3 dark:border-dark-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/ainews"
                  className="text-body-color hover:text-primary dark:text-dark-6"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Link>
                <h1 className="text-lg font-bold text-dark dark:text-white sm:text-xl">
                  {industry}
                </h1>
              </div>
              <span className="text-xs text-body-color dark:text-dark-6">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* News Items - Compact */}
            <div>
              {industryNews.items.map((item) => (
                <NewsletterItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

