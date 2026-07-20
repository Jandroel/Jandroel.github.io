"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Layers3, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const toneClass = {
  violet:
    "from-[rgba(51,69,101,0.72)] via-[rgba(104,184,173,0.24)] to-[rgba(217,121,145,0.18)]",
  cyan: "from-[rgba(104,184,173,0.52)] via-[rgba(54,91,125,0.28)] to-[rgba(216,168,79,0.22)]",
  magenta:
    "from-[rgba(217,121,145,0.42)] via-[rgba(232,74,42,0.22)] to-[rgba(104,184,173,0.2)]",
  green:
    "from-[rgba(141,156,114,0.52)] via-[rgba(104,184,173,0.22)] to-[rgba(51,69,101,0.3)]",
  amber:
    "from-[rgba(216,168,79,0.54)] via-[rgba(232,74,42,0.2)] to-[rgba(104,184,173,0.2)]",
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

function ProjectSchematic({ project, label }: { project: Project; label: string }) {
  return (
    <div
      className={cn("absolute inset-0 bg-gradient-to-br", toneClass[project.imageTone])}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[#07070A]/52" />
      <div className="absolute inset-3 rounded-md border border-white/15 bg-black/20 sm:inset-4" />
      <div className="shoji-screen absolute inset-0 opacity-30" />
      <div className="asanoha-screen absolute inset-0 opacity-25" />
      <div className="absolute left-5 right-14 top-5 flex items-center gap-1.5 sm:left-6 sm:right-16 sm:top-6 sm:gap-2">
        <span className="h-2 w-10 rounded-full bg-[#f0b19f]/75" />
        <span className="h-2 w-20 rounded-full bg-white/20" />
        <span className="h-2 w-12 rounded-full bg-[#d8a84f]/50" />
      </div>
      <ProjectPattern project={project} />
      <div className="absolute right-4 top-4 rounded-md border border-white/15 bg-white/10 p-2 sm:right-5 sm:top-5">
        <Layers3 className="size-4 text-white" aria-hidden="true" />
      </div>
    </div>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const totalSlides = 2;
  const labels = [t.projects.card.conceptPreview, t.projects.card.interfaceMap] as const;

  const goToSlide = (nextSlide: number) => {
    setActiveSlide((nextSlide + totalSlides) % totalSlides);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) return;

    const distance = clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 36) return;
    goToSlide(activeSlide + (distance < 0 ? 1 : -1));
  };

  return (
    <div
      className="focus-ring group/gallery relative mb-5 aspect-[16/10] min-w-0 touch-pan-y overflow-hidden rounded-lg border border-white/10 bg-[#07070a]"
      role="region"
      aria-roledescription="carousel"
      aria-label={t.projects.card.galleryLabel.replace("{title}", project.title)}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goToSlide(activeSlide - 1);
        if (event.key === "ArrowRight") goToSlide(activeSlide + 1);
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        handleTouchEnd(event.changedTouches[0]?.clientX ?? 0);
      }}
    >
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0.35, x: activeSlide === 0 ? -8 : 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {activeSlide === 0 ? (
          <>
            <Image
              src={project.previewImage}
              alt={t.projects.card.conceptImageAlt.replace("{title}", project.title)}
              fill
              draggable={false}
              sizes="(min-width: 1280px) 26vw, (min-width: 768px) 45vw, calc(100vw - 3rem)"
              className="select-none object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/35 via-transparent to-[#07070a]/10" />
          </>
        ) : (
          <ProjectSchematic
            project={project}
            label={t.projects.card.schematicImageAlt.replace("{title}", project.title)}
          />
        )}
      </motion.div>

      <span className="jp-kicker absolute left-3 top-3 z-10 rounded-[0.3rem] border border-[#e84a2a]/40 bg-[#07070a]/90 px-2.5 py-1.5 text-[0.58rem] font-semibold tracking-normal text-[#f0b19f] shadow-lg backdrop-blur-sm">
        {labels[activeSlide]}
      </span>

      <button
        type="button"
        className="focus-ring absolute left-2 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-[0.3rem] border border-white/15 bg-[#07070a]/85 text-white shadow-lg transition hover:border-[#68b8ad]/55 hover:bg-[#11131a] active:translate-y-[calc(-50%+1px)] sm:left-3"
        onClick={() => goToSlide(activeSlide - 1)}
        aria-label={t.projects.card.previousImage}
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="focus-ring absolute right-2 top-1/2 z-10 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-[0.3rem] border border-white/15 bg-[#07070a]/85 text-white shadow-lg transition hover:border-[#68b8ad]/55 hover:bg-[#11131a] active:translate-y-[calc(-50%+1px)] sm:right-3"
        onClick={() => goToSlide(activeSlide + 1)}
        aria-label={t.projects.card.nextImage}
      >
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>

      <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-[0.3rem] border border-white/10 bg-[#07070a]/82 px-2 py-1.5 shadow-lg backdrop-blur-sm">
        {Array.from({ length: totalSlides }, (_, slideIndex) => (
          <button
            key={slideIndex}
            type="button"
            className={cn(
              "focus-ring h-1.5 rounded-sm transition-all",
              slideIndex === activeSlide
                ? "w-5 bg-[#e84a2a]"
                : "w-2.5 bg-white/35 hover:bg-white/60",
            )}
            onClick={() => goToSlide(slideIndex)}
            aria-label={t.projects.card.goToImage.replace(
              "{number}",
              String(slideIndex + 1),
            )}
            aria-current={slideIndex === activeSlide ? "true" : undefined}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        {t.projects.card.imagePosition
          .replace("{current}", String(activeSlide + 1))
          .replace("{total}", String(totalSlides))}
      </span>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useLanguage();
  const fileNumber = String(index + 1).padStart(2, "0");
  const hasLiveDemo = project.liveUrl !== "#";
  const projectCopy = t.projects.items[project.id as keyof typeof t.projects.items];
  const categoryLabel = t.common.categories[project.category] ?? project.category;
  const statusLabel = t.common.statuses[project.status] ?? project.status;
  const description = projectCopy?.description ?? project.description;
  const highlights = projectCopy?.highlights ?? project.highlights;

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
            <Badge variant="gradient">{categoryLabel}</Badge>
            <Badge variant="status">{statusLabel}</Badge>
          </div>
          <ProjectGallery project={project} />
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#f0b19f]">
            {t.projects.card.caseFile} {fileNumber}
          </p>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p className="text-pretty text-[0.95rem] leading-6 text-[var(--text-soft)]">
            {description}
          </p>
          {project.isPlaceholder ? (
            <Badge variant="pixel" className="mt-4 w-fit">
              {t.projects.card.editablePlaceholder}
            </Badge>
          ) : null}
          <ul className="mt-5 space-y-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-[0.92rem] leading-6 text-[var(--text-soft)]"
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
            <Button
              asChild
              variant="secondary"
              className={cn("w-full", hasLiveDemo && "sm:w-auto")}
            >
              <a
                href={project.githubUrl}
                aria-label={t.projects.card.viewCodeAria.replace(
                  "{title}",
                  project.title,
                )}
                rel="noopener noreferrer"
                target={project.githubUrl === "#" ? undefined : "_blank"}
              >
                <FaGithub aria-hidden="true" />
                {t.projects.card.viewCode}
              </a>
            </Button>
            {hasLiveDemo ? (
              <Button asChild variant="ghost" className="w-full sm:w-auto">
                <a
                  href={project.liveUrl}
                  aria-label={t.projects.card.liveDemoAria.replace(
                    "{title}",
                    project.title,
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink aria-hidden="true" />
                  {t.projects.card.liveDemo}
                </a>
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
