"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const rotateSun = useTransform(scrollY, [0, 500], [0, 45]);
  const yText = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    // AQUI: Mudei px-4 para px-16 (mobile) e px-40 (desktop) para o texto não bater na borda
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-retro-cream dark:bg-trap-bg transition-colors duration-700 pt-28 pb-10 px-16 md:px-40">
      
      {/* SOL */}
      <motion.div 
        style={{ rotate: rotateSun }}
        // Diminui um pouco o sol no mobile (260px) para caber na moldura
        className="absolute top-24 md:top-10 z-0 opacity-20 dark:opacity-40 w-[260px] h-[260px] md:w-[600px] md:h-[600px]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-retro-orange dark:fill-trap-purple-deep animate-spin-slow dark:drop-shadow-[0_0_30px_rgba(142,68,173,0.5)] transition-colors duration-500">
           <circle cx="100" cy="100" r="40" />
           <path d="M100 0 L115 50 L150 20 L135 70 L190 60 L150 100 L190 140 L135 130 L150 180 L115 150 L100 200 L85 150 L50 180 L65 130 L10 140 L50 100 L10 60 L65 70 L50 20 L85 50 Z" />
        </svg>
      </motion.div>

      {/* CONTEÚDO */}
      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-4xl">
        
        {/* TÍTULO */}
        <div className="relative leading-[0.8] mt-4">
          <motion.h1 
            style={{ y: yText }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            // Ajustei o tamanho da fonte para 18vw para não vazar nas laterais grossas
            className="font-retro text-[18vw] md:text-[14vw] text-retro-green dark:text-trap-neon-green drop-shadow-[3px_3px_0px_rgba(241,196,15,1)] md:drop-shadow-[4px_4px_0px_rgba(241,196,15,1)] dark:drop-shadow-[0_0_10px_rgba(57,255,20,0.6)] transition-all duration-500"
          >
            Novas
          </motion.h1>
          
          <motion.h1 
            style={{ y: yText }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="font-retro text-[18vw] md:text-[14vw] text-retro-green dark:text-trap-neon-pink drop-shadow-[3px_3px_0px_rgba(241,196,15,1)] md:drop-shadow-[4px_4px_0px_rgba(241,196,15,1)] dark:drop-shadow-[0_0_10px_rgba(255,0,255,0.6)] transition-all duration-500"
          >
            Raízes
          </motion.h1>
        </div>

        {/* LISTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 md:mt-12 flex flex-col gap-3 w-full max-w-md"
        >
          {/* Textos menores no mobile (text-[10px]) para caber nas caixas */}
          <div className="bg-retro-yellow dark:bg-black dark:border dark:border-trap-neon-green text-retro-dark dark:text-trap-neon-green font-sans font-extrabold text-[10px] md:text-base py-3 px-2 rounded-lg -rotate-1 shadow-sm uppercase dark:shadow-[0_0_10px_rgba(57,255,20,0.3)] transition-colors">
            Música ao Vivo • MPB • DJ e Trap
          </div>
          <div className="bg-retro-orange dark:bg-black dark:border dark:border-trap-neon-pink text-retro-cream dark:text-trap-neon-pink font-sans font-extrabold text-[10px] md:text-base py-3 px-2 rounded-lg rotate-1 shadow-sm uppercase dark:shadow-[0_0_10px_rgba(255,0,255,0.3)] transition-colors">
            Flash Tattoo & Piercings
          </div>
          <div className="bg-retro-purple dark:bg-black dark:border dark:border-trap-neon-cyan text-retro-cream dark:text-trap-neon-cyan font-sans font-extrabold text-[10px] md:text-base py-3 px-2 rounded-lg -rotate-1 shadow-sm uppercase dark:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-colors">
            Exposição e Feira de Arte
          </div>
          <div className="bg-retro-green dark:bg-black dark:border dark:border-trap-neon-green text-retro-cream dark:text-trap-neon-cyan font-sans font-extrabold text-[10px] md:text-base py-3 px-2 rounded-lg rotate-1 shadow-sm uppercase dark:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-colors">
            Brechós 
          </div>
        </motion.div>

        {/* DATA */}
        <div className="mt-10 md:mt-12 flex items-center gap-4 md:gap-6 text-retro-dark dark:text-white transition-colors">
           <div className="font-retro text-3xl md:text-5xl dark:text-trap-neon-yellow">
             01/03
           </div>
           <div className="h-10 md:h-12 w-1 bg-retro-dark dark:bg-white"></div>
           <div className="text-left">
             <p className="font-sans font-black uppercase text-lg md:text-xl leading-none">Chuck Bar</p>
             <p className="font-sans uppercase text-xs md:text-sm opacity-80">(Jatiúca)</p>
           </div>
        </div>

      </div>
    </section>
  );
}