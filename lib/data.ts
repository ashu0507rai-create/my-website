export interface Feature {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  highlights: string[];
  stats: { value: string; label: string };
  codeSnippet: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  description: string;
  fullDetails: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const HERO_STATS = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "14.2ms", label: "P99 Response" },
  { value: "1.4M+", label: "Edge Requests" },
  { value: "100%", label: "Type Safe" },
];

export const FEATURES: Feature[] = [
  {
    id: "edge",
    title: "Edge-First Runtime",
    tagline: "Global low-latency execution",
    iconName: "Globe",
    description:
      "Run application logic close to users with a globally distributed architecture designed for consistently fast responses.",
    highlights: [
      "Global edge execution",
      "Automatic caching",
      "Low-latency routing",
    ],
    stats: { value: "14.2ms", label: "P99 response time" },
    codeSnippet:
      "export const runtime = 'edge';\nexport default async function handler() {\n  return Response.json({ ok: true });\n}",
  },
  {
    id: "ai",
    title: "Adaptive AI Layer",
    tagline: "Production-ready AI workflows",
    iconName: "Sparkles",
    description:
      "Compose AI-powered experiences with clean TypeScript boundaries and predictable streaming interfaces.",
    highlights: [
      "Typed AI interfaces",
      "Streaming friendly",
      "Composable workflows",
    ],
    stats: { value: "4x", label: "Faster iteration" },
    codeSnippet:
      "const result = await ai.generate({\n  model: 'edge-model',\n  prompt: userPrompt\n});",
  },
  {
    id: "analytics",
    title: "Observability",
    tagline: "Metrics that scale with traffic",
    iconName: "BarChart3",
    description:
      "Monitor performance and application behavior with clear metrics designed for high-concurrency systems.",
    highlights: [
      "Real-time metrics",
      "Performance tracking",
      "Actionable telemetry",
    ],
    stats: { value: "99.8%", label: "Memory efficiency" },
    codeSnippet:
      "export function track(event: string) {\n  console.log('[telemetry]', event);\n}",
  },
  {
    id: "security",
    title: "Secure by Default",
    tagline: "Strong application foundations",
    iconName: "ShieldCheck",
    description:
      "Use modern framework primitives and defensive defaults to build reliable production applications.",
    highlights: [
      "Strict TypeScript",
      "Secure API boundaries",
      "Production conventions",
    ],
    stats: { value: "100%", label: "Type-safe" },
    codeSnippet:
      "export async function validate(input: unknown) {\n  return Boolean(input);\n}",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "nova-ai",
    title: "Nova AI Platform",
    category: "AI Platforms",
    client: "Nova Labs",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    description:
      "AI workspace with fast edge delivery and collaborative tooling.",
    fullDetails:
      "A scalable AI platform combining a polished dashboard experience with fast global delivery and modular application architecture.",
    metrics: [
      { value: "42%", label: "Faster" },
      { value: "1.2M", label: "Users" },
      { value: "99.9%", label: "Uptime" },
    ],
    tags: ["Next.js", "AI", "TypeScript", "Vercel"],
  },
  {
    id: "finflow",
    title: "FinFlow SaaS",
    category: "SaaS",
    client: "FinFlow",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "Analytics-driven SaaS platform for modern teams.",
    fullDetails:
      "A high-performance SaaS dashboard focused on clear analytics, responsive interactions, and maintainable React architecture.",
    metrics: [
      { value: "3x", label: "Growth" },
      { value: "80ms", label: "Load" },
      { value: "4.9/5", label: "Rating" },
    ],
    tags: ["SaaS", "React", "Analytics", "Tailwind"],
  },
  {
    id: "shopwave",
    title: "ShopWave",
    category: "E-Commerce",
    client: "ShopWave",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Conversion-focused storefront with a premium shopping experience.",
    fullDetails:
      "A responsive headless storefront designed around speed, product discovery, and a frictionless checkout journey.",
    metrics: [
      { value: "31%", label: "Conversion" },
      { value: "1.8s", label: "LCP" },
      { value: "2.1x", label: "Revenue" },
    ],
    tags: ["E-Commerce", "Next.js", "Payments", "SEO"],
  },
  {
    id: "pulse",
    title: "Pulse Mobile",
    category: "Mobile Apps",
    client: "Pulse Health",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern companion experience with a clean, data-rich interface.",
    fullDetails:
      "A mobile-first product experience with accessible information architecture and a lightweight, responsive frontend.",
    metrics: [
      { value: "4.8/5", label: "Rating" },
      { value: "92%", label: "Retention" },
      { value: "60fps", label: "UI" },
    ],
    tags: ["Mobile", "React", "UX", "PWA"],
  },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals and small experiments.",
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      "1 production project",
      "Basic analytics",
      "Community support",
    ],
    cta: "Start Building",
    popular: false,
    badge: "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing products and teams.",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Edge optimization",
    ],
    cta: "Choose Pro",
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "scale",
    name: "Scale",
    description: "For high-traffic production teams.",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Enterprise controls",
      "Dedicated support",
    ],
    cta: "Go Scale",
    popular: false,
    badge: "",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Maya Chen",
    role: "VP Engineering",
    company: "Orbit Finance",
    industry: "Fintech",
    rating: 5,
    content:
      "A remarkably clean foundation. Our team moved from prototype to production much faster than expected.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "t2",
    name: "Daniel Brooks",
    role: "AI Lead",
    company: "Vector Labs",
    industry: "AI / Machine Learning",
    rating: 5,
    content:
      "The architecture makes advanced interactions feel straightforward while keeping the codebase maintainable.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    id: "t3",
    name: "Sofia Patel",
    role: "Design Director",
    company: "Northstar",
    industry: "Design & UX",
    rating: 5,
    content:
      "The visual system is polished out of the box and still gives us plenty of room to customize.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Designing a Production-Grade Next.js Architecture",
    category: "Architecture",
    readTime: "7 min read",
    date: "Aug 20, 2026",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A practical look at structuring modern Next.js applications for speed and maintainability.",
    content:
      "Start with clear boundaries, predictable data flows, and a small set of reusable primitives. Then optimize only where real usage demands it.",
    author: {
      name: "Alex Morgan",
      role: "Principal Engineer",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    },
  },
  {
    id: "b2",
    title: "Edge Performance Without the Complexity",
    category: "Performance",
    readTime: "5 min read",
    date: "Aug 14, 2026",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Simple architectural choices can make globally distributed applications feel instant.",
    content:
      "Use caching intentionally, keep server work close to users, and avoid shipping unnecessary JavaScript to the browser.",
    author: {
      name: "Priya Shah",
      role: "Performance Engineer",
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=160&q=80",
    },
  },
  {
    id: "b3",
    title: "Building Better AI Interfaces",
    category: "AI",
    readTime: "6 min read",
    date: "Aug 05, 2026",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Patterns for making AI-powered interfaces feel responsive, understandable, and useful.",
    content:
      "Great AI UX balances speed, transparency, controls, and useful defaults. Treat generation as an interactive product flow rather than a single button.",
    author: {
      name: "Jordan Lee",
      role: "Product Engineer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
  },
];

export const FAQS = [
  {
    id: "f1",
    question: "Can I deploy this project directly to Vercel?",
    answer:
      "Yes. The project uses Next.js 14 App Router and is designed for Vercel deployment.",
  },
  {
    id: "f2",
    question: "Can I customize the design?",
    answer:
      "Yes. The UI uses Tailwind CSS utilities and reusable React components, so colors, spacing and sections can be customized easily.",
  },
  {
    id: "f3",
    question: "Is the project TypeScript based?",
    answer:
      "Yes. TypeScript is enabled with strict checking and the Next.js configuration is included.",
  },
  {
    id: "f4",
    question: "Does the contact form work?",
    answer:
      "The UI is wired to the /api/contact endpoint. Add your preferred email or backend integration to make it fully operational.",
  },
];
