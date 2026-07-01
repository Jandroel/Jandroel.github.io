import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex min-h-11 max-w-full min-w-0 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-center text-sm font-semibold leading-snug transition duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border border-cyan-300/30 bg-[linear-gradient(135deg,var(--violet),var(--cyan),var(--magenta))] text-white shadow-[0_0_32px_rgba(6,182,212,0.22)] hover:translate-y-[-1px] hover:shadow-[0_0_42px_rgba(168,85,247,0.28)]",
        secondary:
          "border border-white/15 bg-white/[0.035] text-slate-100 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-white",
        ghost:
          "border border-transparent text-slate-300 hover:bg-white/[0.055] hover:text-white",
        terminal:
          "border border-green-400/25 bg-green-400/10 font-mono text-green-200 hover:border-green-300/45 hover:bg-green-400/15",
      },
      size: {
        sm: "min-h-9 px-3 py-2 text-xs",
        md: "min-h-11 px-5 py-2.5 text-sm",
        lg: "min-h-12 px-4 py-3 text-sm sm:px-6 sm:text-base",
        icon: "size-11 min-h-11 px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
