export const shortNames = [
  "LogicMojo",
  "Scaler",
  "upGrad",
  "Great Learning",
  "Intellipaat",
  "Simplilearn",
  "DeepLearning.AI",
  "IBM",
  "GUVI",
  "PW Skills",
];

/** Depth vocabulary: Deep / Good / Moderate / Basic / None */
export const curriculumScorecard: [string, ...string[]][] = [
  ["Python & SQL", "Deep", "Deep", "Good", "Good", "Good", "Good", "Moderate", "Good", "Good", "Good"],
  ["Maths for AI", "Good", "Good", "Deep", "Good", "Moderate", "Moderate", "Good", "Moderate", "Basic", "Basic"],
  ["Classical ML", "Deep", "Deep", "Deep", "Deep", "Good", "Good", "Deep", "Good", "Good", "Good"],
  ["Model evaluation rigour", "Deep", "Good", "Good", "Moderate", "Moderate", "Basic", "Good", "Moderate", "Basic", "Basic"],
  ["Feature engineering", "Deep", "Deep", "Good", "Good", "Good", "Moderate", "Good", "Moderate", "Moderate", "Moderate"],
  ["Deep learning fundamentals", "Deep", "Good", "Good", "Good", "Good", "Moderate", "Deep", "Good", "Moderate", "Basic"],
  ["CNNs / computer vision", "Deep", "Good", "Good", "Good", "Good", "Moderate", "Good", "Good", "Moderate", "Basic"],
  ["Sequence models", "Deep", "Good", "Good", "Moderate", "Moderate", "Basic", "Good", "Good", "Basic", "Basic"],
  ["Transformers & attention", "Deep", "Good", "Moderate", "Moderate", "Moderate", "Basic", "Good", "Good", "Basic", "Basic"],
  ["Applied NLP", "Deep", "Good", "Good", "Good", "Good", "Moderate", "Good", "Good", "Moderate", "Basic"],
  ["PyTorch / TensorFlow", "Deep", "Good", "Good", "Good", "Good", "Moderate", "Deep", "Good", "Moderate", "Basic"],
  ["LLM fundamentals", "Deep", "Good", "Moderate", "Moderate", "Moderate", "Moderate", "Good", "Good", "Moderate", "Basic"],
  ["Prompt engineering (advanced)", "Deep", "Good", "Moderate", "Moderate", "Moderate", "Moderate", "Good", "Good", "Moderate", "Moderate"],
  ["Embeddings & vector DBs", "Deep", "Good", "Moderate", "Moderate", "Moderate", "Basic", "Good", "Good", "Basic", "Basic"],
  ["RAG (basic → production)", "Deep", "Good", "Moderate", "Basic", "Moderate", "Basic", "Moderate", "Good", "Basic", "Basic"],
  ["LangChain / LangGraph / LlamaIndex", "Deep", "Good", "Basic", "Basic", "Moderate", "Basic", "Moderate", "Moderate", "Basic", "Basic"],
  ["Fine-tuning (SFT, LoRA, QLoRA, DPO)", "Deep", "Moderate", "Basic", "Basic", "Basic", "Basic", "Moderate", "Basic", "None", "None"],
  ["AI agents & agentic patterns", "Deep", "Moderate", "Basic", "Basic", "Basic", "Basic", "Moderate", "Moderate", "Basic", "None"],
  ["Agent frameworks (CrewAI, AutoGen, Agents SDK)", "Deep", "Basic", "None", "None", "Basic", "None", "Moderate", "Basic", "None", "None"],
  ["MCP & tool integration", "Deep", "Basic", "None", "None", "None", "None", "Basic", "Basic", "None", "None"],
  ["Open-weight models & local inference", "Deep", "Moderate", "Basic", "Basic", "Basic", "None", "Moderate", "Basic", "Basic", "None"],
  ["Multi-modal AI", "Good", "Basic", "Basic", "Basic", "Basic", "Basic", "Moderate", "Basic", "Basic", "None"],
  ["LLM evaluation & guardrails", "Deep", "Moderate", "Basic", "Basic", "Basic", "None", "Moderate", "Basic", "None", "None"],
  ["MLOps (tracking, CI/CD, monitoring)", "Deep", "Good", "Moderate", "Basic", "Good", "Basic", "Basic", "Basic", "Basic", "Basic"],
  ["Deployment (Docker, FastAPI, cloud)", "Deep", "Good", "Moderate", "Basic", "Good", "Moderate", "Basic", "Moderate", "Moderate", "Basic"],
  ["Responsible AI & governance", "Good", "Moderate", "Good", "Good", "Moderate", "Moderate", "Good", "Good", "Basic", "Basic"],
  ["AI system design", "Deep", "Good", "Moderate", "Basic", "Moderate", "Basic", "Basic", "Basic", "Basic", "None"],
  ["Portfolio-grade projects (count)", "8–15", "6–10", "5–8", "5–8", "6–10", "5–8", "self-set", "4–6", "4–6", "3–5"],
];

