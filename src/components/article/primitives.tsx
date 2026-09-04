import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 pt-12 mt-14", className)}>
      <div className="mb-6">
        <div className="h-px w-full bg-gradient-to-r from-accent/60 via-border to-transparent" />
        <Reveal className="mt-6">
          {eyebrow ? (
            <p className="eyebrow mb-3 inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
        </Reveal>
      </div>
      <div className="prose-body text-[1.0625rem]">{children}</div>
    </section>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="scroll-mt-24 mt-10 mb-3 text-2xl leading-snug text-primary">
      {children}
    </h3>
  );
}

export function Callout({
  label,
  children,
  tone = "accent",
}: {
  label?: string;
  children: ReactNode;
  tone?: "accent" | "ink" | "muted";
}) {
  const tones = {
    accent: "bg-gradient-to-br from-highlight to-card text-foreground border-accent/45",
    ink: "bg-gradient-to-br from-ink to-primary text-ink-foreground border-primary/40",
    muted: "bg-surface text-surface-foreground border-border",
  } as const;
  return (
    <Reveal as="aside" className={cn("relative my-8 overflow-hidden rounded-xl border p-5 pl-6 shadow-editorial lift-hover", tones[tone])}>
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-1.5",
          tone === "ink" ? "bg-accent" : "bg-gradient-to-b from-accent to-primary",
        )}
      />
      {label ? (
        <p
          className={cn(
            "mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
            tone === "ink" ? "text-ink-foreground/75" : "text-accent",
          )}
        >
          {label}
        </p>
      ) : null}
      <div className="prose-body [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">{children}</div>
    </Reveal>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <Reveal as="figure" className="my-9">
      <blockquote className="relative rounded-xl border border-accent/25 bg-gradient-to-br from-secondary to-card px-6 py-6 font-display text-xl leading-snug text-primary shadow-editorial sm:text-2xl">
        <span aria-hidden className="absolute -top-3 left-5 font-display text-6xl leading-none text-accent/30">
          &ldquo;
        </span>
        {children}
      </blockquote>
    </Reveal>
  );
}

export function DataTable({
  caption,
  head,
  rows,
  firstColSticky = true,
}: {
  caption?: string;
  head: string[];
  rows: ReactNode[][];
  firstColSticky?: boolean;
}) {
  return (
    <Reveal as="figure" className="my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-editorial">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-ink to-primary text-ink-foreground">
              {head.map((h) => (
                <th
                  key={h}
                  className="whitespace-nowrap px-3 py-3 font-sans text-xs font-semibold uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={cn(
                  "transition-colors hover:bg-highlight/70",
                  i % 2 ? "bg-surface" : "bg-card",
                )}
              >
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={cn(
                      "border-t border-border px-3 py-3 align-top",
                      j === 0 && firstColSticky && "font-semibold text-primary",
                    )}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </Reveal>
  );
}

export function Verify({ children = "VERIFY" }: { children?: ReactNode }) {
  return (
    <span className="ml-1 rounded-md bg-highlight px-1.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-highlight-foreground ring-1 ring-accent/25">
      [{children}]
    </span>
  );
}

export function Rating({ score }: { score: number }) {
  return (
    <span className="inline-flex items-baseline gap-1 font-semibold text-primary">
      <span className="text-lg">{score.toFixed(1)}</span>
      <span className="text-xs text-muted-foreground">/10</span>
    </span>
  );
}

export function StatCard({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="glass-card lift-hover p-4">
      <p className="font-display text-3xl leading-none gradient-text">{value}</p>
      <p className="mt-2 text-sm font-semibold">{label}</p>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function NoteCard({
  title,
  children,
  index,
}: {
  title: string;
  children: ReactNode;
  index?: number;
}) {
  return (
    <Reveal className="glass-card lift-hover relative p-5">
      {index !== undefined ? (
        <span className="absolute right-4 top-3 font-display text-4xl leading-none text-accent/20">
          {index}
        </span>
      ) : null}
      <p className="font-display text-xl text-primary">{title}</p>
      <div className="prose-body mt-1 text-sm [&_p:first-child]:mt-1">{children}</div>
    </Reveal>
  );
}
