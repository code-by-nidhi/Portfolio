import type { Track } from "@/types";

/**
 * Tailwind scans source for literal class names, so every accent variant is
 * spelled out here rather than interpolated at call sites.
 */
export const accentStyles: Record<
  Track["accent"],
  { mist: string; text: string; solid: string; ring: string; glow: string }
> = {
  lilac: {
    mist: "bg-lilac-mist",
    text: "text-lilac-deep",
    solid: "bg-lilac",
    ring: "ring-lilac/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(110,95,176,0.55)]",
  },
  mint: {
    mist: "bg-mint-mist",
    text: "text-mint-deep",
    solid: "bg-mint",
    ring: "ring-mint/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(61,138,114,0.5)]",
  },
  blush: {
    mist: "bg-blush-mist",
    text: "text-blush-deep",
    solid: "bg-blush",
    ring: "ring-blush/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(180,95,108,0.5)]",
  },
  sky: {
    mist: "bg-sky-mist",
    text: "text-sky-deep",
    solid: "bg-sky",
    ring: "ring-sky/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(70,115,159,0.5)]",
  },
  sand: {
    mist: "bg-sand-mist",
    text: "text-sand-deep",
    solid: "bg-sand",
    ring: "ring-sand/45",
    glow: "shadow-[0_18px_40px_-18px_rgba(161,120,60,0.5)]",
  },
};
