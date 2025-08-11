import { MetadataRoute } from 'next'

export interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export interface StaticPageConfig {
  path: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Configuration for static pages
export const staticPagesConfig: StaticPageConfig[] = [
  {
    path: '/',
    changeFrequency: 'daily',
    priority: 1.0,
  },
  // COMMENTED OUT - Page not being used
  // {
  //   path: '/about',
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // },
  // COMMENTED OUT - Page not being used
  // {
  //   path: '/contact',
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // },
  // COMMENTED OUT - Page not being used
  // {
  //   path: '/pricing',
  //   changeFrequency: 'weekly',
  //   priority: 0.8,
  // },
  // COMMENTED OUT - Page not being used
  // {
  //   path: '/blogs',
  //   changeFrequency: 'daily',
  //   priority: 0.7,
  // },
  // COMMENTED OUT - Page not being used
  // {
  //   path: '/signin',
  //   changeFrequency: 'monthly',
  //   priority: 0.3,
  // },
  // COMMENTED OUT - Page not being used
  // {
  //   path: '/signup',
  //   changeFrequency: 'monthly',
  //   priority: 0.3,
  // },
]

// Generate sitemap entry for a static page
export function generateStaticPageEntry(
  config: StaticPageConfig,
  siteUrl: string
): SitemapEntry {
  return {
    url: config.path === '/' ? siteUrl : `${siteUrl}${config.path}`,
    lastModified: new Date(),
    changeFrequency: config.changeFrequency,
    priority: config.priority,
  }
}

// COMMENTED OUT - Blog functionality not being used
// Generate sitemap entry for a blog post
// export function generateBlogPostEntry(
//   slug: string,
//   date: string,
//   siteUrl: string
// ): SitemapEntry {
//   return {
//     url: `${siteUrl}/blogs/${slug}`,
//     lastModified: new Date(date),
//     changeFrequency: 'weekly',
//     priority: 0.6,
//   }
// }

// Validate sitemap entry
export function validateSitemapEntry(entry: SitemapEntry): boolean {
  // Check if URL is valid
  try {
    new URL(entry.url)
  } catch {
    return false
  }
  
  // Check if priority is between 0 and 1
  if (entry.priority < 0 || entry.priority > 1) {
    return false
  }
  
  // Check if lastModified is a valid date
  if (!(entry.lastModified instanceof Date) || isNaN(entry.lastModified.getTime())) {
    return false
  }
  
  return true
}

// Generate complete sitemap
export function generateSitemap(
  siteUrl: string,
  blogPosts: Array<{ slug: string; date: string }>
): MetadataRoute.Sitemap {
  // Generate static pages
  const staticPages = staticPagesConfig.map(config => 
    generateStaticPageEntry(config, siteUrl)
  )
  
  // COMMENTED OUT - Blog functionality not being used
  // Generate blog post pages
  // const blogPages = blogPosts.map(post => 
  //   generateBlogPostEntry(post.slug, post.date, siteUrl)
  // )
  
  // Combine and validate all entries
  // const allEntries = [...staticPages, ...blogPages]
  const allEntries = [...staticPages] // Only static pages now
  const validEntries = allEntries.filter(validateSitemapEntry)
  
  return validEntries
} 