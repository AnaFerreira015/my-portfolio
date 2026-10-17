import { useEffect, type ReactNode } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import { HTML_LANG, detectLang, isLang, saveLang } from "./config";
import { LanguageContext } from "./context";
import { ui } from "./ui";

/** "/" sends the visitor to "/en" or "/pt" (saved choice, then browser language). */
export const LanguageRedirect = () => {
  const { hash } = useLocation();
  return <Navigate to={`/${detectLang()}${hash}`} replace />;
};

/** Reads the language from "/:lang", syncs <html lang>, title and description, and remembers the choice. */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams();
  const valid = isLang(lang);

  useEffect(() => {
    if (!isLang(lang)) return;
    const t = ui[lang];
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    saveLang(lang);
  }, [lang]);

  if (!valid) return <NotFound />;

  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
};
