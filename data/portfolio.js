/**
 * Central portfolio configuration.
 *
 * This is the single source of truth for every piece of career content
 * rendered on the page. Components never hard-code copy — they read it
 * from here. Update this file to make the site yours; you should not
 * need to touch component code for routine content changes.
 *
 * Content below is sourced from Adelard's résumé (Adelard_Dcunha_AI_ML.pdf).
 * Remaining "TODO" markers are genuinely open — things the résumé doesn't
 * specify (a public-facing location line, an OG image, etc).
 */

const NAME = "Adelard D'Cunha";

export const profile = {
  name: NAME,
  initials: NAME.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase(),
  title: "AI/ML Engineer",
  tagline: "Building generative and agentic AI that runs in production — not just in demos.",
  location: "Maharashtra, India", // TODO: confirm — inferred from your education history
  // Set to null to hide the availability pill entirely.
  availability: "Open to new opportunities", // TODO — set to null to hide
  email: "adelarddcunha07@gmail.com",
  // A local path (e.g. "/resume.pdf" in /public) OR an external URL. An
  // external URL opens in a new tab; a local path is offered as a download.
  resumeUrl: "https://drive.google.com/drive/u/1/folders/12CWy-Si8tYED2zE5yPW_yZxolwIsCUJl",
  social: {
    github: "https://github.com/adlard07",
    leetcode: "https://leetcode.com/u/adelarddcunha07/",
    kaggle: "https://www.kaggle.com/adelard123",
    linkedin: "https://www.linkedin.com/in/adelard-dcunha-6186b0216",
    medium: "https://medium.com/@adelarddcunha07",
    twitter: "https://x.com/BotlordWithB",
    reddit: "https://www.reddit.com/user/Vast_Excitement_945/",
    stackoverflow: "https://stackoverflow.com/users/23564658/adlard",
  },
  // Used by the GitHub integration (lib/github.js). Prefer setting
  // NEXT_PUBLIC_GITHUB_USERNAME in .env.local; this is the fallback.
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "adlard07",
};

export const seo = {
  siteName: `${profile.name} — Portfolio`,
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://adlard.vercel.app",
  keywords: [
    profile.name,
    profile.title,
    "AI/ML engineer",
    "generative AI",
    "agentic AI",
    "RAG",
    "LLM engineer portfolio",
  ],
  ogImage: "/og-image.png", // TODO: add a 1200x630 image to /public
};

export const hero = {
  // Set to a string to show a small label above the headline; leave empty
  // to hide it entirely.
  eyebrow: "",
  headline: "AI/ML engineer & Data Scientist",
  intro:
    "I'm an AI/ML engineer working on generative and agentic systems, multi-agent platforms that let people query their own data in plain language, RAG pipelines over documents and video, and the chat and voice layers sitting on top of them. A good share of the work is the part nobody demos: sandboxing what agents write, keeping every answer traceable to a source, and watching models for drift after they ship.",
  scrollLabel: "Scroll to explore",
};

export const about = {
  // eyebrow: "A brief professional summary",
  heading: "About",
  paragraphs: [
    "I build generative and agentic AI systems that run in production. At EduvanceAI, that's meant multi-agent platforms that let consultants query their own datasets in plain language, RAG pipelines spanning over a thousand hours of video and thousands of documents, and the chat and voice layers built on top of both.",
    "A good share of the work is the part nobody demos: sandboxing code the agents write, keeping every answer traceable back to a source page or timestamp, and watching models for drift once they're live. I care as much about the guardrails as the model itself.",
    "Outside of agentic and generative work, I've built a real-time card fraud detection service scoring transactions inline under 40ms, and hierarchical demand forecasting for multi-store retail — my closest brushes with BFSI and traditional MLOps respectively.",
  ],
  strengths: [
    "Multi-agent systems & agentic orchestration",
    "RAG architecture & retrieval evaluation",
    "Production MLOps — drift detection, monitoring, safe rollout",
    "Applied deep learning, NLP & speech",
  ],
  focusAreas: ["Generative AI", "Agentic systems", "RAG & retrieval", "MLOps & applied ML"],
};

