// Beginner-focused AI Engineering evaluation data.
// Ratings describe published curriculum/delivery coverage as read from official pages.
// They are editorial judgements, not vendor claims. Anything unverifiable is marked [VERIFY].

export type Coverage = "Strong" | "Good" | "Basic" | "Minimal" | "Not covered" | "[VERIFY]";

export const evalDimensions = [
  "Beginner-friendliness (zero-to-one onboarding)",
  "Python from scratch",
  "Mathematics for AI (linear algebra, calculus)",
  "Statistics & probability",
  "Machine Learning (classical, with evaluation)",
  "Deep Learning (PyTorch/TensorFlow)",
  "NLP (classic + transformers)",
  "Computer Vision",
  "Generative AI foundations",
  "LLMs (APIs, prompting, structured output)",
  "RAG (chunking, hybrid search, re-ranking, eval)",
  "LangChain / LangGraph orchestration",
  "AI Agents (planning, tools, memory)",
  "Fine-tuning (SFT, LoRA/QLoRA)",
  "Deployment (FastAPI, Docker, cloud)",
  "MLOps / LLMOps (CI, monitoring, cost)",
  "Hands-on projects & capstone",
  "Mentorship & doubt resolution",
  "Interview preparation (AI-specific)",
  "Placement / job assistance",
  "Hiring partners (named on official pages)",
  "Verified student outcomes published",
] as const;

export type BeginnerRow = {
  rank: number;
  provider: string;
  short: string;
  beginnerScore: number; // out of 10, beginner-readiness weighting
  entryPoint: string;
  coverage: Coverage[]; // aligned to evalDimensions
  placement: string;
  outcomes: string;
};

const C = (...v: Coverage[]) => v;

