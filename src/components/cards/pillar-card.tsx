import Link from "next/link";

import { HeartMarker } from "@/components/illustrations/heart-marker";
import { InlineLink } from "@/components/ui/inline-link";
import { cn } from "@/lib/utils/cn";

type PillarFeatureProps = {
  index: number;
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function PillarFeature({
  index,
  title,
  description,
  href,
  className,
}: PillarFeatureProps) {
  const body = (
    <div className="grid grid-cols-[2.75rem_1fr] gap-x-5 sm:grid-cols-[3.25rem_1fr] sm:gap-x-8">
      <span
        aria-hidden="true"
        className="pt-1 font-display text-2xl leading-none text-coral sm:text-3xl"
      >
        0{index}
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          {index === 1 ? <HeartMarker size={22} /> : null}
          <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-navy">
            {title}
          </h3>
        </div>
        <p className="mt-4 text-base leading-[1.8] text-navy/70 sm:text-lg">
          {description}
        </p>
        {href ? (
          <div className="mt-6">
            <InlineLink asLabel>Læs mere</InlineLink>
          </div>
        ) : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group block", className)}>
        {body}
      </Link>
    );
  }

  return <article className={className}>{body}</article>;
}