export const teachingScorecard: [string, ...string[]][] = [
  ["Genuinely live (not replays)", "Yes", "Yes", "Partly", "Weekends", "Yes", "Partly", "No", "No", "Partly", "Partly"],
  ["IST timing fit", "Strong", "Strong", "Good", "Weekend-only", "Good", "Mixed", "n/a", "n/a", "Good", "Good"],
  ["Instructor profile", "Practitioner", "Practitioner", "Mixed", "Mixed", "Trainer", "Trainer", "Academic", "Vendor", "Mixed", "Mixed"],
  ["Doubt resolution", "In-cohort, fast", "Fast", "Mentor calls", "Mentor calls", "Support desk", "Support desk", "Forums", "Forums", "Community", "Community"],
  ["Human code review", "Yes", "Yes", "Limited", "Limited", "Limited", "Limited", "No", "No", "Limited", "No"],
  ["1:1 mentor access", "Yes", "Yes", "Yes", "Yes", "Limited", "Limited", "No", "No", "Limited", "No"],
  ["Recordings & catch-up", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "n/a", "n/a", "Yes", "Yes"],
  ["Cohort accountability", "High", "High", "Moderate", "Moderate", "Moderate", "Moderate", "None", "None", "Moderate", "Low"],
  ["Dropout prevention", "Active", "Active", "Moderate", "Moderate", "Moderate", "Moderate", "None", "None", "Low", "Low"],
  ["Platform & mobile", "Good", "Strong", "Strong", "Strong", "Good", "Good", "Strong", "Strong", "Strong", "Good"],
  ["Deferral / pause policy", "[VERIFY]", "Yes", "Yes", "Yes", "[VERIFY]", "[VERIFY]", "n/a", "n/a", "[VERIFY]", "[VERIFY]"],
  ["Realistic completion likelihood", "High", "High", "Moderate", "Moderate", "Moderate", "Moderate", "Low", "Low", "Moderate", "Low"],
];

export const feesTable: string[][] = [
  ["LogicMojo", "₹XX,XXX [VERIFY]", "X months [VERIFY]", "Yes", "[VERIFY]", "GST, cloud/API credits", "Highest"],
  ["Scaler", "₹3L–₹4L [VERIFY]", "11–15 months", "Yes", "Often", "GST, EMI interest, extensions", "Low"],
  ["upGrad", "₹2L–₹3.5L [VERIFY]", "12–18 months", "Yes", "Often", "GST, EMI interest, exam/convocation", "Low"],
  ["Great Learning", "₹2L–₹3.5L [VERIFY]", "7–12 months", "Yes", "Often", "GST, EMI interest", "Low–Moderate"],
  ["Intellipaat", "₹85K–₹1.6L [VERIFY]", "9–12 months", "Yes", "Sometimes", "GST, cloud labs, upsells", "Moderate"],
  ["Simplilearn", "₹1.5L–₹2.5L [VERIFY]", "11 months", "Yes", "Sometimes", "GST, exam vouchers", "Low–Moderate"],
  ["DeepLearning.AI", "₹0–₹4K/month [VERIFY]", "3–6 months", "n/a", "n/a", "Subscription creep, compute", "Very high"],
  ["IBM (Coursera)", "~₹4K/month [VERIFY]", "4–6 months", "n/a", "n/a", "Subscription creep", "Very high"],
  ["GUVI", "₹25K–₹80K [VERIFY]", "6–9 months", "Yes", "Sometimes", "GST, add-on tracks", "High"],
  ["PW Skills", "₹5K–₹30K [VERIFY]", "6–10 months", "Yes", "Sometimes", "GST, add-ons", "High"],
];

export const careerTable: string[][] = [
  [
    "LogicMojo",
    "Career guidance, portfolio & GitHub review, interview preparation",
    "Yes — AI Engineer role framing",
    "Technical + project defence",
    "Yes",
    "Read the official page; no percentage claimed here",
    "None [VERIFY]",
  ],
  ["Scaler", "Dedicated hiring desk, referrals, mock interviews", "Partly", "Strong, DSA-heavy", "Yes", "Ask denominator + window", "Check current terms [VERIFY]"],
  ["upGrad", "Career services, profile building", "No — generic tech", "Moderate", "Limited", "Ask 'AI roles' vs 'any role'", "None [VERIFY]"],
  ["Great Learning", "Career services, alumni network", "No — generic tech", "Moderate", "Limited", "Ask median, not average", "None [VERIFY]"],
  ["Intellipaat", "Resume + interview support", "Partly", "Moderate", "Limited", "Ask for unfiltered alumni contact", "None [VERIFY]"],
  ["Simplilearn", "Job-assistance branding", "No", "Basic", "No", "Treat claims as marketing", "None [VERIFY]"],
  ["DeepLearning.AI", "None", "No", "None", "No", "n/a", "None"],
  ["IBM (Coursera)", "Credential only", "No", "None", "No", "n/a", "None"],
  ["GUVI", "Placement cell, entry-level oriented", "Partly", "Basic", "Limited", "Ask about AI-specific roles", "None [VERIFY]"],
  ["PW Skills", "Basic placement support", "No", "Basic", "No", "Ask denominator", "None [VERIFY]"],
];

