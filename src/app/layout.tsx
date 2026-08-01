import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gaston.vercel.app/"),
  title: "Gastón Dávila | Full Stack Developer",
  description:
    "Portafolio profesional de Gastón Dávila. Desarrollador Full Stack especializado en Next.js, TypeScript y Tailwind CSS.",
  openGraph: {
    title: "Gastón Dávila | Full Stack Developer",
    description:
      "Desarrollador Full Stack especializado en Next.js, TypeScript y soluciones web escalables.",
    url: "https://portfolio-gaston.vercel.app/",
    siteName: "Gastón Dávila Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gastón Dávila - Full Stack Developer",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastón Dávila | Full Stack Developer",
    description:
      "Desarrollador Full Stack especializado en Next.js, TypeScript y Tailwind CSS.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 font-sans antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan dark:bg-neutral-950 dark:text-neutral-100">
        {/* Luz ambiental difusa que se adapta a ambos modos */}
        <div className="fixed top-0 left-1/2 -z-10 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-blue/10 to-brand-cyan/10 blur-[120px] pointer-events-none dark:from-brand-blue/15 dark:to-brand-cyan/10" />

        <Navbar />

        <main className="mx-auto max-w-6xl px-6 pt-24 md:px-12">
          {children}
        </main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}