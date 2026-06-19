import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type Surface = "light" | "dark";

const surfaceClasses: Record<Surface, string> = {
  light: "text-navy hover:text-navy",
  dark: "text-cream/90 hover:text-cream",
};

type InlineLinkProps = {
  href?: string;
  surface?: Surface;
  className?: string;
  children?: React.ReactNode;
  /** Use inside an existing link wrapper — renders a styled span */
  asLabel?: boolean;
};

export function InlineLink({
  href,
  surface = "light",
  className,
  children = "Læs mere",
  asLabel = false,
}: InlineLinkProps) {
  const classes = cn(
    "group/link inline-flex items-center gap-2 text-base font-medium transition-all duration-200",
    "hover:underline hover:underline-offset-4",
    surfaceClasses[surface],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
        aria-hidden="true"
      />
    </>
  );

  if (asLabel) {
    return (
      <span className={cn(classes, "group-hover:underline")}>
        <span>{children}</span>
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    );
  }

  if (!href) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
