export type CaseStudyTag =
  | "react"
  | "typescript"
  | "testing"
  | "architecture"
  | "ux"
  | "api";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: CaseStudyTag[];
  publishedAt: string; // ISO date string: YYYY-MM-DD
  content: string; // markdown-ish text for now
};