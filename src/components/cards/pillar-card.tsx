import Image from "next/image";

import { InlineLink } from "@/components/ui/inline-link";
import { cn } from "@/lib/utils/cn";

type PillarFeatureProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
  className?: string;
};

export function PillarFeature({
  title,
  description,
  icon,
  href,
  className,
}: PillarFeatureProps) {
  return (
    <article className={className}>
      <div className="grid grid-cols-[10.5rem_1fr] gap-x-5 sm:grid-cols-[12rem_1fr] sm:gap-x-8 lg:grid-cols-[13.5rem_1fr]">
        <Image
          src={icon}
          alt=""
          width={216}
          height={216}
          aria-hidden="true"
          className="size-[10.5rem] object-contain sm:size-48 lg:size-[13.5rem]"
        />
        <div className="min-w-0 pt-1">
          <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-navy">
            {title}
          </h3>
          <p className="mt-4 text-base leading-[1.8] text-navy/70 sm:text-lg">
            {description}
          </p>
          <div className={cn("mt-6")}>
            <InlineLink
              href={href}
              className="text-coral hover:text-coral-dark"
            >
              Læs mere
            </InlineLink>
          </div>
        </div>
      </div>
    </article>
  );
}
