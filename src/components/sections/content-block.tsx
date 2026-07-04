import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils/cn";

type ContentBlockProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  leading?: React.ReactNode;
};

export function ContentBlock({
  title,
  children,
  className,
  leading,
}: ContentBlockProps) {
  return (
    <Section spacing="compact" className={cn("bg-cream", className)}>
      <Container>
        <div className="max-w-3xl">
          {leading ? (
            <div className="grid grid-cols-[5rem_1fr] gap-x-6 sm:grid-cols-[6rem_1fr]">
              <h2 className="col-start-2 text-display-lg font-display text-navy">
                {title}
              </h2>
              <div className="col-start-1 row-start-2 self-start">{leading}</div>
              <div className="col-start-2 row-start-2 mt-8 space-y-5 text-lg leading-[1.8] text-navy/70">
                {children}
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-display-lg font-display text-navy">{title}</h2>
              <div className="mt-8 space-y-5 text-lg leading-[1.8] text-navy/70">
                {children}
              </div>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
