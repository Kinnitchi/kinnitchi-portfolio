import Section from "@/components/Section";
import Container from "@/components/Container";
import { experiences } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <Section id="experiencia" className={styles.experience}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Experiência</h1>
          <p className={styles.subtitle}>Minha trajetória profissional</p>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.marker}></div>
                <div className={styles["content-experience"]}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <h4 className={styles.company}>{exp.company}</h4>
                    </div>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <ul className={styles.description}>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.technologies}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
