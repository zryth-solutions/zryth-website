"use client";

import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";
import { SEOProps } from "@/types/seo";

/**
 * Legacy SEO component for client-side usage
 * Note: For App Router, prefer using the metadata API in page.tsx files
 * This component is maintained for backward compatibility and specific client-side cases
 */
const SEO = ({
    title = "Zryth - AI-Powered Software Solutions for Business",
    description = "Zryth develops custom AI software solutions including CRM systems, booking platforms, and intelligent automation tools. We transform businesses across industries with cutting-edge artificial intelligence technology tailored to solve real-world challenges.",
    keywords = "AI software development, artificial intelligence, CRM systems, cab booking platform, software solutions, web development, mobile app development, custom software, business automation, machine learning",
    ogImage = "/images/og-image.jpg",
    ogType = "website",
    twitterCard = "summary_large_image",
    canonicalUrl,
    noIndex = false,
    noFollow = false,
    schemaData,
    additionalMetaTags = [],
}: SEOProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com";

    // Generate canonical URL with proper query parameter handling
    let currentUrl = canonicalUrl;
    if (!currentUrl) {
        // Clean the pathname and remove query parameters for canonical URL
        const cleanPath = pathname.split("?")[0];
        const normalizedPath = cleanPath === "/" ? "" : cleanPath;
        currentUrl = `${siteUrl}${normalizedPath}`;
    }

    const fullTitle = title.includes("Zryth") ? title : `${title} | Zryth`;

    // Default structured data
    const defaultSchemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Zryth",
        url: siteUrl,
        description: description,
        logo: `${siteUrl}/images/logo/logo.svg`,
        sameAs: [
            "https://www.linkedin.com/company/zryth",
            "https://twitter.com/zryth",
            "https://www.facebook.com/zryth",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "customer service",
            availableLanguage: "English",
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "US",
        },
    };

    const finalSchemaData = schemaData || defaultSchemaData;

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Zryth" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="robots" content={`${noIndex ? "noindex" : "index"}, ${noFollow ? "nofollow" : "follow"}`} />
            <meta name="googlebot" content={`${noIndex ? "noindex" : "index"}, ${noFollow ? "nofollow" : "follow"}`} />

            {/* Google Site Verification */}
            <meta name="google-site-verification" content="OFc8aIrZzjLgKeXNJi0AURx0e2E5aWgzhwEI2ZCucRU" />

            {/* Canonical URL - Properly formatted */}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="Zryth" />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:site" content="@zryth" />
            <meta name="twitter:creator" content="@zryth" />

            {/* Additional Technical Meta Tags */}
            <meta name="theme-color" content="#090E34" />
            <meta name="msapplication-TileColor" content="#090E34" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            {/* Favicon and Icons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* DNS Prefetch for Performance */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />

            {/* Additional Meta Tags */}
            {additionalMetaTags.map((tag, index) => (
                <meta key={index} name={tag.name} content={tag.content} />
            ))}

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(finalSchemaData),
                }}
            />
        </Head>
    );
};

export default SEO; 