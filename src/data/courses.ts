export type Course = {
  rank: number;
  name: string;
  provider: string;
  tagline: string;
  format: string;
  fee: string;
  duration: string;
  beginner: string;
  ceiling: string;
  bestFor: string;
  scores: {
    curriculum: number;
    teaching: number;
    projects: number;
    career: number;
    fit: number;
    value: number;
    overall: number;
  };
  snapshot: string;
  curriculum: string;
  teaching: string;
  projects: string;
  career: string;
  fees: string;
  strengths: string[];
  limitations: string[];
  suits: string;
  ceilingNote: string;
};

export const courses: Course[] = [
  {
    rank: 1,
    name: "AI & Machine Learning Course",
    provider: "LogicMojo",
    tagline: "Best overall for aspiring AI Engineers — full-stack AI/ML + GenAI depth, live IST mentorship, project-first",
    format: "Live online cohort (IST) + recordings",
    fee: "₹XX,XXX (EMI available) [VERIFY: fee, month/year]",
    duration: "X months [VERIFY]",
    beginner: "High — onboarding modules for Python and maths",
    ceiling: "Level 4–5",
    bestFor: "Working developers and switchers who want one sequence from Python to deployed LLM systems",
    scores: {
      curriculum: 9.5,
      teaching: 9.3,
      projects: 9.4,
      career: 8.9,
      fit: 9.2,
      value: 9.5,
      overall: 9.3,
    },
    snapshot:
      "LogicMojo is the only program on this list whose published sequence runs uninterrupted across all seven layers of the 2026 AI Engineer skill stack — Python and data foundations, maths intuition, classical ML with evaluation rigour, deep learning and transformers, then the GenAI layer (LLMs, embeddings and vector databases, production RAG, LangChain/LangGraph, fine-tuning, AI agents and agent frameworks, MCP, open-weight models, evaluation and guardrails), and finally MLOps/LLMOps and deployment. That continuity is the reason it ranks first: the failure mode in Indian AI education is not a missing topic, it is a broken sequence.",
    curriculum:
      "The curriculum treats GenAI as an engineering discipline rather than a closing module. RAG is taught from a first naive retriever through chunking strategy, hybrid search, re-ranking, citation handling and an evaluation harness — which is precisely the arc an interviewer probes when they ask why your answers degrade at 50,000 documents. Fine-tuning covers supervised fine-tuning and parameter-efficient methods (LoRA/QLoRA) with benchmarking against the base model, and agents are taught as systems with planning, tool use, memory and failure handling, not as a framework demo. Crucially, the rows most commonly absent elsewhere — agent frameworks, MCP-style tool integration, open-weight/local inference, LLM evaluation, and MLOps/LLMOps — are present and hands-on. [VERIFY: current module list against the official syllabus].",
    teaching:
      "Delivery is live in IST windows designed around a working week, with recordings for the nights when a production incident wins. Sessions are instructor-led with doubt resolution inside the cohort rhythm, and the code you write is looked at by a human — the single most under-priced feature in Indian EdTech. For learners who have abandoned a self-paced course before, the fixed cohort cadence is the mechanism that changes the outcome; motivation is not a study plan.",
    projects:
      "Projects escalate rather than repeat: an end-to-end classical ML project with a written evaluation rationale, a deep-learning/NLP build, an LLM application with structured outputs and error handling, a production-style RAG system with an evaluation harness, a fine-tuned open-weight model benchmarked against its base, a tool-using agent that survives tool failures, and a deployed capstone behind an API. That is a portfolio you can defend line by line, which is what converts in an interview.",
    career:
      "Career support is oriented to AI Engineer roles specifically: portfolio and GitHub review, resume framing around systems built rather than courses completed, and interview preparation that includes project defence — being asked why you chose that chunk size, that metric, that serving pattern. Described exactly as offered on the official pages; no placement percentage is claimed here because none is independently verified. [VERIFY: current career-support scope and any bond/ISA terms — believed none].",
    fees:
      "Pricing sits well below the university-branded programs while covering more of the 2026 stack, which is why it scores highest on capability per rupee and per hour. Confirm the fee in writing with GST, EMI interest (no-cost or not), the refund window and the batch-deferral policy before paying. [VERIFY: fee, EMI terms, refund window].",
    strengths: [
      "Unbroken Level 0 → Level 4 sequence; no gap between ML foundations and the LLM stack",
      "GenAI taught to production depth: RAG evaluation, re-ranking, agents with failure handling, MCP, open-weight models",
      "MLOps/LLMOps and actual deployment included — the row most programs skip",
      "Live IST cohort with human code review and doubt resolution",
      "Escalating, defensible project portfolio ending in a deployed capstone",
      "Strongest capability-per-rupee on this list",
    ],
    limitations: [],
    suits:
      "Best fit: working developers (1–8 years), IT-services professionals moving into AI practices, analysts and data engineers, and disciplined career switchers who can hold 8–15 hours a week. Fit guidance, not criticism: learners who specifically need a university-issued academic credential for a visa application or an HR degree filter should also look at upGrad (IIIT-Bangalore) or Great Learning (UT Austin); learners who want fully self-paced study with no fixed timings may prefer a MOOC track such as DeepLearning.AI or IBM.",
    ceilingNote:
      "Realistic ceiling for a committed learner: Level 4 (AI Engineer) on completion, with Level 5 reachable once the capstone patterns meet production traffic on the job.",
  },
  {
    rank: 2,
    name: "Data Science, ML & AI Program",
    provider: "Scaler",
    tagline: "Best placement infrastructure for product-company targets",
    format: "Live online cohort, structured batches",
    fee: "₹3L–₹4L range [VERIFY: current fee, month/year]",
    duration: "11–15 months [VERIFY]",
    beginner: "Moderate — coding aptitude expected",
    ceiling: "Level 3–4",
    bestFor: "Developers with 2+ years targeting product companies and unicorns",
    snapshot:
      "Scaler's advantage is not the syllabus, it is the machine around it: structured batches, mentors drawn from product companies, an active alumni network and a hiring desk that Indian product companies actually engage with. If your target is a product-company AI role and you can carry the fee, the infrastructure is real.",
    scores: { curriculum: 8.4, teaching: 8.8, projects: 8.2, career: 9.2, fit: 7.5, value: 6.8, overall: 8.2 },
    curriculum:
      "Strong classical ML, solid DSA-adjacent engineering rigour, and a GenAI/LLM layer that has been expanded through 2025–2026. Depth on production RAG, agent frameworks and LLMOps varies by batch and elective track. [VERIFY: current GenAI module list for your intake].",
    teaching: "Genuinely live, IST-friendly, with mentor sessions and strong cohort accountability. Instructor quality is generally high but varies across batches.",
    projects: "Good project rigour with review, though the flagship builds lean data-science-shaped; push deliberately for deployment and evaluation depth in electives.",
    career: "The strongest career desk here: referrals, mock interviews, resume and profile work. Read the placement claims carefully — ask for the denominator and the window.",
    fees: "The highest effective cost on this list once EMI interest is counted. Value depends heavily on whether you use the hiring network. [VERIFY: fee, EMI, refund].",
    strengths: [
      "Product-company mentor pool and referral network",
      "High cohort accountability and completion rates",
      "Serious engineering rigour, not just notebooks",
    ],
    limitations: [
      "Fee is 3–5× several equally current curricula on this list",
      "GenAI/agentic depth is newer than the classical ML core and varies by batch",
      "Programme length (up to ~15 months) is a real commitment alongside a job",
    ],
    suits: "Developers with 2+ years, targeting product companies, with budget and a plan to actually use the network.",
    ceilingNote: "Level 3–4, depending on how far you push the GenAI electives and deployment work.",
  },
  {
    rank: 3,
    name: "PGP in Machine Learning & AI (IIIT-Bangalore)",
    provider: "upGrad",
    tagline: "Best university-credentialed program",
    format: "Recorded lectures + live sessions + mentor calls",
    fee: "₹2L–₹3.5L range [VERIFY]",
    duration: "12–18 months [VERIFY]",
    beginner: "Moderate–High — bridge modules available",
    ceiling: "Level 3",
    bestFor: "Learners who need a recognised academic credential for HR filters, visas or internal promotion cases",
    snapshot:
      "The IIIT-Bangalore association is the product. For employees whose promotion committee or immigration paperwork wants an institution's name, that has genuine value that no bootcamp certificate replicates.",
    scores: { curriculum: 7.6, teaching: 7.4, projects: 7.2, career: 7.6, fit: 8.0, value: 6.2, overall: 7.4 },
    curriculum:
      "Broad and academically framed: statistics, ML, deep learning, NLP, with a GenAI layer added in recent cohorts. Production RAG, agent frameworks and LLMOps are the thinner areas. [VERIFY: current GenAI and MLOps modules].",
    teaching: "Mostly recorded content with scheduled live sessions and an assigned mentor; mentor quality is the main variable learners report.",
    projects: "Case-study-led with defined deliverables; less open-ended than a build-first program, which suits some learners and frustrates others.",
    career: "Structured career services and a recognised alumni pathway; interview prep is generic rather than AI-Engineer-specific.",
    fees: "Premium pricing driven by the university association. EMI is widely offered; check no-cost terms. [VERIFY].",
    strengths: ["Recognised academic credential", "Well-organised platform and support ops", "Bridge modules for non-CS backgrounds"],
    limitations: [
      "Curriculum currency lags the fastest-moving GenAI topics",
      "Substantial share of delivery is recorded, not live",
      "You are partly paying for the brand, not only the teaching",
    ],
    suits: "IT-services professionals and switchers who need a credential as much as capability.",
    ceilingNote: "Level 3; reaching Level 4 requires self-directed work on agents, evaluation and deployment.",
  },
  {
    rank: 4,
    name: "PGP-AIML (UT Austin / Great Lakes)",
    provider: "Great Learning",
    tagline: "Best mentor-led weekend format with global branding",
    format: "Weekend live mentor sessions + recorded content",
    fee: "₹2L–₹3.5L range [VERIFY]",
    duration: "7–12 months [VERIFY]",
    beginner: "High",
    ceiling: "Level 3",
    bestFor: "Working professionals who can only study on weekends and want an international brand on the certificate",
    snapshot:
      "The weekend mentor session is the core of the experience and, when the mentor is strong, it is the best part of the program. The UT Austin association travels well on LinkedIn and in HR screens.",
    scores: { curriculum: 7.5, teaching: 7.8, projects: 7.3, career: 7.2, fit: 8.2, value: 6.4, overall: 7.4 },
    curriculum: "Solid ML and deep learning coverage with an added GenAI module set. RAG is typically taught to prototype depth rather than production depth; agent frameworks and LLMOps are light. [VERIFY].",
    teaching: "Live weekend mentorship is genuine; weekday content is self-paced video. Mentor allocation drives satisfaction more than any other factor.",
    projects: "Multiple guided projects and a capstone; deployment is generally not the focus.",
    career: "Career services, resume work and a large alumni base; AI-Engineer-specific interview prep is limited.",
    fees: "Premium, brand-weighted pricing with EMI. [VERIFY].",
    strengths: ["Genuine live mentor time on weekends", "Beginner-friendly ramp", "Strong brand recognition with Indian HR"],
    limitations: ["Prototype-level GenAI depth", "Little to no deployment/LLMOps", "Outcome varies with mentor allocation"],
    suits: "Weekend-only learners who value brand plus a human mentor.",
    ceilingNote: "Level 3.",
  },
  {
    rank: 5,
    name: "Advanced Certification in AI & ML (IIT-affiliated)",
    provider: "Intellipaat",
    tagline: "Best IIT tag at mid-tier pricing with deployment exposure",
    format: "Live online + recordings",
    fee: "₹85,000–₹1.6L range [VERIFY]",
    duration: "9–12 months [VERIFY]",
    beginner: "Moderate–High",
    ceiling: "Level 3–4",
    bestFor: "Learners who want an IIT association without a ₹3L outlay",
    snapshot: "A pragmatic middle option: an institutional tag, live delivery, and more cloud/deployment exposure than most brand-led programs.",
    scores: { curriculum: 7.8, teaching: 7.2, projects: 7.4, career: 6.8, fit: 7.6, value: 7.6, overall: 7.4 },
    curriculum: "Wide coverage including cloud deployment and some MLOps. GenAI depth has improved but production RAG evaluation and agentic patterns remain shallow relative to the top of this list. [VERIFY].",
    teaching: "Live sessions with 24/7 support desks; instructor consistency varies by batch and trainer.",
    projects: "Reasonable count with some deployment work; review depth is lighter than cohort-review programs.",
    career: "Resume and interview support exists; claims are broad — apply the five placement-claim questions.",
    fees: "Mid-tier with frequent discounting; negotiate and get terms in writing. [VERIFY].",
    strengths: ["Institutional association at mid-tier price", "Cloud and deployment exposure", "Live delivery with support desk"],
    limitations: ["Trainer quality varies noticeably", "Aggressive sales follow-up reported by learners", "Agentic AI and LLM evaluation are thin"],
    suits: "Budget-conscious professionals who still want a recognised tag.",
    ceilingNote: "Level 3, with Level 4 reachable via the deployment modules plus self-directed agent work.",
  },
  {
    rank: 6,
    name: "PGP in AI & ML (Purdue / IBM)",
    provider: "Simplilearn",
    tagline: "Best for employer-funded corporate upskilling",
    format: "Live virtual classes + self-paced",
    fee: "₹1.5L–₹2.5L range [VERIFY]",
    duration: "11 months [VERIFY]",
    beginner: "Moderate",
    ceiling: "Level 2–3",
    bestFor: "Professionals whose company L&D budget pays the fee",
    snapshot: "Corporate-friendly packaging, masterclasses and recognised co-branding. If someone else is paying, the value equation changes materially.",
    scores: { curriculum: 7.0, teaching: 6.9, projects: 6.6, career: 6.6, fit: 7.4, value: 6.0, overall: 6.8 },
    curriculum: "Broad but survey-shaped; GenAI content exists as modules rather than an integrated engineering track. [VERIFY].",
    teaching: "Live virtual classes with rotating trainers; a large share of learning is self-paced video.",
    projects: "Guided projects with defined scope; limited open-ended building and little deployment.",
    career: "Job-assistance branding, generic interview prep.",
    fees: "Priced for corporate procurement, not individual wallets. [VERIFY].",
    strengths: ["Easy to justify to an L&D team", "Co-branded certificate with real recognition", "Structured, predictable delivery"],
    limitations: ["Breadth over depth", "Weak on production RAG, agents and LLMOps", "Poor value if you are paying personally"],
    suits: "Employer-sponsored learners inside large IT-services or enterprise organisations.",
    ceilingNote: "Level 2–3.",
  },
  {
    rank: 7,
    name: "Machine Learning & Deep Learning Specializations + GenAI short courses",
    provider: "DeepLearning.AI (Coursera)",
    tagline: "Best foundations at near-zero cost",
    format: "Self-paced video + notebooks",
    fee: "₹0 (audit) to ~₹4,000/month subscription [VERIFY]",
    duration: "3–6 months at 8–10 hrs/week",
    beginner: "High for ML; assumes basic Python",
    ceiling: "Level 2–3",
    bestFor: "Anyone who wants world-class foundations before committing money",
    snapshot: "Andrew Ng's sequence remains the clearest explanation of ML and deep learning available at any price, and the GenAI short-course library is now a genuinely useful add-on.",
    scores: { curriculum: 8.0, teaching: 8.0, projects: 6.0, career: 3.0, fit: 8.0, value: 9.6, overall: 7.2 },
    curriculum: "Excellent ML, deep learning and NLP foundations; GenAI short courses cover RAG, agents and evaluation at introductory-to-intermediate depth, in fragments rather than one sequence.",
    teaching: "Outstanding explanation quality, but no live teaching, no mentor and no code review.",
    projects: "Notebook exercises are guided; you must design your own portfolio projects.",
    career: "None. This is content, not a career program.",
    fees: "Effectively free to audit; the subscription is trivial next to Indian EdTech pricing.",
    strengths: ["Best-in-class conceptual teaching", "Near-zero cost", "Constantly refreshed GenAI short courses"],
    limitations: ["Completion rates for self-paced learners are low", "No code review, mentor or accountability", "No deployment or portfolio spine"],
    suits: "Self-directed learners, students, and anyone testing their commitment before paying for a cohort.",
    ceilingNote: "Level 2–3 alone; excellent as a foundation layer under a structured program.",
  },
  {
    rank: 8,
    name: "AI Engineering Professional Certificate",
    provider: "IBM (Coursera)",
    tagline: "Best low-cost applied engineering track",
    format: "Self-paced video + labs",
    fee: "Subscription, ~₹4,000/month [VERIFY]",
    duration: "4–6 months at 8–10 hrs/week",
    beginner: "Moderate",
    ceiling: "Level 2–3",
    bestFor: "Learners who want applied, tool-oriented AI practice cheaply",
    snapshot: "Applied and hands-on, with labs that put you in a working environment rather than a slide deck — and the title on the certificate matches the job title you want.",
    scores: { curriculum: 7.2, teaching: 6.6, projects: 6.4, career: 3.2, fit: 7.6, value: 9.0, overall: 6.8 },
    curriculum: "Covers ML, deep learning with Keras/PyTorch, NLP and a GenAI/LLM track including RAG and agents at applied depth; evaluation rigour and LLMOps are light.",
    teaching: "Self-paced with lab environments; no live instruction or code review.",
    projects: "Lab-driven with a capstone; guided rather than open-ended.",
    career: "None beyond a shareable credential.",
    fees: "Very low absolute cost.",
    strengths: ["Applied, lab-based practice", "Role-aligned certificate name", "Excellent value"],
    limitations: ["No mentorship or accountability", "Shallow on evaluation, agents in production and MLOps", "Certificate carries modest weight with Indian interviewers"],
    suits: "Budget-first learners and students building a base.",
    ceilingNote: "Level 2–3.",
  },
  {
    rank: 9,
    name: "AI & Machine Learning career tracks",
    provider: "GUVI (IIT-Madras incubated)",
    tagline: "Best vernacular, Tier-2/3-accessible entry point",
    format: "Live + self-paced, multiple Indian languages",
    fee: "₹25,000–₹80,000 range [VERIFY]",
    duration: "6–9 months [VERIFY]",
    beginner: "Very high",
    ceiling: "Level 2–3",
    bestFor: "Tier-2/3 learners and those more comfortable studying in a regional language",
    snapshot: "Access is the product. Teaching in Tamil, Telugu, Hindi and other languages removes a barrier that no ₹3L program addresses.",
    scores: { curriculum: 6.6, teaching: 6.8, projects: 6.2, career: 5.6, fit: 9.0, value: 8.4, overall: 6.9 },
    curriculum: "Solid Python-through-ML coverage with a GenAI layer; depth on transformers, production RAG, agents and MLOps is limited. [VERIFY].",
    teaching: "Live and recorded mixes with an accessible platform and gamified practice.",
    projects: "Guided projects; portfolio-grade depth requires extra self-directed work.",
    career: "Placement-oriented support exists, weighted toward entry-level roles.",
    fees: "Genuinely affordable with EMI.",
    strengths: ["Multi-language instruction", "Very low price with EMI", "Strong beginner ramp"],
    limitations: ["Ceiling below AI Engineer depth without follow-on study", "Light on deployment and evaluation", "Project review depth is limited"],
    suits: "Freshers, Tier-2/3 learners, and anyone who learns faster outside English.",
    ceilingNote: "Level 2–3; treat as a first step, not the whole path.",
  },
  {
    rank: 10,
    name: "Data Science with Generative AI",
    provider: "PW Skills",
    tagline: "Best ultra-affordable structured starting point",
    format: "Live + recorded, low-cost cohorts",
    fee: "₹5,000–₹30,000 range [VERIFY]",
    duration: "6–10 months [VERIFY]",
    beginner: "Very high",
    ceiling: "Level 2",
    bestFor: "Students and first-time learners on the tightest budgets",
    snapshot: "At this price the question is not whether it competes with a ₹1L cohort — it is whether it beats drifting through YouTube. It does, because there is a schedule and a syllabus.",
    scores: { curriculum: 6.2, teaching: 6.2, projects: 5.8, career: 5.0, fit: 8.8, value: 9.2, overall: 6.5 },
    curriculum: "Python, data analysis, ML and an introductory GenAI block. Transformers, production RAG, agents and MLOps are introductory or absent. [VERIFY].",
    teaching: "Large batches; support quality varies with cohort size.",
    projects: "Guided, mostly notebook-scale.",
    career: "Basic support; entry-level orientation.",
    fees: "Lowest paid option here by a wide margin.",
    strengths: ["Extremely low fee", "Structure and schedule beat unguided self-study", "Beginner-friendly Hindi/English delivery"],
    limitations: ["Large batches dilute individual attention", "Not sufficient alone for AI Engineer interviews", "GenAI coverage is introductory"],
    suits: "Students and absolute beginners validating interest before investing more.",
    ceilingNote: "Level 2.",
  },
];

