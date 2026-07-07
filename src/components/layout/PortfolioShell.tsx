"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { GithubSection } from "@/components/sections/GithubSection";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";
import type { Locale } from "@/lib/i18n";

export function PortfolioShell({ initialLocale = "es" }: { initialLocale?: Locale }) {
  return (
    <LanguageProvider initialLocale={initialLocale}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Timeline />
        <GithubSection />
        <Process />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
