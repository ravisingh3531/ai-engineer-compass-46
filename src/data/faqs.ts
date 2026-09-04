export type Faq = { q: string; a: string };
export type FaqGroup = { cluster: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    cluster: "Beginners starting AI Engineering in 2026",
    items: [
      {
        q: "I am a complete beginner with no coding background. Can I still become an AI Engineer in India?",
        a: "Yes, provided you accept the runway. A beginner starting at zero code needs roughly 12–18 months at 10–15 hours a week: about three months on Python, SQL and data handling, two on maths and statistics intuition, three on classical ML with real evaluation, two on deep learning and transformers, three on the GenAI layer (LLMs, RAG, LangChain, agents, fine-tuning), and the rest on deployment, MLOps and interview preparation. What derails beginners is not difficulty, it is sequence — starting with prompt engineering because it is enjoyable, then failing the first technical round on evaluation and debugging.",
      },
      {
        q: "Should a beginner start with a Generative AI course or an AI Engineering course?",
        a: "AI Engineering, without hesitation. A GenAI-only course teaches you to call an API and chain prompts; the moment retrieval quality drops or latency spikes, you have no framework for diagnosing why. AI Engineering courses build the ladder — Python, statistics, classical ML with evaluation, deep learning, transformers — and then place GenAI on top of it. In interviews the GenAI-only candidate is visible within ten minutes: fluent about RAG, unable to say how they measured whether their retrieval worked.",
      },
      {
        q: "Which course should a beginner in India pick to become an AI Engineer?",
        a: "This article's pick for a beginner who also wants job support is the LogicMojo AI & Machine Learning Course, because it starts at Python rather than assuming it, teaches foundations before GenAI, runs live IST cohorts with human code review, and includes AI-specific interview preparation and job assistance. That is an editorial judgement, not a guarantee. If you need a university credential for an HR filter, upGrad or Great Learning fit better; if brand and a placement cell outrank curriculum depth and your budget is open, Scaler does; if your budget is zero, DeepLearning.AI plus Hugging Face plus Kaggle is a legitimate start.",
      },
      {
        q: "How do I verify a course's placement claims before paying?",
        a: "Ask for the deliverables in writing, then verify the outcomes independently. Written deliverables: number of mock interviews, who conducts them, whether your portfolio and resume are reviewed, how long support continues after the course ends, and what happens if you receive no interviews. Independent verification: open the provider's success-story page, pick three learners from your own background, and find them on LinkedIn. Any average-package figure with no cohort size, no date and no auditor is marketing, which is why no placement percentage or salary figure is quoted anywhere on this page.",
      },
      {
        q: "Do beginners really need mathematics and statistics, or can they skip to models?",
        a: "You need intuition, not a research background — and you cannot skip it. Linear algebra to the level of matrices and dot products, calculus to the level of what a gradient means, and probability and statistics to the level of distributions, sampling and significance. That is enough to read a loss function, choose an evaluation metric honestly, and explain why your model looked excellent in a notebook and failed on new data. Every beginner who skips this stalls at the same place: the interview question about why their accuracy number was meaningless.",
      },
      {
        q: "What does an entry-level AI Engineer portfolio need to contain?",
        a: "Three defensible systems, not ten tutorials. A production-style RAG application with an evaluation harness, citations and a documented chunking decision; one deployed service with FastAPI, Docker, monitoring and a cost-per-request estimate; and one classical ML project where you can defend the metric choice and show the failure cases. Add a fine-tuned open-weight model benchmarked against its base if you have time. Every repository needs a README stating the problem, your design decisions, what you measured, and what still does not work — that last section wins more interviews than the code does.",
      },
      {
        q: "Is placement or job assistance worth paying extra for as a beginner?",
        a: "It is worth paying for structured practice, not for a promise. What genuinely helps a beginner is AI-specific mock interviews with feedback, a portfolio review by someone who hires, resume positioning around systems built rather than courses completed, and project-defence rehearsal. What does not help is a job portal login and an email list. Price the difference: if job assistance adds ₹20,000 and delivers six mock interviews and a portfolio review, that is reasonable; if it adds ₹80,000 and delivers a dashboard, it is not.",
      },
    ],
  },
  {
    cluster: "Becoming an AI Engineer",
    items: [
      {
        q: "How do I become an AI Engineer in India in 2026?",
        a: "Follow one continuous sequence and finish it. Python and data foundations, maths intuition, classical ML with honest evaluation, deep learning and transformers, then the GenAI layer — LLM APIs, embeddings and vector databases, production RAG, LangChain/LangGraph, fine-tuning, agents — and finally MLOps and deployment. Build 8–15 escalating projects along the way, deploy at least three, and write READMEs that explain your decisions. At 10–12 hours a week alongside a job, that is roughly 12 months: nearer 6–9 for working developers, 12–18 for non-technical switchers.",
      },
      {
        q: "What does an AI Engineer actually do day to day?",
        a: "Far less model training than people expect. A typical week is designing and tuning retrieval pipelines, writing evaluation sets, wiring LLM calls into existing services with structured outputs and error handling, arguing about latency and cost per request, adding guardrails, debugging why quality dropped after a model version change, and shipping through Docker and CI. It is software engineering with probabilistic components — which is why engineering hygiene, not just ML theory, decides who gets hired.",
      },
      {
        q: "AI Engineer vs. ML Engineer vs. Data Scientist — what is the difference?",
        a: "A Data Scientist turns data into decisions and communicates with stakeholders. An ML Engineer trains, optimises and productionises models, and owns training infrastructure. An AI Engineer builds end-to-end AI systems — increasingly LLM-based — and owns integration, evaluation, guardrails and deployment. In Indian job descriptions these titles blur constantly, so read the requirements section rather than the title. If it mentions RAG, agents, vector databases and deployment, it is an AI Engineer role whatever it is called.",
      },
      {
        q: "Can I become an AI Engineer without a computer science degree?",
        a: "Yes, and a large share of practising AI Engineers in India did not study CS. What blocks non-CS candidates is rarely the theory; it is software engineering hygiene — version control, testing, APIs, containers, deployment. Close that gap and a defended portfolio outperforms a degree in most private-sector interviews. Two caveats: some GCCs and MNCs still apply degree filters at the HR stage, and that is exactly where a university-affiliated credential such as upGrad's IIIT-Bangalore program earns its price.",
      },
      {
        q: "Do I need to be good at maths?",
        a: "You need intuition, not a research-grade background. Concretely: linear algebra to the level of matrices and dot products, calculus to the level of what a gradient means, probability and statistics to the level of distributions, sampling and significance. That is enough to read a loss function, reason about evaluation and follow a paper's notation. Applied Scientist and research roles are the exception — those genuinely require depth, and usually a master's or PhD. For AI Engineering, maths is a tool, not a gate.",
      },
      {
        q: "How long does it realistically take?",
        a: "Indicative ranges, assuming consistent weekly hours rather than bursts: working software developer 6–9 months; data analyst or data engineer 9–12 months; DevOps or cloud engineer 6–10 months; QA or non-coding IT 12–15 months; non-technical switcher 12–18 months; final-year student 9–12 months. The variable that moves these numbers most is not intelligence or budget — it is consistency. Ten focused hours a week for twelve months beats thirty hours a week for six weeks followed by silence.",
      },
      {
        q: "Can a fresher become an AI Engineer?",
        a: "Yes, though the first role is harder to land than the second. Freshers compete without production experience, so the portfolio has to carry the interview: deployed projects, evaluation harnesses, honest READMEs. Internships, open-source contributions and Kaggle work all substitute for experience. Be flexible about the entry title — data analyst, ML intern, backend engineer on an AI team — because moving internally into AI work after twelve months is materially easier than breaking in directly from outside.",
      },
      {
        q: "Can a non-IT graduate (mechanical, commerce, biology) do this?",
        a: "Yes, and domain knowledge is often an advantage later — insurance, healthcare and manufacturing all hire AI Engineers who understand the domain. Plan for a longer runway, typically 12–18 months, and refuse to skip Layers 1 and 2. The failure mode for non-IT switchers is jumping to LLM tutorials because they are fun, then collapsing in an interview on evaluation, debugging or deployment. Build programming and ML foundations properly and the GenAI layer becomes straightforward.",
      },
      {
        q: "Is it too late to start in 2026?",
        a: "No. The tooling turns over roughly every six months, which means the field keeps resetting the expertise clock — someone who started in 2023 has no advantage on MCP, agent frameworks or current evaluation practice. What compounds is engineering judgement, not tool familiarity. Meanwhile the demand side has broadened from a handful of AI-native startups to GCCs, enterprises and IT-services AI practices. Starting late is normal; starting without a sequence is the actual risk.",
      },
    ],
  },
  {
    cluster: "Skills and curriculum",
    items: [
      {
        q: "What skills does an AI Engineer need in 2026?",
        a: "Python and SQL; ML foundations with genuine evaluation rigour; deep learning and transformers in PyTorch; LLM fundamentals including prompting, structured outputs, embeddings and vector databases; production RAG with chunking, hybrid retrieval, re-ranking and citations; orchestration with LangChain or LangGraph; fine-tuning with LoRA/QLoRA and the decision framework around it; agents with tool use, memory, failure handling and cost control; LLM evaluation and guardrails; and MLOps/LLMOps — Docker, FastAPI, CI/CD, monitoring, drift, latency and spend.",
      },
      {
        q: "Is GenAI enough, or do I still need classical ML?",
        a: "You need both, and the interview will prove it. GenAI is what most 2026 roles ship, but the questions that separate candidates are classical: why that metric, how you handled imbalance, whether your split leaked, how you know the model beats a baseline. Evaluation discipline transfers directly from classical ML to LLM systems — the people who build good eval sets for RAG are the people who understood precision and recall first. A GenAI-only learner hits a ceiling in round two.",
      },
      {
        q: "Should I learn RAG or fine-tuning first?",
        a: "RAG first, without exception. It solves more real problems, costs less, ships faster and is asked about in far more interviews. Fine-tuning is the right answer for format, tone, latency or a narrow high-volume task — not for teaching a model new facts, which is the mistake most beginners make. Learn the decision framework properly: try prompting, then RAG, then fine-tuning, and be able to explain the cost, latency and maintenance implications of each choice.",
      },
      {
        q: "Is LangChain still worth learning in 2026?",
        a: "Yes, with judgement. LangChain and LangGraph appear across Indian job descriptions and give you vocabulary for state, retries, tracing and multi-step workflows. Learn the underlying patterns rather than the API surface: what a retriever is, how state moves through a graph, where observability hooks in. Then be able to say when a plain function and an HTTP client are the better answer — that sentence in an interview signals engineering maturity more than any framework fluency.",
      },
      {
        q: "What are AI agents and why do they matter for jobs?",
        a: "An agent is an LLM that plans, calls tools, keeps memory and iterates until a task is done. They matter for hiring because they are where 2026 budgets are moving — support automation, internal workflow, research assistants — and because they are hard. Building the happy path takes an afternoon; handling tool timeouts, malformed output, plan loops, context overflow and runaway spend takes real engineering. Candidates who can name their agent's failure modes and the guards they shipped stand out immediately.",
      },
      {
        q: "Do I really need MLOps?",
        a: "For AI Engineer roles, yes — it is the widest gap between a trained model and an offer. You do not need to be a platform engineer, but you must be able to containerise a service, serve it behind FastAPI, add health checks and structured logging, run it through CI, monitor latency and cost, and describe a rollback. \"How would you serve this to 10,000 users?\" is a standard question, and candidates who have deployed their own capstone answer it from memory rather than theory.",
      },
      {
        q: "PyTorch or TensorFlow?",
        a: "PyTorch, for research alignment, the Hugging Face ecosystem and the overwhelming majority of current job descriptions. TensorFlow and Keras still exist in enterprise codebases, and some courses — Simplilearn and parts of the IBM track — teach them first, which is not disqualifying. If you learn one framework properly, the other takes a weekend. Do not let framework choice become the reason you delay starting; let it be PyTorch and move on to the parts that are actually hard.",
      },
      {
        q: "Will these skills be obsolete in two years?",
        a: "Some will. Specific frameworks, specific model families and specific prompting tricks turn over quickly. What does not turn over: evaluation, retrieval reasoning, system design, cost and latency thinking, debugging, and the software engineering underneath. Choose a course that teaches those as first-class subjects rather than teaching a tour of this quarter's tools, and check that the provider refreshes its curriculum — refresh cadence is a delivery feature in AI, not an editorial nicety.",
      },
      {
        q: "What should a 2026 AI Engineer curriculum include?",
        a: "Audit any syllabus against seven layers: (1) programming and data, (2) maths intuition, (3) classical ML with evaluation, (4) deep learning and transformers, (5) the GenAI stack — LLMs, embeddings, production RAG, orchestration, fine-tuning, agents, MCP, open-weight models, evaluation and guardrails, (6) MLOps/LLMOps and deployment, (7) system design, portfolio and interview preparation. Missing layer 5 depth or layer 6 entirely is the most common failure in Indian programs, and both are testable in interviews.",
      },
    ],
  },
  {
    cluster: "Choosing a course",
    items: [
      {
        q: "Which is the best course to become an AI Engineer in India?",
        a: "On the weighting used in this article — AI Engineer capability gained per rupee and per hour, in a format a working Indian learner can complete — LogicMojo's AI & Machine Learning Course ranks first, because it runs the full seven-layer sequence including production RAG, agents, MCP and deployment, live in IST, with human code review. Weight differently and the answer changes honestly: Scaler for placement infrastructure, upGrad or Great Learning for a university credential, DeepLearning.AI or IBM if cost is the binding constraint.",
      },
      {
        q: "Live cohort or self-paced — which is better?",
        a: "It depends on one thing: your track record. If you have finished self-paced courses before, self-paced is cheaper, more flexible and perfectly sufficient. If you have started and stopped before — which describes most people — the fixed schedule, cohort and someone noticing your absence are the product, not the content. Be honest with yourself rather than aspirational; the most expensive course is the one you abandon in month three while the EMI continues.",
      },
      {
        q: "Short certification or long PG program?",
        a: "Short certifications are excellent top-ups on a specific skill and near-worthless as a standalone route into the role. Long PG programs buy structure, a credential and a cohort, but often at 3–5× the price of an equally current specialist curriculum. The middle band — a focused 6–10 month program covering all seven layers with live delivery — is where capability per rupee peaks for most working learners. Choose length by depth required, not by prestige.",
      },
      {
        q: "University brand or curriculum depth?",
        a: "Ask what the brand is buying. If you need an institutional credential for a visa, an HR degree filter or a promotion committee, brand has genuine, defensible value that no bootcamp certificate replicates. If you are being interviewed by an engineering panel that will ask about chunking strategy and agent failure modes, curriculum depth wins every time. Also clarify precisely what \"in association with\" means: who designs the syllabus, who teaches your batch and who issues the certificate.",
      },
      {
        q: "How do I know a curriculum is actually current?",
        a: "Search the syllabus PDF for five terms: RAG, LoRA or QLoRA, agents, MCP, and either MLflow or monitoring. Then check for a last-updated date, and ask what changed in the most recent revision. Map hours per module rather than counting module titles — 70% classical ML with a GenAI cover slide is the most common disguise. Finally, ask which model providers and libraries are used in demonstrations; a 2023 library set is a reliable tell.",
      },
      {
        q: "How do I verify placement claims?",
        a: "Ask three questions in writing: out of how many enrolled learners, over what window, and in what roles at what compensation. A percentage without a denominator is not data. Ask whether \"placed\" includes internal promotions, contract roles and unrelated positions. Then ask for three alumni you select yourself from LinkedIn rather than a hand-picked list. How a provider responds to that email tells you more than any review aggregator, and no honest provider is offended by it.",
      },
      {
        q: "Can I learn AI while working full time?",
        a: "Yes — most people on this path do. The realistic pattern is 8–12 hours a week: two weekday evenings of 90 minutes and one longer weekend block, protected in your calendar like a meeting you cannot move. Choose IST-timed live sessions with recordings, because a program aligned to US timings will quietly defeat you. Expect two or three bad weeks during releases or appraisals, and pick a provider with a batch-deferral policy so those weeks do not end the attempt.",
      },
    ],
  },
  {
    cluster: "Fees, EMI and ROI",
    items: [
      {
        q: "How much does an AI Engineer course cost in India?",
        a: "The market spans six bands: ₹0 for MOOCs and documentation; ₹500–₹5,000 for single courses; ₹5,000–₹40,000 for affordability-first bootcamps; ₹40,000–₹1,20,000 for specialist live programs; ₹1,20,000–₹2,50,000 for university-affiliated PG programs; and ₹2,50,000+ for premium bootcamps and executive programs. Capability per rupee tends to peak in the ₹40K–₹1.2L band, because above it you are usually buying brand, placement infrastructure or an academic credential rather than a higher capability ceiling.",
      },
      {
        q: "Are expensive courses better?",
        a: "Not on curriculum depth, which is the finding that surprises most readers. Several ₹2L+ programs cover less of the 2026 stack than specialist programs at a third of the price, because university refresh cycles are slower than the field. What premium pricing genuinely buys is brand recognition, placement infrastructure, alumni networks and academic credentials — all legitimate purchases, provided you recognise which one you are making and do not mistake it for a deeper syllabus.",
      },
      {
        q: "Is no-cost EMI really free?",
        a: "Sometimes, and sometimes the interest is embedded in a higher listed price, or subvented for the first few months only. Ask for three things in writing: the lender's name, the total amount payable across the full tenure, and the processing fee. Compare that total against the upfront price. Also confirm what happens to the loan if you defer a batch or drop out — in almost every case the loan continues regardless of whether you are attending.",
      },
      {
        q: "What happens to my EMI if I stop attending?",
        a: "It continues. This is the single most under-discussed fact in Indian EdTech: the loan is a contract with a lender, not with your motivation. Dropping out at month three of a ₹2,00,000 program typically leaves you with 21 to 33 months of remaining payments, two notebook projects and no salary change. This is why completion probability — format, timing, accountability, deferral policy — belongs in the purchase decision alongside curriculum and price.",
      },
      {
        q: "Are there genuinely good free AI Engineer courses?",
        a: "Yes: DeepLearning.AI to audit, Fast.ai, the Hugging Face NLP and Agents courses, Kaggle Learn, NPTEL, and the official PyTorch, LangChain and LangGraph documentation. Together they cover almost every topic a paid program teaches, often better. What they cannot supply is sequence, human code review, accountability, doubt resolution at 11pm, portfolio design and interview defence. Spend eight weeks free first: if you finish, keep going free; if you stall, you have learned what you are buying.",
      },
    ],
  },
  {
    cluster: "Jobs, salaries and interviews",
    items: [
      {
        q: "What is an AI Engineer's salary in India?",
        a: "Indicative ranges only, and they vary by city, employer type, experience and negotiation: fresher roughly ₹6–14 LPA, 2–5 years roughly ₹14–32 LPA, and 5+ years ₹30–60 LPA or above at product companies and GCCs [VERIFY: current market data]. IT-services compensation typically sits below these bands and AI-native startups vary widely with equity. What moves your number most is production ownership, system-design reasoning, a deployed portfolio and domain knowledge — not the certificate on your profile.",
      },
      {
        q: "Can I get an AI job after an online course?",
        a: "Yes, and thousands do each year — but the offer comes from the portfolio and the interview, not the certificate. The pattern that works is: complete the sequence, deploy three substantial projects, write READMEs that explain your decisions, rehearse defending them out loud, then apply consistently for three to four months while continuing to build. Candidates who treat the course completion date as the finish line rather than the starting gun are the ones who report that \"online courses don't work\".",
      },
      {
        q: "How many portfolio projects do I need?",
        a: "Three excellent projects beat ten shallow ones, every time. Interviewers do not count repositories; they pick one and dig until they find the bottom of your understanding. Aim for a production-style RAG system with an evaluation harness, a deployed service with monitoring, and one project that shows classical ML rigour — plus a self-designed capstone if you have time. Delete or clearly archive tutorial clones; a Titanic notebook on a profile reads as \"did tutorials\".",
      },
      {
        q: "Do employers value online certificates?",
        a: "As a signal of effort, mildly. As evidence of capability, almost not at all — with two exceptions. University-issued credentials pass HR degree filters at some GCCs and MNCs, and cloud vendor certifications carry real weight for MLOps-leaning roles on that platform. Everywhere else, the certificate gets you no further than the recruiter screen. What survives round two is a deployed system you can explain, defend and criticise yourself.",
      },
      {
        q: "What do AI Engineer interviews in India actually ask?",
        a: "A typical 2026 loop runs five rounds: recruiter screening, technical fundamentals (Python, ML rigour, evaluation, sometimes light DSA), a project deep dive, an AI system-design round, and a hiring-manager conversation. Recurring questions include designing RAG for 50,000 internal documents, reducing hallucination, choosing between prompting, RAG and fine-tuning, evaluating an LLM app without ground truth, agent failure modes and cost control, and — the one that decides most loops — what you got wrong in your own project.",
      },
    ],
  },
];

export const faqs: Faq[] = faqGroups.flatMap((g) => g.items);
