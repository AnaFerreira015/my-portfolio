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
              This website was built following accessibility and inclusive
              design principles - semantic HTML, keyboard-navigable components,
              sufficient color contrast, visible focus states, readable
              typography, and respect for reduced-motion preferences.
            </p>

            <p>
              Accessibility is an ongoing practice. If you encounter any
              barrier or have feedback, please{" "}
              <a href="#contact" className="link-underline">
                get in touch
              </a>
              . Your input helps make the web more inclusive for everyone.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Quality and accessibility testing
            </h3>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>
                This portfolio is supported by automated unit, component,
                end-to-end, and accessibility tests. The test suite checks
                content integrity, navigation structure, external links,
                keyboard navigation, responsive behavior, and accessibility
                issues.
              </p>

              <p>
                Accessibility is tested with axe-based tools in both component
                tests and browser-based end-to-end tests. Automated testing
                supports the review process, but it does not replace manual
                testing with keyboard navigation, assistive technologies, and
                real user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
