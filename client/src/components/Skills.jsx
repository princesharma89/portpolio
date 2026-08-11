import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Cloud, CheckCircle } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...SKILLS.map(s => s.category)];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const getIcon = (category) => {
    switch (category) {
      case 'Languages': return Code2;
      case 'Frontend': return Layout;
      case 'Backend': return Server;
      case 'Databases': return Database;
      case 'Tools / Cloud': return Cloud;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-400">
            // Tech Stack & Mastery
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technical Proficiency
          </h3>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured into dedicated technical domains for clarity and depth.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-glow-indigo'
                  : 'bg-dark-800 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((catGroup, idx) => {
            const IconComponent = getIcon(catGroup.category);
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${catGroup.color} p-2 text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-full h-full" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {catGroup.category}
                    </h4>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {catGroup.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-dark-800/80 border border-slate-800/80 hover:border-brand-500/30 text-slate-200 text-xs sm:text-sm font-medium transition-all hover:translate-x-0.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{catGroup.skills.length} core technologies</span>
                  <span className="text-brand-400">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
