"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar seção ativa
      const sections = [
        "hero",
        "sobre",
        "skills",
        "experiencia",
        "projetos",
        "contato",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.menu}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          {isScrolled ? "IO" : "Igor Oliveira"}
        </a>
        <a
          href="#sobre"
          className={activeSection === "sobre" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("sobre");
          }}
        >
          Sobre
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills");
          }}
        >
          Skills
        </a>
        <a
          href="#experiencia"
          className={activeSection === "experiencia" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("experiencia");
          }}
        >
          Experiência
        </a>
        <a
          href="#projetos"
          className={activeSection === "projetos" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projetos");
          }}
        >
          Projetos
        </a>
        <a
          href="#contato"
          className={activeSection === "contato" ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contato");
          }}
        >
          Contato
        </a>
      </div>
    </nav>
  );
}
