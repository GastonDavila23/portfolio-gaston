"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";

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

  // Detectar scroll y cargar preferencia de tema
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Revisar preferencia guardada o tema del sistema
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

  // Alternar tema manual
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/80 bg-white/80 backdrop-blur-md shadow-sm dark:border-neutral-800/80 dark:bg-neutral-950/80 dark:shadow-lg dark:shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 md:px-12 md:py-4">
        {/* Marca / Logo */}
        <Link
          href="#inicio"
          className="group flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-xl bg-gradient-brand p-[1px] shrink-0">
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-neutral-950">
              <Image
                src="/logo.png"
                alt="Logo Gastón Dávila"
                width={32}
                height={32}
                className="object-contain h-7 w-7 sm:h-8 sm:w-8"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-blue dark:text-white dark:group-hover:text-brand-cyan">
              Gastón Dávila
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Navegación de Escritorio */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <ul className="flex items-center gap-5 lg:gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
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

          <div className="flex items-center gap-3">
            {/* Botón de Cambio de Tema (Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label="Alternar modo claro u oscuro"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-700 transition-all hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-brand-cyan/40 dark:hover:text-white"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Botón CTA - Curriculum */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-brand px-4 py-2 text-xs font-semibold text-neutral-950 shadow-sm transition-all hover:brightness-110 active:scale-95"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Curriculum</span>
            </a>
          </div>
        </div>

        {/* Controles Móviles (Tema + Hamburguesa) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Alternar modo claro u oscuro"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-700 transition-colors dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Alternar menú de navegación"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-700 transition-colors hover:border-brand-blue/40 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-brand-cyan/40 dark:hover:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable (Móvil) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-neutral-200 bg-white/95 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral-700 transition-colors hover:text-brand-blue dark:text-neutral-300 dark:hover:text-brand-cyan"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-neutral-950 shadow-sm"
              >
                <FileText className="h-4 w-4" />
                <span>Descargar Curriculum</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};