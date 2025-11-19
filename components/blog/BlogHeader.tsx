// components/blog/BlogHeader.tsx (New file)
'use client';

import { motion } from 'framer-motion';

export function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
        Our Blog
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
      >
        Stay updated with the latest trends, tutorials, and insights from the world of web development.
      </motion.p>
    </motion.div>
  );
}