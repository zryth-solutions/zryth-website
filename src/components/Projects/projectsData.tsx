import { Project } from "@/types/project";

// Project image paths - organized at the top for easy maintenance
const PROJECT_IMAGES = {
  FLIGHT_BOOKING_WEBSITE: "/images/Projects/Flight_Booking_Website.jpg",
  AI_TRIP_PLANNER: "/images/Projects/AI_Trip_Planner.jpg",
  AGENTIC_AI_CAB_BOOKING: "/images/Projects/Agentic_AI_Cab_Booking.png",
  CRM_CHARTERED_ACCOUNTANTS: "/images/Projects/CRM_for_Chartered_Accountants.png",
  AI_INVENTORY_MANAGEMENT: "/images/Projects/AI_Inventory_Management.png",
  CHILD_SURVEILLANCE_APP: "/images/Projects/Child_Surveillance_App.png",
  JOB_FINDING_PORTAL: "/images/Projects/Job_Finding_Portal.png",
  PROJECT_MANAGEMENT_SOFTWARE: "/images/Projects/Project_Management_Software.png",
  FLIGHT_BOOKING_CRM: "/images/Projects/Flight_Booking_CRM.png",
};

const projectsData: Project[] = [
  {
    id: 1,
    icon: PROJECT_IMAGES.FLIGHT_BOOKING_WEBSITE,
    title: "Flight Booking Website",
    category: "Travel & Tourism",
    paragraph: "Comprehensive flight booking platform with real-time pricing, seat selection, and integrated payment gateway for Triwize.",
  },
  {
    id: 2,
    icon: PROJECT_IMAGES.AI_TRIP_PLANNER,
    title: "AI Trip Planner",
    category: "AI & Machine Learning",
    paragraph: "Intelligent travel itinerary generator using AI to create personalized trip plans based on user preferences and budget.",
  },
  {
    id: 3,
    icon: PROJECT_IMAGES.AGENTIC_AI_CAB_BOOKING,
    title: "Agentic AI Cab Booking",
    category: "Transportation & AI",
    paragraph: "Smart cab booking system with AI agents for route optimization, dynamic pricing, and automated driver-passenger matching.",
  },
  {
    id: 4,
    icon: PROJECT_IMAGES.CRM_CHARTERED_ACCOUNTANTS,
    title: "CRM for Chartered Accountants",
    category: "Finance & CRM",
    paragraph: "Specialized customer relationship management system designed for CA firms with client tracking and document management.",
  },
  {
    id: 5,
    icon: PROJECT_IMAGES.AI_INVENTORY_MANAGEMENT,
    title: "AI Inventory Management",
    category: "Manufacturing & AI",
    paragraph: "Intelligent inventory system with AI-powered demand forecasting and automated data feeding for manufacturing companies.",
  },
  {
    id: 6,
    icon: PROJECT_IMAGES.CHILD_SURVEILLANCE_APP,
    title: "Child Surveillance App",
    category: "Mobile & Security",
    paragraph: "Flutter-based mobile application for child safety monitoring with real-time location tracking and emergency alerts.",
  },
  {
    id: 7,
    icon: PROJECT_IMAGES.JOB_FINDING_PORTAL,
    title: "Job Finding Portal",
    category: "HR & Recruitment",
    paragraph: "Comprehensive job portal with AI-powered job matching, resume parsing, and candidate-employer communication system.",
  },
  {
    id: 8,
    icon: PROJECT_IMAGES.PROJECT_MANAGEMENT_SOFTWARE,
    title: "Project Management Software",
    category: "Enterprise Software",
    paragraph: "Custom project management solution with task tracking, team collaboration, and progress analytics for corporate clients.",
  },
  {
    id: 9,
    icon: PROJECT_IMAGES.FLIGHT_BOOKING_CRM,
    title: "Flight Booking CRM",
    category: "Travel & CRM",
    paragraph: "Specialized CRM system for flight booking agencies with customer management, booking tracking, and commission calculations.",
  },
];

export default projectsData; 