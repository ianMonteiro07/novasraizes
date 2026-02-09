/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- IMPORTANTE: Ativa a troca manual
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Light (Retrô)
        'retro-cream': '#F4ECD8',
        'retro-green': '#2E5C46',
        'retro-purple': '#8E44AD',
        'retro-orange': '#D35400',
        'retro-yellow': '#F1C40F',
        'retro-dark': '#1F1F1F',
        
        // Paleta Dark (Trap/Psychedelic)
        'trap-bg': '#05010D',       // Fundo quase preto/roxo
        'trap-neon-green': '#39FF14', // Verde Hacker
        'trap-neon-pink': '#FF00FF',  // Rosa Choque
        'trap-neon-cyan': '#00FFFF',  // Ciano Elétrico
        'trap-purple-deep': '#240046', // Roxo Profundo
      },
      fontFamily: {
        retro: ['var(--font-retro)', 'cursive'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Novo para o Trap
      },
      // ... (mantenha os keyframes iguais)
    },
  },
  plugins: [],
}