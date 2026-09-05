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
        {/* The ribbon runs up past this box so the badge reads as hanging
            rather than floating, but stays inside the About section — it must
            not cross the tech strip above. Its top dissolves rather than
            ending on a hard edge. */}
        <div className="absolute bottom-[1.6rem] left-1/2 h-[12rem] w-[13rem] -translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent_0%,#000_34%)] sm:h-[15rem]">
          <svg viewBox="0 0 208 480" className="h-full w-full">
            <defs>
              <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a99c80" />
                <stop offset="30%" stopColor="#e2d9c5" />
                <stop offset="62%" stopColor="#c9bda2" />
                <stop offset="100%" stopColor="#9d906f" />
              </linearGradient>
              <linearGradient id="ribbonBack" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7f7358" />
                <stop offset="100%" stopColor="#b4a688" />
              </linearGradient>
            </defs>

            {/* Band */}
            <path
              d="M188 -12 C 180 96, 126 150, 118 248 C 112 330, 104 398, 104 492"
              fill="none"
              stroke="url(#ribbon)"
              strokeWidth="44"
            />
            {/* Weave, as rungs across the band */}
            <path
              d="M188 -12 C 180 96, 126 150, 118 248 C 112 330, 104 398, 104 492"
              fill="none"
              stroke="rgba(38,34,49,0.13)"
              strokeWidth="44"
              strokeDasharray="2 4"
            />
            {/* A twist: the band folds and the darker underside shows */}
            <path
              d="M96 242 L140 224 L140 250 L96 268 Z"
              fill="url(#ribbonBack)"
            />
            <path
              d="M96 242 L140 224"
              stroke="rgba(38,34,49,0.28)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Crimped metal end */}
        <div className="absolute bottom-[1.45rem] left-1/2 h-3.5 w-[3.25rem] -translate-x-1/2 rounded-[3px] bg-[linear-gradient(90deg,#8f8d97,#eceaf0_45%,#8f8d97)] shadow-[0_1px_3px_rgba(38,34,49,0.3)]" />

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
