import { Interests } from "./Interests";
import { Publications } from "./Publications";
import { Events } from "./Events";
import { useT } from "@/i18n/context";

export function Research() {
  const t = useT().research;
  return (
    <section id="research" aria-labelledby="research-heading" className="section border-y border-border bg-secondary/30">
      <div className="container-prose">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 id="research-heading" className="section-title">{t.title}</h2>
        <p className="section-lede">{t.lede}</p>
        <div className="research-content mt-8">
          <Interests />
          <Publications />
          <Events />
        </div>
      </div>
    </section>
  );
}
