import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AccessibilityStatement } from "@/components/site/AccessibilityStatement";

describe("AccessibilityStatement", () => {
  it("renders accessibility and testing information", () => {
    render(<AccessibilityStatement />);

    expect(
      screen.getByRole("heading", {
        name: /built to be inclusive/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /quality and accessibility testing/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/automated unit, component, end-to-end, and accessibility tests/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /get in touch/i,
      })
    ).toHaveAttribute("href", "#contact");
  });
});