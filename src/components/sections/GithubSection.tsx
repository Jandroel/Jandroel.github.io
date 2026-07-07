"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { links } from "@/data/links";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const gridTone = [
  "bg-[rgba(104,184,173,0.11)]",
  "bg-[rgba(232,74,42,0.12)]",
  "bg-[rgba(217,121,145,0.08)]",
  "bg-[rgba(141,156,114,0.11)]",
  "bg-white/[0.035]",
] as const;

export function GithubSection() {
  const { t } = useLanguage();
  const highlightedRepos = projects.slice(0, 3);

  return (
    <section
      id="github"
      aria-labelledby="github-title"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              id="github-title"
              eyebrow={t.github.eyebrow}
              mark="録"
              title={t.github.title}
              description={t.github.description}
            />
            <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
              <Button asChild className="w-full sm:w-auto">
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" />
                  {t.github.visit}
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <a href="#projects">{t.github.viewProjects}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card variant="subtle" className="shoji-screen min-w-0 p-4 sm:p-5">
              <div className="mb-5 flex min-w-0 flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="jp-kicker text-sm text-cyan-100">
                    @{siteConfig.username}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {t.github.gridTitle}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-soft)]">
                    {t.github.gridNote}
                  </p>
                </div>
                <Badge variant="pixel" className="max-w-full">
                  {t.github.visualRepresentation}
                </Badge>
              </div>
              <div
                className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1"
                aria-hidden="true"
              >
                {Array.from({ length: 91 }).map((_, index) => (
                  <span
                    key={index}
                    className={cn(
                      "aspect-square rounded-[3px] border border-white/[0.03]",
                      gridTone[(index * 7 + index) % gridTone.length],
                    )}
                  />
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-3">
          {highlightedRepos.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <Card variant="interactive" className="h-full min-w-0 p-5">
                <div className="mb-4 flex min-w-0 items-center justify-between gap-3">
                  <Badge variant="gradient">
                    {t.common.categories[project.category] ?? project.category}
                  </Badge>
                  <FaGithub className="size-4 text-cyan-100" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-[var(--text-soft)]">
                  {t.projects.items[project.id as keyof typeof t.projects.items]
                    ?.description ?? project.description}
                </p>
                <a
                  href={project.githubUrl}
                  className="focus-ring mt-5 inline-flex max-w-full items-center gap-2 rounded-md text-sm font-semibold text-cyan-100 transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.github.viewRepository}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
