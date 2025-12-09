import { Project } from "@/types/project";

// Project image paths - organized at the top for easy maintenance
const PROJECT_IMAGES = {
  CRM_CHARTERED_ACCOUNTANTS: "/images/Projects/CRM_for_Chartered_Accountants.png",
  JOB_FINDING_PORTAL: "/images/Projects/Job_Finding_Portal.png",
};

const projectsData: Project[] = [
  {
    id: 8,
    icon: "https://ik.imagekit.io/bdq0hopvw/triwize_dashboard.png?updatedAt=1765284920990",
    title: "Triwize",
    category: "SaaS AI",
    paragraph: "Comprehensive AI integration services that seamlessly connect AI agents and knowledge bases with existing business systems and workflows.",
  },
  {
    id: 1,
    icon: "https://ik.imagekit.io/bdq0hopvw/Silver%20Inventory-20251209T132719Z-3-001/Silver%20Inventory/Pictures/s1.png?updatedAt=1765286975272",
    title: "Silver Inventory",
    category: "SaaS Product",
    paragraph: "Revolutionary AI-powered book quality control system for publishers, featuring 99.9% accuracy in manuscript review, automated editing workflows, and custom knowledge base integration.",
  },
 
  {
    id: 4,
    icon: PROJECT_IMAGES.JOB_FINDING_PORTAL,
    title: "AI Education",
    category: "AI Agents & Content",
    paragraph: "Intelligent writing agent that helps authors create compelling content, maintains consistency across documents, and provides real-time editing suggestions.",
  },
  {
    id: 2,
    icon: "https://ik.imagekit.io/bdq0hopvw/Box%20Inventory-20251209T135643Z-3-001/Box%20Inventory/Pictures/Screenshot%20from%202025-12-09%2018-46-05.png?updatedAt=1765288750631",
    title: "Box Inventory",
    category: "AI Agents & Automation",
    paragraph: "Intelligent customer support agent that handles complex queries, provides instant responses, and escalates issues seamlessly while maintaining brand voice consistency.",
  },
  {
    id: 5,
    icon: PROJECT_IMAGES.CRM_CHARTERED_ACCOUNTANTS,
    title: "Dimple Collection",
    category: "AI Agents & Business",
    paragraph: "AI-powered product intelligence system that analyzes market trends, customer feedback, and business data to provide actionable insights for product development.",
  },
  {
    id: 6,
    icon: "https://ik.imagekit.io/bdq0hopvw/Mill%20Software-20251209T135732Z-3-001/Mill%20Software/Pictures/Screenshot%20from%202025-12-09%2018-49-43.png?updatedAt=1765288726020",
    title: "Mill Software",
    category: "AI Agents & Process",
    paragraph: "Intelligent workflow automation agent that handles complex business processes, manages approvals, and optimizes operations across multiple departments.",
  },
  {
    id: 7,
    icon: "https://ik.imagekit.io/bdq0hopvw/QC%20Product-20251209T135741Z-3-001/QC%20Product/Photos/Screenshot%20from%202025-12-09%2019-08-24.png?updatedAt=1765288710241",
    title: "AI QC Product",
    category: "AI Agents & Analytics",
    paragraph: "Intelligent data analysis agent that processes large datasets, identifies patterns, and generates actionable business intelligence reports automatically.",
  },
  {
    id: 3,
    icon: "https://ik.imagekit.io/bdq0hopvw/Rahiseva-20251209T132744Z-3-001/Rahiseva/Screenshot_2025-12-09-11-43-18-42_16cfac272ac59e829363b15dbbd5ff9a.jpg?tr=w-800,q-90&updatedAt=1765286941544",
    title: "Rahi Seva",
    category: "Transportation App",
    paragraph: "A mobile app that connects passengers with nearby drivers. It allows users to conveniently book rides while offering the unique option to negotiate fares directly with drivers.",
  },

 
];

export default projectsData; 