import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Gastón Dávila | Developer",
  description:
    "Portafolio profesional de Gastón Dávila. Desarrollo web moderno, escalable y orientado a resultados con Next.js, TypeScript y Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-neutral-950 font-sans text-neutral-100 antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
        {/* Luz ambiental difusa inspirada en los colores de tu marca */}
        <div className="fixed top-0 left-1/2 -z-10 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-blue/15 to-brand-cyan/10 blur-[120px] pointer-events-none" />

        <Navbar />

        {/* Contenedor principal con padding-top para respetar el navbar fijo */}
        <main className="mx-auto max-w-6xl px-6 pt-24 md:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}