// Only entries with a non-empty `value` are rendered — remove or blank
// out anything that doesn't apply to you yet.
export const highlights = [
  { label: "Years of experience", value: "3", suffix: "+" },
  { label: "Enterprise clients served", value: "4", suffix: "" },
  { label: "Technologies used", value: "30", suffix: "+" },
  { label: "Certifications", value: "2", suffix: "" },
  { label: "Publications", value: "1", suffix: "" },
];

export const skills = [
  {
    category: "Agentic & Generative AI",
    items: [
      "Retrieval Augmented Generation (RAG)",
      "Agentic Workflows, Chatbots",
      "Prompt Engineering (Chain Of Thoughts, Few Shots, Zero Shot, ReAct Prompting, Guardrails)",
      "Conversational AI",
      "LLM Harnessing",
      "Quantization",
      "Paged Attention",
      "KV Caching",
      "Flash Attention",
      "Knowledge Distillation",
      "Inference & Cost Optimization",
    ],
  },
  {
    category: "Retrieval & Storage",
    items: [
      "Pinecone",
      "ChromaDB",
      "Neo4j knowledge graphs",
      "Redis",
      "PostgreSQL",
      "Chunking",
      "Semantic Search",
      "recall@k evaluation",
    ],
  },
  {
    category: "ML, Deep Learning & NLP",
    items: [
      "Supervised Learning (Regression and Classification)",
      "Unsupervised Learning (Clustering, Dimensionality Reduction, Association Rules, Anomaly Detection)",
      "Reinforcement Learning (Model Free, Policy Based)",
      "Semi-Supervised Learning",
      "Time Series Forecasting (RNN / GRU / LSTM)",
      "Transformers",
      "Feature Engineering",
      "Model Evaluation & Testing",
      "Applied Statistics",
      "Probabilistic Modeling",
      "Hypothesis Testing",
    ],
  },
  {
    category: "Languages & Frameworks",
    items: [
      "Python",
      "SQL",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Hugging Face Transformers",
      "Pandas",
      "NumPy",
      "Node.js",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: ["PySpark Structured Streaming", "Apache Kafka", "Docker", "Kubernetes", "AWS (EC2, SageMaker)", "REST APIs & microservices"],
  },
  {
    category: "MLOps",
    items: [
      "MLflow",
      "Drift detection (PSI & KS)",
      "Automated retraining",
      "Champion–challenger promotion",
      "Shadow & canary rollout",
      "Model monitoring",
    ],
  },
];

export const experience = [
  {
    company: "EduvanceAI",
    role: "Software Development & AI Engineer",
    location: "India",
    start: "Feb 2025",
    end: "Present",
    type: "Full-time",
    summary:
      "Building agentic and generative AI products end-to-end — RAG and multi-agent systems, the retrieval and infrastructure under them, and the real-time monitoring that keeps them reliable.",
    achievements: [
      "Talk2Data — built an agentic LLM system letting consultants query structured data in plain language or speech, fully automating feature engineering, EDA, and analysis; used RAG + MemPalace for dynamic, semantic context fetching to cut token use and inference cost ~95%; added a ReAct-based intent-decomposition agent that splits queries into sub-tasks and routes them correctly; designed a synchronous tool generator that raised output consistency on repeated queries from ~65% to 100%; hardened the system with a Docker sandbox and static guardrails against unsafe code; split it into independently scalable Kafka services (sandbox, intent, tools, etc.), hitting 99% accurate answers; and shipped a Next.js chatbot with live socket streaming so users can watch the agent's reasoning in real time",
      "Virtual Coach — built a multimodal RAG app returning the exact video timestamp and manual page a field technician needs; chunked videos into 10-second overlapping segments with frame-level breakdown and used hybrid dense + BM25 indexing and reranking, applying the same 50-token overlapping-window approach to documents for consistent ranking; used Kafka to fan out queries and merge results from both modalities asynchronously; switched from OpenAI embeddings to a self-hosted, open-source quantized multilingual model (AkshitaS/bhasha-embed-v0) after benchmarking, dropping monthly embedding cost from $512 to ~$80; and built an audio library (VAD, noise cancellation, silence trimming, thinking/breath-pause detection) that improved throughput 40% and cut cost per minute ~60%",
      "Sales Copilot — created a GenAI sales-lifecycle tool that plans monthly dealer visits, recommends pitches from past visits, suggests products, and turns post-visit audio notes into the next plan; built a journey planner solving multi-constraint TSP routing across 70 outlets in South & East India, cutting travel distance 70% while lifting coverage 50%; added admin-managed dealer targets, GenAI pitch generation from visit history, and a hybrid collaborative + content-based recommender combining time-series forecasting, dealer clustering, and TSP, plus audio-derived Next Best Actions; and built a real-time error-logging and model-monitoring service that cut downtime 99% (from constant to about once a week) and doubled the speed of root-cause resolution",
    ],
    responsibilities: [
      "LMS (Learning Management System) — a GenAI-powered platform for scenario simulations (e.g. manager-to-employee confrontations, sales and marketing scenarios); built role-based access control (Super Admin / Admin / User), an SMTP notification microservice, and the Eduvance.ai marketing site for a soft-skills LMS with embedded voice and chat AI",
    ],
    technologies: ["RAG", "Agentic Workflows", "Apache Kafka", "Docker", "Next.js", "Hybrid Retrieval (Dense + BM25)", "Time-Series Forecasting", "TSP Optimization", "RBAC"],
  },
  {
    company: "Forbes Advisor",
    role: "Data Analyst Intern",
    location: "",
    start: "March 2025",
    end: "December 2025",
    type: "Internship",
    summary:
      "Built a natural-language-to-SQL interface and the ETL pipelines feeding it, for financial reporting and business intelligence.",
    achievements: [
      "Text-To-SQL — built an NLP interface on PostgreSQL converting natural-language questions into SQL for financial reporting and business dashboards; pitched the POC to stakeholders and it was later adopted full-time; used an LLM layer to translate requests into SQL, fetch data, and render results in a React.js app; added JWT-based auth to scope data access by user role/department; and implemented SQL validation and guardrails against unsafe queries and prompt injection, lifting data-fetch accuracy to 99%",
    ],
    responsibilities: [
      "ETL & Data Study — built web-scraping pipelines with Scrapy and Selenium to collect, clean, normalize, and stage external financial data for predictive modeling; scheduled weekly, monthly, and yearly extraction jobs with Apache Airflow; built automated data-quality checks for both scraped and database data, loading valid records into MongoDB and quarantining/alerting on failures",
    ],
    technologies: ["PostgreSQL", "LLM (Text-to-SQL)", "React.js", "JWT Auth", "Scrapy", "Selenium", "Apache Airflow", "MongoDB"],
  },
];

// Repository names (as they appear on GitHub) to prioritise when ranking
// projects — useful for pinning your best work regardless of star count.
export const featuredRepoNames = [];

// Rendered only if the live GitHub fetch fails or returns nothing. Drawn
// from the Projects section of the résumé, since these aren't necessarily
// public repos under the GitHub account above.
export const fallbackProjects = [
  {
    name: "real-time-fraud-anomaly-detection",
    description:
      "Real-time card fraud and anomaly detection for BFSI: gradient boosting plus autoencoder reconstruction error, scored inline with p99 under 40ms against a Redis online feature store. Thresholds set from expected-cost curves; PSI/KS drift monitors gate retraining with shadow-then-canary rollout.",
    html_url: "https://github.com/adlard07",
    homepage: "",
    language: "Python",
    topics: ["fraud-detection", "streaming", "mlops", "pyspark"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    fork: false,
    archived: false,
  },
  {
    name: "autonomous-voice-intake-agent",
    description:
      "An autonomous voice agent that answers the phone for service providers — transcribes and classifies intent live, resolves or escalates the issue, and books the visit straight from the transcript with no human in the loop.",
    html_url: "https://github.com/adlard07",
    homepage: "",
    language: "Python",
    topics: ["voice-ai", "speech-to-text", "agentic-ai"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    fork: false,
    archived: false,
  },
  {
    name: "hierarchical-demand-forecasting",
    description:
      "Hierarchical demand forecasting for multi-store retail: MinT reconciliation so store-level forecasts sum to regional/national totals, conformal prediction for calibrated safety stock, and weekly SageMaker retraining gated on pinball-loss improvement.",
    html_url: "https://github.com/adlard07",
    homepage: "",
    language: "Python",
    topics: ["forecasting", "time-series", "sagemaker"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    fork: false,
    archived: false,
  },
];

export const education = [
  {
    institution: "Fr. Conceicao Rodrigues College of Engineering",
    degree: "Bachelor of Engineering",
    field: "Artificial Intelligence and Data Science",
    start: "2021",
    end: "2024",
    location: "Mumbai, India",
    gpa: "",
    notes: [],
  },
  {
    institution: "St. Xavier's Technical Institute",
    degree: "Diploma",
    field: "Electronics and Telecommunication",
    start: "2018",
    end: "2021",
    location: "Mumbai, India",
    gpa: "",
    notes: [],
  },
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University (Coursera)",
    issueDate: "",
    expiryDate: "",
    credentialId: "",
    credentialUrl: "",
  },
  {
    name: "Mathematics for Machine Learning and Data Science",
    issuer: "DeepLearning.AI (Coursera)",
    issueDate: "",
    expiryDate: "",
    credentialId: "",
    credentialUrl: "",
  },
];

// Leave empty to hide the Publications section entirely.
export const publications = [
  {
    title: "Your ASR Model Isn't the Problem, Your Signal Path Is",
    venue: "Medium",
    date: "",
    authors: ["Adelard D'Cunha"],
    description:
      "On why audio signal quality — not the ASR model itself — is usually the real bottleneck in speech pipelines.",
    url: "https://medium.com/@adelarddcunha07",
  },
];

// Leave empty to hide the Recognition section entirely.
export const achievements = [];

// Example shape, for reference:
// export const achievements = [
//   {
//     title: "Winner, Regional Hackathon",
//     issuer: "TechFest 2022",
//     date: "2022",
//     description: "Built a real-time accessibility tool for public transit apps.",
//     url: "",
//   },
// ];

// TODO: this section is still generic placeholder content — the résumé
// doesn't cover personal interests, so replace with the real thing before
// publishing.
export const beyondWork = {
  // eyebrow: "Beyond the Desk",
  heading: "A little more personal",
  intro: "Work is one part of the picture. Here's a little of what fills the rest of it.",
  items: [
    { label: "Outside of work", description: "Long-distance cycling and slow, deliberate cooking." },
    { label: "Cuisine", description: "Coastal Konkani food, and a long-running fondness for good masala tea." },
    { label: "Sport", description: "Love for badminton or football stays constant." },
    { label: "Reading", description: "Currently reading `100 ways to survive in the wild`" },
    { label: "Travel", description: "Prefers slow travel: a week in one place over five cities in five days." },
    // { label: "A small fact", description: "" },
  ],
};

export const closingCta = {
  eyebrow: "Let's Connect",
  heading: "Interested in building something meaningful together?",
  body: "I'm always glad to hear about interesting problems, thoughtful teams, and roles worth considering.",
};


export const footer = {
  note: "Built with Next.js & Tailwind CSS.",
};
