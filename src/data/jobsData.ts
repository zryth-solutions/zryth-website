import { JobListing } from "@/types/job";

export const jobsData: JobListing[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$80,000 - $120,000",
    description:
      "We are looking for a talented Senior Frontend Developer to join our team and help build amazing user experiences.",
    requirements: [
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with Next.js and Tailwind CSS",
      "Understanding of responsive design principles",
      "Experience with Git and collaborative development",
    ],
    responsibilities: [
      "Develop and maintain high-quality frontend applications",
      "Collaborate with design and backend teams",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and technical discussions",
    ],
    benefits: [
      "Competitive salary and benefits",
      "Remote work opportunities",
      "Professional development budget",
      "Flexible working hours",
    ],
    postedDate: "2024-01-15",
    isActive: true,
  },
  {
    id: "2",
    title: "AI/ML Engineer",
    department: "AI & Research",
    location: "Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$90,000 - $130,000",
    description:
      "Join our AI team to develop cutting-edge machine learning solutions that drive business innovation.",
    requirements: [
      "Strong background in machine learning and deep learning",
      "Experience with Python, TensorFlow, and PyTorch",
      "Knowledge of data preprocessing and feature engineering",
      "Understanding of MLOps and model deployment",
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Analyze large datasets and extract insights",
      "Collaborate with cross-functional teams",
      "Stay updated with latest AI/ML trends",
    ],
    benefits: [
      "Access to latest AI tools and infrastructure",
      "Conference and training opportunities",
      "Stock options",
      "Health and wellness benefits",
    ],
    postedDate: "2024-01-10",
    isActive: true,
  },
  {
    id: "3",
    title: "Product Manager",
    department: "Product",
    location: "On-site",
    type: "Full-time",
    experience: "4-6 years",
    salary: "$100,000 - $140,000",
    description:
      "Lead product strategy and execution for our innovative software solutions.",
    requirements: [
      "Proven experience in product management",
      "Strong analytical and strategic thinking",
      "Excellent communication and leadership skills",
      "Experience with agile methodologies",
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Work with engineering and design teams",
      "Analyze market trends and user feedback",
      "Drive product launches and iterations",
    ],
    benefits: [
      "Leadership development opportunities",
      "Competitive compensation package",
      "Modern office environment",
      "Team building activities",
    ],
    postedDate: "2024-01-08",
    isActive: true,
  },
];
