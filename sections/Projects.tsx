import { projects, categoryColors } from "@/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";
import GithubRepos from "@/sections/GithubRepos";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6" aria-label="Projetos">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">Portfólio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">Projetos em destaque</h2>
        </AnimatedSection>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1} className="gradient-border rounded-2xl">
              <div className="glass rounded-2xl p-7 h-full flex flex-col gap-5 glass-hover transition-all duration-300 hover:-translate-y-1">
                {/* Category badge */}
                <span
                  className={`self-start px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[project.category]}`}
                >
                  {project.category}
                </span>

                {/* Title & description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2 text-sm text-muted">
                      <HiCheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                      {hl}
                    </li>
                  ))}
                </ul>

                {/* Footer: tech + links */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-muted text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
                        aria-label={`Código fonte: ${project.title}`}
                      >
                        <FiGithub className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
                        aria-label={`Demo: ${project.title}`}
                      >
                        <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* GitHub public repos */}
        <GithubRepos />
      </div>
    </section>
  );
}
