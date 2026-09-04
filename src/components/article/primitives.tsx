import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <section id={id} className={cn("scroll-mt-24 border-t border-border pt-12 mt-14", className)}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl sm:text-4xl leading-tight">{title}</h2>
      <div className="prose-body mt-5 text-[1.0625rem]">{children}</div>
    </section>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="scroll-mt-24 mt-10 mb-3 text-2xl leading-snug">
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
    accent: "bg-highlight text-highlight-foreground border-accent",
    ink: "bg-ink text-ink-foreground border-ink",
    muted: "bg-surface text-surface-foreground border-border",
  } as const;
  return (
    <aside className={cn("my-7 rounded-lg border-l-4 px-5 py-4 shadow-editorial", tones[tone])}>
      {label ? <p className="eyebrow mb-2 opacity-80">{label}</p> : null}
      <div className="prose-body [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">{children}</div>
    </aside>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-2 border-accent pl-5 font-display text-xl sm:text-2xl leading-snug">
      {children}
    </blockquote>
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
    <figure className="my-8">
      <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-editorial">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-ink text-ink-foreground">
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
              <tr key={i} className={i % 2 ? "bg-surface" : "bg-card"}>
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={cn(
                      "border-t border-border px-3 py-3 align-top",
                      j === 0 && firstColSticky && "font-semibold text-foreground",
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
    </figure>
  );
}

export function Verify({ children = "VERIFY" }: { children?: ReactNode }) {
  return (
    <span className="ml-1 rounded-sm bg-highlight px-1.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-highlight-foreground">
      [{children}]
    </span>
  );
}

export function Rating({ score }: { score: number }) {
  return (
    <span className="inline-flex items-baseline gap-1 font-semibold">
      <span className="text-lg">{score.toFixed(1)}</span>
      <span className="text-xs text-muted-foreground">/10</span>
    </span>
  );
}
