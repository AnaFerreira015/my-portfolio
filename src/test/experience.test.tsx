import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@/data/portfolio", () => ({
  experience: [
    {
      role: { en: "Developer with metadata", pt: "Desenvolvedora" },
      company: "Company A",
      start: "2026-01",
      employmentType: { en: "Full-time", pt: "Tempo integral" },
      location: { en: "Remote", pt: "Remoto" },
      description: "Work with metadata.",
      tags: ["React"],
    },
    {
      role: "Developer without metadata",
      company: "Company B",
      start: "2025-03",
      end: "2025-12",
      description: "Work without metadata.",
      tags: [{ en: "Accessibility", pt: "Acessibilidade" }],
    },
    {
      role: "Developer with projects",
      company: "Company C",
      start: "2024-01",
      projects: ["Project One", { en: "Project Two", pt: "Projeto Dois" }],
      highlights: [{ en: "Built things.", pt: "Construí coisas." }],
      tags: ["Testing"],
    },
    {
      role: "Developer with one project",
      company: "Company D",
      start: "2023-01",
      projects: ["Solo Project"],
      highlights: ["Tested things."],
      tags: ["QA"],
    },
  ],
}));

import { Experience } from "@/components/site/Experience";
import { LanguageContext } from "@/i18n/context";

describe("Experience", () => {
  it("renders experiences with and without employment metadata", () => {
    render(<Experience />);

    expect(screen.getByText("Developer with metadata")).toBeInTheDocument();
    expect(screen.getByText("Full-time · Remote")).toBeInTheDocument();

    expect(screen.getByText("Jan 2026 - Present")).toBeInTheDocument();

    expect(screen.getByText("Developer without metadata")).toBeInTheDocument();
    expect(screen.getByText("Mar 2025 - Dec 2025")).toBeInTheDocument();
    expect(screen.queryByText("undefined · undefined")).not.toBeInTheDocument();

    expect(screen.getByText("Projects: Project One; Project Two")).toBeInTheDocument();
    expect(screen.getByText("Project: Solo Project")).toBeInTheDocument();
    expect(screen.getByText("Built things.").tagName).toBe("LI");
  });

  it("renders translated fields and dates in Portuguese", () => {
    render(
      <LanguageContext.Provider value="pt">
        <Experience />
      </LanguageContext.Provider>
    );

    expect(screen.getByRole("heading", { name: /experiência profissional/i })).toBeInTheDocument();
    expect(screen.getByText("Desenvolvedora")).toBeInTheDocument();
    expect(screen.getByText("Tempo integral · Remoto")).toBeInTheDocument();
    expect(screen.getByText("Acessibilidade")).toBeInTheDocument();
    expect(screen.getByText("jan. 2026 - Atual")).toBeInTheDocument();
    expect(screen.getByText("mar. 2025 - dez. 2025")).toBeInTheDocument();
    expect(screen.getByText("Projetos: Project One; Projeto Dois")).toBeInTheDocument();
    expect(screen.getByText("Construí coisas.")).toBeInTheDocument();
  });
});
