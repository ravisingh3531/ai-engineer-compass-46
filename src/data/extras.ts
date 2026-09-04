// Sections 9, 11–16, 18 and the internal-link map.

export const alsoConsidered: { name: string; verdict: string; note: string }[] = [
  {
    name: "Udemy AI/GenAI bootcamps",
    verdict: "Cheap, current, wildly inconsistent",
    note: "At ₹500–₹3,000 a course, a good Udemy instructor delivers more current GenAI content than several ₹2L programs. What you cannot buy there is sequence, review or accountability, and quality swings hard between instructors. Excellent as a top-up on a specific topic — LangGraph, Docker, a cloud service — after you already have a spine. A poor substitute for one.",
  },
  {
    name: "Fast.ai — Practical Deep Learning for Coders",
    verdict: "Free and genuinely excellent",
    note: "Still one of the best ways to actually train models, taught top-down so you build first and theorise later. It was excluded because it stops well short of the 2026 AI Engineer job description: no production RAG, no agent engineering, no MLOps track, no career support, and it assumes strong self-direction. Pair it with Hugging Face material and you have a strong free deep-learning core.",
  },
  {
    name: "NPTEL / SWAYAM",
    verdict: "Rigorous, academic, near-free",
    note: "IIT-taught courses on ML, deep learning and optimisation at essentially no cost, with a proctored certificate option. The framing is academic rather than engineering: you will leave able to derive, not able to deploy. Ideal for closing a maths or theory gap, and for students who want an institutional certificate on a student budget.",
  },
  {
    name: "IIT Madras BS in Data Science",
    verdict: "A real degree, on a degree timeline",
    note: "Genuinely credentialed, genuinely inexpensive for what it is, and respected by HR filters that reject bootcamps outright. It was excluded because a multi-year degree answers a different question than 'how do I become employable as an AI Engineer this year', and because GenAI engineering is not its centre of gravity.",
  },
  {
    name: "Udacity Nanodegrees",
    verdict: "Strong rubrics, weak India fit",
    note: "The project-review culture is among the best anywhere: human reviewers, clear rubrics, iterative resubmission. In rupee terms the pricing is high for the depth delivered, India-specific career support is minimal, and the catalogue's GenAI refresh has trailed specialists. Worth it if your employer pays and you want reviewed projects.",
  },
  {
    name: "Google Cloud / AWS / Azure AI certifications",
    verdict: "Platform fluency, not the role",
    note: "Cheap, fast and directly useful once you are already employed on that cloud — and a real signal for MLOps-leaning roles. They are platform-scoped by design and will not teach you to reason about chunking strategy or agent failure modes. Best treated as a second certificate stacked on top of engineering capability, not the first thing you buy.",
  },
  {
    name: "Hugging Face courses (NLP, Agents)",
    verdict: "Strongly recommended supplement",
    note: "Free, written by the people who maintain the libraries, and updated faster than any paid syllabus can be. The NLP course is the best transformers material available at any price; the Agents course is a serious treatment of tool use and evaluation. Excluded only because it is reference-grade rather than a structured path with foundations, mentorship or portfolio design.",
  },
  {
    name: "Analytics Vidhya",
    verdict: "Community-first, variable delivery",
    note: "A large Indian data community with hackathons, blogs and frequent GenAI programming. The free ecosystem is more valuable than the paid programs for most learners, and cohort delivery consistency has varied [VERIFY: current program structure]. Use the hackathons for portfolio pressure-testing regardless of where you study.",
  },
  {
    name: "iNeuron and similar low-cost bootcamps",
    verdict: "Low risk, low ceiling",
    note: "Very affordable, high volume, Hindi-English friendly, with genuine enthusiasm in the community. Support continuity and instructor consistency have been uneven across cohorts, and the depth stops around intermediate ML with introductory GenAI. Reasonable as a first ₹10,000; not a route to a hiring-grade portfolio on its own.",
  },
  {
    name: "IISc/TalentSprint, IIM and IIT executive AI programs",
    verdict: "Credential for the already-senior",
    note: "Serious faculty, strong institutional names and a peer group of senior professionals — which is often the actual product. Executive pricing (frequently ₹2.5L+), academic framing and limited hands-on LLM engineering put them outside a ranking optimised for becoming employable as an individual contributor.",
  },
];

