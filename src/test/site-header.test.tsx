import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteHeader } from "@/components/site/SiteHeader";

describe("SiteHeader", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("toggles between light and dark theme", async () => {
    const user = userEvent.setup();

    render(<SiteHeader />);

    const themeButtons = screen.getAllByRole("button", {
      name: /switch to dark theme/i,
    });

    await user.click(themeButtons[0]);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");

    const lightThemeButtons = screen.getAllByRole("button", {
      name: /switch to light theme/i,
    });

    await user.click(lightThemeButtons[0]);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("opens and closes the mobile navigation menu", async () => {
    const user = userEvent.setup();

    render(<SiteHeader />);

    const openMenuButton = screen.getByRole("button", {
      name: /open menu/i,
    });

    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();

    await user.click(openMenuButton);

    expect(
      screen.getByRole("navigation", {
        name: /mobile/i,
      })
    ).toBeInTheDocument();

    const closeMenuButton = screen.getByRole("button", {
      name: /close menu/i,
    });

    await user.click(closeMenuButton);

    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();
  });

  it("closes the mobile menu after clicking a mobile navigation link", async () => {
    const user = userEvent.setup();

    render(<SiteHeader />);

    await user.click(
      screen.getByRole("button", {
        name: /open menu/i,
      })
    );

    const mobileNav = screen.getByRole("navigation", {
      name: /mobile/i,
    });

    await user.click(
      within(mobileNav).getByRole("link", {
        name: /bio/i,
      })
    );

    expect(mobileNav).not.toBeInTheDocument();
  });
});