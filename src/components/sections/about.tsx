import { MapPin } from "lucide-react";
import { accentStyles } from "@/components/ui/accent";
import { Icon } from "@/components/ui/icon";
import { IdBadge } from "@/components/ui/id-badge";
import { PortraitSlot } from "@/components/ui/portrait-slot";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutFacts } from "@/data/about";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="scene relative pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* ---------- Left: who I am ---------- */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionHeading eyebrow="About me" title={profile.aboutTitle} />
            </Reveal>

            <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2">
              {aboutFacts.map((fact) => {
                const accent = accentStyles[fact.accent];

                return (
                  <RevealItem key={fact.label}>
                    <div className="card-3d h-full p-4 transition-transform duration-500 hover:-translate-y-1">
                      <div className="flex gap-3">
                        <span
                          className={cn(
                            "inline-flex size-9 shrink-0 items-center justify-center rounded-xl",
                            accent.mist,
                            accent.text,
                          )}
                        >
                          <Icon name={fact.icon} className="size-4.5" />
                        </span>
                        <div>
                          <h3 className="font-display text-base leading-snug text-ink">
                            {fact.label}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                            {fact.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-hairline pt-6">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl text-ink">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-ink-muted">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink-muted">
                <MapPin className="size-4 text-lilac-deep" strokeWidth={1.7} />
                {profile.location}
              </p>
            </Reveal>
          </div>

          {/* ---------- Right: where the portrait lands ---------- */}
          {/* On small screens the portrait leads the section, so its flight
              lands somewhere the visitor can actually see. */}
          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <Reveal>
              <IdBadge>
                <PortraitSlot variant="about" />
              </IdBadge>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
