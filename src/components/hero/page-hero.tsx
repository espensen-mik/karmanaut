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
        "relative overflow-hidden bg-cream py-24 lg:py-36",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-20 top-16 size-64 rounded-full bg-coral/[0.04] blur-3xl" />
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        {eyebrow ? <p className="eyebrow mb-6">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-display-xl font-display text-navy">
          {title}
        </h1>
        {description ? (
          <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-navy/70 lg:text-xl">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
