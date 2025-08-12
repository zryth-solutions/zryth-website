"use client";

import { useState } from "react";
import { JobListing } from "@/types/job";
import JobCard from "./JobCard";
import JobApplicationModal from "./JobApplicationModal";

interface JobListingsProps {
    jobs: JobListing[];
}

export default function JobListings({ jobs }: JobListingsProps) {
    const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApply = (job: JobListing) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    return (
        <div className="space-y-6">
            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    job={job}
                    onApply={() => handleApply(job)}
                />
            ))}

            {selectedJob && (
                <JobApplicationModal
                    job={selectedJob}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
} 