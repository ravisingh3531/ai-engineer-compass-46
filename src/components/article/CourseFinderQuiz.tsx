import { useState } from "react";
import { Reveal } from "./Reveal";

type Answer = string;

type Question = {
  id: string;
  q: string;
  options: { value: Answer; label: string }[];
};

const questions: Question[] = [
  {
    id: "background",
    q: "1. What is your current background?",
    options: [
      { value: "nontech", label: "Non-technical (no coding yet)" },
      { value: "somecode", label: "Some coding — scripts, college projects" },
      { value: "dev", label: "Software developer" },
      { value: "analyst", label: "Data analyst or data engineer" },
      { value: "devops", label: "DevOps / cloud engineer" },
      { value: "student", label: "Student / final year" },
    ],
  },
  {
    id: "level",
    q: "2. Where are you on the capability ladder right now?",
    options: [
      { value: "0", label: "Level 0–1 — AI literate, cannot build yet" },
      { value: "2", label: "Level 2 — can train a model in a notebook" },
      { value: "3", label: "Level 3 — can build an LLM app end to end" },
      { value: "4", label: "Level 4 — already shipping AI in production" },
    ],
  },
  {
    id: "goal",
    q: "3. What is the goal?",
    options: [
      { value: "switch", label: "Switch into an AI Engineer role" },
      { value: "add", label: "Add AI to my current role" },
      { value: "credential", label: "A credential for promotion or an HR filter" },
      { value: "test", label: "Test the waters before committing" },
    ],
  },
  {
    id: "budget",
    q: "4. What is your realistic budget?",
    options: [
      { value: "free", label: "Free only" },
      { value: "u15", label: "Under ₹15,000" },
      { value: "15-60", label: "₹15,000 – ₹60,000" },
      { value: "60-150", label: "₹60,000 – ₹1.5 lakh" },
      { value: "150+", label: "₹1.5 lakh and above" },
    ],
  },
  {
    id: "hours",
    q: "5. Hours you can protect every week?",
    options: [
      { value: "u6", label: "Under 6 hours" },
      { value: "6-10", label: "6 – 10 hours" },
      { value: "10-15", label: "10 – 15 hours" },
      { value: "15+", label: "15+ hours" },
    ],
  },
  {
    id: "style",
    q: "6. Which learning style actually works for you?",
    options: [
      { value: "live", label: "Live cohort with fixed timings" },
      { value: "weekend", label: "Weekend mentor sessions" },
      { value: "self", label: "Fully self-paced" },
      { value: "mixed", label: "Mixed — recordings plus some live" },
    ],
  },
  {
    id: "priority",
    q: "7. If you could only have one, which matters most?",
    options: [
      { value: "skills", label: "Deep AI Engineer skills" },
      { value: "placement", label: "Placement infrastructure and referrals" },
      { value: "credential", label: "A university credential" },
      { value: "cost", label: "Lowest possible cost" },
    ],
  },
  {
    id: "timeline",
    q: "8. What is your timeline?",
    options: [
      { value: "3-6", label: "3 – 6 months" },
      { value: "6-12", label: "6 – 12 months" },
      { value: "12-18", label: "12 – 18 months" },
      { value: "none", label: "No fixed timeline" },
    ],
  },
];

type Result = { primary: string; reason: string; secondary?: string };

