import { getAllCaseStudies } from "../features/case-studies/repository";
import { CaseStudyCard } from "../features/case-studies/components/CaseStudyCard";

export function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <section>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Case Studies</h1>
        <p style={{ color: "#374151", margin: 0 }}>
          Focus on architecture, code quality, UX, and professional engineering practices.
        </p>
      </header>

      {caseStudies.length === 0 ? (
        <div
          style={{
            border: "1px dashed #D1D5DB",
            borderRadius: 12,
            padding: 16,
            color: "#374151",
          }}
        >
          No case studies yet.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      )}
    </section>
  );
}