import { cn } from "@/lib/utils/cn";

type PhotoPlaceholderProps = {
  label?: string;
  className?: string;
  aspect?: "square" | "video" | "portrait";
};

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

export function PhotoPlaceholder({
  label = "Future Photography",
  className,
  aspect = "video",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[24px] border border-dashed border-navy/15 bg-cream-dark/40",
        aspectClasses[aspect],
        className,
      )}
    >
      <span className="px-4 text-center text-sm font-medium uppercase tracking-wider text-navy/40">
        {label}
      </span>
    </div>
  );
}
