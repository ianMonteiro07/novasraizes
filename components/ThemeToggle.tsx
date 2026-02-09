"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Verifica a preferência inicial
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  // Função de troca
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 md:w-14 md:h-7 rounded-full border-2 border-retro-green dark:border-trap-neon-pink bg-retro-cream dark:bg-black transition-colors duration-300 focus:outline-none shadow-md overflow-hidden"
      aria-label="Trocar Tema"
    >
      {/* O Círculo que desliza */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`absolute top-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full shadow-sm ${
          isDark 
            ? "left-[calc(100%-1.4rem)] bg-trap-neon-green shadow-[0_0_10px_#39FF14]" 
            : "left-1 bg-retro-orange"
        }`}
      />
      
      {/* Ícone de fundo (opcional, só visual) */}
      <span className="absolute left-1 top-1 text-[8px] opacity-0 dark:opacity-100 transition-opacity text-trap-neon-pink font-bold"></span>
    </button>
  );
}