export const beginnerMatrix: BeginnerRow[] = [
  {
    rank: 1,
    provider: "LogicMojo",
    short: "AI & ML Course",
    beginnerScore: 9.4,
    entryPoint: "Starts at Python basics; no prior ML assumed",
    coverage: C(
      "Strong", "Strong", "Good", "Good", "Strong", "Strong", "Strong", "Good",
      "Strong", "Strong", "Strong", "Strong", "Strong", "Strong", "Strong", "Good",
      "Strong", "Strong", "Strong", "Strong", "[VERIFY]", "Good",
    ),
    placement: "Placement-first positioning with structured job assistance: resume and portfolio review, mock interviews, referrals-style guidance. [VERIFY: current scope on the official page]",
    outcomes: "Publishes named learner success stories at logicmojo.com/success-story. Read them as testimonials, not as an audited placement rate.",
  },
  {
    rank: 2,
    provider: "Scaler",
    short: "DS/ML & AI",
    beginnerScore: 8.3,
    entryPoint: "Beginner track available; entry test / screening common [VERIFY]",
    coverage: C(
      "Good", "Good", "Good", "Strong", "Strong", "Strong", "Strong", "Good",
      "Good", "Good", "Good", "Basic", "Basic", "Basic", "Good", "Good",
      "Strong", "Strong", "Strong", "Strong", "Good", "Good",
    ),
    placement: "Dedicated placement cell and hiring-partner network marketed prominently. Ask for the current cohort's median outcome in writing.",
    outcomes: "Publishes alumni transitions; percentages vary by cohort. [VERIFY]",
  },
  {
    rank: 3,
    provider: "upGrad (IIIT-B)",
    short: "PGP ML & AI",
    beginnerScore: 8.0,
    entryPoint: "Graduate-entry PG program with bridge modules for non-coders",
    coverage: C(
      "Good", "Good", "Strong", "Strong", "Strong", "Good", "Good", "Good",
      "Good", "Good", "Basic", "Basic", "Basic", "Basic", "Basic", "Basic",
      "Good", "Good", "Good", "Good", "Good", "Basic",
    ),
    placement: "Career services plus a university credential that clears HR filters at GCCs and MNCs.",
    outcomes: "Alumni stories published; independent verification limited. [VERIFY]",
  },
  {
    rank: 4,
    provider: "Great Learning",
    short: "PGP-AIML",
    beginnerScore: 8.1,
    entryPoint: "Structured for working professionals; weekend mentor cadence",
    coverage: C(
      "Good", "Good", "Good", "Strong", "Strong", "Good", "Good", "Good",
      "Good", "Good", "Basic", "Basic", "Basic", "Minimal", "Basic", "Minimal",
      "Good", "Strong", "Good", "Good", "Good", "Basic",
    ),
    placement: "Career support and an academic credential (UT Austin / Great Lakes).",
    outcomes: "Testimonials published; treat percentages as marketing until sourced. [VERIFY]",
  },
  {
    rank: 5,
    provider: "Intellipaat",
    short: "Adv. Cert AI & ML",
    beginnerScore: 7.6,
    entryPoint: "Beginner intake with foundation modules",
    coverage: C(
      "Good", "Good", "Basic", "Good", "Good", "Good", "Good", "Basic",
      "Good", "Good", "Basic", "Basic", "Minimal", "Minimal", "Basic", "Basic",
      "Good", "Good", "Good", "Good", "[VERIFY]", "Basic",
    ),
    placement: "Job-assistance program advertised; scope varies by track.",
    outcomes: "Self-published; independent verification limited. [VERIFY]",
  },
  {
    rank: 6,
    provider: "Simplilearn",
    short: "PGP AI & ML",
    beginnerScore: 7.4,
    entryPoint: "Beginner-accessible, recording-heavy",
    coverage: C(
      "Good", "Good", "Basic", "Good", "Good", "Good", "Good", "Basic",
      "Good", "Good", "Basic", "Minimal", "Minimal", "Minimal", "Basic", "Minimal",
      "Good", "Basic", "Basic", "Basic", "Good", "Basic",
    ),
    placement: "Career assistance bundled; largely resume/portal support.",
    outcomes: "Testimonials only. [VERIFY]",
  },
  {
    rank: 7,
    provider: "DeepLearning.AI",
    short: "Specializations",
    beginnerScore: 8.6,
    entryPoint: "Excellent for absolute beginners in theory; assumes you self-organise",
    coverage: C(
      "Strong", "Basic", "Strong", "Good", "Strong", "Strong", "Strong", "Good",
      "Good", "Good", "Good", "Good", "Good", "Basic", "Minimal", "Minimal",
      "Basic", "Not covered", "Not covered", "Not covered", "Not covered", "Not covered",
    ),
    placement: "None. This is education, not a career service.",
    outcomes: "Not applicable.",
  },
  {
    rank: 8,
    provider: "IBM (Coursera)",
    short: "AI Engineering Cert",
    beginnerScore: 7.9,
    entryPoint: "Assumes basic Python before you start",
    coverage: C(
      "Good", "Basic", "Basic", "Basic", "Good", "Good", "Good", "Basic",
      "Good", "Good", "Good", "Good", "Basic", "Basic", "Basic", "Basic",
      "Good", "Not covered", "Not covered", "Not covered", "Not covered", "Not covered",
    ),
    placement: "None; the certificate is the deliverable.",
    outcomes: "Not applicable.",
  },
  {
    rank: 9,
    provider: "GUVI",
    short: "AI/ML tracks",
    beginnerScore: 8.2,
    entryPoint: "Vernacular options; genuinely beginner-first",
    coverage: C(
      "Strong", "Strong", "Basic", "Basic", "Good", "Good", "Basic", "Basic",
      "Good", "Good", "Basic", "Minimal", "Minimal", "Minimal", "Basic", "Minimal",
      "Good", "Good", "Basic", "Basic", "[VERIFY]", "Basic",
    ),
    placement: "Placement assistance advertised on some tracks. [VERIFY]",
    outcomes: "Self-published. [VERIFY]",
  },
  {
    rank: 10,
    provider: "PW Skills",
    short: "DS with GenAI",
    beginnerScore: 7.8,
    entryPoint: "Lowest-friction beginner entry on this list by price",
    coverage: C(
      "Strong", "Strong", "Basic", "Good", "Good", "Basic", "Basic", "Minimal",
      "Good", "Good", "Basic", "Minimal", "Minimal", "Not covered", "Minimal", "Not covered",
      "Good", "Basic", "Basic", "Basic", "Minimal", "Basic",
    ),
    placement: "Limited; portal-based assistance. [VERIFY]",
    outcomes: "Self-published. [VERIFY]",
  },
];

export type ProofPoint = {
  claim: string;
  status: "Verifiable" | "Opinion" | "Unverified";
  detail: string;
  source?: { label: string; href: string };
};

