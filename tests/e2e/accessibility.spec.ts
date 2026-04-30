import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("accessibility audit", () => {
  test("homepage has no critical or serious accessibility violations", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const seriousViolations = accessibilityScanResults.violations.filter(
      (violation) =>
        violation.impact === "critical" || violation.impact === "serious"
    );

    expect(seriousViolations).toEqual([]);
  });
});