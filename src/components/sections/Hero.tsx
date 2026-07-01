"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Glow } from "@/components/effects/Glow";
import { GridBackground } from "@/components/effects/GridBackground";
import { Reveal } from "@/components/effects/Reveal";
import { TerminalCard } from "@/components/terminal/TerminalCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { links } from "@/data/links";
import { siteConfig } from "@/data/site";

const HeroScene = dynamic(() => import("@/components/effects/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[280px] w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] sm:h-[420px] lg:h-[500px]">
      <span className="font-mono text-sm text-cyan-100/70">render.loading</span>
    </div>
  ),
});

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-20 lg:pb-28"
    >
      <GridBackground />
      <Glow variant="hero" />
      <Container>
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div className="min-w-0 max-w-3xl">
            <Reveal className="min-w-0 space-y-7 sm:space-y-8">
              <div className="space-y-5">
                <Badge variant="gradient">Frontend + Backend + Databases</Badge>
                <div className="min-w-0 space-y-4">
                  <p className="font-mono text-sm text-cyan-100">
                    build.status: learning
                  </p>
                  <h1
                    id="hero-title"
                    className="max-w-full text-[clamp(2.45rem,11vw,4rem)] font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
                  >
                    Hi, I&apos;m Jandroel 👋
                  </h1>
                  <p className="max-w-full text-balance text-[clamp(1.55rem,7vw,2.35rem)] font-bold leading-tight text-white lg:text-4xl">
                    {siteConfig.headline}
                  </p>
                  <p className="max-w-2xl text-pretty text-base leading-7 text-[var(--text-soft)] sm:text-lg sm:leading-8">
                    {siteConfig.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
                  <span className="gradient-text">Frontend</span>
                  <span className="text-[var(--text-faint)]">+</span>
                  <span className="gradient-text">Backend</span>
                  <span className="text-[var(--text-faint)]">+</span>
                  <span className="gradient-text">Databases</span>
                </div>
              </div>

              <div className="grid max-w-full gap-3 sm:flex sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#projects">
                    View Projects
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                <Button asChild variant="ghost" size="sm" className="w-full sm:w-auto">
                  <a href={links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="w-full sm:w-auto">
                  <a href={links.linkedin}>
                    <FaLinkedin aria-hidden="true" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="w-full sm:w-auto">
                  <a href={links.email}>
                    <Mail aria-hidden="true" />
                    Email
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative min-w-0">
            <div className="absolute -inset-2 -z-10 rounded-lg border border-cyan-300/10 bg-white/[0.02] sm:-inset-4" />
            <HeroScene />
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mt-8 grid min-w-0 gap-4 lg:mt-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
          <TerminalCard />
          <div className="grid min-w-0 gap-4 sm:grid-cols-3">
            {[
              ["system.online", "Focused on full-stack foundations"],
              ["version", "portfolio.v1"],
              ["next.level", siteConfig.quote],
            ].map(([label, value]) => (
              <div
                key={label}
                className="min-w-0 rounded-lg border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="font-mono text-xs text-cyan-100">{label}</p>
                <p className="mt-2 text-pretty text-sm leading-6 text-[var(--text-muted)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
