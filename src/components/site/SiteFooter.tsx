import { profile } from "@/data/portfolio";
import { useT } from "@/i18n/context";

export const SiteFooter = () => {
  const t = useT().footer;

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-prose py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.rights}
        </p>
        <p>{t.built}</p>
      </div>
    </footer>
  );
};
