import React from 'react';
import { GraduationCap, Code2, Cpu, Server, MapPin, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "IIIT Bhagalpur",
      subtitle: "B.Tech in ECE (CGPA: 7.33)",
      description: "Sept 2023 – Jul 2027",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      subtitle: "React.js, Next.js 15, Node.js",
      description: "Building production AI SaaS & real-time platforms",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Cpu,
      title: "DSA & Problem Solving",
      subtitle: "550+ Problems Solved",
      description: "LeetCode, GeeksforGeeks & CodingNinjas",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Server,
      title: "Backend & Systems",
      subtitle: "REST, tRPC, WebSockets",
      description: "Prisma ORM, PostgreSQL, MongoDB, Docker & AWS",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400">
            // Get To Know Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h3>
          <p className="text-slate-400 text-base sm:text-lg">
            Electronics & Communication Engineering undergraduate at IIIT Bhagalpur with deep expertise in full-stack software development.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-2.5 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-brand-400 mb-2">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Short Summary Bio Card */}
        <div className="glass-panel p-8 rounded-2xl border border-slate-700/50 max-w-4xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center shrink-0 text-brand-400">
              <Award className="w-7 h-7" />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xl font-bold text-white">
                  Education & Background
                </h4>
                <span className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-dark-900 px-3 py-1 rounded-full border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Bachelor of Technology in <strong className="text-white">Electronics and Communication Engineering</strong> at <strong className="text-white">IIIT Bhagalpur</strong> (Sept 2023 – Jul 2027) maintaining a <strong className="text-brand-300">7.33 CGPA</strong>. My technical skillset covers full-stack web architectures (React, Next.js 15, Node.js, Express, tRPC, PostgreSQL, MongoDB) and continuous problem solving.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-300 text-xs font-mono border border-brand-500/20">
                  IIIT Bhagalpur (CGPA: 7.33)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/20">
                  550+ DSA Solved
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20">
                  SIH Top 16 Finalist
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
