import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex max-w-full items-center gap-1.5 rounded-md border px-2.5 py-1 text-center text-xs font-medium leading-tight",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/[0.04] text-slate-200",
        tech: "border-[rgba(104,184,173,0.24)] bg-[rgba(104,184,173,0.095)] font-mono text-cyan-100",
        status:
          "border-[rgba(216,168,79,0.26)] bg-[rgba(216,168,79,0.095)] font-mono text-[#ead09a]",
        pixel:
          "border-[rgba(232,74,42,0.28)] bg-[rgba(232,74,42,0.095)] jp-kicker text-[0.68rem] text-[#f0b19f]",
        gradient:
          "border-transparent bg-[linear-gradient(135deg,rgba(232,74,42,.2),rgba(216,168,79,.14),rgba(104,184,173,.16))] text-white",
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
