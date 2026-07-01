"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  activeSection?: string;
}

export function MobileMenu({ activeSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

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
        <Dialog.Content className="fixed right-4 top-4 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-lg border border-white/10 bg-[#080A12] p-5 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="font-pixel text-lg text-white">
              Jandroel
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

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "focus-ring flex rounded-md px-3 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.055] hover:text-white",
                        isActive && "bg-cyan-300/10 text-cyan-100",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Button asChild className="mt-6 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Let&apos;s Connect
            </a>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
