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
          <h2 className="font-display text-4xl text-navy">{title}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy/75">
            {children}
          </div>
        </div>
      </Container>
    </Section>
  );
}
