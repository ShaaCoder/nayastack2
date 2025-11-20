"use client";
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/layout/header';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { ChevronLeft, Share2, ExternalLink } from 'lucide-react'; // Added icons for better UX
import { motion } from 'framer-motion'; // Added for subtle animations to match other pages

const portfolioData = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'An online store with modern UX and secure checkout.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    content: `
      We built a fully-featured e-commerce system for a client in the fashion industry. 
      The solution includes Stripe integration, a CMS dashboard, product filtering, and performance optimizations.
    `,
    technologies: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Stripe', icon: 'stripe' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
    demoUrl: 'https://example.com/ecommerce-demo',
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'A smart assistant powered by GPT for 24/7 support.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    content: `
      Designed and integrated a chatbot using OpenAI for a SaaS customer service platform. 
      The bot answers user queries, helps with onboarding, and passes leads to live agents.
    `,
    technologies: [
      { name: 'OpenAI', icon: 'openai' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Socket.IO', icon: 'socketdotio' },
      { name: 'Tailwind', icon: 'tailwindcss' },
    ],
    demoUrl: 'https://example.com/chatbot-demo',
  },
  {
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'Interactive admin panel for real-time analytics and user management.', // Fixed: Was incorrectly set to image URL
    image: '/portfolio/dashboard.jpg',
    content: `
      Built with Next.js and Tailwind, this dashboard shows dynamic metrics, user trends, and traffic sources.
      Built-in access control and theme switching included.
    `,
    technologies: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Recharts', icon: 'recharts' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
    demoUrl: 'https://example.com/dashboard-demo',
  },
  {
    slug: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Mobile-first banking UI with custom animation and OTP verification.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    content: `
      A beautiful mobile app UI for a banking client. Integrated OTP auth, balance display, transaction history,
      and customer chat. Built with React Native and secured with Firebase Auth.
    `,
    technologies: [
      { name: 'React Native', icon: 'react' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Framer Motion', icon: 'framer' },
    ],
    demoUrl: 'https://example.com/banking-demo',
  },
  {
    slug: 'social-automation',
    title: 'Social Media Automation',
    description: 'Automated system to plan, schedule, and analyze content.',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop',
    content: `
      This web tool helps businesses automate Instagram, Facebook, and LinkedIn posts. Includes analytics dashboard,
      scheduled queues, and AI-generated captions.
    `,
    technologies: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'CRON Jobs', icon: 'cron' },
      { name: 'OpenAI', icon: 'openai' },
    ],
    demoUrl: 'https://example.com/social-demo',
  },
  {
    slug: 'ai-writer',
    title: 'AI Writing Tool',
    description: 'AI-assisted content creator with editing and tone suggestions.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
    content: `
      A writing tool powered by OpenAI to generate blogs, marketing copy, and LinkedIn posts. 
      Includes plagiarism checker, tone adjustments, and inline editing.
    `,
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'OpenAI', icon: 'openai' },
      { name: 'Supabase', icon: 'supabase' },
    ],
    demoUrl: 'https://example.com/ai-writer-demo',
  },
];

export default function PortfolioDetails({ params }: { params: { slug: string } }) {
  const item = portfolioData.find((p) => p.slug === params.slug);

  if (!item) return notFound();

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href,
      });
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Header />
      {/* Enhanced Scroll Progress Bar: Darker gradient to match theme */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-900 z-50 shadow-sm">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 transition-all duration-300 rounded-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Main Section: Dark gradient + radials to match other pages, responsive pt */}
      <div className="relative overflow-hidden min-h-screen">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
        {/* Radial overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />
        
        <section className="relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 relative z-10">
            {/* Sidebar: Glassmorphism, responsive, sticky on lg+ */}
            <motion.aside 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4 order-2 lg:order-1 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl lg:shadow-2xl p-4 sm:p-6 sticky lg:top-28 h-fit border border-white/10"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent flex items-center gap-2">
                <ChevronLeft className="h-4 w-4 text-gray-400" />
                Other Projects
              </h2>
              <ul className="space-y-2 max-h-64 lg:max-h-80 overflow-y-auto lg:overflow-visible pr-2 lg:pr-0">
                {portfolioData
                  .filter((p) => p.slug !== params.slug)
                  .map((p, idx) => (
                    <motion.li 
                      key={p.slug}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="block text-sm lg:text-base text-gray-300 hover:text-blue-400 font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
                      >
                        {p.title}
                      </Link>
                    </motion.li>
                  ))}
              </ul>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-1 text-blue-400 font-semibold hover:text-blue-300 text-sm lg:text-base transition-colors duration-300"
              >
                ← Back to Portfolio
              </Link>
            </motion.aside>

            {/* Main Content: Glassmorphism, animations, dark text */}
            <motion.main 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-3/4 order-1 lg:order-2 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl lg:shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 hover:shadow-2xl border border-white/10"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 lg:mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {item.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 font-medium leading-relaxed max-w-2xl">
                {item.description}
              </p>

              {/* Hero Image: Dark overlay, responsive heights */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8 sm:mb-10 lg:mb-12 group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  priority // Eager load for above-fold
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-6">
                  <p className="text-white text-sm sm:text-base font-medium drop-shadow-lg">Click to enlarge</p>
                </div>
              </motion.div>

              {/* Action Buttons: Gradient, stacked on mobile, with animations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
              >
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex-1 sm:flex-none"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Demo
                </a>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/20 hover:text-white border border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl flex-1 sm:flex-none"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </motion.div>

              {/* Content & Technologies: Dark prose, responsive grid with glassmorphism */}
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-300 leading-relaxed mb-8 lg:mb-10"
              >
                <p className="text-sm sm:text-base lg:text-lg mb-8">{item.content}</p>

                <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent flex items-center gap-2">
                  Technologies Used
                </h3>
                <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {item.technologies.map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (idx * 0.1) }}
                      className="flex items-center bg-white/5 backdrop-blur-xl rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl border border-white/20"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${tech.icon}/${encodeURIComponent('#8b5cf6')}`} // Purple tint to match theme
                        alt={`${tech.name} icon`}
                        className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base font-medium text-gray-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            </motion.main>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}