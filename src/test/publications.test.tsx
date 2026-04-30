import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/data/portfolio", () => ({
  publications: [
    {
      title: "Publication with link",
      authors: "Ana Ferreira",
      venue: "Conference",
      year: "2026",
      language: "English",
      link: "https://example.com/publication",
    },
    {
      title: "Publication without link",
      authors: "Ana Ferreira",
      venue: "Journal",
      year: "2025",
      language: "Portuguese",
      link: "#",
    },
  ],
}));

import { Publications } from "@/components/site/Publications";

describe("Publications", () => {
  it("renders linked and non-linked publications", () => {
    render(<Publications />);

    expect(
      screen.getByRole("link", {
        name: /publication with link/i,
      })
    ).toHaveAttribute("href", "https://example.com/publication");

    expect(screen.getByText("Publication without link")).toBeInTheDocument();

    expect(
      screen.queryByRole("link", {
        name: /publication without link/i,
      })
    ).not.toBeInTheDocument();

    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Portuguese")).toBeInTheDocument();
  });
});