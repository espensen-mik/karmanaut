import Image from "next/image";
import Link from "next/link";

import { InlineLink } from "@/components/ui/inline-link";
import { cn } from "@/lib/utils/cn";

type PillarFeatureProps = {
  title: string;
  description: string;
  icon: string;
  href?: string;
  className?: string;
};

export function PillarFeature({
  title,
  description,
  icon,
  href,
  className,
}: PillarFeatureProps) {
  const body = (
    <div className="grid grid-cols-[7rem_1fr] gap-x-5 sm:grid-cols-[8rem_1fr] sm:gap-x-8 lg:grid-cols-[9rem_1fr]">
      <Image
        src={icon}
        alt=""
        width={144}
        height={144}
        aria-hidden="true"
        className="size-28 object-contain sm:size-32 lg:size-36"
      />
      <div className="min-w-0 pt-1">
        <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-navy">
          {title}
        </h3>
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
