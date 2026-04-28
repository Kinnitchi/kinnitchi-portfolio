"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiBootstrap,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiDatabase, HiCode, HiCube } from "react-icons/hi";
import { VscAzureDevops } from "react-icons/vsc";
import { skills, skillCategories } from "@/data/portfolio";
import type { Skill } from "@/data/portfolio";

type IconComponent = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconComponent> = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  jQuery: SiJquery,
  Bootstrap: SiBootstrap,
  Java: FaJava,
  SQL: HiDatabase,
  "API REST": HiCode,
  "BPMN 2.0": HiCode,
  "Fluig (TOTVS)": HiCube,
  Git: SiGit,
  "Azure DevOps": VscAzureDevops,
};

const iconColorMap: Record<string, string> = {
  HTML5: "text-orange-500",
  CSS3: "text-blue-500",
  JavaScript: "text-yellow-400",
  TypeScript: "text-blue-400",
  React: "text-cyan-400",
  "Next.js": "text-foreground",
  jQuery: "text-blue-500",
  Bootstrap: "text-violet-500",
  Java: "text-red-500",
  SQL: "text-emerald-400",
  "API REST": "text-emerald-300",
  "BPMN 2.0": "text-sky-400",
  "Fluig (TOTVS)": "text-violet-400",
  Git: "text-orange-500",
  "Azure DevOps": "text-sky-400",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = iconMap[skill.name] ?? HiCode;
  const color = iconColorMap[skill.name] ?? "text-muted";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="glass glass-hover rounded-xl p-5 flex flex-col items-center gap-3 group cursor-default"
    >
      <div className={`text-3xl ${color} group-hover:scale-110 transition-transform duration-200`} aria-hidden="true">
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors duration-200 text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categories = (Object.keys(skillCategories) as Skill["category"][]).filter((cat) =>
    skills.some((s) => s.category === cat),
  );

  return (
    <section id="skills" className="py-28 px-6 bg-white/1" aria-label="Habilidades e tecnologias">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">Tecnologias</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">Meu stack</h2>
        </motion.div>

        {/* Grouped by category */}
        <div className="flex flex-col gap-14">
          {categories.map((category) => {
            const filtered = skills.filter((s) => s.category === category);
            const { label, color } = skillCategories[category];

            return (
              <div key={category}>
                <h3 className={`text-sm font-semibold tracking-[0.15em] uppercase mb-6 ${color}`}>{label}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {filtered.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
