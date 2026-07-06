import { Download, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { links } from "@/data/links";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="shoji-screen relative min-w-0 overflow-hidden rounded-lg border border-[rgba(255,77,46,0.26)] bg-[linear-gradient(135deg,rgba(255,77,46,0.16),rgba(242,184,75,0.10),rgba(101,199,189,0.12))] p-5 shadow-[0_0_80px_rgba(255,77,46,0.1)] sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,248,239,0.06),transparent_42%),linear-gradient(240deg,rgba(255,77,46,0.08),transparent_48%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--vermilion),var(--gold),var(--cyan),transparent)]"
            />
            <div className="relative grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-center">
              <div className="min-w-0 max-w-3xl">
                <div className="flex min-w-0 flex-wrap items-center gap-3">
                  <p className="jp-kicker text-xs text-cyan-100">contact.init</p>
                  <span className="max-w-full break-all rounded-md border border-[rgba(159,178,122,0.28)] bg-[rgba(159,178,122,0.1)] px-2 py-1 font-mono text-xs text-[#dbe7bd]">
                    available_for_learning_projects
                  </span>
                </div>
                <h2
                  id="contact-title"
                  className="mt-4 text-[clamp(2rem,9vw,3rem)] font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Let&apos;s build something.
                </h2>
                <p className="mt-4 text-pretty text-base leading-7 text-[var(--text-soft)] sm:text-lg sm:leading-8">
                  I&apos;m always exploring new technologies and creating projects that
                  help me grow as a developer.
                </p>
                <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href={links.email}>
                      <Mail aria-hidden="true" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <a href={links.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub aria-hidden="true" />
                      View GitHub
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
                    <a href={links.cv}>
                      <Download aria-hidden="true" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>

              <Card
                variant="subtle"
                className="hud-corners min-w-0 border-[rgba(255,77,46,0.18)] bg-black/20 p-4 sm:p-5"
              >
                <div className="space-y-4 font-mono text-sm">
                  <div className="grid min-w-0 gap-1 border-b border-white/10 pb-3 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-[var(--text-muted)]">channel</span>
                    <span className="break-words text-cyan-100">mailto / github</span>
                  </div>
                  <div className="grid min-w-0 gap-1 border-b border-white/10 pb-3 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-[var(--text-muted)]">github</span>
                    <span className="break-words text-white">Jandroel</span>
                  </div>
                  <div className="grid min-w-0 gap-1 border-b border-white/10 pb-3 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-[var(--text-muted)]">linkedin</span>
                    <span className="break-words text-white">placeholder</span>
                  </div>
                  <div className="grid min-w-0 gap-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-[var(--text-muted)]">status</span>
                    <span className="break-words text-green-200">learning.building</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