/** Section 11 — project archetypes. */
export type Archetype = {
  title: string;
  demonstrates: string;
  question: string;
  weak: string;
  strong: string;
  stack: string;
};

export const archetypes: Archetype[] = [
  {
    title: "Production RAG with an evaluation harness",
    demonstrates: "You understand retrieval as an engineering problem, not a demo",
    question: "\"How would you build question answering over 50,000 internal documents?\"",
    weak: "PDF → naive 1,000-character chunks → top-5 similarity → answer. No citations, no eval.",
    strong: "Structure-aware chunking, hybrid BM25 + dense retrieval, a cross-encoder re-ranker, inline citations, and a 100-question eval set scoring retrieval hit rate, faithfulness and answer relevance — with the failure cases listed.",
    stack: "Python, LangChain/LangGraph, Qdrant or Chroma, BM25, a re-ranker, RAGAS-style eval, FastAPI",
  },
  {
    title: "Fine-tuned open-weight model vs. base benchmark",
    demonstrates: "You can adapt a model and quantify whether it was worth it",
    question: "\"When would you fine-tune instead of using RAG or better prompts?\"",
    weak: "A LoRA run on a public dataset with a screenshot of decreasing loss.",
    strong: "A domain dataset you curated, a documented LoRA/QLoRA configuration, evaluation against the base model on a held-out set, cost and latency comparison, and an honest note on the tasks where the base model still wins.",
    stack: "Hugging Face PEFT, QLoRA, a 7B-class open-weight model, Weights & Biases or MLflow",
  },
  {
    title: "Tool-using agent with failure handling",
    demonstrates: "You think in systems and expect things to break",
    question: "\"What happens when your agent's tool times out or returns garbage?\"",
    weak: "A ReAct loop that calls a search API and prints an answer.",
    strong: "Typed tool schemas, validation on tool output, retry with backoff, a step budget that halts loops, a fallback path, structured traces for every run, and a documented list of the failure modes you actually hit.",
    stack: "LangGraph or Agents SDK, Pydantic, tracing (LangSmith-style), FastAPI",
  },
  {
    title: "Multi-agent workflow with cost controls",
    demonstrates: "You can reason about spend, not just capability",
    question: "\"What does this cost per 1,000 requests, and how do you cap it?\"",
    weak: "Three agents chatting until the task looks done.",
    strong: "Explicit role boundaries, a supervisor that can terminate, token accounting per run, a cheaper model routed to the easy steps, a hard spend ceiling, and a measured comparison against a single-agent baseline that sometimes wins.",
    stack: "CrewAI or AutoGen or LangGraph, model routing, token accounting, Redis for state",
  },
  {
    title: "Deployed ML/LLM service with monitoring",
    demonstrates: "You have crossed the gap between a notebook and production",
    question: "\"How would you serve this to 10,000 users?\"",
    weak: "A Streamlit app on a free tier, described as 'deployed'.",
    strong: "Containerised service behind FastAPI, health and readiness endpoints, structured logging, p50/p95 latency numbers you measured, an alert you configured, a rollback plan and a monthly cost estimate.",
    stack: "FastAPI, Docker, a cloud runtime, Prometheus/Grafana or a hosted equivalent, GitHub Actions",
  },
  {
    title: "Multi-modal application",
    demonstrates: "You can compose models across modalities under real constraints",
    question: "\"How do you evaluate a system whose output is not text?\"",
    weak: "An image captioner wired to a chat box.",
    strong: "A defined task (invoice extraction, medical form triage, accessibility captioning), a vision-language model with structured output, validation of extracted fields, an error taxonomy, and a human-in-the-loop path for low-confidence cases.",
    stack: "A VLM API or open-weight VLM, Pydantic schemas, an OCR fallback, FastAPI",
  },
  {
    title: "Classical ML system with rigorous evaluation",
    demonstrates: "Your foundations are real — the quiet differentiator",
    question: "\"Why that metric, and how did you handle class imbalance?\"",
    weak: "Accuracy of 0.94 on an imbalanced dataset, with a random split.",
    strong: "A business-aligned metric, stratified and time-aware splits, leakage checks, calibration, a threshold chosen against the actual cost of a false positive, and a baseline the model has to beat.",
    stack: "scikit-learn, pandas, imbalanced-learn, SHAP, MLflow",
  },
  {
    title: "Domain capstone you designed yourself",
    demonstrates: "You can scope a problem, not just solve an assigned one",
    question: "\"What would you do differently if you started again?\"",
    weak: "The course's capstone template with the dataset swapped.",
    strong: "A problem drawn from a domain you know — logistics, insurance claims, campus admissions — with a scoping document, a rejected-alternatives section, evaluation tied to a real decision, and a deployed endpoint someone else could use.",
    stack: "Your choice, defended in the README",
  },
];

