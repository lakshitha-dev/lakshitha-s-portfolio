import type { TechIconSlug } from '../components/TechIcon';
import profileImg from '../assets/profile.jpg';
import bistecLogo from '../assets/logos/bistec-logo.png';
import nsbmLogo from '../assets/logos/nsbm-logo.png';
import thomasLogo from '../assets/logos/thomas-logo.png';
import duothanAwardImg from '../assets/achievements/duothan-award.jpg';
import schoolColoursImg from '../assets/milestones/school-colours.jpg';
import bistecWorkImg from '../assets/milestones/bistec-work.jpg';
import bistecAwardImg from '../assets/milestones/bistec-award.jpg';
import travelplanArchImg from '../assets/projects/travelplan-arch.jpg';
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
import quizbankShowcase from '../assets/projects/quizbank-showcase.jpg';
import articleGenShowcase from '../assets/projects/article-generator-showcase.jpg';
import auctionShowcase from '../assets/projects/auction-showcase.jpg';
import financeShowcase from '../assets/projects/finance-showcase.jpg';
import wasteShowcase from '../assets/projects/waste-showcase.jpg';

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
  | 'plug';

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
  image?: { src: string; alt: string; tilt?: 'left' | 'right'; logo?: boolean };
}

export const GITHUB_USERNAME = 'mlswijerathne';
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
  github: 'https://github.com/mlswijerathne',
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
  roleLine: 'Software Engineer Specializing in AI Agents & Automation',
  affiliations: [
    {
      logo: nsbmLogo,
      logoAlt: 'NSBM Green University',
      text: 'BSc (Hons) in Computer Science — NSBM Green University',
    },
    {
      logo: bistecLogo,
      logoAlt: 'BISTEC Global Services',
      text: 'Associate Software Engineer at BISTEC Global Services',
    },
  ],
  buttons: [
    { label: 'Contact Info', href: '#contact', download: false },
  ],
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

