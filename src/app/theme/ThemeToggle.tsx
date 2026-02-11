import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme, persistTheme, type Theme } from "./theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    persistTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      style={{
        padding: "8px 10px",
        borderRadius: 10,
        border: `1px solid var(--border)`,
        background: "var(--surface)",
        color: "var(--text)",
        cursor: "pointer",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}