export const readmeOutline: { heading: string; content: string }[] = [
  { heading: "Problem statement", content: "Two sentences. Who has this problem and what breaks without a solution." },
  { heading: "Architecture diagram", content: "One image. Boxes and arrows beat six paragraphs." },
  { heading: "Decisions & trade-offs", content: "The section interviewers actually read: chunk size, embedding model, retrieval strategy, model choice — and why, with the alternative you rejected." },
  { heading: "Evaluation", content: "Your dataset, your metrics, your numbers, in a table. Include the baseline." },
  { heading: "Results & failure cases", content: "Where it works and where it does not. Stating limits first is a seniority signal." },
  { heading: "Cost & latency", content: "p50/p95 latency and an estimated monthly bill at a stated request volume." },
  { heading: "How to run it", content: "Docker command, environment variables, sample request. Reproducible in under five minutes." },
];

export const defenceChecklist: string[] = [
  "I can explain every dependency in requirements.txt and why it is there.",
  "I can justify my chunk size, embedding model and retrieval strategy with a comparison I ran.",
  "I know my evaluation numbers from memory, including the ones that look bad.",
  "I can name three things that are wrong with the project before the interviewer does.",
  "I can describe what breaks at 100× the traffic and what I would change first.",
  "I can state the monthly cost and where it would go if usage tripled.",
  "I have deleted or clearly labelled every tutorial artefact in the repo.",
  "I have explained the project out loud to someone who pushed back, at least twice.",
];

/** Section 12 — interview question types. */
export const interviewRounds: { round: string; tests: string; typical: string }[] = [
  { round: "1. Screening (recruiter / 30 min)", tests: "Vocabulary, honesty, salary and notice alignment", typical: "\"Explain RAG in two minutes.\" \"Which of these projects is yours end to end?\"" },
  { round: "2. Technical fundamentals (60–90 min)", tests: "Python, ML rigour, evaluation, sometimes light DSA", typical: "Coding on data manipulation, metric selection, overfitting diagnosis, transformer basics" },
  { round: "3. Project deep dive (60 min)", tests: "Ownership and depth — the round most candidates lose", typical: "\"Why that chunk size?\" \"What broke in production?\" \"What did you get wrong?\"" },
  { round: "4. AI system design (60 min)", tests: "Architecture, cost, latency, evaluation, failure handling", typical: "\"Design RAG for 50,000 internal documents with citations and a ₹ budget.\"" },
  { round: "5. Hiring manager / behavioural", tests: "Judgement, communication, cost awareness, collaboration", typical: "\"When would you not use an LLM?\" \"Tell me about a decision you reversed.\"" },
];

