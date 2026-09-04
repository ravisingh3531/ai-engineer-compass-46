export const faqs: { q: string; a: string }[] = [
  {
    q: "How do I become an AI Engineer in India in 2026?",
    a: "One sequence, in order: Python and data foundations, maths intuition, classical ML with real evaluation, deep learning and transformers, then the GenAI layer (LLMs, embeddings, production RAG, LangChain/LangGraph, fine-tuning, agents), then deployment and monitoring. Build 8–15 defensible projects along the way and rehearse explaining them. With 10–12 hours a week alongside a job, that is roughly 12 months; 6 for experienced developers, 15–18 for non-tech switchers.",
  },
  {
    q: "Which course is best to become an AI Engineer?",
    a: "On the six criteria used here, LogicMojo's AI & Machine Learning Course ranks first for aspiring AI Engineers because it runs the full sequence — foundations through GenAI, agents and deployment — live, in IST, with project review. Scaler is the pick if you are buying placement infrastructure, upGrad or Great Learning if you need a university credential, and DeepLearning.AI or IBM if cost is the binding constraint.",
  },
  {
    q: "What skills does an AI Engineer need?",
    a: "Python and SQL; ML foundations with evaluation rigour; deep learning and transformers; LLM fundamentals, prompting, embeddings and vector databases; production RAG including chunking, hybrid search and re-ranking; LangChain/LangGraph; fine-tuning with LoRA/QLoRA; agents with tool use, memory and failure handling; LLM evaluation and guardrails; and MLOps/LLMOps — Docker, FastAPI, CI/CD, monitoring, cost and latency control.",
  },
  {
    q: "AI Engineer vs ML Engineer vs Data Scientist — what's the difference?",
    a: "A Data Scientist turns data into decisions. An ML Engineer trains and productionises models. An AI Engineer builds end-to-end AI systems — increasingly LLM-based — and owns evaluation, integration and deployment. In practice Indian job descriptions blur all three; read the requirements, not the title.",
  },
  {
    q: "Can I become an AI Engineer without a CS degree?",
    a: "Yes, and many do. What blocks non-CS candidates is not the degree but the missing software-engineering hygiene: version control, testing, APIs, deployment. Fix that and a defended portfolio outranks a degree in most private-sector interviews. Some GCC and MNC HR filters still screen on degree; that is where a university-affiliated credential has real value.",
  },
  {
    q: "Do I need maths to be an AI Engineer?",
    a: "You need intuition, not a research-grade background. Linear algebra to reason about embeddings and matrices, calculus enough to understand gradients, probability and statistics to interpret evaluation. If you can explain why your model overfits and why your metric is the right one, you have enough.",
  },
  {
    q: "How long does it take to become an AI Engineer?",
    a: "At 10–12 hours a week: about 12 months from zero, 6–8 months for a working developer, and 15–18 months for a non-tech switcher who also needs Python and maths onboarding. Anyone selling 90 days is selling Level 1.",
  },
  {
    q: "What is the salary of an AI Engineer in India?",
    a: "Directionally, ₹6L–₹12L at 0–2 years, ₹12L–₹25L at 2–5 years, and ₹25L–₹45L at 5+ years, with product companies and GCCs paying materially above services firms. Treat every specific figure as a range to verify against current postings.",
  },
  {
    q: "Is GenAI alone enough to become an AI Engineer?",
    a: "No. GenAI-only learners can demo but cannot debug. The moment an interviewer asks why retrieval quality collapsed, why the fine-tune degraded the base model, or what your latency budget is, the missing ML foundations show.",
  },
  {
    q: "Which projects should an AI Engineer have on GitHub?",
    a: "Five that matter: an end-to-end ML project with a written evaluation rationale; a production-style RAG system with an evaluation harness and citations; a fine-tuned open-weight model benchmarked against its base; a tool-using agent that handles tool failures; and one deployed service with monitoring. Depth over count.",
  },
  {
    q: "What do AI Engineer interviews in India actually test?",
    a: "Python and data manipulation; ML fundamentals and metric choice; transformer intuition; LLM system design (chunking, retrieval, re-ranking, evaluation); agent design and failure handling; deployment, cost and latency; and a deep, adversarial walk through one of your projects.",
  },
  {
    q: "Is LangChain worth learning in 2026?",
    a: "Yes, as a vocabulary and an orchestration option — LangGraph in particular for stateful agent flows. But learn the underlying pattern first; teams routinely drop the framework and keep the architecture, and interviewers probe the architecture.",
  },
  {
    q: "Should I learn RAG or fine-tuning first?",
    a: "RAG. It solves more real problems, costs less, and is what most Indian job descriptions list. Learn fine-tuning next so you can explain when adaptation beats retrieval — that comparison is a common interview question.",
  },
  {
    q: "Are AI agents a real job skill?",
    a: "Yes. Agentic systems moved into production through 2025–2026, and postings now ask for planning, tool use, memory and failure handling. What is not a job skill is wiring a framework demo you cannot debug.",
  },
  {
    q: "Can a fresher become an AI Engineer?",
    a: "It is harder than at 2–5 years because entry-level competition is intense, but yes — via a strong portfolio, internships, and often an adjacent first role (data engineering, backend, ML support) that you convert internally within a year.",
  },
  {
    q: "Is a ₹1L–₹4L program justified when free content exists?",
    a: "Only if it buys you three things free content cannot: sequence, review and accountability. Compute the expected cost as fee divided by your honest probability of finishing. A ₹0 course you abandon costs more than a ₹60,000 course you complete.",
  },
  {
    q: "What is a realistic weekly commitment while working full-time?",
    a: "8–15 hours. Below 6, stretch the timeline rather than shortening the syllabus. Protect two weekday evenings and one weekend block, and treat them as meetings you cannot move.",
  },
  {
    q: "Do certificates matter to Indian AI hiring managers?",
    a: "Mostly as a screening signal, and mostly at HR stage. Once you reach the technical round, nobody has ever extended an offer because of a certificate. They extend it because you defended a system you built.",
  },
  {
    q: "What is RAG, in one paragraph?",
    a: "Retrieval-Augmented Generation: you convert documents into numerical representations (embeddings), store them in a vector database, retrieve the most relevant chunks for a user's question, and pass them to the LLM as context so it answers from your data instead of guessing. Production RAG is mostly about chunking strategy, hybrid search, re-ranking, citations and evaluation — not the retrieval call itself.",
  },
  {
    q: "What are LoRA and QLoRA?",
    a: "Parameter-efficient fine-tuning methods. LoRA trains small adapter matrices instead of the full model; QLoRA does the same on a quantised model so it fits on modest GPUs. Both let you adapt an open-weight model on hardware you can actually rent in India.",
  },
  {
    q: "What is MCP and do I need it?",
    a: "Model Context Protocol standardises how models connect to tools and data sources. You do not need it to get hired, but knowing why a standard tool interface beats bespoke glue is a strong senior-sounding answer.",
  },
  {
    q: "What is LLMOps and how is it different from MLOps?",
    a: "MLOps covers training, deployment, monitoring and drift for models you train. LLMOps adds the concerns specific to LLM systems: prompt versioning, evaluation pipelines, tracing, caching, token cost control, latency budgets and guardrails. In 2026 hiring they are increasingly one job.",
  },
  {
    q: "Which cloud should I learn — AWS, Azure or GCP?",
    a: "The one your target employers use. Indian GCCs skew AWS and Azure; several product companies are GCP-heavy. Learn deployment patterns deeply on one and the transfer is straightforward.",
  },
  {
    q: "Do I need a GPU at home?",
    a: "No. Colab, Kaggle kernels and hourly cloud GPUs cover everything in this roadmap, including QLoRA fine-tunes. Budget ₹2,000–₹6,000 in compute and API credits across a full program.",
  },
  {
    q: "Are placement guarantees real?",
    a: "Treat any guarantee as a marketing instrument with an eligibility clause. Ask for the denominator (enrolled or eligible), the time window, median rather than average salary, whether roles were AI-specific, and for unfiltered alumni contacts.",
  },
  {
    q: "What are the red flags in an AI course landing page?",
    a: "Countdown timers, '100% placement', a syllabus PDF that is not public, GenAI as three closing sessions, no deployment module, 'live' classes that turn out to be recordings, no named instructors, refund terms only shared after payment, and salary screenshots with no context.",
  },
  {
    q: "Can I switch to AI Engineering from QA or DevOps?",
    a: "Yes, and you start with an advantage: LLMOps-heavy AI Engineer roles want exactly your CI/CD, containerisation and observability instincts. Fill the modelling gap and market the infrastructure strength.",
  },
  {
    q: "Is an AI Engineer role available remotely from a Tier-2 city?",
    a: "Increasingly yes, especially with startups and some GCC teams, but hybrid expectations are rising. A deployed portfolio and clear written communication matter more when you are not in the room.",
  },
  {
    q: "How many projects do I need before applying?",
    a: "Three excellent, deployed, defensible ones beat ten notebooks. Start applying once you have a RAG system with evaluation, a deployed service, and one model you trained or fine-tuned yourself.",
  },
  {
    q: "What should my GitHub README contain?",
    a: "The problem, the architecture diagram, the decisions and why you made them, the evaluation results with numbers, known limitations, and how to run it. Interviewers read the decisions section.",
  },
  {
    q: "Should I do a course while job hunting, or finish first?",
    a: "Finish the RAG, fine-tuning and deployment modules first — those are what interviews test. Start applying during the final month while your project narratives are freshest.",
  },
  {
    q: "What if I have already paid for a course I abandoned?",
    a: "Check whether the provider allows batch deferral before writing it off; most do. Then diagnose the actual failure — usually no accountability, no code review, or a schedule that ignored your work life — and choose the next program on that criterion rather than on syllabus length.",
  },
  {
    q: "Is the IndiaAI Mission relevant to my job prospects?",
    a: "Indirectly. Public compute and skilling initiatives expand the ecosystem and government-adjacent demand. It does not change what an interviewer asks you about re-ranking.",
  },
  {
    q: "Will AI Engineering still be hiring in three years?",
    a: "The title will drift — it already has, from 'ML Engineer' to 'AI Engineer' to 'agent engineer' in some postings. The underlying capability, building and operating systems that use models reliably and affordably, is the durable part. Learn the capability, not the title.",
  },
];
