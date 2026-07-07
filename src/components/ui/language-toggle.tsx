"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const options = ["en", "es"] as const satisfies readonly Locale[];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border border-white/10 bg-[#050507]/70 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.22)]",
        className,
      )}
      aria-label={t.language.toggleLabel}
      role="group"
    >
      {options.map((option) => {
        const isActive = locale === option;

        return (
          <a
            key={option}
            href={`?lang=${option}`}
            className={cn(
              "focus-ring relative inline-flex min-h-8 min-w-9 items-center justify-center rounded-md border px-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] transition duration-200",
              "before:absolute before:left-2 before:right-2 before:top-1 before:h-px before:rounded-full before:transition",
              isActive
                ? "translate-y-px border-[rgba(232,74,42,0.68)] bg-[linear-gradient(180deg,rgba(232,74,42,0.28),rgba(90,32,26,0.38))] text-[#fff8ef] shadow-[inset_0_1px_0_rgba(255,248,239,0.2),0_0_0_1px_rgba(232,74,42,0.16),0_0_18px_rgba(232,74,42,0.16)] before:bg-[#ffd3a1]"
                : "border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] text-[var(--text-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_0_rgba(255,255,255,0.035)] before:bg-white/[0.08] hover:-translate-y-px hover:border-white/20 hover:text-white",
            )}
            aria-current={isActive ? "true" : undefined}
            aria-label={option === "en" ? t.language.english : t.language.spanish}
            title={option === "en" ? t.language.english : t.language.spanish}
            onClick={(event) => {
              event.preventDefault();
              setLocale(option);
              const url = new URL(window.location.href);
              url.searchParams.set("lang", option);
              window.history.replaceState(null, "", url);
            }}
          >
            {option}
          </a>
        );
      })}
    </div>
  );
}
