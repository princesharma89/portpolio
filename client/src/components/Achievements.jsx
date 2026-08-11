import React from 'react';
import { Trophy, Award, GitCommit, GraduationCap, Star, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Hackathon': return Trophy;
      case 'Competitive Programming': return Star;
      case 'Open Source': return GitCommit;
      case 'Certification': return Award;
      default: return GraduationCap;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-dark-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400">
            // Milestones & Recognition
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & Activities
          </h3>
          <p className="text-slate-400 text-base sm:text-lg">
            Hackathon victories, competitive coding titles, open-source highlights, and certifications.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComponent = getCategoryIcon(item.category);
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-500/40 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 p-3 text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="w-full h-full" />
                </div>

                <div className="space-y-2 flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-300 text-xs font-mono border border-brand-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs font-semibold text-brand-accent">
                    {item.organization}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
