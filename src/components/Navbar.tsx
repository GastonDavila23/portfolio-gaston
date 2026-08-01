"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Contenedor Flotante Estilo Cápsula */}
      <nav
        className={`flex items-center justify-between gap-4 sm:gap-6 rounded-full border px-4 py-2 sm:px-6 sm:py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-neutral-200/80 bg-white/90 shadow-md backdrop-blur-md dark:border-neutral-800/90 dark:bg-neutral-950/90 dark:shadow-xl dark:shadow-black/50"
            : "border-neutral-200/60 bg-white/80 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-900/80"
        }`}
      >
        {/* Logo libre sin borde cuadrado */}
        <Link
          href="#inicio"
          className="group flex items-center gap-2.5 transition-transform hover:scale-105 shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Logo Gastón Dávila"
            width={32}
            height={32}
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-sm transition-transform group-hover:rotate-6"
            priority
          />
          <span className="text-sm font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-blue dark:text-white dark:group-hover:text-brand-cyan hidden sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Enlaces centrales (Escritorio) */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-6 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Separador vertical sutil */}
        <div className="hidden md:block h-4 w-px bg-neutral-200 dark:bg-neutral-800" />

        {/* Acciones derechas: CV minimalista + Modo Oscuro */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.cv.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-100 hover:text-brand-blue dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-brand-cyan"
          >
            <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>CV</span>
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Alternar modo claro u oscuro"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-brand-blue dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-brand-cyan"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Controles Móviles */}
        <div className="flex items-center gap-1.5 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Alternar modo claro u oscuro"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 transition-colors dark:text-neutral-300"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Alternar menú de navegación"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-16 left-4 right-4 mx-auto max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand-blue dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-brand-cyan"
                >
                  {link.name}
                </Link>
              ))}
              <div className="my-1 h-px bg-neutral-200 dark:bg-neutral-800" />
              <a
                href={siteConfig.cv.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-all dark:bg-white dark:text-neutral-950"
              >
                <Download className="h-4 w-4" />
                <span>Descargar Curriculum</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};