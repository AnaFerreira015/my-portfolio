import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { href: "#about", label: "Bio" },
  { href: "#publications", label: "Papers" },
  { href: "#events", label: "Events" },
  { href: "#experience", label: "Experience" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-prose flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-serif text-base font-semibold tracking-tight hover:text-accent transition-colors"
        >
          Ana Ferreira
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="ml-2"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="md:hidden border-t border-border">
          <ul className="container-prose py-3 flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
