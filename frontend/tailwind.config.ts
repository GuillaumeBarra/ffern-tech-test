import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      white: '#FFFFFF',
      sand: '#EFE7DA',
      sandDark: '#E2D5C5',
      sandLight: '#F5F2EC',
      sandExtraLight: '#FCFBF7',
      ash: '#717267',
      ashDark: '#030302',
      ashLight: '#DCDCD6',
      terracotta: '#EB9466',
      success: '#D1E6C8',
      successLight: '#E7F5E9',
      error: '#EF9A9A',
      errorDark: '#891615',
      errorLight: '#FFEBEE',
    },
    listStyleType: {
      square: 'square',
    },
    extend: {
      fontFamily: {
        sans: ['CovikSans', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
