import type { Course } from "@/data/courses";
import { cn } from "@/lib/utils";
import { H3, Rating } from "./primitives";

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
    <article
      id={`course-${course.rank}`}
      className={cn(
        "scroll-mt-24 my-10 rounded-lg border bg-card p-5 shadow-editorial sm:p-8",
        top ? "border-accent shadow-lift" : "border-border",
      )}
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span
          className={cn(
            "rounded-md px-3 py-1 font-display text-xl",
            top ? "bg-accent text-accent-foreground" : "bg-ink text-ink-foreground",
          )}
        >
          #{course.rank}
        </span>
        <h3 className="text-2xl sm:text-3xl">
          {course.provider} — {course.name}
        </h3>
      </div>
      <p className="mt-2 text-muted-foreground">{course.tagline}</p>

      <dl className="mt-5 grid grid-cols-2 gap-4 rounded-md bg-surface p-4 text-sm sm:grid-cols-4">
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
          <div className="rounded-md border border-border bg-surface p-4">
            <p className="eyebrow mb-2">Strengths</p>
            <ul className="text-sm">
              {course.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-surface p-4">
            <p className="eyebrow mb-2">{course.limitations.length ? "Limitations" : "Fit guidance"}</p>
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
          </div>
        ))}
        <div className="col-span-2 sm:col-span-1">
          <p className="eyebrow text-[0.62rem]">Overall</p>
          <p className="mt-1">
            <Rating score={course.scores.overall} />
          </p>
        </div>
      </div>
    </article>
  );
}
