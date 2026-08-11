import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, CheckCircle2, Server } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenResume, backendStatus }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-900/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-accent flex items-center justify-center font-bold text-white shadow-glow-indigo text-lg group-hover:scale-105 transition-transform">
              PK
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:block text-xs text-slate-400 font-mono">
                IIIT Bhagalpur '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-dark-800/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Buttons & Backend Status */}
          <div className="hidden md:flex items-center gap-3">
            {/* API Connection Indicator */}
            <div 
              title={backendStatus.connected ? `Node.js Backend Connected (${backendStatus.mode})` : 'Node.js Backend Offline'}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs font-mono text-slate-300"
            >
              <span className={`w-2 h-2 rounded-full ${backendStatus.connected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span>API</span>
            </div>

            {/* Prominent Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-700 hover:from-brand-500 hover:to-indigo-600 text-white text-sm font-semibold shadow-glow-indigo transition-all hover:scale-105 active:scale-95"
            >
              <span>Resume</span>
              <FileText className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-medium"
            >
              Resume ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-glow-indigo"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
