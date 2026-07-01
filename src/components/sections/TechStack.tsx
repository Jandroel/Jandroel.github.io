"use client";

import {
  Cloud,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { SkillBadge } from "@/components/cards/SkillBadge";
import { Reveal } from "@/components/effects/Reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

const categoryIcons: Record<string, LucideIcon> = {
  cloud: Cloud,
  code: Code2,
  database: Database,
  layout: LayoutTemplate,
  server: Server,
  workflow: Workflow,
  wrench: Wrench,
};

export function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="stack-title"
            eyebrow="Tech Stack"
            title="Technologies & Tools I Use"
            description="A focused mix of languages, frameworks, databases, cloud platforms, and workflow tools."
          />
        </Reveal>

        <div className="mt-10 grid min-w-0 gap-5 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = categoryIcons[group.icon] ?? Code2;

            return (
              <Reveal key={group.category} delay={groupIndex * 0.05}>
                <Card variant="subtle" className="h-full min-w-0 p-4 sm:p-5">
                  <div className="mb-5 flex min-w-0 items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white">
                        {group.category}
                      </h3>
                      <p className="mt-1 text-pretty text-sm leading-6 text-[var(--text-soft)]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="grid min-w-0 gap-3 sm:grid-cols-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.045,
                        },
                      },
                    }}
                  >
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="min-w-0"
                        variants={{
                          hidden: { opacity: 0, y: 12 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.32, ease: "easeOut" }}
                      >
                        <SkillBadge skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
