import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "min-w-0 max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Badge variant="pixel">{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2
          id={id}
          className="text-balance text-[clamp(2rem,9vw,3rem)] font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
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
