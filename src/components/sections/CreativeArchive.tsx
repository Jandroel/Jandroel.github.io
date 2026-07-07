import { Film, ImageIcon, PlaySquare } from "lucide-react";

import { Reveal } from "@/components/effects/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { archiveItems } from "@/data/archive";
import { cn } from "@/lib/utils";

const visualTone = {
  matcha: "from-[rgba(141,156,114,0.3)] via-[rgba(216,168,79,0.13)] to-transparent",
  sakura: "from-[rgba(217,121,145,0.22)] via-[rgba(232,74,42,0.11)] to-transparent",
  teal: "from-[rgba(104,184,173,0.26)] via-[rgba(51,69,101,0.18)] to-transparent",
} as const;

const icons = [ImageIcon, Film, PlaySquare] as const;

export function CreativeArchive() {
  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="archive-title"
            eyebrow="Archive"
            mark="記"
            title="Personal Archive"
            description="A visual shelf for project captures, motion studies, and references that shape what I build."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="vn-dialogue mt-10 grid min-w-0 gap-5 rounded-lg p-4 sm:p-5 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div className="min-w-0">
              <p className="jp-kicker text-xs text-[#f0b19f]">jandroel.archive</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                A place for the things that make each build feel mine.
              </h3>
            </div>
            <p className="text-pretty text-sm leading-6 text-[var(--text-soft)] sm:text-base">
              Screenshots, small clips, interface experiments, and visual references can
              live here without changing the rest of the portfolio structure.
            </p>
          </div>
        </Reveal>

        <div className="mt-5 grid min-w-0 gap-5 lg:grid-cols-3">
          {archiveItems.map((item, index) => {
            const Icon = icons[index] ?? ImageIcon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card
                  variant="interactive"
                  className="h-full min-w-0 overflow-hidden p-4"
                >
                  <div
                    className={cn(
                      "jp-media-frame asanoha-screen aspect-[4/3] rounded-lg bg-gradient-to-br",
                      visualTone[item.tone],
                    )}
                  >
                    <div className="absolute inset-6 grid grid-rows-[auto_1fr_auto]">
                      <div className="flex items-center justify-between gap-3">
                        <Badge variant="pixel">{item.label}</Badge>
                        <span
                          className="hanko-mark min-h-9 min-w-9 text-sm"
                          aria-hidden="true"
                        >
                          {item.japaneseLabel.slice(0, 1)}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative flex size-24 items-center justify-center rounded-lg border border-white/15 bg-black/20 text-[var(--paper)]">
                          <span
                            aria-hidden="true"
                            className="absolute left-3 right-3 top-3 h-px bg-white/15"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute bottom-3 left-3 h-px w-10 bg-[#f0b19f]/40"
                          />
                          <Icon className="size-8" aria-hidden="true" />
                        </div>
                      </div>
                      <p className="jp-kicker text-xs text-[var(--text-faint)]">
                        {item.japaneseLabel}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 min-w-0">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-pretty text-sm leading-6 text-[var(--text-soft)]">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
