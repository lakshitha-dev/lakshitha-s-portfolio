import type { TechIconSlug } from '../components/TechIcon';
import profileImg from '../assets/profile.jpg';
import heroPortrait from '../assets/hero-portrait.jpg';
import bistecLogo from '../assets/logos/bistec-logo.png';
import nsbmLogo from '../assets/logos/nsbm-logo.png';
import thomasLogo from '../assets/logos/thomas-logo.png';
import duothanAwardImg from '../assets/achievements/duothan-award.jpg';
import pandoraAwardImg from '../assets/achievements/pandora-award.jpg';
import bistecWorksession from '../assets/bistec/team-worksession.jpg';
import bistecHearts from '../assets/bistec/hearts-academy.jpg';
import bistecAiExpo from '../assets/bistec/ai-expo.jpg';
import bistecHackathon from '../assets/bistec/hackathon-team.jpg';
import bistecLimitless from '../assets/bistec/limitless-workshop.jpg';
import bistecOffice from '../assets/bistec/office-selfie.jpg';
import bistecAvurudu from '../assets/bistec/avurudu.jpg';
import bistecEventNight from '../assets/bistec/event-night.jpg';
import certOracle from '../assets/certifications/oracle-oci.jpg';
import certDocker from '../assets/certifications/kodekloud-docker.jpg';
import certPromptEng from '../assets/certifications/kodekloud-prompt-eng.jpg';
import certClaudeApi from '../assets/certifications/skilljar-dpmsgghttfg4.jpg';
import certAgentSkills from '../assets/certifications/skilljar-e743bxyvhbxn.jpg';
import certClaudeCode from '../assets/certifications/skilljar-ik8erqn6f7wk.jpg';
import certMcp from '../assets/certifications/skilljar-t5vwf9tbdcdk.jpg';
/* Generated showcase set (SHOWCASE_IMAGE_PROMPTS.md) — one visual identity
 * across the carousel. Real screenshots remain in src/assets/projects/
 * (docmind.jpg, article-generator.jpg, travelplan-chat.jpg) to swap back. */
import expenseShowcase from '../assets/projects/expense-agent-showcase.jpg';
import servicenowShowcase from '../assets/projects/servicenow-showcase.jpg';
import docmindShowcase from '../assets/projects/docmind-showcase.jpg';
import travelplanShowcase from '../assets/projects/travelplan-showcase.jpg';
import pandoraShowcase from '../assets/projects/pandora-showcase.jpg';
import samsShowcase from '../assets/projects/sams-showcase.jpg';
import quizbankShowcase from '../assets/projects/quizbank-showcase.jpg';
import articleGenShowcase from '../assets/projects/article-generator-showcase.jpg';
import auctionShowcase from '../assets/projects/auction-showcase.jpg';
import financeShowcase from '../assets/projects/finance-showcase.jpg';
import wasteShowcase from '../assets/projects/waste-showcase.jpg';
import affectlearnShowcase from '../assets/projects/affectlearn-showcase.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  year: string;
  company?: string;
  confidential?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl: string;
  skills: string[];
  image?: string;
}

export interface Achievement {
  id: string;
  place: string;
  title: string;
  organizer: string;
  description: string;
  images: { src: string; alt: string }[];
}

export interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export type SkillLevel = 'Experienced' | 'Intermediate' | 'Familiar';

export type LucideSkillIcon =
  | 'database'
  | 'cloud'
  | 'brain'
  | 'bot'
  | 'sparkles'
  | 'braces'
  | 'plug'
  | 'flask';

export interface SkillItem {
  name: string;
  slug?: TechIconSlug;
  lucide?: LucideSkillIcon;
  level: SkillLevel;
}

