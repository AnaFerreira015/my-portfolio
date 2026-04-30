import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/data/portfolio", () => ({
  events: [
    {
      name: "Event with link",
      date: "2026",
      role: "Speaker",
      language: "English",
      link: "https://example.com",
    },
    {
      name: "Event without link",
      date: "2025",
      role: "Attendee",
      language: "Portuguese",
      link: "#",
    },
  ],
}));

import { Events } from "@/components/site/Events";

describe("Events", () => {
  it("renders linked and non-linked events", () => {
    render(<Events />);

    expect(
      screen.getByRole("link", {
        name: /event with link/i,
      })
    ).toHaveAttribute("href", "https://example.com");

    expect(screen.getByText("Event without link")).toBeInTheDocument();

    expect(
      screen.queryByRole("link", {
        name: /event without link/i,
      })
    ).not.toBeInTheDocument();

    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Portuguese")).toBeInTheDocument();
  });
});