import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Award, Compass, Sparkles, Terminal, ArrowRight } from 'lucide-react';

export const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Editorial Headline Statement */}
      <div className="border-l-2 border-[#e11d48] pl-6 py-2 space-y-2">
        <div className="text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          ENGINEERING ETHOS
        </div>
        <p className="text-2xl sm:text-4xl font-bold font-display text-zinc-900 dark:text-zinc-100 leading-snug max-w-4xl">
          “I like the moment an idea stops being theoretical.”
        </p>
      </div>

      {/* Main Identity Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Large Name & Stance (5 cols) */}
        <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              SYSTEM IDENTITY // 01
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-zinc-900 dark:text-white">
              Talket Dobariya
            </h2>
            <div className="inline-block px-3 py-1 rounded-md bg-[#e11d48]/10 text-[#e11d48] font-mono text-xs font-semibold tracking-wider">
              AI / MACHINE LEARNING ENGINEER
            </div>
          </div>

          <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              I’m interested in the space where machine learning meets real software engineering —
              where models become systems, systems become products, and products have to survive
              outside the development environment.
            </p>
            <p className="text-xs font-mono text-zinc-500 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              Surat, Gujarat, India • Open for high-impact AI/ML engineering opportunities & technical collaborations.
            </p>
          </div>

          {/* DNA cycle pills */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              ENGINEERING DNA
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-xs">
              <span className="py-1 px-1.5 rounded bg-zinc-200/60 dark:bg-zinc-800/80 font-semibold text-zinc-800 dark:text-zinc-200">BUILD</span>
              <span className="py-1 px-1.5 rounded bg-zinc-200/60 dark:bg-zinc-800/80 font-semibold text-zinc-800 dark:text-zinc-200">MEASURE</span>
              <span className="py-1 px-1.5 rounded bg-zinc-200/60 dark:bg-zinc-800/80 font-semibold text-zinc-800 dark:text-zinc-200">LEARN</span>
              <span className="py-1 px-1.5 rounded bg-[#e11d48]/15 text-[#e11d48] font-semibold">ITERATE</span>
            </div>
          </div>
        </div>

        {/* Right: Technical Credentials & Academic Telemetry (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: University */}
          <div className="p-6 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <GraduationCap className="w-5 h-5 text-[#e11d48]" />
              <span className="text-[10px] font-mono text-zinc-500">ACADEMICS</span>
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-500">DEGREE & SPECIALIZATION</div>
              <div className="text-base font-bold text-zinc-900 dark:text-white font-display mt-0.5">
                B.Tech — CSE (AI/ML)
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Lovely Professional University
              </div>
            </div>
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/60 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>5th Semester</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Expected: 2028</span>
            </div>
          </div>

          {/* Card 2: CGPA & Rigor */}
          <div className="p-6 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-[10px] font-mono text-zinc-500">PERFORMANCE</span>
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-500">CUMULATIVE CGPA</div>
              <div className="text-3xl font-extrabold text-zinc-900 dark:text-white font-display mt-0.5 flex items-baseline gap-1">
                <span>8.87</span>
                <span className="text-xs text-zinc-500 font-normal">/ 10</span>
              </div>
              <div className="text-xs text-emerald-500 font-mono mt-1">
                Consistent Top Academic Bracket
              </div>
            </div>
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/60 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>High School (Math)</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-semibold">74%</span>
            </div>
          </div>

          {/* Card 3: Problem Solving Evidence */}
          <div className="p-6 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <Terminal className="w-5 h-5 text-sky-400" />
              <span className="text-[10px] font-mono text-zinc-500">COMPETENCY</span>
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-500">LEETCODE & HACKERRANK</div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white font-display mt-0.5">
                500+ LeetCode Solved
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                5★ Badges: C++, Python, Java & Problem Solving
              </div>
            </div>
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/60 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>Primary Engine</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-semibold">C++ & Python</span>
            </div>
          </div>

          {/* Card 4: Location & Deployment Grounding */}
          <div className="p-6 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <MapPin className="w-5 h-5 text-[#e11d48]" />
              <span className="text-[10px] font-mono text-zinc-500">BASE LOCATION</span>
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-500">OPERATIONAL HUB</div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white font-display mt-0.5">
                Surat, Gujarat
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Active commercial software deployment in region
              </div>
            </div>
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/60 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>Timezone</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-semibold">IST (UTC+5:30)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
