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
          "border border-[rgba(255,77,46,0.4)] bg-[linear-gradient(135deg,var(--vermilion),var(--gold))] text-[#170a08] shadow-[0_0_32px_rgba(255,77,46,0.18)] hover:translate-y-[-1px] hover:shadow-[0_0_42px_rgba(242,184,75,0.22)]",
        secondary:
          "border border-white/15 bg-white/[0.035] text-[var(--paper)] hover:border-[rgba(242,184,75,0.4)] hover:bg-[rgba(242,184,75,0.1)] hover:text-white",
        ghost:
          "border border-transparent text-[var(--text-soft)] hover:bg-white/[0.055] hover:text-white",
        terminal:
          "border border-[rgba(159,178,122,0.3)] bg-[rgba(159,178,122,0.1)] font-mono text-[#dbe7bd] hover:border-[rgba(159,178,122,0.5)] hover:bg-[rgba(159,178,122,0.15)]",
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
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
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
