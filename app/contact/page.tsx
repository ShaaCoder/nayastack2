'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Code2, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';


// Contact Form Types

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error('Something went wrong.');
      }
    } catch (error) {
      toast.error('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonMotion = {
    whileHover: { scale: 1.05, boxShadow: '0 0 10px #3b82f6' },
    whileTap: { scale: 0.98 },
  };

  return (
    <>
      <Header />
      <Toaster position="top-right" />
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero-like BG: Dark gradient with radials */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-purple-900/20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(147,51,234,0.15),transparent)]" />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 py-20 text-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
            >
              We’d love to hear from you! Whether you have a question, feedback, or a project in mind, reach out to us today.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Form & Info */}
        <section id="contact" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required' })}
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address',
                        },
                      })}
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      {...register('message', { required: 'Message is required' })}
                      className="mt-1 h-32 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <motion.div {...buttonMotion}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center shadow-xl"
                    >
                      {isSubmitting ? 'Sending...' : (<>Send Message <Send className="ml-2 h-4 w-4" /></>)}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">nayastack8810@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">7835649916, 8810524651</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">H.no. 653 Gram Sabha Pooth Kalan Rohini Sector-23 Delhi</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter className="h-6 w-6" />
                      </Link>
                      <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </Link>
                      <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Github className="h-6 w-6" />
                      </Link>
                      <Link href="https://www.instagram.com/naya_stack/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Instagram className="h-6 w-6" />
                      </Link>
                      <Link href="https://www.facebook.com/profile.php?id=61578080152896" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Facebook className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Iframe Section */}
        <section className="relative z-10 mt-20 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white text-center bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Our Location
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 relative">
            {/* Dark overlay for map cohesion */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            <iframe
              title="nayastack Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55984.73990882734!2d77.03590683081116!3d28.71816395793397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07ff3b5288eb%3A0x2356e1d0f3720cf4!2snayastack!5e0!3m2!1sen!2sin!4v1763133684285!5m2!1sen!2sin" 
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] border-0 relative z-10"
            ></iframe>
           
          </div>
        </section>
      </div>
      <br />
      <Footer/>
    </>
  );
}
