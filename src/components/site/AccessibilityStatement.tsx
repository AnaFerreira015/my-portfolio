export const AccessibilityStatement = () => {
  return (
    <section
      id="accessibility"
      aria-labelledby="accessibility-heading"
      className="section"
    >
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="eyebrow">Accessibility</p>
          <h2 id="accessibility-heading" className="section-title">
            Built to be inclusive
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              This website was built following accessibility and inclusive design principles - semantic HTML, keyboard-navigable components, sufficient color contrast, visible focus states, readable typography, and respect for reduced-motion preferences.
            </p>
            <p>
              Accessibility is an ongoing practice. If you encounter any barrier or have feedback, please{" "}
              <a href="#contact" className="link-underline">
                get in touch
              </a>
              . Your input helps make the web more inclusive for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