export interface Milestone {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

export const GITHUB_USERNAME = 'lakshitha-dev';
export const MEDIUM_USERNAME = 'lakshithaa';

/* ──────────────────────────────────────────────────────────────
 * SITE CONFIG — edit copy here. Everything visible on the page
 * pulls from this file so content lives in one place.
 * ────────────────────────────────────────────────────────────── */

export const SITE = {
  name: 'Lakshitha Wijerathne',
  firstName: 'Lakshitha',
  brand: 'lakshitha.dev',
  role: 'Associate Software Engineer',
  email: 'lakshitha.dev@outlook.com',
  website: 'https://lakshitha.dev',
  github: 'https://github.com/lakshitha-dev',
  linkedin: 'https://www.linkedin.com/in/lakshitha-wijerathne/',
  medium: 'https://medium.com/@lakshithaa',
  upwork: 'https://www.upwork.com/freelancers/~01a0bb041b5efe1541',
};

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#writing' },
  { label: 'Featured', href: '#featured' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#certifications' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  name: 'Lakshitha Wijerathne',
  role: 'Associate Software Engineer',
  roleLead: 'Associate Software Engineer specializing in',
  roleFocus: 'AI agents and automation.',
  badgeTagline: 'AI agents and automation',
  photo: heroPortrait,
  photoAlt: 'Portrait of Lakshitha Wijerathne',
  employer: { logo: bistecLogo, name: 'BISTEC Global Services' },
  university: { logo: nsbmLogo, name: 'NSBM Green University' },
  primaryCta: { label: 'Contact me', href: '#contact' },
  secondaryCta: { label: 'View projects', href: '#projects' },
};

export const LOADING = {
  title: 'Just a moment…',
  subtitle: 'Preparing the portfolio',
};

export const VELOCITY = {
  row1: 'Dream big. Build fast. Ship often.',
  row2: 'AI Agents · Automation · Full-Stack',
};

export const QUOTE_BLOCK = {
  part1: 'Dream in systems.',
  part2: 'Build with intent.',
  part3: 'ship without fear.',
  author: '–  notes to self',
};

export interface AboutCardLine {
  text: string;
  highlight?: boolean;
}

export const ABOUT = {
  eyebrow: 'Get to Know More',
  title: 'About Me',
  cards: [
    {
      heading: 'Academic Standing',
      logo: { src: nsbmLogo, alt: 'NSBM Green University' },
      lines: [
        { text: 'BSc (Hons) in Computer Science', highlight: true },
        { text: 'Specializing in AI & Full-Stack' },
        { text: 'NSBM Green University' },
        { text: '2022 — 2026', highlight: true },
      ] as AboutCardLine[],
    },
    {
      heading: 'Experience',
      logo: { src: bistecLogo, alt: 'BISTEC Global Services' },
      lines: [
        { text: 'Associate Software Engineer', highlight: true },
        { text: 'BISTEC Global Services · Jan 2026 — Present' },
        { text: 'AI Agent Developer (Freelance)', highlight: true },
        { text: 'Upwork · Sep 2025 — Present' },
      ] as AboutCardLine[],
    },
  ],
  bio: [
    'I started writing code in 2022 and have spent the years since shipping production software — from a 13-microservice travel marketplace to enterprise AI agents and MCP gateways running on Azure.',
    'I care about clean architecture, predictable systems, and details that hold up under pressure — the kind of engineering that keeps working long after launch.',
  ],
  image: profileImg,
  imageAlt: 'Lakshitha Wijerathne',
};

export const SLOGAN = {
  serifWords: 'dream. build.',
  scriptWord: 'ship.',
};

export const SKILLS_META = {
  eyebrow: 'Explore My',
  title: 'Tech Skills',
};

/* Evidence-based: extracted from ExpenseAgent, ServiceNow platform, QuizBank,
 * DocMind, Medium Article Generator, Travel Plan Platform, Pandora Knowledge
 * Guardian, SAMS, and AffectLearn (ML models, fine-tuning, FastAPI backend,
 * test suites). */
export const SKILL_CATEGORIES: { category: string; items: SkillItem[] }[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C#', slug: 'dotnet', level: 'Experienced' },
      { name: 'Python', slug: 'python', level: 'Experienced' },
      { name: 'TypeScript', slug: 'typescript', level: 'Experienced' },
      { name: 'JavaScript', slug: 'javascript', level: 'Experienced' },
      { name: 'Java', slug: 'openjdk', level: 'Experienced' },
      { name: 'Dart', slug: 'dart', level: 'Intermediate' },
      { name: 'C', slug: 'c', level: 'Intermediate' },
      { name: 'SQL', lucide: 'database', level: 'Experienced' },
    ],
  },
  {
    category: 'Web & Mobile',
    items: [
      { name: 'ASP.NET Core', slug: 'dotnet', level: 'Experienced' },
      { name: 'Next.js', slug: 'nextdotjs', level: 'Experienced' },
      { name: 'React', slug: 'react', level: 'Experienced' },
      { name: 'Spring Boot', slug: 'spring', level: 'Experienced' },
      { name: 'FastAPI', slug: 'fastapi', level: 'Experienced' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', level: 'Experienced' },
      { name: 'Node.js', slug: 'nodedotjs', level: 'Intermediate' },
      { name: 'Flutter', slug: 'flutter', level: 'Intermediate' },
      { name: 'Streamlit', slug: 'streamlit', level: 'Intermediate' },
      { name: 'WebSockets', lucide: 'plug', level: 'Intermediate' },
      { name: 'SQLAlchemy + Alembic', slug: 'sqlalchemy', level: 'Intermediate' },
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      { name: 'MCP', lucide: 'plug', level: 'Experienced' },
      { name: 'Copilot Studio', lucide: 'bot', level: 'Experienced' },
      { name: 'Google ADK', lucide: 'bot', level: 'Experienced' },
      { name: 'LangChain', slug: 'langchain', level: 'Experienced' },
      { name: 'LangGraph', slug: 'langgraph', level: 'Experienced' },
      { name: 'Semantic Kernel', lucide: 'brain', level: 'Intermediate' },
      { name: 'OpenAI API', lucide: 'sparkles', level: 'Experienced' },
      { name: 'Azure OpenAI', lucide: 'sparkles', level: 'Experienced' },
      { name: 'Google Gemini', slug: 'googlegemini', level: 'Experienced' },
      { name: 'RAG & Hybrid Search', lucide: 'brain', level: 'Experienced' },
      { name: 'n8n', slug: 'n8n', level: 'Experienced' },
      { name: 'LlamaIndex', lucide: 'brain', level: 'Intermediate' },
      { name: 'Prompt Engineering', lucide: 'sparkles', level: 'Experienced' },
    ],
  },
  {
    category: 'Machine Learning',
    items: [
      { name: 'PyTorch', slug: 'pytorch', level: 'Intermediate' },
      { name: 'scikit-learn', slug: 'scikitlearn', level: 'Intermediate' },
      { name: 'MediaPipe', slug: 'mediapipe', level: 'Intermediate' },
      { name: 'ONNX Runtime', slug: 'onnx', level: 'Intermediate' },
      { name: 'OpenCV', slug: 'opencv', level: 'Intermediate' },
      { name: 'Hugging Face Transformers', slug: 'huggingface', level: 'Intermediate' },
      { name: 'QLoRA / PEFT', lucide: 'brain', level: 'Intermediate' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', slug: 'postgresql', level: 'Experienced' },
      { name: 'Redis', slug: 'redis', level: 'Intermediate' },
      { name: 'MongoDB', slug: 'mongodb', level: 'Intermediate' },
      { name: 'Qdrant', slug: 'qdrant', level: 'Experienced' },
      { name: 'Azure AI Search', lucide: 'database', level: 'Experienced' },
      { name: 'Cosmos DB', lucide: 'database', level: 'Intermediate' },
      { name: 'Supabase', slug: 'supabase', level: 'Experienced' },
      { name: 'Firebase', slug: 'firebase', level: 'Experienced' },
      { name: 'SQL Server', lucide: 'database', level: 'Intermediate' },
      { name: 'MySQL', slug: 'mysql', level: 'Intermediate' },
      { name: 'SQLite', slug: 'sqlite', level: 'Intermediate' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'Microsoft Azure', lucide: 'cloud', level: 'Experienced' },
      { name: 'Azure DevOps', lucide: 'cloud', level: 'Experienced' },
      { name: 'Docker', slug: 'docker', level: 'Experienced' },
      { name: 'GitHub Actions', slug: 'githubactions', level: 'Experienced' },
      { name: 'Bicep (IaC)', lucide: 'braces', level: 'Intermediate' },
      { name: 'Apache Kafka', slug: 'apachekafka', level: 'Intermediate' },
      { name: 'Cloudflare', slug: 'cloudflare', level: 'Intermediate' },
      { name: 'Git', slug: 'git', level: 'Experienced' },
      { name: 'GitHub', slug: 'github', level: 'Experienced' },
    ],
  },
  {
    category: 'Testing',
    items: [
      { name: 'pytest', slug: 'pytest', level: 'Intermediate' },
      { name: 'Vitest', slug: 'vitest', level: 'Intermediate' },
      { name: 'Playwright', lucide: 'flask', level: 'Intermediate' },
    ],
  },
];

export const EXPERIENCE_META = {
  eyebrow: 'Explore My',
  title: 'Professional Experience',
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Associate Software Engineer',
    company: 'BISTEC Global Services',
    period: 'Jan 2026 — Present',
    description:
      'Building production AI agents on the Agent Accelerator team. Developing multi-tenant MCP gateways in .NET 10 that power Microsoft Copilot Studio agents in Teams — OAuth 2.1 authorization with dynamic client registration, Entra ID On-Behalf-Of identity passthrough, and 15+ ServiceNow tools. Shipping to Azure with Bicep IaC, Azure DevOps CI/CD with SAST scanning, and Azure Marketplace packaging.',
    isCurrent: true,
  },
  {
    id: '2',
    role: 'Software Engineer Intern',
    company: 'BISTEC Global Services',
    period: 'Aug 2025 — Jan 2026',
    description:
      'Built QuizBank, a multi-tenant AI evaluation platform live at quizbank.ai.bistecglobal.com — Clean Architecture .NET 9 API with CQRS, Next.js 15 frontend, GPT-4o question generation, and Dockerized Azure DevOps CI/CD. Conducted R&D on Cloudflare, Supabase, and Google ADK.',
  },
  {
    id: '4',
    role: 'AI Agent Developer (Freelance)',
    company: 'Upwork',
    period: 'Sep 2025 — Present',
    description:
      'Building AI agents, RAG systems, and n8n automation workflows for businesses. Shipped DocMind — a production RAG document Q&A platform on Azure Container Apps — and a five-agent n8n content pipeline that turns a topic into a publication-ready, fact-checked article.',
    isCurrent: true,
  },
  {
    id: '3',
    role: 'Technical Writer',
    company: 'Medium',
    period: 'Mar 2025 — Present',
    description:
      'Published technical articles translating complex software engineering concepts into clear, accessible content for developers.',
  },
];

