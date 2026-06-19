import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const chipVariants = cva(
  "inline-flex h-8 items-center rounded-full px-4 text-sm font-medium transition-all duration-200 hover:scale-105",
  {
    variants: {
      variant: {
        navy: "bg-navy text-cream",
        coral: "bg-coral text-cream",
        outline: "border border-navy/25 bg-transparent text-navy hover:bg-navy/5",
      },
    },
    defaultVariants: {
      variant: "navy",
    },
  },
);

type ChipProps = VariantProps<typeof chipVariants> & {
  className?: string;
  children: React.ReactNode;
  href?: string;
};

export function Chip({ variant, className, children, href }: ChipProps) {
  const classes = cn(chipVariants({ variant, className }));

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}

export { chipVariants };
