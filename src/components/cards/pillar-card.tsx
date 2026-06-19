import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HeartMarker } from "@/components/illustrations/heart-marker";
import { cn } from "@/lib/utils/cn";

type PillarFeatureProps = {
  index: number;
  title: string;
  description: string;
  href: string;
  align?: "left" | "right";
  className?: string;
};

export function PillarFeature({
  index,
  title,
  description,
  href,
  align = "left",
  className,
}: PillarFeatureProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block py-10 lg:py-14",
        align === "right" && "lg:text-right",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-start gap-8 lg:gap-16",
          align === "right" && "lg:flex-row-reverse",
        )}
      >
        <span className="font-display text-[clamp(4rem,8vw,7rem)] leading-none text-navy/[0.07]">
          0{index}
        </span>
        <div className={cn("flex-1", align === "right" && "lg:items-end")}>
          <div
            className={cn(
              "mb-4 flex items-center gap-3",
              align === "right" && "lg:justify-end",
            )}
          >
            {index === 1 ? <HeartMarker size={24} /> : null}
            <h3 className="font-display text-display-lg text-navy">{title}</h3>
          </div>
          <p className="max-w-xl text-lg leading-[1.75] text-navy/70">
            {description}
          </p>
          <span
            className={cn(
              "mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-coral transition-all group-hover:gap-3",
              align === "right" && "lg:float-right lg:clear-both",
            )}
          >
            Læs mere
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
      <div className="editorial-rule mt-10 lg:mt-12" />
    </Link>
  );
}
