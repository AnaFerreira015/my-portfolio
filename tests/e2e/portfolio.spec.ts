import { expect, test } from "@playwright/test";

test.describe("portfolio homepage", () => {
  test("loads the homepage with the main sections", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /ana ferreira/i }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /professional experience/i }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /featured publications/i }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /recent & upcoming/i }),
    ).toBeVisible();
  });

  test("has working LinkedIn and Google Scholar links", async ({ page }) => {
    await page.goto("/");

    const linkedin = page
      .getByRole("link")
      .filter({ hasText: /linkedin/i })
      .first();

    const scholar = page
      .getByRole("link")
      .filter({ hasText: /scholar/i })
      .first();

    await expect(linkedin).toHaveAttribute("href", /linkedin\.com/);
    await expect(scholar).toHaveAttribute("href", /scholar\.google/);
  });

  test("supports keyboard navigation", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");

    const focusedElement = page.locator(":focus");
    await expect(focusedElement).toBeVisible();
  });

  test("works on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /ana ferreira/i }),
    ).toBeVisible();

    await expect(page.getByRole("main")).toBeVisible();
  });
});
