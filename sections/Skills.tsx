import Section from "@/components/Section";
import Container from "@/components/Container";
import { skills } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  const categories = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    platform: skills.filter((s) => s.category === "platform"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <Section id="skills" className={styles.skills}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}> Skills & Stack</h1>
          <p className={styles.subtitle}>Tecnologias e ferramentas que domino</p>
          <div className={styles.grid}>
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Front-End</h3>
              <div className={styles.skillList}>
                {categories.frontend.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Back-End</h3>
              <div className={styles.skillList}>
                {categories.backend.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Plataforma</h3>
              <div className={styles.skillList}>
                {categories.platform.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Ferramentas</h3>
              <div className={styles.skillList}>
                {categories.tools.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
