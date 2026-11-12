import { experience } from "@/data/portfolio";
import { tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";
import { formatPeriod } from "@/i18n/format";

export const Experience = () => {
  const lang = useLang();
  const t = useT().experience;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="section !pt-8 sm:!pt-10">
      <div className="container-prose">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="experience-heading" className="section-title">
            {t.title}
          </h2>
        </div>

        <ol className="mt-12 space-y-12">
          {experience.map((job) => (
            <li key={tr(job.role, "en") + tr(job.company, "en") + job.start}>
              <article className="grid gap-3 sm:grid-cols-[180px,1fr] sm:gap-8">
                <p className="text-sm text-muted-foreground pt-1">{formatPeriod(job.start, job.end, lang)}</p>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{tr(job.role, lang)}</h3>
                  <p className="text-foreground/80 text-[15px] mt-0.5">{tr(job.company, lang)}</p>
                  {(job.employmentType || job.location) && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {[job.employmentType, job.location]
                        .filter((v) => v !== undefined)
                        .map((v) => tr(v, lang))
                        .join(" · ")}
                    </p>
                  )}
                  {job.projects && job.projects.length > 0 && (
                    <p className="mt-1 text-sm italic text-muted-foreground">
                      {job.projects.length > 1 ? t.projects : t.project}:{" "}
                      {job.projects.map((p) => tr(p, lang)).join("; ")}
                    </p>
                  )}
                  {job.description && (
                    <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
                      {tr(job.description, lang)}
                    </p>
                  )}
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground leading-relaxed text-pretty marker:text-accent">
                      {job.highlights.map((h) => (
                        <li key={tr(h, "en")}>{tr(h, lang)}</li>
                      ))}
                    </ul>
                  )}
                  <ul role="list" className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tr(tag, "en")}
                        className="text-sm text-foreground bg-secondary px-2.5 py-1 rounded"
                      >
                        {tr(tag, lang)}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
