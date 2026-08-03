"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Lock, X, ShieldAlert } from "lucide-react";
import { projects } from "@/data/portfolio";

interface PrivateModalState {
  title: string;
  type: "repo" | "demo";
}

export const Projects = () => {
  const [modalData, setModalData] = useState<PrivateModalState | null>(null);

  useEffect(() => {
    if (!modalData) return;
    const timer = setTimeout(() => {
      setModalData(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [modalData]);

  const handleRestrictedClick = (
    e: React.MouseEvent,
    isPrivate: boolean | undefined,
    title: string,
    type: "repo" | "demo"
  ) => {
    if (isPrivate) {
      e.preventDefault();
      setModalData({ title, type });
    }
  };

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
                  {/* Botón de GitHub (o Candado si isPrivate === true) */}
                  {(project.githubUrl || project.isPrivate) && (
                    <a
                      href={project.isPrivate ? "#" : project.githubUrl}
                      onClick={(e) =>
                        handleRestrictedClick(e, project.isPrivate, project.title, "repo")
                      }
                      target={project.isPrivate ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      aria-label="Repositorio de código"
                      className={`rounded-lg border p-2 transition-all duration-200 ${
                        project.isPrivate
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/20"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400 dark:hover:border-brand-cyan/40 dark:hover:text-white"
                      }`}
                      title={
                        project.isPrivate
                          ? "Repositorio privado por confidencialidad"
                          : "Ver código fuente"
                      }
                    >
                      {project.isPrivate ? (
                        <Lock className="h-4 w-4" />
                      ) : (
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
                      )}
                    </a>
                  )}

                  {/* Botón de Demo (o Candado si isPrivate === true) */}
                  {(project.demoUrl || project.isPrivate) && (
                    <a
                      href={project.isPrivate ? "#" : project.demoUrl}
                      onClick={(e) =>
                        handleRestrictedClick(e, project.isPrivate, project.title, "demo")
                      }
                      target={project.isPrivate ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      aria-label="Demostración en vivo"
                      className={`rounded-lg border p-2 transition-all duration-200 ${
                        project.isPrivate
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/20"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400 dark:hover:border-brand-cyan/40 dark:hover:text-white"
                      }`}
                      title={
                        project.isPrivate
                          ? "Acceso restringido (sistema de uso interno)"
                          : "Ver demostración en vivo"
                      }
                    >
                      {project.isPrivate ? (
                        <Lock className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
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
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-200/80 pt-4 dark:border-neutral-800/60">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-neutral-200/80 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 dark:border-neutral-700/40 dark:bg-neutral-800/50 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Modal / Toast */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-neutral-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:left-auto sm:right-6 dark:border-neutral-800 dark:bg-neutral-900/90 dark:shadow-2xl"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="flex-1 text-sm">
                <h4 className="font-semibold text-neutral-900 dark:text-white">
                  {modalData.type === "repo"
                    ? "Repositorio Privado"
                    : "Acceso Restringido a Demo"}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {modalData.type === "repo" ? (
                    <>
                      El código fuente de{" "}
                      <span className="font-medium text-neutral-800 dark:text-neutral-100">
                        {modalData.title}
                      </span>{" "}
                      está protegido por acuerdos de confidencialidad del cliente.
                    </>
                  ) : (
                    <>
                      La demostración de{" "}
                      <span className="font-medium text-neutral-800 dark:text-neutral-100">
                        {modalData.title}
                      </span>{" "}
                      es un sistema de uso interno y requiere credenciales para acceder.
                    </>
                  )}
                </p>
              </div>
              <button
                onClick={() => setModalData(null)}
                className="rounded-lg p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                aria-label="Cerrar notificación"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};