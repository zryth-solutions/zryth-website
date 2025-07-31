import { Metadata } from "next";
import { MetadataConfig, BlogPostData } from "@/types/seo";

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
    description = "Transform your business with AI-powered software solutions. Custom CRM systems, booking platforms, and automation tools for modern enterprises.",
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

/**
 * Specialized function for generating blog post metadata
 * Provides consistent SEO for dynamic blog content
 */
export const generateBlogMetadata = (post: Partial<BlogPostData>, slug: string): Metadata => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com";
  const siteName = "Zryth";
  const authorName = post.author || "Zryth Team";
  const canonicalUrl = `${siteUrl}/blogs/${slug}`;
  
  if (!post.title) {
    // Fallback for missing post
    return {
      title: `Blog Post Not Found | ${siteName}`,
      description: "The requested blog post could not be found. Explore our other articles on AI and software development.",
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      alternates: {
        canonical: `${siteUrl}/blogs`,
      },
    };
  }

  const fullTitle = `${post.title} | ${siteName}`;
  const description = post.description 
    ? (post.description.length > 160 ? post.description.slice(0, 157) + "..." : post.description)
    : `Read this insightful article about ${post.title} on the Zryth blog.`;
  const ogImage = post.image || "/images/og-image.jpg";

  return {
    title: fullTitle,
    description,
    authors: [{ name: authorName }],
    creator: authorName,
    publisher: siteName,
    keywords: "AI software development, technology insights, business automation, artificial intelligence, software solutions",
    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.datePublished ? new Date(post.datePublished).toISOString() : undefined,
      modifiedTime: post.dateModified ? new Date(post.dateModified).toISOString() : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}${ogImage}`],
      creator: "@zryth",
      site: "@zryth",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:author": authorName,
      "article:section": "Technology",
      "theme-color": "#090E34",
    },
  };
};

export const defaultSEOConfig: MetadataConfig = {
  title: "Zryth - AI-Powered Software Solutions for Business",
  description: "Transform your business with AI-powered software solutions. Custom CRM systems, booking platforms, and automation tools for modern enterprises.",
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
    description: "Transform your business with AI-powered software solutions. Custom CRM systems, booking platforms, and automation tools for modern enterprises.",
    keywords: "AI software development, artificial intelligence, CRM systems, cab booking platform, software solutions, web development, mobile app development, custom software, business automation, machine learning",
    canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com",
  },
  // COMMENTED OUT - Page not being used
  // about: {
  //   title: "About Zryth - Leading AI Software Development Company",
  //   description: "Learn about Zryth, a pioneering AI software company creating innovative solutions for modern businesses. Meet our expert team and discover our mission.",
  //   keywords: "about zryth, AI software company, software development team, artificial intelligence experts, company mission, technology leadership",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/about`,
  // },
  services: {
    title: "Our Services - Custom AI Software Development | Zryth",
    description: "Explore Zryth's AI-powered software services including CRM systems, mobile apps, web development, and custom business automation solutions.",
    keywords: "AI software services, custom software development, CRM development, mobile app development, web development, business automation",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/services`,
  },
  // COMMENTED OUT - Page not being used
  // contact: {
  //   title: "Contact Zryth - Get Your AI Software Quote Today",
  //   description: "Contact Zryth for custom AI software development. Get expert consultation on CRM systems, web development, and business automation solutions.",
  //   keywords: "contact zryth, AI software consultation, custom software quote, CRM development inquiry, business automation",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/contact`,
  // },
  // COMMENTED OUT - Page not being used
  // blog: {
  //   title: "Zryth Blog - AI Software Development Insights",
  //   description: "Read the latest insights on AI software development, technology trends, and business automation from Zryth's expert team.",
  //   keywords: "AI software blog, technology insights, software development articles, artificial intelligence trends, business automation tips",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/blogs`,
  // },
  // COMMENTED OUT - Page not being used
  // pricing: {
  //   title: "Pricing - Affordable AI Software Development | Zryth",
  //   description: "Discover Zryth's competitive pricing for AI software development services. Transparent costs for CRM systems, web development, and automation solutions.",
  //   keywords: "AI software pricing, custom software cost, CRM development price, web development rates, software consultation fees",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/pricing`,
  // },
  // COMMENTED OUT - Page not being used
  // booking: {
  //   title: "Book Consultation - Schedule AI Software Development Meeting | Zryth",
  //   description: "Schedule a consultation with Zryth's AI software experts. Discuss your project requirements and get personalized recommendations for your business.",
  //   keywords: "book consultation, AI software meeting, project discussion, expert consultation, software development planning",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/booking`,
  // },
  // Auth pages
  // COMMENTED OUT - Page not being used
  // signin: {
  //   title: "Sign In - Access Your Zryth Account",
  //   description: "Sign in to your Zryth account to access your AI software projects, manage services, and collaborate with our development team.",
  //   keywords: "sign in, login, zryth account, access dashboard, client portal",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/signin`,
  //   noIndex: true, // Auth pages typically shouldn't be indexed
  // },
  // COMMENTED OUT - Page not being used
  // signup: {
  //   title: "Sign Up - Create Your Zryth Account",
  //   description: "Create a Zryth account to start your AI software development journey. Access our services and transform your business with AI technology.",
  //   keywords: "sign up, register, create account, zryth registration, new client",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/signup`,
  //   noIndex: true,
  // },
  // COMMENTED OUT - Page not being used
  // forgotPassword: {
  //   title: "Reset Password - Zryth Account Recovery",
  //   description: "Forgot your password? Reset your Zryth account password securely and regain access to your AI software projects and services.",
  //   keywords: "reset password, forgot password, account recovery, password reset",
  //   canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/forgot-password`,
  //   noIndex: true,
  // },
  // COMMENTED OUT - Page not being used
  // resetPassword: {
  //   title: "Create New Password - Zryth Account",
  //   description: "Create a new secure password for your Zryth account. Complete the password reset process and regain access to your services.",
  //   keywords: "new password, password reset, account security, zryth account",
  //   noIndex: true, // Don't provide canonicalUrl for token-based pages
  // },
  // Error pages
  notFound: {
    title: "Page Not Found - Zryth",
    description: "The page you're looking for doesn't exist. Explore Zryth's AI software development services and find what you need.",
    keywords: "404 error, page not found, zryth navigation",
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

/**
 * Helper function to generate structured data for different content types
 */
export const generateStructuredData = {
  organization: (siteUrl: string) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zryth",
    url: siteUrl,
    description: "AI-powered software development company specializing in custom solutions",
    logo: `${siteUrl}/images/logo/logo.svg`,
    sameAs: [
      "https://www.linkedin.com/company/zryth",
      "https://twitter.com/zryth",
      "https://www.facebook.com/zryth",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
  }),
  
  article: (article: {
    title: string;
    description: string;
    image: string;
    author: string;
    datePublished: string;
    dateModified: string;
    url: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Zryth",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com"}/images/logo/logo.svg`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    url: article.url,
  }),
  
  website: (siteUrl: string) => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zryth",
    url: siteUrl,
    description: "AI-powered software solutions for modern businesses",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }),
}; 