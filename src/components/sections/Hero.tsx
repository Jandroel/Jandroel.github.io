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
    <div className="flex h-[240px] w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] sm:h-[420px] lg:h-[500px]">
      <span className="font-mono text-sm text-cyan-100/70">render.loading</span>
    </div>
  ),
});

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="shoji-screen relative overflow-hidden pb-14 pt-10 sm:pb-24 sm:pt-20 lg:pb-28"
    >
      <GridBackground />
      <Glow variant="hero" />
      <Container>
        <div className="grid min-w-0 items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div className="relative min-w-0 max-w-3xl">
            <div
              aria-hidden="true"
              className="jp-vertical absolute -left-6 top-1 hidden text-xs tracking-[0.32em] text-[var(--text-faint)] lg:block"
            >
              創造・学習・開発
            </div>
            <Reveal className="min-w-0 space-y-7 sm:space-y-8">
              <div className="space-y-5">
                <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
                  <Badge variant="gradient">Frontend + Backend + Databases</Badge>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#ffb7a8] sm:text-xs">
                    current focus
                  </span>
                </div>
                <div className="min-w-0 space-y-4">
                  <h1
                    id="hero-title"
                    className="max-w-full text-[clamp(2.9rem,17vw,5.2rem)] font-black leading-[0.92] text-[var(--paper)] sm:text-6xl lg:text-8xl"
                  >
                    Jandroel
                  </h1>
                  <p className="max-w-full text-balance text-[clamp(1.25rem,6vw,2rem)] font-bold leading-tight text-white lg:text-4xl">
                    {siteConfig.headline}
                  </p>
                  <div className="vn-dialogue max-w-2xl rounded-lg p-4 sm:p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="jp-kicker text-xs text-[#ffb7a8]">
                        Personal note
                      </span>
                      <span
                        className="hanko-mark min-h-8 min-w-8 text-xs"
                        aria-hidden="true"
                      >
                        J
                      </span>
                    </div>
                    <p className="text-pretty text-base leading-7 text-[var(--text-soft)] sm:text-lg sm:leading-8">
                      {siteConfig.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[0.82rem] sm:text-sm">
                  <span className="gradient-text">Frontend</span>
                  <span className="text-[var(--text-faint)]">+</span>
                  <span className="gradient-text">Backend</span>
                  <span className="text-[var(--text-faint)]">+</span>
                  <span className="gradient-text">Databases</span>
                  <span className="text-[var(--text-faint)]">/</span>
                  <span className="text-[#ffb7a8]">learning path</span>
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
            <div className="absolute -inset-2 -z-10 rounded-lg border border-[rgba(255,77,46,0.16)] bg-white/[0.02] sm:-inset-4" />
            <HeroScene />
          </Reveal>
        </div>

        <Reveal
          delay={0.16}
          className="mt-8 grid min-w-0 gap-4 lg:mt-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]"
        >
          <TerminalCard />
          <div className="grid min-w-0 gap-4 sm:grid-cols-3">
            {[
              ["current.arc", "Software Engineering Student"],
              ["main.focus", "Interfaces, APIs, and data"],
              ["motto", siteConfig.quote],
            ].map(([label, value]) => (
              <div
                key={label}
                className="washi-surface min-w-0 rounded-lg border border-white/10 p-4"
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
