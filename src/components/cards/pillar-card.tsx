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
      <div className="lg:grid lg:grid-cols-[auto_1fr] lg:gap-x-10">
        <Image
          src={icon}
          alt=""
          width={216}
          height={216}
          aria-hidden="true"
          className="hidden -ml-6 size-[13.5rem] object-contain lg:block"
        />
        <div className="min-w-0 pt-1">
          <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-navy">
            {title}
          </h3>
          <p className="mt-3 text-base leading-[1.7] text-navy/70 sm:mt-4 sm:text-lg sm:leading-[1.8]">
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