export const interviewQuestions: { q: string; answer: string }[] = [
  { q: "Why did you choose that evaluation metric?", answer: "Tie the metric to the cost of each error type in the business, name the metric you rejected, and mention the threshold you chose and why." },
  { q: "How do you handle class imbalance?", answer: "Start with the metric (PR-AUC over accuracy), then resampling, class weights and threshold tuning — and say which you tried and what it did to precision and recall." },
  { q: "Explain attention to a non-technical stakeholder.", answer: "One analogy, no maths, then one sentence of mechanism: the model weighs which earlier words matter for the current one, learned from data." },
  { q: "Design a RAG system for 50,000 internal documents.", answer: "Ingestion and structure-aware chunking, embeddings, hybrid retrieval, re-ranking, citation-bound generation, an eval set, caching, access control, cost per query." },
  { q: "How do you reduce hallucination?", answer: "Ground with retrieval, force citation of retrieved spans, constrain output schemas, add an abstain path, and measure faithfulness — not 'better prompting'." },
  { q: "Prompting vs. RAG vs. fine-tuning — how do you decide?", answer: "Prompting for behaviour, RAG for knowledge that changes, fine-tuning for format, tone or a narrow task at scale. Mention cost, latency and maintenance for each." },
  { q: "How do you evaluate an LLM app with no ground truth?", answer: "Build a small golden set by hand, use rubric-based LLM-as-judge with a human-audited sample, track regression across releases, and state judge bias as a known limitation." },
  { q: "What are your agent's failure modes?", answer: "Tool timeouts, malformed tool output, plan loops, context overflow, cost blow-ups — and the concrete guard you shipped for each." },
  { q: "How would you serve this model at scale?", answer: "Batching, quantisation or a smaller distilled model, caching, autoscaling, queueing, p95 targets and a fallback when the provider is down." },
  { q: "What is your latency budget and where does it go?", answer: "Break it down: retrieval, re-ranking, generation, network. Name the component you would optimise first and the trade-off it costs." },
  { q: "How do you monitor an LLM feature in production?", answer: "Trace every request, log inputs/outputs with PII handling, track cost per request, sample for quality review, alert on latency and refusal-rate drift." },
  { q: "What is data drift and how would you catch it?", answer: "Distribution shift in inputs or targets; catch it with feature-distribution monitoring, performance on delayed labels, and a scheduled retraining trigger." },
  { q: "Explain LoRA in one minute.", answer: "Freeze the base weights, learn low-rank adapters on selected layers, train a fraction of the parameters, merge or serve adapters — cheap, fast, reversible." },
  { q: "When would you not use an LLM?", answer: "Deterministic rules, tabular prediction, strict latency or cost budgets, and anything where a wrong answer is unacceptable and unverifiable." },
  { q: "How do you secure an LLM application?", answer: "Treat prompts as untrusted input: injection defences, tool-permission scoping, output validation, PII redaction, rate limiting and audit logging." },
  { q: "Walk me through your most complex project.", answer: "Problem, constraints, architecture, one hard decision with the alternative rejected, evaluation numbers, what broke, what you would change." },
  { q: "What did you get wrong in that project?", answer: "Name a real, specific mistake and the measured consequence. Candidates who answer 'nothing' lose credibility for everything they said earlier." },
  { q: "How do you keep up as the field changes?", answer: "A concrete routine — specific sources, a monthly build habit, one library you read the source of — beats 'I follow AI news'." },
];

export const fourWeekPlan: { week: string; focus: string; daily: string }[] = [
  { week: "Week 1", focus: "Fundamentals reload", daily: "90 min: ML metrics, imbalance, validation, overfitting; 30 min: Python/SQL drills; write one-paragraph answers to 10 fundamentals questions." },
  { week: "Week 2", focus: "LLM engineering depth", daily: "90 min: RAG internals, fine-tuning decision framework, evaluation; 30 min: re-read your own RAG code and note every decision you cannot justify." },
  { week: "Week 3", focus: "System design + project defence", daily: "One design prompt on a whiteboard, timed 45 min; then 30 min defending one project out loud to a peer or a recording." },
  { week: "Week 4", focus: "Rehearsal and logistics", daily: "Two mock interviews, README polish, cost/latency numbers memorised, behavioural stories written down, salary range decided before the first call." },
];

