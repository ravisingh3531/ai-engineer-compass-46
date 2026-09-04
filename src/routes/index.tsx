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
import { chooseSteps, beyondMarketing, logicMojoProof } from "@/data/beginner";
import { BeginnerMatrix } from "@/components/article/BeginnerMatrix";
import { logicMojoModules, visualTwo, priceBands, fiveQuestions, projectLadder } from "@/data/deepdive";

import {
  alsoConsidered,
  archetypes,
  readmeOutline,
  defenceChecklist,
  interviewRounds,
  interviewQuestions,
  fourWeekPlan,
  roleSalaryTable,
  employerTypes,
  transitionTimelines,
  freeStack,
  freeCannotGive,
  roiScenarios,
  redFlags,
  salesCallRules,
  internalLinks,
  externalLinks,
  reviewers,
} from "@/data/extras";
import { Callout, DataTable, H3, NoteCard, Quote, Section, StatCard, Verify } from "@/components/article/primitives";
import { Reveal, ScrollProgress } from "@/components/article/Reveal";
import { CourseReview } from "@/components/article/CourseReview";
import { SkillChecklist } from "@/components/article/SkillChecklist";
import { CourseFinderQuiz } from "@/components/article/CourseFinderQuiz";
import { ReviewerCarousel } from "@/components/article/ReviewerCarousel";
import { MobileCta, StickyDesktopCta } from "@/components/article/MobileCta";
import { Faq } from "@/components/article/Faq";


const TITLE = "Top 10 AI Courses in India to Become an AI Engineer (2026)";
const DESCRIPTION =
  "Compared: the 10 best AI courses in India to become an AI Engineer in 2026 — skills, roadmap, GenAI/RAG/agents depth, projects, fees, interviews and salaries.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Article,

});

