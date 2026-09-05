import Link from "next/link";

export default function NotFound() {
  return (
    <section className="scene mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <div className="card-3d px-10 py-14">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink-muted">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl text-ink">
          This page slipped off the grid
        </h1>
        <p className="mt-3 text-ink-soft">
          The link is broken, or the section has moved somewhere else.
        </p>
        <Link
          href="/"
          className="btn-3d mt-8 inline-flex px-5 py-3 text-sm font-medium text-ivory"
        >
          Back to the portfolio
        </Link>
      </div>
    </section>
  );
}
