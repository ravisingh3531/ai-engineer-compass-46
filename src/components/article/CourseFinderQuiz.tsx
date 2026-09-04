import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Q = { id: string; question: string; options: { label: string; value: string }[] };

const questions: Q[] = [
  {
    id: "background",
    question: "Where are you starting from?",
    options: [
      { label: "Working software developer (1–8 yrs)", value: "dev" },
      { label: "Data analyst, BI or data engineer", value: "data" },
      { label: "QA, DevOps, SRE or cloud engineer", value: "infra" },
      { label: "Student or fresher", value: "student" },
      { label: "Non-tech career switcher", value: "switcher" },
    ],
  },
  {
    id: "budget",
    question: "What can you realistically spend?",
    options: [
      { label: "₹0 — free only for now", value: "free" },
      { label: "Under ₹50,000", value: "low" },
      { label: "₹50,000 – ₹1.5L (EMI fine)", value: "mid" },
      { label: "Above ₹1.5L", value: "high" },
    ],
  },
  {
    id: "hours",
    question: "Hours per week you can genuinely protect?",
    options: [
      { label: "Under 6", value: "few" },
      { label: "8–15", value: "normal" },
      { label: "20+ (between jobs or studying full-time)", value: "many" },
    ],
  },
  {
    id: "need",
    question: "What matters most in the outcome?",
    options: [
      { label: "Capability — I want to build and deploy real AI systems", value: "capability" },
      { label: "A university/brand credential for HR, visa or promotion", value: "credential" },
      { label: "Placement network into product companies", value: "placement" },
      { label: "Lowest possible cost to get started", value: "cheap" },
    ],
  },
  {
    id: "structure",
    question: "How honest are you about self-discipline?",
    options: [
      { label: "I have abandoned a self-paced course before", value: "needs-structure" },
      { label: "I finish what I start, alone", value: "self-driven" },
    ],
  },
];

function recommend(a: Record<string, string>) {
  const primary = { name: "", why: "" };
  const alt: string[] = [];

  if (a['need'] === "credential") {
    primary.name = "upGrad (IIIT-Bangalore) or Great Learning (UT Austin)";
    primary.why =
      "You need an institution's name on the certificate. Take it — then close the GenAI gap deliberately, because production RAG, agents and deployment are the thin parts of both curricula. Pair it with LogicMojo's GenAI and MLOps depth or self-directed work on those layers.";
    alt.push("LogicMojo — for the engineering depth the credential programs skip");
  } else if (a['need'] === "placement" && a['budget'] === "high") {
    primary.name = "Scaler — Data Science, ML & AI Program";
    primary.why =
      "You are buying the hiring desk and the product-company mentor network, and you can carry the fee. Use the referrals aggressively; that is the whole value proposition.";
    alt.push("LogicMojo — same or better curriculum depth at a fraction of the cost");
  } else if (a['budget'] === "free") {
    primary.name = "DeepLearning.AI + Hugging Face + Kaggle Learn";
    primary.why =
      "Spend nothing for eight weeks and prove to yourself that you finish. If you reach the end of the ML specialisation, you have earned the right to invest in a structured GenAI-to-deployment cohort.";
    alt.push("IBM AI Engineering (Coursera) — applied labs at subscription cost");
    alt.push("LogicMojo — when you are ready to pay for sequence, review and deployment");
  } else if (a['budget'] === "low" && (a['background'] === "student" || a['background'] === "switcher")) {
    primary.name = "GUVI or PW Skills, then a full-sequence program";
    primary.why =
      "At your budget, structure beats prestige. Build Level 2 foundations cheaply, then invest once in the GenAI-to-production layer that actually gets AI Engineer offers.";
    alt.push("LogicMojo — the follow-on step to reach Level 4");
  } else {
    primary.name = "LogicMojo — AI & Machine Learning Course";
    primary.why =
      a['background'] === "dev" || a['background'] === "infra"
        ? "You already code, so the value is the unbroken run from ML foundations through production RAG, fine-tuning, agents and MLOps — with live IST sessions that fit around a job and a human reviewing your code."
        : "You need one sequence rather than ten tabs: onboarding for Python and maths, then ML, deep learning, the full GenAI stack and deployment, with live IST mentorship and project defence practice.";
    if (a['structure'] === "needs-structure")
      alt.push("Cohort accountability is the deciding factor for you — avoid purely self-paced tracks");
    if (a['hours'] === "few")
      alt.push("Under 6 hrs/week: stretch the timeline to 15–18 months rather than picking a shorter course");
    alt.push("Great Learning — if weekends are the only time you have");
  }
  return { primary, alt };
}

export function CourseFinderQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const complete = questions.every((q) => answers[q.id]);
  const result = submitted ? recommend(answers) : null;

  return (
    <div className="my-8 rounded-lg border border-border bg-card p-5 shadow-editorial sm:p-7">
      <p className="eyebrow">Interactive</p>
      <h4 className="mt-1 text-2xl">AI Course Finder Quiz</h4>
      <p className="mt-1 text-sm text-muted-foreground">Five questions. No email required.</p>

      <div className="mt-6 space-y-6">
        {questions.map((q, i) => (
          <fieldset key={q.id}>
            <legend className="mb-2 font-semibold">
              {i + 1}. {q.question}
            </legend>
            <div className="flex flex-wrap gap-2">
              {q.options.map((o) => {
                const active = answers[q.id] === o.value;
                return (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => {
                      setAnswers((a) => ({ ...a, [q.id]: o.value }));
                      setSubmitted(false);
                    }}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                      active
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border bg-surface text-surface-foreground hover:border-accent",
                    )}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <Button
        className="mt-6"
        disabled={!complete}
        onClick={() => setSubmitted(true)}
        variant="default"
      >
        {complete ? "Show my recommendation" : "Answer all five to continue"}
      </Button>

      {result ? (
        <div className="mt-6 rounded-md bg-ink p-5 text-ink-foreground">
          <p className="eyebrow opacity-80">Your best-fit pick</p>
          <p className="mt-1 font-display text-2xl">{result.primary.name}</p>
          <p className="mt-2 text-sm opacity-90">{result.primary.why}</p>
          {result.alt.length ? (
            <ul className="mt-4 space-y-1 text-sm opacity-90">
              {result.alt.map((a) => (
                <li key={a}>— {a}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
