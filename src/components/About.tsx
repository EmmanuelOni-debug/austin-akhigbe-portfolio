import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container-page grid md:grid-cols-12 gap-10 md:gap-8">
        <div className="md:col-span-4">
          <SectionHeading eyebrow="About" title="Focused on the data." />
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6">
          {siteConfig.aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-balance">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
