export const PERSONAL_INFO = {
  name: "Prince Kumar",
  title: "Full-Stack Developer | Software Engineer",
  location: "Patna, Bihar, India – 804407",
  phone: "+91-9113770107",
  institution: "Indian Institute of Information Technology Bhagalpur",
  degree: "Bachelor of Technology in Electronics and Communication Engineering",
  gradYear: "Jul 2027",
  duration: "Sept 2023 – Jul 2027",
  cgpa: "7.33",
  bioShort: "Hi, I'm Prince Kumar, a B.Tech ECE student at IIIT Bhagalpur (CGPA: 7.33) and a full-stack software engineer passionate about building scalable web platforms and solving complex problems.",
  bioLong: [
    "I am an engineer who loves bridging the gap between high-level architectural design and clean, production-ready code. My core focus lies in building scalable full-stack web applications, real-time reactive platforms, and optimizing performance bottlenecks.",
    "Currently pursuing my B.Tech in Electronics and Communication Engineering at IIIT Bhagalpur (Sept 2023 – Jul 2027, CGPA: 7.33), I balance core computer science fundamentals with hands-on full-stack development and continuous problem-solving."
  ],
  links: {
    github: "https://github.com/princesharma89",
    linkedin: "https://linkedin.com/in/prince-kumar",
    email: "prince3.230102045@iiitbh.ac.in",
    leetcode: "https://leetcode.com/u/princesharma89/",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/prince323dcs8?tab=activity",
    codingninjas: "https://www.naukri.com/code360/profile/c65b8fe2-c96e-4231-ae66-7b7743d3b0b9"
  }
};

export const SKILLS = [
  {
    category: "Programming Languages",
    icon: "Code2",
    color: "from-blue-500 to-cyan-500",
    skills: ["JavaScript", "TypeScript", "C", "C++", "SQL", "HTML5", "CSS"]
  },
  {
    category: "Frontend & State",
    icon: "Layout",
    color: "from-indigo-500 to-purple-500",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Zustand", "Recoil", "Context API"]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    color: "from-emerald-500 to-teal-500",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "Socket.IO", "WebRTC", "tRPC", "Inngest"]
  },
  {
    category: "Databases & ORM",
    icon: "Database",
    color: "from-amber-500 to-orange-500",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Mongoose", "Redis"]
  },
  {
    category: "DevOps & Developer Tools",
    icon: "Cloud",
    color: "from-rose-500 to-pink-500",
    skills: ["Git", "GitHub", "Postman", "Docker", "VS Code", "AWS EC2", "Vercel"]
  },
  {
    category: "Core CS",
    icon: "Cpu",
    color: "from-cyan-500 to-blue-600",
    skills: ["Data Structures & Algorithms", "System Design", "OOP", "Microservices", "Operating System"]
  }
];

