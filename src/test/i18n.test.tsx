import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "@/pages/Index";
import { LanguageProvider, LanguageRedirect } from "@/i18n/LanguageRoutes";
import { detectLang, tr } from "@/i18n/config";
import { formatDate, formatPeriod } from "@/i18n/format";

const CurrentPath = () => {
  const { pathname, hash } = useLocation();
  return <p data-testid="path">{pathname + hash}</p>;
};

const renderAt = (url: string) =>
  render(
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route path="/" element={<LanguageRedirect />} />
        <Route
          path="/:lang"
          element={
            <LanguageProvider>
              <Index />
              <CurrentPath />
            </LanguageProvider>
          }
        />
      </Routes>
    </MemoryRouter>
  );

describe("bilingual site", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the Portuguese version at /pt", () => {
    renderAt("/pt");

    expect(screen.getByRole("heading", { name: /experiência profissional/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /publicações em destaque/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /pular para o conteúdo principal/i })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("pt-BR");
    expect(document.title).toMatch(/desenvolvedora front-end/i);
    expect(localStorage.getItem("lang")).toBe("pt");
  });

  it("renders the English version at /en", () => {
    renderAt("/en");

    expect(screen.getByRole("heading", { name: /professional experience/i })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
  });

  it("switches language and keeps the current section", async () => {
    const user = userEvent.setup();
    renderAt("/en#publications");

    const [toPortuguese] = screen.getAllByRole("link", { name: /português/i });
    expect(toPortuguese).toHaveAttribute("lang", "pt-BR");
    expect(toPortuguese).toHaveAttribute("hreflang", "pt-BR");

    await user.click(toPortuguese);

    expect(screen.getByTestId("path")).toHaveTextContent("/pt#publications");
    expect(screen.getByRole("heading", { name: /publicações em destaque/i })).toBeInTheDocument();

    const [toEnglish] = screen.getAllByRole("link", { name: /english/i });
    await user.click(toEnglish);

    expect(screen.getByTestId("path")).toHaveTextContent("/en#publications");
  });

  it("redirects / to the saved language", () => {
    localStorage.setItem("lang", "pt");
    renderAt("/");

    expect(screen.getByTestId("path")).toHaveTextContent("/pt");
  });

  it("redirects / using the browser language when nothing is saved", () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("pt-BR");
    renderAt("/");
    expect(screen.getByTestId("path")).toHaveTextContent("/pt");
  });

  it("falls back to English for other browser languages", () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("de-DE");
    expect(detectLang()).toBe("en");
  });

  it("shows the 404 page for unknown languages", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    renderAt("/fr");

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
  });

  it("still works when localStorage is blocked", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });

    renderAt("/pt");
    expect(screen.getByRole("heading", { name: /experiência profissional/i })).toBeInTheDocument();
  });
});

describe("i18n helpers", () => {
  it("picks the right translation and keeps shared strings", () => {
    expect(tr({ en: "Hello", pt: "Olá" }, "pt")).toBe("Olá");
    expect(tr("Hand Talk", "pt")).toBe("Hand Talk");
  });

  it("formats dates and periods per language", () => {
    expect(formatDate("2023-09", "en")).toBe("Sep 2023");
    expect(formatDate("2023-09", "pt")).toBe("set. 2023");
    expect(formatDate("2025", "pt")).toBe("2025");
    expect(formatPeriod("2025", undefined, "en")).toBe("2025 - Present");
    expect(formatPeriod("2023-09", "2026-02", "pt")).toBe("set. 2023 - fev. 2026");
  });
});
