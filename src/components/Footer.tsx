export default function Footer() {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-md border-t border-white/20 text-white py-6 flex flex-col items-center">
      <p className="text-sm mb-2">
        &copy; {new Date().getFullYear()} Léo Gousset. Tous droits réservés.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/LeoV0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/l%C3%A9o-gousset/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
