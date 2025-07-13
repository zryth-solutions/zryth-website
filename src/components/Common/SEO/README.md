# SEO System Documentation

This comprehensive SEO system provides everything you need to optimize your website for search engines and social media sharing.

## Features

- ✅ **Complete Meta Tags**: Title, description, keywords, author, viewport, and more
- ✅ **Google Site Verification**: Integrated with your verification code
- ✅ **Open Graph Meta Tags**: Perfect for Facebook and LinkedIn sharing
- ✅ **Twitter Card Meta Tags**: Optimized for Twitter sharing
- ✅ **JSON-LD Structured Data**: Helps search engines understand your content
- ✅ **Canonical URLs**: Prevents duplicate content issues
- ✅ **Robots.txt**: Dynamic robots.txt generation with proper crawling rules
- ✅ **Sitemap.xml**: Automatic sitemap generation for all pages and blog posts
- ✅ **Robots & Googlebot Control**: Full control over indexing
- ✅ **Performance Optimization**: DNS prefetching and optimized loading
- ✅ **TypeScript Support**: Full type safety and IntelliSense
- ✅ **Next.js 15 App Router**: Compatible with the latest Next.js features

## File Structure

```
src/
├── app/
│   ├── robots.ts          # Dynamic robots.txt generation
│   └── sitemap.ts         # Dynamic sitemap.xml generation
├── components/
│   └── Common/
│       └── SEO/
│           ├── index.tsx  # Main SEO component export
│           └── README.md  # This documentation
├── types/
│   └── seo.ts            # TypeScript types for SEO
└── utils/
    ├── metadata.ts       # Metadata generation utilities
    └── sitemap.ts        # Sitemap generation utilities
```

## Quick Start

### 1. For App Router Pages (Recommended)

Use the `generateMetadata` utility in your page files:

```tsx
// src/app/about/page.tsx
import { generateMetadata, pageSEOConfigs } from "@/utils/metadata";

export const metadata = generateMetadata(pageSEOConfigs.about);

export default function AboutPage() {
  return <div>About content</div>;
}
```

### 2. For Client Components

Use the SEO component directly:

```tsx
// src/components/MyComponent/index.tsx
import SEO from "@/components/Common/SEO";

export default function MyComponent() {
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
```

## Robots.txt Configuration

The system automatically generates a robots.txt file at `/robots.txt` with:

- **Allow all crawlers** to index public pages
- **Disallow crawlers** from private areas like `/api/`, `/admin/`, `/auth/`
- **Special rules** for Googlebot and Bingbot
- **Sitemap reference** pointing to your sitemap.xml

### Customize Robots.txt

Edit `src/app/robots.ts` to modify crawling rules:

```tsx
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      }
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

## Sitemap.xml Configuration

The system automatically generates a sitemap.xml file at `/sitemap.xml` with:

- **All static pages** with appropriate priorities and change frequencies
- **All blog posts** with publication dates and update frequencies
- **Proper URL structure** with your domain
- **Validation** to ensure all URLs are properly formatted

### Customize Sitemap

Edit `src/utils/sitemap.ts` to modify page configurations:

```tsx
// Add new static pages
export const staticPagesConfig: StaticPageConfig[] = [
  {
    path: '/new-page',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  // ... other pages
]
```

## API Reference

### SEO Component Props

```tsx
interface SEOProps {
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
```

### generateMetadata Function

```tsx
generateMetadata(config: MetadataConfig): Metadata
```

### Sitemap Utilities

```tsx
// Generate sitemap entry for static page
generateStaticPageEntry(config: StaticPageConfig, siteUrl: string): SitemapEntry

// Generate sitemap entry for blog post
generateBlogPostEntry(slug: string, date: string, siteUrl: string): SitemapEntry

// Validate sitemap entry
validateSitemapEntry(entry: SitemapEntry): boolean

// Generate complete sitemap
generateSitemap(siteUrl: string, blogPosts: Array<{slug: string; date: string}>): MetadataRoute.Sitemap
```

## Pre-configured Page SEO

The system comes with pre-configured SEO for common pages:

```tsx
import { pageSEOConfigs } from "@/utils/metadata";

// Available configurations:
// - pageSEOConfigs.home
// - pageSEOConfigs.about
// - pageSEOConfigs.services
// - pageSEOConfigs.contact
// - pageSEOConfigs.blog
// - pageSEOConfigs.pricing
```

## Custom Configuration

### Override Default SEO

```tsx
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Custom Title",
  description: "Custom description",
  keywords: "custom, keywords",
  ogImage: "/images/custom-og.jpg",
  canonicalUrl: "https://yourdomain.com/custom-page",
});
```

### Blog Post SEO

```tsx
// src/app/blog/[slug]/page.tsx
import { generateMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    ogImage: post.featuredImage,
    canonicalUrl: `https://zryth.com/blog/${params.slug}`,
  });
}
```

### Custom Structured Data

```tsx
const customSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Your Product Name",
  description: "Product description",
  image: "https://yourdomain.com/product-image.jpg",
  offers: {
    "@type": "Offer",
    price: "99.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  }
};

