import Image from "next/image";
import { experienceData } from "@/data/experience";

/**
 * Two-row, opposite-direction, infinitely-scrolling logo strip.
 * Each row is the same logo list duplicated so the loop is seamless.
 * Hovering a row pauses it (see .marquee-row in globals.css).
 * Respects prefers-reduced-motion globally (see globals.css).
 */
function LogoChip({ item }: { item: (typeof experienceData)[number] }) {
  return (
    <div
      className={`group flex h-16 w-[168px] shrink-0 items-center justify-center rounded-xl border transition-colors ${
        item.logoOnDark
          ? "border-border bg-background-elevated"
          : "border-transparent bg-foreground"
      }`}
    >
      <Image
        src={item.logo}
        alt={`${item.company} logo`}
        width={120}
        height={40}
        className={`h-6 w-auto object-contain transition-all duration-300 ${
          item.logoOnDark
            ? "opacity-70 group-hover:opacity-100"
            : "grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
        }`}
      />
    </div>
  );
}

export default function LogoMarquee() {
  const row = experienceData;
  const doubled = [...row, ...row];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-row overflow-hidden py-2">
        <div className="flex w-max gap-4 animate-marquee-left">
          {doubled.map((item, i) => (
            <LogoChip key={`row1-${item.company}-${i}`} item={item} />
          ))}
        </div>
      </div>
      <div className="marquee-row overflow-hidden py-2 mt-4">
        <div className="flex w-max gap-4 animate-marquee-right">
          {[...doubled].reverse().map((item, i) => (
            <LogoChip key={`row2-${item.company}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