export const PROJECTS = [
  {
    id: "vingo",
    title: "Vingo – Full-Stack Online Food Delivery Platform",
    duration: "Oct 2025 – Mar 2026",
    tagline: "Flagship Multi-role food delivery platform with real-time tracking, shop workflows, and secure payments",
    category: "Main Project",
    featured: true,
    badge: "Main Featured Project",
    technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay"],
    highlights: [
      "Built a multi-role food delivery platform supporting users, shop owners, and delivery partners with secure JWT-based authentication and Google OAuth.",
      "Implemented the complete order lifecycle including add-to-cart, checkout, Razorpay payments, order placement, and status updates.",
      "Designed real-time features using Socket.IO for live order tracking, delivery assignment, and instant status updates.",
      "Developed delivery partner workflows including order acceptance, OTP-based delivery verification, an earnings dashboard, and delivery tracking.",
      "Enabled advanced user features such as food search, category filtering, ratings, shop discovery, and order history.",
      "Implemented secure password reset using Email OTP verification for reliable account recovery.",
      "Optimized global state management using Redux Toolkit, improving UI responsiveness and reducing unnecessary API requests."
    ],
    liveUrl: "https://vingo-r5xt.onrender.com",
    githubUrl: "https://github.com/princesharma89/vingo",
    caseStudy: {
      problem: "E-commerce ordering systems struggle with multi-actor coordination (Customer, Shop Owner, Delivery Partner). Without instant WebSockets, OTP delivery proofs, and synchronized state management, orders suffer delays and dispute risks.",
      solution: "Engineered Vingo: a high-throughput multi-tier platform built with React, Redux Toolkit, Express REST APIs, MongoDB Mongoose models, Socket.IO channels, and Razorpay payment gateway integration.",
      architecture: [
        { title: "React + Redux Toolkit", subtitle: "Global State & Client App", icon: "Layout" },
        { title: "Express REST API", subtitle: "JWT Auth, OAuth & Controllers", icon: "Server" },
        { title: "Socket.IO Pub/Sub", subtitle: "Live Tracking & Delivery Dispatch", icon: "Radio" },
        { title: "MongoDB Store", subtitle: "Orders, Shops, Menus & Users", icon: "Database" }
      ],
      decisions: [
        {
          title: "OTP-Based Handshake Verification",
          description: "Enforced an OTP verification lock upon delivery handoff. Delivery partners must enter the customer's unique OTP to complete the order lifecycle atomically in MongoDB."
        },
        {
          title: "Socket.IO Room Partitioning",
          description: "Scoped order tracking to isolated Socket.IO rooms (`order_room_${orderId}`) to deliver sub-100ms updates to customer, shop, and delivery partner apps."
        },
        {
          title: "Redux Toolkit State Optimization",
          description: "Structured slice stores for cart, food discovery, and shop filtering, slashing unnecessary backend polling API calls."
        }
      ],
      challenges: [
        {
          challenge: "Managing mobile network dropouts during active delivery route tracking.",
          resolution: "Built client auto-reconnection backoff with server-side event sync to restore location states upon reconnecting."
        }
      ],
      results: [
        "Sub-80ms real-time status propagation delay across 3 participant dashboards",
        "99.9% webhook signature validation accuracy for Razorpay online payments",
        "Zero delivery disputes achieved through OTP verification handoff"
      ]
    }
  },
  {
    id: "vibe-ai-builder",
    title: "Vibe – AI-Powered SaaS Website Builder",
    duration: "Jul 2025 – Oct 2025",
    tagline: "No-code AI SaaS platform for generating, editing, and previewing web pages",
    category: "AI / SaaS",
    featured: true,
    badge: "AI + Full-Stack",
    technologies: ["Next.js 15", "React", "tRPC", "Clerk Auth", "Prisma ORM", "PostgreSQL", "Inngest", "Gemini API"],
    highlights: [
      "Developed and deployed a no-code AI website builder inspired by Lovable, enabling users to dynamically generate, edit, and preview websites in real time using Gemini-powered content generation and sandboxed live previews.",
      "Implemented a type-safe API layer with tRPC, integrating Clerk authentication for secure sign-in, email verification, and billing via Clerk Payments.",
      "Designed a scalable, multi-tenant database schema using Prisma ORM with PostgreSQL, supporting isolated user data and versioned site publishing.",
      "Automated background workflows such as AI content generation, site deployment, and webhook handling using Inngest, improving reliability and execution consistency.",
      "Deployed a fully managed SaaS infrastructure featuring Incremental Static Regeneration (ISR) and real-time content synchronization, reducing page build latency.",
      "Engineered a sandbox preview system for instant AI-generated site visualization, improving user engagement and overall user experience."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/princesharma89/vibe",
    caseStudy: {
      problem: "Traditional web development is time-consuming for non-developers, while existing static AI generators output monolithic code snippets without dynamic customization, sandbox isolation, or automated workflow background processing.",
      solution: "Engineered Vibe: a full-stack SaaS platform utilizing Next.js 15, tRPC for type-safe API communication, Google Gemini API for structured component generation, Inngest for event-driven background queues, and Prisma ORM over PostgreSQL.",
      architecture: [
        { title: "Next.js 15 App Router", subtitle: "ISR & Server Components", icon: "Cpu" },
        { title: "tRPC API Layer", subtitle: "Type-Safe Procedures & Auth", icon: "Server" },
        { title: "Gemini API + Inngest", subtitle: "AI Prompt & Async Background Jobs", icon: "Sparkles" },
        { title: "Prisma + PostgreSQL", subtitle: "Multi-Tenant Isolated DB", icon: "Database" }
      ],
      decisions: [
        {
          title: "Type-Safe API with tRPC",
          description: "Implemented tRPC over standard REST/GraphQL to guarantee strict end-to-end TypeScript types between Next.js server components and user workspace actions without codegen steps."
        },
        {
          title: "Inngest Event-Driven Workflows",
          description: "Decoupled AI site generation, deployment triggers, and payment webhooks into reliable background serverless queues with automatic retries and execution consistency."
        },
        {
          title: "Sandboxed Preview Isolation",
          description: "Built a sandboxed iframe render environment, decoupling generated code execution from core platform state and securing user sessions."
        }
      ],
      challenges: [
        {
          challenge: "Handling heavy AI prompt generation latency without blocking user UI.",
          resolution: "Integrated Inngest background event processing paired with real-time UI status streaming to show incremental progress."
        }
      ],
      results: [
        "Sub-4.2s AI site generation & instant sandbox preview rendering",
        "100% type-safe schema contract across Next.js frontend and PostgreSQL database",
        "Zero build latency overhead via Incremental Static Regeneration (ISR)"
      ]
    }
  }
];

export const CODING_PROFILES = [
  {
    platform: "LeetCode",
    username: "princesharma89",
    solved: "300+ Solved",
    badge: "LeetCode Profile",
    percentile: "Algorithms & Data Structures",
    breakdown: { Easy: 100, Medium: 170, Hard: 30 },
    color: "from-amber-500 to-yellow-600",
    url: "https://leetcode.com/u/princesharma89/"
  },
  {
    platform: "GeeksforGeeks",
    username: "prince323dcs8",
    solved: "150+ Solved",
    badge: "GFG Profile",
    percentile: "Core CS & DSA Practice",
    breakdown: { DSA: 120, "Core CS": 30 },
    color: "from-emerald-500 to-green-700",
    url: "https://www.geeksforgeeks.org/profile/prince323dcs8?tab=activity"
  },
  {
    platform: "CodingNinjas / Code360",
    username: "c65b8fe2-c96e",
    solved: "100+ Solved",
    badge: "CodingNinjas Profile",
    percentile: "Problem Solving",
    breakdown: { Arrays: 40, Trees: 30, Graphs: 30 },
    color: "from-sky-500 to-blue-700",
    url: "https://www.naukri.com/code360/profile/c65b8fe2-c96e-4231-ae66-7b7743d3b0b9"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "550+ Algorithmic Problems Solved",
    organization: "LeetCode, GFG & CodingNinjas",
    year: "Continuous",
    category: "Competitive Programming",
    desc: "Demonstrated strong computer science fundamentals by solving 550+ algorithmic data structure problems across LeetCode, GeeksforGeeks, and CodingNinjas."
  },
  {
    title: "Top 16 Finalist – Smart India Hackathon (SIH)",
    organization: "IIIT Bhagalpur",
    year: "2024 - 2025",
    category: "Hackathon",
    desc: "Led a 5-member engineering team to design, architect, and deploy a full-stack web application, advancing to the Top 16 Finalist stage."
  },
  {
    title: "Qualified First Round – TATA Imagination Challenge",
    organization: "TATA Group National Level Screening",
    year: "2024",
    category: "National Contest",
    desc: "Shortlisted from 140,000+ nationwide student participants through a highly competitive national-level screening process."
  }
];
