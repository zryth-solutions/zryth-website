// Export the main SEO component
export { default } from "../SEO";

// Export types
export type { SEOProps, MetadataConfig, StructuredDataConfig, BlogPostStructuredData, LocalBusinessStructuredData } from "@/types/seo";

// Export utilities
export { generateMetadata, defaultSEOConfig, pageSEOConfigs } from "@/utils/metadata";

// Usage Examples:

/*
=== FOR APP ROUTER (Server Components) ===
Use the metadata utility in your page.tsx files:

// src/app/about/page.tsx
import { generateMetadata, pageSEOConfigs } from "@/components/Common/SEO";

export const metadata = generateMetadata(pageSEOConfigs.about);

export default function AboutPage() {
  return <div>About content</div>;
}

=== FOR CLIENT COMPONENTS ===
Use the SEO component directly:

// src/components/SomeComponent/index.tsx
import SEO from "@/components/Common/SEO";

export default function SomeComponent() {
  return (
    <>
      <SEO
        title="Custom Page Title"
        description="Custom page description"
        keywords="custom, keywords, here"
        ogImage="/images/custom-og-image.jpg"
      />
      <div>Page content</div>
    </>
  );
}

=== FOR BLOG POSTS ===
Use with structured data:

// src/app/blog/[slug]/page.tsx
import { generateMetadata } from "@/components/Common/SEO";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    ogImage: post.featuredImage,
    canonicalUrl: `https://zryth.com/blog/${params.slug}`,
  });
}

=== FOR DYNAMIC PAGES ===
Use with custom structured data:

const blogPostSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Your Blog Post Title",
  description: "Your blog post description",
  image: "https://zryth.com/images/blog-post.jpg",
  author: {
    "@type": "Person",
    name: "Zryth Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Zryth",
    logo: {
      "@type": "ImageObject",
      url: "https://zryth.com/images/logo/logo.svg",
    },
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
};

<SEO
  title="Blog Post Title"
  description="Blog post description"
  schemaData={blogPostSchema}
/>
*/ 