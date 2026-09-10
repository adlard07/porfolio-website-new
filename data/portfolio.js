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
  location: "Pune | Mumbai | Bangalore, India", // TODO: confirm — inferred from your education history
  // Set to null to hide the availability pill entirely.
  availability: "Open to new opportunities", // TODO — set to null to hide
  email: "adelarddcunha07@gmail.com",
  // A local path (e.g. "/resume.pdf" in /public) OR an external URL. An
  // external URL opens in a new tab; a local path is offered as a download.
  resumeUrl: "https://drive.google.com/drive/u/1/folders/12CWy-Si8tYED2zE5yPW_yZxolwIsCUJl",
  social: {
    github: "https://github.com/adlard07",
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
  eyebrow: "Portfolio",
  headline: "AI/ML engineer & Data Scientist",
  intro:
    "I'm an AI/ML engineer working on generative and agentic systems — multi-agent platforms that let people query their own data in plain language, RAG pipelines over documents and video, and the chat and voice layers sitting on top of them. A good share of the work is the part nobody demos: sandboxing what agents write, keeping every answer traceable to a source, and watching models for drift after they ship.",
  scrollLabel: "Scroll to explore",
};

export const about = {
  eyebrow: "About",
  heading: "A brief professional summary",
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
      "Prompt Engineering (Chain Of Thoughts, Few Shots, Zero Shot, ReAct Prompting, Guardrails) ",
      "Conversational AI",
      "LLM Harnessing",
      "Quantization",
      "Paged Attention",
      "KV Caching",
      "Flash Attention",
      "Chunking",
      "Semantic Search",
      "Inference Optimization",
      "Knowledge Distillation",
      "Cost Reduction & Inference Optimization",
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
      "recall@k evaluation"],
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
      "scikit-learn", "Hugging Face Transformers", "Pandas", "NumPy", "Node.js"],
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
    role: "Software Development Engineer",
    location: "India",
    start: "Feb 2025",
    end: "Present",
    type: "Full-time",
    summary:
      "Building generative and agentic AI systems that run in production — multi-agent analytics, RAG pipelines over documents and video, and the chat and voice layers on top of them.",
    achievements: [
      "Built a multi-agent analytics platform letting consultants query their own datasets in plain English, with schema context from a custom data-dictionary layer and conversation memory — now used by 100+ people across 4 enterprise clients",
      "Wrote a tool generator that writes and sandboxes Python tools on the fly; decomposing each query into intents took output consistency on repeated questions from 62% to 100%, with static checks preventing agent-written code from executing anything arbitrary",
      "Built RAG pipelines over 1,000+ hours of video and 1,200 documents (Neo4j knowledge graph, Pinecone vectors) — video answers return with timestamps and document answers with page numbers, so answers stay source-traceable",
      "Researched and built an audio-processing library for the voice assistant (VAD, silence trimming, noise cancellation, GPU acceleration), lifting throughput 40% and cutting cost per minute ~60%, backed by WER-vs-latency benchmarking",
      "Cut embedding spend from $512/month to ~$80 by benchmarking a self-hosted quantized multilingual model against the OpenAI API on recall@k and WER, then migrating Hindi, English, and Hinglish retrieval to it",
      "Shipped Sales Copilot — forecasting, dealer clustering, and TSP route optimization generating monthly journey plans for 70 outlets — cutting planned travel distance 70% and lifting visit coverage 50%",
      "Built a real-time error-logging and model-monitoring microservice that cut downtime 99%, from near-constant to about once a week, roughly halving time-to-root-cause",
    ],
    responsibilities: [
      "Built the Next.js chat frontend for the multi-agent platform",
      "Added collaborative filtering for next-best-product and a Next Best Action feature pulled from call audio",
      "Earlier on: role-based access control (super admin, admin, user), an SMTP notification service, and the Eduvance.ai marketing site for a soft-skills LMS with voice and chat built in",
    ],
    technologies: ["LangGraph", "RAG", "Pinecone", "Neo4j", "Redis", "PostgreSQL", "PySpark", "AWS (EC2, SageMaker)", "MLflow", "Next.js", "Python"],
  },
  {
    company: "Forbes Advisor",
    role: "Data & Analytics Intern",
    location: "",
    start: "Apr 2024",
    end: "Nov 2024",
    type: "Internship",
    summary:
      "Built retrieval and data-pipeline tooling for querying and normalizing large-scale global financial and linguistic datasets.",
    achievements: [
      "Designed a RAG chatbot POC for querying complex global quantitative and linguistic datasets, now used by the DPR team for financial reporting and business intelligence",
    ],
    responsibilities: [
      "Built a distributed web-scraping and transformation pipeline (Scrapy, Selenium, BeautifulSoup, automated parsers) to normalize external financial and text data for downstream modeling",
    ],
    technologies: ["RAG", "Scrapy", "Selenium", "BeautifulSoup", "Python"],
  },
  {
    company: "Plan My Venture Pvt. Ltd.",
    role: "Data Scientist Intern",
    location: "",
    start: "Mar 2023",
    end: "Dec 2023",
    type: "Internship",
    summary: "Applied statistical and deep learning models to financial forecasting and unstructured text analysis.",
    achievements: [
      "Built predictive models with 85%+ accuracy using regression, GARCH, and LSTM for financial forecasting and hypothesis-driven analysis",
      "Fine-tuned BERT on domain-specific financial text to extract sentiment signals for unstructured data classification, outperforming prior manual benchmark approaches",
    ],
    responsibilities: [
      "Performed EDA, feature selection, cross-validation, and hyperparameter tuning on historical financial data to improve production forecasting quality",
    ],
    technologies: ["Python", "GARCH", "LSTM", "BERT", "scikit-learn"],
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
  eyebrow: "Beyond the Desk",
  heading: "A little more personal",
  intro: "Work is one part of the picture. Here's a little of what fills the rest of it.",
  items: [
    { label: "Outside of work", description: "Long-distance cycling and slow, deliberate cooking." },
    { label: "Cuisine", description: "Coastal Konkani food, and a long-running fondness for good filter coffee." },
    { label: "Sport", description: "Plays badminton or football on weekends." },
    { label: "Reading", description: "Currently reading `100 ways to survive in the wild`" },
    { label: "Travel", description: "Prefers slow travel: a week in one place over five cities in five days." },
    // { label: "A small fact", description: "" },
  ],
};

export const closingCta = {
  eyebrow: "Let's talk",
  heading: "Interested in building something meaningful together?",
  body: "I'm always glad to hear about interesting problems, thoughtful teams, and roles worth considering.",
};


export const footer = {
  note: "Built with Next.js & Tailwind CSS.",
};
