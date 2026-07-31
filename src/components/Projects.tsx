"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Projects = () => {
  return (
    <section id="proyectos" className="relative py-16 sm:py-20">
      {/* Encabezado de la Sección */}
      <div className="mb-12 flex flex-col items-start gap-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-3.5 py-1 text-xs font-medium text-brand-blue backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-brand-cyan"
        >
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>Portafolio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white"
        >
          Proyectos Destacados
        </motion.h2>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-md dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700/80 dark:hover:bg-neutral-900/60 dark:hover:shadow-none"
          >
            <div>
              {/* Encabezado de Tarjeta: Título y Enlaces */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-brand-blue sm:text-xl dark:text-white dark:group-hover:text-brand-cyan">
                  {project.title}
                </h3>

                <div className="flex shrink-0 items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver repositorio en GitHub"
                      className="rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400 dark:hover:border-brand-cyan/40 dark:hover:text-white"
                    >
                      {/* SVG Nativo de GitHub */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver demostración en vivo"
                      className="rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400 dark:hover:border-brand-cyan/40 dark:hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Descripción */}
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>
            </div>

            {/* Tags del Proyecto */}
            <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/60">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 border border-neutral-200/80 dark:bg-neutral-800/50 dark:text-neutral-300 dark:border-neutral-700/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};