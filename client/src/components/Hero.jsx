import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Code, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="ambient-glow-indigo -top-20 -left-20 animate-pulse-glow" />
      <div className="ambient-glow-cyan top-1/3 -right-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Intro & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>B.Tech ECE @ IIIT Bhagalpur '27</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-brand-accent">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* 1-2 Line Intro */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              B.Tech ECE student at <strong className="text-slate-200">IIIT Bhagalpur</strong> and a full-stack developer passionate about building scalable web applications, real-time architectures, and solving complex algorithmic problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-700 hover:from-brand-500 hover:to-indigo-600 text-white font-semibold shadow-glow-indigo transition-all hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold border border-slate-700/80 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-brand-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold border border-slate-800 transition-all"
              >
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Quick Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Tech Stack Floating Badges */}
              <div className="flex items-center gap-2">
                {['React', 'Next.js', 'Node.js', 'MongoDB', 'Socket.IO'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-dark-800/80 border border-slate-800 text-xs font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Code Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-brand-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative rounded-2xl bg-dark-800/90 border border-slate-700/60 p-6 shadow-2xl backdrop-blur-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-brand-400" />
                    PrinceKumar.config.ts
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>

                {/* Code Snippet */}
                <pre className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
<code><span className="text-purple-400">interface</span> <span className="text-amber-300">SoftwareEngineer</span> &#123;
  name: <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>;
  college: <span className="text-emerald-400">"{PERSONAL_INFO.institution}"</span>;
  degree: <span className="text-emerald-400">"B.Tech ECE"</span>;
  gradYear: <span className="text-cyan-400">2027</span>;
  coreSkills: [<span className="text-amber-300">'C++'</span>, <span className="text-amber-300">'Full-Stack'</span>, <span className="text-amber-300">'DSA'</span>];
&#125;

<span className="text-purple-400">const</span> <span className="text-brand-400">prince</span>: <span className="text-amber-300">SoftwareEngineer</span> = &#123;
  passion: <span className="text-emerald-400">"Building Scalable Apps"</span>,
  currentFocus: <span className="text-emerald-400">"Real-Time Systems & AI SaaS"</span>,
  status: <span className="text-emerald-400">"Available for SDE Internships"</span>
&#125;;</code>
                </pre>

                {/* Stats footer pill */}
                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    850+ LeetCode/CP Solved
                  </span>
                  <span className="font-mono text-brand-accent">99.9% Uptime</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
