export default function Footer() {
  return (
    // AJUSTE 1: Mudei px-12 para px-6 no mobile para ganhar espaço lateral
    <footer id="contato" className="bg-retro-green dark:bg-black text-retro-cream dark:text-gray-200 py-20 px-6 md:px-32 border-t-8 border-retro-orange dark:border-trap-neon-pink relative z-40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Marca / Contato Direto */}
        <div className="space-y-4 md:w-1/2">
          <h2 className="font-retro text-5xl md:text-7xl text-retro-yellow dark:text-trap-neon-green drop-shadow-md">
            Novas Raízes
          </h2>
          <p className="opacity-80 text-lg font-sans max-w-sm font-medium">
            Um movimento de cultura, arte e vida orgânica.
          </p>
          
          {/* E-mail */}
          <div className="pt-6">
            <p className="text-sm uppercase tracking-widest opacity-60 mb-2">Fale com a gente</p>
            {/* AJUSTE 2 e 3: text-lg no mobile, break-all para não cortar */}
            <a 
              href="mailto:novasraizes2025@gmail.com" 
              className="text-lg md:text-2xl font-bold border-b-2 border-retro-orange dark:border-trap-neon-pink hover:text-retro-yellow dark:hover:text-trap-neon-cyan transition-colors break-all"
            >
              novasraizes2025@gmail.com
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-12 md:w-1/2 md:justify-end">
          
          {/* Navegação Interna */}
          <div className="flex flex-col gap-4">
            <h4 className="font-retro text-2xl text-retro-orange dark:text-trap-neon-pink">Navegação</h4>
            <a href="#manifesto" className="hover:text-retro-yellow dark:hover:text-trap-neon-green transition-colors font-bold uppercase tracking-widest text-sm">O Evento</a>
            <a href="#galeria" className="hover:text-retro-yellow dark:hover:text-trap-neon-green transition-colors font-bold uppercase tracking-widest text-sm">Galeria</a>
            <a href="https://luma.com/val6dfyg" target="_blank" rel="noopener noreferrer" className="hover:text-retro-yellow dark:hover:text-trap-neon-green transition-colors font-bold uppercase tracking-widest text-sm">Ingressos</a>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col gap-4">
            <h4 className="font-retro text-2xl text-retro-orange dark:text-trap-neon-pink">Social</h4>
            <a href="https://instagram.com/novasraizes_" target="_blank" rel="noopener noreferrer" className="hover:text-retro-yellow dark:hover:text-trap-neon-green transition-colors font-bold uppercase tracking-widest text-sm">
              Instagram
            </a>
            
            <a href="#" className="hover:text-retro-yellow dark:hover:text-trap-neon-green transition-colors font-bold uppercase tracking-widest text-sm">
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-retro-cream/20 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 uppercase tracking-widest gap-4 md:gap-0">
        <p>© 2026 Novas Raízes.</p>
        <div className="flex gap-4 text-center md:text-right">
           <p>Maceió • AL</p>
           <p>Design by Ian Monteiro</p>
        </div>
      </div>
    </footer>
  );
}