export const WRITING_META = {
  eyebrow: 'Browse My Recent',
  title: 'Articles & Writing',
  ctaLabel: 'Read on Medium',
};

/* Two-row photo collage inside the BISTEC experience card.
 * Fills column by column; `tall` photos span both rows. */
export const BISTEC_MEMORIES: { src: string; alt: string; tall?: boolean }[] = [
  { src: bistecWorksession, alt: 'Working session with the team at BISTEC' },
  { src: bistecOffice, alt: 'With the team at the BISTEC office' },
  { src: bistecHearts, alt: 'Recognition at BISTEC Hearts Academy' },
  { src: bistecHackathon, alt: 'Internal hackathon team at BISTEC' },
  { src: bistecAiExpo, alt: 'Delegate at the In Pursuit of AI expo', tall: true },
  { src: bistecLimitless, alt: 'Limitless workshop with colleagues' },
  { src: bistecEventNight, alt: 'Event night with the BISTEC team' },
  { src: bistecAvurudu, alt: 'Avurudu celebrations at BISTEC', tall: true },
];

export const FEATURED_META = {
  eyebrow: 'A Closer Look At My',
  title: 'Final Year Project',
};

/* Evidence-based: facts and metrics from the AffectLearn thesis
 * (C:\dev\AffectLearn\Research\Research\docs\thesis-senate, ch. 4–5). */
