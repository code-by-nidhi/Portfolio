import { Mail } from "lucide-react";
import { GithubMark, LinkedinMark } from "@/components/ui/brand-icons";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Sparkle } from "@/components/ui/sparkle";
import { profile } from "@/data/profile";
import {
  aptitudes,
  experiences,
  formations,
  hobbies,
  type ResumeEntry,
} from "@/data/resume";

/** `✦ HEADING` — the panel's only heading level. */
function PanelHeading({ children }: { children: string }) {
  return (
    <h3 className="flex items-center gap-2 font-wordmark text-sm font-bold uppercase tracking-[0.18em] text-ivory">
      <Sparkle className="size-3 shrink-0 text-lilac" />
      {children}
    </h3>
  );
}

function EntryList({ entries }: { entries: ResumeEntry[] }) {
  return (
    <ol className="mt-5 space-y-5">
      {entries.map((entry) => (
        <li key={`${entry.period}-${entry.role}`}>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-lilac">
            {entry.period}
          </p>
          <p className="mt-1.5 text-sm font-semibold text-ivory">
            {entry.role}
          </p>
          <p className="text-xs text-ivory/55">{entry.org}</p>
          <ul className="mt-2 space-y-1">
            {entry.points.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-xs leading-relaxed text-ivory/70"
              >
                <span
                  aria-hidden
                  className="mt-1.5 size-1 shrink-0 rounded-full bg-ivory/40"
                />
                {point}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

const CONTACTS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    mark: "mail",
  },
  {
    label: "GitHub",
    value: "code-by-nidhi",
    href: profile.github,
    mark: "github",
  },
  {
    label: "LinkedIn",
    value: "nidhi-mamman",
    href: profile.linkedin,
    mark: "linkedin",
  },
] as const;

export function Resume() {
  return (
    <section id="resume" className="scene relative px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="mx-auto max-w-6xl">
        {/* The dark slab the reference is built on. `.card-3d` is a light
            surface, so this panel carries its own depth instead. */}
        <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-10 shadow-[0_28px_70px_-30px_rgba(38,34,49,0.65)] sm:px-10 sm:py-12">
          <Sparkle className="absolute right-8 top-8 size-4 text-ivory/25" />
          <Sparkle className="absolute bottom-10 left-8 size-3 text-ivory/20" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
            {/* ---------- Column 1 ---------- */}
            <div className="lg:pr-10">
              <PanelHeading>Experiences</PanelHeading>
              <EntryList entries={experiences} />
            </div>

            {/* ---------- Column 2 ---------- */}
            <div className="lg:border-l lg:border-ivory/12 lg:px-10">
              <PanelHeading>Formations</PanelHeading>
              <EntryList entries={formations} />

              <div className="mt-10">
                <PanelHeading>Aptitudes</PanelHeading>
                <RevealGroup className="mt-5 flex flex-wrap gap-2">
                  {aptitudes.map((tool) => (
                    <RevealItem key={tool}>
                      <span className="inline-flex rounded-full border border-ivory/25 px-3 py-1 text-[0.68rem] uppercase tracking-[0.1em] text-ivory/75">
                        {tool}
                      </span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </div>

            {/* ---------- Column 3 ---------- */}
            <div className="md:col-span-2 lg:col-span-1 lg:border-l lg:border-ivory/12 lg:pl-10">
              <PanelHeading>Hobbies</PanelHeading>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.label}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-ivory/12 bg-ivory/5 px-2 py-4"
                  >
                    <Icon name={hobby.icon} className="size-5 text-ivory/80" />
                    <span className="text-[0.7rem] text-ivory/70">
                      {hobby.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <PanelHeading>Contact</PanelHeading>
                <ul className="mt-5 space-y-3">
                  {CONTACTS.map((contact) => (
                    <li key={contact.label}>
                      <a
                        href={contact.href}
                        target={contact.mark === "mail" ? undefined : "_blank"}
                        rel={contact.mark === "mail" ? undefined : "noreferrer"}
                        className="group flex items-center gap-3 rounded-xl border border-ivory/12 px-3 py-2.5 transition-colors hover:border-ivory/35 hover:bg-ivory/5"
                      >
                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-ivory/10 text-ivory/80">
                          {contact.mark === "mail" ? (
                            <Mail className="size-4" strokeWidth={1.7} />
                          ) : contact.mark === "github" ? (
                            <GithubMark className="size-4" />
                          ) : (
                            <LinkedinMark className="size-4" />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ivory/45">
                            {contact.label}
                          </span>
                          <span className="block truncate text-xs text-ivory/85">
                            {contact.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
