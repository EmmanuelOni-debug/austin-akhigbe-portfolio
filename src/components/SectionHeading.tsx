import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <div
        className={`flex items-center gap-3 mb-5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
