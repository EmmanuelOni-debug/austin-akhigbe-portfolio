"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-[100svh] pt-28 pb-16 overflow-hidden"
    >
      {/* faint background grid — purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at top, black, transparent 75%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {siteConfig.title}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="flex flex-wrap items-baseline gap-x-3 leading-[0.92] font-medium tracking-tighter text-balance"
        >
          <span className="text-[7.5vw] md:text-[3.75rem] lg:text-[4.25rem]">
            {siteConfig.name}
          </span>
          <span className="text-[3vw] md:text-xl lg:text-2xl font-normal tracking-normal text-muted-foreground">
            {siteConfig.qualifications}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground text-balance"
        >
          {siteConfig.heroDescription}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#interactive-dashboards"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            View Dashboards
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
