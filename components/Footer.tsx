import { SiGithub, SiLinkedin } from "react-icons/si";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-black text-lg gradient-text tracking-tight">
            IO.
          </span>
          <p className="text-muted text-sm">
            © {year} Igor Oliveira. Feito com Next.js & TailwindCSS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
