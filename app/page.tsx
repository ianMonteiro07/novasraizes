"use client";
import Image from "next/image"; 
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header"; 
import Hero from "@/components/Hero";     
import Footer from "@/components/Footer";
import CheckerboardFrame from "@/components/CheckerboardFrame";

const Marquee = () => {
  const items = [
    "FLASH TATTOO", "MÚSICA", "BRECHÓ", "BODY PIERCER", "ARTE", "VINIL"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-nr-yellow dark:bg-nr-purple border-b-8 border-nr-dark dark:border-nr-cream py-3 md:py-4 z-40 transition-colors duration-500">
      <motion.div 
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, index) => (
              <span key={index} className="text-nr-dark dark:text-nr-cream font-sans font-black text-lg md:text-2xl uppercase mx-4 md:mx-6 flex items-center gap-4 md:gap-6">
                {item} 
                <span className="text-nr-orange dark:text-nr-yellow text-xl md:text-2xl">✿</span>
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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <main className="min-h-screen bg-nr-cream dark:bg-nr-dark selection:bg-nr-purple selection:text-nr-cream overflow-x-hidden transition-colors duration-500">
      <CheckerboardFrame />
      <Header />
      <Hero />
      <Marquee />

      {/* --- SEÇÃO FLORA --- */}
      <section className="relative py-16 md:py-28 px-8 md:px-24 lg:px-40 bg-nr-orange dark:bg-nr-dark border-b-8 border-nr-dark dark:border-nr-cream z-30 transition-colors duration-500" id="flora">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
          
          {/* Círculo da Flora */}
          <div className="w-56 h-56 md:w-80 md:h-80 shrink-0 mx-auto md:mx-0 bg-nr-green dark:bg-nr-purple rounded-full border-4 md:border-8 border-nr-dark dark:border-nr-cream shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[6px_6px_0px_#F4ECD8] flex items-center justify-center overflow-hidden relative transition-colors duration-500">
             <Image 
               src="/flora.png" 
               alt="Ilustração da Flora" 
               fill 
               /* 
                 object-[center_85%] puxa o "foco da câmera" para a parte de baixo da imagem original,
                 o que faz a Flora subir no círculo. 
                 Se ela subir demais agora, mude de 85% para 70% ou 60%.
               */
               className="object-cover object-[center_85%] scale-105" 
             />
          </div>
          
          {/* Textos */}
          <div className="text-center md:text-left space-y-4 md:space-y-6 flex-1 w-full max-w-xl">
            <h2 className="font-retro text-4xl md:text-6xl text-nr-cream drop-shadow-[3px_3px_0px_#1A1A1A]">
              Conheça a Flora
            </h2>
            <div className="bg-nr-cream dark:bg-nr-dark p-6 md:p-8 rounded-2xl border-4 border-nr-dark dark:border-nr-cream shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[4px_4px_0px_#F4ECD8] transition-colors duration-500">
              <p className="font-sans font-bold text-sm md:text-lg text-nr-dark dark:text-nr-cream uppercase leading-relaxed">
                Personagem original desenvolvida para representar a 5ª edição do evento. Flora é arte, natureza, fruto de uma semente plantada no terreno da criatividade. Uma árvore!
              </p>
              <p className="mt-4 font-sans font-black text-xs md:text-base text-nr-purple dark:text-nr-yellow uppercase">
                Ilustração por: Lara Castello Branco
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- GALERIA --- */}
      <section ref={galleryRef} id="galeria" className="py-16 md:py-28 px-8 md:px-24 lg:px-40 z-30 bg-nr-green dark:bg-nr-dark border-b-8 border-nr-dark dark:border-nr-cream transition-colors duration-500">
        <div className="text-center mb-12 md:mb-20">
          <h3 className="font-retro text-4xl md:text-6xl lg:text-7xl text-nr-cream drop-shadow-[4px_4px_0px_#1A1A1A] leading-tight">
            Ansiosos Para<br/>a 5ª Edição?
          </h3>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 md:gap-12">
            <div className="relative aspect-[4/3] bg-nr-cream dark:bg-nr-dark rounded-xl overflow-hidden border-4 border-nr-dark dark:border-nr-cream shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[6px_6px_0px_#F4ECD8] -rotate-2">
               <Image src="/lara.JPG" alt="Lara no Novas Raízes" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="relative aspect-square w-3/4 mx-auto bg-nr-yellow dark:bg-nr-purple rounded-full overflow-hidden border-4 border-nr-dark dark:border-nr-cream shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[6px_6px_0px_#F4ECD8] rotate-3 p-2">
               <div className="relative w-full h-full rounded-full overflow-hidden">
                 <Image src="/tatto.JPG" alt="Tatuagem" fill className="object-cover" />
               </div>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:gap-12 md:mt-24">
            <div className="relative aspect-square w-4/5 mx-auto md:ml-auto bg-nr-purple dark:bg-nr-orange rounded-xl overflow-hidden border-4 border-nr-dark dark:border-nr-cream shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[6px_6px_0px_#F4ECD8] rotate-2">
               <Image src="/ian.JPG" alt="Ian" fill className="object-cover object-left grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="relative aspect-[3/4] bg-nr-cream dark:bg-nr-dark rounded-t-full rounded-b-xl overflow-hidden border-4 border-nr-dark dark:border-nr-cream shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[6px_6px_0px_#F4ECD8] -rotate-3 p-3">
               <div className="relative w-full h-full rounded-t-full rounded-b-lg overflow-hidden">
                 <Image src="/adesivo.png" alt="Adesivo Novas Raízes" fill className="object-cover" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}