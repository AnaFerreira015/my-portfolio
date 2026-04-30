import { describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NotFound from "@/pages/NotFound";

describe("NotFound page", () => {
  it("renders the 404 page and home link", () => {
    render(
      <MemoryRouter initialEntries={["/missing-page"]}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /404/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/oops! page not found/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /return to home/i,
      })
    ).toHaveAttribute("href", "/");
  });

  it("logs the missing route", () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "404 Error: User attempted to access non-existent route:",
      "/invalid-route"
    );

    consoleErrorSpy.mockRestore();
  });
});