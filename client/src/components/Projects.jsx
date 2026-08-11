import React from 'react';
import { ExternalLink, Github, BookOpen, Layers, CheckCircle2, ArrowRight, Radio, Sparkles, Star } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="py-20 bg-dark-800/30 relative">
      {/* Ambient background blur */}
      <div className="ambient-glow-indigo bottom-10 left-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production full-stack platforms highlighting real-time architectures and scalable backend engineering.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => {
            const isMainProject = project.id === 'vingo';

            return (
              <div
                key={project.id}
                className={`glass-panel rounded-3xl p-6 sm:p-8 transition-all relative group ${
                  isMainProject
                    ? 'border-2 border-brand-500/80 bg-dark-800/80 shadow-glow-indigo hover:shadow-2xl'
                    : 'border border-slate-800 hover:border-brand-500/40'
                }`}
              >
                {/* Main Project Banner Ribbon */}
                {isMainProject && (
                  <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 via-brand-500 to-indigo-600 text-white text-xs font-bold font-mono tracking-wider shadow-lg flex items-center gap-1.5 uppercase">
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-300" />
                    <span>#1 Main Featured Project</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  
                  {/* Left Info Column */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    
                    {/* Category & Badge Header */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-500/30 text-xs font-semibold">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono flex items-center gap-1.5">
                        <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                        {project.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-brand-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-slate-300 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Highlights Bullet Grid */}
                    <div className="space-y-2.5 pt-2">
                      {project.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pill List */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-dark-800 border border-slate-700/80 text-xs font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                      
                      {/* Live Demo Link (Only rendered if liveUrl exists, e.g. for Vingo) */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold text-sm shadow-md transition-all hover:scale-105"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {/* Case Study Trigger */}
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-700 hover:from-brand-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-glow-indigo transition-all hover:scale-105"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Case Study</span>
                      </button>

                      {/* GitHub Code Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-semibold text-sm transition-all"
                      >
                        <Github className="w-4 h-4 text-brand-400" />
                        <span>GitHub</span>
                      </a>

                    </div>

                  </div>

                  {/* Right Architecture Visual Box */}
                  <div className="lg:col-span-5">
                    <div 
                      onClick={() => onOpenCaseStudy(project)}
                      className="relative rounded-2xl bg-dark-900/90 border border-slate-800 p-6 cursor-pointer group/arch hover:border-brand-500/50 transition-all"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                        <span className="flex items-center gap-1.5 text-brand-400 font-semibold">
                          <Layers className="w-4 h-4" />
                          System Architecture
                        </span>
                        <span className="text-xs text-brand-accent group-hover/arch:underline flex items-center gap-1">
                          Click to Expand <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>

                      {/* Nodes flow preview */}
                      <div className="space-y-3">
                        {project.caseStudy.architecture.slice(0, 3).map((node, nIdx) => (
                          <div 
                            key={nIdx}
                            className="p-3 rounded-xl bg-dark-800/80 border border-slate-800 flex items-center justify-between group-hover/arch:border-slate-700 transition-colors"
                          >
                            <div>
                              <p className="text-xs font-bold text-white">
                                {node.title}
                              </p>
                              <p className="text-[11px] text-slate-400 font-mono">
                                {node.subtitle}
                              </p>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
                          </div>
                        ))}
                      </div>

                      {/* Visual Callout */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                        <span>Interactive Diagram</span>
                        <span className="text-emerald-400">Production Architecture</span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