/* Evidence-based: extracted from ExpenseAgent, ServiceNow platform,
 * QuizBank, DocMind, Medium Article Generator, and Travel Plan Platform. */
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
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      { name: 'MCP', lucide: 'plug', level: 'Experienced' },
      { name: 'Copilot Studio', lucide: 'bot', level: 'Experienced' },
      { name: 'Google ADK', lucide: 'bot', level: 'Experienced' },
      { name: 'LangChain', slug: 'langchain', level: 'Experienced' },
      { name: 'LangGraph', slug: 'langgraph', level: 'Intermediate' },
      { name: 'Semantic Kernel', lucide: 'brain', level: 'Intermediate' },
      { name: 'OpenAI API', lucide: 'sparkles', level: 'Experienced' },
      { name: 'Google Gemini', slug: 'googlegemini', level: 'Experienced' },
      { name: 'n8n', slug: 'n8n', level: 'Experienced' },
      { name: 'LlamaIndex', lucide: 'brain', level: 'Intermediate' },
      { name: 'Prompt Engineering', lucide: 'sparkles', level: 'Experienced' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', slug: 'postgresql', level: 'Experienced' },
      { name: 'MongoDB', slug: 'mongodb', level: 'Intermediate' },
      { name: 'Qdrant', slug: 'qdrant', level: 'Experienced' },
      { name: 'Cosmos DB', lucide: 'database', level: 'Intermediate' },
      { name: 'Supabase', slug: 'supabase', level: 'Experienced' },
      { name: 'Firebase', slug: 'firebase', level: 'Experienced' },
      { name: 'SQL Server', lucide: 'database', level: 'Intermediate' },
      { name: 'MySQL', slug: 'mysql', level: 'Intermediate' },
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

export const FEATURED = {
  name: 'Travel Plan Platform: an AI-powered travel marketplace for Sri Lanka',
  tagline: 'Live at travel-plan.live — 13 microservices, one conversational travel agent.',
  description:
    'Connects tourists with hotels, tour guides, and vehicle owners in one marketplace. A streaming AI assistant calls live services as tools to answer travel questions, recommend providers, and generate full multi-day itineraries with cost breakdowns — on top of a Spring Boot microservices backbone with saga-orchestrated multi-provider booking and Kafka-driven review pipelines.',
  stats: [
    { value: '13', label: 'Microservices' },
    { value: '5', label: 'User roles' },
    { value: '<2 min', label: 'AI trip planning<br/>(from ~3 hours)' },
  ],
  image: travelplanArchImg,
  imageAlt: 'Travel Plan Platform architecture overview',
  team: [
    { src: nsbmLogo, alt: 'NSBM Green University' },
    { src: profileImg, alt: 'Lakshitha Wijerathne' },
  ],
  achievementsHeading: 'Key Achievements',
  /* **text** segments render as <strong> metric emphasis */
  achievements: [
    {
      title: 'Conversational AI Travel Agent',
      text: 'An SSE-streamed chat assistant with tool-calling into live hotel, guide, vehicle, and trip-plan services — powered by **Google Gemini** with **LangChain4j** and **Google ADK**.',
    },
    {
      title: 'Saga-Orchestrated Booking',
      text: 'Multi-provider bookings execute as a single transaction with the **Saga pattern** — automatic rollback and a refund engine keep every party consistent.',
    },
    {
      title: 'Event-Driven with Kafka',
      text: '**4 Kafka topics** plus dead-letter queues drive itinerary creation, review prompts, and rating recalculation across services.',
    },
    {
      title: '13-Service Architecture',
      text: '**11 domain microservices** behind Spring Cloud Gateway and Eureka discovery — each service owns its own database.',
    },
    {
      title: 'Deployed & Live',
      text: 'Running at **travel-plan.live** — Next.js 16 frontend, Dockerized services, and **GitHub Actions CI** on every push.',
    },
    {
      title: '~3 Hours to Under 2 Minutes',
      text: 'The AI agent compresses typical trip planning from hours of manual research into a **two-minute conversation**.',
    },
  ],
};

export const PROJECTS_META = {
  eyebrow: 'Explore My Recent',
  title: 'Project Highlights',
};

export const PROJECTS: Project[] = [
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
    repoUrl: 'https://github.com/mlswijerathne/travel-plan-platform',
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
    repoUrl: 'https://github.com/mlswijerathne/n8n-medium-article-generator',
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
    repoUrl: 'https://github.com/mlswijerathne/AuctionManagement/blob/main/README.md',
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
    repoUrl: 'https://github.com/mlswijerathne/financeManagement/blob/test/README.md',
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
    repoUrl: 'https://github.com/mlswijerathne/Waste-Management-System/blob/main/README.md',
    year: '2024',
  },
];

export const CERTIFICATIONS_META = {
  eyebrow: 'Explore My Recent',
  title: 'Achievements & Certifications',
};

export const ACHIEVEMENTS: Achievement[] = [
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
    image: {
      src: schoolColoursImg,
      alt: 'Receiving the Colours award on stage at the 2019 Colours Night',
      tilt: 'left',
    },
  },
  {
    id: '2',
    date: '2022',
    title: 'Joined NSBM Green University',
    subtitle: 'BSc (Hons) in Computer Science',
    description:
      'Began the degree — and wrote my first lines of production-bound code the same year.',
    image: {
      src: duothanAwardImg,
      alt: 'Receiving a certificate on stage at NSBM',
      tilt: 'right',
    },
  },
  {
    id: '3',
    date: 'Aug 2025',
    title: 'Software Engineer Intern',
    subtitle: 'BISTEC Global Services',
    description:
      'First industry role — built the QuizBank AI evaluation platform end to end and did R&D on Cloudflare, Supabase, and Google ADK.',
    image: { src: bistecWorkImg, alt: 'Working with the team at BISTEC Global Services', tilt: 'right' },
  },
  {
    id: '4',
    date: 'Jan 2026',
    title: 'Associate Software Engineer',
    subtitle: 'BISTEC Global Services · Agent Accelerator team',
    description:
      'Now full-time — building production MCP gateways and Copilot Studio agents on Azure.',
    image: { src: bistecAwardImg, alt: 'Recognition on stage at BISTEC Hearts Academy', tilt: 'left' },
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
