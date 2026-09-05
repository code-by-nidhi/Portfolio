"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PointerEvent } from "react";
import { PortraitSlot } from "@/components/ui/portrait-slot";
import { profile } from "@/data/profile";
import { EASE_OUT_QUINT } from "@/lib/motion";

/**
 * The wordmark, letter by letter. `side` decides which edge it flies in from,
 * `drop` offsets its baseline and `tilt` is where it comes to rest — together
 * they give the hand-set look of the reference layout.
 *
 * `gap` opens space around the two letters that straddle the centre, so the
 * portrait's head lands between them instead of swallowing one.
 */
const WORDMARK = [
  { char: "P", side: "left", size: "1em", drop: "0em", tilt: -5, gap: "0em" },
  { char: "o", side: "left", size: "0.78em", drop: "0.16em", tilt: 6, gap: "0em" },
  { char: "R", side: "left", size: "1.04em", drop: "-0.03em", tilt: -3, gap: "0em" },
  { char: "T", side: "left", size: "0.95em", drop: "0.02em", tilt: 7, gap: "0.2em" },
  { char: "f", side: "right", size: "1.08em", drop: "-0.05em", tilt: -6, gap: "0.2em" },
  { char: "o", side: "right", size: "0.74em", drop: "0.18em", tilt: 4, gap: "0em" },
  { char: "L", side: "right", size: "0.98em", drop: "0em", tilt: -4, gap: "0em" },
  { char: "i", side: "right", size: "0.72em", drop: "0.14em", tilt: 8, gap: "0em" },
  { char: "O", side: "right", size: "1.06em", drop: "-0.02em", tilt: -6, gap: "0em" },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  // Pointer position across the hero, normalised to -0.5 … 0.5. The wordmark
  // and the portrait move by different amounts, which is what reads as depth.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 70, damping: 20, mass: 1 };

  const wordX = useSpring(useTransform(mx, [-0.5, 0.5], [26, -26]), spring);
  const wordY = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), spring);
  const portraitX = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), spring);

  function handleMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - bounds.left) / bounds.width - 0.5);
    my.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function recentre() {
    mx.set(0);
    my.set(0);
  }

  return (
    // min-h-svh + flex means the hero occupies exactly the first screen, so
    // nothing from the next section peeks in before the visitor scrolls.
    <section
      id="top"
      onPointerMove={handleMove}
      onPointerLeave={recentre}
      className="scene relative flex min-h-svh flex-col overflow-hidden px-4 pb-8 pt-20 sm:px-6 sm:pt-28"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col">
        {/* The visible wordmark is decorative, so the page's real heading is
            here for search engines and screen readers. */}
        <h1 className="sr-only">
          {profile.name} — {profile.role}
        </h1>

        {/* Editorial marks from the reference layout */}
        <span
          aria-hidden
          className="absolute -left-4 top-0 hidden h-px w-16 bg-ink lg:block"
        />
        <span
          aria-hidden
          className="absolute -left-10 bottom-28 hidden size-40 rounded-full border border-hairline lg:block"
        />

        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-end">
          {/* ---------- Wordmark, behind the portrait ---------- */}
          <motion.div
            aria-hidden
            style={reduceMotion ? undefined : { x: wordX, y: wordY }}
            // On phones the wordmark sits in normal flow above the portrait.
            // Overlapping there is not survivable: the portrait is anchored to
            // the bottom of the space, so on a short viewport it grows upward
            // over the letters. From `sm` up there is room to overlap again.
            className="pointer-events-none relative z-0 flex w-full justify-center sm:absolute sm:inset-x-0 sm:top-0"
          >
            <p className="relative flex items-start font-wordmark text-[clamp(3.25rem,17vw,12rem)] font-extrabold leading-[0.82] tracking-[-0.04em] text-ink">
              {WORDMARK.map((letter, index) => {
                const fromLeft = letter.side === "left";
                const enterX = fromLeft ? "-58vw" : "58vw";
                const enterRotate = fromLeft ? -28 : 28;
                const delay = 0.06 * index;

                return (
                  <motion.span
                    key={`${letter.char}-${index}`}
                    className="inline-block"
                    style={{
                      fontSize: letter.size,
                      marginTop: letter.drop,
                      [fromLeft ? "marginRight" : "marginLeft"]: letter.gap,
                    }}
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { x: enterX, opacity: 0, rotate: enterRotate, y: 0 }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : {
                            x: 0,
                            opacity: 1,
                            // The wiggle: overshoot past rest, settle back.
                            rotate: [
                              enterRotate,
                              letter.tilt - 9,
                              letter.tilt + 5,
                              letter.tilt,
                            ],
                            y: [0, fromLeft ? -18 : -12, 7, 0],
                          }
                    }
                    transition={
                      reduceMotion
                        ? { duration: 0.4, delay }
                        : {
                            x: {
                              duration: 1.35,
                              delay,
                              ease: EASE_OUT_QUINT,
                            },
                            opacity: { duration: 0.5, delay },
                            rotate: {
                              duration: 1.7,
                              delay,
                              times: [0, 0.48, 0.76, 1],
                              ease: "easeOut",
                            },
                            y: {
                              duration: 1.7,
                              delay,
                              times: [0, 0.45, 0.75, 1],
                              ease: "easeInOut",
                            },
                          }
                    }
                  >
                    {letter.char}
                  </motion.span>
                );
              })}

              <motion.span
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.95, ease: EASE_OUT_QUINT }}
                className="absolute -right-1 -top-1 font-sans text-[0.16em] font-bold tracking-tight text-ink sm:-right-6 sm:-top-3"
              >
                &rsquo;26
              </motion.span>
            </p>
          </motion.div>

          {/* ---------- Portrait slot, in front ----------
              The portrait itself is rendered by `PortraitFlight`, which tracks
              this box until the About section pulls it away. Only a translate
              is applied here so the measured rect stays exact. */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE_OUT_QUINT }}
            style={reduceMotion ? undefined : { x: portraitX }}
            className="relative z-10 flex min-h-0 w-full flex-1 items-end justify-center"
          >
            <PortraitSlot variant="hero" />
          </motion.div>
        </div>

        {/* ---------- Supporting copy ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease: EASE_OUT_QUINT }}
          className="relative z-20 mt-8 flex shrink-0 flex-col gap-6 border-t border-hairline pt-6 md:flex-row md:items-end md:justify-between lg:border-t-0 lg:pt-0"
        >
          <div className="max-w-sm">
            <span className="inline-flex items-center gap-2 text-xs text-ink-soft">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-mint-deep" />
              </span>
              {profile.availability}
            </span>
            <p className="mt-3 font-display text-xl leading-snug text-ink">
              {profile.role}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {profile.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="btn-3d px-5 py-3 text-sm font-medium text-ivory"
            >
              View selected work
              <ArrowRight className="size-4" strokeWidth={1.8} />
            </a>
            <a
              href="#contact"
              className="btn-3d btn-3d-soft px-5 py-3 text-sm font-medium"
            >
              Start a conversation
              <ArrowUpRight className="size-4" strokeWidth={1.8} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
