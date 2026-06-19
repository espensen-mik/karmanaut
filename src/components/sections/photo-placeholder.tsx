import { cn } from "@/lib/utils/cn";

type PhotoPlaceholderProps = {
  label?: string;
  className?: string;
  variant?: "square" | "video" | "portrait" | "editorial" | "editorial-wide";
};

const variantClasses = {
  square: "aspect-square min-h-[20rem]",
  video: "aspect-[4/3] min-h-[18rem]",
  portrait: "aspect-[3/4] min-h-[24rem]",
  editorial: "aspect-[5/6] min-h-[28rem] lg:min-h-[32rem]",
  "editorial-wide": "aspect-[16/10] min-h-[20rem] lg:min-h-[28rem]",
};

export function PhotoPlaceholder({
  label = "Future Photography",
  className,
  variant = "video",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden bg-gradient-to-br from-cream-dark/50 via-cream-dark/30 to-cream/20 p-8",
        variantClasses[variant],
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(234_92_92_/_6%),transparent_50%)]" />
      <span className="relative text-xs font-semibold uppercase tracking-[0.22em] text-navy/35">
        {label}
      </span>
    </div>
  );
}
