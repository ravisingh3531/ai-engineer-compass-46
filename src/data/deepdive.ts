// Section 7 — LogicMojo deep dive supporting data.

export type Module = {
  layer: string;
  module: string;
  capability: string;
};

/** Module progression written as capability statements ("You can now…"). */
export const logicMojoModules: Module[] = [
  {
    layer: "Layer 1",
    module: "Programming & Data Foundations",
    capability:
      "You can now write clean Python, wrangle a messy CSV with pandas/NumPy, query with SQL, and version your work in Git without fear of losing it.",
  },
  {
    layer: "Layer 1",
    module: "Maths for AI (intuition-first)",
    capability:
      "You can now read a loss function, explain a gradient, reason about probability in evaluation, and follow a paper's notation instead of skipping it.",
  },
  {
    layer: "Layer 2",
    module: "Core Machine Learning",
    capability:
      "You can now frame a business problem as a learning problem, pick a defensible metric, split data honestly and explain why your model is not overfitting.",
  },
  {
    layer: "Layer 3",
    module: "Deep Learning (PyTorch, end-to-end)",
    capability:
      "You can now build, train, debug and checkpoint a neural network in PyTorch — and diagnose it when the loss curve misbehaves.",
  },
  {
    layer: "Layer 3",
    module: "NLP & Transformers",
    capability:
      "You can now explain attention on a whiteboard, tokenise text properly and fine-tune a Hugging Face encoder for a classification task.",
  },
  {
    layer: "Layer 3",
    module: "Computer Vision",
    capability:
      "You can now apply transfer learning to a real image dataset and ship an object-detection prototype with sane augmentation.",
  },
  {
    layer: "Layer 4",
    module: "GenAI & LLMs",
    capability:
      "You can now call OpenAI/Anthropic/Gemini APIs with structured outputs, run an open-weight model locally, and argue cost vs. latency vs. quality with numbers.",
  },
  {
    layer: "Layer 4",
    module: "Embeddings, Vector DBs & Production RAG",
    capability:
      "You can now design chunking, run hybrid retrieval, re-rank, cite sources and prove your pipeline works with an evaluation harness rather than vibes.",
  },
  {
    layer: "Layer 4",
    module: "LangChain / LangGraph & Orchestration",
    capability:
      "You can now compose multi-step LLM workflows with state, branching, retries and observability — and know when a plain function is the better answer.",
  },
  {
    layer: "Layer 4",
    module: "Fine-Tuning & Adaptation",
    capability:
      "You can now apply the prompting → RAG → fine-tuning decision framework, run LoRA/QLoRA, understand DPO conceptually and benchmark against the base model.",
  },
  {
    layer: "Layer 5",
    module: "AI Agents",
    capability:
      "You can now build an agent with planning, tool use and memory — and, more importantly, handle its failure modes and cap its spend.",
  },
  {
    layer: "Layer 5",
    module: "Agent Frameworks & MCP",
    capability:
      "You can now work across CrewAI/AutoGen/Agents SDK patterns and expose or consume tools over MCP-style integration.",
  },
  {
    layer: "Layer 5",
    module: "LLM Evaluation, Guardrails & Responsible AI",
    capability:
      "You can now build an eval set without ground truth, use LLM-as-judge with its caveats, and add guardrails for injection, PII and unsafe output.",
  },
  {
    layer: "Layer 6",
    module: "MLOps & LLMOps",
    capability:
      "You can now containerise, serve behind FastAPI, track experiments with MLflow, monitor drift, log traces and estimate monthly cost.",
  },
  {
    layer: "Layer 7",
    module: "AI System Design & Interview Prep",
    capability:
      "You can now whiteboard an LLM system for 50,000 documents and defend every decision in it under pressure.",
  },
  {
    layer: "Layer 7",
    module: "Capstone",
    capability:
      "You can now point an interviewer at a deployed system you designed, evaluated, documented and can explain end to end.",
  },
];

