// app/blog/page.tsx (Updated)
import { BlogList } from '@/components/blog/blog-list';
import { BlogSearch } from '@/components/blog/blog-search';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BlogHeader } from '@/components/blog/BlogHeader';

export const metadata = {
  title: 'Blog - nayastack',
  description: 'Insights, tutorials, and industry news from our web development experts.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12 relative overflow-hidden">
        {/* Hero-like BG: Dark gradient with radials */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlogHeader />
          
          <BlogSearch />
          <BlogList />
        </div>
      </main>
      <Footer />
    </div>
  );
}