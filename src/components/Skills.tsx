"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Server, Wrench } from "lucide-react";
import { skillCategories } from "@/data/portfolio";

const categoryIcons = [
  <Code2 key="code" className="h-5 w-5 text-brand-blue dark:text-brand-cyan" />,
  <Server key="server" className="h-5 w-5 text-brand-blue dark:text-brand-cyan" />,
  <Wrench key="wrench" className="h-5 w-5 text-brand-blue dark:text-brand-cyan" />,
];

export const Skills = () => {
  return (
    <section id="habilidades" className="relative py-16 sm:py-20">
      {/* Encabezado de la Sección */}
      <div className="mb-12 flex flex-col items-start gap-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-3.5 py-1 text-xs font-medium text-brand-blue backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-brand-cyan"
        >
          <Cpu className="h-3.5 w-3.5" />
          <span>Competencias</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white"
        >
          Habilidades Técnicas
        </motion.h2>
      </div>

      {/* Grid de Categorías */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-lg dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700/80 dark:hover:bg-neutral-900/70 dark:hover:shadow-none"
          >
            {/* Línea decorativa de acento en el borde superior */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-brand-cyan/40" />

            {/* Resplandor ambiental suave (Ambient Glow) */}
            <div className="pointer-events-none absolute -top-12 -left-12 h-32 w-32 rounded-full bg-brand-blue/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-blue/10 dark:bg-brand-cyan/5 dark:group-hover:bg-brand-cyan/10" />

            {/* Título de la Tarjeta + Ícono */}
            <div className="relative z-10 mb-6 flex items-center gap-3 border-b border-neutral-200/80 pb-4 dark:border-neutral-800/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-xs transition-transform duration-300 group-hover:scale-105 dark:border-neutral-800 dark:bg-neutral-950/60">
                {categoryIcons[index] || (
                  <Cpu className="h-5 w-5 text-brand-blue dark:text-brand-cyan" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* Píldoras / Badges de tecnologías con animación en cascada directa */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.15 + skillIndex * 0.05, // Cascada perfecta sin fallos
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                    transition: { duration: 0.15 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group/pill inline-flex items-center gap-1.5 rounded-xl border border-neutral-200/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-xs transition-colors duration-200 hover:border-brand-blue/50 hover:bg-brand-blue/[0.03] hover:text-brand-blue hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-300 dark:hover:border-brand-cyan/50 dark:hover:bg-brand-cyan/[0.05] dark:hover:text-white"
                >
                  {/* Puntito indicador que brilla al hacer hover */}
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 transition-colors duration-200 group-hover/pill:bg-brand-blue dark:bg-neutral-700 dark:group-hover/pill:bg-brand-cyan" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};