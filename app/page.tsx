"use client";

import Image from "next/image"; 
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header"; 
import Hero from "@/components/Hero";     
import Footer from "@/components/Footer";
import WavyFrame from "@/components/WavyFrame";

const Marquee = () => {
  const items = [
    "MPB", "TATUAGEM", "PIERCING", "BRECHÓ", "ARTES VISUAIS", "FLASH TATTOO", "VINIL"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-retro-yellow border-y-4 border-retro-dark py-3 md:py-4 z-40">
      <motion.div 
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, index) => (
              <span key={index} className="text-retro-dark font-retro text-lg md:text-3xl uppercase mx-4 md:mx-6 flex items-center gap-4 md:gap-6">
                {item} 
                <span className={`${index % 2 === 0 ? 'text-retro-purple' : 'text-retro-green'}`}>✷</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const yColumn1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yColumn2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main className="min-h-screen bg-retro-cream dark:bg-trap-bg selection:bg-retro-orange selection:text-retro-cream overflow-x-hidden transition-colors duration-700">
      
      <WavyFrame />
      <Header />
      <Hero />
      <Marquee />

      {/* --- SEÇÃO 1: O QUE É --- */}
      <section className="relative py-20 md:py-32 px-16 md:px-40 z-30" id="manifesto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-retro text-4xl md:text-8xl text-retro-green dark:text-trap-neon-green drop-shadow-[3px_3px_0px_#F1C40F] dark:drop-shadow-[0_0_10px_rgba(57,255,20,0.5)] leading-[0.9] transition-colors">
              Cultura <br/>
              <span className="text-retro-orange dark:text-trap-neon-pink">Alternativa.</span>
            </h2>
          </div>

          <div className="md:w-1/2 space-y-6 text-base md:text-xl font-bold text-retro-dark/80 dark:text-white/80 font-sans transition-colors">
            <p className="bg-white/50 dark:bg-black/50 p-6 rounded-2xl border-2 border-retro-purple dark:border-trap-neon-cyan shadow-[4px_4px_0px_#8E44AD] dark:shadow-[4px_4px_0px_#00FFFF] transition-all">
              O <strong className="text-retro-orange dark:text-trap-neon-pink">Novas Raízes</strong> não é só um rolê. É um movimento. 
              Música, garimpo, tinta na pele e aquela energia que só Maceió tem.
            </p>
            <p className="text-center md:text-left">
              Vem curtir o som, encontrar aquela peça rara no brechó e fortalecer a cena local.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: GALERIA --- */}
      <section ref={galleryRef} id="galeria" className="py-20 md:py-24 px-16 md:px-40 z-30">
        <div className="text-center mb-12 md:mb-20">
          <h3 className="font-retro text-3xl md:text-7xl text-retro-purple dark:text-trap-neon-cyan drop-shadow-[2px_2px_0px_#2E5C46] dark:drop-shadow-[3px_3px_0px_#FF00FF] transition-colors">
            Vibe da Galera
          </h3>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Coluna 1 */}
          <motion.div style={{ y: yColumn1 }} className="flex flex-col gap-8 md:gap-12">
            
            {/* --- FOTO 01 (LARA.JPG) --- */}
            <div className="relative aspect-[3/4] bg-retro-dark rounded-xl overflow-hidden border-4 border-retro-orange dark:border-trap-neon-pink shadow-[6px_6px_0px_#D35400] dark:shadow-[8px_8px_0px_#FF00FF] group transition-all">
               <Image 
                 src="/lara.JPG" 
                 alt="Lara no Novas Raízes" 
                 fill 
                 className="object-cover" 
               />
            </div>
            
            {/* --- FOTO 02 (tatto.JPG) --- */}
            <div className="relative aspect-square bg-retro-dark rounded-full overflow-hidden border-4 border-retro-green dark:border-trap-neon-green shadow-[6px_6px_0px_#2E5C46] dark:shadow-[8px_8px_0px_#39FF14] transition-all">
               <Image 
                 src="/tatto.JPG" 
                 alt="Tatuagem" 
                 fill 
                 className="object-cover" 
               />
            </div>
          </motion.div>

          {/* Coluna 2 */}
          <motion.div style={{ y: yColumn2 }} className="flex flex-col gap-8 md:gap-12 md:mt-32">
            
            {/* --- FOTO 03 (IAN.JPG) - AJUSTE DE POSIÇÃO --- */}
            <div className="relative aspect-square bg-retro-dark rounded-xl overflow-hidden border-4 border-retro-purple dark:border-trap-neon-cyan shadow-[6px_6px_0px_#8E44AD] dark:shadow-[8px_8px_0px_#00FFFF] rotate-2 transition-all">
               <Image 
                 src="/ian.JPG" 
                 alt="Ian" 
                 fill 
                 // ADICIONEI 'object-left' AQUI:
                 className="object-cover object-left" 
               />
            </div>
            
            {/* --- FOTO 04 (ADESIVO.PNG) --- */}
            <div className="relative aspect-[3/4] bg-retro-dark rounded-t-full rounded-b-xl overflow-hidden border-4 border-retro-yellow dark:border-trap-neon-yellow shadow-[6px_6px_0px_#F1C40F] dark:shadow-[8px_8px_0px_#F1C40F] -rotate-2 transition-all">
               <Image 
                 src="/adesivo.png" 
                 alt="Adesivo Novas Raízes" 
                 fill 
                 className="object-cover" 
               />
            </div>

          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}