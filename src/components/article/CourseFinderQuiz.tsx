import { useState } from "react";
import { Reveal } from "./Reveal";

type Question = {
  id: string;
  q: string;
  help?: string;
  options: { value: string; label: string }[];
};

const questions: Question[] = [
  {
    id: "experience",
    q: "1. What is your experience level today?",
    options: [
      { value: "zero", label: "Absolute beginner — no coding at all" },
      { value: "basic", label: "Basic coding — college projects, scripts, Excel/SQL" },
      { value: "dev", label: "Working software developer" },
      { value: "data", label: "Data analyst / data engineer / QA / DevOps" },
    ],
  },
  {
    id: "education",
    q: "2. What is your educational background?",
    options: [
      { value: "cs", label: "CS / IT engineering" },
      { value: "noncs-eng", label: "Non-CS engineering (mech, civil, ECE…)" },
      { value: "science", label: "Science / maths / statistics degree" },
      { value: "other", label: "Commerce, arts, or other non-technical" },
    ],
  },
  {
    id: "goal",
    q: "3. What is your career goal?",
    options: [
      { value: "aieng", label: "Become an AI Engineer (build and ship AI systems)" },
      { value: "mleng", label: "ML Engineer / Data Scientist" },
      { value: "addai", label: "Add AI skills to my current job" },
      { value: "credential", label: "A recognised credential for promotion or HR filters" },
    ],
  },
  {
    id: "budget",
    q: "4. What is your realistic budget?",
    options: [
      { value: "free", label: "Free only" },
      { value: "u25", label: "Under ₹25,000" },
      { value: "25-80", label: "₹25,000 – ₹80,000" },
      { value: "80+", label: "₹80,000 and above (EMI acceptable)" },
    ],
  },
  {
    id: "placement",
    q: "5. How important is placement / job assistance?",
    options: [
      { value: "critical", label: "Critical — I need structured job support" },
      { value: "helpful", label: "Helpful, but skills come first" },
      { value: "no", label: "Not needed — I will run my own job search" },
    ],
  },
  {
    id: "mode",
    q: "6. Which learning mode actually works for you?",
    options: [
      { value: "live", label: "Live online classes with fixed IST timings" },
      { value: "weekend", label: "Weekend mentor sessions" },
      { value: "self", label: "Fully self-paced recordings" },
      { value: "hybrid", label: "Hybrid — recordings plus live doubt sessions" },
    ],
  },
  {
    id: "hours",
    q: "7. How many hours can you protect every week?",
    options: [
      { value: "u6", label: "Under 6 hours" },
      { value: "6-10", label: "6 – 10 hours" },
      { value: "10-15", label: "10 – 15 hours" },
      { value: "15+", label: "15+ hours" },
    ],
  },
  {
    id: "foundations",
    q: "8. Do you need Python and ML foundations taught from scratch?",
    options: [
      { value: "yes", label: "Yes — start me at Python basics" },
      { value: "partly", label: "Partly — I code, but ML/maths is new" },
      { value: "no", label: "No — I already know Python and basic ML" },
    ],
  },
];

type Result = {
  course: string;
  provider: string;
  href: string;
  why: string[];
  modules: string[];
  placement: string;
  cta: string;
  runnerUp: string;
};