export const FEATURED = {
  name: 'AffectLearn: an affect-aware adaptive e-learning platform',
  tagline:
    'BSc (Hons) Computer Science research, NSBM Green University, 2026. Live at affectlearn.tech.',
  description:
    'Most learning platforms only react to quiz scores, after a learner has already struggled. AffectLearn watches for disengagement and confusion while the learner studies. In-browser MediaPipe reduces the webcam to facial-geometry signals (no image ever leaves the device), alongside mouse, keyboard and performance signals. A LangGraph multi-agent pipeline on FastAPI decides through a logged gate whether to step in, then GPT-4o writes help for the exact lesson section the learner is on.',
  stats: [
    { value: '0.92', label: 'Engagement AUC<br/>(EngageNet test set)' },
    { value: '7', label: 'LangGraph<br/>pipeline nodes' },
    { value: '2,300', label: 'Automated<br/>tests' },
  ],
  team: [
    { src: nsbmLogo, alt: 'NSBM Green University' },
    { src: profileImg, alt: 'Lakshitha Wijerathne' },
  ],
  achievementsHeading: 'Key Achievements',
  /* **text** segments render as <strong> metric emphasis */
  achievements: [
    {
      title: 'Privacy-First Affect Sensing',
      text: 'MediaPipe runs in the browser and turns each webcam frame into **11 facial-geometry signals**. No image is ever sent, and a behaviour-only mode skips the camera entirely.',
    },
    {
      title: 'Multi-Agent Decision Pipeline',
      text: 'A **7-node LangGraph** graph covers affect detection, a learner-profile gate, a pedagogical agent, content and video adapters, and delivery, with every decision logged for review.',
    },
    {
      title: 'Engagement Model at 0.92 AUC',
      text: 'A gradient-boosted model on facial geometry scored **0.9225 AUC** on held-out EngageNet participants and runs live on CPU through **ONNX Runtime**.',
    },
    {
      title: 'Gated, Escalating Help',
      text: 'An **11-check gate** with confidence floors, cooldowns and a per-session cap decides when to step in. Help escalates from a hint to a breakdown, a new explanation, then a **YouTube** video.',
    },
    {
      title: 'LLM Help, Measured',
      text: '**GPT-4o** produced 180 of 180 usable replies in offline evaluation. A QLoRA fine-tuned **Llama-3-8B** reached 0.82 action accuracy offline.',
    },
    {
      title: 'Tested and Live on Azure',
      text: '**2,300 automated tests**, GitHub Actions CI/CD, and **Azure App Service** with PostgreSQL 16 and Redis. In a 20-learner simulation every help card was traced, with a median **3.52 s** from reading to card.',
    },
  ],
  /* The thesis's four stated contributions (ch. 1.8, 6.3) with their
   * strongest supporting result (ch. 5). */
  research: {
    heading: 'Research Contributions',
    contributions: [
      {
        tag: 'C1 · Artefact',
        metric: 'Live platform',
        text: 'A working multi-agent platform with a logged adaptation gate between image-free detectors and grounded, escalating LLM help that learners can also request.',
      },
      {
        tag: 'C2 · Empirical',
        metric: '0.9225 AUC',
        text: 'Image-free engagement detection evaluated per participant: 95% CI 0.889–0.948, significant at p = 0.0005, plus a label audit explaining the DAiSEE ceiling.',
      },
      {
        tag: 'C3 · Method',
        metric: 'Gate replay',
        text: 'A new offline method that measures, before any trial, how precisely and how often a tutoring system would intervene.',
      },
      {
        tag: 'C4 · Knowledge',
        metric: '83% on target',
        text: 'Facial-channel help offers landed on the target state 83% of the time, 2.88× the base rate, and extra gate checks were shown to pace help rather than sharpen it.',
      },
    ],
  },
};

