import { beginnerMatrix, evalDimensions, type Coverage } from "@/data/beginner";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const tone: Record<Coverage, string> = {
  Strong: "bg-accent/15 text-accent ring-accent/30",
  Good: "bg-primary/10 text-primary ring-primary/20",
  Basic: "bg-secondary text-muted-foreground ring-border",
  Minimal: "bg-muted text-muted-foreground ring-border",
  "Not covered": "bg-transparent text-muted-foreground/70 ring-border/60",
  "[VERIFY]": "bg-highlight text-highlight-foreground ring-accent/30",
};

const shortLabel: Record<Coverage, string> = {
  Strong: "Strong",
  Good: "Good",
  Basic: "Basic",
  Minimal: "Min.",
  "Not covered": "—",
  "[VERIFY]": "Verify",
};

export function BeginnerMatrix() {
  return (
    <Reveal className="my-10">
      <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-editorial">
        <table className="w-full min-w-[980px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-ink to-primary text-ink-foreground">
              <th className="sticky left-0 z-10 bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                Evaluation dimension
              </th>
              {beginnerMatrix.map((c) => (
                <th key={c.provider} className="px-3 py-3 text-xs font-semibold">
                  <span className="block font-mono text-[10px] opacity-70">#{c.rank}</span>
                  {c.provider}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {evalDimensions.map((dim, i) => (
              <tr key={dim} className={i % 2 ? "bg-secondary/40" : "bg-card"}>
                <th
                  scope="row"
                  className={cn(
                    "sticky left-0 z-10 border-t border-border px-4 py-2.5 text-xs font-medium",
                    i % 2 ? "bg-secondary" : "bg-card",
                  )}
                >
                  {dim}
                </th>
                {beginnerMatrix.map((c) => {
                  const v = c.coverage[i] ?? "[VERIFY]";
                  return (
                    <td key={c.provider} className="border-t border-border px-3 py-2.5">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1",
                          tone[v],
                        )}
                      >
                        {shortLabel[v]}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="bg-gradient-to-r from-highlight to-card">
              <th scope="row" className="sticky left-0 z-10 bg-highlight border-t border-border px-4 py-3 text-xs font-semibold">
                Beginner-readiness score / 10
              </th>
              {beginnerMatrix.map((c) => (
                <td key={c.provider} className="border-t border-border px-3 py-3 font-display text-lg text-accent">
                  {c.beginnerScore}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Visual 3 — Beginner-focused evaluation across 22 dimensions. Ratings reflect published
        curriculum and delivery as read from official pages on [INSERT: review date]; they are
        editorial judgements, not vendor claims. Re-verify any row that decides your purchase.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {beginnerMatrix.map((c) => (
          <div key={c.provider} className="lift-hover rounded-2xl border border-border bg-card p-5 shadow-editorial">
            <p className="eyebrow">#{c.rank} · {c.provider}</p>
            <h4 className="mt-1 text-lg font-semibold">{c.short}</h4>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Entry point for a beginner</dt>
                <dd className="text-muted-foreground">{c.entryPoint}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Placement / job assistance</dt>
                <dd className="text-muted-foreground">{c.placement}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Published student outcomes</dt>
                <dd className="text-muted-foreground">{c.outcomes}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
