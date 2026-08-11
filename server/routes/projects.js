const express = require('express');
const router = express.Router();

const projectsData = [
  {
    id: 'vingo',
    title: 'Vingo – Full-Stack Online Food Delivery Platform',
    duration: 'Oct 2025 – Mar 2026',
    tagline: 'Flagship Multi-role food delivery platform with real-time tracking, shop workflows, and secure payments',
    category: 'Main Project',
    featured: true,
    badge: 'Main Featured Project',
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Razorpay'],
    highlights: [
      'Built a multi-role food delivery platform supporting users, shop owners, and delivery partners with secure JWT-based authentication and Google OAuth.',
      'Implemented the complete order lifecycle including add-to-cart, checkout, Razorpay payments, order placement, and status updates.',
      'Designed real-time features using Socket.IO for live order tracking, delivery assignment, and instant status updates.',
      'Developed delivery partner workflows including order acceptance, OTP-based delivery verification, an earnings dashboard, and delivery tracking.',
      'Enabled advanced user features such as food search, category filtering, ratings, shop discovery, and order history.',
      'Implemented secure password reset using Email OTP verification for reliable account recovery.',
      'Optimized global state management using Redux Toolkit, improving UI responsiveness and reducing unnecessary API requests.'
    ],
    liveUrl: 'https://vingo-r5xt.onrender.com',
    githubUrl: 'https://github.com/princesharma89/vingo',
    caseStudy: {
      problem: 'E-commerce ordering systems struggle with multi-actor coordination (Customer, Shop Owner, Delivery Partner). Without instant WebSockets, OTP delivery proofs, and synchronized state management, orders suffer delays and dispute risks.',
      solution: 'Engineered Vingo: a high-throughput multi-tier platform built with React, Redux Toolkit, Express REST APIs, MongoDB Mongoose models, Socket.IO channels, and Razorpay payment gateway integration.',
      architecture: {
        nodes: [
          { id: 'client', name: 'React + Redux Toolkit', desc: 'Global State & Client App' },
          { id: 'api', name: 'Express REST API', desc: 'JWT Auth, OAuth & Controllers' },
          { id: 'sockets', name: 'Socket.IO Manager', desc: 'Live Tracking & Delivery Dispatch' },
          { id: 'db', name: 'MongoDB Database', desc: 'Orders, Shops, Menus & Users' }
        ],
        connections: [
          { from: 'React + Redux Toolkit', to: 'Express REST API', label: 'REST APIs & JWT' },
          { from: 'Express REST API', to: 'MongoDB Database', label: 'Mongoose ORM' },
          { from: 'Express REST API', to: 'Socket.IO Manager', label: 'Event Emitter' },
          { from: 'Socket.IO Manager', to: 'React + Redux Toolkit', label: 'Live Location & Status' }
        ]
      },
      decisions: [
        {
          title: 'OTP-Based Handshake Verification',
          desc: 'Enforced an OTP verification lock upon delivery handoff. Delivery partners must enter the customer unique OTP to complete the order lifecycle atomically in MongoDB.'
        },
        {
          title: 'Socket.IO Room Partitioning',
          desc: 'Scoped order tracking to isolated Socket.IO rooms (`order_room_${orderId}`) to deliver sub-100ms updates to customer, shop, and delivery partner apps.'
        },
        {
          title: 'Redux Toolkit State Optimization',
          desc: 'Structured slice stores for cart, food discovery, and shop filtering, slashing unnecessary backend polling API calls.'
        }
      ],
      challenges: [
        {
          challenge: 'Managing mobile network dropouts during active delivery route tracking.',
          resolution: 'Built client auto-reconnection backoff with server-side event sync to restore location states upon reconnecting.'
        }
      ],
      results: [
        'Sub-80ms real-time status propagation delay across 3 participant dashboards',
        '99.9% webhook signature validation accuracy for Razorpay online payments',
        'Zero delivery disputes achieved through OTP verification handoff'
      ]
    }
  },
  {
    id: 'vibe-ai-builder',
    title: 'Vibe – AI-Powered SaaS Website Builder',
    duration: 'Jul 2025 – Oct 2025',
    tagline: 'No-code AI SaaS platform for generating, editing, and previewing web pages',
    category: 'AI / SaaS',
    featured: true,
    badge: 'AI + Full-Stack',
    technologies: ['Next.js 15', 'React', 'tRPC', 'Clerk Auth', 'Prisma ORM', 'PostgreSQL', 'Inngest', 'Gemini API'],
    highlights: [
      'Developed and deployed a no-code AI website builder inspired by Lovable, enabling users to dynamically generate, edit, and preview websites in real time using Gemini-powered content generation and sandboxed live previews.',
      'Implemented a type-safe API layer with tRPC, integrating Clerk authentication for secure sign-in, email verification, and billing via Clerk Payments.',
      'Designed a scalable, multi-tenant database schema using Prisma ORM with PostgreSQL, supporting isolated user data and versioned site publishing.',
      'Automated background workflows such as AI content generation, site deployment, and webhook handling using Inngest, improving reliability and execution consistency.',
      'Deployed a fully managed SaaS infrastructure featuring Incremental Static Regeneration (ISR) and real-time content synchronization, reducing page build latency.',
      'Engineered a sandbox preview system for instant AI-generated site visualization, improving user engagement and overall user experience.'
    ],
    liveUrl: null, // No demo link for Vibe
    githubUrl: 'https://github.com/princesharma89/vibe',
    caseStudy: {
      problem: 'Traditional web development is time-consuming for non-developers, while existing static AI generators output monolithic code snippets without dynamic customization, sandbox isolation, or automated workflow background processing.',
      solution: 'Engineered Vibe: a full-stack SaaS platform utilizing Next.js 15, tRPC for type-safe API communication, Google Gemini API for structured component generation, Inngest for event-driven background queues, and Prisma ORM over PostgreSQL.',
      architecture: {
        nodes: [
          { id: 'next', name: 'Next.js 15 App Router', desc: 'ISR & Server Components' },
          { id: 'trpc', name: 'tRPC API Layer', desc: 'Type-Safe Procedures & Clerk Auth' },
          { id: 'inngest', name: 'Inngest Engine', desc: 'AI Prompt & Async Background Workflows' },
          { id: 'prisma', name: 'Prisma + PostgreSQL', desc: 'Multi-Tenant Database' }
        ],
        connections: [
          { from: 'Next.js 15 App Router', to: 'tRPC API Layer', label: 'Type-Safe Procedures' },
          { from: 'tRPC API Layer', to: 'Inngest Engine', label: 'Queue Async Jobs' },
          { from: 'Inngest Engine', to: 'Gemini API', label: 'Prompt Generation' },
          { from: 'tRPC API Layer', to: 'Prisma + PostgreSQL', label: 'Prisma ORM CRUD' }
        ]
      },
      decisions: [
        {
          title: 'Type-Safe API with tRPC',
          desc: 'Implemented tRPC over standard REST/GraphQL to guarantee strict end-to-end TypeScript types between Next.js server components and user workspace actions without codegen steps.'
        },
        {
          title: 'Inngest Event-Driven Workflows',
          desc: 'Decoupled AI site generation, deployment triggers, and payment webhooks into reliable background serverless queues with automatic retries and execution consistency.'
        },
        {
          title: 'Sandboxed Preview Isolation',
          desc: 'Built a sandboxed iframe render environment, decoupling generated code execution from core platform state and securing user sessions.'
        }
      ],
      challenges: [
        {
          challenge: 'Handling heavy AI prompt generation latency without blocking user UI.',
          resolution: 'Integrated Inngest background event processing paired with real-time UI status streaming to show incremental progress.'
        }
      ],
      results: [
        'Sub-4.2s AI site generation & instant sandbox preview rendering',
        '100% type-safe schema contract across Next.js frontend and PostgreSQL database',
        'Zero build latency overhead via Incremental Static Regeneration (ISR)'
      ]
    }
  }
];

// @route   GET /api/projects
// @desc    Get all featured projects with case study details
// @access  Public
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: projectsData.length,
    data: projectsData
  });
});

// @route   GET /api/projects/:id
// @desc    Get single project by ID with full case study
// @access  Public
router.get('/:id', (req, res) => {
  const project = projectsData.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, error: 'Project not found' });
  }
  res.json({ success: true, data: project });
});

module.exports = router;
