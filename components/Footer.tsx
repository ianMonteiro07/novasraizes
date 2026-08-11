export default function Footer() {
  return (
    <footer id="ingressos" className="bg-nr-dark text-nr-cream py-16 md:py-20 px-8 md:px-32 relative z-40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-16">
        
        {/* Marca / Infos do Evento */}
        <div className="space-y-4 md:space-y-6 md:w-1/2 text-center md:text-left">
          <h2 className="font-retro text-5xl md:text-8xl text-nr-yellow">
            Novas<br className="hidden md:block"/> Raízes
          </h2>
          <p className="font-sans font-bold text-sm md:text-xl uppercase tracking-widest opacity-90 max-w-md mx-auto md:mx-0">
            Um movimento de cultura, arte e vida orgânica.
          </p>
        </div>

        {/* Compra e Contato */}
        <div className="flex flex-col gap-8 md:w-1/2 md:justify-end items-center md:items-end">
          
          <div className="bg-nr-purple border-4 border-nr-cream p-5 md:p-8 rounded-xl shadow-[6px_6px_0px_#F4ECD8] rotate-1 w-full max-w-sm text-center md:text-left">
            <h4 className="font-retro text-2xl md:text-3xl text-nr-yellow mb-4">Ingressos (2º Lote)</h4>
            
            <a 
              href="https://luma.com/dakipt2s" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-nr-cream text-nr-dark font-sans font-black text-lg md:text-xl uppercase py-3 border-4 border-nr-dark shadow-[4px_4px_0px_#1A1A1A] hover:bg-nr-yellow transition-colors mb-4 -rotate-1"
            >
              Comprar no Luma
            </a>
            
            <p className="font-sans font-bold uppercase text-xs opacity-90 mt-4">
              Dúvidas? Fale com a gente na DM ou via PIX:<br/>
              <span className="text-sm md:text-base text-nr-cream break-all mt-1 block">novasraizes2025@gmail.com</span>
            </p>
          </div>

          {/* Navegação Rápida */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#flora" className="font-sans font-black uppercase text-sm md:text-lg hover:text-nr-orange transition-colors">Flora</a>
            <a href="#galeria" className="font-sans font-black uppercase text-sm md:text-lg hover:text-nr-orange transition-colors">Galeria</a>
            <a href="https://instagram.com/novasraizes_" target="_blank" rel="noopener noreferrer" className="font-sans font-black uppercase text-sm md:text-lg hover:text-nr-orange transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-4 border-nr-cream/20 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm font-bold uppercase tracking-widest gap-4 md:gap-0 text-center">
        <p>© 2026 NOVAS RAÍZES VOL. 5</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
           <p>MACEIÓ • AL</p>
           <p>DEV BY IAN MONTEIRO</p>
        </div>
      </div>
    </footer>
  );
}