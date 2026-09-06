"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

// The hero slot is sized from the viewport rather than with `h-full`: it is an
// empty box, so a percentage height would resolve against a flex-grown parent
// whose own height is `auto` and collapse to zero. The about slot is the photo
// window of the ID badge, so it takes its width from the card.
const SLOT_STYLES = {
  hero: "h-[38vh] aspect-[905/1198] shrink-0 sm:h-[min(29rem,52vh)]",
  about: "w-full aspect-[905/1198] overflow-hidden",
} as const;

/**
 * A placeholder box marking where the portrait should sit. `PortraitFlight`
 * measures these two boxes every frame and interpolates between them, so the
 * single fixed portrait appears to travel from the hero into the About section.
 *
 * Both boxes share the portrait's aspect ratio, which is what lets the flight
 * interpolate width alone and still land exactly.
 *
 * When the visitor prefers reduced motion there is no flight, so each slot
 * renders the portrait itself and it simply appears in both places.
 */
export function PortraitSlot({ variant }: { variant: "hero" | "about" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div data-portrait-slot={variant} className={SLOT_STYLES[variant]}>
      {reduceMotion ? (
        <Image
          src="/portrait.png"
          alt={`${profile.name}, ${profile.role}`}
          width={905}
          height={1198}
          priority={variant === "hero"}
          sizes="(max-width: 640px) 70vw, 24rem"
          className={
            variant === "hero"
              ? "h-full w-full object-contain [mask-image:linear-gradient(to_bottom,#000_88%,transparent)]"
              : "h-full w-full object-contain"
          }
        />
      ) : null}

      {variant === "about" ? (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait.png"
            alt={`${profile.name}, ${profile.role}`}
            width={905}
            height={1198}
            className="h-full w-full object-contain"
          />
        </noscript>
      ) : null}
    </div>
  );
}
