/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nr-purple': '#7C52A1', 
        'nr-green': '#5E6B23',  
        'nr-orange': '#F05E16', 
        'nr-yellow': '#F7CA20',
        'nr-cream': '#F4ECD8',
        'nr-dark': '#1A1A1A',
      },
      fontFamily: {
        retro: ['var(--font-retro)', 'cursive'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}