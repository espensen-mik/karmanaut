import Image from "next/image";

import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

type HeartMarkerProps = {
  className?: string;
  size?: number;
};

export function HeartMarker({ className, size = 28 }: HeartMarkerProps) {
  return (
    <Image
      src={siteConfig.heart}
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
    />
  );
}
