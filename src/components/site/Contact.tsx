import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section bg-secondary/40 border-y border-border"
    >
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading" className="section-title">
            Let's collaborate
          </h2>
          <p className="section-lede">
            I'm always happy to discuss research collaborations, accessibility consulting, speaking opportunities, or interesting problems in inclusive technology.
          </p>

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
                <span className="sr-only"> (opens in new tab)</span>
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
                <span className="sr-only"> (opens in new tab)</span>
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
                <span className="sr-only"> (opens in new tab)</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
