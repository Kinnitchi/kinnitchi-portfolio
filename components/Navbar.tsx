"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

interface NavLink {
  id: string;
  label: string;
}

/** Navigation links. Keep in sync with section IDs in page.tsx. */
const NAV_LINKS: NavLink[] = [
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

const ALL_SECTION_IDS = ["hero", ...NAV_LINKS.map((l) => l.id)];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const current = ALL_SECTION_IDS.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 100 && bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      role="navigation"
      aria-label="Navegação principal"
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.menu}>
        <a
          href="#hero"
          className={styles.logo}
          aria-label="Ir para o topo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          {isScrolled ? "IO" : "Igor Oliveira"}
        </a>

        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Ir para seção ${label}`}
            aria-current={activeSection === id ? "location" : undefined}
            className={activeSection === id ? styles.active : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
