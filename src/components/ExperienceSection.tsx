"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import LogoMarquee from "./LogoMarquee";
import { experienceData, type ExperienceItem } from "@/data/experience";

const industries = [
  "All",
  ...Array.from(new Set(experienceData.map((e) => e.industry))),
];

function ExperienceCard({
  item,
  index,
  expanded,
  onToggle,
}: {
  item: ExperienceItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <Reveal delay={Math.min(index, 8) * 0.05}>
      <motion.div
        layout
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-background-elevated p-5 md:p-6 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(480px circle at 0% 0%, rgba(45,212,191,0.08), transparent 60%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base md:text-lg font-medium tracking-tight leading-snug">
              {item.company}
            </h3>
            <p className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
              {item.industry}
            </p>
          </div>
          <div className="flex h-8 w-14 shrink-0 items-center justify-center rounded-lg bg-foreground/95 px-2">
            <Image
              src={item.logo}
              alt=""
              aria-hidden="true"
              width={80}
              height={28}
              className="h-3.5 w-auto object-contain"
            />
          </div>
        </div>

        <p className="relative mt-3 text-[13px] text-muted-foreground leading-relaxed">
          {item.summary}
        </p>

        <div className="relative mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wide text-muted-foreground border border-border rounded-md px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-auto pt-5">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-accent hover:opacity-80 transition-opacity"
          >
            {expanded ? "View less" : "View more"}
            <ChevronDown
              size={13}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-4 pt-4 border-t border-border space-y-3.5">
                  {item.achievements.map((a) => (
                    <li key={a.title} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <div>
                        <p className="text-[13px] font-medium text-foreground">
                          {a.title}
                        </p>
                        <p className="mt-0.5 text-[13px] text-muted-foreground leading-relaxed">
                          {a.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function ExperienceSection() {
  const [filter, setFilter] = useState("All");
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? experienceData
        : experienceData.filter((e) => e.industry === filter),
    [filter],
  );

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="A track record across critical UK infrastructure."
          description="Selected consulting engagements spanning public sector, energy, and technology organisations, delivered as Power BI, data modelling, and reporting work."
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setFilter(ind)}
              className="relative rounded-full px-4 py-2 font-mono text-[11px] tracking-wide transition-colors"
            >
              {filter === ind && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span
                className={`relative z-10 ${
                  filter === ind ? "text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {ind}
              </span>
              {filter !== ind && (
                <span className="absolute inset-0 rounded-full border border-border" />
              )}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <ExperienceCard
                key={item.company}
                item={item}
                index={i}
                expanded={expandedCompany === item.company}
                onToggle={() =>
                  setExpandedCompany((c) => (c === item.company ? null : item.company))
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.15} className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
              Worked with
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
}
