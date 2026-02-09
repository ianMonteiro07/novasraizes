import type { Metadata } from "next";
import { Shrikhand, Syne } from "next/font/google";
import "./globals.css";

// Fonte do Título (Estilo anos 70/Poster)
const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-retro",
});

// Fonte de Leitura (Moderna mas com personalidade)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Novas Raízes",
  description: "Evento cultural",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${shrikhand.variable} ${syne.variable} font-sans bg-[#F4ECD8] text-[#3E6D4E] antialiased`}>
        {children}
      </body>
    </html>
  );
}