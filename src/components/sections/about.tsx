import { MapPin } from "lucide-react";
import { IdBadge } from "@/components/ui/id-badge";
import { PortraitSlot } from "@/components/ui/portrait-slot";
import { Reveal } from "@/components/ui/reveal";
import { Sparkle } from "@/components/ui/sparkle";
import { profile } from "@/data/profile";

/** The two things the whole practice sits on, as marker-pen tags. */
const INTERESTS = [
  { label: "MERN Development", filled: true },
  { label: "Data Analytics", filled: false },
];

export function About() {
  return (
    // One screen, and the top padding keeps the content clear of the fixed
    // header. `min-h` rather than `h`, so a narrow phone can still grow past
    // the viewport instead of clipping the badge.
    <section
      id="about"
      className="scene relative flex min-h-svh items-center overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* ---------- Left: the note card ---------- */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="card-3d relative overflow-hidden bg-ivory">
                <div className="relative z-[1] px-6 py-8 sm:px-10 sm:py-10">
                  {/* Loose sparkles, the way the reference scatters them. */}
                  <Sparkle className="absolute right-8 top-6 size-5 text-lilac" />
                  <Sparkle className="absolute right-16 top-14 size-2.5 text-mint" />
                  <Sparkle className="absolute bottom-8 right-10 size-3 text-sand" />

                  <h2 className="flex items-start gap-2 font-wordmark text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">
                    <Sparkle className="mt-1 size-6 shrink-0 text-ink sm:size-7" />
                    HELLO&nbsp;!
                  </h2>

                  <p className="mt-5 max-w-md font-display text-lg leading-snug text-ink sm:text-xl">
                    I&rsquo;m {profile.name} &amp; I&rsquo;m a {profile.role}.
                  </p>

                  <div className="mt-5 max-w-md space-y-3 text-sm leading-relaxed text-ink-soft">
                    <p>{profile.bio}</p>
                    <p>{profile.aboutSecondary}</p>
                  </div>

                  <p className="mt-6 inline-flex items-center gap-2 text-xs text-ink-muted">
                    <MapPin
                      className="size-4 text-lilac-deep"
                      strokeWidth={1.7}
                    />
                    {profile.location}
                  </p>

                  {/* ---------- Interests, as the reference's tag row ---------- */}
                  <div className="mt-7 border-t border-hairline pt-5">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-muted">
                      Domain of interest:
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {INTERESTS.map((interest) => (
                        <span
                          key={interest.label}
                          className={
                            interest.filled
                              ? "rounded-full bg-ink px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ivory"
                              : "rounded-full border border-ink px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink"
                          }
                        >
                          {interest.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------- Right: where the portrait lands ---------- */}
          {/* On small screens the portrait leads the section, so its flight
              lands somewhere the visitor can actually see. From `lg` up the
              badge is also capped against the viewport height, which is what
              lets the whole section sit inside one screen on a short laptop. */}
          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <Reveal>
              <div className="w-full max-w-[21rem] lg:max-w-[min(21rem,34vh)]">
                <IdBadge>
                  <PortraitSlot variant="about" />
                </IdBadge>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
