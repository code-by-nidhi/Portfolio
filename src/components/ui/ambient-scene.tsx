/**
 * Decorative pastel solids floating behind the page. Purely CSS-animated so it
 * costs nothing on the main thread and stays server-rendered.
 */
export function AmbientScene() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-ivory" />
      <div className="grid-plane absolute inset-x-0 top-0 h-[70vh]" />

      <div
        className="float-slow absolute -left-24 top-24 size-72 rounded-full bg-lilac/45 blur-3xl"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="float-slow absolute -right-20 top-[38vh] size-80 rounded-full bg-mint/40 blur-3xl"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="float-slow absolute bottom-[12vh] left-[18vw] size-64 rounded-full bg-blush/35 blur-3xl"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="float-slow absolute bottom-[30vh] right-[26vw] size-56 rounded-full bg-sand/35 blur-3xl"
        style={{ animationDelay: "7.5s" }}
      />

      <div className="noise-veil absolute inset-0" />
    </div>
  );
}
