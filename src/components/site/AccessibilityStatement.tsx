import { useT } from "@/i18n/context";

export const AccessibilityStatement = () => {
  const t = useT().accessibility;

  return (
    <section
      id="accessibility"
      aria-labelledby="accessibility-heading"
      className="section"
    >
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.eyebrow}</p>

          <h2 id="accessibility-heading" className="section-title">
            {t.title}
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>{t.p1}</p>

            <p>
              {t.p2Before}{" "}
              <a href="#contact" className="link-underline">
                {t.p2Link}
              </a>
              {t.p2After}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              {t.testingTitle}
            </h3>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>{t.testingP1}</p>
              <p>{t.testingP2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
