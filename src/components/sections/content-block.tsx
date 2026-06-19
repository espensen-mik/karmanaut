import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils/cn";

type ContentBlockProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ContentBlock({ title, children, className }: ContentBlockProps) {
  return (
    <Section spacing="compact" className={cn("bg-cream", className)}>
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-display-lg font-display text-navy">{title}</h2>
          <div className="mt-8 space-y-5 text-lg leading-[1.8] text-navy/70">
            {children}
          </div>
        </div>
      </Container>
    </Section>
  );
}
