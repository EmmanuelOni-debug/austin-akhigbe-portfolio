/**
 * ============================================================================
 * EXPERIENCE
 * ============================================================================
 * This powers the "Experience" section — the grid of company cards, the
 * filter pills above them, and the animated logo strip underneath.
 *
 * Real content. Each company has a short card summary (shown up front) and
 * a set of achievement bullets (shown when "View more" is clicked) — both
 * condensed from the fuller write-up provided, not invented.
 *
 * industry: powers the filter pills. Reuse an existing value or add a new
 * one — new values automatically get their own pill.
 *
 * featured: true  -> shown as the larger "hero" card in the grid
 * logo / logoOnDark: as before — logo file path, and whether it already
 * has a dark background baked in.
 * ============================================================================
 */

export type Achievement = { title: string; text: string };

export type ExperienceItem = {
  company: string;
  industry: string;
  logo: string;
  logoOnDark?: boolean;
  summary: string;
  tags: string[];
  achievements: Achievement[];
  featured?: boolean;
};

export const experienceData: ExperienceItem[] = [
  {
    company: "Crown Prosecution Service",
    industry: "Public Sector",
    logo: "/logos/cps.png",
    summary:
      "Delivered enterprise-grade Power BI reporting for senior leaders across national public-sector operations, including a national inspection framework spanning 200+ CPS and HMCTS locations — cutting manual reporting effort by over 60%.",
    tags: ["Power BI", "DAX", "SharePoint"],
    achievements: [
      { title: "Enterprise BI delivery", text: "Automated Power BI data models replaced manual reporting, cutting effort by over 60% and improving data accuracy." },
      { title: "KPI & performance frameworks", text: "Built scorecards tracking commercial performance, efficiency, and compliance across multi-site estates." },
      { title: "National reporting framework", text: "Consolidated 200+ CPS and HMCTS locations into one centralised Power BI and SharePoint solution for real-time compliance visibility." },
      { title: "Advanced data modelling", text: "Built governed, multi-source data models with automated DAX, Power Query, and QA validation." },
      { title: "Stakeholder engagement", text: "Delivered executive reporting packs and worked directly with regional leaders and governance teams." },
    ],
    featured: true,
  },
  {
    company: "National Grid",
    industry: "Energy & Utilities",
    logo: "/logos/national-grid.png",
    summary:
      "Led a centralised reporting ecosystem across procurement, contracts, logistics, and material allocation for a multi-project infrastructure portfolio — giving leaders end-to-end visibility of demand, supplier performance, and delivery risk.",
    tags: ["Power BI", "SQL", "Power Query"],
    achievements: [
      { title: "Centralised data architecture", text: "Built scalable Power BI and SQL data models spanning procurement, contracts, logistics, and allocation." },
      { title: "Procurement & contract intelligence", text: "Automated KPIs and milestone tracking for payment schedules, delivery, and specification compliance." },
      { title: "Supply chain risk reporting", text: "Built exception dashboards flagging supplier delays, allocation conflicts, and delivery variance." },
      { title: "Multi-system data quality", text: "Validated data across Ariba, Coupa, and EPC contractor systems, cutting manual intervention." },
      { title: "Stakeholder collaboration", text: "Worked across Procurement, Finance, Logistics, and EPC partners to shape executive-ready reporting." },
    ],
  },
  {
    company: "Nuclear Waste Services",
    industry: "Energy & Utilities",
    logo: "/logos/nuclear-waste-services.png",
    logoOnDark: true,
    summary:
      "Built automated procurement and commercial BI environments integrating Azure SQL, SharePoint, Atamis, and Microsoft Fabric — giving commercial directors real-time visibility across multi-million-pound contract portfolios in a highly regulated nuclear environment.",
    tags: ["Power BI", "Microsoft Fabric", "Azure SQL"],
    achievements: [
      { title: "Procurement & commercial BI", text: "Automated reporting across Azure SQL, SharePoint, Atamis, and Microsoft Fabric for real-time procurement intelligence." },
      { title: "Baseline procurement tracking", text: "Built the organisation's master pipeline-tracking system, from creation through to contract award." },
      { title: "Contract portfolio analytics", text: "Modelled Gold/Silver/Bronze contract matrices against forecast vs. actual spend to flag cost-containment opportunities." },
      { title: "Workforce intelligence", text: "Built headcount models with fiscal calendar mapping and RAG-based risk scoring for workforce planning." },
      { title: "Data engineering & governance", text: "Co-designed automated ETL pipelines and governance controls with the data engineering team." },
    ],
  },
  {
    company: "OneAdvanced",
    industry: "Technology",
    logo: "/logos/oneadvanced.png",
    summary:
      "Built real-time sales performance and forecasting dashboards in Power BI and Microsoft Fabric, working with Data Engineering to establish a unified semantic modelling foundation across the business.",
    tags: ["Power BI", "Microsoft Fabric", "DAX"],
    achievements: [
      { title: "Sales & forecasting intelligence", text: "Real-time dashboards tracking pipeline health, forecast accuracy, and executive KPIs." },
      { title: "Fabric data engineering", text: "Co-designed Data Factory pipelines and Lakehouse architecture across SQL Server, SAP, and Salesforce." },
      { title: "Reusable semantic modelling", text: "Built shared semantic models as a single source of truth across business units." },
      { title: "Performance & predictive insight", text: "Optimised DAX and modelling for performance, plus predictive pipeline analysis." },
      { title: "Data governance", text: "Validated Fabric pipelines and reconciled multi-system data for trusted reporting." },
    ],
  },
  {
    company: "EthosEnergy",
    industry: "Energy & Utilities",
    logo: "/logos/ethosenergy.png",
    summary:
      "Built Power BI and Tableau dashboards giving commercial leaders real-time visibility of sales performance and forecasting across global portfolios, integrating SQL, SAP, and Salesforce.",
    tags: ["Power BI", "Tableau", "SAP"],
    achievements: [
      { title: "Multi-platform sales analytics", text: "Power BI and Tableau dashboards tracking pipeline efficiency and KPI trends." },
      { title: "Integrated data architecture", text: "Combined SQL, SAP, and Salesforce into governed, high-quality reporting datasets." },
      { title: "Predictive forecasting", text: "Built forecasting tools and pipeline analysis to guide territory strategy." },
      { title: "Executive reporting", text: "Presented complex data clearly across Sales, Finance, and Operations teams." },
      { title: "Performance monitoring", text: "Tracked KPIs and delivered ad-hoc analysis to drive revenue growth." },
    ],
  },
  {
    company: "Marston Recovery",
    industry: "Public Sector",
    logo: "/logos/marston-recovery.png",
    summary:
      "Designed a centralised enforcement analytics platform in Power BI, giving end-to-end visibility of agent activity, fee remittance, and client performance across multiple enforcement portfolios.",
    tags: ["Power BI", "DAX", "SQL"],
    achievements: [
      { title: "Enforcement reporting architecture", text: "Centralised SQL, SharePoint, and Excel sources into one enforcement analytics solution." },
      { title: "Advanced data modelling", text: "Built star-schema models with DAX-driven business rules for dynamic, context-specific analysis." },
      { title: "Interactive dashboards", text: "Implemented drill-through navigation, dynamic tooltips, and URL actions for case-level exploration." },
      { title: "Performance & compliance insight", text: "Surfaced agent productivity, fee recovery, and arrangement adherence trends." },
      { title: "Scalable multi-client design", text: "Built reporting structures supporting multiple clients and case types without manual rework." },
    ],
  },
  {
    company: "West Midlands Fire Service",
    industry: "Public Sector",
    logo: "/logos/wmfs.png",
    summary:
      "Engineered a unified Power BI reporting ecosystem across Azure SQL, PostgreSQL, SQL Server, and Dynamics 365 — delivering real-time emergency response dashboards and training programmes that built lasting BI capability.",
    tags: ["Power BI", "Dynamics 365", "DAX"],
    achievements: [
      { title: "Multi-system data integration", text: "Unified Azure SQL, PostgreSQL, SQL Server, Dynamics 365, and API data into one governed ecosystem." },
      { title: "Dynamics 365 CRM analytics", text: "Built semantic models merging CRM records with corporate SQL data for incident analytics." },
      { title: "Emergency response dashboards", text: "Real-time dashboards tracking response KPIs, incident trends, and operational readiness." },
      { title: "Advanced DAX & paginated reporting", text: "Built high-performance DAX and paginated reports for statutory reporting." },
      { title: "Training & upskilling", text: "Delivered Power BI training and mentoring, embedding a data-driven culture." },
    ],
  },
  {
    company: "Colt DCS Datacenter",
    industry: "Technology",
    logo: "/logos/colt-dcs.jpg",
    summary:
      "Delivered automated Power BI sales reporting integrating Salesforce and Azure for a rapidly scaling global sales team, alongside executive training that improved self-service adoption.",
    tags: ["Power BI", "Salesforce", "Azure"],
    achievements: [
      { title: "Sales intelligence platform", text: "Automated Power BI reporting across Salesforce and Azure SQL for real-time pipeline visibility." },
      { title: "Azure data engineering", text: "Provisioned Data Factory, Blob Storage, and Azure SQL for scalable data integration." },
      { title: "Multi-audience dashboards", text: "Built tailored dashboards for C-suite, VPs, Marketing, and Sales Representatives." },
      { title: "Leadership training", text: "Trained senior management on self-service Power BI and mentored junior analysts." },
      { title: "Reporting automation", text: "Automated workflows to cut manual compilation time and speed up decision cycles." },
    ],
  },
];
