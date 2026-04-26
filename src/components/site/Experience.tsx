import { experience } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading" className="section-title">
            Professional experience
          </h2>
        </div>

        <ol className="mt-12 space-y-12">
          {experience.map((job) => (
            <li key={job.role + job.company + job.period}>
              <article className="grid gap-3 sm:grid-cols-[180px,1fr] sm:gap-8">
                <p className="text-sm text-muted-foreground pt-1">{job.period}</p>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{job.role}</h3>
                  <p className="text-foreground/80 text-[15px] mt-0.5">{job.company}</p>
                  {(job.employmentType || job.location) && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {[job.employmentType, job.location].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
                    {job.description}
                  </p>
                  <ul role="list" className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <li
                        key={t}
                        className="text-sm text-foreground bg-secondary px-2.5 py-1 rounded"
                      >
                        {t}
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
