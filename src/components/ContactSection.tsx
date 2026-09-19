import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { contactData } from "@/data/site";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function ContactSection() {
  const hasEmail = contactData.email.trim().length > 0;
  const hasLinkedin = contactData.linkedin.trim().length > 0;

  return (
    <section
      id="contact"
      className="py-28 md:py-40 border-t border-border relative overflow-hidden"
    >
      <div className="container-page relative text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Contact
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-balance max-w-4xl mx-auto">
            {contactData.heading}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto">
            {contactData.subheading}
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {hasEmail ? (
            <a
              href={`mailto:${contactData.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {contactData.email}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-7 py-3.5 text-sm text-muted-foreground">
              <Mail size={16} />
              Email coming soon
            </span>
          )}

          {hasLinkedin ? (
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              <LinkedInIcon size={16} />
              LinkedIn
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
