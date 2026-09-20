/**
 * ============================================================================
 * INTERACTIVE POWER BI DASHBOARDS
 * ============================================================================
 * These are separate from the downloadable PBIX projects above — this list
 * powers the "Interactive Power BI Dashboards" section, where reports are
 * embedded live in the page using Power BI's "Publish to web" share link.
 *
 * To add one: copy a block below and paste it into the array.
 * To remove one: delete its whole block.
 *
 * "embedUrl" must be a Power BI "Publish to web" link (the kind that looks
 * like https://app.powerbi.com/view?r=...). Note that this type of link is
 * public to anyone who has it — don't use it for a report containing data
 * that should stay private.
 * ============================================================================
 */

export type InteractiveDashboard = {
  title: string;
  description: string;
  embedUrl: string;
};

export const interactiveDashboards: InteractiveDashboard[] = [
  {
    title: "Merchandise Sales Dashboard",
    description:
      "A live, filterable view of merchandise sales performance — explore it directly in the browser.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMzRiZTcwNDYtZGJkMS00MTc2LWI0OGYtMzdmMzhlM2RkYWNiIiwidCI6ImI4YTczMWUzLTE2NjAtNDNiZS1hNzY3LTdiNGQ5NzBhODM0MCJ9",
  },
  {
    title: "Email Campaign Dashboard",
    description:
      "A live, filterable view of email campaign performance — explore it directly in the browser.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNGVlYjUzNGUtOGQyYS00NGFhLWExOGItMjU3NGExNDkyZDUwIiwidCI6ImI4YTczMWUzLTE2NjAtNDNiZS1hNzY3LTdiNGQ5NzBhODM0MCJ9",
  },
];
