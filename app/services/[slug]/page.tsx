'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';

import { services, generateSlug } from '@/lib/services';

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'benefits'>('overview');

  const service = services.find((s) => generateSlug(s.title) === params.slug);
  if (!service) notFound();

  return (
    <>
      <Header />

      <div className="relative overflow-hidden">
        {/* Hero-like BG: Dark gradient with radials */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />

        {/* Hero */}
        <section className="relative z-10 py-24 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div 
                initial={{ scale: 0.8, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-fit p-4 mx-auto mb-4 shadow-lg"
              >
                <service.icon className="h-16 w-16 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sticky nav of all services */}
        <section className="relative z-10 bg-white/5 backdrop-blur-xl py-4 sticky top-0 shadow-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex flex-wrap gap-2 justify-center">
              {services.map((s) => {
                const slug = generateSlug(s.title);
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      slug === params.slug
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                    }`}
                  >
                    {s.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </section>

        {/* Main content */}
        <section className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* Left column */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardHeader className="pb-6">
                  <motion.div 
                    initial={{ scale: 0.8, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl w-fit p-3 mb-4 mx-auto shadow-lg"
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl text-white text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Tab buttons */}
                  <div className="flex gap-2 mb-6 justify-center">
                    {(['overview', 'features', 'benefits'] as const).map((tab) => (
                      <motion.button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        whileHover={{ scale: 1.05 }}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                          activeTab === tab 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                        }`}
                      >
                        {tab[0].toUpperCase() + tab.slice(1)}
                      </motion.button>
                    ))}
                  </div>

                  {/* Tab panel */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      {activeTab === 'overview' && <p>{service.extendedDescription}</p>}

                      {activeTab === 'features' && (
                        <ul className="space-y-4">
                          {service.features.map((f, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                              <span className="text-sm">{f}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}

                      {activeTab === 'benefits' && <p>{service.benefits}</p>}
                    </motion.div>
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right column – sticky feature list */}
            <div className="hidden md:block sticky top-20 self-start">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Key Features</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-gray-300">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}