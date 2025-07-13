import { Metadata } from "next";
import { MetadataConfig } from "@/types/seo";

export const generateMetadata = (config: MetadataConfig): Metadata => {
  const {
    title = "Zryth - AI-Powered Software Solutions That Transform Your Business",
    description = "At Zryth, we specialize in building cutting-edge software solutions that harness the power of Artificial Intelligence to solve real-world problems across industries. From seamless CRM systems to intelligent cab booking platforms, we bring your vision to life.",
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
      url: canonicalUrl || siteUrl,
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
      canonical: canonicalUrl,
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
  title: "Zryth - AI-Powered Software Solutions That Transform Your Business",
  description: "At Zryth, we specialize in building cutting-edge software solutions that harness the power of Artificial Intelligence to solve real-world problems across industries. From seamless CRM systems to intelligent cab booking platforms, we bring your vision to life.",
  keywords: "AI software development, artificial intelligence, CRM systems, cab booking platform, software solutions, web development, mobile app development, custom software, business automation, machine learning",
  ogImage: "/images/og-image.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  noIndex: false,
  noFollow: false,
};

// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: "Zryth - AI-Powered Software Solutions That Transform Your Business",
    description: "At Zryth, we specialize in building cutting-edge software solutions that harness the power of Artificial Intelligence to solve real-world problems across industries. From seamless CRM systems to intelligent cab booking platforms, we bring your vision to life.",
    keywords: "AI software development, artificial intelligence, CRM systems, cab booking platform, software solutions, web development, mobile app development, custom software, business automation, machine learning",
  },
  about: {
    title: "About Zryth - Leading AI Software Development Company",
    description: "Learn about Zryth, a pioneering AI software development company that specializes in creating innovative solutions for modern businesses. Discover our mission, vision, and the expert team behind our success.",
    keywords: "about zryth, AI software company, software development team, artificial intelligence experts, company mission, technology leadership",
  },
  services: {
    title: "Our Services - Custom AI Software Development | Zryth",
    description: "Explore Zryth's comprehensive range of AI-powered software development services including CRM systems, mobile apps, web development, and custom business solutions.",
    keywords: "AI software services, custom software development, CRM development, mobile app development, web development, business automation",
  },
  contact: {
    title: "Contact Zryth - Get Your AI Software Solution Today",
    description: "Ready to transform your business with AI-powered software solutions? Contact Zryth today for a free consultation and discover how we can help your business grow.",
    keywords: "contact zryth, AI software consultation, get quote, software development inquiry, business transformation",
  },
  blog: {
    title: "Zryth Blog - Latest Insights on AI & Software Development",
    description: "Stay updated with the latest trends in AI, software development, and business technology. Read expert insights and industry analysis from the Zryth team.",
    keywords: "AI blog, software development blog, technology insights, artificial intelligence news, business technology",
  },
  pricing: {
    title: "Pricing - Affordable AI Software Development | Zryth",
    description: "Discover transparent pricing for Zryth's AI software development services. Choose from flexible packages designed to fit your budget and business needs.",
    keywords: "software development pricing, AI solution costs, affordable software development, custom software pricing, development packages",
  },
}; 