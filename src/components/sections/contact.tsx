import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubMark, LinkedinMark } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="scene relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="card-3d relative overflow-hidden px-6 py-14 text-center sm:px-14">
            {/* Pastel depth wash behind the panel content */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(185,174,232,0.22),transparent_70%)]"
            />
            <div
              aria-hidden
              className="float-slow pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-mint/30 blur-2xl"
            />
            <div
              aria-hidden
              className="float-slow pointer-events-none absolute -bottom-12 -right-8 size-48 rounded-full bg-blush/30 blur-2xl"
            />

            <div className="relative">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ink-muted">
                Contact
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
                Have a product to build, or data that isn&apos;t telling you
                enough yet?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                {profile.availability}. Tell me what you&apos;re working on and
                I&apos;ll reply with how I&apos;d approach it.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-3d px-5 py-3 text-sm font-medium text-ivory"
                >
                  <Mail className="size-4" strokeWidth={1.8} />
                  {profile.email}
                </a>
                <a
                  href={profile.resumeUrl}
                  className="btn-3d btn-3d-soft px-5 py-3 text-sm font-medium"
                >
                  Résumé
                  <ArrowUpRight className="size-4" strokeWidth={1.8} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-hairline pt-8 text-sm text-ink-muted">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 py-1.5 transition-colors hover:text-lilac-deep"
                >
                  <GithubMark className="size-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 py-1.5 transition-colors hover:text-lilac-deep"
                >
                  <LinkedinMark className="size-4" />
                  LinkedIn
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" strokeWidth={1.7} />
                  {profile.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
