import type { CaseStudy, CaseStudyTag } from "./types";

export function isCaseStudyTag(value: string): value is CaseStudyTag {
  return ["react", "typescript", "testing", "architecture", "ux", "api"].includes(value);
}

export function filterCaseStudiesByTag(caseStudies: CaseStudy[], tag?: string): CaseStudy[] {
  if (!tag) return caseStudies;
  if (!isCaseStudyTag(tag)) return [];
  return caseStudies.filter((cs) => cs.tags.includes(tag));
}
