import type { Project, ProjectCategory } from "@/types";

export const projectCategories = [
  "All",
  "Frontend",
  "Full-Stack",
  "Backend",
] as const satisfies readonly ("All" | ProjectCategory)[];

export const projects = [
  {
    id: "redevops-lab",
    title: "ReDevOps Lab",
    category: "Full-Stack",
    status: "In Progress",
    year: "2026",
    stack: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "OpenAPI"],
    description:
      "DevOps learning lab that analyzes public GitHub repositories and turns them into actionable learning paths.",
    longDescription:
      "A monorepo with a Next.js web app, NestJS API, repository analyzer, rule-based scoring engine, and generated learning reports.",
    githubUrl: "https://github.com/Jandroel/redevops-lab",
    liveUrl: "#",
    highlights: [
      "Rule-based DevOps maturity score",
      "Repository analyzer and stack detection",
      "Learning paths, lab cards, and Markdown export",
    ],
    isPlaceholder: false,
    previewImage: "/images/projects/redevops-lab-concept.webp",
    imageTone: "violet",
  },
  {
    id: "gestobra-frontend",
    title: "GestObra Frontend",
    category: "Frontend",
    status: "In Progress",
    year: "2026",
    stack: ["Angular 18", "TypeScript", "RxJS", "Reactive Forms", "Karma"],
    description:
      "Angular dashboard for construction management, connected to a JWT-secured API with role-aware workflows.",
    longDescription:
      "A dense administrative interface with authentication, role guards, responsive navigation, operational modules, reports, and testing setup.",
    githubUrl: "https://github.com/Jandroel/GestObra-Frontend",
    liveUrl: "#",
    highlights: [
      "JWT authentication and role-based guards",
      "Operational modules for projects, inventory, costs, and reports",
      "Responsive admin shell with toasts and dialogs",
    ],
    isPlaceholder: false,
    previewImage: "/images/projects/gestobra-frontend-concept.webp",
    imageTone: "cyan",
  },
  {
    id: "gestobra-backend",
    title: "GestObra Backend",
    category: "Backend",
    status: "In Progress",
    year: "2026",
    stack: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Docker"],
    description:
      "Spring Boot REST API for managing construction projects, clients, workers, materials, progress, costs, and reports.",
    longDescription:
      "A backend service with domain modules, DTOs, JWT security, environment profiles, Swagger documentation, PostgreSQL, Docker, and CI.",
    githubUrl: "https://github.com/Jandroel/GestObra-Backend",
    liveUrl: "#",
    highlights: [
      "Domain modules for construction operations",
      "JWT security, DTOs, profiles, and Swagger docs",
      "PostgreSQL and Docker-ready local workflow",
    ],
    isPlaceholder: false,
    previewImage: "/images/projects/gestobra-backend-concept.webp",
    imageTone: "green",
  },
  {
    id: "clickmemories",
    title: "ClickMemories",
    category: "Frontend",
    status: "In Progress",
    year: "2026",
    stack: ["Astro", "TypeScript", "CSS", "Playwright", "GitHub Actions"],
    description:
      "Spanish portfolio website for a photography and video studio, built with an editorial visual system.",
    longDescription:
      "A responsive Astro site with typed portfolio content, service pages, SEO metadata, gallery interactions, documentation, and smoke tests.",
    githubUrl: "https://github.com/Jandroel/ClickMemories",
    liveUrl: "#",
    highlights: [
      "Editorial landing and service-oriented structure",
      "Typed portfolio content with detail pages",
      "Responsive UI, SEO metadata, and Playwright smoke test",
    ],
    isPlaceholder: false,
    previewImage: "/images/projects/clickmemories-concept.webp",
    imageTone: "amber",
  },
] as const satisfies readonly Project[];
