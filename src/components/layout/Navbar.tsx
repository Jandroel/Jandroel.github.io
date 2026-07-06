"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/button";
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
            <span className="hanko-mark text-sm" aria-hidden="true">
              J
            </span>
            <span className="grid leading-none">
              <span className="font-bold text-white">{siteConfig.name}</span>
              <span className="jp-kicker mt-1 text-[0.62rem] text-[#ffb7a8]">
                build log
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.045] hover:text-white",
                        isActive && "bg-[rgba(255,77,46,0.1)] text-[#ffb7a8]",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
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
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
            <MobileMenu activeSection={activeSection} />
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