function decide(a: Record<string, string>): Result {
  const logicMojo: Result = {
    provider: "LogicMojo",
    course: "AI & Machine Learning Course",
    href: "https://logicmojo.com/artificial-intelligence-machine-learning-course",
    why: [
      "Starts at Python basics — no prior ML assumed, which is what your answers indicate you need.",
      "Foundations are taught before GenAI: Python → maths intuition → statistics → classical ML with evaluation → deep learning → transformers → LLMs/RAG/agents.",
      "Live IST cohort with recordings, human code review and doubt resolution — the cadence beginners need to actually finish.",
      "Placement-first structure: AI-specific interview preparation, portfolio and resume review, and career guidance run alongside the syllabus. [VERIFY current scope]",
    ],
    modules: [
      "Python, data handling and SQL foundations",
      "Maths and statistics intuition for ML",
      "Classical ML with honest evaluation",
      "Deep learning with PyTorch, NLP and transformers",
      "LLMs, embeddings, vector databases and production RAG",
      "LangChain/LangGraph, AI agents, fine-tuning (LoRA/QLoRA)",
      "FastAPI + Docker deployment, monitoring and cost control",
      "Capstone plus AI system-design and interview preparation",
    ],
    placement: "Structured job assistance with mock interviews, portfolio review and career guidance. Named learner stories are published at logicmojo.com/success-story — verify them yourself; no placement percentage or salary is guaranteed here.",
    cta: "Explore the LogicMojo AI & ML Course",
    runnerUp: "Runner-up for your profile: Scaler if brand and a placement cell outrank curriculum depth.",
  };

  const mk = (
    provider: string,
    course: string,
    href: string,
    why: string[],
    modules: string[],
    placement: string,
  ): Result => ({
    provider,
    course,
    href,
    why,
    modules,
    placement,
    cta: `Read the ${provider} review above`,
    runnerUp:
      "Also compare LogicMojo's AI & ML Course — it is this article's top pick for beginners targeting AI Engineer roles.",
  });

  if (a["budget"] === "free") {
    return mk(
      "DeepLearning.AI + Hugging Face + Kaggle",
      "Free self-assembled AI Engineering track",
      "#free-vs-paid",
      [
        "Your budget rules out paid programs today, and free material genuinely covers the theory.",
        "You supply the missing pieces yourself: sequence, deadlines, code review and accountability.",
        "Move to a paid live program once you can protect a budget — free gives no placement support.",
      ],
      ["ML Specialization", "Deep Learning Specialization", "Hugging Face NLP + Agents", "Kaggle competitions", "Self-deployed FastAPI projects"],
      "No placement support exists on free tracks. Your portfolio and applications do all the work.",
    );
  }

  if (a["goal"] === "credential" || (a["education"] === "other" && a["placement"] === "critical" && a["budget"] === "80+")) {
    return mk(
      "upGrad (IIIT-Bangalore)",
      "PGP in Machine Learning & AI",
      "#course-3",
      [
        "You want a credential that clears HR filters at GCCs and MNCs — that is what a university-affiliated PG buys.",
        "Bridge modules make it survivable for non-CS backgrounds.",
        "Expect a thinner GenAI/agents layer than a specialist live program; plan to top it up.",
      ],
      ["Statistics and ML", "Deep learning", "NLP", "Capstone", "University credential"],
      "Career services plus the credential. Ask for the current cohort's outcome data in writing.",
    );
  }

  if (a["placement"] === "critical" && a["budget"] === "80+" && a["experience"] === "dev") {
    return mk(
      "Scaler",
      "Data Science, ML & AI Program",
      "#course-2",
      [
        "You are already a developer, your budget is open, and placement infrastructure is your top priority.",
        "Strong fundamentals, structured interview preparation and a hiring-partner network.",
        "The GenAI/agents layer is thinner than the top pick; verify the current syllabus.",
      ],
      ["DSA and fundamentals", "ML and deep learning", "System design", "Interview preparation"],
      "Dedicated placement cell and hiring partners. Ask for median, not average, outcomes.",
    );
  }

  if (a["budget"] === "u25") {
    return mk(
      a["education"] === "other" || a["experience"] === "zero" ? "GUVI" : "PW Skills",
      "Beginner AI/ML track",
      a["education"] === "other" || a["experience"] === "zero" ? "#course-9" : "#course-10",
      [
        "Your budget points to the affordability-first band, and both options start from absolute basics.",
        "Expect Level 2 capability: foundations and introductory GenAI, not production RAG, agents or MLOps.",
        "Budget a second step later to reach AI Engineer hiring level.",
      ],
      ["Python", "Statistics", "Core ML", "Introductory GenAI", "Guided projects"],
      "Limited job assistance. Verify what is actually delivered before paying.",
    );
  }

  if (a["mode"] === "self" && a["foundations"] === "no") {
    return mk(
      "IBM (Coursera)",
      "AI Engineering Professional Certificate",
      "#course-8",
      [
        "You already code, you prefer self-paced study, and you want a structured GenAI-flavoured track.",
        "Good LLM and RAG coverage; no mentorship, no interview prep, no placement support.",
        "Pair it with self-designed deployed projects or the interview section on this page.",
      ],
      ["Python for AI", "Deep learning", "LLMs and RAG", "Capstone"],
      "None. The certificate is the deliverable.",
    );
  }

  return logicMojo;
}

