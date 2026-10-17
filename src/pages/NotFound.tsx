import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { detectLang, HTML_LANG } from "@/i18n/config";
import { ui } from "@/i18n/ui";

const NotFound = () => {
  const location = useLocation();
  // Rendered outside the "/:lang" routes, so it uses the saved or browser language.
  const lang = detectLang();
  const t = ui[lang].notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t.home}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
