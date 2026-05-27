import type { Config } from 'tailwindcss';
import { brandColors } from './src/assets/branding/colors'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors: {
      ...brandColors,
      primary: {
    900: '#1B5E20',  // Forest Green (main)
    800: '#2E7D32',  // Kelly Green (hover)
    // ... full palette in docs
  },
  accent: {
    DEFAULT: '#9CCC65',  // Lime
    bright: '#7FD842',   // Neon
  },
      
    },
    // Existing colors remain below
    // (You may keep existing kinertic palette if needed)
    //
    // Note: brandColors imported from src/assets/branding/colors.ts
    // will be merged here.

      // Retained original kinertic palette (can be accessed via brandColors if needed)
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #15803D 0%, #22C55E 100%)',
        'gradient-gold': 'linear-gradient(135deg, #84CC16 0%, #BEF264 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, #15803D 0px, transparent 50%), radial-gradient(at 100% 0%, #22C55E 0px, transparent 50%), radial-gradient(at 100% 100%, #15803D 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],

}
export default config
