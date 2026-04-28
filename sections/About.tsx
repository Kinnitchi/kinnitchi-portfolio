import { personal, stats } from "@/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";
import { FiMapPin, FiMail } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-28 px-6" aria-label="Sobre mim">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="mb-16">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Sobre mim
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Quem sou eu
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <AnimatedSection
            className="lg:col-span-3 flex flex-col gap-6"
            delay={0.1}
          >
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              Sou um Software Engineer apaixonado por construir soluções
              digitais de alta qualidade. Com mais de 3 anos de experiência,
              especialisei-me em desenvolvimento{" "}
              <span className="text-foreground font-medium">Front-End</span> e
              na plataforma enterprise{" "}
              <span className="text-foreground font-medium">
                Fluig (TOTVS)
              </span>
              .
            </p>
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              Tenho forte proficiência em{" "}
              <span className="text-foreground font-medium">
                React, Next.js e TypeScript
              </span>
              , com experiência em criar sistemas que combinam performance,
              acessibilidade e excelente experiência do usuário.
            </p>
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              Minha trajetória abrange desde startups de fintech até grandes
              instituições de ensino, sempre focado em entregar código limpo e
              interfaces que fazem a diferença.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <span className="inline-flex items-center gap-2 text-muted text-sm">
                <FiMapPin
                  className="w-4 h-4 text-accent"
                  aria-hidden="true"
                />
                {personal.location}
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-muted text-sm hover:text-foreground transition-colors"
              >
                <FiMail
                  className="w-4 h-4 text-accent"
                  aria-hidden="true"
                />
                {personal.email}
              </a>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection
            className="lg:col-span-2 grid grid-cols-2 gap-4"
            delay={0.2}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-1"
              >
                <span className="text-3xl sm:text-4xl font-black gradient-text">
                  {stat.value}
                </span>
                <span className="text-muted text-xs sm:text-sm leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
