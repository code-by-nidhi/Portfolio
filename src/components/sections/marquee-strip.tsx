import { marqueeItems } from "@/data/navigation";

/** Continuous tech ribbon, tipped back slightly so it reads as a surface. */
export function MarqueeStrip() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section aria-label="Technologies" className="scene-near relative py-6">
      <div
        className="border-y border-hairline bg-surface/70 py-5 backdrop-blur-sm"
        style={{ transform: "rotateX(6deg)" }}
      >
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-10 pr-10">
            {doubled.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.18em] text-ink-muted"
              >
                {item}
                <span aria-hidden className="size-1.5 rounded-full bg-lilac" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
