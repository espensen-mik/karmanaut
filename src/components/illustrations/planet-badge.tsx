import { cn } from "@/lib/utils/cn";

type PlanetBadgeProps = {
  className?: string;
  label?: string;
};

export function PlanetBadge({ className, label = "Karma" }: PlanetBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-cream-dark bg-cream-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy/70 shadow-[var(--shadow-soft)]",
        className,
      )}
      aria-hidden="true"
    >
      <span className="size-2 rounded-full bg-coral" />
      {label}
    </div>
  );
}
