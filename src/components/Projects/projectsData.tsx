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
    icon: PROJECT_IMAGES.AI_TRIP_PLANNER,
    title: "PagePerfect AI - Book Quality Control",
    category: "AI Agents & Publishing",
    paragraph: "Revolutionary AI-powered book quality control system for publishers, featuring 99.9% accuracy in manuscript review, automated editing workflows, and custom knowledge base integration.",
  },
  {
    id: 2,
    icon: PROJECT_IMAGES.AGENTIC_AI_CAB_BOOKING,
    title: "AI Customer Support Agent",
    category: "AI Agents & Automation",
    paragraph: "Intelligent customer support agent that handles complex queries, provides instant responses, and escalates issues seamlessly while maintaining brand voice consistency.",
  },
  {
    id: 3,
    icon: PROJECT_IMAGES.AI_INVENTORY_MANAGEMENT,
    title: "Enterprise Knowledge Base",
    category: "Knowledge Base & AI",
    paragraph: "Custom knowledge repository that understands business context, integrates with existing systems, and provides intelligent insights for decision-making and automation.",
  },
  {
    id: 4,
    icon: PROJECT_IMAGES.JOB_FINDING_PORTAL,
    title: "AI Writing Assistant",
    category: "AI Agents & Content",
    paragraph: "Intelligent writing agent that helps authors create compelling content, maintains consistency across documents, and provides real-time editing suggestions.",
  },
  {
    id: 5,
    icon: PROJECT_IMAGES.CRM_CHARTERED_ACCOUNTANTS,
    title: "Product AI for Companies",
    category: "AI Agents & Business",
    paragraph: "AI-powered product intelligence system that analyzes market trends, customer feedback, and business data to provide actionable insights for product development.",
  },
  {
    id: 6,
    icon: PROJECT_IMAGES.CHILD_SURVEILLANCE_APP,
    title: "AI Workflow Automation",
    category: "AI Agents & Process",
    paragraph: "Intelligent workflow automation agent that handles complex business processes, manages approvals, and optimizes operations across multiple departments.",
  },
  {
    id: 7,
    icon: PROJECT_IMAGES.PROJECT_MANAGEMENT_SOFTWARE,
    title: "Custom AI Agent Development",
    category: "AI Agents & Custom",
    paragraph: "Tailored AI agent solutions designed for specific business needs, including custom training, integration, and ongoing optimization for maximum efficiency.",
  },
  {
    id: 8,
    icon: PROJECT_IMAGES.FLIGHT_BOOKING_CRM,
    title: "AI Data Analysis Agent",
    category: "AI Agents & Analytics",
    paragraph: "Intelligent data analysis agent that processes large datasets, identifies patterns, and generates actionable business intelligence reports automatically.",
  },
  {
    id: 9,
    icon: PROJECT_IMAGES.FLIGHT_BOOKING_WEBSITE,
    title: "AI Integration Services",
    category: "AI Agents & Integration",
    paragraph: "Comprehensive AI integration services that seamlessly connect AI agents and knowledge bases with existing business systems and workflows.",
  },
];

export default projectsData; 