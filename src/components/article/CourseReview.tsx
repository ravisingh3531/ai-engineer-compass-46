import type { Course } from "@/data/courses";
import { cn } from "@/lib/utils";
import { H3, Rating } from "./primitives";
import { Reveal } from "./Reveal";

const pillars: [keyof Course["scores"], string][] = [
  ["curriculum", "Curriculum (25%)"],
  ["teaching", "Teaching (20%)"],
  ["projects", "Projects (20%)"],
  ["career", "Career (15%)"],
  ["fit", "Fit for India (10%)"],
  ["value", "Value (10%)"],
];

export function CourseReview({ course }: { course: Course }) {
  const top = course.rank === 1;
  return (
    <Reveal
      as="article"
      className={cn(
        "scroll-mt-24 my-10 rounded-2xl border bg-card p-5 shadow-editorial sm:p-8 lift-hover",
        top ? "border-accent/60 shadow-lift ring-1 ring-accent/20" : "border-border",
      )}
    >
      <div id={`course-${course.rank}`} className="scroll-mt-24" />
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span
          className={cn(
            "rounded-xl px-3 py-1 font-display text-xl",
            top
              ? "bg-gradient-to-br from-accent to-primary text-primary-foreground shadow-glow"
              : "bg-gradient-to-br from-ink to-primary text-ink-foreground",
          )}
        >
          #{course.rank}
        </span>
        <h3 className="text-2xl sm:text-3xl">
          {course.provider} — {course.name}
        </h3>
      </div>
      <p className="mt-2 text-muted-foreground">{course.tagline}</p>

      {top ? (
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-highlight px-3 py-1 text-xs font-semibold uppercase tracking-wider text-highlight-foreground ring-1 ring-accent/30">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Top pick for AI Engineer roles
        </p>
      ) : null}

      <dl className="mt-5 grid grid-cols-2 gap-4 rounded-xl border border-border bg-gradient-to-br from-secondary to-card p-4 text-sm sm:grid-cols-4">
        {[
          ["Format", course.format],
          ["Fees", course.fee],
          ["Duration", course.duration],
          ["Capability ceiling", course.ceiling],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="eyebrow">{k}</dt>
            <dd className="mt-1 font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="prose-body mt-5">
        <p>{course.snapshot}</p>

        <H3>Curriculum depth for AI Engineer work</H3>
        <p>{course.curriculum}</p>

        <H3>Teaching, mentorship and delivery</H3>
        <p>{course.teaching}</p>

        <H3>Projects and portfolio</H3>
        <p>{course.projects}</p>

        <H3>Career support</H3>
        <p>{course.career}</p>

        <H3>Fees and value</H3>
        <p>{course.fees}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-positive/30 bg-surface p-4">
            <p className="eyebrow mb-2 text-positive">Strengths</p>
            <ul className="text-sm">
              {course.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-caution/30 bg-surface p-4">
            <p className="eyebrow mb-2 text-caution">{course.limitations.length ? "Limitations" : "Fit guidance"}</p>
            <ul className="text-sm">
              {(course.limitations.length ? course.limitations : [course.suits]).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {course.limitations.length ? (
          <p>
            <strong>Who this suits:</strong> {course.suits}
          </p>
        ) : null}
        <p>
          <strong>Realistic ceiling:</strong> {course.ceilingNote}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 sm:grid-cols-7">
        {pillars.map(([key, label]) => (
          <div key={key}>
            <p className="eyebrow text-[0.62rem]">{label}</p>
            <p className="mt-1 font-semibold">{course.scores[key].toFixed(1)}</p>
            <span className="mt-1 block h-1 w-full overflow-hidden rounded-full bg-muted">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-700"
                style={{ width: `${course.scores[key] * 10}%` }}
              />
            </span>
          </div>
        ))}
        <div className="col-span-2 sm:col-span-1">
          <p className="eyebrow text-[0.62rem]">Overall</p>
          <p className="mt-1">
            <Rating score={course.scores.overall} />
          </p>
        </div>
      </div>
    </Reveal>
  );
}
