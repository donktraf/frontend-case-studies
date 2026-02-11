import rawCaseStudies from "../../content/case-studies/case-studies.json";
import type { CaseStudy } from "./types";

function assertCaseStudy(value: unknown): value is CaseStudy {
  if (typeof value !== "object" || value === null) return false;

  const v = value as Record<string, unknown>;
  return (
    typeof v.slug === "string" &&
    typeof v.title === "string" &&
    typeof v.summary === "string" &&
    Array.isArray(v.tags) &&
    typeof v.publishedAt === "string" &&
    typeof v.content === "string"
  );
}

function load(): CaseStudy[] {
  if (!Array.isArray(rawCaseStudies)) return [];
  const parsed = rawCaseStudies.filter(assertCaseStudy);

  // Sort newest first (string YYYY-MM-DD sorts lexicographically)
  parsed.sort((a, b) => {return (a.publishedAt < b.publishedAt ? 1 : -1)});
  return parsed;
}

export function getAllCaseStudies(): CaseStudy[] {
  return load();
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return load().find((cs) => {return cs.slug === slug});
}
