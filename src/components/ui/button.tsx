import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-cream shadow-[var(--shadow-button)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-button-hover)] active:translate-y-0 active:shadow-[var(--shadow-button)]",
        secondary:
          "border border-navy/25 bg-transparent text-navy hover:-translate-y-0.5 hover:border-navy/50 hover:bg-navy/[0.03]",
        accent:
          "bg-coral text-cream shadow-[0_4px_0_#d94a4a,0_8px_24px_rgb(234_92_92_/_25%)] hover:-translate-y-0.5 hover:bg-coral-dark active:translate-y-0",
        ghost: "bg-transparent text-navy hover:bg-navy/[0.04]",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-9 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
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
