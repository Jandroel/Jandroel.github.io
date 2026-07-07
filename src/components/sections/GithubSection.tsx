import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Reveal } from "@/components/effects/Reveal";
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
  "bg-[rgba(101,199,189,0.12)]",
  "bg-[rgba(255,77,46,0.14)]",
  "bg-[rgba(255,122,168,0.11)]",
  "bg-[rgba(159,178,122,0.13)]",
  "bg-white/[0.035]",
] as const;

export function GithubSection() {
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
              eyebrow="GitHub"
              mark="録"
              title="GitHub & Projects"
              description="My GitHub is where I share experiments, learning projects, and ideas while the portfolio becomes a more personal build archive."
            />
            <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
              <Button asChild className="w-full sm:w-auto">
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" />
                  Visit GitHub
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <a href="#projects">View Projects</a>
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
                  <p className="mt-1 text-sm text-[var(--text-soft)]">
                    Decorative activity grid, not real contribution data.
                  </p>
                </div>
                <Badge variant="pixel" className="max-w-full">
                  visual representation
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
                  <Badge variant="gradient">{project.category}</Badge>
                  <FaGithub className="size-4 text-cyan-100" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-[var(--text-soft)]">
                  {project.description}
                </p>
                <a
                  href={project.githubUrl}
                  className="focus-ring mt-5 inline-flex max-w-full items-center gap-2 rounded-md text-sm font-semibold text-cyan-100 transition hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository
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
