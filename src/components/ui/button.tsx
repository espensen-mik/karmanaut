import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type Surface = "light" | "dark";

const baseButtonClasses = cn(
  "inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-button)] px-5",
  "text-sm font-semibold transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  "disabled:pointer-events-none disabled:opacity-50",
  "hover:-translate-y-px active:translate-y-px",
);

const primarySurfaceClasses: Record<Surface, string> = {
  light: cn(
    "bg-navy text-cream",
    "shadow-[var(--shadow-button-primary)]",
    "hover:shadow-[var(--shadow-button-primary-hover)]",
    "active:shadow-[var(--shadow-button-primary-active)]",
  ),
  dark: cn(
    "bg-cream text-navy",
    "shadow-[var(--shadow-button-primary)]",
    "hover:shadow-[var(--shadow-button-primary-hover)]",
    "active:shadow-[var(--shadow-button-primary-active)]",
  ),
};

const secondarySurfaceClasses: Record<Surface, string> = {
  light: cn(
    "border border-navy bg-transparent text-navy",
    "hover:bg-navy hover:text-cream",
  ),
  dark: cn(
    "border border-cream/70 bg-transparent text-cream",
    "hover:bg-cream hover:text-navy",
  ),
};

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
    "group",
    baseButtonClasses,
    primarySurfaceClasses[surface],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        strokeWidth={2}
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
  const classes = cn(baseButtonClasses, secondarySurfaceClasses[surface], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

type AccentButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function AccentButton({
  href,
  className,
  children,
  type = "button",
  ...props
}: AccentButtonProps) {
  const classes = cn(
    baseButtonClasses,
    "bg-coral text-cream",
    "shadow-[var(--shadow-button-accent)]",
    "hover:bg-coral-dark hover:shadow-[var(--shadow-button-accent-hover)]",
    "active:shadow-[var(--shadow-button-accent-active)]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
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
  const surfaceClasses =
    surface === "dark"
      ? "border-cream/70 text-cream hover:bg-cream hover:text-navy"
      : "border-navy text-navy hover:bg-navy hover:text-cream";

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-button)] border bg-transparent transition-all duration-200",
        "hover:-translate-y-px active:translate-y-px",
        surfaceClasses,
        className,
      )}
    >
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        strokeWidth={2}
        aria-hidden="true"
      />
    </Link>
  );
}
