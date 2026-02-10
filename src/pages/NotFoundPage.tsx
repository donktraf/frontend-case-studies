import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>404 - Not Found</h1>
      <p style={{ color: "#374151", marginBottom: 16 }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/">Go back home</Link>
    </section>
  );
}
