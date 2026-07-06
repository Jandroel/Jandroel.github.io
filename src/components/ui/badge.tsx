import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex max-w-full items-center gap-1.5 rounded-md border px-2.5 py-1 text-center text-xs font-medium leading-tight",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/[0.04] text-slate-200",
        tech: "border-[rgba(101,199,189,0.26)] bg-[rgba(101,199,189,0.1)] font-mono text-cyan-100",
        status:
          "border-[rgba(242,184,75,0.28)] bg-[rgba(242,184,75,0.1)] font-mono text-[#ffe1a3]",
        pixel:
          "border-[rgba(255,77,46,0.3)] bg-[rgba(255,77,46,0.1)] jp-kicker text-[0.68rem] text-[#ffb7a8]",
        gradient:
          "border-transparent bg-[linear-gradient(135deg,rgba(255,77,46,.24),rgba(242,184,75,.16),rgba(101,199,189,.18))] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
