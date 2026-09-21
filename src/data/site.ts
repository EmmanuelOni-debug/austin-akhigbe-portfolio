/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 * This is the main file to edit if you want to change the text on the
 * website — name, job title, bio, contact details, and social links.
 *
 * You do NOT need to understand any code to edit this file. Just find the
 * line you want to change, and replace the text between the quote marks
 * ("like this") with your own text. Do not delete the quote marks or the
 * commas at the end of lines.
 * ============================================================================
 */

export const siteConfig = {
  /** The name shown in the navigation bar, hero section, and footer. */
  name: "Austin Akhigbe",

  /** The job title shown under the name. */
  title: "Power BI Developer",

  /** Short version of the title, used in the browser tab and search results. */
  tagline: "Austin Akhigbe — Power BI Developer",

  /**
   * The sentence shown under the big heading on the homepage.
   * Keep this factual — avoid claims about years of experience, clients,
   * or results unless you can back them up.
   */
  heroDescription:
    "Building clear, interactive Power BI dashboards that turn raw data into decisions — from data modelling and DAX to reporting people actually use.",

  /**
   * The longer paragraph(s) in the "About" section.
   * Each item in this array becomes its own paragraph.
   */
  aboutParagraphs: [
    "Austin works on the full lifecycle of a Power BI report — connecting to source data, shaping and cleaning it in Power Query, building a data model that holds up, writing DAX that answers the actual business question, and designing dashboards that are easy to read at a glance.",
    "The focus is on business intelligence work that supports real decisions: sales performance, operational monitoring, and reporting that replaces manual spreadsheets with something interactive and reliable.",
    "Every project starts with the same question — what does the person looking at this dashboard need to know, and how quickly can they find it?",
  ],

  /** Meta description used for SEO (shows up in Google search results). */
  metaDescription:
    "Portfolio of Austin Akhigbe, a Power BI Developer specialising in dashboard development, data modelling, DAX, and business intelligence reporting.",

  /**
   * The full web address of the site once it's live.
   * Update this after deployment — it's used for SEO tags (Open Graph).
   * Example: "https://austinakhigbe.com"
   */
  url: "https://austin-akhigbe-portfolio.vercel.app",

  /** Navigation links shown in the top menu. */
  navLinks: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#interactive-dashboards" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ],

  /** Terminal-style easter egg content (small detail, not a real terminal). */
  terminalLines: [
    "> whoami",
    "Austin Akhigbe — Power BI Developer",
    "> focus",
    "Dashboards, data modelling, DAX",
    "> mission",
    "Turning data into usable insight",
  ],
};

/**
 * ============================================================================
 * CONTACT INFORMATION
 * ============================================================================
 * Leave a field as an empty string "" if you don't have it yet — the
 * website will hide that button automatically instead of showing a broken
 * link. Fill it in whenever you're ready, no other changes needed.
 * ============================================================================
 */
export const contactData = {
  /** Paste Austin's email address here, e.g. "austin@example.com" */
  email: "",

  /** Paste Austin's LinkedIn profile URL here, e.g. "https://linkedin.com/in/..." */
  linkedin: "",

  /** Optional: GitHub profile URL. Leave blank if not applicable. */
  github: "",

  /** Heading shown above the contact section. */
  heading: "Have a data problem worth solving?",

  /** Supporting sentence under the heading. */
  subheading:
    "Reach out to talk through a dashboard, a reporting need, or a Power BI project.",
};
