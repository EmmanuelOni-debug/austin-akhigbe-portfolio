import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillsData } from "@/data/skills";

export default function SkillTags() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeading eyebrow="Skills" title="Technical fluency." />

        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
          {skillsData.map((skill) => (
            <span
              key={skill}
              className="text-sm md:text-base border border-border rounded-full px-5 py-2.5 text-foreground/90 transition-colors hover:border-accent hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
