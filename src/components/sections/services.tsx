"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { accentStyles } from "@/components/ui/accent";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

const COUNT = services.length;

/**
 * Scroll distance, in vh, spent on each card hand-over. The section stands
 * this much taller than the screen it pins against, which is what gives the
 * deck something to scrub through before the page moves on.
 */
const SCROLL_PER_CARD = 45;
const SECTION_VH = 100 + (COUNT - 1) * SCROLL_PER_CARD;

/**
 * How far a card still is from the front, counting down to `0`. Negative once
 * it has been passed. Drives the ticks, which read straight through 1..6.
 */
function useDeckPosition(progress: MotionValue<number>, index: number) {
  return useTransform(progress, (p) => index - p * (COUNT - 1));
}

/**
 * The card's seat in the fan: `0` is face-on, `COUNT - 1` is the deepest.
 * Cyclic, so a card leaving the front comes back round to the back of the fan
 * rather than being flung aside — the deck reads as the same tidy spread at
 * every scroll position instead of thinning into loose translucent strays.
 */
function useDeckSlot(progress: MotionValue<number>, index: number) {
  return useTransform(progress, (p) => {
    const front = p * (COUNT - 1);
    return (((index - front) % COUNT) + COUNT) % COUNT;
  });
}

function DeckCard({
  service,
  index,
  progress,
}: {
  service: Service;
  index: number;
  progress: MotionValue<number>;
}) {
  const accent = accentStyles[service.accent];
  const slot = useDeckSlot(progress, index);

  // The last slot of the cycle is the card crossing from the front round to
  // the back. It is parked at the deepest seat and held invisible for that
  // stretch — and because it is directly behind the card taking its place,
  // the swap is never seen.
  const seat = useTransform(slot, (u) => Math.min(u, COUNT - 1));

  // The fan pivots just under the card, so the spread stays upright instead
  // of swinging the back of the deck down and off the layout. Rotation is
  // kept shallow and the horizontal offset does more of the fanning.
  const rotate = useTransform(seat, (u) => 4 - 7.5 * u);
  const x = useTransform(seat, (u) => -24 * u);
  const y = useTransform(seat, (u) => -5 * u);
  const scale = useTransform(seat, (u) => 1 - 0.03 * u);
  // Deep seats fade out, so a card re-entering at the back arrives from
  // nothing rather than popping in.
  const opacity = useTransform(slot, (u) =>
    u > COUNT - 1
      ? 0
      : Math.max(0, Math.min(1, 1 - Math.max(0, u - 3.2) * 0.55)),
  );
  // Distinct per card, front highest — no two cards can tie and render
  // through one another.
  const zIndex = useTransform(slot, (u) => 1000 - Math.round(u * 10));

  return (
    <motion.li
      style={{ rotate, x, y, scale, opacity, zIndex }}
      className="absolute h-[21rem] w-[16.5rem] origin-[50%_112%] sm:h-[23rem] sm:w-[18.5rem]"
    >
      <div className="card-3d flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <span
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-xl",
              accent.mist,
              accent.text,
            )}
          >
            <Icon name={service.icon} className="size-5" />
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(COUNT).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl leading-snug text-ink">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {service.detail}
        </p>

        <p className="mt-auto border-t border-hairline pt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-muted">
          {service.tech.join(" · ")}
        </p>
      </div>
    </motion.li>
  );
}

/** One tick per card, filling as its card reaches the front. */
function DeckTick({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const position = useDeckPosition(progress, index);
  const opacity = useTransform(position, (d) =>
    Math.max(0.2, 1 - Math.abs(d) * 0.8),
  );
  const scaleX = useTransform(position, (d) =>
    Math.max(0.4, 1 - Math.abs(d) * 0.5),
  );

  return (
    <motion.span
      style={{ opacity, scaleX }}
      className="h-0.5 w-7 rounded-full bg-ink"
    />
  );
}

function Deck({ progress }: { progress: MotionValue<number> }) {
  // The prompt retires once there is nothing left to deal.
  const hint = useTransform(progress, [0.82, 1], [1, 0]);

  return (
    <>
      <ul className="relative flex h-[23rem] items-center justify-center sm:h-[25rem]">
        {services.map((service, index) => (
          <DeckCard
            key={service.title}
            service={service}
            index={index}
            progress={progress}
          />
        ))}
      </ul>

      <div className="mt-6 flex justify-center gap-1.5">
        {services.map((service, index) => (
          <DeckTick key={service.title} index={index} progress={progress} />
        ))}
      </div>

      <motion.p
        style={{ opacity: hint }}
        className="mt-4 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted"
      >
        Scroll to deal
      </motion.p>
    </>
  );
}

/** Every card at once — the layout used when motion is unwelcome. */
function StaticGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => {
        const accent = accentStyles[service.accent];

        return (
          <li key={service.title}>
            <div className="card-3d h-full p-5">
              <span
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-xl",
                  accent.mist,
                  accent.text,
                )}
              >
                <Icon name={service.icon} className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg leading-snug text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {service.detail}
              </p>
              <p className="mt-4 border-t border-hairline pt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
                {service.tech.join(" · ")}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // 0 when the section locks to the top of the screen, 1 once its last card
  // is face-on and the page is free to carry on past it.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const intro = (
    <>
      <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink-muted">
        <span className="h-px w-6 bg-lilac" />
        Services
      </span>
      <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
        What I can build for you
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
        From responsive websites to complete web applications, I build practical
        digital solutions tailored to your goals, users, and business needs.
      </p>
    </>
  );

  // No pinning when motion is unwelcome — the section becomes an ordinary
  // block with every card laid out at once.
  if (reduceMotion) {
    return (
      <section id="services" className="scene relative px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {intro}
          <div className="mt-10">
            <StaticGrid />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="scene relative"
      style={{ height: `${SECTION_VH}vh` }}
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden px-4 sm:px-6">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* ---------- Left: the seated portrait ----------
              Hidden below `lg`: a full-length figure and the deck cannot both
              fit one screen on a phone, and the deck is the point here. */}
          <div className="hidden lg:block">
            <Image
              src="/sitting-pose-cutout.png"
              alt={`${profile.name} seated, arms folded`}
              width={1123}
              height={1401}
              sizes="30rem"
              className="mx-auto max-h-[72vh] w-auto object-contain"
            />
          </div>

          {/* ---------- Right: the pitch and the deck ---------- */}
          <div>
            <Reveal>{intro}</Reveal>
            <div className="mt-8 sm:translate-x-8 lg:translate-x-16">
              <Deck progress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
