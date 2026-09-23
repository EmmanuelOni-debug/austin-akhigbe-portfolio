import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { processData } from "@/data/skills";

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title="A consistent approach to BI work."
          description="A general methodology: the shape most reporting projects follow, from question to finished dashboard."
        />

        <div className="mt-16 divide-y divide-border border-t border-b border-border">
          {processData.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-10 py-7">
                <span className="font-mono text-sm text-accent w-12 shrink-0">
                  {step.number}
                </span>
                <h3 className="text-xl md:text-2xl font-medium md:w-64 shrink-0 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-lg">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
