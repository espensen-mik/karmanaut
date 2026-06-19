import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type Surface = "light" | "dark";

const primarySurfaceClasses: Record<Surface, string> = {
  light: cn(
    "bg-navy text-cream",
    "shadow-[var(--shadow-button-primary)]",
    "hover:shadow-[var(--shadow-button-primary-hover)]",
    "active:shadow-[var(--shadow-button-primary-active)]",
  ),
  dark: cn(
    "bg-cream text-navy",
    "shadow-[var(--shadow-button-primary-dark-surface)]",
    "hover:shadow-[var(--shadow-button-primary-dark-surface-hover)]",
    "active:shadow-[var(--shadow-button-primary-dark-surface-active)]",
  ),
};

const secondarySurfaceClasses: Record<Surface, string> = {
  light: cn("border-navy text-navy", "hover:bg-navy hover:text-cream"),
  dark: cn("border-cream text-cream", "hover:bg-cream hover:text-navy"),
};

const tertiarySurfaceClasses: Record<Surface, string> = {
  light: "border-navy text-navy hover:bg-navy hover:text-cream",
  dark: "border-cream text-cream hover:bg-cream hover:text-navy",
};

const sharedInteractionClasses = cn(
  "inline-flex items-center justify-center",
  "font-semibold transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  "disabled:pointer-events-none disabled:opacity-50",
);

type PrimaryButtonProps = {
  href?: string;
  surface?: Surface;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function PrimaryButton({
  href,
  surface = "light",
  className,
  children,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  const classes = cn(
    "group h-14 rounded-full px-8",
    sharedInteractionClasses,
    primarySurfaceClasses[surface],
    "hover:-translate-y-0.5 active:translate-y-px",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="ml-4 size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}

type SecondaryButtonProps = {
  href?: string;
  surface?: Surface;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function SecondaryButton({
  href,
  surface = "light",
  className,
  children,
  type = "button",
  ...props
}: SecondaryButtonProps) {
  const classes = cn(
    "group h-14 rounded-full border-2 bg-transparent px-8",
    sharedInteractionClasses,
    secondarySurfaceClasses[surface],
    "hover:-translate-y-0.5 active:translate-y-px",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="ml-0 size-5 max-w-0 shrink-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-4 group-hover:max-w-5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}

type TertiaryButtonProps = {
  href: string;
  surface?: Surface;
  className?: string;
  label: string;
};

export function TertiaryButton({
  href,
  surface = "light",
  className,
  label,
}: TertiaryButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group inline-flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-transparent transition-all duration-200",
        "hover:-translate-y-0.5 active:translate-y-px",
        tertiarySurfaceClasses[surface],
        className,
      )}
    >
      <ArrowRight
        className="size-5 transition-transform duration-200 group-hover:rotate-45"
        aria-hidden="true"
      />
    </Link>
  );
}
