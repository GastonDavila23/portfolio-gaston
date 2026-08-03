import { Experience, PersonalInfo, Project } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Gastón Dávila",
  badge: "Técnico Universitario en Programación",
  title: "Desarrollador Full Stack &",
  subtitle: "Soluciones Web Modernas",
  description:
    "Me dedico a diseñar y construir aplicaciones web escalables, rápidas y orientadas a resultados para todo tipo de negocios. Código limpio, arquitectura moderna y atención al detalle en cada proyecto.",
  cvUrl: "/cv.pdf",
  email: "gastonn520@gmail.com",
  github: "https://github.com/GastonDavila23",
  linkedin: "https://www.linkedin.com/in/gaston-davila-desarrollador-web",
};

export const projects: Project[] = [
  {
    id: "proj-0",
    title: "Sistema de Asignación y Control Operativo (PPS)",
    description:
      "Sistema de gestión full-stack desarrollado para la Dirección de Evaluación de la Calidad Educativa. Automatiza el procesamiento de planillas Excel, asignación de roles y generación de reportes operativos en tiempo real.",
    tags: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "SQL",
      "Tailwind CSS",
      "SQLite",
    ],
    githubUrl: "https://github.com/GastonDavila23/PPS",
    featured: true,
    isPrivate: false,
  },
  {
    id: "proj-1",
    title: "Sistema de Gestión e Inventario Admin",
    description:
      "Plataforma administrativa integral con base de datos relacional para control de stock, gestión de productos, ventas y cobros, con panel de administración y reportes en tiempo real.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "SQL"],
    demoUrl: "https://app-inventario-eosin.vercel.app/",
    githubUrl: "#",
    featured: true,
    isPrivate: true,
  },
  {
    id: "proj-2",
    title: "Agenda Digital para Turnos",
    description:
      "Aplicación web creada para una Counselor, enfocada en la presentación de servicios terapéuticos y gestión de turnos.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://www.giselapontoni.com/",
    githubUrl: "https://github.com/GastonDavila23/counseling-app",
    featured: true,
    isPrivate: false,
  },
  {
    id: "proj-3",
    title: "Eccommerce de Ventas",
    description:
      "Sitio web construido para un kiosco local, con sistema de menú digital, carrito de compras y funcionalidad de delivery.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS v4"],
    demoUrl: "https://www.rwkiosco.com/",
    githubUrl: "https://github.com/GastonDavila23/eCommerce-kiosco-ruben",
    featured: false,
    isPrivate: false,
  },
  {
    id: "proj-4",
    title: "Portafolio Profesional & Design System",
    description:
      "Desarrollo frontend modular enfocado en UI/UX moderna, alto rendimiento y accesibilidad. Integra animaciones fluidas con Framer Motion, soporte nativo para modo oscuro y un sistema de control de acceso para proyectos confidenciales.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    githubUrl: "https://github.com/GastonDavila23/portfolio-gaston",
    demoUrl: "https://portfolio-gaston.vercel.app/",
    featured: false,
    isPrivate: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Desarrollador Full Stack (Pasantía Profesional)",
    company: "Dirección de Evaluación de la Calidad Educativa (DGE)",
    period: "2025 - 2026",
    description: [
      "Desarrollo full-stack de un sistema automatizado para el procesamiento masivo de planillas Excel y la asignación algorítmica de roles en operativos educativos.",
      "Arquitectura e implementación de API REST en Python (Flask), incluyendo servicios de cálculo operativo y generación de reportes y descargas en tiempo real.",
      "Creación de una interfaz optimizada en React y TypeScript con paneles de administración, filtros avanzados y control de seguridad basado en roles de usuario.",
    ],
    technologies: ["Python", "Next.js", "React", "TypeScript", "SQL", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "Desarrollador Web Freelance",
    company: "Soluciones Independientes",
    period: "2024 - Presente",
    description: [
      "Diseño y desarrollo de aplicaciones web a medida para comercios y negocios locales (plataformas de menú digital, sistemas de inventario y sitios corporativos).",
      "Configuración de arquitectura modular, bases de datos relacionales y despliegue continuo en producción.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & UI",
    skills: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "SASS",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & Bases de Datos",
    skills: [
      "Python",
      "Flask",
      "Node.js",
      "SQL / PostgreSQL",
      "Supabase",
      "Neon DB",
      "RESTful APIs",
    ],
  },
  {
    title: "Herramientas & Flujo de Trabajo",
    skills: [
      "Git & GitHub",
      "Vercel",
      "VS Code",
      "Postman / Thunder Client",
      "Figma",
      "Metodologías Ágiles",
    ],
  },
];