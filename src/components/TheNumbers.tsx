import React from 'react';
import { metricsData, certificationsData, educationData } from '../data/achievements';
import { Award, GraduationCap, CheckCircle2, Trophy, BookOpen } from 'lucide-react';

export const TheNumbers: React.FC = () => {
  return (
    <section id="numbers" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <Trophy className="w-4 h-4 text-[#e11d48]" />
          EMPIRICAL TELEMETRY
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          THE NUMBERS
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Verified metrics representing consistency, academic rigor, algorithmic stamina, and real user adoption.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metricsData.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
              item.highlight
                ? 'bg-zinc-100/90 dark:bg-zinc-900/80 border-zinc-300 dark:border-zinc-700/80 shadow-sm'
                : 'bg-zinc-50/70 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800'
            }`}
          >
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                {item.platform}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white mt-1">
                {item.metric}
              </div>
              <div className="text-xs font-bold text-[#e11d48] font-mono mt-0.5">
                {item.label}
              </div>
            </div>

            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed pt-2 border-t border-zinc-200 dark:border-zinc-800">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Dual Section: Education Timeline & Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-zinc-200 dark:border-zinc-800">
        
        {/* Education (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
            <GraduationCap className="w-4 h-4 text-[#e11d48]" />
            ACADEMIC PEDIGREE
          </div>

          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-2 relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">{edu.institution}</span>
                  <span className="text-[#e11d48] font-semibold">{edu.grade}</span>
                </div>
                <h4 className="text-base font-bold font-display text-zinc-900 dark:text-white">
                  {edu.degree}
                </h4>
                <div className="text-xs font-mono text-zinc-500">{edu.period}</div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
                  {edu.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
            <Award className="w-4 h-4 text-amber-500" />
            VERIFIED CERTIFICATIONS
          </div>

          <div className="space-y-3">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1 font-mono text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-[10px]">{cert.issuer}</span>
                  <span className="text-emerald-500 text-[10px] font-bold">VERIFIED</span>
                </div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100 font-sans text-sm">
                  {cert.name}
                </div>
                {cert.credentialId && (
                  <div className="text-[10px] text-zinc-400">{cert.credentialId}</div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
            HackerRank 5-Star Badges: Problem Solving, C++, Java, and Python.
          </div>
        </div>
      </div>
    </section>
  );
};
