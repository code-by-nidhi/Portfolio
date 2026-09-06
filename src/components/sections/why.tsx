"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { accentStyles } from "@/components/ui/accent";
import { Reveal } from "@/components/ui/reveal";
import { reasons, type Reason } from "@/data/why";
import { cn } from "@/lib/utils";

const COUNT = reasons.length;
/** Cards arrive two at a time, one from each side. */
const PAIRS = Math.ceil(COUNT / 2);

/** Scroll distance, in vh, spent on each pair. */
const SCROLL_PER_PAIR = 100;
const SECTION_VH = 100 + PAIRS * SCROLL_PER_PAIR;

/**
 * Where the last pair comes to rest. The stretch between this and 1 is a beat
 * with the pair sitting still, so the section unpins on settled cards rather
 * than mid-flight.
 */
const SETTLED_AT = 0.88;

/** Share of a pair's turn spent held still before the swap begins, and the
 * point by which the next pair has fully arrived. */
const HOLD_UNTIL = 0.5;
const SWAP_BY = 0.9;

/** How far off-stage a card waits before it is called in. */
const RUN_UP = 520;

/**
 * Distance from this card's pair to the pair currently centre stage.
 * `0` is on stage, positive is still waiting in the wings, negative has been
 * handed over.
 *
 * A pair spends most of its turn sitting perfectly still — the swap only
 * starts at `HOLD_UNTIL` and is over by `SWAP_BY`. That standing time is the
 * reading time, so it is the number to raise if the cards feel rushed.
 */
function usePairOffset(progress: MotionValue<number>, pair: number) {
  return useTransform(progress, (p) => {
    const f = Math.min(p / SETTLED_AT, 1) * (PAIRS - 1);
    const index = Math.floor(f);
    const t = f - index;
    const ramp =
      t <= HOLD_UNTIL
        ? 0
        : t >= SWAP_BY
          ? 1
          : (t - HOLD_UNTIL) / (SWAP_BY - HOLD_UNTIL);
    return pair - (index + ramp * ramp * (3 - 2 * ramp));
  });
}

function ReasonCard({
  reason,
  index,
  progress,
}: {
  reason: Reason;
  index: number;
  progress: MotionValue<number>;
}) {
  const accent = accentStyles[reason.accent];
  const fromLeft = index % 2 === 0;
  const offset = usePairOffset(progress, Math.floor(index / 2));

  // 0 while off-stage, 1 once centre stage.
  const entry = useTransform(offset, (d) =>
    Math.max(0, Math.min(1, 1 - Math.max(0, d))),
  );

  // Decelerating run-in, so most of the travel happens while the card is still
  // faint and only the settling is watched.
  const x = useTransform(
    entry,
    (e) => (fromLeft ? -1 : 1) * RUN_UP * Math.pow(1 - e, 3),
  );
  // Arriving cards fade up as they converge; departing ones fade out where
  // they stand, which is what lets the next pair take the same spot.
  const opacity = useTransform(offset, (d) =>
    d >= 0 ? Math.max(0, 1 - d) : Math.max(0, 1 + d),
  );
  const scale = useTransform(offset, (d) =>
    d >= 0 ? 0.94 + 0.06 * Math.max(0, 1 - d) : 1 - 0.04 * -d,
  );
  // A card on its way out must not sit above the pair replacing it.
  const zIndex = useTransform(offset, (d) => (d >= 0 ? 20 : 10));

  return (
    <motion.li
      style={{ x, opacity, scale, zIndex }}
      className={cn(
        "absolute left-0 h-[calc(50%-0.375rem)] w-full sm:h-full sm:w-[calc(50%-0.375rem)]",
        fromLeft
          ? "top-0"
          : "bottom-0 sm:bottom-auto sm:left-auto sm:right-0 sm:top-0",
      )}
    >
      <div className="card-3d flex h-full flex-col p-4 sm:p-5">
        <span
          className={cn(
            "inline-flex size-9 shrink-0 items-center justify-center rounded-xl font-mono text-[0.7rem] font-bold sm:size-10",
            accent.mist,
            accent.text,
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mt-3 font-display text-base leading-snug text-ink sm:mt-4 sm:text-lg">
          {reason.title}
        </h3>
        <p className="mt-1.5 text-[0.8rem] leading-snug text-ink-soft sm:text-sm">
          {reason.lead}
        </p>
        {reason.detail ? (
          <p className="mt-2 hidden text-xs leading-relaxed text-ink-muted sm:block">
            {reason.detail}
          </p>
        ) : null}
      </div>
    </motion.li>
  );
}

/** One tick per pair, marking which is on stage. */
function PairTick({
  pair,
  progress,
}: {
  pair: number;
  progress: MotionValue<number>;
}) {
  const offset = usePairOffset(progress, pair);
  const opacity = useTransform(offset, (d) =>
    Math.max(0.2, 1 - Math.abs(d) * 0.9),
  );
  const scaleX = useTransform(offset, (d) =>
    Math.max(0.4, 1 - Math.abs(d) * 0.55),
  );

  return (
    <motion.span
      style={{ opacity, scaleX }}
      className="h-0.5 w-8 rounded-full bg-ink"
    />
  );
}

export function Why() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const intro = (
    <>
      <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink-muted">
        <span className="h-px w-6 bg-lilac" />
        Why work with me
      </span>
      <h2 className="mt-3 font-display text-2xl leading-tight text-ink sm:mt-4 sm:text-3xl lg:text-4xl">
        Good code is important. A good freelance experience is too.
      </h2>
      <p className="mt-3 max-w-md text-xs leading-relaxed text-ink-soft sm:mt-4 sm:text-sm lg:text-base">
        I focus on understanding what you actually need, building a solution
        that works for your users, and keeping the process clear from start to
        finish.
      </p>
    </>
  );

  /** Static layout for the reduced-motion and no-pin case. */
  const plainList = (
    <ul className="grid gap-3 sm:grid-cols-2">
      {reasons.map((reason, index) => {
        const accent = accentStyles[reason.accent];

        return (
          <li key={reason.title}>
            <div className="card-3d flex h-full flex-col p-5">
              <span
                className={cn(
                  "inline-flex size-10 shrink-0 items-center justify-center rounded-xl font-mono text-[0.7rem] font-bold",
                  accent.mist,
                  accent.text,
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg leading-snug text-ink">
                {reason.title}
              </h3>
              <p className="mt-1.5 text-sm leading-snug text-ink-soft">
                {reason.lead}
              </p>
              {reason.detail ? (
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {reason.detail}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );

  if (reduceMotion) {
    return (
      <section id="why" className="scene relative px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>{intro}</div>
          {plainList}
        </div>
      </section>
    );
  }

  return (
    <section
      id="why"
      ref={sectionRef}
      className="scene relative"
      style={{ height: `${SECTION_VH}vh` }}
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden px-4 pb-6 pt-20 sm:px-6 lg:py-0">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>{intro}</Reveal>

          {/* ---------- The stage every pair converges on ---------- */}
          <div>
            <ul className="relative h-[22rem] sm:h-[15rem] lg:h-[16rem]">
              {reasons.map((reason, index) => (
                <ReasonCard
                  key={reason.title}
                  reason={reason}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </ul>

            <div className="mt-6 flex justify-center gap-1.5">
              {Array.from({ length: PAIRS }, (_, pair) => (
                <PairTick key={pair} pair={pair} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
