import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 4C14.95 4 6 12.95 6 24s8.95 20 20 20 20-8.95 20-20S37.05 4 26 4zm0 36c-8.82 0-16-7.18-16-16S17.18 8 26 8s16 7.18 16 16-7.18 16-16 16z"
          fill="white"
        />
        <path
          d="M26 12c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="white"
        />
        <circle cx="26" cy="24" r="4" fill="white" />
      </svg>
    ),
    title: "AI-Powered Development",
    paragraph: "Building smart applications that adapt, learn, and grow with your business needs using cutting-edge AI technologies.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 6H6C4.34 6 3 7.34 3 9v18c0 1.66 1.34 3 3 3h24c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zM6 9h24v3H6V9zm0 18V15h24v12H6z"
          fill="white"
        />
        <rect x="9" y="18" width="6" height="3" fill="white" />
        <rect x="21" y="18" width="6" height="3" fill="white" />
      </svg>
    ),
    title: "Custom Software Solutions",
    paragraph: "Tailored systems designed specifically for your business requirements, from CRM platforms to inventory management.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 2L22.5 10L31 10L24.5 16L27 24L18.5 19L10 24L12.5 16L6 10L14.5 10L18.5 2Z"
          fill="white"
        />
        <circle cx="18.5" cy="30" r="4" fill="white" />
      </svg>
    ),
    title: "Cross-Industry Expertise",
    paragraph: "Proven experience across logistics, recruitment, travel, retail, and more with specialized solutions for each sector.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="29" height="29" rx="4" fill="none" stroke="white" strokeWidth="2" />
        <rect x="8" y="8" width="21" height="4" fill="white" />
        <rect x="8" y="16" width="21" height="4" fill="white" />
        <rect x="8" y="24" width="21" height="4" fill="white" />
        <circle cx="31" cy="6" r="3" fill="white" />
      </svg>
    ),
    title: "End-to-End Service",
    paragraph: "From initial concept to deployment and maintenance, we provide complete project lifecycle management.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default featuresData;
