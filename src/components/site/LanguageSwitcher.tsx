import { Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HTML_LANG, type Lang } from "@/i18n/config";
import { useLang } from "@/i18n/context";
import { cn } from "@/lib/utils";

/** Each option is written in its own language, so it reads correctly to everyone. */
const OPTIONS: Record<Lang, { name: string; short: string }> = {
  en: { name: "English", short: "EN" },
  pt: { name: "Português", short: "PT" },
};

type Props = {
  /** "full" shows the language name, "compact" shows "PT" / "EN" for small screens. */
  variant?: "full" | "compact";
  className?: string;
};

export const LanguageSwitcher = ({ variant = "full", className }: Props) => {
  const lang = useLang();
  const { hash } = useLocation();
  const other: Lang = lang === "en" ? "pt" : "en";
  const option = OPTIONS[other];

  return (
    <Link
      // Keeps the current section (#publications, #events...) when switching.
      to={{ pathname: `/${other}`, hash }}
      lang={HTML_LANG[other]}
      hrefLang={HTML_LANG[other]}
      // Visible text comes first in the accessible name (WCAG 2.5.3 Label in Name).
      aria-label={variant === "compact" ? `${option.short}: ${option.name}` : undefined}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground",
        className,
      )}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {variant === "compact" ? option.short : option.name}
    </Link>
  );
};
