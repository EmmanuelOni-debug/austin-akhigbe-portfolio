/**
 * ============================================================================
 * EXPERIENCE
 * ============================================================================
 * This powers the timeline in the "Experience" section.
 *
 * No real work history has been provided yet, so this currently contains
 * ONE clearly-marked placeholder entry rather than invented jobs. Replace
 * it with real roles — copy the object below to add more than one.
 *
 * isPlaceholder: true   -> shows a "details coming soon" style on the site
 * isPlaceholder: false  -> shows as a normal, real timeline entry
 * (or just delete the isPlaceholder line once you fill in real details)
 * ============================================================================
 */

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  isPlaceholder?: boolean;
};

export const experienceData: ExperienceItem[] = [
  {
    company: "[ADD COMPANY NAME]",
    role: "[ADD JOB TITLE]",
    period: "[ADD DATES]",
    description:
      "[Add a short description of your responsibilities and the kind of Power BI / reporting work done in this role.]",
    isPlaceholder: true,
  },
];
