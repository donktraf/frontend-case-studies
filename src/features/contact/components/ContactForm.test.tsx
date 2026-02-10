import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

test("shows validation errors when submitting empty form", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.click(screen.getByRole("button", { name: /send message/i }));

  expect(screen.getByText(/at least 2 characters/i)).toBeInTheDocument();
  expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();
});