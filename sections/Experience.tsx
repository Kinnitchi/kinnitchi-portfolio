import { experiences } from "@/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-white/1" aria-label="Experiência profissional">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">Carreira</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">Experiência profissional</h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1.75 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-accent/50 via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection
                  key={`${exp.company}-${exp.period}`}
                  delay={i * 0.1}
                  className={`relative flex items-start md:items-center gap-8 pb-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-0 md:left-1/2 top-2 md:top-1/2 translate-y-0 md:-translate-y-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background z-10"
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div className={`ml-8 md:ml-0 flex-1 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14 md:text-left"}`}>
                    <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-accent">
                      {/* Header */}
                      <div
                        className={`flex flex-col gap-1 mb-4 ${isLeft ? "md:items-end" : "md:items-start"} items-start`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-foreground">{exp.company}</span>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-accent font-semibold text-sm">{exp.role}</p>
                        <p className="text-muted text-xs tracking-wider">{exp.period}</p>
                      </div>

                      {/* Description */}
                      <ul
                        className={`flex flex-col gap-2 mb-4 ${isLeft ? "md:items-end" : "md:items-start"} items-start`}
                      >
                        {exp.description.map((item) => (
                          <li key={item} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 shrink-0"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div
                        className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-start`}
                      >
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" aria-hidden="true" />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
