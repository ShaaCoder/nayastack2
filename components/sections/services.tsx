// services.tsx
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, ShoppingCart, Search, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Tailored web applications built with modern technologies like React, Next.js, and Node.js.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment integration, inventory management, and analytics.',
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description: 'Boost your online presence with strategic SEO and comprehensive digital marketing.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications with advanced optimization techniques and monitoring.',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Comprehensive security audits and ongoing maintenance to keep your systems safe.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.15),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 relative"
          >
            Our Services
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-80"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ originX: 0.5 }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We offer comprehensive web development services to help your business thrive in the digital world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <CardHeader className="pb-4 relative z-10">
                  <motion.div 
                    initial={{ scale: 0.8, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    whileHover={{ rotate: 5 }}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 w-fit mx-auto mb-4 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-white text-center group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <CardDescription className="text-gray-300 text-center leading-relaxed text-lg">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}