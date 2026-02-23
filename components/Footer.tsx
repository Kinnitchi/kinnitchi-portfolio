import Container from "@/components/Container";
import styles from "./Footer.module.css";

/**
 * Site-wide footer rendered in RootLayout.
 * Extracted from the Contact section to follow single responsibility principle.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>© {new Date().getFullYear()} Igor Oliveira. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
