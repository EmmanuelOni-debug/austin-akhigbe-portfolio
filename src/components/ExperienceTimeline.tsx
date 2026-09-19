import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experienceData } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Where the work happens." />

        <div className="mt-16 relative border-l border-border pl-8 md:pl-12 space-y-14 max-w-3xl">
          {experienceData.map((exp, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                  exp.isPlaceholder
                    ? "bg-border border border-muted-foreground"
                    : "bg-accent"
                }`}
              />
              <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
                {exp.period}
              </p>
              <h3
                className={`mt-2 text-xl md:text-2xl font-medium ${
                  exp.isPlaceholder ? "text-muted-foreground italic" : ""
                }`}
              >
                {exp.role}{" "}
                <span className="text-muted-foreground font-normal not-italic">
                  · {exp.company}
                </span>
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xl">
                {exp.description}
              </p>
              {exp.isPlaceholder ? (
                <p className="mt-3 font-mono text-[11px] tracking-wide text-accent">
                  Details coming soon
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
