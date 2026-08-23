export interface Feature {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  codeSnippet: string;
  stats: { value: string; label: string };
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'SaaS' | 'AI Platforms' | 'E-Commerce' | 'Mobile Apps';
  description: string;
  fullDetails: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  client: string;
  year: string;
  link: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number; // monthly when billed annually
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  industry: string;
}

export const HERO_STATS = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '45ms', label: 'Avg Latency' },
  { value: '12M+', label: 'Daily Requests' },
  { value: '4.9/5', label: 'User Rating' },
];

export const FEATURES: Feature[] = [
  {
    id: 'ai-engine',
    iconName: 'Sparkles',
    title: 'Adaptive AI Engine',
    tagline: 'Self-optimizing Neural Pipeline',
    description: 'Transform raw data into real-time operational intelligence with built-in model orchestration, dynamic prompt fallback, and zero-latency routing.',
    highlights: [
      'Multi-provider LLM failover & load balancing',
      'Context-aware response compression',
      'Sub-50ms streaming response pipeline',
      'SOC2 & GDPR compliance out of the box'
    ],
    codeSnippet: `import { createAIEngine } from '@aetheria/core';

const engine = createAIEngine({
  provider: 'auto-route',
  fallback: ['openai', 'anthropic', 'local-llama'],
  maxLatencyMs: 60,
  cacheTTL: 3600
});

const response = await engine.generate({
  prompt: 'Analyze real-time user metrics',
  stream: true
});`,
    stats: { value: '3.2x', label: 'Inference Speedup' }
  },
  {
    id: 'global-cdn',
    iconName: 'Globe',
    title: 'Edge-Native Infrastructure',
    tagline: 'Global Low-Latency Deployment',
    description: 'Deploy static and dynamic assets across 300+ edge locations worldwide with automatic asset optimization, HTTP/3, and instant invalidation.',
    highlights: [
      '300+ Edge POPs with smart regional routing',
      'Automated Next.js ISR and Edge SSR caching',
      'Brotli + WebP/AVIF auto-image transformation',
      'DDoS mitigation & Web Application Firewall'
    ],
    codeSnippet: `export const config = {
  runtime: 'edge',
  regions: ['iad1', 'fra1', 'hkg1', 'syd1']
};

export default async function handler(req) {
  const geo = req.geo || { country: 'US' };
  return new Response(\`Served from edge in \${geo.country}\`);
}`,
    stats: { value: '300+', label: 'Global Edge Nodes' }
  },
  {
    id: 'analytics',
    iconName: 'BarChart3',
    title: 'Real-Time Insights & Analytics',
    tagline: 'Granular Telemetry & Heatmaps',
    description: 'Monitor user journeys, API throughput, latency spikes, and conversion funnels with microsecond precision and customizable dashboards.',
    highlights: [
      'Cookieless privacy-compliant analytics',
      'Custom event tracking with JS/React hooks',
      'Real-time automated alerting via Webhooks/Slack',
      'Export raw event streams to BigQuery/S3'
    ],
    codeSnippet: `import { trackEvent } from '@aetheria/analytics';

export function CheckoutButton() {
  const handleClick = () => {
    trackEvent('checkout_initiated', {
      plan: 'pro_annual',
      value: 290
    });
  };
  return <button onClick={handleClick}>Upgrade Now</button>;
}`,
    stats: { value: '100k+', label: 'Events/Sec Processed' }
  },
  {
    id: 'security',
    iconName: 'ShieldCheck',
    title: 'Enterprise-Grade Security',
    tagline: 'Zero-Trust Architecture',
    description: 'Protect application state, API tokens, and user PII with hardware-level encryption, role-based access control, and automated compliance scanning.',
    highlights: [
      'End-to-End TLS 1.3 & AES-256 Encryption',
      'SSO with SAML 2.0, Okta, & Azure AD',
      'Continuous automated security vulnerability auditing',
      'Granular audit logs with immutable chain verification'
    ],
    codeSnippet: `import { enforceSecurityPolicy } from '@aetheria/security';

export default async function middleware(req) {
  const session = await enforceSecurityPolicy(req, {
    requireMFA: true,
    allowedRoles: ['admin', 'developer'],
    ipAllowlist: ['192.168.1.0/24']
  });
  return NextResponse.next();
}`,
    stats: { value: '99.999%', label: 'Security Uptime' }
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'nexus-ai',
    title: 'Nexus Intelligence Platform',
    category: 'AI Platforms',
    description: 'Enterprise AI document processing system handling over 5 million documents daily with instant semantic search.',
    fullDetails: 'Nexus Intelligence was custom engineered using Next.js 14, Vector Embeddings, and distributed worker nodes. It processes PDF, docx, and raw text streams, providing real-time synthesis and vector search with sub-second retrieval times.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js 14', 'TypeScript', 'Vector Search', 'Tailwind CSS', 'OpenAI API'],
    metrics: [
      { label: 'Query Speed', value: '24ms' },
      { label: 'Doc Throughput', value: '5M+/day' },
      { label: 'Accuracy', value: '99.4%' }
    ],
    client: 'Nexus Global Tech',
    year: '2024',
    link: 'https://example.com/nexus'
  },
  {
    id: 'vortex-cloud',
    title: 'Vortex Developer Suite',
    category: 'SaaS',
    description: 'Real-time collaborative cloud IDE & API testing dashboard for cloud-native engineering teams.',
    fullDetails: 'Vortex Suite brings high-performance web-based code execution, real-time WebSockets synchronization, and microservice monitoring into a unified browser experience built with React, WebAssembly, and Next.js App Router.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: ['React 18', 'WebSockets', 'Tailwind CSS', 'Monaco Editor', 'Framer Motion'],
    metrics: [
      { label: 'Latency', value: '18ms' },
      { label: 'Active Users', value: '120k' },
      { label: 'User CSAT', value: '4.9/5' }
    ],
    client: 'Vortex Systems',
    year: '2024',
    link: 'https://example.com/vortex'
  },
  {
    id: 'hyperia-store',
    title: 'Hyperia Luxury E-Commerce',
    category: 'E-Commerce',
    description: 'Ultra-fast headless luxury retail storefront with 3D product previews and localized dynamic pricing.',
    fullDetails: 'Engineered for high-volume conversion, Hyperia leverages Next.js ISR (Incremental Static Regeneration), Shopify Storefront API, and Three.js for interactive 3D product customization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js 14', 'Shopify API', 'Three.js', 'Tailwind CSS', 'Stripe'],
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Conversion Boost', value: '+42%' },
      { label: 'Load Time', value: '0.4s' }
    ],
    client: 'Hyperia Group',
    year: '2023',
    link: 'https://example.com/hyperia'
  },
  {
    id: 'pulse-mobile',
    title: 'Pulse Health & Fitness App',
    category: 'Mobile Apps',
    description: 'Cross-platform health tracking application with live biometric telemetry and AI coach recommendations.',
    fullDetails: 'Pulse integrates wearable device synchronization with predictive fitness analytics, presenting real-time graphs and custom workout programs.',
    image: 'https://images.unsplash.com/photo-1510519138161-58441d82595d?auto=format&fit=crop&w=1200&q=80',
    tags: ['React Native', 'Next.js API', 'GraphQL', 'Tailwind CSS', 'HealthKit'],
    metrics: [
      { label: 'Downloads', value: '500k+' },
      { label: 'Retention Rate', value: '78%' },
      { label: 'App Store', value: '4.8 ★' }
    ],
    client: 'Pulse Labs',
    year: '2024',
    link: 'https://example.com/pulse'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individual developers and early stage side projects.',
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      'Up to 3 Active Projects',
      '10,000 API Requests / mo',
      '5GB Edge Storage',
      'Community Support Forum',
      'Standard CDN Routing',
      'SSL Certificate Included'
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'pro',
    name: 'Pro Studio',
    badge: 'Most Popular',
    description: 'Ideal for scaling startups and fast-moving engineering teams.',
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    features: [
      'Unlimited Active Projects',
      '250,000 API Requests / mo',
      '50GB Edge Storage',
      'Priority 24/7 Support',
      'Adaptive AI Routing Engine',
      'Custom Domain Support',
      'Advanced Team Analytics',
      'Role-based Access Control'
    ],
    cta: 'Get Started with Pro'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Dedicated infrastructure, custom SLAs, and custom compliance for large scale orgs.',
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      'Unlimited Everything',
      'Dedicated Edge Nodes',
      'Sub-20ms SLA Guarantee',
      'SOC2 / HIPAA Compliance',
      'Dedicated Account Manager',
      'Custom SSO / SAML Integration',
      '24/7 Phone & Slack Support',
      'Custom Security Audits'
    ],
    cta: 'Contact Sales'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How easy is it to export and deploy this Next.js codebase?',
    answer: 'This project is fully structured using the Next.js App Router and Tailwind CSS. You can clone or unzip this repository, run "npm install", and deploy directly to Vercel, Netlify, or AWS Amplify with zero additional configuration.'
  },
  {
    id: 'faq-2',
    category: 'Deployment',
    question: 'How do I deploy this project on Vercel?',
    answer: 'Push the exported repository to GitHub, connect your GitHub account in Vercel, and click Deploy. Vercel automatically detects Next.js framework settings, installs dependencies, and publishes your production URL in under 60 seconds.'
  },
  {
    id: 'faq-3',
    category: 'Technical',
    question: 'Does this template support Server Components and API Routes?',
    answer: 'Yes! The project uses React Server Components (RSC) where optimal for performance, client components for rich interactivity, and Next.js Route Handlers (`app/api/`) for serverless backend API endpoints.'
  },
  {
    id: 'faq-4',
    category: 'Customization',
    question: 'Can I customize the color scheme and fonts?',
    answer: 'Absolutely. All colors, design tokens, and animations are centralized in `tailwind.config.ts` and `app/globals.css`. You can modify primary color palettes, typography, and theme tokens in a single file.'
  },
  {
    id: 'faq-5',
    category: 'Support',
    question: 'Are external API integrations included in the export?',
    answer: 'The codebase comes with built-in route handlers for contact submissions and newsletter subscriptions, complete with structured type definitions and environment variable fallbacks in `.env.example`.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'FinScale Tech',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'Aetheria completely revolutionized our deployment stack. We cut our application latency in half while scaling to over 10 million monthly active users.',
    rating: 5,
    industry: 'Fintech'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Co-Founder & CTO',
    company: 'NeuralFlow AI',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'The level of craftsmanship in this Next.js project is top tier. The responsive design, animations, and clean modular code saved us months of build time.',
    rating: 5,
    industry: 'AI / Machine Learning'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Lead Product Designer',
    company: 'Apex Design System',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Every UI element feels intentional. The glassmorphism, micro-interactions, and lighting details elevate our brand to standard-setting levels.',
    rating: 5,
    industry: 'Design & UX'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Architecting High-Performance Next.js 14 Applications',
    excerpt: 'Deep dive into App Router patterns, edge caching strategies, and dynamic server-side optimization techniques.',
    content: 'Building scalable modern web applications requires a holistic approach to framework architecture. With Next.js 14, developers get unprecedented control over rendering strategies—ranging from static generation to edge dynamic execution...',
    category: 'Architecture',
    author: {
      name: 'David Chen',
      role: 'Principal Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    date: '2024-05-18',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-2',
    title: 'Designing Fluid UI Micro-Interactions with Tailwind & Framer Motion',
    excerpt: 'Learn how to create delightful, physics-driven animations that engage users without compromising performance.',
    content: 'Animations should inform and delight users, guiding their eye through states without feeling sluggish. Combining Tailwind CSS utility classes with Framer Motion primitives gives you full declarative power...',
    category: 'UI/UX Design',
    author: {
      name: 'Sofia Martinez',
      role: 'Lead UX Engineer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    date: '2024-05-12',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'post-3',
    title: 'Zero-Downtime Multi-Region Vercel Deployments',
    excerpt: 'Best practices for environment management, instant rollback, and atomic deployments with Vercel CLI.',
    content: 'Modern engineering teams deploy dozens of times per day. Ensuring zero downtime across global edge regions demands robust environment segregation, automated smoke tests, and instant rollback capabilities...',
    category: 'DevOps',
    author: {
      name: 'Alex Rivera',
      role: 'DevOps Lead',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    },
    date: '2024-05-04',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  }
];
