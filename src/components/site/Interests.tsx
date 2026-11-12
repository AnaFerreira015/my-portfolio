import { researchInterests } from "@/data/portfolio";
import { tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";

export const Interests = () => {
  const lang = useLang();
  const t = useT().interests;

  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="section bg-secondary/40 border-y border-border"
    >
      <div className="container-prose">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.eyebrow}</p>
          <h3 id="interests-heading" className="section-title text-balance">
            {t.title}
          </h3>
          <p className="section-lede">{t.lede}</p>
        </div>

        <ol
          role="list"
          className="mt-14 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {researchInterests.map((r, i) => (
            <li
              key={tr(r.title, "en")}
              className="group relative flex flex-col gap-3 bg-background p-7 transition-colors hover:bg-accent-soft/60"
            >
              <span
                aria-hidden="true"
                className="font-serif text-sm font-semibold text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="font-serif text-xl font-semibold text-foreground">
                {tr(r.title, lang)}
              </h4>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {tr(r.description, lang)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
