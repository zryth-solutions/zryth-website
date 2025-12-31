import { IndustryNews, ImportantTech } from "@/types/newsletter";

export const newsletterData: IndustryNews[] = [
  {
    industry: "Education",
    items: [
      {
        id: 1,
        type: "fact",
        title: "The Fact",
        content: "Platforms like Khan Academy and Duolingo have moved from simple chatbots to 'Cognitive Tutors' that predict a student's struggle before they fail a quiz.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Invest in Learning Record Stores (LRS). The winner in 2026 isn't the one with the best content, but the one with the best real-time feedback loop.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "IndiaAI Future Skills provides fellowships and supports Data & AI Labs in Tier 2/3 cities to build a pipeline of AI-ready professionals. Digital India FutureLABS: Focuses on startups building hardware + AI solutions for assistive learning.",
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
        content: "J.P. Morgan and Mastercard are deploying 'RegTech' agents to move from 'T+1' (next day) reporting to Real-Time Compliance, flagging fraud the millisecond it happens.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Transition from 'Batch' to 'Stream Processing.' Adopt AI-driven auditing tools that integrate directly into your transaction flow.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "RBI Regulatory Sandbox (India): Allows fintechs to test AI-driven compliance and fraud tools in a live environment with regulatory oversight. EU AI Act (Fintech Support): Provides 'Regulatory Sandboxes' specifically to help SMEs align with high-risk AI requirements without heavy initial legal costs.",
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
        content: "NVIDIA and Tesla are leading the shift to 'Physical AI,' where AI models now design and optimize the very silicon chips and robotic workflows used to build them.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Focus on 'Digital Twins.' Use AI to simulate your entire production line virtually; companies using 'Virtual Commissioning' are reducing time-to-market by 40%.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "IndiaAI Compute Pillar: Offers subsidized access to high-end GPUs (at roughly ₹65/hour) for startups and manufacturers to run heavy AI simulations. AI for ALL Global Challenge: Offers awards up to ₹2.5 Cr for AI solutions solving operational efficiency and supply-chain disruptions.",
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
        content: "Content will be added manually.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Content will be added manually.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "Content will be added manually.",
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
        content: "Microsoft (Copilot Agents) and Salesforce (Agentforce) have shifted AI from 'answering emails' to 'managing workflows.' AI agents now autonomously handle inventory rerouting and customer support end-to-end.",
      },
      {
        id: 2,
        type: "stay-ahead",
        title: "How to Stay Ahead",
        content: "Identify your most rule-based workflows. Don't just give employees a chatbot; give them an 'Agent Orchestrator' role where they manage a network of AI workers.",
      },
      {
        id: 3,
        type: "policy",
        title: "Policy/Scheme",
        content: "MSME AI Subsidy Scheme (Proposed): Many regions are introducing 'AI Vouchers' or subsidized credit for small businesses to adopt licensed AI agent tools. Microsoft FY26 Partner Benefits: New Azure credits specifically for Copilot Studio to help partners build and deploy custom autonomous agents.",
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

