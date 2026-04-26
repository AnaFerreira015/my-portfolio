import { education } from "@/data/portfolio";

export const Education = () => {
  return (
    <section id="education" aria-labelledby="education-heading" className="section">
      <div className="container-prose">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">03 - Education</p>
            <h2 id="education-heading" className="section-title text-balance">
              Academic foundations.
            </h2>
            <p className="section-lede">
              Formal training in informatics with a focus on human-computer
              interaction and inclusive design.
            </p>
          </div>

          <div className="md:col-span-8">
            <ol role="list" className="relative border-l border-border pl-8">
              {education.map((e) => (
                <li key={e.degree} className="relative pb-10 last:pb-0">
                  {/* Marker */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-accent"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {e.period}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                    {e.degree}
                  </h3>
                  <p className="mt-1 text-[15px] text-foreground/80">
                    {e.institution}
                  </p>
                  {e.detail && (
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {e.detail}
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
