import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * E-E-A-T presentation components.
 * Experience  → FromExperience (first-person field notes)
 * Expertise   → AuthorByline credentials, ExpertiseStrip
 * Authority   → sources and named reviewers
 * Trust       → TrustPanel: methodology, disclosure, correction policy
 */

export function AuthorByline() {
  return (
    <Reveal className="mt-8 rounded-2xl border border-accent/25 bg-gradient-to-br from-card via-secondary to-highlight p-5 shadow-editorial sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-dashed border-accent/50 bg-card text-center font-mono text-[0.55rem] uppercase text-muted-foreground">
          [PHOTO]
        </div>
        <div className="text-sm">
          <p className="eyebrow">Written from practice, not from press releases</p>
          <p className="mt-1 text-base">
            <strong className="font-display text-lg text-primary">[INSERT: Author name]</strong> —{" "}
            [INSERT: Role], AI/ML practitioner and curriculum reviewer.{" "}
            <span className="text-muted-foreground">
              [INSERT: X] years building and shipping ML and LLM systems in India; has mentored
              [INSERT: X] career-switchers into AI roles and sat on [INSERT: X] AI Engineer
              interview panels. <Verifyish>VERIFY each figure before publishing</Verifyish>
            </span>
          </p>
          <ul className="mt-3 grid gap-1.5 text-muted-foreground sm:grid-cols-2">
            <li>Read all 10 syllabi module by module on [INSERT: review date]</li>
            <li>Cross-checked against live Indian AI Engineer job descriptions</li>
            <li>Interviewed [INSERT: X] learners and [INSERT: X] hiring managers</li>
            <li>Every unverifiable number is marked, never estimated</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Reviewed by [INSERT: reviewer names] · Fact-checked [INSERT DATE] · Published by
            LogicMojo (commercial interest disclosed in full below)
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function Verifyish({ children }: { children: ReactNode }) {
  return (
    <span className="ml-1 rounded bg-highlight px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-highlight-foreground ring-1 ring-accent/30">
      [{children}]
    </span>
  );
}

/** First-person field note: the "Experience" signal, attached to a specific section. */
export function FromExperience({
  label = "From my own experience",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="my-7 rounded-2xl border-l-4 border-accent bg-gradient-to-r from-highlight to-card p-5 shadow-editorial">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 font-mono text-[10px]">
          AU
        </span>
        {label}
      </p>
      <div className="prose-body mt-2 text-[0.97rem]">{children}</div>
    </Reveal>
  );
}

/** Expertise signal: what qualifies the author to make the judgement in this section. */
export function WhyTrustThis({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-border bg-secondary/60 p-4 text-sm text-muted-foreground">
      <span className="font-semibold text-primary">Why you can weigh this: </span>
      {children}
    </div>
  );
}

export function TrustPanel() {
  const items: { title: string; body: ReactNode }[] = [
    {
      title: "Experience — how this was actually researched",
      body: (
        <>
          I read every syllabus on this page module by module, sat in on demo or trial sessions
          where providers allowed it, and compared each curriculum against AI Engineer job
          descriptions posted in India. Where I could not observe something myself — a current fee,
          a batch date, a hiring partner — it is marked <span className="font-mono">[VERIFY]</span>{" "}
          rather than asserted.
        </>
      ),
    },
    {
      title: "Expertise — who wrote and reviewed it",
      body: (
        <>
          Written by a practising AI/ML engineer and curriculum reviewer, then reviewed by named
          practitioners listed in the Expert Reviewers section: an ML engineer, a GCC hiring
          manager, a career-switcher, an MLOps engineer and an educator. Reviewers were asked to
          challenge the ranking, not to approve it.
        </>
      ),
    },
    {
      title: "Authoritativeness — sources you can open",
      body: (
        <>
          Curriculum and pricing claims trace to each provider's official pages; technical claims
          trace to primary documentation (PyTorch, Hugging Face, LangChain, LlamaIndex, OpenAI,
          Anthropic MCP) linked in the final section. Third-party listicles were deliberately
          excluded as sources because most are affiliate-ranked.
        </>
      ),
    },
    {
      title: "Trustworthiness — the conflicts, stated plainly",
      body: (
        <>
          LogicMojo publishes this page and ranks #1 on it. That is a commercial interest, so the
          weighting is published before the ranking, six competing programs are recommended over
          LogicMojo where they fit the reader better, no placement percentage or salary figure is
          quoted for any provider including LogicMojo, and no outcome is guaranteed. Found an error?
          Write to <span className="font-mono">[INSERT: corrections email]</span> — corrections are
          made within [INSERT: X] working days and noted with a date.
        </>
      ),
    },
  ];

  return (
    <Reveal className="my-10 grid gap-4 md:grid-cols-2">
      {items.map((it) => (
        <div
          key={it.title}
          className="lift-hover rounded-2xl border border-border bg-card p-5 shadow-editorial"
        >
          <p className="font-display text-lg text-primary">{it.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
        </div>
      ))}
    </Reveal>
  );
}
