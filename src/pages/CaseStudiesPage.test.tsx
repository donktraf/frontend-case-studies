import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CaseStudiesPage } from "./CaseStudiesPage";
import { test, expect } from "vitest";

function renderWithRoute(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <CaseStudiesPage />
    </MemoryRouter>
  );
}

test("filters case studies by tag from the URL", () => {
  renderWithRoute("/case-studies?tag=react");

  // At least one case study should include 'react' based on our seed data
  expect(screen.getByText(/Routing & Layout Foundation/i)).toBeInTheDocument();

  // This one does NOT have 'react' tag in our seed data
  expect(screen.queryByText(/Content Model & Local Repository/i)).not.toBeInTheDocument();
});

test("shows empty state for an unknown tag", () => {
  renderWithRoute("/case-studies?tag=doesnotexist");
  expect(screen.getByText(/No results/i)).toBeInTheDocument();
});