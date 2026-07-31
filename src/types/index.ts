export interface PersonalInfo {
  name: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  cvUrl: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}