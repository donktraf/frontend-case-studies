export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div
      aria-busy="true"
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        padding: 16,
        color: "#374151",
      }}
    >
      {label}
    </div>
  );
}