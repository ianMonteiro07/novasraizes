export default function WavyFrame() {
  return (
    <>
      {/* LADO ESQUERDO: Aumentei para w-14 (mobile) e w-36 (PC) */}
      <div className="fixed top-0 left-0 h-full w-14 md:w-36 z-40 pointer-events-none">
         <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 800">
           <path d="M0 0 H30 Q60 200 30 400 T30 800 H0 Z" className="fill-[#F1C40F] dark:fill-[#39FF14] transition-colors duration-700" />
           <path d="M0 0 H20 Q50 200 20 400 T20 800 H0 Z" className="fill-[#D35400] dark:fill-[#FF00FF] transition-colors duration-700" />
           <path d="M0 0 H10 Q40 200 10 400 T10 800 H0 Z" className="fill-[#8E44AD] dark:fill-[#00FFFF] transition-colors duration-700" />
         </svg>
      </div>

      {/* LADO DIREITO: Mesma largura */}
      <div className="fixed top-0 right-0 h-full w-14 md:w-36 z-40 pointer-events-none scale-x-[-1]">
         <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 800">
           <path d="M0 0 H30 Q60 200 30 400 T30 800 H0 Z" className="fill-[#F1C40F] dark:fill-[#39FF14] transition-colors duration-700" />
           <path d="M0 0 H20 Q50 200 20 400 T20 800 H0 Z" className="fill-[#D35400] dark:fill-[#FF00FF] transition-colors duration-700" />
           <path d="M0 0 H10 Q40 200 10 400 T10 800 H0 Z" className="fill-[#8E44AD] dark:fill-[#00FFFF] transition-colors duration-700" />
         </svg>
      </div>
    </>
  );
}