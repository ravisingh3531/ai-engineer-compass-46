import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/ai-engineer-stack.jpg";
import { courses, honorableMentions } from "@/data/courses";
import {
  capabilityLadder,
  careerTable,
  curriculumScorecard,
  feesTable,
  prereqTable,
  roleComparison,
  salaryTable,
  shortNames,
  teachingScorecard,
} from "@/data/tables";
import { faqs } from "@/data/faqs";
import { Callout, DataTable, H3, Quote, Section, StatCard } from "@/components/article/primitives";
import { Reveal, ScrollProgress } from "@/components/article/Reveal";
import { CourseReview } from "@/components/article/CourseReview";
import { SkillChecklist } from "@/components/article/SkillChecklist";
import { CourseFinderQuiz } from "@/components/article/CourseFinderQuiz";
import { Faq } from "@/components/article/Faq";

const TITLE = "Top 10 AI Courses in India to Become an AI Engineer (2026)";
const DESCRIPTION =
  "Ranked and reviewed: the 10 best AI courses in India to become an AI Engineer in 2026 — skill stack, 12-month roadmap, projects, fees, salaries and interview prep.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Article,
});

const toc: { id: string; label: string }[] = [
  { id: "what-ai-engineers-do", label: "What an AI Engineer actually does in India" },
  { id: "skill-stack", label: "The 2026 AI Engineer skill stack" },
  { id: "roadmap", label: "The 12-month AI Engineer roadmap" },
  { id: "at-a-glance", label: "Top 10 courses at a glance (6 tables)" },
  { id: "reviews", label: "In-depth reviews of all 10 courses" },
  { id: "logicmojo-deep-dive", label: "Why LogicMojo ranks #1 — deep dive" },
  { id: "honorable-mentions", label: "Honorable mentions and exclusions" },
  { id: "quiz", label: "AI Course Finder Quiz" },
  { id: "projects", label: "Projects that get AI Engineers hired" },
  { id: "interviews", label: "AI Engineer interview preparation" },
  { id: "jobs-salaries", label: "Jobs, salaries and hiring landscape" },
  { id: "free-vs-paid", label: "Free vs paid: an honest analysis" },
  { id: "roi", label: "The ROI reality" },
  { id: "red-flags", label: "Red-flags checklist" },
  { id: "verdict", label: "Final verdict" },
  { id: "author", label: "Author and expert reviewers" },
  { id: "faqs", label: "30+ FAQs" },
  { id: "links", label: "Related guides" },
];