export function CourseFinderQuiz() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);

  const q = questions[i]!;
  const result = open ? decide(answers) : null;

  const pick = (value: string) => {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    if (i === questions.length - 1) setOpen(true);
    else setI(i + 1);
  };

  const restart = () => {
    setAnswers({});
    setI(0);
    setOpen(false);
  };

  return (
    <Reveal className="my-10">
      <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-secondary via-card to-highlight p-6 shadow-editorial sm:p-8">
        <p className="eyebrow">Interactive · 8 questions · ~60 seconds</p>
        <h3 className="mt-2 text-2xl">AI Course Finder Quiz</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Answer honestly — the result is a recommendation, not a verdict. Nothing is stored and no
          contact details are asked for.
        </p>

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${((open ? questions.length : i) / questions.length) * 100}%` }}
          />
        </div>

        <div className="mt-6">
          <p className="font-display text-xl">{q.q}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {q.options.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => pick(o.value)}
                className="lift-hover rounded-xl border border-border bg-card px-4 py-3 text-left text-sm font-medium hover:border-accent hover:text-accent"
              >
                {o.label}
              </button>
            ))}
          </div>
          <div className="mt-5 flex gap-3 text-xs">
            {i > 0 ? (
              <button type="button" onClick={() => setI(i - 1)} className="underline underline-offset-4">
                ← Back
              </button>
            ) : null}
            <button type="button" onClick={restart} className="text-muted-foreground underline underline-offset-4">
              Restart
            </button>
            <span className="ml-auto font-mono text-muted-foreground">
              {i + 1} / {questions.length}
            </span>
          </div>
        </div>
      </div>

      {open && result ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Your best-fit course"
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-accent/30 bg-card p-6 shadow-lift sm:rounded-3xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Your best-fit course</p>
                <h4 className="mt-1 font-display text-2xl text-gradient sm:text-3xl">
                  {result.provider} — {result.course}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground hover:text-accent"
              >
                ✕
              </button>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Why this fits you</p>
              <ul className="mt-2 space-y-2 text-sm">
                {result.why.map((w) => (
                  <li key={w} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Key modules</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {result.modules.map((m) => (
                  <span key={m} className="rounded-full bg-secondary px-3 py-1 text-xs ring-1 ring-border">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-border bg-gradient-to-br from-secondary to-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Placement / job assistance</p>
              <p className="mt-1 text-sm text-muted-foreground">{result.placement}</p>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">{result.runnerUp}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={result.href}
                target={result.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground no-underline shadow-glow"
              >
                {result.cta} →
              </a>
              {result.href.startsWith("http") ? (
                <a
                  href="https://logicmojo.com/success-story"
                  target="_blank"
                  rel="noopener"
                  className="rounded-xl border border-accent/40 px-5 py-3 text-sm font-semibold text-accent no-underline"
                >
                  See learner success stories
                </a>
              ) : null}
              <button
                type="button"
                onClick={restart}
                className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground"
              >
                Retake quiz
              </button>
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground">
              Recommendation logic is rule-based and published in the section above. Verify fees,
              syllabus and job-assistance scope on the official page before you pay.
            </p>
          </div>
        </div>
      ) : null}
    </Reveal>
  );
}
