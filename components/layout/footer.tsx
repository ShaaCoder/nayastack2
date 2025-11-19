"use client" ;
import Link from 'next/link';
import {
  Code2, Mail, Phone, MapPin,
  Github, Twitter, Linkedin,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { services, generateSlug } from '@/lib/services';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white relative overflow-hidden">
      {/* Hero-like overlay for cohesion */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative overflow-hidden rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Image src="/logo.png" alt="nayastack logo" width={48} height={48} className="rounded-lg shadow-lg ring-1 ring-white/20" priority />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                nayastack
              </span>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Nayastack is your premier partner in digital innovation, specializing in custom web and mobile development, AI integrations, e-commerce solutions, and full-stack engineering. We empower startups and enterprises to build scalable, future-proof applications that drive growth and transform user experiences. With expertise in React, Next.js, Node.js, and cutting-edge AI tools, we deliver results that exceed expectations—from rapid prototyping to seamless deployments.
            </p>

            <div className="flex space-x-6">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => {
                const slug = generateSlug(s.title);
                return (
                  <motion.li 
                    key={slug}
                    whileHover={{ x: 4 }}
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <Link
                      href={`/services/${slug}`}
                      className="block py-1"
                    >
                      {s.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 4 }}><Link href="/about" className="block py-1 text-gray-300 hover:text-white transition-all duration-200">About Us</Link></motion.li>
              <motion.li whileHover={{ x: 4 }}><Link href="/grow-business" className="block py-1 text-gray-300 hover:text-white transition-all duration-200">Grow Your Business</Link></motion.li>
              <motion.li whileHover={{ x: 4 }}><Link href="/blog" className="block py-1 text-gray-300 hover:text-white transition-all duration-200">Blog</Link></motion.li>
              <motion.li whileHover={{ x: 4 }}><Link href="/privacy-policy" className="block py-1 text-gray-300 hover:text-white transition-all duration-200">Privacy Policy</Link></motion.li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <motion.div whileHover={{ x: 4 }} className="flex items-center space-x-3 py-1">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="hover:text-white transition-colors">nayastack8810@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} className="flex items-center space-x-3 py-1">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="hover:text-white transition-colors">7835649916, 8810524651</span>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} className="flex items-center space-x-3 py-1">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="hover:text-white transition-colors">H.no. 653 Gram Sabha Pooth Kalan Rohini Sector-23 Delhi</span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          <p className="text-sm">&copy; 2025 nayastack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}