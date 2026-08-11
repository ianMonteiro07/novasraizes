"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-nr-purple dark:bg-nr-dark transition-colors duration-700 pt-36 pb-16 px-4 md:px-16 border-b-8 border-nr-dark dark:border-nr-cream">
      
      {/* Selo Vol 5 - Afastado para não colar no texto principal no celular */}
      <motion.div 
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-28 right-2 md:top-32 md:right-24 lg:right-40 z-20 w-16 h-16 md:w-28 md:h-28 bg-nr-yellow rounded-full flex items-center justify-center border-2 md:border-4 border-nr-dark dark:border-nr-cream shadow-[3px_3px_0px_#1A1A1A] dark:shadow-[4px_4px_0px_#F4ECD8]"
      >
        <span className="font-retro text-xl md:text-4xl text-nr-dark leading-none text-center pt-1">vol<br/>5</span>
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-5xl mt-6">
        
        {/* TÍTULO - Tamanhos bem mais compactos no celular */}
        <div className="relative leading-[0.85] flex flex-col items-center z-30">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-retro text-[4.5rem] sm:text-7xl md:text-[8rem] lg:text-[11rem] text-nr-cream drop-shadow-[3px_3px_0px_#1A1A1A] md:drop-shadow-[6px_6px_0px_#1A1A1A] uppercase tracking-tight"
          >
            Novas
          </motion.h1>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-retro text-[4.5rem] sm:text-7xl md:text-[8rem] lg:text-[11rem] text-nr-dark dark:text-nr-yellow drop-shadow-[3px_3px_0px_#F4ECD8] dark:drop-shadow-[3px_3px_0px_#1A1A1A] md:drop-shadow-[6px_6px_0px_#F4ECD8] uppercase tracking-tight -mt-1 md:-mt-6"
          >
            Raízes
          </motion.h1>
        </div>

        {/* INFORMAÇÕES DO LOTE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-12 bg-nr-cream dark:bg-nr-dark border-4 border-nr-dark dark:border-nr-cream p-4 md:p-8 rounded-2xl shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[4px_4px_0px_#F4ECD8] rotate-1 w-[90%] md:w-full max-w-xl z-20 transition-colors duration-500"
        >
          <div className="border-b-4 border-nr-dark dark:border-nr-cream pb-3 md:pb-4 mb-3 md:mb-4 text-center">
             <h2 className="font-sans font-black text-xl md:text-4xl uppercase tracking-tighter text-nr-dark dark:text-nr-cream">
               Segundo Lote: R$ 25
             </h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-1 md:gap-4 font-sans font-bold text-sm md:text-xl text-nr-dark dark:text-nr-cream uppercase">
             <div className="flex items-center gap-2">
                <span>Dia:</span>
                <span className="font-retro tracking-widest text-base md:text-xl pt-1">22 de Agosto</span>
             </div>
             <div className="hidden md:block w-1 h-6 bg-nr-dark dark:bg-nr-cream"></div>
             <div>15H - 23H</div>
          </div>
          
          <div className="mt-3 pt-3 md:mt-4 md:pt-4 border-t-4 border-nr-dark dark:border-nr-cream text-center font-sans font-black text-sm md:text-xl uppercase text-nr-green dark:text-nr-yellow">
             Lugar: Chuck Bar, Jatiúca
          </div>
        </motion.div>

        {/* BOTÃO LINK LUMA */}
        <motion.a 
          whileHover={{ scale: 1.05, rotate: 0 }}
          whileTap={{ scale: 0.95 }}
          href="https://luma.com/dakipt2s"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-12 mb-4 bg-nr-green dark:bg-nr-orange text-nr-cream font-retro text-base md:text-3xl px-6 py-4 rounded-xl border-4 border-nr-dark dark:border-nr-cream shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[6px_6px_0px_#F4ECD8] -rotate-2 inline-block z-20 transition-colors duration-500"
        >
          Garanta Seu Ingresso!!
        </motion.a>
      </div>
    </section>
  );
}