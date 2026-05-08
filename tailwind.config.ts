import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f5ff',
          100: '#dce6ff',
          200: '#b3c8ff',
          700: '#1e3a5f',
          800: '#132d4a',
          900: '#0d1f35',
          950: '#07111e',
        },
        gold: {
          100: '#fef8ec',
          200: '#fde68a',
          400: '#c8a97e',
          500: '#b08850',
          600: '#8a6535',
        },
        border: 'hsl(var(--border))',
        input:  'hsl(var(--input))',
        ring:   'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)',    'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#1e293b',
            a: { color: '#1e3a5f', '&:hover': { color: '#c8a97e' } },
            h1: { fontFamily: 'var(--font-playfair), Georgia, serif', color: '#0d1f35' },
            h2: { fontFamily: 'var(--font-playfair), Georgia, serif', color: '#0d1f35' },
            h3: { fontFamily: 'var(--font-playfair), Georgia, serif', color: '#0d1f35' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
