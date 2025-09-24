import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "La Meublerie",
      predescription: "Projet de site de vente de meubles en ligne.",
      description:
        "Projet full-stack, le front utilise Next.js et TailwindCSS pour des interfaces modernes et réactives, tandis que le backend repose sur Spring Boot pour la gestion des produits.",
      demoLink: "https://github.com/LeoV0/La_Meublerie",
      stacks: ["Next.js", "TailwindCSS", "Spring Boot"],
    },
    {
      title: "Blog",
      predescription: "Création d'un blog avec gestion des utilisateurs.",
      description:
        "Authentification sécurisée : gestion d’une connexion/déconnexion, profils utilisateurs, modification/suppression du compte. Système d’articles : poster, consulter, liker/unliker des articles.",
      demoLink: "https://github.com/LeoV0/microblogging-palm",
      stacks: ["Django", "Pytest", "HTML (Template)", "CSS"],
    },
    {
      title: "Surf App",
      predescription:
        "Application de spot de surf avec l'utilisation de l'API google maps.",
      description:
        "Mobile et web app hybride. Flutter pour l’UI cross-platform. Le backend est fait avec Gin (Go), persistant les spots via GORM. L’intégration Google Maps permet une localisation dynamique des spots favoris des utilisateurs.",
      demoLink: "https://github.com/LeoV0/SpotSurfApp",
      stacks: ["Flutter", "Dart", "Gin", "GORM"],
    },
    {
      title: "Quiz JavaScript",
      predescription: "Application de quiz sur le développement JavaScript.",
      description:
        "Application interactive idéale pour tester ses connaissances en JS. Quiz avec questions à choix multiples, score final. Interface simple et responsive, conçue avec HTML, CSS et JavaScript pur.",
      demoLink: "https://github.com/LeoV0/Quiz-javascript",
      stacks: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Application Film",
      predescription: "Application de recherche de films.",
      description:
        "Recherche de films via l’API OMDB, affichage des résultats avec détails. Fonctionnalités : recherche par titre, affichage des informations clés (année, genre, réalisateur, acteurs, synopsis).",
      demoLink: "https://github.com/LeoV0/Application-Film",
      stacks: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Restaurant Georgia",
      predescription: "Application de réservation de restaurant.",
      description:
        "Interface simple pour la réservation, adaptation possible pour de vraies données.",
      demoLink: "https://github.com/LeoV0/Restaurant-georgia",
      stacks: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="w-full py-24 flex flex-col items-center bg-black text-white">
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