export const prereqTable: string[][] = [
  ["LogicMojo", "Basic programming helpful, not mandatory", "School maths", "Yes — Python + maths onboarding", "English", "Yes", "8–15", "Level 0–2"],
  ["Scaler", "Coding experience expected", "Comfortable with maths", "Limited", "English", "Moderate", "12–15", "Level 1–2"],
  ["upGrad", "Basic coding", "Graduate maths helpful", "Yes — bridge modules", "English", "Yes", "10–12", "Level 0–1"],
  ["Great Learning", "None strictly", "None strictly", "Yes — foundations", "English", "Yes", "8–10", "Level 0–1"],
  ["Intellipaat", "Basic coding", "Basic maths", "Yes", "English/Hindi", "Yes", "10–12", "Level 0–1"],
  ["Simplilearn", "Basic coding", "Basic maths", "Partly", "English", "Moderate", "8–10", "Level 1"],
  ["DeepLearning.AI", "Python required", "Comfortable with algebra", "No", "English (subtitles)", "Moderate", "8–10", "Level 1–2"],
  ["IBM (Coursera)", "Python required", "Basic", "No", "English (subtitles)", "Moderate", "8–10", "Level 1–2"],
  ["GUVI", "None", "None", "Yes", "Tamil, Telugu, Hindi, English +", "Yes", "8–12", "Level 0"],
  ["PW Skills", "None", "None", "Yes", "Hindi/English", "Yes", "8–12", "Level 0"],
];

export const capabilityLadder: string[][] = [
  ["0 — AI Aware", "Read about AI, used ChatGPT", "Baseline literacy", "Webinars, 2-day workshops"],
  ["1 — AI Tool User", "Prompt well, use copilots and APIs", "Useful in any job; not an AI role", "\"GenAI in 7 days\", prompt workshops"],
  ["2 — AI Literate", "Understand training, embeddings, transformers, evaluation", "Passes a screening call", "MOOC intros, survey programs"],
  ["3 — AI Builder", "Train models, build RAG apps, write pipelines", "Entry bar for junior AI Engineer roles", "Good bootcamps, strong self-paced tracks"],
  ["4 — AI Engineer", "Architect, fine-tune, evaluate, deploy, monitor LLM and ML systems", "Where AI Engineer offers concentrate", "Programs with agents + MLOps + deployment"],
  ["5 — Senior AI Engineer", "Own AI systems in production; make cost/latency/quality trade-offs", "Senior roles, ₹20L+ territory", "Experience on a Level 4 foundation"],
];

export const roleComparison: string[][] = [
  [
    "Core focus",
    "Insight and modelling from data",
    "Training and productionising ML models",
    "Building end-to-end AI systems — ML + LLMs + agents + deployment",
    "LLM applications, RAG, fine-tuning",
  ],
  [
    "Daily work",
    "EDA, experiments, dashboards, stakeholder analysis",
    "Pipelines, training, serving, monitoring",
    "LLM apps, RAG, agents, evaluation, APIs, product integration",
    "Prompt systems, retrieval, adaptation",
  ],
  [
    "Must-have skills",
    "Stats, SQL, ML, communication",
    "ML, DL, Python engineering, MLOps",
    "Python, ML foundations, DL, LLMs, RAG, agents, evaluation, deployment",
    "LLM APIs, embeddings, RAG, fine-tuning",
  ],
  ["Maths intensity", "Moderate–High", "High", "Moderate–High", "Low–Moderate"],
  [
    "2026 hiring trend",
    "Stable, increasingly AI-literate",
    "Strong in mature ML orgs",
    "Fastest-growing title across product, GCC and services",
    "Fast-growing; often merged into AI Engineer",
  ],
];

export const salaryTable: string[][] = [
  ["0–2 years (fresher / first AI role)", "₹6L–₹12L", "₹10L–₹18L", "Portfolio quality and a defended capstone move this band the most"],
  ["2–5 years (switching in with prior engineering)", "₹12L–₹25L", "₹20L–₹35L", "Prior backend/data experience is the biggest multiplier"],
  ["5+ years (AI Engineer → Senior / Lead)", "₹25L–₹45L", "₹40L–₹70L+", "Production ownership, cost/latency work, system design"],
];
