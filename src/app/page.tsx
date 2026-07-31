import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}