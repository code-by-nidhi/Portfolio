import type { ReactNode } from "react";
import { profile } from "@/data/profile";

/** Fixed pattern — a random one would differ between server and client. */
const BARCODE = [3, 1, 2, 1, 4, 1, 1, 2, 3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 1, 2, 3,
  1, 1, 2, 4, 1, 3, 1, 2, 1];

/**
 * A lanyard ID card. `children` is the photo window, which is where the hero
 * portrait comes to rest — so the card stays upright: a rotated card's window
 * would no longer line up with the axis-aligned portrait tracking its rect.
 */
export function IdBadge({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full max-w-[20rem] flex-col items-center sm:max-w-[21rem]">
      {/* ---------- Lanyard ---------- */}
      <div aria-hidden className="relative -mb-2 flex h-44 w-full justify-center">
        {/* Woven strap, running up out of view */}
        <div className="relative h-[9rem] w-11 [mask-image:linear-gradient(to_bottom,transparent_0%,#000_16%)] bg-[linear-gradient(90deg,#b1a488_0%,#e2d9c5_42%,#c3b79c_70%,#a99c80_100%)] shadow-[0_3px_8px_rgba(38,34,49,0.16)]">
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0_3px,rgba(38,34,49,0.35)_3px_4px)]" />
          {/* Crimped metal end */}
          <div className="absolute -bottom-1.5 left-1/2 h-3.5 w-[3.25rem] -translate-x-1/2 rounded-[3px] bg-[linear-gradient(90deg,#8f8d97,#eceaf0_45%,#8f8d97)] shadow-[0_1px_3px_rgba(38,34,49,0.3)]" />
        </div>

        {/* Swivel clasp hooked through the card */}
        <svg
          viewBox="0 0 34 54"
          className="absolute bottom-0 left-1/2 h-[3.4rem] w-[2.1rem] -translate-x-1/2"
        >
          <defs>
            <linearGradient id="metal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#87858f" />
              <stop offset="38%" stopColor="#eceaf0" />
              <stop offset="70%" stopColor="#a5a3ad" />
              <stop offset="100%" stopColor="#7e7c86" />
            </linearGradient>
          </defs>
          {/* stem out of the crimp */}
          <rect x="14.5" y="0" width="5" height="10" fill="url(#metal)" />
          {/* swivel barrel */}
          <rect x="11" y="8" width="12" height="7" rx="3.5" fill="url(#metal)" />
          {/* clasp ring */}
          <ellipse
            cx="17"
            cy="33"
            rx="9.5"
            ry="16"
            fill="none"
            stroke="url(#metal)"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* ---------- Card ---------- */}
      <div className="card-3d relative z-10 w-full px-5 pb-6 pt-3.5">
        {/* Punched slot the hook passes through */}
        <div
          aria-hidden
          className="mx-auto h-2.5 w-16 rounded-full bg-shell shadow-[inset_0_1px_2px_rgba(38,34,49,0.28)]"
        />

        <p className="mt-5 text-center font-wordmark text-xl font-extrabold uppercase tracking-[0.12em] text-ink">
          {profile.wordmark}
          <span className="text-lilac">.</span>
        </p>

        {/* Photo window — soft studio backdrop behind the portrait */}
        <div className="mt-4 bg-gradient-to-b from-shell to-lilac-mist p-0">
          {children}
        </div>

        <p className="mt-4 text-center font-wordmark text-base font-bold uppercase tracking-[0.06em] text-ink">
          {profile.name}
        </p>
        <p className="mt-0.5 text-center text-xs text-ink-muted">
          {profile.role}
        </p>

        {/* Barcode */}
        <div
          aria-hidden
          className="mt-5 flex h-9 items-stretch justify-center gap-[2px] rounded-md border border-hairline bg-ivory px-3 py-1.5"
        >
          {BARCODE.map((weight, index) => (
            <span
              key={index}
              style={{ width: `${weight}px` }}
              className="bg-ink"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
