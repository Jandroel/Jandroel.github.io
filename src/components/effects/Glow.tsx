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
          "inset-x-0 top-0 h-80 bg-[linear-gradient(90deg,rgba(36,52,79,0.28),rgba(104,184,173,0.15),rgba(232,74,42,0.12))] opacity-65",
        variant === "section" &&
          "left-1/2 top-12 h-56 w-[76%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(104,184,173,0.1),rgba(36,52,79,0.16),rgba(217,121,145,0.07))] opacity-40",
        variant === "edge" &&
          "inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(104,184,173,0.13))] opacity-50",
        className,
      )}
    />
  );
}
