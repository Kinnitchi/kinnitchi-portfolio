import Section from "@/components/Section";
import Container from "@/components/Container";
import { projects } from "@/data/portfolio";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section id="projetos" className={styles.project}>
      <Container>
        <h1 className={styles.title}>Projetos</h1>
        <p className={styles.subtitle}>Soluções corporativas que desenvolvi</p>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.category}>{project.category}</div>
              <h3 className={styles["title-card"]}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.highlights}>
                <h4 className={styles.highlightsTitle}>Destaques:</h4>
                <ul className={styles.highlightsList}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
