import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  mark?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  mark,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative min-w-0 max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {mark ? (
        <span
          aria-hidden="true"
          className={cn(
            "kanji-watermark pointer-events-none absolute -top-8 text-7xl font-black text-[rgba(255,77,46,0.075)] sm:text-8xl",
            align === "center" ? "left-1/2 -translate-x-1/2" : "-right-2",
          )}
        >
          {mark}
        </span>
      ) : null}
      {eyebrow ? (
        <div
          className={cn(
            "flex min-w-0 items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <Badge variant="pixel">{eyebrow}</Badge>
          <span aria-hidden="true" className="brush-rule h-px w-16 max-w-[22vw]" />
        </div>
      ) : null}
      <div className="space-y-3">
        <h2
          id={id}
          className="text-balance text-[clamp(2rem,9vw,3rem)] font-extrabold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="text-pretty text-base leading-7 text-[var(--text-soft)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
