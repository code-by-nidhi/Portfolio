/**
 * The four-point star used as a section marker and as loose decoration.
 * Concave sides — a plain rotated square reads as a diamond, not a sparkle.
 */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 0c0 6.4 5.6 12 12 12-6.4 0-12 5.6-12 12 0-6.4-5.6-12-12-12C6.4 12 12 6.4 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
