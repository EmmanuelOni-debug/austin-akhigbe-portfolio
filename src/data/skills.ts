/**
 * ============================================================================
 * SKILLS & CAPABILITIES
 * ============================================================================
 * These two lists power the "Capabilities" section (near the top of the
 * homepage) and the "Skills" section (near the bottom).
 *
 * To add a skill, copy a line inside the "items" array and edit the text.
 * These are shown as clean text tags — no percentage bars or skill levels,
 * since none have been confirmed.
 * ============================================================================
 */

export type SkillGroup = {
  category: string;
  items: string[];
};

export const capabilitiesData: SkillGroup[] = [
  {
    category: "Power BI",
    items: [
      "Dashboard Development",
      "Report Development",
      "Data Visualisation",
      "Interactive Reporting",
      "Power BI Service",
    ],
  },
  {
    category: "Data",
    items: [
      "Data Modelling",
      "Data Transformation",
      "Data Cleaning",
      "Data Analysis",
    ],
  },
  {
    category: "Microsoft / BI",
    items: ["DAX", "Power Query", "Excel", "SQL", "Microsoft SQL Server"],
  },
  {
    category: "CRM",
    items: [
      "CRM",
      "Salesforce",
      "Atamis",
      "MS Dynamics 365",
      "SalesLoft",
      "Sugar CRM",
    ],
  },
];

export const skillsData: string[] = [
  "Power BI",
  "Azure Databricks",
  "Microsoft Fabric",
  "Azure Synapse Analytics",
  "Snowflake",
  "Salesforce",
  "Atamis",
  "Dynamics 365",
  "Sugar CRM",
  "Siebel CRM",
  "DAX",
  "Power Query",
  "Advanced Excel",
  "Power Pivot",
  "M Code",
  "Python",
  "SQL",
  "Data Modelling",
  "Data Visualisation",
  "Business Intelligence",
  "Reporting",
];

/**
 * ============================================================================
 * PROCESS
 * ============================================================================
 * The step-by-step "how Austin approaches BI work" section. This is a
 * general methodology, not a claim about exact working procedures.
 * ============================================================================
 */
export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processData: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business question and reporting requirements.",
  },
  {
    number: "02",
    title: "Prepare",
    description: "Transform, clean and structure the data.",
  },
  {
    number: "03",
    title: "Model",
    description: "Build an appropriate data model.",
  },
  {
    number: "04",
    title: "Analyse",
    description: "Develop calculations and analytical logic.",
  },
  {
    number: "05",
    title: "Visualise",
    description: "Create clear, interactive Power BI reports.",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Present insights through usable reporting.",
  },
];
