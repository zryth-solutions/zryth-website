export const metadata = {
  title: "Careers at Zryth Solutions | Join Our Team of Innovators",
  description:
    "Explore exciting career opportunities at Zryth Solutions. Join a passionate team, work on cutting-edge projects, and grow your career in tech, AI, and digital innovation.",
  keywords: [
    "careers",
    "jobs",
    "hiring",
    "Zryth Solutions",
    "tech jobs",
    "AI jobs",
    "software jobs",
    "work at Zryth",
    "join our team",
  ],
  alternates: {
    canonical: "https://zryth.com/careers",
  },
  openGraph: {
    title: "Careers at Zryth Solutions | Join Our Team of Innovators",
    description:
      "Explore exciting career opportunities at Zryth Solutions. Join a passionate team, work on cutting-edge projects, and grow your career in tech, AI, and digital innovation.",
    url: "https://zryth.com/careers",
    images: [
      {
        url: "/images/team/team-01.png",
        width: 1200,
        height: 630,
        alt: "Zryth Solutions Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Zryth Solutions | Join Our Team of Innovators",
    description: "Explore exciting career opportunities at Zryth Solutions.",
    images: ["/images/team/team-01.png"],
  },
};

("use client");

import { useState, useEffect } from "react";
import JobListings from "@/components/Careers/JobListings";
import JobFilters from "@/components/Careers/JobFilters";
import JobSearch from "@/components/Careers/JobSearch";
import { JobListing, JobFilters as JobFiltersType } from "@/types/job";
import { jobsData } from "@/data/jobsData";

export default function CareersPage() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
  const [filters, setFilters] = useState<JobFiltersType>({
    department: "",
    location: "",
    type: "",
    search: "",
  });

  // Load jobs on component mount
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setJobs(jobsData);
        setFilteredJobs(jobsData);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  // Filter jobs based on current filters
  useEffect(() => {
    let filtered = jobs;

    if (filters.department) {
      filtered = filtered.filter(
        (job) => job.department === filters.department
      );
    }

    if (filters.location) {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    if (filters.type) {
      filtered = filtered.filter((job) => job.type === filters.type);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower) ||
          job.department.toLowerCase().includes(searchLower)
      );
    }

    setFilteredJobs(filtered);
  }, [jobs, filters]);

  const handleFilterChange = (newFilters: Partial<JobFiltersType>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      department: "",
      location: "",
      type: "",
      search: "",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden bg-[#090E34] pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4 lg:w-8/12 xl:w-7/12">
                <div className="mb-12 lg:mb-0">
                  <span className="mb-5 inline-block rounded bg-white bg-opacity-10 py-1 px-4 text-base font-medium text-white">
                    Join Our Team
                  </span>
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Build the Future with Us
                  </h1>
                  <p className="mb-12 text-base !leading-relaxed text-white md:text-lg">
                    Join our innovative team and help us create cutting-edge
                    software solutions that transform businesses. We're looking
                    for passionate individuals who are excited about technology
                    and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search and Filters Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-12">
            <JobSearch
              searchTerm={filters.search}
              onSearchChange={(search) => handleFilterChange({ search })}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <JobFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
                jobs={jobs}
              />
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-dark dark:text-white">
                  {filteredJobs.length} Job
                  {filteredJobs.length !== 1 ? "s" : ""} Available
                </h2>
                {Object.values(filters).some((filter) => filter !== "") && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {filteredJobs.length > 0 ? (
                <JobListings jobs={filteredJobs} />
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <svg
                      className="mx-auto h-16 w-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No jobs found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Try adjusting your search criteria or filters to find more
                    opportunities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
