import { Cloud, Code2, Database, Server, Wrench } from "lucide-react";

import { Reveal } from "@/components/effects/Reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

const focusCards = [
  {
    title: "Frontend",
    description: "Interfaces with clean hierarchy, responsiveness, and motion details.",
    icon: Code2,
  },
  {
    title: "Backend",
    description: "API logic, service structure, and maintainable server-side patterns.",
    icon: Server,
  },
  {
    title: "Databases",
    description: "Data models, queries, records, and reliable information structure.",
    icon: Database,
  },
  {
    title: "Cloud",
    description: "Deployment concepts, infrastructure basics, and production workflows.",
    icon: Cloud,
  },
  {
    title: "Tools",
    description: "Git, editors, API clients, containers, and practical engineering habits.",
    icon: Wrench,
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow="Profile"
              title="About Me"
              description="Building, learning, and improving - one project at a time."
            />
            <p className="mt-6 text-pretty text-base leading-8 text-[var(--text-soft)]">
              I'm a Software Engineering student focused on building web projects
              that connect clean interfaces with reliable backend logic and
              well-structured data.
            </p>
            <blockquote className="mt-8 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-pretty text-xl font-bold leading-8 text-white">
                "{siteConfig.quote}"
              </p>
            </blockquote>
          </Reveal>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {focusCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal key={card.title} delay={index * 0.06}>
                  <Card variant="interactive" className="hud-corners h-full min-w-0 p-5">
                    <span className="mb-5 flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] text-cyan-100">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-3 text-pretty text-sm leading-6 text-[var(--text-soft)]">
                      {card.description}
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