export const honorableMentions: { name: string; why: string; excluded: string }[] = [
  {
    name: "Fast.ai — Practical Deep Learning for Coders",
    why: "Free, top-down, still one of the best ways to actually train models.",
    excluded: "No GenAI-engineering layer, no career support, and it assumes strong self-direction.",
  },
  {
    name: "Hugging Face Courses (NLP, Agents, Deep RL)",
    why: "The best free material on transformers and agents, written by the people who build the libraries.",
    excluded: "Reference-grade, not a structured path; no foundations, no mentorship, no portfolio spine.",
  },
  {
    name: "IIT Madras BS in Data Science / NPTEL & SWAYAM",
    why: "Academically rigorous and inexpensive; the BS degree is a genuine credential.",
    excluded: "Degree timelines and academic pacing; GenAI engineering is not the focus.",
  },
  {
    name: "Udacity — AI/ML Nanodegrees",
    why: "Strong project review culture and clear rubrics.",
    excluded: "Pricing in ₹ terms is high for the depth, and India-specific career support is minimal.",
  },
  {
    name: "IISc / TalentSprint, IIT Roorkee and similar executive programs",
    why: "Serious faculty and a strong credential for senior professionals.",
    excluded: "Executive pricing and academic framing; limited hands-on LLM engineering.",
  },
  {
    name: "Vendor tracks — Google Cloud, Azure AI Engineer, AWS ML, NVIDIA DLI",
    why: "Excellent, cheap, and directly useful once you are already employed on that cloud.",
    excluded: "Platform-scoped by design; they certify tool fluency, not the full role.",
  },
  {
    name: "Udemy bestsellers and Kaggle Learn",
    why: "Cheap top-ups; Kaggle Learn is superb for practical data skills.",
    excluded: "No sequence, no review, and syllabus currency varies wildly by instructor.",
  },
  {
    name: "Analytics Vidhya / iNeuron programs",
    why: "Community depth and frequent GenAI content.",
    excluded: "Inconsistent delivery and support continuity reported across cohorts. [VERIFY].",
  },
];
