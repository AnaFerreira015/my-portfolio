import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Interests } from "@/components/site/Interests";
import { Education } from "@/components/site/Education";
import { Publications } from "@/components/site/Publications";
import { Events } from "@/components/site/Events";
import { Experience } from "@/components/site/Experience";
import { AccessibilityStatement } from "@/components/site/AccessibilityStatement";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { profile } from "@/data/portfolio";
import { HTML_LANG, tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";
import { useEffect } from "react";

const Index = () => {
  const lang = useLang();
  const t = useT();

  useEffect(() => {
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: tr(profile.title, lang),
      url: typeof window !== "undefined" ? `${window.location.origin}/${lang}` : "",
      inLanguage: HTML_LANG[lang],
      sameAs: [
        profile.links.linkedin,
        profile.links.github,
        profile.links.scholar,
        profile.links.orcid,
        profile.links.researchgate,
      ].filter(Boolean),
      description: tr(profile.shortBio, lang),
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">
        {t.skipLink}
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Interests />
        <Education />
        <Publications />
        <Events />
        <Experience />
        <AccessibilityStatement />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
