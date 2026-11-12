import { ExternalLink } from "lucide-react";
import { events } from "@/data/portfolio";
import { tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";
import { formatDate } from "@/i18n/format";

export const Events = () => {
  const lang = useLang();
  const ui = useT();
  const t = ui.events;

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="section bg-secondary/40 border-y border-border"
    >
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.eyebrow}</p>
          <h3 id="events-heading" className="section-title">
            {t.title}
          </h3>
        </div>

        <ul role="list" className="mt-12 divide-y divide-border border-y border-border">
          {events.map((e) => (
            <li key={`${tr(e.name, "en")}-${e.date}-${tr(e.role, "en")}`} className="py-6">
              <article className="grid gap-2 sm:grid-cols-[180px,1fr] sm:gap-8 sm:items-baseline">
                <p className="text-sm text-muted-foreground">
                  <time dateTime={e.date}>{formatDate(e.date, lang)}</time>
                </p>
                <div>
                  <h4 className="font-serif text-lg font-semibold leading-snug text-pretty">
                    {e.link && e.link !== "#" ? (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors inline-flex items-start gap-1.5"
                      >
                        {tr(e.name, lang)}
                        <ExternalLink
                          className="mt-1.5 h-3.5 w-3.5 flex-shrink-0 opacity-60"
                          aria-label={ui.opensInNewTab}
                        />
                      </a>
                    ) : (
                      tr(e.name, lang)
                    )}
                  </h4>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <p className="text-sm text-accent">{tr(e.role, lang)}</p>
                    {e.language && (
                      <p className="inline-flex rounded-full border border-border bg-background/70 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {ui.languageNames[e.language]}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
