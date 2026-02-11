import { Link, useParams } from "react-router-dom";
import { getCaseStudyBySlug } from "../features/case-studies/repository";

export function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug;

  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!slug || !caseStudy) {
    return (
      <section>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Case Study not found</h1>
        <p style={{ color: "#374151", marginBottom: 16 }}>
          The requested case study does not exist.
        </p>
        <Link to="/case-studies">← Back to Case Studies</Link>
      </section>
    );
  }

  return (
    <article>
      <header style={{ marginBottom: 18 }}>
        <Link to="/case-studies" style={{ fontSize: 14 }}>
          ← Back to Case Studies
        </Link>

        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>{caseStudy.title}</h1>
        <p style={{ color: "#374151", margin: "0 0 10px" }}>{caseStudy.summary}</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          {caseStudy.tags.map((tag) => {return (
            <span
              key={tag}
              style={{
                fontSize: 12,
                padding: "4px 8px",
                borderRadius: 999,
                border: "1px solid #E5E7EB",
                color: "#374151",
                background: "#F9FAFB",
              }}
            >
              {tag}
            </span>
          )})}
        </div>

        <time style={{ fontSize: 12, color: "#6B7280" }}>{caseStudy.publishedAt}</time>
      </header>

      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          paddingTop: 16,
          color: "#111827",
          lineHeight: 1.6,
          whiteSpace: "pre-wrap",
        }}
      >
        {caseStudy.content}
      </div>
    </article>
  );
}
