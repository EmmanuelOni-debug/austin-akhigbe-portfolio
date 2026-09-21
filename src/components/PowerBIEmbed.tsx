"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Maximize } from "lucide-react";
import type { InteractiveDashboard } from "@/data/embeds";
import Reveal from "./Reveal";

export default function PowerBIEmbed({
  dashboard,
  index,
}: {
  dashboard: InteractiveDashboard;
  index: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const goFullscreen = () => {
    const el = wrapperRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    }
  };

  return (
    <Reveal delay={index * 0.1}>
      <div className="rounded-xl border border-border bg-background-elevated overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-4 p-6 md:p-8 border-b border-border">
          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
              Interactive Report
            </p>
            <h3 className="mt-2 text-xl md:text-2xl font-medium tracking-tight">
              {dashboard.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              {dashboard.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={goFullscreen}
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              <Maximize size={15} />
              View Fullscreen
            </button>
            
              <a
                href={dashboard.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              View Dashboard
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div
          ref={wrapperRef}
          className="relative w-full bg-black [&:fullscreen_iframe]:h-screen"
        >
          <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
            {!loaded ? (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase animate-pulse">
                  Loading report…
                </span>
              </div>
            ) : null}
            <iframe
              src={dashboard.embedUrl}
              title={dashboard.title}
              className="absolute inset-0 h-full w-full"
              frameBorder={0}
              allowFullScreen
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
