import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { capabilitiesData } from "@/data/skills";

export default function Capabilities() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I build with."
          description="A focused toolkit for turning raw data into reporting people can act on."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {capabilitiesData.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 0.08}
              className="bg-background p-8 md:p-10"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-medium">{group.category}</h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground border-t border-border pt-3 first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
