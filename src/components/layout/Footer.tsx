import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container } from "@/components/ui/container";
import { links } from "@/data/links";
import { siteConfig } from "@/data/site";
import { navLinks } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/10 py-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.35),rgba(236,72,153,0.25),transparent)]"
      />
      <Container className="flex min-w-0 flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <a
            href="#hero"
            className="focus-ring inline-flex rounded-md font-bold text-white"
          >
            {siteConfig.name}
          </a>
          <p className="mt-2 max-w-xl text-pretty text-sm leading-6 text-[var(--text-muted)]">
            Built with Next.js, TypeScript, Tailwind CSS and Motion.
          </p>
          <p className="mt-2 font-mono text-xs text-[var(--text-faint)]">
            (c) {year} Jandroel. All rights reserved.
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-4 md:items-end">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring rounded-md text-sm text-[var(--text-muted)] transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-md p-2 text-[var(--text-muted)] transition hover:bg-white/[0.05] hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub className="size-4" aria-hidden="true" />
            </a>
            <a
              href={links.linkedin}
              className="focus-ring rounded-md p-2 text-[var(--text-muted)] transition hover:bg-white/[0.05] hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-4" aria-hidden="true" />
            </a>
            <a
              href={links.email}
              className="focus-ring rounded-md p-2 text-[var(--text-muted)] transition hover:bg-white/[0.05] hover:text-white"
              aria-label="Email"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
