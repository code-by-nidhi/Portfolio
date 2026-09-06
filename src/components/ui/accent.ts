import type { Track } from "@/types";

/**
 * Tailwind scans source for literal class names, so every accent variant is
 * spelled out here rather than interpolated at call sites.
 */
export const accentStyles: Record<
  Track["accent"],
  {
    mist: string;
    text: string;
    solid: string;
    ring: string;
    glow: string;
    /** Marker-pen stripe behind a label, so the eye can skim the section. */
    highlight: string;
  }
> = {
  lilac: {
    highlight:
      "bg-[linear-gradient(transparent_22%,var(--color-lilac)_22%,var(--color-lilac)_94%,transparent_94%)]",
    mist: "bg-lilac-mist",
    text: "text-lilac-deep",
    solid: "bg-lilac",
    ring: "ring-lilac/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(110,95,176,0.55)]",
  },
  mint: {
    highlight:
      "bg-[linear-gradient(transparent_22%,var(--color-mint)_22%,var(--color-mint)_94%,transparent_94%)]",
    mist: "bg-mint-mist",
    text: "text-mint-deep",
    solid: "bg-mint",
    ring: "ring-mint/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(61,138,114,0.5)]",
  },
  blush: {
    highlight:
      "bg-[linear-gradient(transparent_22%,var(--color-blush)_22%,var(--color-blush)_94%,transparent_94%)]",
    mist: "bg-blush-mist",
    text: "text-blush-deep",
    solid: "bg-blush",
    ring: "ring-blush/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(180,95,108,0.5)]",
  },
  sky: {
    highlight:
      "bg-[linear-gradient(transparent_22%,var(--color-sky)_22%,var(--color-sky)_94%,transparent_94%)]",
    mist: "bg-sky-mist",
    text: "text-sky-deep",
    solid: "bg-sky",
    ring: "ring-sky/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(70,115,159,0.5)]",
  },
  sand: {
    highlight:
      "bg-[linear-gradient(transparent_22%,var(--color-sand)_22%,var(--color-sand)_94%,transparent_94%)]",
    mist: "bg-sand-mist",
    text: "text-sand-deep",
    solid: "bg-sand",
    ring: "ring-sand/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(161,120,60,0.5)]",
  },
};
