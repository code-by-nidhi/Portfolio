import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Override the headline scale where a section has to fit one screen. */
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink-muted",
        )}
      >
        <span className="h-px w-6 bg-lilac" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl md:text-[2.75rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}
