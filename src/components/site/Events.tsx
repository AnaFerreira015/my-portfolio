import { ExternalLink } from "lucide-react";
import { events } from "@/data/portfolio";

export const Events = () => {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="section bg-secondary/40 border-y border-border"
    >
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">Events</p>
          <h2 id="events-heading" className="section-title">
            Recent & upcoming
          </h2>
        </div>

        <ul role="list" className="mt-12 divide-y divide-border border-y border-border">
          {events.map((e) => (
            <li key={`${e.name}-${e.date}-${e.role}`} className="py-6">
              <article className="grid gap-2 sm:grid-cols-[180px,1fr] sm:gap-8 sm:items-baseline">
                <p className="text-sm text-muted-foreground">{e.date}</p>
                <div>
                  <h3 className="font-serif text-lg font-semibold leading-snug text-pretty">
                    {e.link && e.link !== "#" ? (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors inline-flex items-start gap-1.5"
                      >
                        {e.name}
                        <ExternalLink
                          className="mt-1.5 h-3.5 w-3.5 flex-shrink-0 opacity-60"
                          aria-label="(opens in new tab)"
                        />
                      </a>
                    ) : (
                      e.name
                    )}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <p className="text-sm text-accent">{e.role}</p>
                    {e.language && (
                      <p className="inline-flex rounded-full border border-border bg-background/70 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {e.language}
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
