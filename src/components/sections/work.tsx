"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { accentStyles } from "@/components/ui/accent";
import { GithubMark } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { EASE_OUT_QUINT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Discipline } from "@/types";

type Filter = Discipline | "all";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "engineering", label: "Development" },
  { id: "analytics", label: "Analysis" },
];

export function Work() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.discipline === filter);

  return (
    <section id="work" className="scene relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Things I built, and what they taught me"
              description="Production-style applications and analysis projects. Each one started as a real problem rather than a tutorial."
            />

            <div
              role="tablist"
              aria-label="Filter projects"
              className="flex shrink-0 flex-wrap gap-1 rounded-2xl border border-hairline bg-surface p-1.5 shadow-[0_4px_0_rgba(230,224,238,1)]"
            >
              {FILTERS.map((option) => (
                <button
                  key={option.id}
                  role="tab"
                  type="button"
                  aria-selected={filter === option.id}
                  onClick={() => setFilter(option.id)}
                  className={cn(
                    "relative rounded-xl px-3 py-2.5 text-xs transition-colors sm:px-4 sm:text-sm",
                    filter === option.id
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink-soft",
                  )}
                >
                  {filter === option.id ? (
                    <motion.span
                      layoutId="work-filter-pill"
                      className="absolute inset-0 rounded-xl bg-lilac-mist"
                      transition={{ duration: 0.35, ease: EASE_OUT_QUINT }}
                    />
                  ) : null}
                  <span className="relative">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="mt-14 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const accent = accentStyles[project.accent];

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: EASE_OUT_QUINT }}
                  className="[transform-style:preserve-3d]"
                >
                  <TiltCard intensity={7} className="flex h-full flex-col p-7">
                    <div
                      className="preserve-3d flex h-full flex-col"
                      style={{ transform: "translateZ(26px)" }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p
                            className={cn(
                              "font-mono text-[0.7rem] uppercase tracking-[0.2em]",
                              accent.text,
                            )}
                          >
                            {project.category}
                          </p>
                          <h3 className="mt-2 font-display text-2xl leading-snug text-ink">
                            {project.title}
                          </h3>
                        </div>
                        <span className="shrink-0 rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.65rem] text-ink-muted">
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                        {project.summary}
                      </p>

                      {project.metrics ? (
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          {project.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className={cn("rounded-xl px-4 py-3", accent.mist)}
                            >
                              <p className={cn("font-display text-xl", accent.text)}>
                                {metric.value}
                              </p>
                              <p className="mt-0.5 text-[0.7rem] text-ink-muted">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <ul className="mt-6 space-y-2">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm text-ink-soft"
                          >
                            <span
                              aria-hidden
                              className={cn(
                                "mt-1.5 size-1.5 shrink-0 rounded-full",
                                accent.solid,
                              )}
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-hairline px-2 py-0.5 font-mono text-[0.68rem] text-ink-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.repoUrl || project.liveUrl ? (
                          <div className="mt-5 flex gap-2 border-t border-hairline pt-5">
                            {project.repoUrl ? (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="btn-3d btn-3d-soft px-3.5 py-2 text-xs font-medium"
                              >
                                <GithubMark className="size-3.5" />
                                Source
                              </a>
                            ) : null}
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="btn-3d btn-3d-soft px-3.5 py-2 text-xs font-medium"
                              >
                                <ExternalLink
                                  className="size-3.5"
                                  strokeWidth={1.8}
                                />
                                Live
                              </a>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </TiltCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-12" delay={0.1}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 py-2 text-sm text-ink-soft transition-colors hover:text-lilac-deep"
          >
            More on GitHub
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.8}
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
