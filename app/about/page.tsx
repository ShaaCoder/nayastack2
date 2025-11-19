'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { useRef } from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import shantanubhora from "../../shantanubhora.jpg"
import team from "../../team.jpg"
export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About nayastack',
    description:
      'nayastack is a digital agency specializing in high-performance websites, apps, and AI solutions. Learn about our mission, team, and impact.',
    url: 'https://www.nayastack.com/about',
    publisher: {
      '@type': 'Organization',
      name: 'nayastack',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.nayastack.com/images/logo.png',
      },
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'nayastack',
      description:
        'A forward-thinking digital agency creating innovative websites, apps, and AI solutions.',
      sameAs: [
        'https://www.linkedin.com/company/nayastack',
        'https://x.com/nayastack',
        'https://www.instagram.com/nayastack',
      ],
    },
  };

  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>About Us | nayastack - Digital Agency for Web & AI Solutions</title>
        <meta
          name="description"
          content="Discover nayastack, a digital agency crafting high-performance websites, apps, and AI solutions. Learn about our mission, team, and community impact."
        />
        <meta name="keywords" content="nayastack, digital agency, web development, AI solutions, Next.js, React, technology, innovation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About Us | nayastack - Digital Agency" />
        <meta
          property="og:description"
          content="Learn about nayastack’s mission, vision, and team dedicated to building innovative digital experiences."
        />
        <meta property="og:url" content="https://www.nayastack.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nayastack.com/images/og-about.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | nayastack - Digital Agency" />
        <meta
          name="twitter:description"
          content="Discover nayastack’s passion for creating high-performance websites, apps, and AI solutions."
        />
        <meta name="twitter:image" content="https://www.nayastack.com/images/og-about.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://www.nayastack.com/about" />
      </Head>

      <Header />

      <main className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20">
        {/* Radial overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />

        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white z-10">
          <motion.div className="absolute inset-0 z-0" style={{ y }}>
            <Image
              src="/images/hero-bg.jpg"
              alt="Abstract technology background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center z-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About nayastack
            </h1>
            <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95 text-gray-300">
              We’re a forward-thinking digital agency creating high-performance websites, apps, and AI solutions that empower businesses to soar.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="mt-10 inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </section>

        {/* Who We Are */}
        <section className="relative z-10 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight">
                Who We Are
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                nayastack is a collective of passionate developers, designers, and strategists united by a mission to craft
                transformative digital experiences. From sleek marketing sites to powerful SaaS platforms, we deliver solutions that make an impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With expertise in <a href="/services/web-development" className="text-blue-400 hover:text-blue-300 underline">React</a>, <a href="/services/nextjs" className="text-blue-400 hover:text-blue-300 underline">Next.js</a>, Node.js, AI, and automation, we partner with startups and enterprises to navigate the digital landscape with confidence.
              </p>
              <motion.a
                href="/services"
                whileHover={{ x: 4 }}
                className="mt-6 inline-block text-blue-400 font-semibold hover:text-blue-300 hover:underline"
              >
                Explore Our Services →
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={team}
                alt="nayastack team collaborating on innovative projects"
                fill
                className="object-cover transform hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="relative z-10 py-32 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto text-center relative overflow-hidden"
            >
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <Image
  src={shantanubhora}
  alt="Shantanu Bhora, Founder of nayastack"
  width={250}
  height={250}
  className="rounded-full mx-auto shadow-2xl object-cover ring-8 ring-blue-400/20 hover:ring-purple-400/30 transition-all duration-500"
