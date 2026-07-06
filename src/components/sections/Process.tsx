import { ProcessCard } from "@/components/cards/ProcessCard";
import { Reveal } from "@/components/effects/Reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="Process"
            mark="進"
            title="How I Build"
            description="A practical workflow for turning rough ideas into something I can test, show, and improve."
          />
        </Reveal>

        <div className="relative mt-10 grid min-w-0 gap-5 md:grid-cols-2 lg:grid-cols-5">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-10 hidden h-px bg-[linear-gradient(90deg,transparent,var(--vermilion),var(--gold),var(--cyan),transparent)] lg:block"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <ProcessCard step={step} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