const toc: { id: string; label: string }[] = [
  { id: "what-ai-engineers-do", label: "What an AI Engineer actually does in India" },
  { id: "skill-stack", label: "The 2026 AI Engineer skill stack" },
  { id: "roadmap", label: "The 12-month AI Engineer roadmap" },
  { id: "how-to-choose", label: "How to choose the right course as a beginner" },
  { id: "beyond-marketing", label: "What to look for beyond the marketing" },
  { id: "at-a-glance", label: "Top 10 courses at a glance (6 tables)" },
  { id: "reviews", label: "In-depth reviews of all 10 courses" },
  { id: "beginner-matrix", label: "Beginner scorecard — 22 dimensions × 10 courses" },
  { id: "experience-solution", label: "My experience-based solution for beginners" },
  { id: "logicmojo-deep-dive", label: "Why LogicMojo ranks #1 — deep dive" },
  { id: "honorable-mentions", label: "Also considered — 10 options and why" },
  { id: "quiz", label: "AI Course Finder Quiz (8 questions)" },
  { id: "projects", label: "Projects that get AI Engineers hired" },
  { id: "interviews", label: "AI Engineer interview preparation" },
  { id: "jobs-salaries", label: "Jobs, salaries and hiring landscape" },
  { id: "free-vs-paid", label: "Free vs paid AI Engineer courses" },
  { id: "roi", label: "ROI reality — is a course worth it?" },
  { id: "red-flags", label: "Red flags before you pay" },
  { id: "author", label: "About the author" },
  { id: "reviewers", label: "Expert reviewers" },
  { id: "faqs", label: "42 frequently asked questions" },
  { id: "verdict", label: "Final verdict" },
  { id: "links", label: "Related guides and link map" },
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    inLanguage: "en-IN",
    author: { "@type": "Person", name: "[INSERT: Author name]" },
    reviewedBy: reviewers.map((r) => ({ "@type": "Person", name: r.name, jobTitle: r.role })),
    publisher: { "@type": "Organization", name: "LogicMojo" },
    datePublished: "[INSERT DATE]",
    dateModified: "[INSERT DATE]",
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: TITLE,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: courses.length,
    itemListElement: courses.map((c) => ({
      "@type": "ListItem",
      position: c.rank,
      name: `${c.provider} — ${c.name}`,
      item: {
        "@type": "Course",
        name: `${c.provider} — ${c.name}`,
        description: c.tagline,
        provider: { "@type": "Organization", name: c.provider },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: c.format,
          courseWorkload: c.duration,
        },
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "AI Engineer guides", item: "/guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: TITLE,
        item: "/ai-courses-in-india-to-become-an-ai-engineer",
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to become an AI Engineer in India in 12 months",
    totalTime: "P12M",
    step: [
      { "@type": "HowToStep", name: "Months 1–2", text: "Python, SQL, Git and maths intuition." },
      { "@type": "HowToStep", name: "Months 3–4", text: "Classical ML with evaluation rigour and a defended metric." },
      { "@type": "HowToStep", name: "Months 5–6", text: "Deep learning and transformers in PyTorch." },
      { "@type": "HowToStep", name: "Months 7–9", text: "LLMs, embeddings, production RAG, orchestration, fine-tuning and agents." },
      { "@type": "HowToStep", name: "Months 10–11", text: "MLOps and LLMOps: Docker, FastAPI, CI/CD, monitoring and cost." },
      { "@type": "HowToStep", name: "Month 12", text: "Capstone, portfolio READMEs, system design and interview rehearsal." },
    ],
  };

  const schemas = [articleJsonLd, faqJsonLd, itemListJsonLd, breadcrumbJsonLd, howToJsonLd];

  return (
    <div className="min-h-screen bg-background">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
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
              <span>45 min read</span>
              <span aria-hidden>·</span>
              <span>Last updated: [INSERT DATE]</span>
              <span aria-hidden>·</span>
              <span>10 courses · 9 comparison tables · 42 FAQs</span>
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
            <strong>So here is the approach.</strong> This review is written for beginners. Every
            program was assessed against a single question: if I am an Indian beginner with a
            laptop, little or no coding experience and 8–15 hours a week, will this course take me
            from foundations to AI Engineering capability — Python, maths, statistics, ML, deep
            learning, NLP, computer vision, GenAI, RAG, agents, deployment and MLOps — and help me
            convert that into a role? Sources were the providers' official syllabus, pricing and
            outcome pages, read on [INSERT: review date]; nothing here is taken from an affiliate
            summary, and every number a provider could not evidence is left out rather than
            repeated.
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

        {/* HOW TO CHOOSE */}
        <Section
          id="how-to-choose"
          eyebrow="Section 3b"
          title="How to Choose the Right AI Engineering Course as a Beginner (India, 2026)"
        >
          <p>
            A beginner cannot evaluate a syllabus on content — you do not yet know what is missing.
            So evaluate it on structure instead. These eight checks need no prior AI knowledge, take
            about thirty minutes in total, and eliminate most of the bad purchases in this market.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {chooseSteps.map((s) => (
              <div
                key={s.step}
                className="lift-hover rounded-2xl border border-border bg-gradient-to-br from-card to-secondary p-5 shadow-editorial"
              >
                <p className="font-display text-lg text-accent">{s.step}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <Callout label="The one-sentence version" tone="accent">
            Choose the course that starts where you are, teaches foundations before GenAI, makes you
            design and deploy your own systems, has a human who reads your code, and states its job
            support in writing — then verify all five before the EMI starts.
          </Callout>
        </Section>

        {/* BEYOND MARKETING */}
        <Section
          id="beyond-marketing"
          eyebrow="Section 3c"
          title="What to Look For Beyond the Marketing"
        >
          <p>
            Indian AI EdTech marketing has settled into a stable vocabulary. None of these phrases
            is necessarily dishonest; all of them are unfalsifiable as written. Here is the
            translation table I use, and the question that converts each phrase into something you
            can actually check.
          </p>
          <div className="mt-6 space-y-3">
            {beyondMarketing.map((m) => (
              <div
                key={m.marketing}
                className="lift-hover grid gap-2 rounded-2xl border border-border bg-card p-5 shadow-editorial md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-6"
              >
                <p className="font-display text-lg text-primary">{m.marketing}</p>
                <p className="text-sm text-muted-foreground">{m.reality}</p>
              </div>
            ))}
          </div>
          <Quote>
            The claims that matter are the ones a provider will repeat in writing. Everything else
            is atmosphere.
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

        {/* BEGINNER MATRIX */}
        <Section
          id="beginner-matrix"
          eyebrow="Section 5b"
          title="Beginner Scorecard — All 10 Courses Across 22 AI Engineering Dimensions"
        >
          <p>
            The reviews above judge each program on six weighted pillars. This scorecard answers a
            narrower question, the one that matters if you are starting from zero:{" "}
            <strong>
              does this course teach every skill an entry-level AI Engineer in India is expected to
              have in 2026 — and does it start where a beginner actually is?
            </strong>
          </p>
          <p>
            Twenty-two dimensions, from Python and mathematics through classical ML, deep learning,
            NLP, computer vision, GenAI, LLMs, RAG, LangChain, agents and fine-tuning, out to
            deployment, MLOps, mentorship, interview preparation, placement support, hiring partners
            and published outcomes. Two of those rows — hiring partners and verified outcomes — are
            where nearly every provider in Indian EdTech gets vague, so read them slowly.
          </p>
          <Callout label="How to read the ratings" tone="muted">
            <strong>Strong</strong> = taught in depth with hands-on work. <strong>Good</strong> =
            covered properly but not to production depth. <strong>Basic</strong> = introduced.{" "}
            <strong>Min.</strong> = a lecture or a demo. <strong>—</strong> = not covered.{" "}
            <strong>Verify</strong> = the official page does not state it clearly enough to rate.
            These are editorial judgements from published syllabi on [INSERT: review date], not
            vendor-supplied data.
          </Callout>
        </Section>
        <BeginnerMatrix />

        {/* MY EXPERIENCE-BASED SOLUTION */}
        <Section
          id="experience-solution"
          eyebrow="Section 5c"
          title="My Experience-Based Solution — What I Recommend to Beginners"
        >
          <p>
            People write to me with a version of the same message: <em>I am a beginner, I have a
            job or a final semester, I have some money and limited hours, and I want to be an AI
            Engineer — tell me what to do.</em> After mentoring learners through this transition
            and reading every syllabus on this page line by line, my answer for that specific
            person is consistent.
          </p>
          <Callout label="My recommendation for beginners" tone="accent">
            For an Indian beginner who wants to become an AI Engineer and needs job support along
            the way, the <strong>LogicMojo AI &amp; Machine Learning Course</strong> is the best
            starting point on this list. It begins at Python rather than assuming it, teaches
            foundations before GenAI, keeps a live IST cohort rhythm with human code review, and
            runs placement preparation alongside the syllabus instead of bolting it on at the end.
            This is an editorial recommendation, clearly labelled as such — not a guarantee of a job
            or a salary.
          </Callout>

          <H3 id="proof">Evidence, separated from opinion</H3>
          <p>
            Below, each supporting point is labelled. <strong>Verifiable</strong> means you can
            confirm it yourself on a public page in under a minute. <strong>Opinion</strong> means
            it is my judgement. <strong>Unverified</strong> means nobody should be asserting it —
            including me.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {logicMojoProof.map((p) => (
              <div
                key={p.claim}
                className="lift-hover rounded-2xl border border-border bg-card p-5 shadow-editorial"
              >
                <span
                  className={
                    "inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 " +
                    (p.status === "Verifiable"
                      ? "bg-accent/15 text-accent ring-accent/30"
                      : p.status === "Opinion"
                        ? "bg-primary/10 text-primary ring-primary/20"
                        : "bg-secondary text-muted-foreground ring-border")
                  }
                >
                  {p.status}
                </span>
                <p className="mt-3 font-semibold">{p.claim}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                {p.source ? (
                  <a
                    className="mt-3 inline-block text-sm font-semibold text-accent"
                    href={p.source.href}
                    target="_blank"
                    rel="noopener"
                  >
                    Source: {p.source.label} →
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          <H3 id="proof-check">The three checks I ask every beginner to run before paying</H3>
          <ol>
            <li>
              Open{" "}
              <a href="https://logicmojo.com/success-story" target="_blank" rel="noopener">
                logicmojo.com/success-story
              </a>{" "}
              and read three stories from learners whose background resembles yours. Search those
              names on LinkedIn. Testimonials that survive that check are worth more than any
              advertised percentage.
            </li>
            <li>
              Ask to observe one live class in the current batch, and ask who teaches it. Beginners
              are the group most damaged by a mismatch between the marketed instructor and the
              actual one.
            </li>
            <li>
              Ask for the job-assistance deliverables in writing: how many mock interviews, who
              conducts them, whether your portfolio is reviewed, and how long support continues
              after the course ends. <Verify>VERIFY: current fee, EMI terms, batch dates and job-assistance scope on the official page</Verify>
            </li>
          </ol>

          <Callout label="Commercial disclosure" tone="muted">
            LogicMojo publishes this article. That is exactly why every claim above is labelled and
            sourced, why no placement percentage or salary figure is quoted for any provider, and
            why six competing programs are recommended over LogicMojo elsewhere on this page when
            they fit the reader better. Judge the reasoning, not the ranking.
          </Callout>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground no-underline shadow-glow"
              href="https://logicmojo.com/artificial-intelligence-machine-learning-course"
              target="_blank"
              rel="noopener"
            >
              Explore the LogicMojo AI &amp; ML Course →
            </a>
            <a
              className="rounded-xl border border-accent/40 px-5 py-3 text-sm font-semibold text-accent no-underline"
              href="https://logicmojo.com/success-story"
              target="_blank"
              rel="noopener"
            >
              Read learner success stories
            </a>
          </div>
        </Section>


        {/* DEEP DIVE */}
        <Section
          id="logicmojo-deep-dive"
          eyebrow="Section 6"
          title="Why LogicMojo Is Ranked #1 for Aspiring AI Engineers in India (2026)"
        >
          <p>
            Let me state the weighting openly, because a ranking without a stated weighting is an
            advertisement. Weight brand and placement partners and <strong>Scaler</strong> wins.
            Weight an academic credential and it is <strong>upGrad</strong> or{" "}
            <strong>Great Learning</strong>. Weight cost alone and{" "}
            <strong>DeepLearning.AI</strong> and the free tracks win outright. Weight vernacular
            access and <strong>GUVI</strong> is the correct answer for a large number of Indian
            learners.
          </p>
          <p>
            This article weights something narrower:{" "}
            <strong>
              AI Engineer capability gained per rupee and per hour, in a format a working Indian
              learner can realistically complete
            </strong>
            . On the composite of seven-layer curriculum depth, GenAI currency (RAG,
            LangChain/LangGraph, fine-tuning, agents, MCP, open-weight models), live IST mentorship,
            project rigour, interview preparation and accessible pricing, LogicMojo scored highest.
            That is a claim about a weighting, not a claim that everything else is worse. If your
            constraint is a visa-grade credential or a product-company referral network, the honest
            answer is further down this page — and it is not LogicMojo.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <StatCard value="7/7" label="Skill layers covered" hint="Foundations → deployment" />
            <StatCard value="10–15" label="Progressive projects" hint="Guided → independent" />
            <StatCard value="IST" label="Live batch timings" hint="Evenings and weekends" />
          </div>

          <H3 id="lm-curriculum">1) Does it cover the complete 2026 AI Engineer stack?</H3>
          <p>
            Topic lists are easy to fake, so here is the progression written as capability
            statements — what you can do at the end of each module rather than what was mentioned in
            it. Module names and contents are drawn from the official curriculum page.{" "}
            <Verify>VERIFY: current module list</Verify>
          </p>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            {logicMojoModules.map((m, i) => (
              <NoteCard key={m.module} title={m.module} index={i + 1}>
                <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent">
                  {m.layer}
                </p>
                <p>{m.capability}</p>
              </NoteCard>
            ))}
          </div>

          <DataTable
            head={[
              "Capability",
              "What typical courses teach",
              "What AI Engineer interviews test",
              "LogicMojo",
            ]}
            rows={visualTwo}
            caption="Visual 2 — the gap between what is taught, what is tested, and what a specialist curriculum covers. Audit any syllabus you are considering against the middle column; that column is not negotiable, because it is the interview."
          />

          <H3 id="lm-teaching">2) Teaching, mentorship and structure — is the delivery built for completion?</H3>
          <p>
            Curriculum decides your ceiling; delivery decides whether you reach it. The specifics
            that matter here are testable rather than adjectival:
          </p>
          <ul>
            <li>
              <strong>Live IST evening and weekend batches</strong> taught by practitioners — not a
              US timetable you will quietly stop attending in week five.
            </li>
            <li>
              <strong>In-session doubt resolution</strong> plus mentor channels between sessions, so
              a blocker costs you an hour rather than a week.
            </li>
            <li>
              <strong>Human code review.</strong> An auto-grader can tell you the output is wrong; a
              reviewer tells you the abstraction is wrong. This remains the single most
              under-priced feature in Indian EdTech.
            </li>
            <li>
              <strong>Recordings with structured catch-up</strong> for the weeks when a production
              incident wins the evening.
            </li>
            <li>
              <strong>Cohort accountability</strong> — peers one week ahead of you are a stronger
              completion mechanism than motivation has ever been.
            </li>
            <li>
              <strong>Python and maths onboarding</strong> for switchers, so Layer 1 is built rather
              than assumed.
            </li>
            <li>
              <strong>Batch deferral or transfer</strong> — the policy that decides whether a bad
              month ends the attempt.
            </li>
            <li>
              <strong>Continuous curriculum refresh.</strong> In AI this is a delivery feature, not
              an editorial nicety; a syllabus that has not moved in eighteen months has fallen behind
              the interview.
            </li>
          </ul>
          <Callout label="Ask every provider these five questions — including this one">
            <ol className="mt-1">
              {fiveQuestions.map((f) => (
                <li key={f.q}>
                  <strong>{f.q}</strong> — {f.why}
                </li>
              ))}
            </ol>
            <p>
              These are printed here as confidence, not defensiveness. A provider that welcomes the
              questions is telling you something; so is one that deflects them.
            </p>
          </Callout>

          <H3 id="lm-projects">3) What do you actually build?</H3>
          <p>
            Ten to fifteen projects, escalating from guided to independent, ending in a deployed
            capstone you designed. <Verify>VERIFY: current project list</Verify>
          </p>
          <ol>
            {projectLadder.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
          <p>
            <strong>Why project count misleads.</strong> Ten guided notebooks with the answers filled
            in produce one portfolio piece; three projects where you chose the chunking strategy,
            defended the metric and measured the failure cases produce three. Design decisions were
            weighted here, not repository counts — because that is exactly how the project deep-dive
            round is scored.
          </p>

          <H3 id="lm-career">4) Interview preparation and career support</H3>
          <p>
            Career support is scoped to AI roles specifically: AI-role interview preparation,
            project-defence practice (being pushed on why that chunk size, that metric, that serving
            pattern), AI system-design cases, portfolio and GitHub review, resume positioning around
            systems built rather than courses completed, and career guidance — described precisely as
            offered on the official pages.{" "}
            <Verify>VERIFY: current career-support scope</Verify>
          </p>
          <p>
            <strong>Stated plainly:</strong> outcomes depend on your completion, your portfolio and
            your application effort. No placement is guaranteed here, no placement percentage is
            quoted, and no salary outcome is promised — by LogicMojo or by anyone else on this page.
          </p>

          <H3 id="lm-pricing">5) Pricing and value — capability per rupee</H3>
          <DataTable
            head={["Price band", "What the market offers here", "What you typically get", "Where LogicMojo sits"]}
            rows={priceBands}
            caption="Fees change; verify every figure on the official page before paying. [VERIFY: fee, GST, EMI terms, refund window, bond — believed none.]"
          />
          <p>
            Express value as{" "}
            <strong>capability level reached ÷ (₹ spent + hours spent)</strong> and the ₹40K–₹1.2L
            band is where the curve peaks. Above it, higher prices typically buy brand recognition,
            placement infrastructure or an academic credential rather than a higher capability
            ceiling. Those are legitimate purchases — a visa application does not care how well you
            can re-rank retrieved chunks — but they should be recognised as what they are.
          </p>

          <H3 id="lm-fit">6) Who LogicMojo fits best — and when another option here may suit you</H3>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            <NoteCard title="Strong fit">
              <ul className="mt-1">
                <li>Working developers, 1–8 years, with 10–15 hours a week</li>
                <li>Career switchers who need prerequisite support and full depth in one sequence</li>
                <li>Self-taught learners who need a spine, code review and portfolio design</li>
                <li>Anyone targeting roles that test RAG, agents, fine-tuning and deployment</li>
              </ul>
            </NoteCard>
            <NoteCard title="Complementary options">
              <ul className="mt-1">
                <li>University-issued credential required → upGrad, Great Learning</li>
                <li>Fully self-paced, no fixed timings → DeepLearning.AI, IBM</li>
                <li>Sub-₹15,000 exploratory budget → PW Skills, GUVI</li>
                <li>Research or PhD pathway → university MTech/MS, NPTEL</li>
              </ul>
            </NoteCard>
          </div>
          <p>
            <strong>What is not claimed here:</strong> no placement percentage, no learner count, no
            salary outcome, no alumni quote. Confidence in this section comes from specificity, and
            every figure that could not be verified is marked rather than estimated.
          </p>
          <div className="mt-6">
            <a
              href="https://logicmojo.com/artificial-intelligence-machine-learning-course"
              className="inline-block rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground no-underline shadow-editorial transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Explore LogicMojo&apos;s AI &amp; ML Course — curriculum, live batches &amp; project portfolio →
            </a>
          </div>
        </Section>

        {/* ALSO CONSIDERED */}
        <Section
          id="honorable-mentions"
          eyebrow="Section 7"
          title="Also Considered — 10 Options That Didn't Make the Top 10 (And Why)"
        >
          <p>
            Several of these are excellent, and two of them are on my own recommended free stack.
            They were excluded for structural reasons — scope, pacing, pricing, support or timeline —
            not quality.
          </p>
          <DataTable
            head={["Option", "Short verdict", "Why it is not in the top 10"]}
            rows={alsoConsidered.map((h) => [h.name, h.verdict, h.note.split(". ")[0] + "."])}
          />
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            {alsoConsidered.map((h, i) => (
              <NoteCard key={h.name} title={h.name} index={i + 1}>
                <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent">
                  {h.verdict}
                </p>
                <p>{h.note}</p>
              </NoteCard>
            ))}
          </div>
          <p>
            Each of these can be the right answer for a specific reader — a research-bound student, a
            senior manager buying a peer group, an engineer who needs one cloud certification for an
            internal move. This ranking optimises for a general Indian learner targeting AI Engineer
            roles, and that is the only claim it makes.
          </p>
          <DataTable
            head={["Honorable mention", "What it does well", "Why it is not ranked"]}
            rows={honorableMentions.map((h) => [h.name, h.why, h.excluded])}
            caption="A second pass over programs frequently raised by readers."
          />
        </Section>

        {/* QUIZ */}
        <Section
          id="quiz"
          eyebrow="Section 8"
          title="AI Course Finder Quiz — Which Course Fits Your Path to AI Engineer?"
        >
          <p>
            Eight single-select questions on experience level, education, career goal, budget, how
            much placement support matters, learning mode, weekly hours, and whether you need Python
            and ML taught from scratch. The result opens in a pop-up with the best-fit course, why it
            fits you, its key modules, its placement position and a direct link. No email gate, no
            lead form, nothing stored.
          </p>
          <Callout label="Output logic, stated explicitly" tone="muted">
            <ul className="mt-1">
              <li>Beginner + needs Python/ML foundations + placement support matters → <strong>LogicMojo</strong></li>
              <li>Working developer + placement infrastructure is the top priority + ₹80K+ → <strong>Scaler</strong></li>
              <li>University credential + career switch → <strong>upGrad</strong> or <strong>Great Learning</strong></li>
              <li>Employer-funded credential → <strong>Simplilearn</strong></li>
              <li>IIT tag at mid-price → <strong>Intellipaat</strong></li>
              <li>Free only → <strong>DeepLearning.AI + Hugging Face + Kaggle</strong></li>
              <li>Under ₹15K → <strong>PW Skills</strong> or <strong>GUVI</strong></li>
              <li>Vernacular preference → <strong>GUVI</strong></li>
              <li>Self-paced and already coding → <strong>IBM AI Engineering</strong></li>
              <li>Under 6 hrs/week, AI literacy goal → <strong>DeepLearning.AI</strong> or vendor tracks</li>
            </ul>
          </Callout>
        </Section>
        <CourseFinderQuiz />

        {/* PROJECTS */}
        <Section
          id="projects"
          eyebrow="Section 9"
          title="Projects That Get AI Engineers Hired in India (2026)"
        >
          <p>
            Interviewers do not count projects. They pick one and dig until they find the bottom of
            your understanding. Eight archetypes cover almost every AI Engineer job description in
            India right now — build three of them properly rather than all eight badly.
          </p>
          <div className="my-6 space-y-4">
            {archetypes.map((a, i) => (
              <Reveal key={a.title} className="glass-card lift-hover p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-xl text-primary">{a.title}</p>
                </div>
                <p className="mt-2 text-sm">
                  <strong>Demonstrates:</strong> {a.demonstrates}
                </p>
                <p className="mt-1 text-sm">
                  <strong>Answers the question:</strong> {a.question}
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface p-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      Weak version
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{a.weak}</p>
                  </div>
                  <div className="rounded-xl border border-accent/40 bg-highlight p-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
                      Strong version
                    </p>
                    <p className="mt-1 text-sm text-highlight-foreground">{a.strong}</p>
                  </div>
                </div>
                <p className="mt-3 font-mono text-xs text-muted-foreground">Stack: {a.stack}</p>
              </Reveal>
            ))}
          </div>

          <H3 id="readme">A README template an interviewer respects</H3>
          <DataTable
            head={["Section", "What goes in it"]}
            rows={readmeOutline.map((r) => [r.heading, r.content])}
          />

          <H3 id="defence">The portfolio-defence checklist</H3>
          <ul>
            {defenceChecklist.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p>
            Which courses produce which archetypes is visible in the project row of the curriculum
            scorecard above: specialist live programs reach the RAG-with-evaluation, agent and
            deployment archetypes; university programs reliably produce the classical ML and
            case-study archetypes; MOOCs produce scaffolded assignments that teach well and
            demonstrate little.
          </p>
        </Section>

        {/* INTERVIEWS */}
        <Section
          id="interviews"
          eyebrow="Section 10"
          title="AI Engineer Interview Preparation — What Indian Companies Actually Ask"
        >
          <p>
            A typical 2026 loop runs five rounds. The third and fourth decide most outcomes, and
            almost nobody prepares for them properly.
          </p>
          <DataTable
            head={["Round", "What is tested", "Representative questions"]}
            rows={interviewRounds.map((r) => [r.round, r.tests, r.typical])}
          />

          <H3 id="question-bank">18 question types, and what a strong answer contains</H3>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            {interviewQuestions.map((q, i) => (
              <NoteCard key={q.q} title={q.q} index={i + 1}>
                <p>{q.answer}</p>
              </NoteCard>
            ))}
          </div>

          <H3 id="four-week-plan">A four-week interview-preparation plan</H3>
          <DataTable
            head={["Week", "Focus", "Daily discipline"]}
            rows={fourWeekPlan.map((w) => [w.week, w.focus, w.daily])}
          />
          <p>
            Structured interview preparation is not universal on this list — the career-support table
            above marks which programs include AI-role-specific preparation and project defence, and
            which offer generic resume workshops. If yours does not, buy two or three paid mock
            interviews instead; it is the cheapest high-leverage spend in the whole journey.
          </p>
        </Section>

        {/* JOBS AND SALARIES */}
        <Section
          id="jobs-salaries"
          eyebrow="Section 11"
          title="AI Engineer Jobs and Salaries in India (2026)"
        >
          <Callout label="Read this before the numbers" tone="muted">
            <p>
              Compensation varies enormously by city, employer type, prior experience, interview
              performance and negotiation. Every figure below is an indicative range compiled from
              public aggregators and job postings, marked{" "}
              <Verify>VERIFY: current market data</Verify> and refreshed quarterly. Source:{" "}
              <span className="font-mono">[INSERT: source and check date]</span>. Treat these as a
              band to verify, never as a quote.
            </p>
          </Callout>
          <DataTable
            head={["Role", "Core skills", "Entry bar", "Indicative range (₹ LPA)", "Best-fit courses"]}
            rows={roleSalaryTable}
          />
          <DataTable
            head={["Experience band", "Services / mid-market", "Product, GCC, AI-native", "What moves you up"]}
            rows={salaryTable}
            caption="Directional bands by experience. [VERIFY at time of publication.]"
          />

          <H3 id="employers">Hiring by employer type</H3>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            {employerTypes.map((e, i) => (
              <NoteCard key={e.type} title={e.type} index={i + 1}>
                <p>{e.what}</p>
              </NoteCard>
            ))}
          </div>

          <H3 id="timelines">Transition timelines by background</H3>
          <DataTable
            head={["Starting point", "Indicative timeline", "Where the work actually is", "Confidence"]}
            rows={transitionTimelines}
            caption="Indicative only, assuming 10–12 protected hours a week. Consistency moves these numbers far more than budget does."
          />

          <H3 id="salary-movers">What moves salary</H3>
          <ul>
            <li>
              <strong>Portfolio</strong> — a deployed, evaluated system is negotiation leverage; a
              certificate is not.
            </li>
            <li>
              <strong>Deployment experience</strong> — having operated something in production moves
              you a band on its own.
            </li>
            <li>
              <strong>System-design reasoning</strong> — the ability to cost and scale a design is
              what separates senior from mid.
            </li>
            <li>
              <strong>Domain knowledge</strong> — BFSI, healthcare and manufacturing pay for people
              who understand the domain and the model.
            </li>
            <li>
              <strong>Employer type and city</strong> — GCCs and product companies in Bengaluru and
              Hyderabad lead; remote is converging but not equalised.
            </li>
          </ul>
        </Section>

        {/* FREE VS PAID */}
        <Section
          id="free-vs-paid"
          eyebrow="Section 12"
          title="Free vs. Paid AI Engineer Courses in India"
        >
          <p>
            Everything in the 2026 AI Engineer skill stack can be learned for ₹0. That is a true
            statement, and it is also why so many people are on month nine of month three. Here is a
            free stack that genuinely works, in order.
          </p>
          <DataTable
            head={["Step", "What it covers", "Time", "Cost"]}
            rows={freeStack}
            caption="A usable free sequence. Follow it in order; the ordering is the part that is normally sold to you."
          />
          <H3 id="free-limits">What free cannot give you</H3>
          <ul>
            {freeCannotGive.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Quote>
            Paid courses in 2026 don&apos;t sell information. They sell structure, feedback, sequence
            and accountability. If you can supply those yourself, free is the rational choice. If
            you&apos;ve started and stopped before, the structure is the product.
          </Quote>
          <p>
            <strong>My honest recommendation:</strong> spend eight weeks free first. If you finish,
            you have learned something more valuable than the content — that you finish — and you can
            invest with confidence in a cohort for the GenAI-to-production layers. If you do not
            finish, you have discovered for ₹0 exactly what you need to buy.
          </p>
        </Section>

        {/* ROI */}
        <Section id="roi" eyebrow="Section 13" title="ROI Reality — Is an AI Engineer Course Worth It?">
          <Callout label="The formula">
            <p className="font-mono text-sm">
              ROI = (realistic salary delta over 24 months × probability of achieving it) − (fee +
              EMI interest + opportunity cost of hours)
            </p>
            <p>
              Most course comparisons stop at the fee. The two terms that actually decide the sign of
              that expression are the probability term and the hours term — and both are functions of
              whether the format fits your life.
            </p>
          </Callout>
          <div className="my-6 space-y-4">
            {roiScenarios.map((s) => (
              <Reveal key={s.label} className="glass-card lift-hover p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-display text-xl text-primary">{s.label}</p>
                  <span className="rounded-md bg-highlight px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-highlight-foreground ring-1 ring-accent/25">
                    {s.badge}
                  </span>
                </div>
                <dl className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {s.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3 border-b border-border/60 py-1 text-sm">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="text-right font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-sm">{s.verdict}</p>
              </Reveal>
            ))}
          </div>
          <p>
            Three determinants decide which scenario you land in:{" "}
            <strong>completion, portfolio quality and application effort</strong>. Note that the fee
            appears in none of them.
          </p>
          <Quote>
            The course is roughly 40% of your outcome. What you build during it, and what you do in
            the three months after, is the other 60%.
          </Quote>
        </Section>

        {/* RED FLAGS */}
        <Section
          id="red-flags"
          eyebrow="Section 14"
          title="Red Flags — Spotting a Course That Won't Make You an AI Engineer"
        >
          <p>
            Fifteen signals, each of which I have seen on a live Indian landing page in the last
            year. One is a question to ask; three together is a decision.
          </p>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            {redFlags.map((r, i) => (
              <Reveal key={r.flag} className="rounded-xl border border-destructive/25 bg-card p-4 shadow-editorial lift-hover">
                <p className="flex items-start gap-2 font-semibold text-primary">
                  <span className="font-mono text-xs text-destructive">{String(i + 1).padStart(2, "0")}</span>
                  {r.flag}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{r.why}</p>
              </Reveal>
            ))}
          </div>
          <H3 id="sales-call">Sales-call rules</H3>
          <ul>
            {salesCallRules.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p>
            One email filters most of this:{" "}
            <em>
              &ldquo;Please send the full module list, the instructor names for my batch, the refund
              policy, the EMI lender and three alumni I can contact.&rdquo;
            </em>{" "}
            How a provider answers that tells you more than any review site.
          </p>
        </Section>

        {/* AUTHOR */}
        <Section id="author" eyebrow="Section 15" title="About the Author">
          <Reveal className="glass-card lift-hover flex flex-col gap-5 p-6 sm:flex-row">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-dashed border-accent/50 bg-gradient-to-br from-secondary to-card text-center font-mono text-[0.6rem] uppercase tracking-wide text-muted-foreground">
              [PHOTO PLACEHOLDER]
            </div>
            <div>
              <p className="eyebrow">Author</p>
              <p className="mt-1 font-display text-2xl text-primary">[INSERT: Author name]</p>
              <p className="text-sm font-semibold text-accent">
                [INSERT: Role] — AI education analyst and curriculum reviewer
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                [INSERT: 60–90-word bio.] Methodology used here: every published curriculum was read
                module by module, mapped against the seven-layer AI Engineer skill stack, and scored
                on six weighted pillars stated in the introduction. Fees, affiliations and module
                lists were checked against official pages on the recorded date; anything that could
                not be verified is marked rather than estimated. This analysis exists because the
                affiliate listicles ranking these programs are ranked by commission, not curriculum.
              </p>
              <p className="mt-3 text-sm">
                LinkedIn: <span className="font-mono">[INSERT URL]</span> · Last reviewed:{" "}
                <span className="font-mono">[INSERT DATE]</span> · Reviewed quarterly; next review{" "}
                <span className="font-mono">[INSERT DATE]</span>.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* REVIEWERS */}
        <Section id="reviewers" eyebrow="Section 16" title="Expert Reviewers">
          <p>
            Five practitioners reviewed specific sections of this article for accuracy. Names,
            photographs, bios and quotes are placeholders until each reviewer confirms them in
            writing — no reviewer, quote or affiliation on this page may be invented.
          </p>
        </Section>
        <ReviewerCarousel />

        {/* FAQS */}
        <Section id="faqs" eyebrow="Section 17" title="Frequently Asked Questions — Beginners Becoming AI Engineers in India (2026)">
          <p>
            Thirty-five questions readers actually send, grouped into five clusters and answered
            directly in the first sentence. Everything below is also emitted as FAQPage structured
            data.
          </p>
        </Section>
        <Faq />

        {/* VERDICT */}
        <Section
          id="verdict"
          eyebrow="Section 18"
          title="Final Verdict — The Best AI Course in India to Become an AI Engineer (2026)"
        >
          <p>
            <strong>LogicMojo&apos;s AI &amp; Machine Learning Course</strong> ranks first because it
            runs one uninterrupted sequence from Python to a deployed, evaluated LLM system — live,
            in IST, with human code review — at the price band where capability per rupee peaks.{" "}
            <strong>Scaler</strong> ranks second because its placement infrastructure and
            product-company network are the strongest here, and that is worth real money to the right
            learner. <strong>upGrad (IIIT-Bangalore)</strong> ranks third because a university-issued
            credential clears HR filters that no bootcamp certificate touches.
          </p>
          <p>
            The right answer for you depends on four things, and none of them is a review score: your
            goal, your budget, the hours you can genuinely protect each week, and your honest track
            record on finishing what you start. A ₹3L program you abandon in month three is worse
            than a ₹40K program you complete — worse in money, and far worse in the nine months you
            do not get back.
          </p>
          <p>
            Which returns to the insight this whole page is built on:{" "}
            <strong>completion and portfolio determine outcomes, and course choice heavily
            determines completion.</strong> Curriculum sets your ceiling. Format decides whether you
            reach it. Evaluate both, in that order, and be sceptical of anyone who will not show you
            the syllabus before the payment link.
          </p>
          <p>
            <strong>One concrete next action, today:</strong> run the skill-gap checklist above,
            audit one shortlisted syllabus against the seven layers, send the twelve pre-enrolment
            questions by email, and block ten hours a week in your calendar for the next month. If
            you cannot protect the ten hours, no course on this list will change your outcome — and
            that is worth knowing before you pay, not after.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://logicmojo.com/artificial-intelligence-machine-learning-course"
              className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground no-underline shadow-editorial transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Explore LogicMojo&apos;s AI &amp; ML Course — full curriculum, live batches &amp; project portfolio →
            </a>
            <a
              href="#quiz"
              className="lift-hover rounded-xl border border-accent/35 bg-card px-5 py-2.5 text-sm font-semibold text-primary no-underline"
            >
              Take the course finder quiz
            </a>
          </div>
        </Section>

        {/* LINKS */}
        <Section id="links" eyebrow="Section 19" title="Related Guides and Next Steps">
          <H3 id="internal-links">Continue on LogicMojo</H3>
          <ul>
            {internalLinks.map((l) => (
              <li key={l.anchor}>
                <a href={l.href}>{l.anchor}</a>{" "}
                <span className="font-mono text-xs text-muted-foreground">{l.note}</span>
              </li>
            ))}
          </ul>
          <H3 id="external-links">Official documentation referenced</H3>
          <ul>
            {externalLinks.map((l) => (
              <li key={l.anchor}>
                <a href={l.href} rel="nofollow noopener" target="_blank">
                  {l.anchor}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Provider claims in this article were checked against each official course page on{" "}
            <span className="font-mono">[INSERT: check date]</span>. Fees, module lists, affiliations
            and durations change without notice — verify before you pay.
          </p>
        </Section>
      </main>

      <footer className="relative overflow-hidden border-t border-border bg-gradient-to-br from-ink via-primary to-ink text-ink-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="relative mx-auto max-w-5xl px-5 py-12">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary font-display text-lg">
              L
            </span>
            <p className="font-display text-2xl">LogicMojo</p>
          </div>
          <p className="mt-3 max-w-xl text-sm opacity-80">
            Live, instructor-led AI &amp; Machine Learning training for working professionals in
            India — foundations to production RAG, fine-tuning, agents and deployment.
          </p>

          <div className="mt-8 grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-70">Courses</p>
              <ul className="mt-3 space-y-1.5 opacity-85">
                <li>AI &amp; ML Course <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
                <li>GenAI Course <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
                <li>Data Science Course <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
                <li>DSA &amp; System Design <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-70">Resources</p>
              <ul className="mt-3 space-y-1.5 opacity-85">
                <li>Curriculum PDF <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
                <li>Batch schedule <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
                <li>Project portfolio <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
                <li>Blog · FAQs <span className="font-mono text-xs opacity-60">[INSERT LINK]</span></li>
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-70">Contact</p>
              <ul className="mt-3 space-y-1.5 opacity-85">
                <li>[EMAIL]</li>
                <li>[PHONE]</li>
                <li>WhatsApp: [WHATSAPP]</li>
              </ul>
              <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-70">Social</p>
              <p className="mt-2 opacity-85">LinkedIn · YouTube · Instagram · X · GitHub</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-xs opacity-70">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Refund Policy</span>
            <span>Batches: [INSERT: batch date]</span>
            <span>Fees: ₹XX,XXX [VERIFY]</span>
          </div>
          <p className="mt-4 text-xs opacity-60">
            © {new Date().getFullYear()} LogicMojo. This guide is published by LogicMojo — a
            commercial relationship disclosed at the top of the page. Fees, curricula and hiring data
            change; verify current details on each provider&apos;s official page before enrolling. No
            course, including ours, can guarantee a job or a salary.
          </p>
        </div>
      </footer>

      <MobileCta />
      <StickyDesktopCta />
    </div>
  );
}

