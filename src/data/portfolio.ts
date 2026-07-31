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
    id: "proj-1",
    title: "Sistema de Gestión e Inventario Admin",
    description:
      "Plataforma administrativa integral con base de datos relacional para control de stock, gestión de productos y panel de analíticas en tiempo real.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "SQL"],
    demoUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/tu-usuario/repo",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Plataforma Digital de Menú & Pedidos",
    description:
      "Aplicación web autoadministrable enfocada en alta conversión para comercios gastronómicos, con visualización ágil de productos y optimización UX/UI.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/tu-usuario/repo",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Portafolio Profesional de Consultoría",
    description:
      "Sitio web corporativo de alto rendimiento con diseño modular, optimización SEO y despliegue continuo en Vercel.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS v4"],
    demoUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/tu-usuario/repo",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Desarrollador Full Stack (Pasantía Profesional)",
    company: "Dirección de Evaluación de la Calidad Educativa (DGE)",
    period: "2025 - 2026",
    description: [
      "Desarrollo e implementación de sistemas automatizados para la gestión escolar y operativos de evaluación educativa.",
      "Resolución de incidencias críticas de autenticación y manejo de roles de usuario.",
      "Optimización y mantenimiento de interfaces modernas enfocadas en la usabilidad del usuario final.",
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