/** Section 13 — role-wise salary table. */
export const roleSalaryTable: string[][] = [
  ["AI Engineer (fresher, 0–2 yrs)", "Python, ML foundations, LLM APIs, one deployed RAG project", "Defensible portfolio; degree filter at some GCCs", "₹6–14 LPA [VERIFY]", "LogicMojo, GUVI, PW Skills (as a first step)"],
  ["AI Engineer (2–5 yrs)", "RAG at scale, evaluation, agents, deployment, cost control", "Production ownership of at least one AI feature", "₹14–32 LPA [VERIFY]", "LogicMojo, Scaler"],
  ["AI Engineer (5+ yrs)", "System design, model strategy, team leadership", "Architecture decisions with measurable outcomes", "₹30–60 LPA+ [VERIFY]", "LogicMojo (skills), executive programs (credential)"],
  ["GenAI / LLM Engineer", "Prompting, RAG, fine-tuning, guardrails, eval harnesses", "Shipped LLM feature with measured quality", "₹12–40 LPA [VERIFY]", "LogicMojo, DeepLearning.AI short courses"],
  ["ML Engineer", "Classical ML, feature pipelines, training infra, serving", "Model in production with monitoring", "₹10–35 LPA [VERIFY]", "Scaler, LogicMojo, IBM AI Engineering"],
  ["AI Agent Developer", "Agent frameworks, tool integration, MCP, cost governance", "A working agent with failure handling, not a demo", "₹14–38 LPA [VERIFY]", "LogicMojo, Hugging Face Agents course"],
  ["MLOps / LLMOps Engineer", "Docker, K8s, CI/CD, observability, cost and drift", "DevOps or SRE background plus ML literacy", "₹12–40 LPA [VERIFY]", "LogicMojo, cloud vendor certifications"],
  ["NLP Engineer", "Transformers, fine-tuning, tokenisation, domain corpora", "Published or shipped NLP work", "₹10–32 LPA [VERIFY]", "LogicMojo, Hugging Face NLP course"],
  ["Applied Scientist", "Strong maths, research literacy, experimentation", "MS/PhD often expected", "₹25–70 LPA [VERIFY]", "University MTech/MS, NPTEL, DeepLearning.AI"],
];

export const employerTypes: { type: string; what: string }[] = [
  { type: "Global Capability Centres (GCCs)", what: "The largest growth pool in 2026. Structured interview loops, strong compensation, degree filters more common, and real production AI work for the parent company." },
  { type: "Indian product companies & unicorns", what: "Highest bar on engineering fundamentals and system design; the fastest environments for capability growth. Referrals matter more here than certificates." },
  { type: "AI-native startups", what: "Hire on demonstrated building, often skipping the degree question entirely. Expect breadth: you will own retrieval, evaluation and deployment yourself." },
  { type: "IT services & consulting", what: "The largest absolute volume of openings and the easiest internal transition path. Compensation trails, but the AI practice is often where the internal switch happens first." },
  { type: "Enterprises (BFSI, healthcare, retail)", what: "Domain knowledge is a genuine multiplier here; compliance, PII handling and guardrails are interview topics, not footnotes." },
];

export const transitionTimelines: string[][] = [
  ["Software developer (2+ yrs)", "6–9 months", "Foundations move fast; the work is ML rigour plus the GenAI stack", "Indicative"],
  ["Data analyst / BI", "9–12 months", "Python and SQL exist; software engineering hygiene and deployment are the gap", "Indicative"],
  ["DevOps / cloud engineer", "6–10 months", "MLOps is nearly free; classical ML and transformers are the gap", "Indicative"],
  ["QA / support / non-coding IT", "12–15 months", "Programming foundations must be built properly before ML begins", "Indicative"],
  ["Non-technical switcher", "12–18 months", "Layers 1–2 done properly decide everything that follows", "Indicative"],
  ["Final-year student", "9–12 months", "Time is the advantage; internships and open source compensate for no experience", "Indicative"],
];

