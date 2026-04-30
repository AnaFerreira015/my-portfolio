import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";

describe("portfolio website", () => {
  it("renders the main portfolio structure", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /ana ferreira/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("main")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /professional experience/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /featured publications/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /recent & upcoming/i,
      })
    ).toBeInTheDocument();
  });

  it("has important external profile links", () => {
    render(<App />);

    const links = screen.getAllByRole("link");

    expect(
      links.some((link) => link.getAttribute("href")?.includes("linkedin.com"))
    ).toBe(true);

    expect(
      links.some((link) =>
        link.getAttribute("href")?.includes("scholar.google")
      )
    ).toBe(true);
  });

  it("has accessible navigation links", () => {
    render(<App />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();

    expect(within(nav).getAllByRole("link").length).toBeGreaterThan(2);
  });

  it("allows keyboard users to focus interactive elements", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.tab();

    expect(document.activeElement).toBeInstanceOf(HTMLElement);
    expect(document.activeElement).not.toBe(document.body);
  });
});