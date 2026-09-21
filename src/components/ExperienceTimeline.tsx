import React from 'react';
import { experienceData, experienceProgressionSteps } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <Briefcase className="w-4 h-4 text-[#e11d48]" />
          PROFESSIONAL PROGRESSION
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          WHEN LEARNING BECAME HANDS-ON
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          Transitioning from textbook theory to production models. Handling real-world data noise, class imbalance,
          feature selection trade-offs, and computer vision pipelines in professional engineering environments.
        </p>
      </div>

      {/* Progression Steps: LEARNING -> EXPERIMENTING -> IMPLEMENTING -> DEPLOYING */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {experienceProgressionSteps.map((s, idx) => (
          <div
            key={s.step}
            className="p-5 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-2 font-mono"
          >
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-bold text-[#e11d48]">PHASE {s.step}</span>
              {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />}
            </div>
            <div className="text-base font-bold font-display text-zinc-900 dark:text-white">
              {s.title}
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Deep-Dive Internship Cards */}
      <div className="space-y-8">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-[#e11d48] font-bold">
                  {exp.focusArea}
                </div>
                <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-white">
                  {exp.company}
                </h3>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {exp.role}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <Calendar className="w-3.5 h-3.5 text-[#e11d48]" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Tasks list */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                KEY TECHNICAL RESPONSIBILITIES & DELIVERABLES:
              </div>
              <ul className="space-y-2.5">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5 leading-relaxed font-sans">
                    <span className="text-[#e11d48] font-mono text-xs mt-1 font-bold">0{idx + 1}.</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom: Technologies & Engineering Takeaway */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 items-center">
              <div className="md:col-span-7 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="md:col-span-5 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-900 dark:text-zinc-200 font-bold">CORE TAKEAWAY: </span>
                {exp.takeaways}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
