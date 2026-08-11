import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, ExternalLink, Github, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-dark-800 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Header */}
        <div className="sticky top-0 z-10 bg-dark-800/95 backdrop-blur-md px-6 py-4 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-brand-500 animate-pulse"></span>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-400">Technical Case Study</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Quick Links Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-dark-900/80 border border-slate-800">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-brand-600/20 text-brand-300 text-xs font-mono border border-brand-500/30">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4 text-brand-400" />
                <span>GitHub Source</span>
              </a>
            </div>
          </div>

          {/* 1. Problem */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-400 text-sm font-mono font-semibold uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>1. Problem Statement</span>
            </div>
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-slate-300 text-sm sm:text-base leading-relaxed">
              {caseStudy.problem}
            </div>
          </div>

          {/* 2. Solution */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-semibold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>2. Solution Architecture</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-slate-300 text-sm sm:text-base leading-relaxed">
              {caseStudy.solution}
            </div>
          </div>

          {/* 3. System Architecture Diagram */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-400 text-sm font-mono font-semibold uppercase">
                <Layers className="w-4 h-4" />
                <span>3. Architecture Visual Flow</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Data Flow Path</span>
            </div>

            <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {caseStudy.architecture.map((node, i) => (
                  <div key={i} className="relative">
                    <div className="p-4 rounded-xl bg-dark-800 border border-slate-700/80 hover:border-brand-500/50 transition-colors space-y-1">
                      <span className="text-[10px] font-mono text-brand-accent uppercase">Node {i+1}</span>
                      <h4 className="text-sm font-bold text-white">{node.title}</h4>
                      <p className="text-xs text-slate-400 font-mono">{node.subtitle}</p>
                    </div>
                    {i < caseStudy.architecture.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-brand-400">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Important Technical Decisions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-mono font-semibold uppercase">
              <Cpu className="w-4 h-4" />
              <span>4. Important Engineering Decisions</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {caseStudy.decisions.map((dec, i) => (
                <div key={i} className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 space-y-1">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    {dec.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed pl-4">
                    {dec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Challenges & Resolutions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono font-semibold uppercase">
              <Zap className="w-4 h-4" />
              <span>5. Technical Challenges & Trade-offs</span>
            </div>
            <div className="space-y-3">
              {caseStudy.challenges.map((c, i) => (
                <div key={i} className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 space-y-2">
                  <p className="text-sm font-semibold text-rose-300">
                    <strong>Challenge:</strong> {c.challenge}
                  </p>
                  <p className="text-sm text-emerald-300">
                    <strong>Resolution:</strong> {c.resolution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Results & Impact */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-semibold uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>6. Measured Results & Metrics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.results.map((res, i) => (
                <div key={i} className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm font-medium text-emerald-200">
                  ✓ {res}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-dark-800 px-6 py-4 border-t border-slate-700/80 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Prince Kumar • Full Case Study</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
