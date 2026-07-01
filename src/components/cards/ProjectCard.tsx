"use client";

import { ExternalLink, Layers3, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const toneClass = {
  violet: "from-violet-400/70 via-cyan-300/35 to-magenta-400/45",
  cyan: "from-cyan-300/70 via-blue-400/40 to-violet-400/45",
  magenta: "from-magenta-400/70 via-violet-400/45 to-cyan-300/35",
  green: "from-green-400/70 via-cyan-300/35 to-violet-400/40",
  amber: "from-amber-400/70 via-green-400/35 to-cyan-300/40",
} as const;

function ProjectPattern({ project }: { project: Project }) {
  if (project.category === "Full-Stack") {
    return (
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-1.5 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-2">
        {[0, 1, 2].map((column) => (
          <div
            key={column}
            className="space-y-1.5 rounded-md border border-white/10 bg-black/20 p-1.5 sm:space-y-2 sm:p-2"
          >
            <span className="block h-1.5 w-8 rounded-full bg-cyan-200/60" />
            <span className="block h-7 rounded bg-white/[0.08]" />
            <span className="block h-5 rounded bg-white/[0.055]" />
          </div>
        ))}
      </div>
    );
  }

  if (project.category === "Backend") {
    return (
      <div className="absolute bottom-4 left-4 right-4 space-y-1.5 font-mono text-[0.58rem] text-cyan-100/80 sm:bottom-5 sm:left-5 sm:right-5 sm:space-y-2 sm:text-[0.62rem]">
        {["GET /api/projects", "POST /api/build", "200 OK"].map((line, index) => (
          <div
            key={line}
            className="flex min-w-0 items-center justify-between gap-2 rounded-md border border-white/10 bg-black/25 px-2 py-1.5 sm:px-3 sm:py-2"
          >
            <span className="min-w-0 truncate">{line}</span>
            <span className={index === 2 ? "text-green-200" : "text-violet-200"}>
              {index === 2 ? "stable" : "typed"}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (project.category === "Database") {
    return (
      <div className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-md border border-white/10 bg-black/25 sm:bottom-5 sm:left-5 sm:right-5">
        {[0, 1, 2, 3].map((row) => (
          <div
            key={row}
            className="grid grid-cols-[0.6fr_1fr_0.8fr] border-b border-white/10 last:border-b-0"
          >
            <span className="h-8 border-r border-white/10 bg-white/[0.045]" />
            <span className="h-8 border-r border-white/10 bg-cyan-200/[0.055]" />
            <span className="h-8 bg-magenta-200/[0.055]" />
          </div>
        ))}
      </div>
    );
  }

  if (project.category === "Cloud") {
    return (
      <div className="absolute inset-x-4 bottom-4 top-14 sm:inset-x-5 sm:bottom-5 sm:top-16">
        <span className="absolute left-2 top-8 size-12 rounded-full border border-cyan-200/30 bg-cyan-200/10" />
        <span className="absolute right-5 top-2 size-10 rounded-full border border-violet-200/30 bg-violet-200/10" />
        <span className="absolute bottom-2 left-1/2 size-14 -translate-x-1/2 rounded-full border border-magenta-200/30 bg-magenta-200/10" />
        <span className="absolute left-12 right-14 top-14 h-px rotate-[-12deg] bg-cyan-200/35" />
        <span className="absolute bottom-14 left-16 right-16 h-px rotate-[17deg] bg-violet-200/35" />
      </div>
    );
  }

  return (
    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-[1fr_0.7fr] gap-2 sm:bottom-5 sm:left-5 sm:right-5">
      <div className="space-y-2 rounded-md border border-white/10 bg-black/25 p-2">
        <span className="block h-2 w-20 rounded-full bg-cyan-200/70" />
        <span className="block h-2 w-14 rounded-full bg-white/20" />
        <span className="block h-12 rounded bg-white/[0.075]" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((tile) => (
          <span
            key={tile}
            className="rounded-md border border-white/10 bg-white/[0.075]"
          />
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "relative mb-5 aspect-[16/10] min-w-0 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br",
        toneClass[project.imageTone],
      )}
    >
      <div className="absolute inset-0 bg-[#05060A]/50" />
      <div className="absolute inset-3 rounded-md border border-white/15 bg-black/20 sm:inset-4" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute left-5 right-14 top-5 flex items-center gap-1.5 sm:left-6 sm:right-16 sm:top-6 sm:gap-2">
        <span className="h-2 w-10 rounded-full bg-cyan-200/80" />
        <span className="h-2 w-20 rounded-full bg-white/20" />
        <span className="h-2 w-12 rounded-full bg-magenta-200/50" />
      </div>
      <ProjectPattern project={project} />
      <div className="absolute right-4 top-4 rounded-md border border-white/15 bg-white/10 p-2 sm:right-5 sm:top-5">
        <Layers3 className="size-4 text-white" aria-hidden="true" />
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="h-full min-w-0"
    >
      <Card
        variant="project"
        className="gradient-hover hud-corners flex h-full min-w-0 flex-col overflow-hidden"
      >
        <CardHeader className="pb-0">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <Badge variant="gradient">{project.category}</Badge>
            <Badge variant="status">{project.status}</Badge>
          </div>
          <ProjectVisual project={project} />
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p className="text-pretty text-sm leading-6 text-[var(--text-soft)]">
            {project.description}
          </p>
          {project.isPlaceholder ? (
            <Badge variant="pixel" className="mt-4 w-fit">
              Editable placeholder
            </Badge>
          ) : null}
          <ul className="mt-5 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-sm leading-6 text-[var(--text-soft)]"
              >
                <Sparkles
                  className="mt-1 size-4 shrink-0 text-cyan-200"
                  aria-hidden="true"
                />
                <span className="min-w-0">{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex min-w-0 flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <a
                href={project.githubUrl}
                aria-label={`View code for ${project.title}`}
                rel="noopener noreferrer"
                target={project.githubUrl === "#" ? undefined : "_blank"}
              >
                <FaGithub aria-hidden="true" />
                View Code
              </a>
            </Button>
            <Button asChild variant="ghost" className="w-full sm:w-auto">
              <a
                href={project.liveUrl}
                aria-label={`Open live demo for ${project.title}`}
                rel="noopener noreferrer"
                target={project.liveUrl === "#" ? undefined : "_blank"}
              >
                <ExternalLink aria-hidden="true" />
                Live Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
