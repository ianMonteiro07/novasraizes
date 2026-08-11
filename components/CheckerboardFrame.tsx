"use client";

export default function CheckerboardFrame() {
  return (
    <>
      {/* Escondido no celular, visível a partir de telas médias */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-10 z-50 pointer-events-none checkerboard border-r-4 border-nr-dark shadow-[4px_0px_0px_rgba(0,0,0,0.1)]" />
      <div className="hidden md:block fixed top-0 right-0 h-full w-10 z-50 pointer-events-none checkerboard border-l-4 border-nr-dark shadow-[-4px_0px_0px_rgba(0,0,0,0.1)]" />
    </>
  );
}