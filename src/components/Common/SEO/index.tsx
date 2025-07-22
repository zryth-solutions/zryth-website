// Export types
export type {
  SEOProps,
  MetadataConfig,
  StructuredDataConfig,
  BlogPostStructuredData,
  LocalBusinessStructuredData,
  BlogPostData
} from "@/types/seo";

// Export utilities
export {
  generateMetadata,
  generateBlogMetadata,
  defaultSEOConfig,
  pageSEOConfigs,
  generateAuthMetadata,
  generateStructuredData
} from "@/utils/metadata";

// Usage Examples for Next.js 14+ App Router:

/*
=== BASIC PAGE METADATA ===
Use in your page.tsx or layout.tsx files:

// src/app/about/page.tsx
import { generateMetadata, pageSEOConfigs } from "@/utils/metadata";

export const metadata = generateMetadata(pageSEOConfigs.about);

export default function AboutPage() {
  return <div>About content</div>;
}

=== DYNAMIC BLOG METADATA ===
Use the specialized blog function for consistent blog SEO:

// src/app/blog/[slug]/page.tsx
import { generateBlogMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ["title", "excerpt", "author", "coverImage", "date"]);
  
  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: post.author,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://zryth.com/blog/${slug}`,
    slug
  }, slug);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  // Optional: Add structured data for the article
  const articleSchema = generateStructuredData.article({
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: post.author,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://zryth.com/blog/${params.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
}

=== STRUCTURED DATA IN LAYOUT ===
Add organization schema to your root layout:

// src/app/layout.tsx
import { generateStructuredData } from "@/utils/metadata";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com";
  const organizationSchema = generateStructuredData.organization(siteUrl);

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

=== CUSTOM METADATA ===
Create custom metadata for specific pages:

// src/app/custom-page/page.tsx
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Custom Page Title",
  description: "This is a custom page with specific metadata for better SEO targeting and user experience.",
  keywords: "custom, page, specific, keywords",
  ogImage: "/images/custom-page-og.jpg",
  canonicalUrl: "https://zryth.com/custom-page",
});

export default function CustomPage() {
  return <div>Custom page content</div>;
}

=== AUTH PAGES ===
Use the specialized auth metadata helper:

// src/app/(auth)/signin/page.tsx
import { generateAuthMetadata } from "@/utils/metadata";

export const metadata = generateAuthMetadata('signin');

export default function SignInPage() {
  return <div>Sign in form</div>;
}
*/ 