/** Section 14 — free stack. */
export const freeStack: string[][] = [
  ["1. DeepLearning.AI (audit)", "ML Specialization, Deep Learning Specialization, GenAI short courses", "8–14 weeks", "Free to audit; pay only if you want the certificate"],
  ["2. Fast.ai", "Practical Deep Learning for Coders, part 1 and 2", "6–10 weeks", "Free"],
  ["3. Hugging Face courses", "NLP course, Agents course — transformers and tool use, hands-on", "4–8 weeks", "Free"],
  ["4. Kaggle Learn + competitions", "Applied data skills and the discipline of a leaderboard", "Ongoing", "Free"],
  ["5. NPTEL / SWAYAM", "Maths, optimisation and ML theory from IIT faculty", "12 weeks per course", "Free; nominal certificate fee"],
  ["6. Official documentation", "PyTorch, Hugging Face, LangChain, LangGraph, FastAPI, Docker", "Ongoing", "Free — and more current than any syllabus"],
];

export const freeCannotGive: string[] = [
  "Accountability — nobody notices when you stop in week six",
  "Human code review — the fastest feedback loop in engineering",
  "A curated sequence — assembling one is the expensive, invisible work",
  "Doubt resolution at 11pm on a Tuesday when you are blocked",
  "Portfolio design — knowing which project signals seniority",
  "Interview defence practice with someone who pushes back",
  "A cohort — peers who are one week ahead of you",
  "Career guidance calibrated to Indian hiring",
];

/** Section 15 — ROI scenarios. */
export const roiScenarios: { label: string; badge: string; rows: [string, string][]; verdict: string }[] = [
  {
    label: "Scenario A — Developer, 4 years, mid-band program",
    badge: "ILLUSTRATIVE",
    rows: [
      ["Fee", "₹60,000 [ILLUSTRATIVE]"],
      ["EMI interest", "₹0–₹6,000 depending on no-cost terms [VERIFY with lender]"],
      ["Hours invested", "12 hrs/week × 40 weeks = 480 hours"],
      ["Opportunity cost", "Freelance foregone, or simply weekends"],
      ["Salary delta if the switch lands", "₹3–6 LPA over 24 months [VERIFY: market data]"],
      ["Probability of landing it", "High if the capstone is deployed and applications are consistent"],
      ["Net", "Strongly positive — the mid band is where capability per rupee peaks"],
    ],
    verdict: "The best-case archetype: existing engineering skill compounds, so the course only has to supply the AI layer and the accountability.",
  },
  {
    label: "Scenario B — Non-tech switcher, premium program",
    badge: "ILLUSTRATIVE",
    rows: [
      ["Fee", "₹2,50,000 [ILLUSTRATIVE]"],
      ["EMI interest", "₹20,000–₹45,000 over 24–36 months [VERIFY with lender]"],
      ["Hours invested", "15 hrs/week × 70 weeks = 1,050 hours"],
      ["Opportunity cost", "Higher — foundations must be built before anything compounds"],
      ["Salary delta if the switch lands", "₹2–5 LPA over 24 months, from a lower base [VERIFY]"],
      ["Probability of landing it", "Moderate and highly variable by discipline and portfolio"],
      ["Net", "Positive but slow; payback typically beyond 24 months"],
    ],
    verdict: "Not a reason to avoid switching — a reason to be honest about the timeline and to prefer a fee you can absorb if month nine is hard.",
  },
  {
    label: "Scenario C — ₹2L program, stopped at month three",
    badge: "THE COMMON ONE",
    rows: [
      ["Fee", "₹2,00,000 [ILLUSTRATIVE]"],
      ["EMI interest", "Continues for the full tenure regardless of attendance"],
      ["Hours invested", "~120 hours, mostly on foundations"],
      ["Portfolio produced", "One or two notebook projects"],
      ["Salary delta", "₹0"],
      ["Probability of recovery", "Low without re-enrolling somewhere"],
      ["Net", "Sharply negative — the most common outcome in Indian EdTech"],
    ],
    verdict: "This is why completion probability belongs in the purchase decision. Format, timing and accountability are not soft factors; they are the return.",
  },
];

