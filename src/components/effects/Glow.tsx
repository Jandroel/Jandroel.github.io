import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  variant?: "hero" | "section" | "edge";
}

export function Glow({ className, variant = "section" }: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 blur-3xl",
        variant === "hero" &&
          "inset-x-0 top-0 h-80 bg-[linear-gradient(90deg,rgba(139,92,246,0.24),rgba(6,182,212,0.18),rgba(236,72,153,0.16))] opacity-70",
        variant === "section" &&
          "left-1/2 top-12 h-56 w-[76%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(6,182,212,0.12),rgba(139,92,246,0.16),rgba(236,72,153,0.10))] opacity-45",
        variant === "edge" &&
          "inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.15))] opacity-55",
        className,
      )}
    />
  );
}
