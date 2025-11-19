import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/providers/auth-provider';
import Head from 'next/head'; // Legacy; migrate if possible.

import GoogleAnalytics from '@/components/analytics/google-analytics';
import ApolloTracking from '@/components/analytics/apollo-tracking';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nayastack - Premier Web Development Agency',
  description: 'Professional web development services including custom applications, e-commerce solutions, and digital transformation.',
  keywords: 'web development, custom software, e-commerce, digital transformation, React, Next.js',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        {/* Black-red gradient overlay—subtle bleed for immersive noir. */}
        <div className="fixed inset-0 bg-gradient-to-br from-[rgb(var(--background-start-rgb))] via-transparent to-[rgb(var(--background-end-rgb))] pointer-events-none z-[-1]" />
        
        {/* Optional: Red orbit particle—evokes digital embers. Remove or multiply for flair. */}
        {/* <div className="theme fixed top-[20%] right-[10%] w-2 h-2 bg-primary rounded-full animate-orbit [--radius:150px] [--angle:0] [--duration:25] opacity-20 pointer-events-none z-[-1]" /> */}
        
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>

        <GoogleAnalytics />
        <ApolloTracking />
      </body>
    </html>
  );
}