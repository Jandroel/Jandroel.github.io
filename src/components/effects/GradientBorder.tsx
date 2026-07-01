import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function GradientBorder({
  children,
  className,
  innerClassName,
}: GradientBorderProps) {
  return (
    <div className={cn("gradient-border rounded-lg p-px", className)}>
      <div className={cn("rounded-lg bg-[var(--surface)]", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
