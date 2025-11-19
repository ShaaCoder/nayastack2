import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/lib/models/BlogPost';

export async function GET() {
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
      { url: '/', lastmod: new Date().toISOString(), priority: 1.0, changefreq: 'monthly' },
      { url: '/about', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
      { url: '/services', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
      { url: '/portfolio', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
      { url: '/blog', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'weekly' },
      { url: '/contact', lastmod: new Date().toISOString(), priority: 0.8, changefreq: 'monthly' },
      { url: '/grow-business', lastmod: new Date().toISOString(), priority: 0.7, changefreq: 'monthly' },
      { url: '/privacy-policy', lastmod: new Date().toISOString(), priority: 0.3, changefreq: 'yearly' },
    ];
    
    // Dynamic routes for blog posts
    const blogRoutes = blogPosts.map(post => ({
      url: `/blog/${post.slug}`,
      lastmod: post.updated_at ? new Date(post.updated_at).toISOString() : new Date(post.published_at).toISOString(),
      priority: 0.6,
      changefreq: 'monthly'
    }));
    
    // Combine all routes
    const allRoutes = [...staticRoutes, ...blogRoutes];
    
    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`;

    // Return the XML with appropriate content type
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate sitemap' },
      { status: 500 }
    );
  }
}