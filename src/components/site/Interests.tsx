import { researchInterests } from "@/data/portfolio";

export const Interests = () => {
  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="section bg-secondary/40 border-y border-border"
    >
      <div className="container-prose">
        <div className="max-w-2xl">
          <p className="eyebrow">02 - Research interests</p>
          <h2 id="interests-heading" className="section-title text-balance">
            What I think about, write about, and build.
          </h2>
          <p className="section-lede">
            My work sits at the crossroads of human-centered research and
            engineering practice - informed by accessibility, ethics, and a
            belief that the best technology is the kind everyone can use.
          </p>
        </div>

        <ol
          role="list"
          className="mt-14 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {researchInterests.map((r, i) => (
            <li
              key={r.title}
              className="group relative flex flex-col gap-3 bg-background p-7 transition-colors hover:bg-accent-soft/60"
            >
              <span
                aria-hidden="true"
                className="font-serif text-sm font-semibold text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
