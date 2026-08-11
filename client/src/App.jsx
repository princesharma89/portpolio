import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [backendStatus, setBackendStatus] = useState({
    connected: false,
    mode: 'connecting'
  });

  useEffect(() => {
    // Health check on backend Node.js server
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'online') {
          setBackendStatus({
            connected: true,
            mode: data.database.mode || 'online'
          });
        }
      })
      .catch(err => {
        console.log('[Frontend] Backend API offline or in static standalone mode.', err);
        setBackendStatus({
          connected: false,
          mode: 'standalone'
        });
      });
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 relative selection:bg-brand-500 selection:text-white">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        backendStatus={backendStatus}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <CodingProfiles />
        <Achievements />
        <Contact backendStatus={backendStatus} />
      </main>

      {/* Footer */}
      <Footer backendStatus={backendStatus} />

      {/* Interactive Modals */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
