"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/ui/brand-mark";
import { LanguageToggle } from "@/components/ui/language-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { links } from "@/data/links";
import { siteConfig } from "@/data/site";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const { t } = useLanguage();

  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((link) => link.href.slice(1))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.12, 0.28, 0.48] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <TooltipProvider delayDuration={160}>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07070A]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="focus-ring group inline-flex items-center gap-3 rounded-md"
            aria-label="Jandroel home"
          >
            <BrandMark className="transition-transform duration-200 group-hover:-translate-y-0.5" />
            <span className="grid leading-none">
              <span className="text-[0.95rem] font-bold text-white">
                {siteConfig.name}
              </span>
              <span className="mt-1 font-mono text-[0.56rem] font-semibold uppercase tracking-normal text-[var(--text-muted)]">
                {siteConfig.brandLine}
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                const navKey = link.href.slice(1) as keyof typeof t.nav;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.045] hover:text-white",
                        isActive && "bg-[rgba(232,74,42,0.095)] text-[#f0b19f]",
                      )}
                    >
                      {t.nav[navKey] ?? link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle className="hidden sm:inline-flex" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hidden sm:inline-flex"
                  aria-label="Open GitHub profile"
                >
                  <a href={links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#contact">{t.nav.contact}</a>
            </Button>
            <MobileMenu activeSection={activeSection} />
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
