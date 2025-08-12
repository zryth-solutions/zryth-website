"use client";

import { JobListing, JobFilters as JobFiltersType } from "@/types/job";

interface JobFiltersProps {
    filters: JobFiltersType;
    onFilterChange: (filters: Partial<JobFiltersType>) => void;
    onClearFilters: () => void;
    jobs: JobListing[];
}

export default function JobFilters({ filters, onFilterChange, onClearFilters, jobs }: JobFiltersProps) {
    // Get unique values for filters
    const departments = Array.from(new Set(jobs.map(job => job.department)));
    const locations = Array.from(new Set(jobs.map(job => job.location)));
    const jobTypes = Array.from(new Set(jobs.map(job => job.type)));

    return (
        <div className="bg-white dark:bg-dark-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-dark dark:text-white">Filters</h3>
                {Object.values(filters).some(filter => filter !== "") && (
                    <button
                        onClick={onClearFilters}
                        className="text-sm text-primary hover:underline"
                    >
                        Clear all
                    </button>
                )}
            </div>

            {/* Department Filter */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-dark dark:text-white mb-3">
                    Department
                </label>
                <select
                    value={filters.department}
                    onChange={(e) => onFilterChange({ department: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-2 text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                    <option value="">All Departments</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>
                            {dept}
                        </option>
                    ))}
                </select>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-dark dark:text-white mb-3">
                    Location
                </label>
                <select
                    value={filters.location}
                    onChange={(e) => onFilterChange({ location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-2 text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            {/* Job Type Filter */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-dark dark:text-white mb-3">
                    Job Type
                </label>
                <select
                    value={filters.type}
                    onChange={(e) => onFilterChange({ type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-2 text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                    <option value="">All Types</option>
                    {jobTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Active Filters Display */}
            {Object.values(filters).some(filter => filter !== "") && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-dark dark:text-white mb-3">
                        Active Filters:
                    </h4>
                    <div className="space-y-2">
                        {filters.department && (
                            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded">
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                    Department: {filters.department}
                                </span>
                                <button
                                    onClick={() => onFilterChange({ department: "" })}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        {filters.location && (
                            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded">
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                    Location: {filters.location}
                                </span>
                                <button
                                    onClick={() => onFilterChange({ location: "" })}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        {filters.type && (
                            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded">
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                    Type: {filters.type}
                                </span>
                                <button
                                    onClick={() => onFilterChange({ type: "" })}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
} 