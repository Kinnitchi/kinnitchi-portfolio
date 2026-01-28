import Section from "@/components/Section";
import Container from "@/components/Container";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="sobre" className={styles.about}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Sobre mim</h1>

          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.paragraph}>
                Sou <strong>Software Engineer</strong> com expertise em desenvolvimento <strong>Front-End</strong> e
                especialização na plataforma <strong>Fluig (TOTVS)</strong>. Desde 2020, atuo no desenvolvimento de
                soluções corporativas enterprise, transformando requisitos complexos em sistemas escaláveis e de alta
                performance.
              </p>
              <p className={styles.paragraph}>
                Minha experiência abrange desde a <strong>arquitetura de aplicações React/Next.js</strong> até a
                implementação de <strong>processos BPMN 2.0</strong> complexos, sempre com foco em clean code,
                performance e experiência do usuário. Trabalho em ambientes ágeis, colaborando diretamente com
                stakeholders técnicos e de negócio.
              </p>
              <p className={styles.paragraph}>
                Tenho um perfil <strong>solution-oriented</strong>, buscando sempre equilibrar excelência técnica com
                entrega de valor ao negócio. Minha stack principal envolve tecnologias modernas do ecossistema
                JavaScript/TypeScript, com forte domínio em integrações via API REST e desenvolvimento de portais
                corporativos.
              </p>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Anos de experiência</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Projetos entregues</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Tecnologias</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
