import { tracks } from "@/data/tracks";
import { accentStyles } from "@/components/ui/accent";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

export function Practice() {
  return (
    <section id="practice" className="scene relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The practice"
            title="Two disciplines that keep answering each other"
            description="Engineering gives the data somewhere to live. Analysis gives it a reason to be there. I work across both, which means fewer handoffs and far fewer lost details."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {tracks.map((track) => {
            const accent = accentStyles[track.accent];

            return (
              <RevealItem key={track.id}>
                <TiltCard className="p-7 sm:p-8">
                  <div
                    className="preserve-3d"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex size-12 items-center justify-center rounded-2xl ${accent.mist} ${accent.text} ${accent.glow}`}
                      >
                        <Icon name={track.icon} className="size-6" />
                      </span>
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-ink-muted">
                        {track.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl text-ink">
                      {track.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {track.summary}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
                      {track.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex gap-3 text-sm text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className={`mt-1.5 size-1.5 shrink-0 rounded-full ${accent.solid}`}
                          />
                          {capability}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {track.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`rounded-lg ${accent.mist} px-2.5 py-1 font-mono text-[0.7rem] ${accent.text}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
