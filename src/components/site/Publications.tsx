import { ExternalLink } from "lucide-react";
import { publications } from "@/data/portfolio";
import { HTML_LANG, tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";

export const Publications = () => {
  const lang = useLang();
  const ui = useT();
  const t = ui.publications;

  return (
    <section id="publications" aria-labelledby="publications-heading" className="section">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.eyebrow}</p>
          <h3 id="publications-heading" className="section-title">
            {t.title}
          </h3>
        </div>

        <ul role="list" className="mt-12 space-y-10">
          {publications.map((p) => (
            <li key={p.title}>
              <article className="grid gap-2 sm:grid-cols-[100px,1fr] sm:gap-8">
                <div className="flex flex-wrap items-center gap-2 pt-1 sm:block">
                  <p className="font-serif text-sm font-medium text-accent">{p.year}</p>
                  {p.language && (
                    <p className="inline-flex rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground sm:mt-2">
                      {ui.languageNames[p.language]}
                    </p>
                  )}
                </div>
                <div>
                  <h4
                    lang={p.language !== lang ? HTML_LANG[p.language] : undefined}
                    className="font-serif text-xl font-semibold leading-snug text-pretty"
                  >
                    {p.link && p.link !== "#" ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors inline-flex items-start gap-1.5"
                      >
                        {p.title}
                        <ExternalLink
                          className="mt-1.5 h-3.5 w-3.5 flex-shrink-0 opacity-60"
                          aria-label={ui.opensInNewTab}
                          lang={HTML_LANG[lang]}
                        />
                      </a>
                    ) : (
                      p.title
                    )}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
                  <p className="mt-0.5 text-sm italic text-muted-foreground">{tr(p.venue, lang)}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
