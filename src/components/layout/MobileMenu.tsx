"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface MobileMenuProps {
  activeSection?: string;
}

export function MobileMenu({ activeSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="shoji-screen fixed right-4 top-4 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-lg border border-white/10 bg-[#0d0f14] p-5 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="flex items-center gap-3 text-lg font-bold text-white">
              <span className="hanko-mark text-sm" aria-hidden="true">
                J
              </span>
              <span>Jandroel</span>
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>
          <nav aria-label="Mobile navigation" className="mt-6">
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                const navKey = link.href.slice(1) as keyof typeof t.nav;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "focus-ring flex rounded-md px-3 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.055] hover:text-white",
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
          <LanguageToggle className="mt-5 w-full justify-center" />
          <Button asChild className="mt-6 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              {t.nav.contact}
            </a>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
