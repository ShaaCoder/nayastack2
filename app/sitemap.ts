import { MetadataRoute } from 'next';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/lib/models/BlogPost';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    await connectDB();
    
    // Fetch all published blog posts
    const blogPosts = await BlogPost.find({ status: 'published' })
      .sort({ published_at: -1 })
      .lean();

    // Base URL of your website
    const baseUrl = 'https://nayastack.com';
    
    // Static routes
    const staticRoutes = [
      { url: baseUrl, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
      { url: `${baseUrl}/services`, lastModified: new Date() },
      { url: `${baseUrl}/portfolio`, lastModified: new Date() },
      { url: `${baseUrl}/blog`, lastModified: new Date() },
      { url: `${baseUrl}/contact`, lastModified: new Date() },
      { url: `${baseUrl}/grow-business`, lastModified: new Date() },
      { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    ];
    
    // Dynamic routes for blog posts
    const blogRoutes = blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updated_at ? new Date(post.updated_at) : new Date(post.published_at),
    }));
    
    // Combine all routes
    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return a minimal sitemap in case of error
    return [
      { url: 'https://nayastack.com', lastModified: new Date() },
    ];
  }
}