"use client";

import { TimelineItem } from "@/components/cards/TimelineItem";
import { Glow } from "@/components/effects/Glow";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline } from "@/data/timeline";

export function Timeline() {
  const { t } = useLanguage();

  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="relative py-16 sm:py-20"
    >
      <Glow variant="section" />
      <Container>
        <Reveal>
          <SectionHeading
            id="journey-title"
            eyebrow={t.timeline.eyebrow}
            mark="道"
            title={t.timeline.title}
            description={t.timeline.description}
          />
        </Reveal>

        <ol className="relative mt-10 min-w-0 space-y-5 before:absolute before:left-4 before:top-8 before:h-[calc(100%-2rem)] before:w-px before:bg-[linear-gradient(180deg,var(--vermilion),var(--gold),var(--cyan))] sm:before:left-6">
          {timeline.map((item, index) => {
            const copy = t.timeline.items[index] ?? item;

            return (
              <TimelineItem
                key={copy.title}
                item={{
                  ...item,
                  title: copy.title,
                  period: copy.period,
                  description: copy.description,
                  tags: copy.tags,
                }}
                index={index}
              />
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