/** Section 16 — red flags. */
export const redFlags: { flag: string; why: string }[] = [
  { flag: "Guaranteed job or guaranteed salary claims", why: "No provider controls hiring. The eligibility clause always narrows the guarantee to almost nothing." },
  { flag: "No module-level syllabus before payment", why: "If you cannot audit the curriculum against the seven layers, you cannot evaluate the product." },
  { flag: "'Live' classes that are actually replays", why: "Ask to observe one. The answer to that request is the review." },
  { flag: "No last-updated date on the curriculum", why: "In a field that turns over every six months, an undated syllabus is a dated syllabus." },
  { flag: "No RAG, fine-tuning, agents or MLOps in a 2026 syllabus", why: "That is a 2022 data-science course with a GenAI cover slide." },
  { flag: "'10+ projects' with no descriptions", why: "Count is marketing. Ask what the fifth project is and what is evaluated in it." },
  { flag: "Manufactured scarcity — countdowns, '2 seats left'", why: "Online cohorts do not run out of chairs. Urgency is information about the seller." },
  { flag: "Testimonials with no verifiable identity", why: "First name and a stock photo is not a reference. Ask for three alumni you can contact on LinkedIn." },
  { flag: "Placement statistics without a denominator", why: "'93% placed' out of whom, in what window, in what roles, at what salary?" },
  { flag: "Instructor names withheld until enrolment", why: "You are buying instruction. Anonymous instruction is unpriceable." },
  { flag: "No refund window, or one measured in hours", why: "A provider confident in week one gives you week one to decide." },
  { flag: "EMI arranged through an unnamed lender", why: "You are signing a loan, not a course. Read the lender, tenure, interest and default terms." },
  { flag: "70% classical ML with a GenAI cover slide", why: "Map hours per module, not module titles. The clock does not lie." },
  { flag: "Certificates positioned as the primary outcome", why: "No Indian hiring manager has ever made an offer because of a course certificate." },
  { flag: "No human feedback on your code, at any price", why: "Auto-graded notebooks cannot tell you that your abstraction is wrong." },
];

export const salesCallRules: string[] = [
  "Everything in writing — fee, GST, EMI lender, refund window, module list, batch dates, deferral policy.",
  "Never pay on the same call. Any discount that expires when you hang up was never a discount.",
  "Treat urgency as information about the seller, not about the opportunity.",
  "Ask the five delivery questions and write down the answers verbatim.",
  "Ask for three alumni contacts you select yourself from LinkedIn, not a hand-picked list.",
];

