import { about, profile } from "@/data/portfolio";
import { FileText } from "lucide-react";
import { tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";

export const About = () => {
  const lang = useLang();
  const t = useT().about;

  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container-prose">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2
              id="about-heading"
              className="section-title text-balance"
            >
              {t.title}
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/90 text-pretty">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{tr(p, lang)}</p>
              ))}
            </div>

            {/* Highlights row */}
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              {about.highlights.map((h) => (
                <div key={h.value}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    {tr(h.label, lang)}
                  </dt>
                  <dd className="mt-2 font-serif text-3xl font-semibold text-foreground">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>

            {profile.links.cv !== "#" && <a
              href={profile.links.cv}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold link-underline"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              {t.cv}
            </a>}
          </div>
        </div>
      </div>
    </section>
  );
};
