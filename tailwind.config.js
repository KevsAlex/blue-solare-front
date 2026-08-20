/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
        },
        // Deep neutral used for dark sections. Cooler than gray-900 so it sits
        // with the blues instead of fighting them.
        ink: {
          50: '#f6f7f9', 100: '#eceef2', 200: '#d5dae3', 300: '#b1bacb',
          400: '#8695ae', 500: '#667694', 600: '#515f7a', 700: '#434e63',
          800: '#3a4353', 900: '#0b1220', 950: '#060b15',
        },
        accent: { 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2' },
        brand: { blue: '#1a56db', dark: '#0b1220', light: '#f0f7ff' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        soft: '0 2px 8px -2px rgb(11 18 32 / 0.06), 0 4px 20px -4px rgb(11 18 32 / 0.08)',
        lift: '0 12px 32px -8px rgb(11 18 32 / 0.16), 0 4px 12px -4px rgb(11 18 32 / 0.10)',
        glow: '0 0 0 1px rgb(26 86 219 / 0.10), 0 8px 30px -6px rgb(26 86 219 / 0.28)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        'fade-up': 'fade-up .6s cubic-bezier(.16,1,.3,1) both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
