export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  postedDate: string;
  isActive: boolean;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  resumeLink: string;
  coverLetter: string;
  appliedDate: string;
  status: "Pending" | "Reviewed" | "Shortlisted" | "Rejected" | "Hired";
}

export interface Department {
  id: string;
  name: string;
  count: number;
}

export interface JobFilters {
  department: string;
  location: string;
  type: string;
  search: string;
}
