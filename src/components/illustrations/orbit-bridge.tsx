import { cn } from "@/lib/utils/cn";

type OrbitBridgeProps = {
  className?: string;
};

export function OrbitBridge({ className }: OrbitBridgeProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-x-0 -bottom-px z-10", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1280 80"
        preserveAspectRatio="none"
        className="h-20 w-full text-navy/10"
        fill="none"
      >
        <path
          d="M0 40 C 200 80, 400 0, 640 40 S 1080 80, 1280 40"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="4 12"
        />
        <circle cx="640" cy="40" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
}