export const logicMojoProof: ProofPoint[] = [
  {
    claim: "Named learner success stories are published and readable",
    status: "Verifiable",
    detail:
      "LogicMojo maintains a public success-story page with named learners and their transitions. Open it, pick three stories in your background, and cross-check the person on LinkedIn before you enrol. That is the standard I applied.",
    source: { label: "logicmojo.com/success-story", href: "https://logicmojo.com/success-story" },
  },
  {
    claim: "Placement-first structure: job assistance runs alongside the syllabus, not after it",
    status: "Verifiable",
    detail:
      "Resume and portfolio review, mock interviews, AI-specific interview preparation and career guidance are part of the program rather than an upsell. Confirm the current scope on the official course page before paying. [VERIFY: exact deliverables, month/year]",
    source: { label: "logicmojo.com — AI & ML course page", href: "https://logicmojo.com/artificial-intelligence-machine-learning-course" },
  },
  {
    claim: "Beginner-friendly entry: the sequence starts at Python, not at transformers",
    status: "Verifiable",
    detail:
      "The published sequence opens with programming and data handling, then maths intuition, then classical ML with evaluation — before any GenAI content. For a beginner this ordering is the single biggest predictor of finishing.",
  },
  {
    claim: "Strong AI/ML foundations before GenAI, then modern GenAI coverage on top",
    status: "Verifiable",
    detail:
      "Classical ML and evaluation, deep learning and transformers, then LLMs, embeddings and vector databases, production RAG, LangChain/LangGraph, fine-tuning (LoRA/QLoRA), agents and MCP-style tool use. [VERIFY: current module list against the official syllabus]",
  },
  {
    claim: "Live IST cohorts with human code review",
    status: "Verifiable",
    detail:
      "Sessions run in Indian evening/weekend windows with recordings. Human review of your code is what converts a beginner's tutorial habit into engineering judgement.",
  },
  {
    claim: "Best overall choice for an Indian beginner targeting an AI Engineer role in 2026",
    status: "Opinion",
    detail:
      "This is my editorial judgement based on capability gained per rupee and per hour for someone starting near zero, not a measured outcome. Another program can be the better buy if you need a university credential or a specific brand on the resume.",
  },
  {
    claim: "Guaranteed placement, a specific placement percentage, or a salary figure",
    status: "Unverified",
    detail:
      "No such claim is made here for LogicMojo or for any other program on this page. No provider on this list published an independently audited placement rate that I could verify, so none is quoted. Ask any counsellor to put outcome claims in writing.",
  },
];

export const chooseSteps = [
  {
    step: "1. Confirm the course starts where you are",
    body: "If you cannot write a for-loop and a pandas groupby today, the course must teach Python and data handling itself. A program that lists 'basic Python required' in the prerequisites is not a beginner program, whatever the landing page says.",
  },
  {
    step: "2. Check the foundations are taught before GenAI",
    body: "Beginners are sold GenAI first because it demos well. Order matters: Python → maths intuition → statistics → classical ML with evaluation → deep learning → transformers → GenAI. A syllabus that opens with prompt engineering produces a learner who cannot debug a bad answer.",
  },
  {
    step: "3. Count design decisions, not projects",
    body: "Ten guided notebooks with the answers filled in equal one portfolio piece. Ask how many projects you architect yourself, and whether any human reads your code.",
  },
  {
    step: "4. Require the full engineering tail",
    body: "RAG, agents and fine-tuning are the middle. Deployment (FastAPI, Docker, a cloud host), monitoring, evaluation harnesses and cost control are what turn a learner into an AI Engineer. Courses that stop at the notebook stop at Level 2.",
  },
  {
    step: "5. Test the mentorship claim before you pay",
    body: "Ask to observe a live class, ask who teaches your batch, ask the doubt-resolution SLA in hours, ask whether a human reviews code, ask about batch deferral. Vague answers are the answer.",
  },
  {
    step: "6. Read placement support literally",
    body: "'Job assistance' can mean mock interviews and referrals, or it can mean a portal login. Get the deliverables in writing: how many mock interviews, who conducts them, is the portfolio reviewed, are companies named.",
  },
  {
    step: "7. Verify outcomes yourself",
    body: "Open the provider's success stories, pick three learners with your background, and find them on LinkedIn. Two minutes of checking beats any brochure statistic.",
  },
  {
    step: "8. Price the completion, not the sticker",
    body: "Fee + GST + EMI interest + the hours you will actually spend. A ₹40,000 course you finish beats a ₹2,50,000 course you abandon in month three while the EMI continues.",
  },
];

export const beyondMarketing = [
  {
    marketing: "\"100% placement assistance\"",
    reality: "Assistance is not placement. Ask what is delivered, by whom, for how long after the course ends, and what happens if you get no interviews.",
  },
  {
    marketing: "\"Learn GenAI in 8 weeks — no coding needed\"",
    reality: "You can learn to use tools in eight weeks. You cannot become an AI Engineer without code. Beginners need 9–15 months of consistent effort.",
  },
  {
    marketing: "\"50+ projects\"",
    reality: "Ask how many you design. Guided rebuilds are practice; self-designed, deployed, defended systems are a portfolio.",
  },
  {
    marketing: "\"Taught by IIT/FAANG faculty\"",
    reality: "Ask who teaches your batch, on your dates. Marquee names often record; teaching assistants deliver.",
  },
  {
    marketing: "\"Average package ₹XX LPA\"",
    reality: "An average with no denominator, no cohort, no date and no auditor is not data. Nothing on this page quotes one for that reason.",
  },
  {
    marketing: "\"Industry-recognised certificate\"",
    reality: "No certificate on this list is a hiring requirement in India. A deployed project with an honest README does more in an interview than any PDF.",
  },
  {
    marketing: "\"Lifetime access\"",
    reality: "Access is not accountability. Self-paced completion rates are low for beginners precisely because nothing external pulls you forward.",
  },
  {
    marketing: "\"Limited seats — price rises tonight\"",
    reality: "Permanent urgency is a sales system. Any genuine course will honour the same price next week; ask for it in writing.",
  },
];
