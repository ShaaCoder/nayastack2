// testimonials.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'nayastack transformed our vision into a stunning web application. Their attention to detail and technical expertise exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, E-Shop Plus',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The e-commerce platform they built for us has increased our sales by 300%. Professional, reliable, and innovative team.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Outstanding work on our company website. The design is beautiful and the performance is exceptional. Highly recommended!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Product Manager, InnovateLabs',
    avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'nayastack delivered our project on time and within budget. Their communication and project management skills are top-notch.',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'Startup Founder',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'They understood our requirements perfectly and created a mobile app that our users love. Great team to work with!',
    rating: 5,
  },
  {
    name: 'Robert Kim',
    role: 'CTO, DataFlow Systems',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Excellent technical skills and creative problem-solving. They optimized our platform and improved performance significantly.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Hero-like BG: Multi-radial gradients for depth */}
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative overflow-hidden rounded-full mr-4"
                    >
                      <Avatar className="h-12 w-12 ring-2 ring-white/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}