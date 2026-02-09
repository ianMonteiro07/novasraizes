"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-2 md:px-0 pointer-events-none">
      
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        // AJUSTE 1: Reduzi o padding lateral do container para px-4 no mobile
        className="pointer-events-auto relative w-full max-w-7xl bg-retro-cream/60 dark:bg-black/80 backdrop-blur-xl border-2 border-retro-green/30 dark:border-trap-neon-purple/50 rounded-full shadow-lg px-4 py-3 md:px-8 md:py-4 flex justify-between items-center gap-2 md:gap-4 overflow-hidden transition-colors duration-500"
      >
        
        {/* Glossy Effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 pointer-events-none" />

        {/* --- 1. LADO ESQUERDO: LOGO --- */}
        <Link href="/" className="relative z-20 group shrink-1 flex items-center min-w-0">
          {/* AJUSTE 2: Voltei para text-lg no mobile para sobrar espaço, mas mantive font-black (grosso) */}
          <span className="font-retro font-black text-lg md:text-3xl text-retro-green dark:text-trap-neon-green group-hover:text-retro-orange dark:group-hover:text-trap-neon-pink transition-colors drop-shadow-md dark:drop-shadow-[0_0_5px_rgba(57,255,20,1)] leading-none pt-1 truncate">
            Novas Raízes
          </span>
        </Link>

        {/* --- 2. CENTRO ABSOLUTO: NAVEGAÇÃO --- */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-12 items-center z-10">
            {['O Evento', 'Galeria', 'Contato'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="relative font-sans font-bold text-xs uppercase tracking-[0.2em] text-retro-dark/80 dark:text-white/80 hover:text-retro-purple dark:hover:text-trap-neon-cyan transition-colors group flex items-center h-full whitespace-nowrap"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-retro-purple dark:bg-trap-neon-cyan group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
        </nav>

        {/* --- 3. LADO DIREITO: FERRAMENTAS --- */}
        {/* gap-2 no mobile é suficiente */}
        <div className="flex items-center gap-2 md:gap-6 relative z-20 shrink-0">
            
            <div className="shrink-0 flex items-center">
              <ThemeToggle />
            </div>

            <div className="hidden md:block w-px h-6 bg-retro-dark/10 dark:bg-white/10" />

            <a 
              href="https://luma.com/val6dfyg" 
              target="_blank" 
              rel="noopener noreferrer"
              // AJUSTE 3: px-3 no mobile (mais apertado) e text-[10px]
              className="relative group overflow-hidden rounded-full bg-retro-green dark:bg-trap-neon-pink px-3 py-2 md:px-8 md:py-2.5 shadow-[2px_2px_0px_#1F1F1F] dark:shadow-[0_0_15px_#FF00FF] active:translate-y-1 active:shadow-none transition-all shrink-0 flex items-center justify-center"
            >
              <span className="absolute inset-0 w-full h-full bg-retro-orange dark:bg-trap-neon-green translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              
              {/* AJUSTE 4: tracking-normal (sem espaço extra entre letras) no mobile */}
              <span className="relative font-sans font-black text-[10px] md:text-sm uppercase tracking-normal md:tracking-widest text-retro-cream dark:text-black group-hover:text-retro-dark transition-colors leading-none pt-[1px] whitespace-nowrap">
                Ingressos
              </span>
            </a>
        </div>

      </motion.div>
    </header>
  );
}