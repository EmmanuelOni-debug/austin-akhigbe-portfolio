import SectionHeading from "./SectionHeading";
import PowerBIEmbed from "./PowerBIEmbed";
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
          description="Full working reports, embedded directly — filter, drill in, and interact with the real thing."
        />

        <div className="mt-16 space-y-12">
          {interactiveDashboards.map((dashboard, i) => (
            <PowerBIEmbed key={dashboard.title} dashboard={dashboard} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
