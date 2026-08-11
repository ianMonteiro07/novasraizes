"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="absolute top-[calc(env(safe-area-inset-top)+1rem)] md:top-6 left-0 w-full z-50 flex justify-center px-4 md:px-12 pointer-events-none">
      
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="pointer-events-auto w-[95%] md:w-full max-w-5xl bg-nr-cream dark:bg-nr-dark border-4 border-nr-dark dark:border-nr-cream rounded-full shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[4px_4px_0px_#F4ECD8] px-4 py-2 md:px-8 md:py-3 flex justify-between items-center gap-4 transition-colors duration-500"
      >
        
        {/* NAVEGAÇÃO PC */}
        <nav className="hidden md:flex gap-6 lg:gap-12 items-center flex-1 justify-center pl-4">
            {['O Evento', 'Galeria', 'Contato'].map((item) => (
              <Link 
                key={item} 
                href={item === 'O Evento' ? '#flora' : item === 'Contato' ? '#ingressos' : `#${item.toLowerCase()}`} 
                className="relative font-sans font-black text-sm uppercase tracking-widest text-nr-dark dark:text-nr-cream hover:text-nr-orange transition-colors group flex items-center h-full whitespace-nowrap"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-nr-orange group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
        </nav>

        {/* FERRAMENTAS - Mobile centralizado e bem espaçado */}
        <div className="flex items-center gap-4 shrink-0 w-full md:w-auto justify-between md:justify-end">
            <ThemeToggle />
            
            <div className="hidden md:block w-[3px] h-6 bg-nr-dark dark:bg-nr-cream rounded-full" />
            
            <a 
              href="https://luma.com/dakipt2s" 
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-nr-purple dark:bg-nr-orange border-[3px] border-nr-dark dark:border-nr-cream px-6 py-2 shadow-[2px_2px_0px_#1A1A1A] md:shadow-[3px_3px_0px_#1A1A1A] dark:shadow-[3px_3px_0px_#F4ECD8] active:translate-y-1 active:shadow-[0px_0px_0px_#1A1A1A] transition-all flex items-center justify-center pt-1"
            >
              <span className="font-sans font-black text-xs md:text-sm uppercase tracking-widest text-nr-cream dark:text-nr-dark group-hover:text-nr-yellow transition-colors leading-none">
                Ingressos
              </span>
            </a>
        </div>

      </motion.div>
    </header>
  );
}