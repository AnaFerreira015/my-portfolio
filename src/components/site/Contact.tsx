import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useT } from "@/i18n/context";

export const Contact = () => {
  const ui = useT();
  const t = ui.contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section bg-secondary/40 border-y border-border"
    >
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="contact-heading" className="section-title">
            {t.title}
          </h2>
          <p className="section-lede">{t.lede}</p>

          <div className="mt-10 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-base group"
            >
              <Mail className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
              <span className="link-underline">{profile.email}</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base"
            >
              <Linkedin className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
              <span className="link-underline">
                LinkedIn
                <span className="sr-only"> {ui.opensInNewTab}</span>
              </span>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base"
            >
              <Github className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
              <span className="link-underline">
                GitHub
                <span className="sr-only"> {ui.opensInNewTab}</span>
              </span>
            </a>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base"
            >
              <GraduationCap className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
              <span className="link-underline">
                Google Scholar
                <span className="sr-only"> {ui.opensInNewTab}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
