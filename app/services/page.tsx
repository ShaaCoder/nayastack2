'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, Award, Code, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { services, generateSlug } from '@/lib/services';

export default function ServicesPage() {
  return (
    <>
      <Header />

      <section className="py-20 relative overflow-hidden">
        {/* Hero-like BG: Dark gradient with radials */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive range of digital services, from custom web development and AI-powered solutions to mobile apps and automation. We craft high-performance, scalable technologies tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Link href={`/services/${generateSlug(service.title)}`} passHref>
                  <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <CardHeader className="relative z-10">
                      <motion.div 
                        initial={{ scale: 0.8, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                        className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl w-fit p-3 mb-4 mx-auto shadow-lg"
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-white text-center">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <CardDescription className="text-gray-300 mb-4 leading-relaxed">{service.shortDescription}</CardDescription>
                      <ul className="space-y-2 mb-4">
                        {service.features.slice(0, 2).map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-colors duration-200">
                        Learn More →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - SEO: Benefits, keywords like "why choose digital agency for web development" */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(59,130,246,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Why Choose nayastack?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              As a leading digital agency specializing in web development, AI solutions, mobile apps, and automation, we deliver exceptional results with a client-centric approach. Here's what sets us apart in the competitive landscape of technology services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Client-Centric Innovation',
                desc: 'We tailor every project to your unique goals, leveraging the latest in React, Next.js, and AI to create solutions that drive growth and efficiency.'
              },
              {
                icon: Award,
                title: 'Proven Expertise',
                desc: 'With a track record of successful deployments for startups and enterprises, our team ensures scalable, secure, and high-performance digital experiences.'
              },
              {
                icon: Code,
                title: 'End-to-End Solutions',
                desc: 'From ideation to deployment and ongoing support, we handle full-stack development, UI/UX design, and integration with modern tech stacks like Node.js and cloud services.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <benefit.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - SEO: Social proof, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it—hear from businesses who've transformed with our web development, AI, and automation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "nayastack delivered a cutting-edge Next.js application that boosted our user engagement by 300%. Their AI integrations were game-changing!",
                author: "Jane Doe, CEO of TechStartup",
                rating: 5
              },
              {
                quote: "Exceptional mobile app development with seamless automation features. Professional, timely, and innovative—highly recommend!",
                author: "John Smith, Founder of InnovateCo",
                rating: 5
              },
              {
                quote: "From concept to launch, their web solutions exceeded expectations. True partners in digital transformation.",
                author: "Emily Chen, Director at GlobalCorp",
                rating: 5
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
                <blockquote className="text-gray-300 italic mb-6">"{testimonial.quote}"</blockquote>
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

      {/* FAQ Section - SEO: Answers common queries, long-tail keywords like "best AI solutions for web development" */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Got questions about our services in web development, AI, mobile apps, or automation? We've got answers to help you get started.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What types of web development services do you offer?",
                answer: "We specialize in full-stack web development using React, Next.js, and Node.js, including e-commerce sites, SaaS platforms, and custom dashboards with SEO optimization and responsive design."
              },
              {
                question: "How do your AI solutions integrate with existing systems?",
                answer: "Our AI services seamlessly integrate with your current tech stack via APIs, machine learning models for automation, and tools like TensorFlow or custom NLP for enhanced user experiences."
              },
              {
                question: "What is the typical timeline for a mobile app project?",
                answer: "Timelines vary by complexity, but most projects range from 8-16 weeks, including design, development, testing, and deployment for iOS and Android using React Native or Flutter."
              },
              {
                question: "Do you provide ongoing maintenance for deployed projects?",
                answer: "Yes, we offer comprehensive post-launch support, including updates, performance monitoring, and scalability enhancements to ensure your digital solutions stay ahead."
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

      {/* CTA Section - SEO: Conversion-focused, reinforces keywords */}
      <section className="py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900" />
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-xl rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Whether you're seeking expert web development, innovative AI solutions, or robust mobile apps, nayastack is your partner for success. Let's discuss your project today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-4"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200"
              >
                View Our Portfolio →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}