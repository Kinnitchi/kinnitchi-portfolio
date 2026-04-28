/* =========================================================
   Portfolio Data — Single source of truth for all content
   ========================================================= */

export const personal = {
  name: "Igor Oliveira",
  role: "Software Engineer",
  tagline: "Front-End Developer & Enterprise Solutions Specialist",
  description:
    "Desenvolvedor especializado em criar soluções web escaláveis e de alta performance. Expertise em React, Next.js e plataformas enterprise como Fluig (TOTVS). Apaixonado por código limpo, UX e boas práticas.",
  location: "Brasil",
  email: "igor@igoroliveira.dev",
  github: "https://github.com/Kinnitchi",
  linkedin: "https://linkedin.com/in/igoroliveira",
  availableForWork: true,
};

/* --------------------------------------------------------- */

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "platform";
}

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "jQuery", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  // Backend
  { name: "Java", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "API REST", category: "backend" },
  { name: "BPMN 2.0", category: "backend" },

  // Platform
  { name: "Fluig (TOTVS)", category: "platform" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "Azure DevOps", category: "tools" },
];

export const skillCategories: Record<
  Skill["category"],
  { label: string; color: string }
> = {
  frontend: { label: "Front-End", color: "text-cyan-400" },
  backend: { label: "Back-End", color: "text-emerald-400" },
  platform: { label: "Plataformas", color: "text-violet-400" },
  tools: { label: "Ferramentas", color: "text-orange-400" },
};

/* --------------------------------------------------------- */

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Cruzeiro do Sul",
    role: "Front-End Developer",
    period: "2024 – Presente",
    current: true,
    description: [
      "Desenvolvimento de soluções corporativas enterprise utilizando plataforma Fluig (TOTVS)",
      "Criação de interfaces web para gestão acadêmica e administrativa",
      "Suporte técnico e implementação de melhorias em sistemas legados",
      "Participação em projetos de modernização da infraestrutura web",
    ],
    technologies: ["Fluig", "JavaScript", "jQuery", "BPMN", "API REST", "SQL"],
  },
  {
    company: "Acqio",
    role: "Software Engineer",
    period: "2022 – 2024",
    description: [
      "Desenvolvimento de soluções corporativas enterprise utilizando plataforma Fluig (TOTVS)",
      "Desenvolvimento de interfaces modernas e responsivas para aplicações web",
      "Implementação de componentes reutilizáveis seguindo padrões de design system",
      "Otimização de performance e acessibilidade em aplicações React",
      "Colaboração direta com equipe de UX/UI para implementação pixel-perfect",
    ],
    technologies: [
      "Fluig",
      "JavaScript",
      "Java",
      "PHP",
      "jQuery",
      "SQL",
      "Git",
      "Azure DevOps",
    ],
  },
  {
    company: "2Be Consulting",
    role: "Desenvolvedor Júnior",
    period: "2021 – 2022",
    description: [
      "Desenvolvimento de soluções corporativas enterprise utilizando plataforma Fluig (TOTVS)",
      "Implementação de processos BPMN 2.0 complexos para automação de fluxos de negócio",
      "Criação de portais corporativos personalizados com foco em experiência do usuário",
      "Integração de sistemas via API REST com arquitetura escalável",
    ],
    technologies: ["Fluig", "JavaScript", "jQuery", "BPMN", "API REST", "SQL"],
  },
];

/* --------------------------------------------------------- */

export type ProjectCategory =
  | "Enterprise"
  | "Process Automation"
  | "Document Management"
  | "Data Visualization";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  highlights: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Portal Corporativo Integrado",
    description:
      "Portal corporativo completo desenvolvido em Fluig com integração de múltiplos sistemas via API REST, oferecendo dashboards customizados e gestão centralizada.",
    technologies: ["Fluig", "JavaScript", "Java", "API REST", "SQL"],
    category: "Enterprise",
    highlights: [
      "Integração com 5+ sistemas externos",
      "Dashboard com métricas em tempo real",
      "Autenticação SSO e controle de acesso granular",
    ],
  },
  {
    title: "Sistema de Gestão de Processos BPMN",
    description:
      "Solução completa para automação de processos empresariais com BPMN 2.0, reduzindo tempo de aprovação e aumentando a visibilidade dos fluxos.",
    technologies: ["Fluig", "BPMN 2.0", "JavaScript", "Java"],
    category: "Process Automation",
    highlights: [
      "Redução de 60% no tempo de aprovação",
      "Interface intuitiva para acompanhamento de fluxos",
      "Notificações automatizadas e SLA tracking",
    ],
  },
  {
    title: "Sistema de Aprovação de Documentos",
    description:
      "Plataforma para gerenciamento e aprovação de documentos corporativos com versionamento completo e trilha de auditoria.",
    technologies: ["Fluig", "JavaScript", "React", "API REST"],
    category: "Document Management",
    highlights: [
      "Workflow de aprovação multinível",
      "Versionamento automático de documentos",
      "Auditoria completa de todas as ações",
    ],
  },
  {
    title: "Dashboard de Indicadores KPI",
    description:
      "Painel de controle executivo com visualização de KPIs em tempo real, alimentado por integrações com múltiplas fontes de dados.",
    technologies: ["React", "JavaScript", "SQL", "API REST"],
    category: "Data Visualization",
    highlights: [
      "Visualizações interativas e responsivas",
      "Atualização de dados em tempo real",
      "Exportação de relatórios em PDF/Excel",
    ],
  },
];

export const categoryColors: Record<ProjectCategory, string> = {
  Enterprise: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Process Automation":
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "Document Management":
    "bg-violet-500/10 text-violet-400 border border-violet-500/20",
  "Data Visualization":
    "bg-orange-500/10 text-orange-400 border border-orange-500/20",
};

export const stats = [
  { label: "Anos de experiência", value: "3+" },
  { label: "Projetos entregues", value: "20+" },
  { label: "Tecnologias dominadas", value: "15+" },
  { label: "Empresas atendidas", value: "3" },
];
