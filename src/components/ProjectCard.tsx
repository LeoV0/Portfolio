import { Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  predescription: string;
  description: string;
  demoLink: string;
  image?: string;
  stacks?: string[];
}

export default function ProjectCard({
  title,
  predescription,
  description,
  demoLink,
  image,
  stacks = [],
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-4 shadow-lg"
      initial={{ y: -50, scale: 0.8, opacity: 0 }} // départ un peu au-dessus et plus petit
      whileInView={{ y: 0, scale: 1, opacity: 1 }} // arrivée normale
      transition={{
        type: "spring",
        stiffness: 200, // plus rigide pour le “rebond”
        damping: 10, // moins d’amortissement pour un effet rebond plus visible
      }}
      whileHover={{ scale: 1.05 }} // hover comme avant
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-48 object-cover"
        />
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-white/80 flex-1">{predescription}</p>

      <p className="text-white/80 flex-1">{description}</p>

      {stacks.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="text-xs bg-white/10 px-2 py-1 rounded-md"
            >
              {stack}
            </span>
          ))}
        </div>
      )}

      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-6 py-3 mt-4
                   rounded-2xl border border-white/20
                   backdrop-blur-md bg-black/40
                   text-white font-medium
                   hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
      >
        <Github size={18} />
      </a>
    </motion.div>
  );
}
