import { Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  predescription: string;
  description: string;
  demoLink: string; // lien vers le repo
  demoUrl?: string; // lien vers la démo en ligne (facultatif)
  image?: string;
  stacks?: string[];
  informations?: string[];
}

export default function ProjectCard({
  title,
  predescription,
  description,
  demoLink,
  demoUrl,
  image,
  stacks = [],
  informations = [],
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 p-6 border shadow-lg bg-black/40 backdrop-blur-md border-white/20 rounded-2xl"
      initial={{ y: -50, scale: 0.8, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 rounded-lg"
        />
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="flex-1 text-white/80">{predescription}</p>
      <p className="flex-1 text-white/80">{description}</p>

      {stacks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="px-2 py-1 text-xs rounded-md bg-white/10"
            >
              {stack}
            </span>
          ))}
        </div>
      )}

      {informations.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {informations.map((information) => (
            <span
              key={information}
              className="px-2 py-1 text-xs rounded-md bg-white/10"
            >
              {information}
            </span>
          ))}
        </div>
      )}

      {/* Boutons */}
      <div className="flex flex-col gap-3 mt-4">
        {/* GitHub */}
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-300 border shadow-lg rounded-2xl border-white/20 backdrop-blur-md bg-black/40 hover:bg-white hover:text-black"
        >
          <Github size={18} />
          Code
        </a>

        {/* Démo (affiché seulement si demoUrl est fourni) */}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-300 border shadow-lg rounded-2xl border-white/20 backdrop-blur-md bg-black/40 hover:bg-white hover:text-black"
          >
            Démo
          </a>
        )}
      </div>
    </motion.div>
  );
}
