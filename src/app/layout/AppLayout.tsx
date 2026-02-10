import { NavLink, Outlet } from "react-router-dom";

const linkBase: React.CSSProperties = {
  textDecoration: "none",
  padding: "8px 10px",
  borderRadius: 8,
};

function AppNavLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...linkBase,
        color: isActive ? "#111827" : "#374151",
        background: isActive ? "#E5E7EB" : "transparent",
      })}
    >
      {label}
    </NavLink>
  );
}

export function AppLayout() {
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#ffffff",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <strong style={{ color: "#111827" }}>Frontend Case Studies</strong>

          <nav style={{ display: "flex", gap: 8, flexWrap: "wrap" }} aria-label="Main navigation">
            <AppNavLink to="/" label="Home" />
            <AppNavLink to="/case-studies" label="Case Studies" />
            <AppNavLink to="/about" label="About" />
            <AppNavLink to="/contact" label="Contact" />
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 16px" }}>
          <Outlet />
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #E5E7EB" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "16px",
            color: "#6B7280",
            fontSize: 14,
          }}
        >
          © {new Date().getFullYear()} Frontend Case Studies
        </div>
      </footer>
    </div>
  );
}