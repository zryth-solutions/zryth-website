import { Metadata } from "next";
import { MetadataConfig } from "@/types/seo";

/**
 * Generates canonical URL by cleaning the path and removing query parameters
 */
const generateCanonicalUrl = (path: string, siteUrl: string): string => {
  // Handle homepage
  if (path === "/" || path === "") {
    return siteUrl;
  }
  
  // Remove query parameters and ensure proper formatting
  const cleanPath = path.split("?")[0];
  
  // Ensure path starts with /
  const normalizedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  
  // Remove trailing slash unless it's the root
  const finalPath = normalizedPath !== "/" && normalizedPath.endsWith("/") 
    ? normalizedPath.slice(0, -1) 
    : normalizedPath;
  
  return `${siteUrl}${finalPath}`;
};

export const generateMetadata = (config: MetadataConfig, currentPath?: string): Metadata => {
  const {
    title = "Zryth - AI-Powered Software Solutions for Business",
    description = "Zryth develops custom AI software solutions including CRM systems, booking platforms, and intelligent automation tools. We transform businesses across industries with cutting-edge artificial intelligence technology tailored to solve real-world challenges.",
    keywords = "AI software development, artificial intelligence, CRM systems, cab booking platform, software solutions, web development, mobile app development, custom software, business automation, machine learning",
    ogImage = "/images/og-image.jpg",
    ogType = "website",
    twitterCard = "summary_large_image",
    canonicalUrl,
    noIndex = false,
    noFollow = false,
  } = config;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com";
  const fullTitle = title.includes("Zryth") ? title : `${title} | Zryth`;
  
  // Generate canonical URL - use provided canonicalUrl or generate from currentPath
  let finalCanonicalUrl = canonicalUrl;
  if (!finalCanonicalUrl && currentPath) {
    finalCanonicalUrl = generateCanonicalUrl(currentPath, siteUrl);
  } else if (!finalCanonicalUrl) {
    finalCanonicalUrl = siteUrl; // fallback to homepage
  }

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: "Zryth Team" }],
    creator: "Zryth",
    publisher: "Zryth",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: ogType as any,
      locale: "en_US",
      url: finalCanonicalUrl,
      title: fullTitle,
      description,
      siteName: "Zryth",
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterCard as any,
      title: fullTitle,
      description,
      images: [`${siteUrl}${ogImage}`],
      creator: "@zryth",
      site: "@zryth",
    },
    alternates: {
      canonical: finalCanonicalUrl,
    },
    verification: {
      google: "OFc8aIrZzjLgKeXNJi0AURx0e2E5aWgzhwEI2ZCucRU",
    },
    other: {
      "theme-color": "#090E34",
      "msapplication-TileColor": "#090E34",
      "msapplication-config": "/browserconfig.xml",
    },
  };
};

export const defaultSEOConfig: MetadataConfig = {
  title: "Zryth - AI-Powered Software Solutions for Business",
  description: "Zryth develops custom AI software solutions including CRM systems, booking platforms, and intelligent automation tools. We transform businesses across industries with cutting-edge artificial intelligence technology tailored to solve real-world challenges.",
  keywords: "AI software development, artificial intelligence, CRM systems, cab booking platform, software solutions, web development, mobile app development, custom software, business automation, machine learning",
  ogImage: "/images/og-image.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  noIndex: false,
  noFollow: false,
};

