import { test, expect } from "@playwright/test";

test("navigate to case studies and open a detail page", async ({ page }) => {
  await page.goto("/");

  // go to list
  await page.getByRole("link", { name: "Case Studies" }).click();
  await expect(page.getByRole("heading", { name: "Case Studies" })).toBeVisible();

  // open first detail
  await page.getByRole("link", { name: /read case study/i }).first().click();

  // detail page should have a heading
  await expect(page.getByRole("heading").first()).toBeVisible();

  // back link exists
  await expect(page.getByRole("link", { name: /back to case studies/i })).toBeVisible();
});