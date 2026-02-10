import { Link } from "react-router-dom";
import type { CaseStudy } from "../types";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h2 style={{ fontSize: 18, margin: 0, color: "#111827" }}>{caseStudy.title}</h2>
        <p style={{ margin: 0, color: "#4B5563" }}>{caseStudy.summary}</p>
      </header>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} aria-label="Tags">
        {caseStudy.tags.map((tag) => (
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
        ))}
      </div>

      <div style={{ marginTop: 6, display: "flex", justifyContent: "space-between", gap: 12 }}>
        <time style={{ fontSize: 12, color: "#6B7280" }}>{caseStudy.publishedAt}</time>

        <Link to={`/case-studies/${caseStudy.slug}`} style={{ fontSize: 14 }}>
          Read case study →
        </Link>
      </div>
    </article>
  );
}