import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'], // Retained for class-based dark mode.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Theme-specific: Immersive dark gradients and radials for depth.
        'dark-void': 'radial-gradient(ellipse at center, hsl(240 10% 3.9%) 0%, hsl(0 0% 0%) 70%, transparent 100%)',
        'neural-glow': 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(0, 0, 0, 0.8) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        // Theme: Rounded for glassmorphism cards.
        'glass': '16px', // Soft, modern edges.
        'orb': '50%', // For icons/avatars.
      },
      colors: {
        // Brand accents: Blue-purple spectrum for highlights.
        brand: {
          blue: {
            '400': '#60A5FA',
            '500': '#3B82F6',
          },
          purple: {
            '400': '#A78BFA',
            '500': '#8B5CF6',
          }
        },
        // Core theme: Dark backgrounds, subtle contrasts.
        background: 'hsl(var(--background))', // hsl(240 10% 3.9%)—deep navy void.
        foreground: 'hsl(var(--foreground))', // hsl(0 0% 98%)—near-white text.
        card: {
          DEFAULT: 'hsl(var(--card))', // hsl(240 10% 8%)—glass base.
          foreground: 'hsl(var(--card-foreground))', // hsl(0 0% 98%)—card text.
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))', // Matches card for overlays.
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))', // hsl(221 100% 50%)—vibrant blue for CTAs.
          foreground: 'hsl(var(--primary-foreground))', // hsl(0 0% 98%)—white on primary.
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // hsl(264 70% 55%)—mystic purple for accents.
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', // hsl(240 4.8% 15.9%)—faded dark gray.
          foreground: 'hsl(var(--muted-foreground))', // hsl(240 3.7% 15.9%)—subtle text.
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // hsl(0 0% 9%)—near-black for subtle hovers.
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // hsl(0 84.2% 60.2%)—crimson for errors.
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))', // hsl(240 5.9% 10%)—soft dark border.
        input: 'hsl(var(--input))', // hsl(240 5.9% 10%)—input fields.
        ring: 'hsl(var(--ring))', // hsl(221 100% 50% / 0.5)—blue ring focus.
        // Charts: Blue-purple arc for data viz.
        chart: {
          '1': 'hsl(var(--chart-1))', // hsl(221 100% 50%)—primary blue.
          '2': 'hsl(var(--chart-2))', // hsl(264 70% 55%)—secondary purple.
          '3': 'hsl(var(--chart-3))', // hsl(158 90% 50%)—accent teal.
          '4': 'hsl(var(--chart-4))', // hsl(0 84% 60%)—warning red.
          '5': 'hsl(var(--chart-5))', // hsl(280 100% 65%)—deep violet.
        },
        // Custom: Glassmorphism utilities.
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.10)',
          hover: 'rgba(255, 255, 255, 0.10)',
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        // Theme: Neural pulse for loaders/animations.
        'neural-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' }
        },
        // Glow scan for hovers.
        'glow-scan': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'neural-pulse': 'neural-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-scan': 'glow-scan 0.5s ease-in-out',
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;