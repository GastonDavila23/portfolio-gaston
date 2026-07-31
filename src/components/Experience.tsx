"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experiencia" className="relative py-16 sm:py-20">
      {/* Encabezado de la Sección */}
      <div className="mb-12 flex flex-col items-start gap-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-3.5 py-1 text-xs font-medium text-brand-blue backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-brand-cyan"
        >
          <Briefcase className="h-3.5 w-3.5" />
          <span>Trayectoria</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white"
        >
          Experiencia Profesional
        </motion.h2>
      </div>

      {/* Línea de tiempo (Timeline) */}
      <div className="relative border-l border-neutral-200 ml-2.5 sm:ml-6 space-y-10 sm:space-y-12 dark:border-neutral-800">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-5 sm:pl-8 group"
          >
            {/* Punto indicador luminoso en la línea */}
            <div className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-neutral-400 transition-colors group-hover:bg-brand-blue group-hover:shadow-glow-sm dark:border-neutral-950 dark:bg-neutral-600 dark:group-hover:bg-brand-cyan" />

            {/* Tarjeta de Experiencia */}
            <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-neutral-300 hover:bg-neutral-100/80 hover:shadow-sm dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700/80 dark:hover:bg-neutral-900/60 dark:hover:shadow-none">
              <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-brand-blue transition-colors dark:text-white dark:group-hover:text-brand-cyan">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {exp.company}
                  </span>
                </div>

                {/* Periodo de tiempo */}
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 bg-white border border-neutral-200/80 px-3 py-1 rounded-full w-fit dark:text-neutral-400 dark:bg-neutral-950/60 dark:border-neutral-800/60">
                  <Calendar className="h-3 w-3 text-brand-blue dark:text-brand-cyan" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Lista de responsabilidades / logros */}
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 leading-relaxed dark:text-neutral-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue dark:bg-brand-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Tecnológico utilizado */}
              {exp.technologies && (
                <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 border border-neutral-200/80 dark:bg-neutral-800/50 dark:text-neutral-300 dark:border-neutral-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};