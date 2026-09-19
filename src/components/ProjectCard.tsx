"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.1}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block focus-visible:outline-none"
      >
        <div className="relative overflow-hidden rounded-xl border border-border bg-background-elevated aspect-[2339/1654] transition-colors duration-300 group-hover:border-foreground/40 group-focus-visible:border-accent">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              {project.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] tracking-wide text-muted-foreground border border-border rounded-full px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <span
            aria-hidden="true"
            className="mt-1 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-foreground group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