/** Visual 2 — typical courses vs. what interviews test vs. LogicMojo. */
export const visualTwo: string[][] = [
  ["Classical ML", "Covered well", "Assumed — tested via metric choice and leakage questions", "Covered with evaluation rigour"],
  ["Model evaluation", "Often accuracy-only", "Heavily tested — imbalance, thresholds, business metric", "Taught as a discipline across ML and LLM work"],
  ["Deep learning", "TF/Keras demos", "Debugging and architecture reasoning", "PyTorch end-to-end, including debugging"],
  ["Transformers", "Conceptual overview", "Explain attention; fine-tune an encoder", "Conceptual + hands-on fine-tuning"],
  ["Prompt engineering", "Covered — often the whole 'GenAI' module", "Baseline expectation, rarely differentiating", "Covered, then treated as one option among three"],
  ["RAG", "Naive retriever demo", "Chunking, hybrid search, re-ranking, citations, eval", "Production RAG with an evaluation harness"],
  ["LangChain / LangGraph", "Tutorial chain", "State, retries, observability, when not to use it", "Orchestration patterns with state and failure paths"],
  ["Fine-tuning", "Slide deck or absent", "Decision framework, LoRA/QLoRA, benchmark vs. base", "Hands-on LoRA/QLoRA with benchmarking"],
  ["Agents & frameworks", "Rarely covered", "Planning, tool use, memory, failure modes, cost", "Built, broken and cost-controlled"],
  ["MCP", "Almost never covered", "Increasingly asked in 2026 tool-integration rounds", "Covered as tool integration [VERIFY: current module]"],
  ["MLOps & deployment", "Optional add-on", "\"How do you serve this to 10,000 users?\"", "Docker, FastAPI, CI/CD, monitoring, cost"],
  ["Open-weight models", "Rarely covered", "Cost and privacy trade-off questions", "Local inference with Ollama-style workflows"],
  ["Portfolio defence", "Not practised", "The round most candidates lose", "Rehearsed as project defence"],
];

/** Price-band table for Section 7.5. */
export const priceBands: string[][] = [
  ["₹0", "MOOCs to audit, docs, Kaggle, Hugging Face", "Everything except sequence, feedback and accountability", "—"],
  ["₹500 – ₹5,000", "Udemy bestsellers, single MOOC subscriptions", "One topic, taught well, no spine", "—"],
  ["₹5,000 – ₹40,000", "Affordability-first bootcamps (PW Skills, GUVI)", "Entry-level ML, introductory GenAI, recorded-first", "—"],
  [
    "₹40,000 – ₹1,20,000",
    "Specialist live programs",
    "Full seven-layer depth is achievable in this band — if the syllabus is current",
    "LogicMojo sits here: ₹XX,XXX with EMI and no bond [VERIFY]",
  ],
  ["₹1,20,000 – ₹2,50,000", "University-affiliated PG programs (upGrad, Great Learning, Intellipaat, Simplilearn)", "Credential, mentor cadence, broad ML — newest GenAI rows usually thinner", "—"],
  ["₹2,50,000+", "Premium bootcamps (Scaler) and executive programs", "Brand, placement infrastructure, alumni network", "—"],
];

/** The five questions any reader can ask any provider. */
export const fiveQuestions: { q: string; why: string }[] = [
  { q: "Can I observe a real, live class before I pay?", why: "A recording dressed as a live class cannot survive this question." },
  { q: "Who teaches my batch, by name, and what have they built?", why: "Named practitioners are verifiable on LinkedIn and GitHub; 'industry experts' is not." },
  { q: "What is the doubt-resolution SLA, in writing?", why: "'Same session' and 'within 48 hours on a forum' are different products." },
  { q: "Does a human review my code, or only an auto-grader?", why: "Code review is the most under-priced feature in Indian EdTech." },
  { q: "Can I defer or transfer my batch if work explodes?", why: "The policy tells you whether the provider expects you to finish." },
];

/** Section 7.3 — the project ladder. */
export const projectLadder: string[] = [
  "EDA on a genuinely messy dataset — missing values, leakage traps, honest write-up",
  "End-to-end ML prediction system with a defended metric",
  "Model comparison study with statistical reasoning, not a leaderboard screenshot",
  "Transfer-learning image classifier",
  "Object-detection application",
  "Transformer-based NLP classifier fine-tuned from a Hugging Face checkpoint",
  "First LLM application with structured outputs and real error handling",
  "Semantic search engine over your own corpus",
  "Production-style RAG: chunking, hybrid retrieval, re-ranking, citations, evaluation harness",
  "Fine-tuned domain model benchmarked against the base model",
  "Tool-using agent that survives timeouts and malformed tool output",
  "Multi-agent workflow with explicit cost controls",
  "Multi-modal application (text + image or text + audio)",
  "Deployed AI service: FastAPI + Docker + cloud + monitoring",
  "Learner-designed capstone, defended end to end",
];
