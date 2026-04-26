import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/portrait.jpeg";

const iconLinks = [
  { href: profile.links.email, label: "Send email", Icon: Mail },
  { href: profile.links.linkedin, label: "LinkedIn profile", Icon: Linkedin },
  { href: profile.links.github, label: "GitHub profile", Icon: Github },
  { href: profile.links.scholar, label: "Google Scholar profile", Icon: GraduationCap },
  {
    href: profile.links.orcid,
    label: "ORCID profile",
    // ORCID brand glyph as inline SVG (no lucide equivalent)
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
        <path
          fill="currentColor"
          d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm-4.36 17.6H5.86V7.5h1.78v10.1Zm-.9-11.36a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Zm10.6 6.3c0 3.16-2.27 5.06-5.16 5.06H9.3V7.5h2.94c2.79 0 5.1 1.78 5.1 5.04Zm-1.83 0c0-2.45-1.56-3.43-3.32-3.43h-1.1v6.86h1.1c1.6 0 3.32-1.02 3.32-3.43Z"
        />
      </svg>
    ),
  },
  {
    href: profile.links.researchgate,
    label: "ResearchGate profile",
    Icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
        <path
          fill="currentColor"
          d="M19.586 0H4.414A4.414 4.414 0 0 0 0 4.414v15.172A4.414 4.414 0 0 0 4.414 24h15.172A4.414 4.414 0 0 0 24 19.586V4.414A4.414 4.414 0 0 0 19.586 0ZM8.51 15.93c-1.85 0-3.32-.6-4.18-1.16l.47-1.3c.83.55 2.04 1.08 3.55 1.08 2.03 0 3-1.07 3-2.36 0-1.33-.79-2.08-2.85-2.86-2.46-.88-3.99-2.16-3.99-4.27 0-2.34 1.94-4.07 4.86-4.07 1.54 0 2.66.36 3.32.74l-.5 1.32c-.49-.27-1.49-.72-2.86-.72-2.09 0-2.89 1.25-2.89 2.3 0 1.43.9 2.13 3 2.95 2.55.99 3.85 2.21 3.85 4.43 0 2.32-1.71 4.32-5.26 4.32Zm10.99-3.16c-.79 1.4-2.27 2.43-4.27 2.43-1.31 0-2.27-.45-2.27-.45v.99h-.55V8.5h.55v3.62c.55-.78 1.55-1.27 2.79-1.27 2.21 0 3.85 1.7 3.85 3.92Z"
        />
      </svg>
    ),
  },
];

export const Hero = () => {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden hero-stripes text-hero-foreground"
    >
      <div className="container-prose py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:gap-12">
          {/* Text */}
          <div className="max-w-2xl flex-1">
            <p className="eyebrow !text-hero-accent">{profile.title}</p>

            <h1
              id="hero-heading"
              className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance text-hero-foreground"
            >
              {profile.name}
            </h1>

            <div className="mt-6 space-y-1 text-base sm:text-lg text-hero-muted">
              <p className="font-medium text-hero-foreground">
                {profile.affiliation}
              </p>
              <p>{profile.group}</p>
            </div>

            <ul
              className="mt-8 flex flex-wrap items-center gap-2"
              aria-label="Contact and profile links"
            >
              {iconLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hero-muted/30 text-hero-foreground transition-colors hover:bg-hero-accent hover:text-hero hover:border-hero-accent"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portrait */}
          <div className="shrink-0">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={160}
              height={160}
              className="h-32 w-32 sm:h-60 sm:w-60 rounded-full object-cover ring-2 ring-hero-accent/60 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
