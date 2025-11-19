"use client";
import { Header } from '@/components/layout/header';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Footer } from '@/components/layout/footer';
import { Users, Award, Code, Star, Quote, Clock, Target } from 'lucide-react';

const portfolioItems = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Scalable online store with Stripe integration and real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    category: 'Web Development',
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot Dashboard',
    description: 'GPT-powered chatbot interface with advanced analytics and conversation management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['Python', 'OpenAI', 'React', 'FastAPI'],
    category: 'AI/ML',
  },
  {
    slug: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with interactive charts and comprehensive user insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'PostgreSQL', 'Docker'],
    category: 'Data Analytics',
  },
  {
    slug: 'mobile-banking',
     title: 'Mobile Banking Interface',
    description: 'Secure and intuitive banking application with modern UI/UX design.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometrics'],
    category: 'Mobile Development'
  },
  {
    slug: 'social-automation',
    title: 'Social Media Automation',
    description: 'Comprehensive social media management tool with scheduling and analytics.',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'GraphQL', 'Redis', 'AWS'],
    category: 'Automation',
  },
  {
    slug: 'ai-writer',
  title: 'AI Content Generator',
    description: 'Advanced AI writing assistant with content optimization and SEO tools.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
    technologies: ['OpenAI', 'React', 'TailwindCSS', 'Supabase'],
    category: 'AI Writing',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <section className="pt-28 pb-16 relative overflow-hidden">
        {/* Hero-like BG: Dark gradient with radials */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed"
            >
              Explore our curated selection of web development, AI solutions, mobile apps, and automation projects. Each showcases innovative technology and real-world impact for forward-thinking businesses.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <Link href={`/portfolio/${item.slug}`}>
                  <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                    <div className="relative w-full h-52 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-sm font-medium mb-2">View Project</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, tIndex) => (
                          <span key={tIndex} className="text-xs bg-white/10 px-2 py-1 rounded-full text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Projects Stand Out - SEO: Keywords like "award-winning web development portfolio", "innovative AI projects" */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(59,130,246,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Why Our Portfolio Excels
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our portfolio reflects years of expertise in delivering cutting-edge web development, AI-driven innovations, mobile solutions, and automation tools. Discover what makes our projects a benchmark for digital excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Cutting-Edge Technology',
                desc: 'We leverage the latest frameworks like React, Next.js, and OpenAI to build scalable, future-proof applications that adapt to evolving business needs.'
              },
              {
                icon: Target,
                title: 'Business Impact Focus',
                desc: 'Every project is designed to deliver measurable ROI, from increased user engagement in our AI chatbots to streamlined operations in automation tools.'
              },
              {
                icon: Clock,
                title: 'Efficient Delivery',
                desc: 'On-time launches with agile methodologies ensure your vision becomes reality without compromising on quality or innovation.'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <highlight.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials - SEO: Social proof for "portfolio testimonials web development" */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Success Stories from Our Portfolio
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Hear directly from clients whose projects we've brought to life—transforming ideas into high-performing digital realities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The e-commerce platform from nayastack revolutionized our sales pipeline. Their React expertise shone through in every feature.",
                author: "Alex Rivera, CTO of Retail Innovations",
                rating: 5,
                project: "E-commerce Platform"
              },
              {
                quote: "Our AI chatbot project exceeded expectations with seamless integration and insightful analytics. A true game-changer!",
                author: "Sarah Lee, Product Lead at AI Ventures",
                rating: 5,
                project: "AI Chatbot Dashboard"
              },
              {
                quote: "The mobile banking app delivered secure, user-friendly experiences that boosted our app adoption by 150%. Outstanding work.",
                author: "Michael Grant, VP at FinTech Solutions",
                rating: 5,
                project: "Mobile Banking Interface"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
                <p className="text-blue-400 font-medium mb-2">Related Project: {testimonial.project}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO: Long-tail keywords like "case studies for AI development projects" */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Portfolio FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Common questions about our web development portfolio, AI case studies, and how we bring projects to fruition.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do you select projects for your portfolio?",
                answer: "We feature a diverse range of completed projects that highlight our expertise in web development, AI/ML, mobile apps, and automation, focusing on those with measurable client success and innovative tech stacks."
              },
              {
                question: "Can I see detailed case studies for your AI projects?",
                answer: "Absolutely! Each portfolio item links to in-depth case studies covering challenges, solutions, technologies used (like OpenAI and React), and results such as improved efficiency or user growth."
              },
              {
                question: "What industries do your portfolio projects serve?",
                answer: "Our work spans e-commerce, fintech, SaaS, healthcare, and more, with tailored solutions in React Native for mobile, Node.js for backend, and AI integrations for intelligent automation."
              },
              {
                question: "How long does a typical project from your portfolio take?",
                answer: "Timelines vary: 4-8 weeks for web apps, 8-12 weeks for mobile and AI solutions. We prioritize agile development to meet deadlines without sacrificing quality."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - SEO: Reinforce "hire for custom web development portfolio" */}
      <section className="py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900" />
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-xl rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Inspired by Our Work? Let's Create Yours
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              From bespoke web applications to groundbreaking AI tools, add your project to our portfolio. Partner with nayastack for unparalleled digital innovation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-4"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200"
              >
                Explore Services →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </>
  );
}