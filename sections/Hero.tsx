"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import { personal } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção inicial"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid opacity-50"
        aria-hidden="true"
      />

      {/* Ambient gradient orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, #0070f3 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, #7928ca 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7"
        >
          {/* Availability badge */}
          {personal.availableForWork && (
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-muted backdrop-blur-sm">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                Disponível para novos projetos
              </span>
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none"
          >
            {personal.name.split(" ")[0]}{" "}
            <span className="gradient-text">
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-muted font-medium tracking-wide uppercase"
          >
            {personal.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-muted/80 max-w-2xl leading-relaxed"
          >
            {personal.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver projetos
              <HiArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 bg-white/[0.04] text-foreground font-semibold hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Entrar em contato
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 pt-1"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
              aria-label="Perfil no GitHub"
            >
              <SiGithub className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
              aria-label="Perfil no LinkedIn"
            >
              <SiLinkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs tracking-widest uppercase hover:text-foreground transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <FiArrowDown className="w-4 h-4" aria-hidden="true" />
      </a>
    </section>
  );
}
