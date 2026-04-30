import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/data/portfolio", () => ({
  experience: [
    {
      role: "Developer with metadata",
      company: "Company A",
      period: "2026",
      employmentType: "Full-time",
      location: "Remote",
      description: "Work with metadata.",
      tags: ["React"],
    },
    {
      role: "Developer without metadata",
      company: "Company B",
      period: "2025",
      description: "Work without metadata.",
      tags: ["Accessibility"],
    },
  ],
}));

import { Experience } from "@/components/site/Experience";

describe("Experience", () => {
  it("renders experiences with and without employment metadata", () => {
    render(<Experience />);

    expect(screen.getByText("Developer with metadata")).toBeInTheDocument();
    expect(screen.getByText("Full-time · Remote")).toBeInTheDocument();

    expect(screen.getByText("Developer without metadata")).toBeInTheDocument();
    expect(screen.queryByText("undefined · undefined")).not.toBeInTheDocument();
  });
});