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

