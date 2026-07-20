import type { ReactNode } from "react";

export type ProjectCategory =
  "Frontend" | "Full-Stack" | "Backend" | "Database" | "Cloud" | "Experimental";

export type ProjectStatus = "Completed" | "In Progress" | "Experimental" | "Placeholder";

export type SkillLevel = "Learning" | "Comfortable" | "Exploring";

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription?: string;
  readonly category: ProjectCategory;
  readonly status: ProjectStatus;
  readonly year: string;
  readonly stack: readonly string[];
  readonly highlights: readonly string[];
  readonly githubUrl: string;
  readonly liveUrl: string;
  readonly isPlaceholder: boolean;
  readonly previewImage: string;
  readonly imageTone: "violet" | "cyan" | "magenta" | "green" | "amber";
}

export interface Skill {
  readonly name: string;
  readonly category: string;
  readonly icon: string;
  readonly color: string;
  readonly level?: SkillLevel;
  readonly featured: boolean;
}

export interface SkillGroup {
  readonly category: string;
  readonly description: string;
  readonly icon: string;
  readonly skills: readonly Skill[];
}

export interface TimelineItem {
  readonly title: string;
  readonly period: string;
  readonly description: string;
  readonly icon: string;
  readonly tags: readonly string[];
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: ReactNode;
  readonly external?: boolean;
}

export interface NavLink {
  readonly label: string;
  readonly href: `#${string}`;
}
