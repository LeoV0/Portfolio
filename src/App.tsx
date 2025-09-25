import Navbar from "./components/NavBar";
import Orb from "./components/Orb";
import ScrollReveal from "./components/ScrollReveal";
import ProjectsSection from "./components/ProjectsSection";
import { Github, Linkedin } from "lucide-react";
import "./index.css";
import Footer from "./components/Footer";
import LogoLoop from "./components/LogoLoop";
import type { LogoItem } from "./components/LogoLoop";

import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function App() {
  const logos: LogoItem[] = [
    { node: <SiNextdotjs size={40} color="#AFFF" />, title: "Next.js" },
    { node: <FaReact size={40} color="#61DAFB" />, title: "React" },
    { node: <SiTailwindcss size={40} color="#38BDF8" />, title: "TailwindCSS" },
    { node: <SiTypescript size={40} color="#3178C6" />, title: "TypeScript" },
    { node: <Github size={40} color="#FFF" />, title: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="flex flex-col items-center pt-20 text-white">
        {/* Section Intro */}
        <div id="accueil" className="relative mb-20 w-full h-[70vh]">
          <Orb hoverIntensity={1.3} rotateOnHover={true} hue={0} />
        </div>


        {/* Boutons GitHub / LinkedIn */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/LeoV0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-300 border shadow-lg rounded-2xl border-white/20 backdrop-blur-md bg-black/40 hover:bg-white hover:text-black"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/l%C3%A9o-gousset/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-300 border shadow-lg rounded-2xl border-white/20 backdrop-blur-md bg-black/40 hover:bg-white hover:text-black"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        {/* À propos */}
        <div id="a-propos" className="text-center">
          <ScrollReveal textClassName="text-center max-w-xl mb-12">
            Je suis <strong>Léo Gousset</strong>, développeur web front-end
            passionné par la création d’interfaces modernes et performantes.
          </ScrollReveal>
          <ScrollReveal textClassName="text-center max-w-xl mb-12">
            Je crée des expériences utilisateurs fluides et interactives,
            combinant esthétique et performance.
          </ScrollReveal>
          <ScrollReveal textClassName="text-center max-w-xl mb-20">
            N’hésitez pas à parcourir mon portfolio pour découvrir mes projets !
          </ScrollReveal>
        </div>

        {/* Loop Logo */}
        <div className="flex justify-center w-full mt-20 mb-20">
          <LogoLoop
            logos={logos}
            speed={80}
            logoHeight={50}
            gap={48}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="black"
            pauseOnHover={true}
            width="80%"
          />
        </div>

        {/* Section Projets */}
        <div id="projets">
          <ProjectsSection />
        </div>

        <Footer />
      </main>
    </div>
  );
}
