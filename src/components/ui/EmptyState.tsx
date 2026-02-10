export function EmptyState({ message }: { message: string }) {
  return (
    <div
      style={{
        border: "1px dashed #D1D5DB",
        borderRadius: 12,
        padding: 16,
        color: "#374151",
      }}
      role="status"
    >
      {message}
    </div>
  );
}