<SEO
  title="Product Page"
  description="Product description"
  schemaData={customSchema}
/>
```

## Environment Variables

Set up your environment variables for optimal SEO:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Testing Your SEO Implementation

### 1. Test Robots.txt
Visit `http://localhost:3000/robots.txt` to verify your robots.txt is working correctly.

### 2. Test Sitemap.xml
Visit `http://localhost:3000/sitemap.xml` to verify your sitemap is generating properly.

### 3. Test Meta Tags
Use these tools to validate your SEO implementation:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Search Console](https://search.google.com/search-console)

### 4. Local Testing
```bash
npm run build
npm run start
```

Then check your page source to verify all meta tags are present.

## Best Practices

### 1. Title Tags
- Keep titles under 60 characters
- Include your brand name
- Use unique titles for each page

### 2. Meta Descriptions
- Keep descriptions between 150-160 characters
- Include your main keywords naturally
- Write compelling descriptions that encourage clicks

### 3. Keywords
- Use relevant keywords separated by commas
- Focus on long-tail keywords
- Don't stuff keywords

### 4. Open Graph Images
- Use images with 1200x630 pixels
- Include your logo or branding
- Keep file sizes under 300KB

### 5. Structured Data
- Use appropriate schema types for your content
- Test with Google's Rich Results Test
- Keep structured data up to date

### 6. Robots.txt
- Block sensitive directories like `/admin/` and `/api/`
- Allow access to public content
- Include your sitemap reference

### 7. Sitemap.xml
- Include all important pages
- Set appropriate priorities (0.0 to 1.0)
- Use realistic change frequencies
- Keep URLs under 50,000 per sitemap

## Migration from Old System

If you're migrating from the old metadata system:

1. **Remove old metadata exports**:
```tsx
// Remove this:
export const metadata: Metadata = {
  title: "Old Title",
  description: "Old description",
};
```

2. **Import and use new system**:
```tsx
// Add this:
import { generateMetadata, pageSEOConfigs } from "@/utils/metadata";
export const metadata = generateMetadata(pageSEOConfigs.about);
```

3. **Update existing pages** by following the examples in this documentation.

## Troubleshooting

### Common Issues:

1. **Meta tags not appearing**: Make sure you're using the component correctly in client components or the metadata utility in server components.

2. **Duplicate meta tags**: Don't use both the SEO component and metadata export in the same page.

3. **Environment variables not working**: Ensure `NEXT_PUBLIC_SITE_URL` is set correctly.

4. **Structured data errors**: Test your structured data with Google's Rich Results Test.

5. **Robots.txt not working**: Check that `src/app/robots.ts` exists and builds correctly.

6. **Sitemap not generating**: Verify that your blog posts have `slug` and `date` fields available.

## Performance Considerations

- **Static Generation**: Both robots.txt and sitemap.xml are generated at build time
- **Caching**: Files are cached by CDN and browsers
- **Validation**: Sitemap entries are validated before inclusion
- **Memory Efficient**: Uses streaming for large sitemaps

## Support

For issues or questions about the SEO system, please check:
- The examples in this documentation
- The TypeScript types for available props
- The pre-configured page SEO configurations
- Test your implementation with the provided tools

---

**Note**: This SEO system is specifically designed for Next.js 15 with the App Router. For Pages Router, you may need to make modifications. 