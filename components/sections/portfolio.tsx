// portfolio.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ShaviStore E-commerce Platform',
    description:
      'A complete furniture and electronics e-commerce system with product management, cart system, payments, and responsive UI.',
    image:
      'https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Stripe'],
    demoUrl: 'https://www.shavistore.in/',
  },

  {
    title: 'Healthcare Management System (Coming Soon)',
    description:
      'Patient management platform with appointment scheduling, patient records, and doctor dashboards. Case study uploading soon.',
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    demoUrl: '#',
  },

  {
    title: 'Real Estate Platform (Coming Soon)',
    description:
      'Property listing platform with filters, location search, and agent management. Launching soon.',
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Firebase'],
    demoUrl: '#',
  },

  {
    title: 'Learning Management System (Coming Soon)',
    description:
      'LMS platform with course creation, quizzes, progress tracking, and analytics. In development.',
    image:
      'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Express', 'AWS'],
    demoUrl: '#',
  },

  {
    title: 'Financial Dashboard (Coming Soon)',
    description:
      'Real-time analytics dashboard with charts, KPIs, and business intelligence tools.',
    image:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Angular', 'Python', 'D3.js'],
    demoUrl: '#',
  },

  {
    title: 'Social Media App (Coming Soon)',
    description:
      'Community-driven social app with messaging, user posts, and groups. Case study publishing soon.',
    image:
      'https://images.pexels.com/photos/1337387/pexels-photo-1337387.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'GraphQL', 'Prisma'],
    demoUrl: '#',
  },
];


export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Take a look at some of our recent projects that showcase our expertise and creativity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 p-4">
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge variant="default" className="bg-gradient-to-r from-blue-500 to-purple-600">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 mb-4 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/30 text-gray-300 hover:bg-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}