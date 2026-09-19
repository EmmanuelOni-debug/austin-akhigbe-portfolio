"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TerminalSquare, X } from "lucide-react";
import { siteConfig } from "@/data/site";

/**
 * A small developer/terminal-inspired Easter egg — not a functioning
 * terminal, just a subtle detail that fits the technical aesthetic.
 */
export default function Terminal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground border border-border rounded-md px-3 py-2 hover:text-foreground hover:border-foreground/40 transition-colors"
      >
        <TerminalSquare size={14} />
        {open ? "close --terminal" : "whoami --terminal"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="rounded-lg border border-border bg-background-elevated font-mono text-xs text-muted-foreground overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close terminal"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={12} />
                </button>
              </div>
              <div className="p-4 space-y-1.5">
                {siteConfig.terminalLines.map((line, i) => (
                  <p
                    key={i}
                    className={
                      line.startsWith(">")
                        ? "text-accent"
                        : "text-muted-foreground pl-3"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
