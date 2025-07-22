export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  schemaData?: object;
  additionalMetaTags?: { name: string; content: string }[];
}

export interface MetadataConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  alternates?: {
    canonical?: string;
    languages?: { [key: string]: string };
  };
}

export interface BlogPostData {
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
  slug: string;
}

export interface StructuredDataConfig {
  "@context": string;
  "@type": string;
  name?: string;
  url?: string;
  description?: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": string;
    telephone?: string;
    contactType?: string;
    availableLanguage?: string;
  };
  address?: {
    "@type": string;
    addressCountry?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    streetAddress?: string;
  };
}

export interface BlogPostStructuredData {
  "@context": string;
  "@type": string;
  headline?: string;
  description?: string;
  image?: string;
  author?: {
    "@type": string;
    name?: string;
  };
  publisher?: {
    "@type": string;
    name?: string;
    logo?: {
      "@type": string;
      url?: string;
    };
  };
  datePublished?: string;
  dateModified?: string;
  url?: string;
}

export interface LocalBusinessStructuredData {
  "@context": string;
  "@type": string;
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    "@type": string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    "@type": string;
    latitude?: number;
    longitude?: number;
  };
  openingHours?: string[];
  sameAs?: string[];
} 