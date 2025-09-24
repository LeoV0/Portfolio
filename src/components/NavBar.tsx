import { useState } from "react";

interface NavbarProps {
  title?: string;
  className?: string;
}

export default function Navbar({
  title = "Portfolio",
  className,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 w-[90%] max-w-3xl rounded-2xl backdrop-blur-md bg-black/40 border border-white/20 shadow-lg px-6 py-3 flex items-center justify-between ${
        className || ""
      }`}
    >
      <div className="text-white font-bold text-lg">{title}</div>
      <div className="hidden md:flex space-x-6">
        {[
          { name: "Accueil", href: "#accueil" },
          { name: "À propos", href: "#a-propos" },
          { name: "Projets", href: "#projets" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none cursor-pointer"
        aria-label="Ouvrir le menu"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex flex-col items-center space-y-4 py-4 md:hidden animate-fade-in">
          {[
            { name: "Accueil", href: "#accueil" },
            { name: "À propos", href: "#a-propos" },
            { name: "Projets", href: "#projets" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
