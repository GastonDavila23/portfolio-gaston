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
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-6 backdrop-blur-sm transition-all hover:border-neutral-300 hover:bg-white hover:shadow-sm dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700/80 dark:hover:bg-neutral-900/60 dark:hover:shadow-none"
          >
            {/* Título de la Tarjeta + Ícono */}
            <div className="mb-6 flex items-center gap-3 border-b border-neutral-200/80 pb-4 dark:border-neutral-800/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950/60">
                {categoryIcons[index] || (
                  <Cpu className="h-5 w-5 text-brand-blue dark:text-brand-cyan" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* Píldoras / Badges de tecnologías */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-neutral-200/80 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-300 dark:hover:border-brand-cyan/40 dark:hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};