import { accentStyles } from "@/components/ui/accent";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline } from "@/data/experience";
import { cn } from "@/lib/utils";

export function Journey() {
  return (
    <section id="journey" className="scene relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="How the two halves came together"
          />
        </Reveal>

        <RevealGroup className="relative mt-14 max-w-3xl">
          {/* Spine */}
          <span
            aria-hidden
            className="absolute left-[1.4rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-lilac via-mint to-transparent sm:block"
          />

          {timeline.map((entry) => {
            const accent = accentStyles[entry.accent];

            return (
              <RevealItem key={entry.id} className="relative pb-8 last:pb-0">
                <div className="flex gap-5">
                  <span
                    className={cn(
                      "relative z-10 hidden size-11 shrink-0 items-center justify-center rounded-2xl border border-hairline bg-surface sm:inline-flex",
                      accent.text,
                      accent.glow,
                    )}
                  >
                    <Icon name={entry.icon} className="size-5" />
                  </span>

                  <div className="card-3d flex-1 p-6 transition-transform duration-500 hover:-translate-y-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.16em]",
                          accent.mist,
                          accent.text,
                        )}
                      >
                        {entry.period}
                      </span>
                      <span className="text-xs text-ink-muted">
                        {entry.organisation}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-xl text-ink">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
