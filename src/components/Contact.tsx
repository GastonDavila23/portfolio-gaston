"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Copy, Send, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { handleEmailClick } from "@/utils/email";

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="contacto" className="relative py-16 sm:py-20">
            {/* Contenedor Principal con estilo de tarjeta destacada */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-50/70 p-8 text-center backdrop-blur-md sm:p-12 md:p-16 dark:border-neutral-800/80 dark:bg-neutral-900/40"
            >
                {/* Luz ambiental interna para dar profundidad */}
                <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue/15 to-brand-cyan/15 blur-3xl dark:from-brand-blue/20 dark:to-brand-cyan/20" />

                {/* Etiqueta superior */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-brand-blue shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-brand-cyan dark:shadow-none">
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Contacto Directo</span>
                </div>

                {/* Título y Descripción */}
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-tight dark:text-white">
                    ¿Listo para construir algo{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">
                        extraordinario?
                    </span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
                    Ya sea para una oportunidad laboral, un proyecto independiente o
                    simplemente para intercambiar ideas técnicas, mi buzón siempre está
                    disponible.
                </p>

                {/* Botones de Acción (Email Mailto + Copiar) */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        onClick={(e) => handleEmailClick(e, personalInfo.email)}
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-glow-sm transition-all hover:shadow-glow-md hover:brightness-110 active:scale-95 sm:w-auto"
                    >
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        <span>Enviar Correo</span>
                    </a>

                    <button
                        onClick={handleCopyEmail}
                        aria-label="Copiar correo electrónico al portapapeles"
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white/90 px-7 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:border-brand-blue/40 hover:bg-neutral-100 active:scale-95 sm:w-auto dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-neutral-200 dark:hover:border-brand-cyan/40 dark:hover:bg-neutral-900"
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 text-emerald-500" />
                                <span className="text-emerald-600 dark:text-emerald-400">
                                    ¡Correo copiado!
                                </span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                                <span>{personalInfo.email}</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Separador suave */}
                <div className="my-10 border-t border-neutral-200/60 dark:border-neutral-800/60" />

                {/* Redes Sociales Footer-style dentro de la tarjeta */}
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        También puedes encontrarme en:
                    </span>

                    <div className="flex items-center gap-3">
                        {/* LinkedIn */}
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn de Gastón Dávila"
                            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2 text-xs font-medium text-neutral-700 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-300 dark:hover:border-brand-cyan/40 dark:hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3.5 w-3.5"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>

                        {/* GitHub */}
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub de Gastón Dávila"
                            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2 text-xs font-medium text-neutral-700 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-300 dark:hover:border-brand-cyan/40 dark:hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3.5 w-3.5"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};