/* Self-playing learner-cycle panel in the Final Year Project section.
 * Mirrors AffectLearn's real flow (thesis ch. 4.4): detection, gate,
 * pedagogical agent, then escalating help. Confidence readings in the
 * script are illustrative; the 0.70 floor is the real gate setting. */
export type DemoState = 'focused' | 'confused' | 'bored';

export interface DemoBeat {
  state: DemoState;
  /** Position on that state's help ladder. */
  level: number;
  /** Illustrative detector reading compared against the gate floor. */
  confidence: number;
  /** Learner response shown at the end of the beat, leading to the next. */
  press?: 'advance' | 'resolve';
}

export const AFFECT_DEMO = {
  title: 'Live learner cycle',
  note: 'Illustrative session. The live system runs this graph on each learner every 30 seconds, and 0.70 is its real gate floor for facial and interaction readings.',
  summary:
    'An auto-playing illustration of AffectLearn. While the learner is focused, the gate holds back. When a confused or bored reading crosses the 0.70 floor, the gate passes and the agents step in, and each time the learner says they are still stuck, help escalates from a hint to a breakdown, a new explanation and a short video.',
  floor: 0.7,
  states: [
    { id: 'focused', label: 'Focused' },
    { id: 'confused', label: 'Confused' },
    { id: 'bored', label: 'Bored' },
  ] as { id: DemoState; label: string }[],
  signals: 'Face geometry, mouse and keyboard',
  detection: { focused: 'engaged', confused: 'confused', bored: 'bored' } as Record<DemoState, string>,
  ladders: {
    confused: [
      { title: 'Hint', text: 'A short nudge, written by GPT-4o for the section on screen.', agent: 'chooses a hint' },
      { title: 'Step-by-step breakdown', text: 'The same idea split into small, ordered steps.', agent: 'escalates to a breakdown' },
      { title: 'A new explanation', text: 'The concept explained a different way.', agent: 'tries a new explanation' },
      { title: 'Short video', text: 'One short YouTube explainer, found by the video sub-agent.', agent: 'delegates to the video agent' },
    ],
    bored: [
      { title: 'Harder challenge', text: 'A tougher question to pull the learner back in.', agent: 'raises the challenge' },
      { title: 'Skip ahead', text: 'Moves the learner on to the next section.', agent: 'skips ahead' },
    ],
  },
  advanceLabel: { confused: 'Still stuck', bored: "I'd rather move on" },
  resolveLabel: 'Got it',
  focusedCard: {
    title: 'No interruption',
    text: 'The gate holds back. The reading is just recorded and the learner keeps going.',
  },
  /* One loop of the session, about 4.3 s per beat. */
  script: [
    { state: 'focused', level: 0, confidence: 0.42 },
    { state: 'confused', level: 0, confidence: 0.81, press: 'advance' },
    { state: 'confused', level: 1, confidence: 0.84, press: 'advance' },
    { state: 'confused', level: 2, confidence: 0.79, press: 'advance' },
    { state: 'confused', level: 3, confidence: 0.83, press: 'resolve' },
    { state: 'focused', level: 0, confidence: 0.38 },
    { state: 'bored', level: 0, confidence: 0.76, press: 'advance' },
    { state: 'bored', level: 1, confidence: 0.78, press: 'resolve' },
  ] as DemoBeat[],
};

