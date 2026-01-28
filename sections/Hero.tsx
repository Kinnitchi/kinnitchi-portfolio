import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <Container>
          <div className={styles.badge}>Disponível para novos projetos</div>
          <h1 className={styles.title}>Igor Oliveira</h1>
          <p className={styles.subtitle}>Software Engineer | Front-End | Especialista em Fluig (TOTVS)</p>
          <p className={styles.description}>
            Transformando requisitos complexos em soluções corporativas escaláveis. Especialista em desenvolvimento
            front-end e plataforma Fluig, com foco em performance, arquitetura limpa e experiência do usuário.
          </p>
          <div className={styles.actions}>
            <Button href="#projetos" variant="primary" className="btn-primary">
              Ver projetos
            </Button>
            <Button href="#contato" variant="outline" className="btn-outline">
              Entrar em contato
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  );
}
