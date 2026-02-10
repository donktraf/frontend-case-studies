import { useSearchParams } from "react-router-dom";
import { EmptyState } from "../components/ui/EmptyState";
import { CaseStudyCard } from "../features/case-studies/components/CaseStudyCard";
import { TagFilter } from "../features/case-studies/components/TagFilter";
import { getAllCaseStudies } from "../features/case-studies/repository";
import { filterCaseStudiesByTag } from "../features/case-studies/utils";

export function CaseStudiesPage() {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag") ?? undefined;

  const all = getAllCaseStudies();
  const filtered = filterCaseStudiesByTag(all, tag);

  return (
    <section>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Case Studies</h1>
        <p style={{ color: "#374151", margin: 0 }}>
          Focus on architecture, code quality, UX, and professional engineering practices.
        </p>
      </header>

      <div style={{ marginBottom: 16 }}>
        <TagFilter />
      </div>

      {all.length === 0 ? (
     <EmptyState message="No case studies yet." />
      ) : filtered.length === 0 ? (
     <EmptyState message={tag ? `No results for tag "${tag}".` : "No results."} />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      )}
    </section>
  );
}