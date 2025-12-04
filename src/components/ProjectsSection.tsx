import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "YumeTrack",
      predescription: "Projet de suivis des séries animées.",
      description:
        "Ce projet permet de suivre facilement la progression de vos séries animées : noter les épisodes vus, ajouter des titres à vos favoris pour les regarder plus tard, ou encore découvrir de nouveaux animes. Le tout est accompagné d’un système de récompenses pour rendre l’expérience plus motivante.",
      demoLink: "https://github.com/LeoV0/AnimeStats",
      stacks: ["React", "NestJS", "Prisma"],
      informations: ["Projet solo", "Durée : En cours"],
    },
    {
      title: "Generative Art",
      predescription: "Landing Page.",
      description:
        "Ce projet est une œuvre d’art générative interactive réalisée avec JavaScript et Canvas. Génère dynamiquement des formes, lignes, grilles et éléments inspirés du design technique et japonais. Les carrés bleus et autres éléments se déplacent et pulsent de manière fluide, créant un effet vivant et immersif. Optimisé pour une expérience sur ordinateur pour profiter pleinement de tous les effets visuels. Projet personnel démontrant mes compétences en animation, Canvas API, et design génératif.",
      demoLink: "https://github.com/LeoV0/Generative-Art",
      demoUrl: "https://generative-art-landing-page.vercel.app/",
      stacks: ["HTML", "CSS", "JavaScript", "Canvas API"],
      informations: ["Projet solo", "Durée : 1 mois"],
    },
    {
      title: "La Meublerie",
      predescription: "Projet de site de vente de meubles en ligne.",
      description:
        "Projet full-stack avec Next.js et TailwindCSS. J’ai utilisé Shadcn/ui pour la page de connexion/inscription (email + mot de passe). Côté administration, ajout d’un bouton de suppression de meuble directement dans le dashboard. Le backend repose sur Spring Boot pour la gestion des produits.",
      demoLink: "https://github.com/LeoV0/La_Meublerie",
      stacks: ["Next.js", "TailwindCSS", "Spring Boot"],
      informations: ["Projet en équipe (8 personnes)", "Durée : 4 semaines"],
    },
    {
      title: "Blog",
      predescription: "Création d'un blog avec gestion des utilisateurs.",
      description:
        "Application Django avec authentification sécurisée (connexion/déconnexion, profils, suppression de compte). Réalisation de la page d’accueil via des templates HTML/CSS statiques et écriture de tests de fonctionnalités (par ex. publication d’articles) avec Pytest.",
      demoLink: "https://github.com/LeoV0/La_Meublerie_Ecommerce",
      stacks: ["Django", "Pytest", "HTML (Template)", "CSS"],
      informations: ["Projet en équipe (4 personnes)", "Durée : 2 semaines"],
    },
    {
      title: "Surf App",
      predescription:
        "Application de spot de surf avec l'utilisation de l'API Google Maps.",
      description:
        "App mobile & web Flutter avec backend Go (framework Gin + GORM). J’ai implémenté la logique de recherche (par nom ou ville) utilisée sur l’accueil, la page recherche et les favoris. Mise en place de l’enregistrement utilisateur et de la logique de la Grid avec bouton retour.",
      demoLink: "https://github.com/LeoV0/SpotSurfApp",
      stacks: ["Flutter", "Dart", "Gin", "GORM"],
      informations: ["Projet en équipe (4 personnes)", "Durée : 4 semaines"],
    },
    {
      title: "Quiz JavaScript",
      predescription: "Application de quiz sur le développement JavaScript.",
      description:
        "Quiz 100 % JavaScript (vanilla) avec progression, score final et timer. Chaque réponse cliquée s’affiche en vert si correcte, en rouge si erronée, puis la bonne réponse est mise en évidence avant de passer à la question suivante au bout de 5 s.",
      demoLink: "https://github.com/LeoV0/Quiz-javascript",
      demoUrl: "https://leov0.github.io/Quiz-javascript/",
      stacks: ["HTML", "CSS", "JavaScript"],
      informations: ["Projet solo", "Durée : 2 heures"],
    },
    {
      title: "Application Film",
      predescription: "Application de recherche de films.",
      description:
        "Intégration de l’API TMDB pour récupérer les infos des films. Barre de recherche permettant d’afficher affiche, notes en temps réel grâce à fetch.",
      demoLink: "https://github.com/LeoV0/Application_Film",
      demoUrl: "https://application-film.vercel.app/",
      stacks: ["React", "ViteJS"],
      informations: ["Projet solo", "Durée : 2 heures"],
    },
    {
      title: "Restaurant Georgia",
      predescription: "Application de réservation de restaurant.",
      description:
        "Simple page d’accueil pour un restaurant fictif. Réalisée en HTML et SCSS (main.scss) et prête à être connectée à un backend si besoin.",
      demoLink: "https://github.com/LeoV0/Restaurant-georgia",
      demoUrl: "https://leov0.github.io/Restaurant-georgia/",
      stacks: ["HTML", "SCSS", "JavaScript"],
      informations: ["Projet solo", "Durée : 1 semaine"],
    },
  ];

  return (
    <section className="flex flex-col items-center w-full py-24 text-white bg-black">
      <div className="grid w-full max-w-6xl gap-8 px-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
