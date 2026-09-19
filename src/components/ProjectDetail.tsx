import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, LineChart } from "lucide-react";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";

export default function ProjectDetail({ project }: { project: Project }) {
  const hasReport = project.powerBiUrl.trim().length > 0;

  return (
    <article className="pt-28 md:pt-36 pb-24">
      <div className="container-page">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {project.category}
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight text-balance">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            {project.overview}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.downloadUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} />
            {project.downloadLabel}
          </a>

          {hasReport ? (
            <a
              href={project.powerBiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              <LineChart size={16} />
              View Interactive Report
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
              <LineChart size={16} />
              Interactive report unavailable
            </span>
          )}
        </Reveal>

        <Reveal delay={0.15} className="mt-14 md:mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-border aspect-[2339/1654]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono tracking-[0.15em] uppercase text-muted-foreground">
              Objective
            </h2>
            <p className="mt-4 text-lg text-foreground/90">
              {project.objective}
            </p>

            <h2 className="mt-12 text-sm font-mono tracking-[0.15em] uppercase text-muted-foreground">
              Tools &amp; Technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs tracking-wide text-muted-foreground border border-border rounded-full px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="mt-12 text-sm font-mono tracking-[0.15em] uppercase text-muted-foreground">
              Key Metrics Covered
            </h2>
            <ul className="mt-4 space-y-2">
              {project.keyMetrics.map((metric) => (
                <li
                  key={metric}
                  className="text-sm text-foreground/90 border-t border-border pt-2 first:border-t-0 first:pt-0"
                >
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-sm font-mono tracking-[0.15em] uppercase text-muted-foreground">
              What the Dashboard Covers
            </h2>
            <ul className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-4 text-foreground/90 border-b border-border pb-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal
          delay={0.05}
          className="mt-20 md:mt-28 border-t border-border pt-10 flex items-center justify-between"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Projects
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            Discuss a project
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
