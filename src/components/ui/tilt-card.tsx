"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card that tilts toward the pointer. Children given `translateZ` separate in
 * depth, because the card preserves its 3D context.
 */
export function TiltCard({
  children,
  className,
  intensity = 9,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees. */
  intensity?: number;
  glare?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  // Pointer position within the card, normalised to 0–1.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), spring);

  const glareX = useSpring(useTransform(px, [0, 1], [12, 88]), spring);
  const glareY = useSpring(useTransform(py, [0, 1], [4, 84]), spring);
  const glareBackground = useMotionTemplate`radial-gradient(380px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.9), rgba(255,255,255,0) 62%)`;

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - bounds.left) / bounds.width);
    py.set((event.clientY - bounds.top) / bounds.height);
  }

  function recentre() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={recentre}
      style={reduceMotion ? undefined : { rotateX, rotateY }}
      className={cn(
        "card-3d group relative h-full [transform-style:preserve-3d]",
        className,
      )}
    >
      {glare && !reduceMotion ? (
        <motion.span
          aria-hidden
          style={{ background: glareBackground }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-70"
        />
      ) : null}
      {children}
    </motion.div>
  );
}
