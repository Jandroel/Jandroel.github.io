import type { TimelineItem } from "@/types";

export const timeline = [
  {
    title: "Learning Software Engineering",
    period: "Now",
    description:
      "Studying software foundations, practicing problem solving, and connecting theory with real projects.",
    icon: "graduation",
    tags: ["Software Engineering", "Learning", "Practice"],
  },
  {
    title: "Building Web Projects",
    period: "In progress",
    description:
      "Creating frontend experiences that focus on structure, responsiveness, and clean interaction details.",
    icon: "layers",
    tags: ["Frontend", "React", "UI"],
  },
  {
    title: "Exploring Backend & Databases",
    period: "In progress",
    description:
      "Improving backend logic, API thinking, and data modeling with relational and document databases.",
    icon: "database",
    tags: ["Backend", "APIs", "Databases"],
  },
  {
    title: "Improving Cloud & DevOps Skills",
    period: "Exploring",
    description:
      "Learning deployment workflows, cloud concepts, and the tools that help projects run reliably.",
    icon: "cloud",
    tags: ["Cloud", "Deploy", "DevOps"],
  },
  {
    title: "Practicing Clean Code & Better Architecture",
    period: "Always",
    description:
      "Refactoring, organizing components, and building habits that make software easier to maintain.",
    icon: "sparkles",
    tags: ["Clean Code", "Architecture", "Growth"],
  },
] as const satisfies readonly TimelineItem[];
