export interface CVConfig {
  url: string;
  filename: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  cv: CVConfig;
}

export const siteConfig: SiteConfig = {
  name: "Gastón Dávila",
  role: "Full Stack Developer",
  cv: {
    url: "/gaston-davila-cv.pdf",
    filename: "gaston-davila-cv.pdf",
    label: "Curriculum",
  },
};