import React from 'react';
import { X, Download, FileText, GraduationCap, Code2, Briefcase, Award, Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `PRINCE KUMAR
Patna, Bihar, India - 804407
Phone: +91-9113770107 | Email: prince3.230102045@iiitbh.ac.in
GitHub: https://github.com/princesharma89 | LinkedIn: https://linkedin.com/in/prince-kumar

==================================================
EDUCATION
Indian Institute of Information Technology Bhagalpur (Sept 2023 - Jul 2027)
Bachelor of Technology in Electronics and Communication Engineering
CGPA: 7.33

==================================================
SKILLS
- Programming Languages: JavaScript, TypeScript, C, C++, SQL, HTML5, CSS
- Frontend: React.js, Next.js, Tailwind CSS
- State Management: Redux Toolkit, Zustand, Recoil, Context API
- Backend & APIs: Node.js, Express.js, REST APIs, WebSocket, Socket.IO, WebRTC
- Databases: PostgreSQL, MongoDB, MySQL, Prisma ORM, Mongoose, Redis
- Developer Tools: Git, GitHub, Postman, Docker, VS Code
- DevOps & Cloud: Docker, AWS EC2, Vercel
- Core CS: Data Structures and Algorithms, System Design, OOP, Microservices, Operating system

==================================================
PROJECTS
1. Vibe - AI-Powered SaaS Website Builder (Jul 2025 - Oct 2025)
   Tech: Next.js 15, React, tRPC, Clerk Auth, Prisma ORM, PostgreSQL, Inngest, Gemini API
   - Developed and deployed a no-code AI website builder inspired by Lovable, enabling users to dynamically generate, edit, and preview websites in real time using Gemini-powered content generation and sandboxed live previews.
   - Implemented a type-safe API layer with tRPC, integrating Clerk authentication for secure sign-in, email verification, and billing via Clerk Payments.
   - Designed a scalable, multi-tenant database schema using Prisma ORM with PostgreSQL, supporting isolated user data and versioned site publishing.
   - Automated background workflows such as AI content generation, site deployment, and webhook handling using Inngest, improving reliability and execution consistency.
   - Deployed a fully managed SaaS infrastructure featuring Incremental Static Regeneration (ISR) and real-time content synchronization, reducing page build latency.
   - Engineered a sandbox preview system for instant AI-generated site visualization, improving user engagement and overall user experience.

2. Vingo - Full-Stack Online Food Delivery Platform (Oct 2025 - Mar 2026)
   Tech: React, Redux Toolkit, Node.js, Express, MongoDB, Socket.IO, Razorpay
   - Built a multi-role food delivery platform supporting users, shop owners, and delivery partners with secure JWT-based authentication and Google OAuth.
   - Implemented the complete order lifecycle including add-to-cart, checkout, Razorpay payments, order placement, and status updates.
   - Designed real-time features using Socket.IO for live order tracking, delivery assignment, and instant status updates.
   - Developed delivery partner workflows including order acceptance, OTP-based delivery verification, an earnings dashboard, and delivery tracking.
   - Enabled advanced user features such as food search, category filtering, ratings, shop discovery, and order history.
   - Implemented secure password reset using Email OTP verification for reliable account recovery.
   - Optimized global state management using Redux Toolkit, improving UI responsiveness and reducing unnecessary API requests.

==================================================
ACHIEVEMENTS
- Solved 550+ problems on LeetCode, GFG, and CodingNinjas.
- Top 16 Finalist Smart India Hackathon (IIIT Bhagalpur): Led a 5-member team to deploy a full-stack solution.
- Qualified First Round - TATA Imagination Challenge: Shortlisted from 140,000+ student participants through a competitive national-level screening.
`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Prince_Kumar_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-dark-800 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="sticky top-0 z-10 bg-dark-800/95 backdrop-blur-md px-6 py-4 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-brand-400" />
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Prince Kumar — Official Resume
              </h3>
              <p className="text-xs font-mono text-slate-400">
                IIIT Bhagalpur • B.Tech ECE (2023 - 2027)
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-glow-indigo transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Copy</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content - Pre-formatted Styled Resume */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-left bg-dark-900/40">
          
          {/* Header Block */}
          <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 text-center space-y-3">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">PRINCE KUMAR</h1>
            <p className="text-sm font-medium text-slate-300">
              Patna, Bihar, India – 804407
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                +91-9113770107
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                prince3.230102045@iiitbh.ac.in
              </span>
              <a href="https://github.com/princesharma89" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-white">
                <Github className="w-3.5 h-3.5 text-brand-accent" />
                github.com/princesharma89
              </a>
              <a href="https://linkedin.com/in/prince-kumar" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-sky-400">
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                linkedin.com/in/prince-kumar
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <GraduationCap className="w-4 h-4" />
              Education
            </h4>
            <div className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 flex justify-between items-start">
              <div>
                <p className="text-base font-bold text-white">Indian Institute of Information Technology Bhagalpur</p>
                <p className="text-xs text-slate-300 font-mono mt-0.5">Bachelor of Technology in Electronics and Communication Engineering</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-slate-400 block">Sept 2023 – Jul 2027</span>
                <span className="text-xs font-mono text-brand-300 font-bold">CGPA: 7.33</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <Code2 className="w-4 h-4" />
              Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-dark-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Programming Languages:</span>
                <span className="text-slate-300">JavaScript, TypeScript, C, C++, SQL, HTML5, CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Frontend:</span>
                <span className="text-slate-300">React.js, Next.js, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">State Management:</span>
                <span className="text-slate-300">Redux Toolkit, Zustand, Recoil, Context API</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Backend & APIs:</span>
                <span className="text-slate-300">Node.js, Express.js, REST APIs, WebSocket, Socket.IO, WebRTC</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Databases:</span>
                <span className="text-slate-300">PostgreSQL, MongoDB, MySQL, Prisma ORM, Mongoose, Redis</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Developer Tools & Cloud:</span>
                <span className="text-slate-300">Git, GitHub, Postman, Docker, VS Code, AWS EC2, Vercel</span>
              </div>
              <div className="sm:col-span-2 p-3 rounded-xl bg-dark-900/80 border border-slate-800">
                <span className="font-bold text-white block mb-1">Core CS:</span>
                <span className="text-slate-300">Data Structures and Algorithms, System Design, OOP, Microservices, Operating system</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <Briefcase className="w-4 h-4" />
              Projects
            </h4>
            
            <div className="space-y-4">
              
              {/* Vibe */}
              <div className="p-5 rounded-2xl bg-dark-900/80 border border-slate-800 space-y-2">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <h5 className="font-bold text-white text-base">Vibe – AI-Powered SaaS Website Builder</h5>
                  <span className="text-xs font-mono text-slate-400">Jul 2025 – Oct 2025</span>
                </div>
                <p className="text-xs font-mono text-brand-400">
                  Next.js 15 — React — tRPC — Clerk Auth — Prisma ORM — PostgreSQL — Inngest — Gemini API
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside pt-1">
                  <li>Developed and deployed a no-code AI website builder inspired by Lovable, enabling users to dynamically generate, edit, and preview websites in real time using Gemini-powered content generation and sandboxed live previews.</li>
                  <li>Implemented a type-safe API layer with tRPC, integrating Clerk authentication for secure sign-in, email verification, and billing via Clerk Payments.</li>
                  <li>Designed a scalable, multi-tenant database schema using Prisma ORM with PostgreSQL, supporting isolated user data and versioned site publishing.</li>
                  <li>Automated background workflows such as AI content generation, site deployment, and webhook handling using Inngest, improving reliability and execution consistency.</li>
                  <li>Deployed a fully managed SaaS infrastructure featuring Incremental Static Regeneration (ISR) and real-time content synchronization, reducing page build latency.</li>
                  <li>Engineered a sandbox preview system for instant AI-generated site visualization, improving user engagement and overall user experience.</li>
                </ul>
              </div>

              {/* Vingo */}
              <div className="p-5 rounded-2xl bg-dark-900/80 border border-slate-800 space-y-2">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <h5 className="font-bold text-white text-base">Vingo – Full-Stack Online Food Delivery Platform</h5>
                  <span className="text-xs font-mono text-slate-400">Oct 2025 – Mar 2026</span>
                </div>
                <p className="text-xs font-mono text-brand-400">
                  React — Redux Toolkit — Node.js — Express — MongoDB — Socket.IO — Razorpay
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside pt-1">
                  <li>Built a multi-role food delivery platform supporting users, shop owners, and delivery partners with secure JWT-based authentication and Google OAuth.</li>
                  <li>Implemented the complete order lifecycle including add-to-cart, checkout, Razorpay payments, order placement, and status updates.</li>
                  <li>Designed real-time features using Socket.IO for live order tracking, delivery assignment, and instant status updates.</li>
                  <li>Developed delivery partner workflows including order acceptance, OTP-based delivery verification, an earnings dashboard, and delivery tracking.</li>
                  <li>Enabled advanced user features such as food search, category filtering, ratings, shop discovery, and order history.</li>
                  <li>Implemented secure password reset using Email OTP verification for reliable account recovery.</li>
                  <li>Optimized global state management using Redux Toolkit, improving UI responsiveness and reducing unnecessary API requests.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <Award className="w-4 h-4" />
              Achievements
            </h4>
            <ul className="p-4 rounded-xl bg-dark-900/80 border border-slate-800 text-xs text-slate-300 space-y-2 list-disc list-inside">
              <li><strong>Solved 550+ problems</strong> on LeetCode, GFG, and CodingNinjas.</li>
              <li><strong>Top 16 Finalist Smart India Hackathon (IIIT Bhagalpur)</strong>: Led a 5-member team to deploy a full-stack web application.</li>
              <li><strong>Qualified First Round – TATA Imagination Challenge</strong>: Shortlisted from 140,000+ student participants through a competitive national-level screening.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-dark-800 px-6 py-4 border-t border-slate-700/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Press Esc or Click Outside to close</span>
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs shadow-glow-indigo transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
}
