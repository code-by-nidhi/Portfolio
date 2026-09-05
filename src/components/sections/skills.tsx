import { accentStyles } from "@/components/ui/accent";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="scene relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="What I reach for"
            description="Grouped by the job rather than the logo — the tools change, the thinking behind them mostly doesn't."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const accent = accentStyles[group.accent];

            return (
              <RevealItem key={group.category}>
                <div className="card-3d h-full p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex size-10 items-center justify-center rounded-xl",
                        accent.mist,
                        accent.text,
                      )}
                    >
                      <Icon name={group.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-ink">
                        {group.category}
                      </h3>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                        {group.discipline === "engineering"
                          ? "Development"
                          : "Analysis"}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-hairline bg-ivory px-2.5 py-1 text-xs text-ink-soft shadow-[0_2px_0_rgba(230,224,238,0.9)]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
