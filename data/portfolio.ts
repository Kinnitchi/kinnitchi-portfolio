import { em } from "framer-motion/client";

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

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "2Be Consulting",
    role: "Software Engineer",
    period: "2022 - Presente",
    description: [
      "Desenvolvimento de soluções corporativas enterprise utilizando plataforma Fluig (TOTVS)",
      "Implementação de processos BPMN 2.0 complexos para automação de fluxos de negócio",
      "Criação de portais corporativos personalizados com foco em experiência do usuário",
      "Integração de sistemas via API REST com arquitetura escalável",
    ],
    technologies: ["Fluig", "JavaScript", "Java", "BPMN", "API REST", "SQL"],
  },
  {
    company: "Acqio",
    role: "Front-End Developer",
    period: "2021 - 2022",
    description: [
      "Desenvolvimento de interfaces modernas e responsivas para aplicações web",
      "Implementação de componentes reutilizáveis seguindo padrões de design system",
      "Otimização de performance e acessibilidade em aplicações React",
      "Colaboração direta com equipe de UX/UI para implementação pixel-perfect",
    ],
    technologies: ["React", "JavaScript", "CSS", "Bootstrap", "Git"],
  },
  {
    company: "Universidade Cruzeiro do Sul",
    role: "Desenvolvedor Júnior",
    period: "2020 - 2021",
    description: [
      "Desenvolvimento e manutenção de sistemas internos da universidade",
      "Criação de interfaces web para gestão acadêmica e administrativa",
      "Suporte técnico e implementação de melhorias em sistemas legados",
      "Participação em projetos de modernização da infraestrutura web",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "SQL"],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Portal Corporativo Integrado",
    description:
      "Portal corporativo completo desenvolvido em Fluig com integração de múltiplos sistemas via API REST",
    technologies: ["Fluig", "JavaScript", "Java", "API REST", "SQL"],
    category: "Enterprise",
    highlights: [
      "Integração com 5+ sistemas externos",
      "Dashboard customizado com métricas em tempo real",
      "Autenticação SSO e controle de acesso granular",
    ],
  },
  {
    title: "Sistema de Gestão de Processos BPMN",
    description:
      "Solução completa para automação de processos empresariais utilizando BPMN 2.0",
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
      "Plataforma para gerenciamento e aprovação de documentos corporativos com versionamento",
    technologies: ["Fluig", "JavaScript", "React", "API REST"],
    category: "Document Management",
    highlights: [
      "Workflow de aprovação multinível",
      "Versionamento automático de documentos",
      "Auditoria completa de todas as ações",
    ],
  },
  {
    title: "Dashboard Analytics Corporativo",
    description:
      "Dashboard moderno para visualização de KPIs e métricas corporativas em tempo real",
    technologies: ["React", "Next.js", "TypeScript", "API REST"],
    category: "Data Visualization",
    highlights: [
      "Atualização de dados em tempo real",
      "Gráficos interativos e responsivos",
      "Exportação de relatórios personalizados",
    ],
  },
];

export const socialLinks: Record<string, string> = {
  github: "https://github.com/Kinnitchi",
  linkedin: "https://www.linkedin.com/in/kinnitchi/",
  twitter: "https://twitter.com/kinnitchi",
  instagram: "https://www.instagram.com/kinnitchi/",
  email: "igor.kinnitchi@gmail.com",
  telephone: "+55 11 9 94661-8614",
};
