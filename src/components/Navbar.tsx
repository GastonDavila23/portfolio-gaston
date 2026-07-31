"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        {/* Marca / Logo */}
        <Link
          href="#inicio"
          className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-brand p-[1px]">
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-neutral-950">
              <Image
                src="/logo.png"
                alt="Logo Gastón Dávila"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white transition-colors group-hover:text-brand-cyan">
              Gastón Dávila
            </span>
            <span className="text-[11px] font-medium text-neutral-400">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Navegación de Escritorio */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand-cyan"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

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

        {/* Botón Hamburguesa (Móvil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú de navegación"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-colors hover:border-brand-cyan/40 hover:text-white md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menú Desplegable (Móvil) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral-300 transition-colors hover:text-brand-cyan"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-neutral-950"
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