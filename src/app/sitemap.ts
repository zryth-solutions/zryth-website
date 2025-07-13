import { MetadataRoute } from 'next'
import { getAllPosts } from '@/utils/markdown'
import { generateSitemap } from '@/utils/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zryth.com'
  
  // Get all blog posts with required fields
  const posts = getAllPosts(['slug', 'date'])
  
  // Generate the complete sitemap using the utility function
  return generateSitemap(siteUrl, posts)
} 