/** Section 18 — expert reviewers. */
export const reviewers: { name: string; role: string; company: string; bio: string; quote: string; reviewed: string }[] = [
  {
    name: "[INSERT: Reviewer 1 name]",
    role: "Senior AI Engineer",
    company: "[INSERT: Indian product company]",
    bio: "[INSERT: 40–60-word bio covering years of experience, the AI systems they have shipped, and their relationship to this review. Do not publish until confirmed in writing.]",
    quote: "[INSERT: verbatim quote, used with written permission, on what separates a hireable AI Engineer from a certified one.]",
    reviewed: "Reviewed the curriculum scorecard and the seven-layer mapping",
  },
  {
    name: "[INSERT: Reviewer 2 name]",
    role: "AI Hiring Manager",
    company: "[INSERT: GCC in Bengaluru/Hyderabad]",
    bio: "[INSERT: 40–60-word bio covering hiring volume, the interview loop they run, and their assessment focus.]",
    quote: "[INSERT: verbatim quote on what actually decides a GCC AI Engineer interview.]",
    reviewed: "Reviewed the interview, hiring-landscape and outcomes sections",
  },
  {
    name: "[INSERT: Reviewer 3 name]",
    role: "AI Engineer (developer-turned-AI-Engineer)",
    company: "[INSERT: company]",
    bio: "[INSERT: 40–60-word bio covering their transition from software engineering, the program they completed and how long the switch took.]",
    quote: "[INSERT: verbatim quote on the realities of studying alongside a full-time job.]",
    reviewed: "Reviewed the 12-month roadmap and the delivery-format analysis",
  },
  {
    name: "[INSERT: Reviewer 4 name]",
    role: "AI Career Coach",
    company: "[INSERT: organisation]",
    bio: "[INSERT: 40–60-word bio covering coaching experience with Indian AI candidates and typical client profiles.]",
    quote: "[INSERT: verbatim quote on how candidates should evaluate cost against outcome.]",
    reviewed: "Reviewed the course-finder quiz logic and the ROI scenarios",
  },
  {
    name: "[INSERT: Reviewer 5 name]",
    role: "AI Curriculum Designer",
    company: "[INSERT: organisation]",
    bio: "[INSERT: 40–60-word bio covering curriculum design experience and the frameworks they use to assess syllabus currency.]",
    quote: "[INSERT: verbatim quote on what a 2026 AI Engineer curriculum must contain.]",
    reviewed: "Reviewed the seven-layer skill stack and the capability ladder",
  },
];

/** Internal-link map. */
export const internalLinks: { anchor: string; href: string; note: string }[] = [
  { anchor: "LogicMojo AI & Machine Learning course — curriculum and live batches", href: "#", note: "[INSERT LINK: /artificial-intelligence-machine-learning-course]" },
  { anchor: "LogicMojo Generative AI course", href: "#", note: "[INSERT LINK: GenAI course page]" },
  { anchor: "LogicMojo Data Science course", href: "#", note: "[INSERT LINK: Data Science course page]" },
  { anchor: "LogicMojo DSA & System Design course", href: "#", note: "[INSERT LINK: DSA page]" },
  { anchor: "Download the AI & ML curriculum PDF", href: "#", note: "[INSERT LINK: curriculum PDF]" },
  { anchor: "Upcoming live batch schedule (IST)", href: "#", note: "[INSERT LINK: batch schedule]" },
  { anchor: "Learner project portfolio", href: "#", note: "[INSERT LINK: project portfolio]" },
  { anchor: "AI Engineer roadmap 2026", href: "#", note: "[INSERT LINK: related post]" },
  { anchor: "RAG explained for engineers", href: "#", note: "[INSERT LINK: related post]" },
  { anchor: "LangChain vs LangGraph — which to use when", href: "#", note: "[INSERT LINK: related post]" },
  { anchor: "Fine-tuning vs RAG: when to use which", href: "#", note: "[INSERT LINK: related post]" },
  { anchor: "AI agents explained for working engineers", href: "#", note: "[INSERT LINK: related post]" },
  { anchor: "AI Engineer interview questions asked in India", href: "#", note: "[INSERT LINK: related post]" },
  { anchor: "AI Engineer salary in India by role and city", href: "#", note: "[INSERT LINK: related post]" },
];

export const externalLinks: { anchor: string; href: string }[] = [
  { anchor: "PyTorch documentation", href: "https://pytorch.org/docs" },
  { anchor: "Hugging Face documentation", href: "https://huggingface.co/docs" },
  { anchor: "LangChain documentation", href: "https://python.langchain.com" },
  { anchor: "LangGraph documentation", href: "https://langchain-ai.github.io/langgraph" },
];
