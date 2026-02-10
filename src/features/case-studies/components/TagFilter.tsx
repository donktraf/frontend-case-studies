import { useSearchParams } from "react-router-dom";
import type { CaseStudyTag } from "../types";

const TAGS: CaseStudyTag[] = ["react", "typescript", "testing", "architecture", "ux", "api"];

export function TagFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  function setTag(tag: CaseStudyTag | null) {
    const next = new URLSearchParams(searchParams);
    if (tag) next.set("tag", tag);
    else next.delete("tag");

    // keep URL clean: if no params, show plain path
    setSearchParams(next, { replace: true });
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} aria-label="Tag filter">
      <button
        type="button"
        onClick={() => setTag(null)}
        style={{
          padding: "6px 10px",
          borderRadius: 999,
          border: "1px solid #E5E7EB",
          background: activeTag ? "#ffffff" : "#E5E7EB",
          cursor: "pointer",
        }}
      >
        All
      </button>

      {TAGS.map((tag) => {
        const isActive = activeTag === tag;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => setTag(tag)}
            style={{
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid #E5E7EB",
              background: isActive ? "#E5E7EB" : "#ffffff",
              cursor: "pointer",
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