function decide(a: Record<string, Answer>): Result {
  const { budget, hours, style, priority, background, goal } = a;
  const deepHours = hours === "10-15" || hours === "15+";
  const liveOrMixed = style === "live" || style === "mixed" || style === "weekend";

  if (budget === "free") {
    return {
      primary: "DeepLearning.AI + Hugging Face + Kaggle",
      reason:
        "At ₹0 the content is not the constraint — sequence and accountability are. Audit the ML and Deep Learning specialisations, then the Hugging Face NLP and Agents courses, and keep a Kaggle habit for applied practice.",
      secondary: "Revisit a paid cohort only after you have finished eight weeks unaided.",
    };
  }
  if (style === "self" && (background === "dev" || background === "devops" || background === "analyst")) {
    return {
      primary: "IBM AI Engineering (Coursera)",
      reason:
        "You already code and you want no fixed timings. IBM's applied, implementation-first track is the strongest sub-₹5,000 option for someone who can self-direct.",
      secondary: "Add DeepLearning.AI GenAI short courses for the RAG and agents layer.",
    };
  }
  if (hours === "u6" && goal === "test") {
    return {
      primary: "DeepLearning.AI short courses or a cloud vendor track",
      reason:
        "Under six hours a week, a long program will defeat you. Build AI literacy and a small project first, then re-plan when you can protect ten hours.",
    };
  }
  if (budget === "u15") {
    return {
      primary: "PW Skills or GUVI",
      reason:
        "The lowest-risk first investment. Expect entry-level ML with introductory GenAI, and plan a second, deeper program once you know you finish what you start.",
      secondary: "GUVI if you prefer Tamil, Hindi, Telugu or Kannada instruction.",
    };
  }
  if (priority === "credential" || (goal === "credential" && budget === "150+")) {
    return {
      primary: "upGrad (IIIT-Bangalore) or Great Learning (UT Austin)",
      reason:
        "You need an institution's name on the certificate for an HR filter, a visa or a promotion case. Budget deliberate extra time afterwards to close the production RAG, agents and MLOps gap.",
      secondary: "LogicMojo as a follow-on for the GenAI-to-production layers.",
    };
  }
  if (priority === "placement" && budget === "150+" && hours === "15+") {
    return {
      primary: "Scaler",
      reason:
        "You are buying the hiring desk, the mentor pool and the alumni network — and you have the hours and budget to use them. That infrastructure is real and it is the strongest on this list.",
      secondary: "LogicMojo as a secondary option if the fee or the 15-month commitment does not clear.",
    };
  }
  if (priority === "cost") {
    return {
      primary: "PW Skills, then a specialist program",
      reason:
        "Optimise the first ₹10,000 for discovering whether you finish. Once you know that, spend on depth rather than on the cheapest available option.",
    };
  }
  if (priority === "skills" && deepHours && liveOrMixed && (budget === "15-60" || budget === "60-150")) {
    return {
      primary: "LogicMojo — AI & Machine Learning Course",
      reason:
        "You want AI Engineer capability, you can hold 10+ hours a week, and live or mixed delivery suits you. That is exactly the profile the full seven-layer sequence — foundations through production RAG, agents and deployment — is built for.",
      secondary: "Scaler if placement infrastructure later matters more than curriculum depth.",
    };
  }
  if (budget === "150+" && priority === "skills") {
    return {
      primary: "LogicMojo, with Scaler as the alternative",
      reason:
        "Your budget clears every option, so choose on what you are optimising for. If the answer is capability, the specialist curriculum covers more of the 2026 stack; if it is the hiring network, Scaler wins.",
      secondary: "Simplilearn if your employer is funding a corporate-recognised credential.",
    };
  }
  return {
    primary: "LogicMojo — AI & Machine Learning Course",
    reason:
      "Your answers point to a learner who needs a complete sequence with live support rather than more content. Confirm the current fee, batch timings and refund window in writing before you enrol.",
    secondary: "Great Learning if weekend-only mentor sessions fit your week better.",
  };
}

export function CourseFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const done = step >= questions.length;
  const current = questions[step];
  const progress = Math.round((Math.min(step, questions.length) / questions.length) * 100);

  function choose(value: Answer) {
    if (!current) return;
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setStep((s) => s + 1);
  }

  const result = done ? decide(answers) : null;

  return (
    <Reveal className="my-8">
      <div className="glass-card relative overflow-hidden p-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <p className="eyebrow">AI Course Finder</p>
            <p className="font-mono text-xs text-muted-foreground">
              {done ? "Complete" : `Question ${step + 1} / ${questions.length}`}
            </p>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${done ? 100 : progress}%` }}
            />
          </div>

          {!done && current ? (
            <div className="mt-6">
              <p className="font-display text-2xl leading-snug text-primary">{current.q}</p>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {current.options.map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => choose(o.value)}
                    className="lift-hover rounded-xl border border-border bg-card px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:bg-highlight"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-4 text-sm font-semibold text-accent underline underline-offset-4"
                >
                  ← Back
                </button>
              ) : null}
            </div>
          ) : null}

          {result ? (
            <div className="mt-6 rounded-2xl border border-accent/40 bg-gradient-to-br from-secondary to-card p-5 shadow-glow">
              <p className="eyebrow">Your best-fit match</p>
              <p className="mt-1 font-display text-3xl gradient-text">{result.primary}</p>
              <p className="prose-body mt-2 text-[0.98rem]">{result.reason}</p>
              {result.secondary ? (
                <p className="mt-3 rounded-xl bg-highlight px-4 py-3 text-sm text-highlight-foreground">
                  <strong>Also consider:</strong> {result.secondary}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://logicmojo.com/artificial-intelligence-machine-learning-course"
                  className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground no-underline shadow-editorial transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore the LogicMojo AI &amp; ML course →
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers({});
                    setStep(0);
                  }}
                  className="lift-hover rounded-xl border border-accent/35 bg-card px-5 py-2.5 text-sm font-semibold text-primary"
                >
                  Restart the quiz
                </button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                This recommender applies the stated output logic to your answers. It captures no
                personal data, and it cannot promise an outcome — verify fees, batch timings and
                inclusions on each provider&apos;s official page before enrolling.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
