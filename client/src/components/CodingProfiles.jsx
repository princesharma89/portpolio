import React from 'react';
import { Trophy, ExternalLink, Code2, Award } from 'lucide-react';
import { CODING_PROFILES } from '../data/portfolioData';

export default function CodingProfiles() {
  return (
    <section className="py-20 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            DSA & Coding Profiles
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Continuous problem solving across LeetCode, GeeksforGeeks, and CodingNinjas.
          </p>
        </div>

        {/* Global Solved Stats Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 text-center max-w-3xl mx-auto mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-3">
            <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">// Problem Solving Metric</span>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              550+ Problems Solved
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Across <strong className="text-white">LeetCode</strong>, <strong className="text-white">GeeksforGeeks</strong>, and <strong className="text-white">CodingNinjas</strong>
            </p>

            <div className="pt-4 flex justify-center">
              <a
                href="https://leetcode.com/u/princesharma89/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold text-sm shadow-lg transition-all hover:scale-105"
              >
                <Code2 className="w-4 h-4" />
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CODING_PROFILES.map((profile, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between group text-left"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-bold text-white font-mono">
                    {profile.platform}
                  </span>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Solved Metric */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-amber-400">
                      {profile.solved}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{profile.badge}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="p-3 rounded-xl bg-dark-900/60 border border-slate-800/80 mb-4">
                  <p className="text-xs text-slate-300 font-mono">
                    {profile.percentile}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <a
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-dark-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold text-center border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Visit {profile.platform} Profile</span>
                <ExternalLink className="w-3 h-3 text-brand-accent" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
