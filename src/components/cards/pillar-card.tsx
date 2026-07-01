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
      <div className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-6 lg:gap-x-10">
        <Image
          src={icon}
          alt=""
          width={216}
          height={216}
          aria-hidden="true"
          className="size-[7.5rem] -ml-1 object-contain sm:-ml-3 sm:size-48 lg:-ml-6 lg:size-[13.5rem]"
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