function Article() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ScrollProgress />

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <span className="flex items-center gap-2 font-display text-xl text-primary">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
              L
            </span>
            LogicMojo
          </span>
          <span className="eyebrow hidden sm:inline">AI Engineer Guides</span>
        </div>
      </header>

      <div className="relative overflow-hidden mesh-bg">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl float-slow"
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-4 pt-14 sm:px-6">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card/70 px-3 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Career guide · India · 2026
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">
              <span className="gradient-text">Top 10 AI Learning Courses in India</span> to Become an
              AI Engineer (2026) — Skills, Roadmap, Projects, Fees and Career Outcomes Compared
            </h1>
            <div className="mt-5 h-1 w-40 rounded-full shimmer-line" />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span>38 min read</span>
              <span aria-hidden>·</span>
              <span>Last updated: [INSERT DATE]</span>
              <span aria-hidden>·</span>
              <span>10 courses · 6 comparison tables · 34 FAQs</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              This guide is published by LogicMojo; the ranking methodology and scoring criteria are
              stated openly below.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-8 grid gap-3 sm:grid-cols-4">
            <StatCard value="10" label="Courses ranked" />
            <StatCard value="7" label="Skill layers" hint="Python → deployment" />
            <StatCard value="12" label="Month roadmap" />
            <StatCard value="6" label="Scoring pillars" hint="Weighted, stated openly" />
          </Reveal>

          <Reveal delay={200}>
            <img
              src={heroImage}
              alt="Layered diagram of the AI Engineer skill stack taught by the best AI courses in India to become an AI Engineer"
              width={1600}
              height={900}
              className="mt-8 w-full rounded-2xl border border-accent/20 shadow-lift"
            />
          </Reveal>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-4 sm:px-6">


        <Callout label="Quick Answer">
          <p>
            To become an AI Engineer in India in 2026 you need one structured sequence that covers
            Python and ML foundations, deep learning, GenAI and LLMs, production RAG,
            LangChain/LangGraph, fine-tuning, AI agents, and deployment — plus 8–15 defensible
            projects and interview preparation. On that measure, <strong>LogicMojo's AI &amp;
            Machine Learning Course ranks #1</strong> for its full-stack, GenAI-current curriculum,
            live IST mentorship, project-first structure and career-oriented support.{" "}
            <strong>Scaler</strong> is the pick for premium placement infrastructure;{" "}
            <strong>upGrad (IIIT-Bangalore)</strong> and <strong>Great Learning (UT Austin)</strong>{" "}
            for a university-branded credential; <strong>DeepLearning.AI</strong> and{" "}
            <strong>IBM (Coursera)</strong> for near-zero-cost foundations; <strong>GUVI</strong>{" "}
            and <strong>PW Skills</strong> for the lowest-cost structured entry points. Full
            comparison, fees, projects and a course-finder quiz below.
          </p>
        </Callout>

        {/* INTRODUCTION */}
        <div className="prose-body mt-10 text-[1.09rem]">
          <p>
            "AI Engineer" is the fastest-growing technical title in Indian hiring in 2026, and it is
            also the vaguest. Product companies use it for the person shipping LLM features. GCCs
            use it for the platform team building shared inference and evaluation infrastructure.
            IT-services firms use it for consultants staffing an AI practice. Startups use it for
            whoever gets the agent working before the demo. Three developers with the same title do
            three different jobs — which is exactly the ambiguity that course marketing exploits.
          </p>
          <p>
            I have spent the last several months reading AI Engineer job descriptions posted in
            India, comparing them against published curricula, and talking to people who run the
            interviews. What follows is a ranking of the ten AI courses in India that best prepare a
            learner for AI Engineer roles — judged on one question only: will this make you capable
            of doing the work, and help you convert that into a role?
          </p>

          <p>
            Because here is the problem. There are hundreds of programs available to an Indian
            learner, priced from ₹0 to ₹4,00,000+, with near-identical landing pages, "become an AI
            Engineer in 90 days" promises, and affiliate listicles ranked by commission rather than
            curriculum. And the learner cannot evaluate an AI syllabus, because evaluating an AI
            syllabus requires knowing AI.
          </p>

          <p>Three traps are specific to this goal:</p>
          <ol>
            <li>
              <strong>The data-science course in disguise.</strong> pandas, matplotlib, regression,
              random forest, a Titanic notebook — then three GenAI sessions bolted on and "AI
              Engineer" added to the title. It is a 2022 syllabus with a 2026 cover slide.
            </li>
            <li>
              <strong>The GenAI-only sprint.</strong> Prompting, one API call, a LangChain
              hello-world. No ML foundations, no evaluation, no deployment. The learner can demo and
              cannot debug — and the first interview question past the demo ends the conversation.
            </li>
            <li>
              <strong>The credential-first program.</strong> The brand is real and the syllabus is
              2023. The learner walks into an interview that asks about re-ranking strategy, agent
              failure modes and serving cost, holding a certificate that never mentioned any of
              them.
            </li>
          </ol>

          <Quote>
            An AI Engineer is hired on what they can build, evaluate, deploy and explain. Courses
            that teach tools without foundations produce demo-makers. Courses that teach foundations
            without the 2026 LLM stack produce data scientists. The course you need does both — in
            one sequence, with someone reviewing your code.
          </Quote>

          <p>
            The cost of choosing wrong is not theoretical, and it is not only money. I keep meeting
            the same nine people:
          </p>
          <ul>
            <li>
              The backend developer who paid ₹2L for a program that never mentioned deployment, and
              froze when an interviewer asked "how would you serve this to 10,000 users?"
            </li>
            <li>
              The switcher who learned LangChain first and could not explain what an embedding is
              when asked.
            </li>
            <li>
              The fresher whose "AI Engineer" certificate produced 40 applications and zero
              interviews, because the GitHub behind it was three copied notebooks.
            </li>
            <li>
              The learner one week from finishing a free MOOC who had a bad week at work and never
              went back.
            </li>
            <li>The "live" cohort that turned out to be recordings with a moderator in the chat.</li>
            <li>The ₹0 stack that was genuinely excellent, and genuinely unfinished.</li>
            <li>The EMI still auto-debiting for a course abandoned in month three.</li>
            <li>
              The learner who chose purely by brand and was asked, in round two, why their model
              overfits.
            </li>
            <li>
              The analyst who could describe RAG perfectly and had never once measured whether their
              retrieval was any good.
            </li>
          </ul>

          <p>
            Contrast that with the learners who chose well. Their GitHub has a RAG system with an
            evaluation harness and citations. A fine-tuned open-weight model benchmarked against its
            base, with the regression honestly reported. A tool-using agent that handles a failing
            API instead of crashing. A deployed service with monitoring and a cost estimate. And —
            the part that actually wins offers — they can defend every design decision in those
            systems for ten minutes without slides.
          </p>

          <Quote>
            The financial cost of the wrong course is ₹50,000 to ₹3,00,000. The real cost is nine
            months spent learning things that don't compound — in a field where nine months is a
            generation.
          </Quote>

          <p>
            <strong>So here is the approach.</strong> Every program was assessed against a single
            question: if I am an Indian learner with a laptop and 8–15 hours a week, will this
            course make me capable of doing AI Engineer work, and help me convert that into a role?
            Six weighted pillars carry that question through every table on this page:
          </p>
          <ol>
            <li>
              <strong>AI Engineer curriculum depth &amp; 2026 relevance (25%)</strong> — foundations
              → ML → deep learning → NLP/CV → GenAI, RAG, LangChain, fine-tuning, agents →
              MLOps/LLMOps → evaluation and responsible AI. Current, or 2023 content in a 2026
              wrapper?
            </li>
            <li>
              <strong>Teaching, mentorship &amp; delivery quality (20%)</strong> — genuinely live or
              replayed; instructor quality; doubt-resolution speed; human code review; recordings;
              cohort accountability.
            </li>
            <li>
              <strong>Hands-on project rigour (20%)</strong> — do you build or follow along;
              portfolio-grade with review; a real capstone; anything actually deployed.
            </li>
            <li>
              <strong>Career &amp; placement support (15%)</strong> — AI-Engineer-specific or
              generic; interview prep depth; portfolio review; whether claims are verifiable.
            </li>
            <li>
              <strong>Beginner suitability &amp; fit for Indian learners (10%)</strong> —
              prerequisite onboarding, IST timings, ₹ pricing, EMI, deferral, refund policy.
            </li>
            <li>
              <strong>Value for money (10%)</strong> — capability gained per rupee and per hour.
            </li>
          </ol>

          <p>
            <strong>Shortlist criteria:</strong> teaches substantive AI rather than tools only; a
            verified 2025–2026 curriculum with a real GenAI/LLM layer; hands-on building;
            completable online from anywhere in India; accessible price and schedule; demonstrable
            outcomes rather than claims.
          </p>
        </div>

        <DataTable
          head={["Level", "What you can do", "What Indian hiring calls this (2026)", "Courses that stop here"]}
          rows={capabilityLadder}
          caption="Visual 1 — The AI Engineer Capability Ladder. Most courses deliver Level 1–2 and market it as Level 4. AI Engineer hiring in India in 2026 starts at Level 3 and offers concentrate at Level 4. Every course here is scored on the highest level it can realistically take a committed learner to."
        />

        {/* TOC */}
        <Reveal
          as="section"
          className="mt-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-secondary via-card to-highlight p-6 shadow-editorial"
        >
          <nav id="toc" aria-label="Table of contents" className="scroll-mt-24">
            <p className="eyebrow">On this page</p>
            <ol className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a
                    className="lift-hover flex items-start gap-3 rounded-xl border border-border/70 bg-card/80 px-3 py-2.5 no-underline"
                    href={`#${t.id}`}
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{t.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>


        {/* SECTION 3 */}
        <Section id="what-ai-engineers-do" eyebrow="Section 1" title="What an AI Engineer Actually Does in India (2026)">
          <p>
            Before you choose a course, you need a defensible picture of the job. An AI Engineer in
            India in 2026 builds systems that use models — usually LLMs, often alongside classical
            ML — and is accountable for whether those systems work in production: accuracy,
            latency, cost, failure behaviour and integration with the rest of the product.
          </p>

          <H3 id="role-comparison">AI Engineer vs. ML Engineer vs. Data Scientist vs. GenAI Engineer</H3>
          <DataTable
            head={["", "Data Scientist", "ML Engineer", "AI Engineer", "GenAI / LLM Engineer"]}
            rows={roleComparison}
          />

          <H3>What "AI Engineer" means in a 2026 Indian job description</H3>
          <p>
            Read enough postings and the same requirement clusters recur: LLM application
            development; RAG pipelines over internal documents; agent orchestration and tool use;
            model evaluation and guardrails; API and backend integration (usually Python and
            FastAPI); cloud deployment and containerisation; cost and latency optimisation; and
            responsible-AI awareness. Classical ML appears in roughly half of them, more in BFSI and
            retail. <em>[VERIFY against current postings on Naukri, LinkedIn and company careers
            pages at time of publication.]</em>
          </p>
          <p>
            Titles are applied inconsistently. The same requirement list appears under "AI
            Engineer", "GenAI Engineer", "ML Engineer — LLM" and "Applied Scientist". Read
            requirements, not titles, and apply to the ones whose bullet points match what you can
            actually build.
          </p>

          <H3>Where AI Engineers are hired in India (2026)</H3>
          <ul>
            <li>
              <strong>GCCs</strong> in Bengaluru, Hyderabad, Pune, NCR and Chennai — the largest
              single source of structured AI Engineer roles, often platform-shaped.
            </li>
            <li>
              <strong>Product companies</strong> shipping LLM features into existing products.
            </li>
            <li>
              <strong>IT-services AI practices</strong> — TCS, Infosys, Wipro, HCLTech, Cognizant,
              Capgemini, Accenture — staffing client AI delivery at volume.
            </li>
            <li>
              <strong>AI-native startups</strong> — highest learning velocity, highest variance.
            </li>
            <li>
              <strong>Enterprise adopters</strong> in BFSI, healthcare, retail and manufacturing.
            </li>
            <li>
              <strong>Remote and hybrid roles</strong>, which have widened access for Tier-2/3
              professionals but tightened on communication and portfolio evidence.
            </li>
          </ul>
          <Callout tone="muted" label="Honest counterpoint">
            <p>
              Entry-level competition is intense and getting worse; a "junior AI Engineer" posting
              can attract four figures of applications. Portfolios outweigh certificates in every
              technical round I have heard described. A strong Level-3 portfolio beats a weak
              Level-4 certificate, every time.
            </p>
          </Callout>
        </Section>

        {/* SECTION 4 */}
        <Section id="skill-stack" eyebrow="Section 2" title="The 2026 AI Engineer Skill Stack — What a Course Must Teach">
          <p>
            Seven layers. Use this as your audit checklist when you open any syllabus PDF, including
            the ones on this list.
          </p>

          <H3>Layer 1 — Programming &amp; data foundations</H3>
          <p>
            Python for AI, NumPy, pandas, SQL, Git and GitHub, virtual environments, working with
            APIs, and basic software-engineering hygiene. <strong>Most often skipped</strong> for
            exactly the career switchers who need it most — and it is the layer that decides whether
            your code survives review.
          </p>

          <H3>Layer 2 — Maths &amp; statistics (intuition-first)</H3>
          <p>
            Linear algebra, gradients, probability, statistics, hypothesis testing. Not to derive
            backpropagation on a whiteboard, but to reason about why a model behaves the way it
            does. Courses either overdo this into a semester of theory or skip it entirely; both
            fail the learner.
          </p>

          <H3>Layer 3 — Core machine learning</H3>
          <p>
            Regression, classification, trees, ensembles, clustering, feature engineering,
            cross-validation, bias–variance, regularisation, evaluation metrics, imbalanced data.
            Classical ML is still the majority of AI in production at Indian companies, and it is
            commonly taught without evaluation rigour — which is the part interviewers test.
          </p>

          <H3>Layer 4 — Deep learning &amp; applied domains</H3>
          <p>
            Neural network fundamentals, optimisers, CNNs, RNNs, transformers and attention,
            transfer learning, PyTorch, GPU practicalities, NLP (tokenisation, embeddings, NER,
            sequence models) and computer-vision basics. You cannot understand LLMs without
            transformers; skipping this layer is why "GenAI-only" learners plateau.
          </p>

          <H3>Layer 5 — GenAI, LLMs, RAG, LangChain, fine-tuning &amp; agents</H3>
          <p>
            The AI Engineer differentiator. How LLMs work; prompt engineering from basic to
            advanced; LLM APIs; open-weight models (Llama, Mistral, Qwen, Gemma, DeepSeek) and local
            inference with Ollama; <strong>embeddings</strong> (numeric representations of meaning)
            and <strong>vector databases</strong>; <strong>RAG</strong> (Retrieval-Augmented
            Generation — answering from your own documents) from a naive retriever to production
            with chunking, hybrid search, re-ranking, citations and evaluation;
            LangChain/LangGraph/LlamaIndex; fine-tuning (SFT, <strong>LoRA/QLoRA</strong> —
            parameter-efficient adaptation — and <strong>DPO</strong> concepts);{" "}
            <strong>AI agents</strong> with planning, tool use, memory and failure handling;
            multi-agent frameworks (CrewAI, AutoGen, OpenAI Agents SDK); <strong>MCP</strong> (Model
            Context Protocol — a standard way to connect models to tools); multi-modal; and LLM
            evaluation with <strong>LLM-as-judge</strong> plus guardrails against hallucination.
            Commonly half-covered: prompting and one API call, then stop.
          </p>

          <H3>Layer 6 — Production (MLOps &amp; LLMOps)</H3>
          <p>
            Packaging, FastAPI serving, Docker, CI/CD, experiment tracking (MLflow), model registry,
            monitoring and <strong>drift</strong> (the silent degradation of a model as real-world
            data shifts), LLM observability and tracing, prompt versioning, caching, cost and
            latency optimisation, cloud deployment. <strong>LLMOps</strong> is MLOps plus the
            LLM-specific concerns. This is the largest single gap between "trained a model" and
            "hired as an AI Engineer".
          </p>

          <H3>Layer 7 — Professional &amp; interview readiness</H3>
          <p>
            Portfolio construction, README quality, AI system design, project defence, technical
            communication, responsible AI and governance, and domain framing — the ability to say
            what business problem your system solves and what it costs to run.
          </p>

          <Callout label="The Seven-Layer Audit">
            <p>
              Take any syllabus PDF — including any on this list — and mark each layer as{" "}
              <strong>hands-on</strong>, <strong>theory-only</strong>, or <strong>absent</strong>.
              If Layer 5 is only prompting and LangChain basics, or Layer 6 is missing entirely, you
              are looking at a course that produces demo-makers, not AI Engineers.
            </p>
          </Callout>

          <H3 id="checklist">AI Engineer skill-gap checklist (self-assessment)</H3>
          <p>
            Thirty items, grouped by layer. Tick honestly — "I watched a video about it" is a no.
            Your band maps to the kind of program you should be shopping for.
          </p>
        </Section>
        <SkillChecklist />

        {/* SECTION 5 */}
        <Section id="roadmap" eyebrow="Section 3" title="The AI Engineer Roadmap — From Zero to Hireable in 12 Months (With a Job)">
          <p>
            Assume 10–12 hours a week. Each month has a focus, a deliverable that goes on GitHub,
            and the interview question that deliverable prepares you for.
          </p>
          <DataTable
            head={["Month", "Focus", "Deliverable", "Interview question it prepares you for"]}
            rows={[
              ["M1", "Python, NumPy/pandas, Git", "Cleaned-dataset analysis on GitHub", "\"Walk me through how you'd handle missing data here.\""],
              ["M2", "Statistics, probability, linear algebra intuition, SQL", "Statistical analysis with documented assumptions", "\"Is that difference significant, and how do you know?\""],
              ["M3", "Core ML and evaluation", "End-to-end ML project with written evaluation rationale", "\"Why that metric and not accuracy?\""],
              ["M4", "Feature engineering, tuning, imbalanced data", "Model comparison study", "\"Your positive class is 2% — what did you do?\""],
              ["M5", "Deep learning and PyTorch", "Trained network with a debugging write-up", "\"Your loss went to NaN. What now?\""],
              ["M6", "CNNs, transfer learning, NLP basics", "Fine-tuned classifier on a custom dataset", "\"Why transfer learning instead of training from scratch?\""],
              ["M7", "Transformers, embeddings, Hugging Face", "Transformer-based NLP system", "\"Explain attention without hand-waving.\""],
              ["M8", "LLM fundamentals, prompting, APIs, open-weight models", "LLM app with structured outputs and error handling", "\"What happens when the model returns invalid JSON?\""],
              ["M9", "Vector DBs, RAG, LangChain/LangGraph", "Production-style RAG with evaluation harness and citations", "\"Retrieval quality dropped at 50k docs. Diagnose it.\""],
              ["M10", "Fine-tuning (LoRA/QLoRA)", "Fine-tuned model benchmarked against base", "\"When would you fine-tune instead of using RAG?\""],
              ["M11", "Agents, frameworks, MCP", "Tool-using agent surviving adversarial inputs and tool failures", "\"Your tool call times out mid-plan. What does the agent do?\""],
              ["M12", "MLOps/LLMOps, deployment, monitoring", "Deployed capstone, polished portfolio, rehearsed narratives", "\"What does this cost to run at 10,000 users a day?\""],
            ]}
          />

          <H3>Compressed 6-month track for experienced developers</H3>
          <p>
            Skip M1 and compress M2 into a weekend of refreshers. Merge M3–M4 into one month of ML
            with heavy evaluation focus. Keep M5–M7 intact — transformers are non-negotiable — and
            then run M8–M12 at full depth. Your advantage is engineering hygiene; your risk is
            assuming ML intuition transfers automatically from backend experience. It does not.
          </p>

          <H3>Stretched 15–18-month track for non-tech switchers</H3>
          <p>
            Give M1 three months and M2 two months; nothing later works without them. Add a month
            after M3 purely for repetition on real datasets. Expect the maths wall around month
            four and the first failed training run around month seven — both are normal, and both
            are where people quit alone and continue in a cohort.
          </p>

          <Quote>
            A structured course compresses this by removing the search cost — deciding what to learn
            next is where most self-taught learners lose their months. LogicMojo's sequence follows
            this progression end-to-end; the roadmap above is what you would have to assemble
            yourself if you went without one.
          </Quote>
        </Section>

        {/* SECTION 6 */}
        <Section id="at-a-glance" eyebrow="Section 4" title="Top 10 AI Courses in India to Become an AI Engineer (2026) — At a Glance">
          <p>
            The ranking weights curriculum depth and delivery quality heaviest, because between them
            they decide two things nothing else does: whether a learner can reach Level 4, and
            whether they finish at all. Career support matters, but it is worth little attached to a
            2023 syllabus, and placement claims are the least verifiable data on any landing page.
            Price is weighted last — not because money is unimportant, but because the expensive
            mistake in this market is rarely the fee. It is the year.
          </p>
          <p>
            "#1" does not mean "right for everyone". A learner who needs a university credential for
            a visa has a different constraint than a backend developer who needs agent and
            deployment depth. That is what the "Best For" column is for, and why there is a quiz
            further down.
          </p>

          <H3>The ranked list</H3>
          <ol>
            {courses.map((c) => (
              <li key={c.rank}>
                <strong>
                  {c.provider} — {c.name}
                </strong>{" "}
                — {c.tagline.charAt(0).toLowerCase() + c.tagline.slice(1)}
              </li>
            ))}
          </ol>

          <H3>Table 1 — Overview at a glance</H3>
          <DataTable
            head={["#", "Course", "Format", "Fees (₹)", "Duration", "Beginner suitability", "Ceiling", "Best for"]}
            rows={courses.map((c) => [
              `${c.rank}`,
              `${c.provider} — ${c.name}`,
              c.format,
              c.fee,
              c.duration,
              c.beginner,
              c.ceiling,
              c.bestFor,
            ])}
            caption="Fees change frequently, are often negotiable, and must be confirmed in writing — with GST, EMI interest and the refund window stated explicitly — before you pay anything."
          />

          <H3>Table 2 — AI Engineer curriculum depth scorecard</H3>
          <p>
            The most important table on this page. Vocabulary: <strong>Deep</strong> (taught to
            production depth, hands-on) · <strong>Good</strong> · <strong>Moderate</strong> ·{" "}
            <strong>Basic</strong> (mentioned or demoed) · <strong>None</strong>. Cells are drawn
            from published curricula; mark anything you cannot confirm as [VERIFY] when you do your
            own check.
          </p>
          <DataTable head={["Topic", ...shortNames]} rows={curriculumScorecard} />
          <p>
            Read the bottom third of that table first. Python, classical ML and even basic prompting
            are baseline literacy in 2026 — everybody teaches them, and no interviewer is impressed.
            The rows that separate an AI Engineer course from a data-science course are fine-tuning,
            agent frameworks, MCP and tool integration, open-weight and local inference, LLM
            evaluation and guardrails, MLOps and deployment, and AI system design. Those are also
            the rows where most of this market shows Basic or None.
          </p>

          <H3>Table 3 — Teaching, mentorship &amp; delivery scorecard</H3>
          <DataTable head={["Dimension", ...shortNames]} rows={teachingScorecard} />
          <p>
            The last row is the most predictive line on this page. A ₹0 course you do not finish
            returns less than a ₹60,000 course you do. Self-paced completion rates in this market
            are brutally low, and no syllabus fixes that — cohort cadence, code review and a person
            who notices when you disappear do.
          </p>

          <H3>Table 4 — Fees, duration, EMI and total cost of ownership</H3>
          <DataTable
            head={["Course", "Headline fee", "Duration", "EMI", "No-cost EMI", "Hidden costs to check", "Capability per ₹"]}
            rows={feesTable}
          />
          <Callout tone="muted" label="The EMI trap">
            <p>
              A ₹3L program at "₹8,300 a month" sounds like a phone bill and behaves like a
              two-year liability. The EMI does not pause when your motivation does — this is the
              single most common financial regret I hear. Before signing, ask three questions in
              writing: is the EMI genuinely no-cost, or is interest baked into an inflated headline
              fee? What is the refund window, in days, and what has to be true to qualify? Can I
              defer to a later batch, and how many times?
            </p>
            <p>
              Then compute the number that matters:{" "}
              <strong>expected cost = fee ÷ your honest probability of finishing</strong>. A
              ₹60,000 cohort you are 80% likely to complete costs ₹75,000 in expectation. A ₹0
              self-paced track you are 15% likely to complete costs you nine months.
            </p>
          </Callout>

          <H3>Table 5 — Career &amp; placement support for AI Engineer roles</H3>
          <DataTable
            head={["Course", "Support type", "AI-Engineer-specific", "Interview prep", "Portfolio review", "How to read their claims", "Bond / ISA"]}
            rows={careerTable}
          />
          <Callout label="How to read placement claims — five questions">
            <ol>
              <li>
                <strong>What is the denominator?</strong> "94% placed" of enrolled learners, or of
                "eligible" learners after attendance, assessment and attempt filters?
              </li>
              <li>
                <strong>What is the window?</strong> Placed within 3 months, 12 months, or ever?
              </li>
              <li>
                <strong>Median or average?</strong> One ₹60L offer lifts an average and tells you
                nothing about your outcome.
              </li>
              <li>
                <strong>AI roles or any tech role?</strong> A support-engineer offer counts as
                "placed" in most published numbers.
              </li>
              <li>
                <strong>Can I contact alumni you did not select?</strong> The answer to this
                question is more informative than the answer to the other four.
              </li>
            </ol>
          </Callout>

          <H3>Table 6 — Prerequisites &amp; beginner suitability</H3>
          <DataTable
            head={["Course", "Coding prerequisite", "Maths prerequisite", "Bridge module", "Language", "Non-tech friendly", "Weekly hours", "Best entry level"]}
            rows={prereqTable}
          />
        </Section>

        {/* REVIEWS */}
        <Section id="reviews" eyebrow="Section 5" title="In-Depth Reviews — All 10 Courses on an Identical Structure">
          <p>
            Every review below follows the same structure: snapshot, curriculum depth, teaching,
            projects, career support, fees, strengths, limitations, who it suits, and the realistic
            capability ceiling. Scores are out of 10 on the six pillars.
          </p>
        </Section>
        {courses.map((c) => (
          <CourseReview key={c.rank} course={c} />
        ))}

        {/* DEEP DIVE */}
        <Section id="logicmojo-deep-dive" eyebrow="Section 6" title="Why LogicMojo Ranks #1 for Aspiring AI Engineers — The Deep Dive">
          <p>
            The #1 position needs to survive scrutiny, so here is the reasoning laid out against the
            same six pillars, and against the specific failure modes described at the top of this
            page.
          </p>

          <H3>1. It is a sequence, not a collection of modules</H3>
          <p>
            The dominant failure in Indian AI education is discontinuity: strong ML followed by a
            GenAI appendix, or strong GenAI with no foundations underneath. LogicMojo's programme
            runs Layer 1 through Layer 7 in order, so the transformers you learn in Layer 4 are the
            reason the LLM behaviour in Layer 5 makes sense, and the evaluation discipline from
            Layer 3 is what you apply to RAG in Layer 5 and to monitoring in Layer 6. That
            continuity is not a marketing claim; it is visible in the ordering of the syllabus.{" "}
            <em>[VERIFY: current module list on the official page.]</em>
          </p>

          <H3>2. The GenAI layer is taught to production depth</H3>
          <p>
            Compare the curriculum scorecard rows that matter. Production RAG with chunking
            strategy, hybrid search, re-ranking, citations and an evaluation harness. Fine-tuning
            with LoRA/QLoRA and benchmarking against the base model. Agents with planning, memory,
            tool use and — the part almost nobody teaches — failure handling. Agent frameworks,
            MCP-style tool integration, open-weight models and local inference. LLM evaluation and
            guardrails. Those rows are where the rest of this market shows Basic or None.
          </p>

          <H3>3. Deployment is in the course, not left as an exercise</H3>
          <p>
            MLOps and LLMOps — Docker, FastAPI, CI/CD, experiment tracking, monitoring, drift, cost
            and latency — are the widest gap between a trained model and a job offer. A learner who
            has containerised and deployed their own capstone answers "how would you serve this to
            10,000 users?" from memory rather than from theory.
          </p>

          <H3>4. Live IST delivery with human code review</H3>
          <p>
            Sessions run in IST windows built around a working week, with recordings for the
            evenings when work wins. Doubts are resolved inside the cohort rhythm rather than in a
            forum queue, and a human looks at your code. If you have abandoned a self-paced course
            before, this is the variable that changes your outcome — and it is the one that free
            content structurally cannot provide.
          </p>

          <H3>5. Projects escalate, and you rehearse defending them</H3>
          <p>
            An ML project with a written evaluation rationale, a deep-learning build, an LLM
            application with structured outputs, a production-style RAG system with evaluation, a
            fine-tuned open-weight model with benchmarks, an agent that survives tool failure, and a
            deployed capstone. Interview preparation includes project defence — being pushed on why
            you chose that chunk size, that metric, that serving pattern — which is exactly the
            round where most candidates lose the offer.
          </p>

          <H3>6. Capability per rupee</H3>
          <p>
            LogicMojo prices well below the university-branded programmes while covering more of the
            2026 stack, which is why it scores highest on the value pillar. Confirm the current fee,
            GST, EMI terms and refund window in writing before enrolling.{" "}
            <em>[VERIFY: fee, EMI, refund window, batch dates.]</em>
          </p>

          <Callout label="Fit guidance — who should also look elsewhere">
            <p>
              If you specifically need a university-issued academic credential for a visa
              application or an HR degree filter, look at upGrad (IIIT-Bangalore) or Great Learning
              (UT Austin) as well. If you want fully self-paced study with no fixed timings, a MOOC
              track such as DeepLearning.AI or IBM suits that preference better. If your single
              objective is a product-company referral network and budget is not a constraint,
              Scaler's hiring desk is the strongest on this list. None of that changes the
              curriculum comparison — it changes which constraint you are optimising for.
            </p>
          </Callout>

          <p>
            <strong>What is not claimed here:</strong> no placement percentage, no learner count, no
            salary outcome, no alumni quote. Nothing on this page promises you a job or a salary,
            because no course can. What a course can do is make you capable and prepared, and that
            is what the ranking measures.
          </p>
        </Section>

        {/* HONORABLE MENTIONS */}
        <Section id="honorable-mentions" eyebrow="Section 7" title="Honorable Mentions — And Why They Didn't Make the Ten">
          <p>
            Several of these are excellent. They were excluded for structural reasons — scope,
            pacing, pricing or support — not quality.
          </p>
          <DataTable
            head={["Program", "What it does well", "Why it is not in the top 10"]}
            rows={honorableMentions.map((h) => [h.name, h.why, h.excluded])}
          />
        </Section>

        {/* QUIZ */}
        <Section id="quiz" eyebrow="Section 8" title="AI Course Finder Quiz — Which One Fits You?">
          <p>
            Five questions on background, budget, hours, priority and self-discipline. The output is
            a pick and the reasoning behind it, not a lead-capture form.
          </p>
        </Section>
        <CourseFinderQuiz />

        {/* PROJECTS */}
        <Section id="projects" eyebrow="Section 9" title="Projects That Get AI Engineers Hired (And the Ones That Don't)">
          <p>
            Interviewers do not count projects; they pick one and dig until they find the bottom of
            your understanding. Build fewer, deeper, and deployed.
          </p>

          <H3>The five projects that convert</H3>
          <DataTable
            head={["Project", "What it proves", "The detail that makes it credible"]}
            rows={[
              [
                "Document RAG system with evaluation",
                "You understand retrieval, not just generation",
                "A measured evaluation harness (retrieval hit rate, faithfulness, answer relevance) and honest failure cases",
              ],
              [
                "Fine-tuned open-weight model",
                "You can adapt models, and you know the cost",
                "Benchmarks against the base model, including where fine-tuning made things worse",
              ],
              [
                "Tool-using agent with failure handling",
                "You think in systems, not demos",
                "What happens on timeout, malformed tool output and an infinite plan loop",
              ],
              [
                "Deployed ML or LLM service",
                "You have crossed the production gap",
                "Docker, FastAPI, a health endpoint, logging, latency numbers and a monthly cost estimate",
              ],
              [
                "End-to-end classical ML project",
                "Your foundations are real",
                "A written rationale for the metric, the validation split and the handling of imbalance",
              ],
            ]}
          />

          <H3>Projects that quietly hurt you</H3>
          <ul>
            <li>The Titanic, Iris or MNIST notebook — an interviewer reads this as "did tutorials".</li>
            <li>A copied LangChain chatbot with the tutorial's variable names still in it.</li>
            <li>Anything with no README, or a README that is just installation steps.</li>
            <li>A Streamlit demo with no evaluation, presented as a production system.</li>
            <li>Ten shallow repos where three deep ones would have done more work for you.</li>
          </ul>

          <H3>How to write a README an interviewer respects</H3>
          <p>
            Problem statement in two sentences. An architecture diagram. A "decisions and
            trade-offs" section — chunk size, embedding model, retrieval strategy, why. Evaluation
            results with actual numbers. Known limitations, stated before anyone asks. And how to
            run it. The decisions section is what gets read.
          </p>
        </Section>

        {/* INTERVIEWS */}
        <Section id="interviews" eyebrow="Section 10" title="AI Engineer Interview Preparation — What India Actually Asks">
          <p>
            A typical Indian AI Engineer loop in 2026 runs four to five rounds: a screening call, a
            coding or ML fundamentals round, an LLM/system-design round, a deep project defence, and
            a hiring-manager conversation.
          </p>
          <DataTable
            head={["Round", "What is tested", "Representative questions"]}
            rows={[
              ["Screening", "Vocabulary and honesty", "\"Explain RAG to me.\" \"What did you actually build yourself?\""],
              ["Coding / ML fundamentals", "Python, data manipulation, metric reasoning", "\"Why F1 here?\" \"Diagnose this learning curve.\" \"Fix this leakage.\""],
              ["LLM & system design", "Architecture under constraints", "\"Design RAG for 50,000 internal documents with a 2-second latency budget.\" \"How do you evaluate it?\""],
              ["Project defence", "Depth and ownership", "\"Why that chunk size?\" \"What broke?\" \"What would you do differently?\""],
              ["Hiring manager", "Judgement and cost awareness", "\"What does this cost per month?\" \"When would you not use an LLM?\""],
            ]}
          />
          <H3>The five answers worth rehearsing until they are automatic</H3>
          <ol>
            <li>RAG versus fine-tuning: when each wins, and what it costs.</li>
            <li>How you evaluate an LLM system, including LLM-as-judge and its limitations.</li>
            <li>How you would reduce hallucination in a system you built.</li>
            <li>How an agent should behave when a tool fails or a plan loops.</li>
            <li>Your latency and cost budget for a feature, with the arithmetic.</li>
          </ol>
          <p>
            <strong>Where candidates lose it:</strong> claiming a project they cannot defend,
            answering "why this metric?" with "it's standard", and treating deployment as somebody
            else's problem. Practising project defence out loud with someone who pushes back is
            worth more in the final month than another course module.
          </p>
        </Section>

        {/* JOBS AND SALARIES */}
        <Section id="jobs-salaries" eyebrow="Section 11" title="AI Engineer Jobs, Salaries and the Hiring Landscape in India">
          <DataTable
            head={["Experience band", "Typical range (services / mid-market)", "Product companies, GCCs, AI-native", "What moves you up the band"]}
            rows={salaryTable}
            caption="Directional ranges compiled from public salary aggregators and posting data; treat as ranges to verify, not quotes. [VERIFY at time of publication.]"
          />
          <H3>What actually determines your number</H3>
          <ul>
            <li>
              <strong>Prior engineering experience</strong> — the single biggest multiplier for
              switchers; six years of backend does not reset to zero.
            </li>
            <li>
              <strong>Production ownership</strong> — having deployed and operated something,
              anything, moves you a band.
            </li>
            <li>
              <strong>Employer type</strong> — GCCs and product companies pay materially above
              services firms for the same skills.
            </li>
            <li>
              <strong>Location</strong> — Bengaluru and Hyderabad lead; remote roles are converging
              but not equalised.
            </li>
            <li>
              <strong>Negotiation evidence</strong> — a deployed portfolio is leverage; a
              certificate is not.
            </li>
          </ul>
          <p>
            Structural tailwinds are real — GCC-led hiring growth, enterprise LLM adoption in BFSI
            and healthcare, and public initiatives such as the IndiaAI Mission expanding compute and
            skilling capacity. None of them change what you are asked in round three.
          </p>
        </Section>

        {/* FREE VS PAID */}
        <Section id="free-vs-paid" eyebrow="Section 12" title="Free vs Paid — An Honest Analysis">
          <p>
            Everything in the 2026 AI Engineer skill stack can be learned for ₹0. DeepLearning.AI,
            Fast.ai, Hugging Face courses, Kaggle Learn, NPTEL, and the documentation for every
            library you will touch. That is a true statement, and it is also the reason a lot of
            people are still on month nine of month three.
          </p>
          <DataTable
            head={["What you need", "Free path gives you", "A good paid cohort gives you"]}
            rows={[
              ["Content", "Everything, often better explained", "Curated, sequenced, current"],
              ["Sequence", "You assemble it — the expensive part", "Decided for you"],
              ["Code review", "None", "A human reading your code"],
              ["Accountability", "Your own discipline", "Cohort, schedule, someone who notices"],
              ["Doubt resolution", "Forums, hours or days", "Same session, usually"],
              ["Deployment practice", "Rarely covered end-to-end", "Built into the capstone"],
              ["Interview rehearsal", "None", "Project defence practice"],
              ["Cost", "₹0 + compute", "₹25,000 – ₹4,00,000"],
            ]}
          />
          <p>
            <strong>My honest recommendation:</strong> spend eight weeks free first. Work through
            the ML foundations and one GenAI short course. If you finish, you have learned something
            more valuable than the content — that you finish — and you can invest with confidence in
            a cohort for the GenAI-to-production layers. If you do not finish, you have discovered,
            for ₹0, that you need structure. Either result is worth eight weeks.
          </p>
        </Section>

        {/* ROI */}
        <Section id="roi" eyebrow="Section 13" title="The ROI Reality — What a Course Can and Cannot Buy">
          <p>
            Run the arithmetic before the emotion. A ₹1,50,000 program repaid by a ₹3L salary
            increase looks like a six-month payback — but only if the increase happens, and it
            happens because of capability and portfolio, not enrolment.
          </p>
          <DataTable
            head={["Scenario", "Investment", "Realistic outcome window", "What determines it"]}
            rows={[
              ["Developer, 4 yrs, ₹1L program, 12 hrs/week", "₹1L + 12 months", "Internal AI project or switch in 6–12 months", "Portfolio depth and internal visibility"],
              ["Fresher, ₹30K program, 20 hrs/week", "₹30K + 9 months", "First role in 6–15 months", "Internships, projects, persistence through rejections"],
              ["Switcher from non-tech, ₹1.5L program", "₹1.5L + 15–18 months", "Junior AI or adjacent data role", "Whether Layers 1–2 were done properly"],
              ["Anyone, ₹3L+ program, no projects deployed", "₹3L + 12 months", "Certificate, no offer", "The failure mode this article exists to prevent"],
            ]}
          />
          <Callout tone="muted">
            <p>
              A course buys sequence, review, accountability and rehearsal. It does not buy a job.
              Anyone who tells you otherwise is selling the one thing they cannot deliver — and the
              contract's fine print will agree with me, not with the landing page.
            </p>
          </Callout>
        </Section>

        {/* RED FLAGS */}
        <Section id="red-flags" eyebrow="Section 14" title="Red-Flags Checklist — Print This Before You Pay">
          <ul>
            <li><strong>The syllabus PDF is not public</strong> and only arrives after a sales call.</li>
            <li><strong>GenAI is three sessions at the end</strong> of a 2022 data-science curriculum.</li>
            <li><strong>No deployment module.</strong> None. Anywhere.</li>
            <li><strong>"Live" classes</strong> that turn out to be recordings with a moderator.</li>
            <li><strong>No named instructors</strong>, or names with no verifiable practitioner history.</li>
            <li><strong>"100% placement"</strong> or a "guarantee" with an eligibility clause you cannot read yet.</li>
            <li><strong>Salary screenshots</strong> with no denominator, window or role type.</li>
            <li><strong>Countdown timers and "2 seats left"</strong> on an online course with unlimited seats.</li>
            <li><strong>Refund terms shared only after payment</strong>, or a window measured in hours.</li>
            <li><strong>No code review</strong> anywhere in the delivery model, at any price.</li>
            <li><strong>Curriculum with no evaluation content</strong> — no metrics rigour, no LLM evaluation.</li>
            <li><strong>Sales pressure that escalates</strong> when you ask for the syllabus in writing.</li>
          </ul>
          <p>
            One question filters most of this: <em>"Can you send me the full module list, the
            instructor names, the refund policy and three alumni you did not hand-pick?"</em> How a
            provider answers that email tells you more than any review site.
          </p>
        </Section>

        {/* VERDICT */}
        <Section id="verdict" eyebrow="Section 15" title="Final Verdict">
          <p>
            If you want to be hired as an AI Engineer in India in 2026, you need one continuous
            sequence from Python to a deployed, evaluated LLM system, with someone reviewing your
            code and pushing back on your design decisions. On that measure —{" "}
            <strong>LogicMojo's AI &amp; Machine Learning Course is the strongest overall choice</strong>{" "}
            on this list: the fullest 2026 curriculum including the rows most programs skip, live
            IST delivery, escalating projects ending in a deployed capstone, interview preparation
            with project defence, and the best capability per rupee here.
          </p>
          <p>
            Choose <strong>Scaler</strong> if you are buying the product-company hiring network and
            can carry the fee. Choose <strong>upGrad</strong> or <strong>Great Learning</strong> if
            a university credential is a hard requirement — and close the GenAI and deployment gap
            deliberately afterwards. Start with <strong>DeepLearning.AI</strong> or{" "}
            <strong>IBM</strong> if you are testing your commitment at near-zero cost. Start with{" "}
            <strong>GUVI</strong> or <strong>PW Skills</strong> if budget is the binding constraint
            and structure is what you are missing.
          </p>
          <p>
            Whichever you choose: deploy three things, write the READMEs, and rehearse defending
            them out loud. That is the part no course can do for you, and the part every offer
            depends on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://logicmojo.com/artificial-intelligence-machine-learning-course"
              className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground no-underline shadow-editorial transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Explore the LogicMojo AI &amp; ML Course
            </a>
            <a
              href="#quiz"
              className="lift-hover rounded-xl border border-accent/35 bg-card px-5 py-2.5 text-sm font-semibold text-primary no-underline"
            >
              Take the course finder quiz
            </a>
          </div>
        </Section>

        {/* AUTHOR */}
        <Section id="author" eyebrow="Section 16" title="About the Author and Expert Reviewers">
          <div className="glass-card lift-hover p-5">

            <p className="eyebrow">Author</p>
            <p className="mt-1 text-lg font-semibold">[INSERT: Author name], AI curriculum analyst</p>
            <p className="mt-2 text-sm text-muted-foreground">
              [INSERT: 2–3 sentence bio covering years of engineering experience, AI systems built,
              and the review methodology used for this article. Include LinkedIn/GitHub links.]
              Methodology: published curricula were read module by module, mapped to the seven-layer
              skill stack, and scored on the six weighted pillars stated in the introduction.
              Unverifiable figures are marked [VERIFY] rather than estimated.
            </p>
          </div>
          <H3>Expert reviewers</H3>
          <DataTable
            head={["Reviewer", "Role", "What they reviewed"]}
            rows={[
              ["[INSERT: Name]", "Senior AI Engineer, product company [VERIFY]", "Curriculum scorecard, LLM system-design section"],
              ["[INSERT: Name]", "AI Platform Lead, GCC [VERIFY]", "Hiring landscape, MLOps/LLMOps requirements"],
              ["[INSERT: Name]", "Engineering Manager, AI-native startup [VERIFY]", "Interview section and project defence guidance"],
              ["[INSERT: Name]", "Data Science Lead, IT services AI practice [VERIFY]", "Reskilling paths and credential value"],
              ["[INSERT: Name]", "Career coach, tech hiring [VERIFY]", "Salary bands, placement-claim guidance"],
            ]}
            caption="Reviewers commented on accuracy and completeness; the ranking and editorial judgement are the author's."
          />
        </Section>

        {/* FAQS */}
        <Section id="faqs" eyebrow="Section 17" title="Frequently Asked Questions (30+)">
          <p>
            The questions readers actually send, answered directly. Everything below is also marked
            up as FAQ structured data.
          </p>
        </Section>
        <Faq />

        {/* LINKS */}
        <Section id="links" eyebrow="Section 18" title="Related Guides and Next Steps">
          <ul>
            <li><a href="/ai-engineer-roadmap">AI Engineer roadmap 2026 — month-by-month plan</a></li>
            <li><a href="/ai-engineer-skills">AI Engineer skills checklist — the seven-layer stack explained</a></li>
            <li><a href="/ai-engineer-interview-questions">AI Engineer interview questions asked in India</a></li>
            <li><a href="/ai-engineer-salary-india">AI Engineer salary in India by experience and city</a></li>
            <li><a href="/rag-course-india">Production RAG — chunking, hybrid search and re-ranking</a></li>
            <li><a href="/ai-agents-course-india">AI agents and agentic patterns for engineers</a></li>
            <li><a href="/llm-fine-tuning-guide">Fine-tuning with LoRA and QLoRA — a practical guide</a></li>
            <li><a href="/mlops-llmops-guide">MLOps and LLMOps for AI Engineers</a></li>
            <li><a href="/ai-engineer-portfolio-projects">Portfolio projects that get AI Engineers hired</a></li>
            <li><a href="/ai-course-fees-india">AI course fees in India — what to check before paying</a></li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-border bg-ink text-ink-foreground">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="font-display text-2xl">LogicMojo</p>
          <p className="mt-2 max-w-xl text-sm opacity-80">
            Live, instructor-led AI &amp; Machine Learning training for working professionals in
            India — from Python and ML foundations to production RAG, fine-tuning, AI agents and
            deployment.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-80">
            <a href="https://logicmojo.com" className="underline decoration-accent underline-offset-4">
              logicmojo.com
            </a>
            <span>AI &amp; Machine Learning Course</span>
            <span>Batches: [INSERT: batch date]</span>
            <span>Fees: ₹XX,XXX [VERIFY]</span>
          </div>
          <p className="mt-6 text-xs opacity-60">
            © {new Date().getFullYear()} LogicMojo. This guide is published by LogicMojo. Fees,
            curricula and hiring data change; verify current details on each provider's official
            page before enrolling. No course, including ours, can guarantee a job or a salary.
          </p>
        </div>
      </footer>
    </div>
  );
}
