import { TimelineItem } from "@/components/cards/TimelineItem";
import { Glow } from "@/components/effects/Glow";
import { Reveal } from "@/components/effects/Reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline } from "@/data/timeline";

export function Timeline() {
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
            eyebrow="Journey"
            title="My Developer Journey"
            description="A simple timeline of what I am learning, building, and improving as a software engineering student."
          />
        </Reveal>

        <ol className="relative mt-10 min-w-0 space-y-5 before:absolute before:left-4 before:top-8 before:h-[calc(100%-2rem)] before:w-px before:bg-[linear-gradient(180deg,var(--cyan),var(--violet),var(--magenta))] sm:before:left-6">
          {timeline.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
