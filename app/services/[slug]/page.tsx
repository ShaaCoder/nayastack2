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
        <section className="relative z-10 py-20 sm:py-24 text-center"> {/* Reduced py on mobile for tighter feel */}
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sticky nav of all services – made more compact on mobile */}
        <section className="z-20 bg-white/5 backdrop-blur-xl py-3 sm:py-4 sticky top-0 shadow-lg border-b border-white/10"> {/* Removed 'relative' to resolve Tailwind conflict with 'sticky' */}
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex flex-wrap gap-1 sm:gap-2 justify-center overflow-x-auto pb-2"> {/* Added overflow-x-auto for mobile wrapping/scroll if too many services */}
              {services.map((s) => {
                const slug = generateSlug(s.title);
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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

        {/* Main content – upgraded to lg for sidebar to avoid cramped md layouts */}
        <section className="relative z-10 py-16 lg:py-24"> {/* Increased py on lg for breathing room */}
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8 lg:gap-12 items-start"> {/* lg:grid-cols-3, items-start for alignment, increased gap on lg */}
            {/* Left column */}
            <motion.div
              className="lg:col-span-2"
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
                  {/* Tab buttons – adjusted for better mobile stacking */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 mb-6 justify-center">
                    {(['overview', 'features', 'benefits'] as const).map((tab) => (
                      <motion.button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }} /* Added tap feedback */
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto ${
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
                      className="text-gray-300 leading-relaxed text-sm sm:text-base" // Responsive text sizing
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
                              className="flex items-start gap-3 p-3 bg-white/5 rounded-lg" // Changed to items-start for better icon alignment with longer text
                            >
                              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /> {/* Slight mt adjust */}
                              <span>{f}</span>
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

            {/* Right column – now hidden until lg, sticky with better offset */}
            <div className="hidden lg:block sticky top-32 self-start max-h-[calc(100vh-8rem)] overflow-y-auto"> {/* top-32 to clear header + sticky nav (assuming ~5rem header + 2rem nav), max-h to prevent overflow */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                <CardHeader className="pb-4"> {/* Reduced pb for tighter card */}
                  <CardTitle className="text-lg text-white">Key Features</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-gray-300">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed"> {/* Added leading-relaxed, items-start */}
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