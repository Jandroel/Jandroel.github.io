import type { Project, ProjectCategory } from "@/types";

export const projectCategories = [
  "All",
  "Frontend",
  "Full-Stack",
  "Backend",
  "Database",
  "Cloud",
  "Experimental",
] as const satisfies readonly ("All" | ProjectCategory)[];

export const projects = [
  {
    id: "dev-portfolio",
    title: "Dev Portfolio",
    category: "Frontend",
    status: "In Progress",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    description:
      "Personal portfolio designed to showcase projects, skills, and software engineering growth.",
    longDescription:
      "A dark, responsive portfolio concept with local data, motion details, and a lightweight 3D hero visual.",
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Editable TypeScript content",
      "Accessible responsive layout",
      "Subtle motion and 3D detail",
    ],
    isPlaceholder: true,
    imageTone: "violet",
  },
  {
    id: "taskflow-app",
    title: "TaskFlow App",
    category: "Full-Stack",
    status: "Placeholder",
    year: "2026",
    stack: ["React", "Spring Boot", "PostgreSQL"],
    description: "Productivity app concept for managing tasks, workflows, and progress.",
    longDescription:
      "A future full-stack project idea centered on task organization, progress views, and clean API structure.",
    githubUrl: "#",
    liveUrl: "#",
    highlights: ["Workflow views", "Backend planning", "Relational data model"],
    isPlaceholder: true,
    imageTone: "cyan",
  },
  {
    id: "api-manager",
    title: "API Manager",
    category: "Backend",
    status: "Placeholder",
    year: "2026",
    stack: ["FastAPI", "Python", "PostgreSQL"],
    description:
      "API management concept focused on endpoints, documentation, and clean backend structure.",
    longDescription:
      "A backend-focused concept for organizing services, documenting endpoints, and practicing maintainable API patterns.",
    githubUrl: "#",
    liveUrl: "#",
    highlights: ["Endpoint catalog", "Typed schemas", "Documentation-first flow"],
    isPlaceholder: true,
    imageTone: "green",
  },
  {
    id: "database-dashboard",
    title: "Database Dashboard",
    category: "Database",
    status: "Placeholder",
    year: "2026",
    stack: ["MySQL", "PostgreSQL", "React"],
    description:
      "Dashboard concept for visualizing database records, queries, and metrics.",
    longDescription:
      "A data interface concept for exploring records, query results, and schema relationships without claiming real metrics.",
    githubUrl: "#",
    liveUrl: "#",
    highlights: ["Query panels", "Schema cards", "Record visualization"],
    isPlaceholder: true,
    imageTone: "amber",
  },
  {
    id: "cloud-notes",
    title: "Cloud Notes",
    category: "Cloud",
    status: "Placeholder",
    year: "2026",
    stack: ["Next.js", "Firebase/Supabase placeholder", "Cloud"],
    description: "Cloud-based notes concept focused on clean UI and fast access.",
    longDescription:
      "A deployable notes concept for learning cloud-backed UI patterns while keeping implementation details editable.",
    githubUrl: "#",
    liveUrl: "#",
    highlights: ["Fast note capture", "Cloud-ready layout", "Clean UI patterns"],
    isPlaceholder: true,
    imageTone: "magenta",
  },
] as const satisfies readonly Project[];
