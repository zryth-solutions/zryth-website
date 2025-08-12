"use client";

import { useState, useEffect } from "react";

interface JobSearchProps {
    searchTerm: string;
    onSearchChange: (search: string) => void;
}

export default function JobSearch({ searchTerm, onSearchChange }: JobSearchProps) {
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
            onSearchChange(localSearchTerm);
        }, 300);

        return () => clearTimeout(timer);
    }, [localSearchTerm, onSearchChange]);

    return (
        <div className="w-full">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                        className="h-5 w-5 text-gray-400"
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
                <input
                    type="text"
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white dark:bg-dark-2 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary text-dark dark:text-white"
                    placeholder="Search jobs by title, department, or keywords..."
                />
            </div>
        </div>
    );
} 