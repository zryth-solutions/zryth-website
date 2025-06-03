import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 2L22 10L30 10L24 16L26 24L17.5 20L9 24L11 16L5 10L13 10L17.5 2Z"
          fill="white"
        />
        <path
          d="M8 28L12 32L20 24L28 32L32 28L20 36L8 28Z"
          fill="white"
        />
      </svg>
    ),
    title: "Flight Booking Website",
    category: "Travel & Tourism",
    paragraph: "Comprehensive flight booking platform with real-time pricing, seat selection, and integrated payment gateway for Triwize.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17.5" cy="17.5" r="15" fill="none" stroke="white" strokeWidth="2" />
        <path d="M12 17.5L16 21.5L23 14.5" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="17.5" cy="8" r="3" fill="white" />
      </svg>
    ),
    title: "AI Trip Planner",
    category: "AI & Machine Learning",
    paragraph: "Intelligent travel itinerary generator using AI to create personalized trip plans based on user preferences and budget.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="10" width="25" height="15" rx="3" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="17.5" r="2" fill="white" />
        <circle cx="23" cy="17.5" r="2" fill="white" />
        <path d="M5 17.5L30 17.5" stroke="white" strokeWidth="1" />
      </svg>
    ),
    title: "Agentic AI Cab Booking",
    category: "Transportation & AI",
    paragraph: "Smart cab booking system with AI agents for route optimization, dynamic pricing, and automated driver-passenger matching.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="25" height="25" rx="3" fill="none" stroke="white" strokeWidth="2" />
        <rect x="9" y="9" width="17" height="3" fill="white" />
        <rect x="9" y="15" width="17" height="3" fill="white" />
        <rect x="9" y="21" width="17" height="3" fill="white" />
      </svg>
    ),
    title: "CRM for Chartered Accountants",
    category: "Finance & CRM",
    paragraph: "Specialized customer relationship management system designed for CA firms with client tracking and document management.",
  },
  {
    id: 5,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="8" width="6" height="19" fill="white" />
        <rect x="14" y="12" width="6" height="15" fill="white" />
        <rect x="23" y="5" width="6" height="22" fill="white" />
        <circle cx="17.5" cy="30" r="3" fill="white" />
      </svg>
    ),
    title: "AI Inventory Management",
    category: "Manufacturing & AI",
    paragraph: "Intelligent inventory system with AI-powered demand forecasting and automated data feeding for manufacturing companies.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="8" width="19" height="19" rx="2" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="17.5" cy="17.5" r="4" fill="white" />
        <path d="M12 12L23 23" stroke="white" strokeWidth="1" />
        <path d="M23 12L12 23" stroke="white" strokeWidth="1" />
      </svg>
    ),
    title: "Child Surveillance App",
    category: "Mobile & Security",
    paragraph: "Flutter-based mobile application for child safety monitoring with real-time location tracking and emergency alerts.",
  },
  {
    id: 7,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17.5" cy="12" r="5" fill="white" />
        <path d="M8 28C8 22 12 18 17.5 18S27 22 27 28" stroke="white" strokeWidth="2" fill="none" />
        <rect x="22" y="8" width="8" height="8" rx="1" fill="white" />
      </svg>
    ),
    title: "Job Finding Portal",
    category: "HR & Recruitment",
    paragraph: "Comprehensive job portal with AI-powered job matching, resume parsing, and candidate-employer communication system.",
  },
  {
    id: 8,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="25" height="25" rx="3" fill="none" stroke="white" strokeWidth="2" />
        <rect x="9" y="9" width="8" height="8" fill="white" />
        <rect x="20" y="9" width="6" height="3" fill="white" />
        <rect x="20" y="14" width="6" height="3" fill="white" />
        <rect x="9" y="20" width="17" height="3" fill="white" />
        <rect x="9" y="25" width="17" height="3" fill="white" />
      </svg>
    ),
    title: "Project Management Software",
    category: "Enterprise Software",
    paragraph: "Custom project management solution with task tracking, team collaboration, and progress analytics for corporate clients.",
  },
  {
    id: 9,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="10" width="25" height="15" rx="3" fill="none" stroke="white" strokeWidth="2" />
        <path d="M8 15L12 19L17 14" stroke="white" strokeWidth="2" fill="none" />
        <rect x="20" y="15" width="8" height="2" fill="white" />
        <rect x="20" y="18" width="6" height="2" fill="white" />
      </svg>
    ),
    title: "Flight Booking CRM",
    category: "Travel & CRM",
    paragraph: "Specialized CRM system for flight booking agencies with customer management, booking tracking, and commission calculations.",
  },
];

export default projectsData; 