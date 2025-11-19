// hero.tsx (Unchanged, as it's the reference theme)
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Dynamic team collaboration in modern office',
    },
    {
      src: 'https://images.pexels.com/photos/5668472/pexels-photo-5668472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Code on dual monitors with red accents',
    },
    {
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Web app dashboard interface',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);

  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Enhanced BG: Multi-radial gradient for depth and cohesion */}
      <div className="absolute inset-0 bg-gradient-radial at-tl from-blue-900/10 via-transparent to-purple-900/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.1),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.1),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid lg:grid-cols-2 gap-12 items-start min-h-[70vh]"
        >
          {/* Left: Text Block—gradient enhancements for epic feel */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:text-left text-center space-y-6"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight"
            >
              We Build <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Epic</span>
              Digital Realms
            </motion.h1>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl text-gray-300 max-w-lg leading-relaxed"
            >
              Crafting bespoke web apps, e-comm empires, and transformative platforms that ignite growth. Your vision, amplified.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 shadow-xl hover:shadow-blue-500/25 transition-shadow">
                  Launch Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-border/50 text-foreground hover:bg-primary/10">
                  <Play className="mr-2 h-4 w-4 animate-pulse" />
                  See Showcase
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <div className="animate-bounce text-primary text-sm font-medium">Scroll to Explore ↓</div>
            </motion.div>
          </motion.div>

          {/* Right: Sliding Carousel—auto-rotates, with nav dots/arrows. */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority={currentSlide === 0} // Perf: Only first loads eager.
                />
                {/* Red tint overlay—fuses with theme, modern vignette. */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Arrow Nav: Subtle, red-tinted. */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary/80 text-foreground p-2 rounded-full transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary/80 text-foreground p-2 rounded-full transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot Indicators: Bottom, clickable. */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-primary scale-110' : 'bg-border/50 hover:bg-primary/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}