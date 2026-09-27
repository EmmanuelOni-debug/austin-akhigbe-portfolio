"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Maximize } from "lucide-react";
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
  const [showAnalysis, setShowAnalysis] = useState(false);

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

        <div className="border-b border-border px-6 py-4 md:px-8">
          <button
            type="button"
            onClick={() => setShowAnalysis((v) => !v)}
            aria-expanded={showAnalysis}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-accent hover:opacity-80 transition-opacity"
          >
            {showAnalysis ? "Hide Analysis" : "View Analysis"}
            <ChevronDown
              size={13}
              className={`transition-transform duration-300 ${showAnalysis ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {showAnalysis && (
              <motion.div
                key="analysis"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 max-w-2xl space-y-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dashboard.analysis.overview}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dashboard.analysis.objective}
                  </p>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-foreground uppercase">
                      What you can explore
                    </p>
                    <ul className="mt-3 space-y-2">
                      {dashboard.analysis.features.map((feature) => (
                        <li key={feature} className="flex gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-foreground uppercase">
                      Key metrics
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {dashboard.analysis.keyMetrics.map((metric) => (
                        <span
                          key={metric}
                          className="font-mono text-[10px] tracking-wide text-muted-foreground border border-border rounded-md px-2 py-1"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
