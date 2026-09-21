import React, { useState, useEffect } from 'react';
import { ProjectItem } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ScrollStory } from './components/ScrollStory';
import { Identity } from './components/Identity';
import { ProfessionalPositioning } from './components/ProfessionalPositioning';
import { BuildLog } from './components/BuildLog';
import { CurrentWork } from './components/CurrentWork';
import { CodeToUsers } from './components/CodeToUsers';
import { InteractiveLab } from './components/InteractiveLab';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AlgorithmicThinking } from './components/AlgorithmicThinking';
import { SkillsSystem } from './components/SkillsSystem';
import { TheNumbers } from './components/TheNumbers';
import { RoadmapSection } from './components/RoadmapSection';
import { ContactFooter } from './components/ContactFooter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync theme with html root class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0b0c10] text-[#f3f4f6] selection:bg-[#e11d48] selection:text-white antialiased';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#fcfbf9] text-[#18181b] selection:bg-[#e11d48] selection:text-white antialiased';
    }
  }, [darkMode]);

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-[#e11d48] selection:text-white">
      {/* Hardware-Accelerated Fixed Background: Prevents expensive full-page re-paints during scroll */}
      <div className="app-bg-canvas bg-grid-pattern" aria-hidden="true">
        {/* Apple-grade soft ambient atmospheric gradient spots */}
        <div
          className="ambient-glow w-[500px] h-[500px] -top-32 -left-32 opacity-30 dark:opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(225, 29, 72, 0.25) 0%, transparent 70%)' }}
        />
        <div
          className="ambient-glow w-[600px] h-[600px] top-[40%] -right-40 opacity-20 dark:opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)' }}
        />
        <div
          className="ambient-glow w-[450px] h-[450px] bottom-10 left-[20%] opacity-20 dark:opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(244, 63, 94, 0.18) 0%, transparent 70%)' }}
        />
      </div>

      {/* Fast Boot Loader */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Floating System Navigation */}
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main className="relative z-10">
        {/* 01: Hero with Interactive Node Network & Metrics */}
        <Hero
          onExploreWork={handleExploreWork}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 02: Signature Video-like Scroll Story (8 Scenes) */}
        <ScrollStory />

        {/* 03: Identity & Professional Stance */}
        <Identity />

        {/* 04: What I Build (4 Architectural Pillars) */}
        <ProfessionalPositioning />

        {/* 05: The Build Log (Projects Universe with Filters & Previews) */}
        <BuildLog onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

        {/* 06: Featured Ongoing System: AI Criminal Network & Raspberry Pi Edge Server */}
        <CurrentWork />

        {/* 07: From Code to Users (Real Impact: After12th & Restro_POS) */}
        <CodeToUsers />

        {/* 08: The Lab (Research, Experiments & Hypotheses) */}
        <InteractiveLab />

        {/* 09: When Learning Became Hands-on (Internships & Progression) */}
        <ExperienceTimeline />

        {/* 10: How I Think (7-Step Algorithmic Methodology) */}
        <AlgorithmicThinking />

        {/* 11: Dynamic Skills Repertoire */}
        <SkillsSystem />

        {/* 12: The Numbers, Education & Certifications */}
        <TheNumbers />

        {/* 13: What I Want to Build Next (Roadmap) */}
        <RoadmapSection />
      </main>

      {/* 14: Contact & Footer Dispatch */}
      <ContactFooter />

      {/* Detailed Case Study Dialog */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive Digital Résumé Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
