"use client";

import { Cloud, Code2, Database, Server, Wrench } from "lucide-react";

import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const focusCards = [
  {
    title: "Frontend",
    label: "UI",
    description: "Interfaces with clean hierarchy, responsiveness, and motion details.",
    icon: Code2,
  },
  {
    title: "Backend",
    label: "API",
    description: "API logic, service structure, and maintainable server-side patterns.",
    icon: Server,
  },
  {
    title: "Databases",
    label: "DB",
    description: "Data models, queries, records, and reliable information structure.",
    icon: Database,
  },
  {
    title: "Cloud",
    label: "OPS",
    description: "Deployment concepts, infrastructure basics, and production workflows.",
    icon: Cloud,
  },
  {
    title: "Tools",
    label: "DEV",
    description:
      "Git, editors, API clients, containers, and practical engineering habits.",
    icon: Wrench,
  },
] as const;

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-16 sm:py-20">
      <Container>
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow={t.about.eyebrow}
              mark="自"
              title={t.about.title}
              description={t.about.description}
            />
            <p className="mt-6 text-pretty text-base leading-8 text-[var(--text-soft)]">
              {t.about.body}
            </p>
            <blockquote className="vn-dialogue mt-8 rounded-lg p-5">
              <p className="jp-kicker mb-3 text-xs text-[#f0b19f]">
                {t.about.mottoLabel}
              </p>
              <p className="text-pretty text-xl font-bold leading-8 text-white">
                "{t.site.quote}"
              </p>
            </blockquote>
          </Reveal>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {focusCards.map((card, index) => {
              const Icon = card.icon;
              const copy = t.about.focusCards[index] ?? card;

              return (
                <Reveal key={copy.title} delay={index * 0.06}>
                  <Card variant="interactive" className="hud-corners h-full min-w-0 p-5">
                    <div className="mb-5 flex min-w-0 items-center justify-between gap-4">
                      <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] text-cyan-100">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="hanko-mark text-sm" aria-hidden="true">
                        {copy.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{copy.title}</h3>
                    <p className="mt-3 text-pretty text-sm leading-6 text-[var(--text-soft)]">
                      {copy.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