// Page-specific SEO configurations with canonical URLs
export const pageSEOConfigs = {
  home: {
    title: "Zryth - AI-Powered Software Solutions for Business",
    description: "Zryth develops custom AI software solutions including CRM systems, booking platforms, and intelligent automation tools. We transform businesses across industries with cutting-edge artificial intelligence technology tailored to solve real-world challenges.",
    keywords: "AI software development, artificial intelligence, CRM systems, cab booking platform, software solutions, web development, mobile app development, custom software, business automation, machine learning",
    canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com",
  },
  about: {
    title: "About Zryth - Leading AI Software Development Company",
    description: "Learn about Zryth, a pioneering AI software development company that specializes in creating innovative solutions for modern businesses. Discover our mission, vision, and the expert team behind our success.",
    keywords: "about zryth, AI software company, software development team, artificial intelligence experts, company mission, technology leadership",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/about`,
  },
  services: {
    title: "Our Services - Custom AI Software Development | Zryth",
    description: "Explore Zryth's comprehensive range of AI-powered software development services including CRM systems, mobile apps, web development, and custom business solutions.",
    keywords: "AI software services, custom software development, CRM development, mobile app development, web development, business automation",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/services`,
  },
  contact: {
    title: "Contact Zryth - Get Your AI Software Solution Today",
    description: "Ready to transform your business with AI-powered software solutions? Contact Zryth today for a free consultation and discover how we can help your business grow.",
    keywords: "contact zryth, AI software consultation, get quote, software development inquiry, business transformation",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/contact`,
  },
  blog: {
    title: "Zryth Blog - Latest Insights on AI & Software Development",
    description: "Stay updated with the latest trends in AI, software development, and business technology. Read expert insights and industry analysis from the Zryth team.",
    keywords: "AI blog, software development blog, technology insights, artificial intelligence news, business technology",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/blogs`,
  },
  pricing: {
    title: "Pricing - Affordable AI Software Development | Zryth",
    description: "Discover transparent pricing for Zryth's AI software development services. Choose from flexible packages designed to fit your budget and business needs.",
    keywords: "software development pricing, AI solution costs, affordable software development, custom software pricing, development packages",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/pricing`,
  },
  booking: {
    title: "Book a Consultation - Start Your AI Project | Zryth",
    description: "Schedule a free consultation with our AI software development experts. Let's discuss your project requirements and how we can help transform your business.",
    keywords: "book consultation, AI project consultation, software development meeting, free consultation, project discussion",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/booking`,
  },
  // Auth pages
  signin: {
    title: "Sign In - Access Your Zryth Account",
    description: "Sign in to your Zryth account to access your AI software projects, manage your services, and collaborate with our development team.",
    keywords: "sign in, login, zryth account, access dashboard, client portal",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/signin`,
    noIndex: true, // Auth pages typically shouldn't be indexed
  },
  signup: {
    title: "Sign Up - Create Your Zryth Account",
    description: "Create a Zryth account to start your AI software development journey. Get access to our services and begin transforming your business with artificial intelligence.",
    keywords: "sign up, register, create account, zryth registration, new client",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/signup`,
    noIndex: true,
  },
  forgotPassword: {
    title: "Reset Password - Zryth Account Recovery",
    description: "Forgot your password? Reset your Zryth account password securely and regain access to your AI software projects and services.",
    keywords: "reset password, forgot password, account recovery, password reset",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/forgot-password`,
    noIndex: true,
  },
  resetPassword: {
    title: "Create New Password - Zryth Account",
    description: "Create a new secure password for your Zryth account. Complete the password reset process and regain access to your services.",
    keywords: "new password, password reset, account security, zryth account",
    noIndex: true, // Don't provide canonicalUrl for token-based pages
  },
  // Error pages
  notFound: {
    title: "Page Not Found - Zryth",
    description: "The page you're looking for doesn't exist. Explore our AI software development services and discover how we can help transform your business.",
    keywords: "404, page not found, zryth services, AI software development",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/404`,
    noIndex: true,
  },
  error: {
    title: "Error - Zryth",
    description: "An error occurred while loading the page. Please try again or contact our support team for assistance with your AI software needs.",
    keywords: "error, technical issue, support, zryth help",
    noIndex: true,
  },
};

/**
 * Helper function to generate metadata for auth pages with consistent structure
 */
export const generateAuthMetadata = (pageType: keyof typeof pageSEOConfigs): Metadata => {
  const config = pageSEOConfigs[pageType];
  return generateMetadata(config);
}; 