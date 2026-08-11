import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer({ backendStatus }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand & Copyright */}
          <div className="space-y-1">
            <p className="text-base font-bold text-white tracking-tight">
              © 2026 {PERSONAL_INFO.name}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              B.Tech ECE @ IIIT Bhagalpur • Full-Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              className="hover:text-brand-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
