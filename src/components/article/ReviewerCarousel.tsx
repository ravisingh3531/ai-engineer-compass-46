import { useState } from "react";
import { reviewers } from "@/data/extras";
import { Reveal } from "./Reveal";

export function ReviewerCarousel() {
  const [i, setI] = useState(0);
  const r = reviewers[i]!;


  return (
    <Reveal className="my-8">
      <div className="glass-card relative overflow-hidden p-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="relative flex flex-col gap-5 sm:flex-row">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-dashed border-accent/50 bg-gradient-to-br from-secondary to-card text-center font-mono text-[0.6rem] uppercase tracking-wide text-muted-foreground">
            [PHOTO]
          </div>
          <div className="min-w-0">
            <p className="eyebrow">Reviewer {i + 1} of {reviewers.length}</p>
            <p className="mt-1 font-display text-2xl text-primary">{r.name}</p>
            <p className="text-sm font-semibold text-accent">
              {r.role} · {r.company}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{r.bio}</p>
            <blockquote className="mt-4 border-l-2 border-accent/60 pl-4 font-display text-lg leading-snug text-primary">
              {r.quote}
            </blockquote>
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{r.reviewed}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              LinkedIn: <span className="font-mono">[INSERT URL]</span>
            </p>
          </div>
        </div>

        <div className="relative mt-6 flex items-center justify-between gap-3">
          <div className="flex gap-1.5">
            {reviewers.map((rev, idx) => (
              <button
                key={rev.role}
                type="button"
                aria-label={`Show reviewer ${idx + 1}`}
                aria-current={idx === i}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === i ? "w-8 bg-accent" : "w-2 bg-border hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setI((v) => (v - 1 + reviewers.length) % reviewers.length)}
              className="lift-hover rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-semibold text-primary"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => setI((v) => (v + 1) % reviewers.length)}
              className="lift-hover rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-semibold text-primary"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        <strong>Disclosure:</strong> reviewers commented on accuracy and completeness of specific
        sections. [INSERT: state truthfully whether any reviewer was compensated, and any affiliation
        with a listed provider.] The ranking and all editorial judgements are the author&apos;s. No
        reviewer, quote or photograph is published until it is confirmed in writing.
      </p>
    </Reveal>
  );
}
