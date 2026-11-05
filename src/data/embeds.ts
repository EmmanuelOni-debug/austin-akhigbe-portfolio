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

/**
 * "analysis": the content shown behind the "View Analysis" dropdown under
 * each embed — a fuller breakdown of what the report does, in the same
 * style as the write-ups used for the downloadable PBIX projects. Written
 * at a "what this report is built to do" level (overview, what it lets a
 * viewer explore, the metrics it's built around) rather than quoting exact
 * figures from inside the live report, since those aren't visible here.
 */
export type DashboardAnalysis = {
  overview: string;
  objective: string;
  features: string[];
  keyMetrics: string[];
};

export type InteractiveDashboard = {
  title: string;
  description: string;
  analysis: DashboardAnalysis;
  embedUrl: string;
};

export const interactiveDashboards: InteractiveDashboard[] = [
  {
    title: "Merchandise Sales Dashboard",
    description:
      "A live, filterable view of merchandise sales performance. Explore it directly in the browser.",
    analysis: {
      overview:
        "A merchandise sales performance report built to give a clear, filterable view of how products are selling across categories, regions, and time. It brings headline sales figures together with product-level and regional breakdowns into a single interactive report.",
      objective:
        "To replace static sales reporting with one interactive view that lets a viewer filter by date, product, and region, and immediately see which lines and periods are performing well and which need attention.",
      features: [
        "Total sales revenue and units sold summary",
        "Sales trend over time by period",
        "Performance broken down by product and category",
        "Performance broken down by region or store",
        "Top and bottom-performing products",
        "Interactive filtering by date range, product, and region",
      ],
      keyMetrics: [
        "Total Sales",
        "Units Sold",
        "Average Order Value",
        "Sales by Category",
        "Sales by Region",
      ],
    },
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMzRiZTcwNDYtZGJkMS00MTc2LWI0OGYtMzdmMzhlM2RkYWNiIiwidCI6ImI4YTczMWUzLTE2NjAtNDNiZS1hNzY3LTdiNGQ5NzBhODM0MCJ9",
  },
  {
    title: "Email Campaign Dashboard",
    description:
      "A live, filterable view of email campaign performance. Explore it directly in the browser.",
    analysis: {
      overview:
        "An email marketing performance report built to give a clear view of how campaigns are landing with an audience. It brings delivery, open, and click metrics together with campaign-by-campaign comparisons into a single interactive report.",
      objective:
        "To support marketing decisions by surfacing which campaigns are performing well and which are underperforming, filterable by campaign and date range so a team can act on what's working.",
      features: [
        "Delivery rate, open rate, and click-through rate summary",
        "Engagement trend over time across sends",
        "Campaign-by-campaign performance comparison",
        "Audience or segment-level breakdown",
        "Interactive filtering by campaign and date range",
      ],
      keyMetrics: [
        "Open Rate",
        "Click-Through Rate",
        "Delivery Rate",
        "Emails Sent",
        "Campaign Performance",
      ],
    },
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNGVlYjUzNGUtOGQyYS00NGFhLWExOGItMjU3NGExNDkyZDUwIiwidCI6ImI4YTczMWUzLTE2NjAtNDNiZS1hNzY3LTdiNGQ5NzBhODM0MCJ9",
  },
  {
    title: "UK Sales and Margin Dashboard",
    description:
      "A live, multi-page finance report on sales, margin, budget and forecast. Illustrative data, explore it directly in the browser.",
    analysis: {
      overview:
        "A multi-page finance report for a UK seed business, covering sales, margin, budget, forecast and customers from July 2020 to September 2026. It lets a finance team see sales and margin performance against plan in one place, and answers five questions: where are we against budget and last year, what drove the difference, which products and customers make the money, where do we sell and deliver, and what does the rest of the year look like.",
      objective:
        "To replace scattered finance spreadsheets with one governed model that explains the story behind the numbers. Every page ends with an insight box that turns the charts into plain-English takeaways, so a reader gets the answer without having to interpret the visuals.",
      features: [
        "Executive Overview: net sales, variance to budget and last year, gross margin and rolling 12 months, with a monthly view against budget and prior year",
        "Budget vs Actual: income statement and variances by business area, product range and month",
        "Price, Volume and Mix: splits each sales variance into price, tonnes sold and product shift",
        "Products and Margin: shows where profit comes from across product ranges",
        "Customers and Channels: top customers and channel economics",
        "Geography and Delivery: map view with freight and lead times",
        "Forecast and Seasonality: outlook, forecast accuracy and the seasonal sales pattern",
        "Filters for fiscal year, fiscal month, business area and channel, plus a Data Dictionary page defining every measure",
      ],
      keyMetrics: [
        "Net Sales",
        "Net Sales vs Budget %",
        "Gross Margin %",
        "Sales vs Last Year",
        "Rolling 12 Months",
        "Price, Volume, Mix",
        "Forecast Accuracy",
      ],
    },
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZTg0OTc0MWUtOTNmNC00YjY0LWI4YjQtODUyNTcwMDU2Njg2IiwidCI6ImZhYzY2NGRkLWEzNWItNDMyNy04YjFiLTQ2MzIzMmY1MjBkMiJ9&pageName=f13e3e751b45003e3683",
  },
];
