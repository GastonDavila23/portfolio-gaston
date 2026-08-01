"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/80 bg-white/50 py-8 text-center text-xs text-neutral-500 transition-colors dark:border-neutral-800/80 dark:bg-neutral-950/50 dark:text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row md:px-12">
        <p>
          © {currentYear} Gastón Dávila. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="#inicio"
            className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
          >
            Volver al Inicio
          </Link>
          <a
            href={siteConfig.cv.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-blue dark:hover:text-brand-cyan"
          >
            {siteConfig.cv.label || "Curriculum"}
          </a>
        </div>
      </div>
    </footer>
  );
};