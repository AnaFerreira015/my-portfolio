import { profile } from "@/data/portfolio";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-prose py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with care for accessibility and performance.
        </p>
      </div>
    </footer>
  );
};