/>

                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                >
                  Shantanu Bhora
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl mb-4 text-blue-300 font-semibold"
                >
                  Founder & CEO, nayastack
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
                >
                  Shantanu Bhora is the visionary behind nayastack, bringing over a decade of experience in full-stack development and AI innovation to the table. With a passion for crafting scalable solutions that blend cutting-edge technology with user-centric design, Shantanu founded nayastack to empower businesses in the digital era. From bootstrapping startups to leading enterprise transformations, his hands-on approach ensures every project delivers measurable impact and lasting value.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center space-x-6 mb-8"
                >
                  <motion.a
                    href="https://www.facebook.com/shanu.bhora.5"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-blue-400 hover:text-blue-300 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/stackbyshaan/"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-blue-400 hover:text-blue-300 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href="mailto:nayastack8810@gmail.com"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-blue-400 hover:text-blue-300 transition-all duration-300"
                  >
                    <Mail className="h-8 w-8" />
                  </motion.a>
                </motion.div>
                {/* Founder Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="italic text-gray-400 text-lg max-w-xl mx-auto border-l-4 border-blue-400 pl-6"
                >
                  "At nayastack, we don't just build apps—we architect futures. Every line of code is a step toward innovation and empowerment."
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Process */}
        <section className="relative z-10 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight"
            >
              Our Process
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1. Discovery',
                  desc: 'We dive deep into your goals, audience, and challenges to align our strategy.',
                  icon: '🔍',
                },
                {
                  step: '2. Design',
                  desc: 'We craft intuitive, visually stunning designs tailored to your brand.',
                  icon: '🎨',
                },
                {
                  step: '3. Development',
                  desc: 'We build robust, scalable solutions using cutting-edge technologies.',
                  icon: '💻',
                },
                {
                  step: '4. Deployment & Support',
                  desc: 'We launch your project and provide ongoing support for success.',
                  icon: '🚀',
                },
              ].map((process, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-5xl mb-6 text-blue-400">{process.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{process.step}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative z-10 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with scalable, intelligent, and beautifully crafted digital solutions that drive meaningful change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To lead as a trusted technology partner, driving innovation and excellence in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative z-10 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  desc: 'We pioneer cutting-edge technologies to deliver smarter, faster solutions.',
                  icon: '💡',
                },
                {
                  title: 'Transparency',
                  desc: 'We build trust through open, honest, and clear communication.',
                  icon: '🤝',
                },
                {
                  title: 'Excellence',
                  desc: 'We pursue perfection, delivering work that surpasses expectations.',
                  icon: '🏆',
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-5xl mb-6 text-blue-400">{value.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="relative z-10 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight"
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 h-full" />
              {[
                { year: 'Q1 2025', event: 'nayastack Founded', desc: 'Launched with a bold vision to revolutionize digital solutions in the AI era.' },
                { year: 'Q2 2025', event: 'First Major Client', desc: 'Secured our inaugural high-profile client, accelerating our growth trajectory.' },
                { year: 'Q3 2025', event: 'AI Division Launched', desc: 'Integrated AI capabilities to pioneer smarter, more intuitive applications.' },
                { year: 'Q4 2025', event: 'Global Expansion', desc: 'Established partnerships worldwide, delivering innovative tech to clients across 15+ countries.' },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`relative flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
                >
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
                      <h3 className="text-xl font-semibold text-white">{milestone.year}</h3>
                      <h4 className="text-lg font-medium text-gray-300 mt-1">{milestone.event}</h4>
                      <p className="text-gray-400 mt-2 text-base">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="relative z-10 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight"
            >
              Community Impact
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Open Source Contributions',
                  desc: 'We actively contribute to open-source projects, sharing tools and libraries with the global developer community.',
                  icon: '🌐',
                },
                {
                  title: 'Tech Education',
                  desc: 'We host workshops and mentorship programs to inspire the next generation of tech innovators.',
                  icon: '📚',
                },
                {
                  title: 'Sustainability Initiatives',
                  desc: 'We support eco-friendly practices, optimizing our solutions for minimal environmental impact.',
                  icon: '🌱',
                },
              ].map((impact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-5xl mb-6 text-blue-400">{impact.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{impact.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{impact.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-32 text-center">
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
            <div className="absolute inset-0 bg-black/40 z-0" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent tracking-tight">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto text-gray-300">
                Partner with nayastack to create innovative, high-impact digital solutions that drive success.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                Let’s Build Together
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}