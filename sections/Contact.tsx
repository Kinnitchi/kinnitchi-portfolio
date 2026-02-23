import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import styles from "./Contact.module.css";
import { socialLinks } from "@/data/portfolio";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contato" className={styles.contact}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Vamos conversar?</h2>
          <p className={styles.subtitle}>Entre em contato para discutir projetos e oportunidades</p>
          <div>
            <p className={styles.text}>
              Estou sempre aberto a discutir novos projetos, oportunidades de colaboração ou simplesmente trocar ideias
              sobre tecnologia e desenvolvimento de software.
            </p>

            <div className={styles.links}>
              <a href={`mailto:${socialLinks.email}`} className={styles.link} aria-label="Enviar email">
                <HiMail className={styles.icon} />
                <div>
                  <div className={styles.linkLabel}>Email</div>
                  <div className={styles.linkValue}>{socialLinks.email}</div>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="LinkedIn"
              >
                <FaLinkedin className={styles.icon} />
                <div>
                  <div className={styles.linkLabel}>LinkedIn</div>
                  <div className={styles.linkValue}>{socialLinks.linkedin}</div>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="GitHub"
              >
                <FaGithub className={styles.icon} />
                <div>
                  <div className={styles.linkLabel}>GitHub</div>
                  <div className={styles.linkValue}>{socialLinks.github}</div>
                </div>
              </a>
            </div>

            <div className={styles.cta}>
              <Button href={`mailto:${socialLinks.email}`} variant="primary">
                Enviar mensagem
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
