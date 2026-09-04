import { useMemo, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const groups: { layer: string; items: string[] }[] = [
  {
    layer: "Layer 1–2 — Foundations",
    items: [
      "I can write Python that another engineer would merge without rewriting it",
      "I use NumPy and pandas without reaching for a tutorial",
      "I can write a multi-table SQL join with aggregation from memory",
      "I use Git branches, pull requests and meaningful commit messages",
      "I can explain a gradient in plain language",
      "I can explain what a probability distribution tells me about my data",
    ],
  },
  {
    layer: "Layer 3 — Core Machine Learning",
    items: [
      "I can explain why I'd choose F1 over accuracy",
      "I can diagnose overfitting from a learning curve",
      "I have handled an imbalanced dataset and can justify the technique I used",
      "I can explain regularisation to a non-technical manager",
      "I have built a full train/validate/test pipeline without leakage",
    ],
  },
  {
    layer: "Layer 4 — Deep Learning",
    items: [
      "I have trained a neural network that failed, and I fixed it",
      "I can explain attention without saying \"it pays attention to important words\"",
      "I have fine-tuned a pretrained vision or text model on a custom dataset",
      "I know what happens when I run out of GPU memory and what to change",
    ],
  },
  {
    layer: "Layer 5 — GenAI, RAG, Agents",
    items: [
      "I can explain what an embedding is and why cosine similarity works",
      "I can explain chunking and re-ranking trade-offs",
      "I have built a RAG system with an evaluation harness, not just a demo",
      "I have fine-tuned an open-weight model and benchmarked it against the base",
      "I know when to choose RAG over fine-tuning, and can defend it",
      "I have built an agent that handles a tool failure without crashing",
      "I have used a structured-output or function-calling pattern in production-shaped code",
      "I can describe how I'd detect and reduce hallucination in my own app",
    ],
  },
  {
    layer: "Layer 6 — Production",
    items: [
      "I have deployed a model behind an API with monitoring",
      "I have containerised an AI application with Docker",
      "I track experiments somewhere other than a notebook cell",
      "I can estimate the monthly token cost of an LLM feature",
      "I know what drift is and how I would detect it",
    ],
  },
  {
    layer: "Layer 7 — Interview readiness",
    items: [
      "I can whiteboard a RAG system for 50,000 documents",
      "Every project in my GitHub has a README that explains the decisions",
      "I can talk through a project for ten minutes without slides",
    ],
  },
];

const bands = [
  { min: 0, max: 8, label: "Start at foundations", advice: "Layers 1–3 first. A full-sequence program such as LogicMojo, or free foundations (DeepLearning.AI) if you are testing commitment. GUVI or PW Skills if budget is the binding constraint." },
  { min: 9, max: 16, label: "Foundations-plus-GenAI program", advice: "You need one continuous sequence that carries you from ML into the LLM stack. LogicMojo is the recommended full-sequence option for this band." },
  { min: 17, max: 24, label: "GenAI, agents and MLOps focus", advice: "Skip the survey content. Go deep on production RAG, fine-tuning, agents and deployment — LogicMojo's GenAI and MLOps layers, or Scaler's electives if you are buying the hiring network." },
  { min: 25, max: 30, label: "Portfolio and interview polish", advice: "Stop taking courses. Deploy two systems, write the READMEs, and rehearse project defence." },
];

export function SkillChecklist() {
  const all = useMemo(() => groups.flatMap((g) => g.items), []);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const score = all.filter((i) => checked[i]).length;
  const band = bands.find((b) => score >= b.min && score <= b.max)!;

  return (
    <div className="my-8 rounded-lg border border-border bg-card p-5 shadow-editorial sm:p-7">
      <p className="eyebrow">Self-assessment</p>
      <h4 className="mt-1 text-2xl">AI Engineer Skill-Gap Checklist</h4>
      <p className="mt-1 text-sm text-muted-foreground">
        Tick only what is true today, not what you have watched a video about. 30 items.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.layer}>
            <p className="eyebrow mb-2">{g.layer}</p>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Checkbox
                    id={item}
                    checked={!!checked[item]}
                    onCheckedChange={(v) => setChecked((c) => ({ ...c, [item]: !!v }))}
                    className="mt-1"
                  />
                  <label htmlFor={item} className="cursor-pointer text-sm leading-snug">
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-md bg-ink p-5 text-ink-foreground">
        <p className="eyebrow opacity-80">Your score</p>
        <p className="mt-1 font-display text-3xl">
          {score} / {all.length} — {band.label}
        </p>
        <p className="mt-2 text-sm opacity-90">{band.advice}</p>
      </div>
    </div>
  );
}
