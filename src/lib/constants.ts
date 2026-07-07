import type { NavLink } from "@/types";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavLink[];

export const processSteps = [
  {
    title: "Plan",
    description: "Understand the goal, define the structure, and decide the right tools.",
    icon: "clipboard",
  },
  {
    title: "Design",
    description:
      "Create clean interfaces with attention to hierarchy, spacing, and user experience.",
    icon: "penTool",
  },
  {
    title: "Code",
    description:
      "Build reusable components with TypeScript, clear data structures, and maintainable patterns.",
    icon: "code",
  },
  {
    title: "Test",
    description: "Check responsiveness, accessibility, edge cases, and performance.",
    icon: "checkCircle",
  },
  {
    title: "Improve",
    description: "Refactor, polish details, and learn from every project.",
    icon: "sparkles",
  },
] as const;
