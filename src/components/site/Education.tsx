import { education } from "@/data/portfolio";
import { tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";
import { formatPeriod } from "@/i18n/format";

export const Education = () => {
  const lang = useLang();
  const t = useT().education;

  return (
    <section id="education" aria-labelledby="education-heading" className="section">
      <div className="container-prose">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 id="education-heading" className="section-title text-balance">
              {t.title}
            </h2>
            <p className="section-lede">{t.lede}</p>
          </div>

          <div className="md:col-span-8">
            <ol role="list" className="relative border-l border-border pl-8">
              {education.map((e) => (
                <li key={tr(e.degree, "en")} className="relative pb-10 last:pb-0">
                  {/* Marker */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-accent"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {formatPeriod(e.start, e.end, lang)}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                    {tr(e.degree, lang)}
                  </h3>
                  <p className="mt-1 text-[15px] text-foreground/80">
                    {tr(e.institution, lang)}
                  </p>
                  {e.detail && (
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {tr(e.detail, lang)}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
