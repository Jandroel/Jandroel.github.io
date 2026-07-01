import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex max-w-full items-center gap-1.5 rounded-md border px-2.5 py-1 text-center text-xs font-medium leading-tight",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/[0.04] text-slate-200",
        tech: "border-cyan-300/20 bg-cyan-300/10 font-mono text-cyan-100",
        status: "border-violet-300/25 bg-violet-300/10 font-mono text-violet-100",
        pixel:
          "border-magenta-300/25 bg-magenta-300/10 font-pixel text-[0.7rem] uppercase text-magenta-100",
        gradient:
          "border-transparent bg-[linear-gradient(135deg,rgba(139,92,246,.25),rgba(6,182,212,.18),rgba(236,72,153,.22))] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
