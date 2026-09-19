/**
 * ============================================================================
 * PROJECTS
 * ============================================================================
 * Each object below is one project card on the website. To add a new
 * project, copy one of the objects (from the opening { to the closing },)
 * and paste it into the array, then edit the text.
 *
 * IMAGE FILES:
 * Put screenshot images in: /public/projects/
 * Then reference them here as: "/projects/your-file-name.png"
 *
 * PBIX DOWNLOAD FILE:
 * "downloadUrl" is the link used by the "Download PBIX" button.
 * It currently points to a file inside /public/downloads/ so the button
 * works immediately. See the note at the bottom of this file about where
 * to host this file long-term.
 *
 * POWER BI LIVE REPORT:
 * "powerBiUrl" is the link used by the "View Interactive Report" button.
 * Leave it as an empty string "" until you have a real Power BI
 * "Publish to web" or share link — the button will automatically show as
 * unavailable until then. Never paste a private/internal Power BI link here.
 * ============================================================================
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  overview: string;
  objective: string;
  features: string[];
  keyMetrics: string[];
  downloadUrl: string;
  downloadLabel: string;
  powerBiUrl: string;
};

export const projects: Project[] = [
  {
    slug: "sales-dashboard",
    title: "Sales Dashboard",
    category: "Power BI / Sales Analytics",
    shortDescription:
      "An interactive Power BI report tracking sales performance against target across products, regions, and salespeople, with monthly trend analysis.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modelling"],
    image: "/projects/sales-dashboard.png",
    imageAlt:
      "Sales Dashboard in Power BI showing total sales versus target by month, product, region, and salesperson",
    overview:
      "A sales performance dashboard built to give a clear, filterable view of how sales are tracking against target. It brings together monthly trends, product-level performance, regional totals, and individual salesperson results into a single interactive report.",
    objective:
      "To replace static sales reporting with a single interactive view that lets stakeholders filter by date, salesperson, region, and product, and immediately see performance against target.",
    features: [
      "Total sales versus total target, broken down by month",
      "Sales performance by product",
      "Sales performance by region",
      "Individual salesperson performance against target",
      "Monthly sales trend comparison",
      "Interactive filtering by date range, salesperson, region, and product",
      "Detailed summary table with per-row totals",
    ],
    keyMetrics: [
      "Total Sales",
      "Total Target",
      "Sales by Product",
      "Sales by Region",
      "Sales by Salesperson",
    ],
    downloadUrl: "/downloads/Sales-Dashboard.pbix",
    downloadLabel: "Download PBIX",
    powerBiUrl: "",
  },
  {
    slug: "electricity-meters-monitoring-dashboard",
    title: "Electricity Meters Monitoring Dashboard",
    category: "Power BI / Energy Analytics",
    shortDescription:
      "A monitoring dashboard for electrical meter health — tracking energy consumption, voltage stability, peak current, and power factor efficiency.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modelling"],
    image: "/projects/electricity-meters-dashboard.png",
    imageAlt:
      "Electrical Meters Health Monitoring Dashboard in Power BI showing energy consumption, voltage, peak current, and meter risk status",
    overview:
      "A monitoring dashboard built to track the health and performance of a fleet of electrical meters. It combines energy consumption trends, voltage stability, current load, and power factor efficiency with a view of which meters are at risk of failure or communication loss.",
    objective:
      "To give an operations-focused view of meter health across a network of meters — surfacing consumption trends, stability issues, and at-risk meters in one place, filterable by date, time, and zone.",
    features: [
      "Total energy consumption tracked over time",
      "Average voltage and peak current trend charts",
      "Average power factor as an efficiency indicator",
      "Meters flagged as likely to fail or lose communication",
      "Online versus offline meter status breakdown",
      "Detailed summary table by meter, including outage events and signal strength",
      "Interactive filtering by date, time, and zone",
    ],
    keyMetrics: [
      "Total Energy Consumption (kWh)",
      "Peak Current",
      "Average Voltage",
      "Average Power Factor",
      "Meters At Risk",
    ],
    downloadUrl: "/downloads/Electricity-Meters-Monitoring-Dashboard.pbix",
    downloadLabel: "Download PBIX",
    powerBiUrl: "",
  },
  {
    slug: "airline-network-planning-route-optimization",
    title: "Airline Network Planning & Route Optimization Report",
    category: "Power BI / Airline Network Analytics",
    shortDescription:
      "A network performance report for an airline route network, tracking revenue, profitability, load factor, and on-time performance by route.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modelling"],
    image: "/projects/Airline_Report.png",
    imageAlt:
      "Network Performance Overview dashboard in Power BI showing total revenue, profit, load factor, on-time percentage, revenue trend, average delay by route, and route profitability",
    overview:
      "A network planning and route optimization report built to give a clear view of how an airline's route network is performing financially and operationally. It combines revenue and profit trends with load factor, on-time performance, and route-level profitability in a single interactive report.",
    objective:
      "To support network planning decisions by surfacing which routes are profitable, which are underperforming, and how delays and load factor are affecting overall network performance — filterable by month.",
    features: [
      "Total revenue, profit, load factor, and on-time percentage summary",
      "Monthly total revenue trend",
      "Average delay by route",
      "Route performance ranked by profit",
      "Interactive filtering by month",
    ],
    keyMetrics: [
      "Total Revenue",
      "Profit",
      "Load Factor",
      "On-Time %",
      "Route Profitability",
    ],
    downloadUrl:
      "/downloads/Airline_Network_Planning_&_Route_Optimization_Report.pbix",
    downloadLabel: "Download PBIX",
    powerBiUrl: "",
  },
];

/**
 * NOTE ABOUT THE PBIX FILES (plain-English explanation):
 *
 * Right now, the two .pbix files are stored inside this website's own
 * project, in a folder called /public/downloads/. That means they will be
 * downloadable by anyone who visits the site and clicks the button — the
 * files aren't password-protected or private.
 *
 * That's fine as a starting point, but it's worth thinking about before
 * the site goes fully live:
 *   - If the dashboards contain your own sample/practice data, this is
 *     usually fine to leave as-is.
 *   - If either file contains real company data, client data, or anything
 *     confidential, it should NOT be hosted this way. Instead, consider
 *     removing the real data from the file (or rebuilding it with sample
 *     data) before it's downloadable by the public.
 *   - An alternative to public download is to host the .pbix file
 *     somewhere like OneDrive or Google Drive, set the sharing permission
 *     to "anyone with the link", and paste that link into "downloadUrl"
 *     above instead of the local file path.
 */
