import SectionHeading from "./SectionHeading";
import PowerBIEmbed from "./PowerBIEmbed";
import Reveal from "./Reveal";
import { interactiveDashboards } from "@/data/embeds";

export default function InteractiveDashboards() {
  if (interactiveDashboards.length === 0) return null;

  return (
    <section
      id="interactive-dashboards"
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Interactive Power BI Dashboards"
          title="Explore the reports live."
          description="Full working reports, embedded directly. Filter, drill in, and interact with the real thing."
        />

        <Reveal delay={0.08} className="mt-10 max-w-2xl border-l-2 border-accent pl-5">
          <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
            Story on Dashboards
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Every dashboard here is designed to tell a story, transforming
            raw data into clear trends, meaningful insights, and actionable
            business decisions, not just charts on a screen.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {interactiveDashboards.map((dashboard, i) => (
            <PowerBIEmbed key={dashboard.title} dashboard={dashboard} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