export const PROJECTS_META = {
  eyebrow: 'Explore My Recent',
  title: 'Project Highlights',
};

export const PROJECTS: Project[] = [
  {
    id: 'affectlearn',
    title: 'AffectLearn: Affect-Aware Adaptive E-Learning',
    description:
      'Final-year research platform that watches for disengagement and confusion from in-browser facial geometry and interaction signals, with no webcam image leaving the device. A LangGraph multi-agent pipeline on FastAPI decides through a logged gate when to step in, and GPT-4o writes help for the exact lesson section, escalating from hint to video. Engagement model: 0.92 AUC on held-out EngageNet participants.',
    tags: ['Next.js', 'FastAPI', 'LangGraph', 'MediaPipe', 'GPT-4o', 'Azure'],
    category: 'AI',
    image: affectlearnShowcase,
    liveUrl: 'https://affectlearn.tech/',
    repoUrl: 'https://github.com/mlswijerathne/AffectLearn',
    year: '2026',
  },
  {
    id: 'expense-agent',
    title: 'Enterprise Expense Agent & MCP Gateway',
    description:
      'AI expense assistant in Microsoft Teams: photograph receipts, get AI-extracted data, and receive finished Excel/PDF reports in OneDrive. Built on a multi-tenant .NET 10 MCP Gateway with a standards-compliant OAuth 2.1 authorization server, Entra ID identity passthrough, 580+ tests, and full Azure CI/CD.',
    tags: ['.NET 10', 'MCP', 'Copilot Studio', 'Azure', 'Microsoft Graph', 'OAuth 2.1'],
    category: 'AI',
    image: expenseShowcase,
    liveUrl: '#',
    repoUrl: '#',
    year: '2026',
    company: 'BISTEC Global Services',
    confidential: true,
  },
  {
    id: 'servicenow',
    title: 'AI IT-Support Platform for ServiceNow',
    description:
      'Enterprise IT-support agent connecting Copilot Studio to ServiceNow through a custom MCP gateway — 15 tools for incidents, service catalog, and knowledge base with Teams escalation, Polly resilience patterns, Cosmos DB multi-tenancy, and Azure Marketplace packaging.',
    tags: ['.NET 10', 'MCP', 'ServiceNow', 'Copilot Studio', 'Cosmos DB', 'Bicep'],
    category: 'AI',
    image: servicenowShowcase,
    liveUrl: '#',
    repoUrl: '#',
    year: '2026',
    company: 'BISTEC Global Services',
    confidential: true,
  },
  {
    id: 'docmind',
    title: 'DocMind — AI Document Q&A (RAG)',
    description:
      'Production RAG platform: upload any PDF and get cited answers grounded strictly in your document. LlamaIndex chunking, 3072-dim OpenAI embeddings in Qdrant with session isolation, GPT-4o-mini generation, and scale-to-zero deployment on Azure Container Apps with SHA-tagged CI/CD.',
    tags: ['FastAPI', 'LlamaIndex', 'Qdrant', 'OpenAI', 'Next.js', 'Azure Container Apps'],
    category: 'AI',
    image: docmindShowcase,
    liveUrl: '#',
    repoUrl: '#',
    year: '2026',
  },
  {
    id: 'travelplan',
    title: 'Travel Plan Platform',
    description:
      'AI-powered travel marketplace for Sri Lanka, live at travel-plan.live — a conversational agent plans multi-day trips over a 13-service Spring Boot backbone with saga-orchestrated bookings and Kafka-driven reviews.',
    tags: ['Spring Boot', 'Kafka', 'Google Gemini', 'Next.js 16', 'Supabase', 'Docker'],
    category: 'AI',
    image: travelplanShowcase,
    liveUrl: 'https://travel-plan.live/',
    repoUrl: 'https://github.com/lakshitha-dev/travel-plan-platform',
    year: '2026',
  },
  {
    id: 'pandora',
    title: 'Pandora Knowledge Guardian',
    description:
      'RAG system that turns a plain-language incident report into a cited Situation Report — and says plainly when the corpus does not know. Hybrid BM25 + vector retrieval over a record-aware index, three specialist agents filling one document concurrently, and a measured relevance floor that refuses instead of guessing.',
    tags: ['Python', 'FastAPI', 'Azure AI Search', 'Azure OpenAI', 'Next.js', 'LangChain'],
    category: 'AI',
    image: pandoraShowcase,
    liveUrl: '#',
    repoUrl: 'https://github.com/lakshitha-dev/Pandora',
    year: '2026',
  },
  {
    id: 'sams',
    title: 'SAMS — Smart Attendance Management System',
    description:
      'Turns a phone photo of a paper class sign-in sheet into structured attendance records. A seven-stage OpenCV pipeline deskews the image and locates the table with no OCR and no fixed coordinates, then marks every signature cell Present, Absent, or Ambiguous — escalating borderline cells to a human instead of guessing.',
    tags: ['Python', 'OpenCV', 'Streamlit', 'SQLite', 'Azure'],
    category: 'Computer Vision',
    image: samsShowcase,
    liveUrl: 'https://sams-cgv.azurewebsites.net/',
    repoUrl: 'https://github.com/lakshitha-dev/smart-attendance-cgv',
    year: '2026',
  },
  {
    id: 'quizbank',
    title: 'QuizBank — AI Evaluation Platform',
    description:
      'Multi-tenant question bank and candidate evaluation platform with GPT-4o one-click question generation, four user roles, timed assessments, chart dashboards, and PDF reports — .NET 9 Clean Architecture + Next.js 15, Dockerized with Azure DevOps CI/CD.',
    tags: ['.NET 9', 'Next.js 15', 'PostgreSQL', 'GPT-4o', 'Firebase Auth', 'Docker'],
    category: 'Web',
    image: quizbankShowcase,
    liveUrl: 'https://quizbank.ai.bistecglobal.com',
    repoUrl: '#',
    year: '2025',
    company: 'BISTEC Global Services',
  },
  {
    id: 'article-gen',
    title: 'AI Article Generator (n8n Pipeline)',
    description:
      'Five specialized AI sub-agents in a deterministic n8n pipeline turn a single topic into a publication-ready article — live web research with citations, auto-generated architecture diagrams, royalty-free image sourcing, grounded writing, and a fact-check QA gate before delivery.',
    tags: ['n8n', 'OpenAI', 'Multi-Agent', 'Kroki', 'Google Sheets', 'Automation'],
    category: 'AI',
    image: articleGenShowcase,
    liveUrl: '#',
    repoUrl: 'https://github.com/lakshitha-dev/n8n-medium-article-generator',
    year: '2025',
  },
  {
    id: 'auction',
    title: 'Real-Time Auction Platform',
    description:
      'Real-time bidding engine with Stripe-integrated escrow, role-based admin tooling, and concurrent-update handling for fair, high-traffic auctions.',
    tags: ['React', 'ASP.NET Core', 'SQL Server', 'Stripe'],
    category: 'Web',
    image: auctionShowcase,
    liveUrl: '#',
    repoUrl: 'https://github.com/lakshitha-dev/AuctionManagement/blob/main/README.md',
    year: '2024',
  },
  {
    id: 'finance',
    title: 'AI Finance Management Platform',
    description:
      'AI-driven personal finance app with automated transaction categorization, subscription monitoring, and goal-based savings insights — deployed and live.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
    category: 'Web',
    image: financeShowcase,
    liveUrl: 'http://152.67.3.153/',
    repoUrl: 'https://github.com/lakshitha-dev/financeManagement/blob/test/README.md',
    year: '2024',
  },
  {
    id: 'waste',
    title: 'Smart Waste Coordination App',
    description:
      'Cross-platform mobile app coordinating residents, drivers, and city operators — live geolocation routing, incident reporting, and operational analytics.',
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Provider'],
    category: 'Mobile',
    image: wasteShowcase,
    liveUrl: '#',
    repoUrl: 'https://github.com/lakshitha-dev/Waste-Management-System/blob/main/README.md',
    year: '2024',
  },
];

