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
            <div className="grid grid-cols-1 lg:grid-cols-[6rem_1fr] lg:gap-x-6">
              <h2 className="text-display-lg font-display text-navy lg:col-start-2">
                {title}
              </h2>
              <div className="hidden self-start lg:col-start-1 lg:row-start-2 lg:block">
                {leading}
              </div>
              <div className="mt-8 space-y-5 text-lg leading-[1.8] text-navy/70 lg:col-start-2 lg:row-start-2">
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
