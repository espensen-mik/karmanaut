import { cn } from "@/lib/utils/cn";

type PlanetBadgeProps = {
  className?: string;
  label?: string;
};

export function PlanetBadge({ className, label = "Karma" }: PlanetBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-navy/55",
        className,
      )}
    >
      <span className="relative flex size-3 items-center justify-center">
        <span className="absolute size-3 rounded-full border border-navy/20" />
        <span className="size-1.5 rounded-full bg-coral" />
      </span>
      {label}
    </span>
  );
}
