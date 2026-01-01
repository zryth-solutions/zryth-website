import { IndustryNews, ImportantTech } from "@/types/newsletter";

export const newsletterData: IndustryNews[] = [
  {
    industry: "Education",
    items: [
      {
        id: 1,
        type: "fact",
        title: "The Fact",
        content: "AI tutors using multimodal models are now outperforming traditional LMS systems in personalized learning outcomes at scale.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Shift from content delivery platforms to AI-driven adaptive learning and assessment engines.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "NEP 2020 (India) encourages AI-enabled personalized learning and digital public infrastructure for education.",
      },
    ],
  },
  {
    industry: "Finance",
    items: [
      {
        id: 1,
        type: "fact",
        title: "The Fact",
        content: "Global banks are deploying AI agents for real-time AML and fraud detection, replacing T+1 compliance cycles.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Move from batch-based audits to streaming, AI-native compliance embedded into transaction flows.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "RBI Regulatory Sandbox (India) and EU AI Act Fintech provisions support controlled deployment of AI in finance.",
      },
    ],
  },
  {
    industry: "Manufacturing",
    items: [
      {
        id: 1,
        type: "fact",
        title: "The Fact",
        content: "AI-driven predictive maintenance is reducing unplanned downtime by double-digit percentages in discrete manufacturing.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Integrate AI models directly with IoT and ERP systems for real-time operational decision-making.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "India's SAMARTH Udyog Bharat 4.0 promotes AI adoption in smart factories and industrial automation.",
      },
    ],
  },
  {
    industry: "Healthcare",
    items: [
      {
        id: 1,
        type: "fact",
        title: "The Fact",
        content: "AI diagnostic models are now achieving near-specialist accuracy in radiology and pathology workflows.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Adopt AI as a clinical decision support layer rather than a standalone diagnostic tool.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "India's ABDM (Ayushman Bharat Digital Mission) enables AI-ready health data interoperability.",
      },
    ],
  },
  {
    industry: "Pharma",
    items: [
      {
        id: 1,
        type: "fact",
        title: "The Fact",
        content: "AI-led drug discovery platforms are cutting early-stage molecule discovery timelines by years.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Use AI for target identification and trial optimization, not just lab automation.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "India's National Biopharma Mission supports AI-driven R&D and translational research in pharma.",
      },
    ],
  },
  {
    industry: "Business",
    items: [
      {
        id: 1,
        type: "fact",
        title: "The Fact",
        content: "AI copilots are becoming core to enterprise workflows, replacing manual reporting and decision support.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Build AI-first business processes instead of retrofitting AI onto legacy systems.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "Digital India and ONDC initiatives encourage AI-enabled platforms for MSME growth and scale.",
      },
    ],
  },
  {
    industry: "AI Hots",
    items: [
      {
        id: 1,
        type: "fact",
        title: "AI Tools You Need",
        content: "[Gemini 3](https://gemini.google.com): Integrated with Google Docs, Sheets, and Forms for office productivity. [Manus AI](https://www.manus.ai): Advanced image and graphics generation. [Claude](https://claude.ai): Coding and logical task automation. Marketing Stack: [Blaze](https://www.blaze.ai) and [Holo](https://www.holo.build) for campaign automation.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "Latest AI Update",
        content: "2025 was the year of Agentic AI; 2026 brings Continual Learning models that adapt in real-time. AI backlash around unemployment is growing, making 'Made by Human' a premium positioning. NVIDIA's acquisition of Grok signals major market consolidation investors should watch closely. AI Agents are production-ready and poised to transform job roles this year.",
      },
      {
        id: 3,
        type: "policy",
        title: "Companies to Root For",
        content: "[NVIDIA](https://www.nvidia.com/en-us/ai/): Leading AI infrastructure and chipsets. [Google](https://ai.google/): Gemini ecosystem and enterprise AI. [Grok (xAI)](https://x.ai/): Emerging conversational AI platform. [Physical Intelligence](https://www.physicalintelligence.company/): Robotics and embodied AI. SIM2: Simulation and digital twin technology.",
      },
    ],
  },
];

export const importantTechData: ImportantTech[] = [
  {
    id: 1,
    title: "Call center automation",
    description: "voice bots, speech-to-text, sentiment, QA, next-best-action",
  },
  {
    id: 2,
    title: "Back-office automation in accounting",
    description: "invoice/bookkeeping automation, reconciliations, audit trails, compliance copilots",
  },
  {
    id: 3,
    title: "Data analysis & decision intelligence",
    description: "BI copilots, forecasting, anomaly detection, real-time analytics",
  },
  {
    id: 4,
    title: "Quantum (invest/prepare now)",
    description: "quantum-safe security, optimization, materials discovery, hybrid quantum-AI",
  },
  {
    id: 5,
    title: "VR → XR breakthroughs",
    description: "spatial computing, digital twins, training/simulation, immersive commerce & collaboration",
  },
  {
    id: 6,
    title: "Bioscience & healthtech",
    description: "drug discovery, genomics, diagnostics, personalized medicine, lab automation",
  },
];

