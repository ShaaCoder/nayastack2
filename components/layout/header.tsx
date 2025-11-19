'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md border-b border-gray-800/50 z-50 supports-[backdrop-filter:blur(20px)]:bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.png" 
                alt="nayastack logo" 
                width={48} 
                height={48} 
                className="rounded-lg shadow-lg" 
                priority 
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nayastack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-300 hover:text-white transition-all duration-300 px-3 py-1 rounded-md hover:bg-white/5"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-sm font-medium text-gray-300">Menu</span>
            {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-gray-900/95 border-t border-gray-800/50 pt-4 pb-6"
            >
              <div className="space-y-2 px-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}