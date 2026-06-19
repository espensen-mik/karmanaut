import { cn } from "@/lib/utils/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-cream-dark/60 bg-cream-light py-20 lg:py-28",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-coral">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-5xl leading-none text-navy sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