export const CERTIFICATIONS_META = {
  eyebrow: 'Explore My Recent',
  title: 'Achievements & Certifications',
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'pandora',
    place: '2nd Place',
    title: "Pandora '26 — RAG Builderthon",
    organizer: 'NSBM Green University · ASE',
    description:
      "1st Runner-Up as team Zeylix at Pandora '26, a five-hour RAG buildathon. I built the retrieval and agent service behind Pandora Knowledge Guardian — hybrid search on Azure AI Search, with agents that cite every claim and admit when they don't know.",
    images: [
      {
        src: pandoraAwardImg,
        alt: "Team Zeylix receiving the 1st Runner-Up award at the Pandora '26 RAG Builderthon",
      },
    ],
  },
  {
    id: 'duothan',
    place: '5th Place',
    title: 'Duothan 5.0 Hackathon',
    organizer: 'NSBM Green University · IEEE',
    description:
      'Placed 5th at Duothan 5.0 — the university hackathon themed "Crack the code, Create the Future" — competing as team 404_NOTFOUND, building and shipping a working solution against the clock.',
    images: [
      { src: duothanAwardImg, alt: 'Receiving the Duothan 5.0 certificate on stage' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'claude-code',
    title: 'Claude Code in Action',
    issuer: 'Anthropic Academy',
    issueDate: 'May 2026',
    credentialId: 'ik8erqn6f7wk',
    credentialUrl: 'https://verify.skilljar.com/c/ik8erqn6f7wk',
    skills: ['Claude Code', 'AI-Assisted Development', 'Agentic Coding'],
    image: certClaudeCode,
  },
  {
    id: 'claude-api',
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic Academy',
    issueDate: 'May 2026',
    credentialId: 'dpmsgghttfg4',
    credentialUrl: 'https://verify.skilljar.com/c/dpmsgghttfg4',
    skills: ['Anthropic API', 'LLM Integration', 'Tool Use'],
    image: certClaudeApi,
  },
  {
    id: 'mcp-intro',
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic Academy',
    issueDate: 'May 2026',
    credentialId: 't5vwf9tbdcdk',
    credentialUrl: 'https://verify.skilljar.com/c/t5vwf9tbdcdk',
    skills: ['MCP', 'AI Agents', 'Tool Integration'],
    image: certMcp,
  },
  {
    id: 'agent-skills',
    title: 'Introduction to Agent Skills',
    issuer: 'Anthropic Academy',
    issueDate: 'April 2026',
    credentialId: 'e743bxyvhbxn',
    credentialUrl: 'https://verify.skilljar.com/c/e743bxyvhbxn',
    skills: ['Agent Skills', 'AI Agents', 'Claude'],
    image: certAgentSkills,
  },
  {
    id: '1',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    issueDate: 'October 2025',
    expiryDate: 'October 2027',
    credentialId: '323322023OCI25AICFA',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=2CE2289737F138E3D8CF83C9C3E691D25031A8B3DC8FF90FBAE2949D52B5896D',
    skills: ['AI', 'Machine Learning', 'OCI', 'Cloud Computing'],
    image: certOracle,
  },
  {
    id: '2',
    title: 'Docker Training Course for the Absolute Beginner',
    issuer: 'KodeKloud',
    issueDate: 'October 2025',
    credentialId: '8cb36898-661b-4fc0-92fb-fb26edb7fd82',
    credentialUrl: 'https://kodekloud.com/certificate-verification/8cb36898-661b-4fc0-92fb-fb26edb7fd82',
    skills: ['Docker', 'Containerization', 'DevOps'],
    image: certDocker,
  },
  {
    id: '3',
    title: 'Learn by Doing - Prompt Engineering 101',
    issuer: 'KodeKloud',
    issueDate: 'September 2025',
    credentialId: '7e82fdfd-34a6-4d97-835d-425f4ba4af99',
    credentialUrl: 'https://kodekloud.com/certificate-verification/7e82fdfd-34a6-4d97-835d-425f4ba4af99',
    skills: ['Prompt Engineering', 'AI'],
    image: certPromptEng,
  },
];

export const MILESTONES_META = {
  eyebrow: 'The Journey So Far',
  title: 'Milestones',
};

export const MILESTONES: Milestone[] = [
  {
    id: '1',
    date: '2019',
    title: "St. Thomas' College, Matale",
    subtitle: 'O/Ls & A/Ls (Physical Science stream) · Colours Award',
    description:
      'Completed my O/Ls and A/Ls in the Physical Science stream — the foundation years of discipline and teamwork, capped with a Colours award at the 2019 Colours Night.',
  },
  {
    id: '2',
    date: '2022',
    title: 'Joined NSBM Green University',
    subtitle: 'BSc (Hons) in Computer Science',
    description:
      'Began the degree — and wrote my first lines of production-bound code the same year.',
  },
  {
    id: '3',
    date: 'Aug 2025',
    title: 'Software Engineer Intern',
    subtitle: 'BISTEC Global Services',
    description:
      'First industry role — built the QuizBank AI evaluation platform end to end and did R&D on Cloudflare, Supabase, and Google ADK.',
  },
  {
    id: '4',
    date: 'Jan 2026',
    title: 'Associate Software Engineer',
    subtitle: 'BISTEC Global Services · Agent Accelerator team',
    description:
      'Now full-time — building production MCP gateways and Copilot Studio agents on Azure.',
  },
];

export const CONTACT_META = {
  eyebrow: 'Get in Touch',
  title: 'Contact Me',
  intro:
    'Tell me what you’re building — an AI agent, an automation, or a full web or mobile app. I usually reply within 24 hours.',
};

/* School/university logos available for future use */
export const LOGOS = {
  bistec: bistecLogo,
  nsbm: nsbmLogo,
  thomas: thomasLogo,
};
