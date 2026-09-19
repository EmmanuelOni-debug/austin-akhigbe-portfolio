import Link from "next/link";
import { siteConfig, contactData } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasLinkedin = contactData.linkedin.trim().length > 0;
  const hasGithub = contactData.github.trim().length > 0;

  return (
    <footer className="border-t border-border">
      <div className="container-page py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-mono text-sm">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {hasLinkedin ? (
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          ) : null}
          {hasGithub ? (
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          ) : null}
          <span className="text-sm text-muted-foreground">
            &copy; {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
