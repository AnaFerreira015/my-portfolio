import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { tr } from "@/i18n/config";
import { useLang, useT } from "@/i18n/context";

function ProjectCard({ project }: { project: Project }) {
  const lang = useLang();
  const ui = useT();
  const t = ui.projects;
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <img src={project.image.replace('.webp', '-800.webp')}
        srcSet={`${project.image.replace('.webp', '-480.webp')} 480w, ${project.image.replace('.webp', '-800.webp')} 800w, ${project.image} 1310w`}
        sizes="(min-width: 1152px) 347px, (min-width: 768px) calc((100vw - 112px) / 3), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
        alt={`${t.preview} ${project.name}`} width={1440} height={900} loading="lazy" decoding="async" className="aspect-[16/10] w-full border-b border-border object-cover object-top" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex min-h-7 flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <span>{tr(project.category, lang)}</span>
          {project.status && <span className="rounded-full bg-secondary px-2 py-1 text-foreground">{t[project.status]}</span>}
        </div>
        <h3 className="mt-3 font-serif text-2xl font-semibold">{project.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{tr(project.description, lang)}</p>
        <div className="mt-auto pt-5">
        {project.technologies.length > 0 && <ul aria-label={lang === "pt" ? "Principais tecnologias" : "Main technologies"} className="flex flex-wrap gap-2">{project.technologies.map(tech => <li key={tech} className="rounded bg-secondary px-2 py-1 text-xs text-foreground">{tech}</li>)}</ul>}
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold link-underline">
          {t.visit}<span className="sr-only">: {project.name} {ui.opensInNewTab}</span><ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const t = useT().projects;
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section !pb-8 sm:!pb-10">
      <div className="container-prose">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 id="projects-heading" className="section-title text-balance">{t.title}</h2>
        <p className="section-lede">{t.lede}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
