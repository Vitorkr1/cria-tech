import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0049ff',
          blueDark: '#0038c7',
          cyan: '#0091c9',
          ink: '#0b0e17',
          navdark: '#0b0e17',
          navdark2: '#11162a',
          muted: '#5b6478',
          surface: '#ffffff',
          surfaceAlt: '#f5f7fb',
          surfaceAlt2: '#eef1f7',
          border: 'rgba(11,14,23,0.10)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(11,14,30,0.14)',
        softLg: '0 30px 70px -20px rgba(11,14,30,0.18)',
        glowBlue: '0 10px 30px -8px rgba(0,73,255,0.45)',
      },
      keyframes: {
        blobDrift1: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(60px,80px) scale(1.15)' },
          '66%': { transform: 'translate(-40px,40px) scale(0.9)' },
        },
        blobDrift2: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-70px,-50px) scale(1.2)' },
        },
        blobDrift3: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(50px,-60px) scale(1.1)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        spinRing: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
      },
      animation: {
        'blob-1': 'blobDrift1 22s ease-in-out infinite',
        'blob-2': 'blobDrift2 26s ease-in-out infinite',
        'blob-3': 'blobDrift3 30s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'spin-ring': 'spinRing 4s linear infinite',
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
