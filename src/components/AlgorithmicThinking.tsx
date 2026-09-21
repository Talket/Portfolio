import React, { useState } from 'react';
import { Binary, GitFork, Network, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface MethodologyStep {
  step: string;
  name: string;
  focus: string;
  example: string;
}

const steps: MethodologyStep[] = [
  { step: '01', name: 'PROBLEM', focus: 'Isolate constraints, edge cases & failure boundaries', example: 'Detect criminal networks in 1,000+ unstructured FIR pages without hallucination.' },
  { step: '02', name: 'DECOMPOSE', focus: 'Split into deterministic vs probabilistic sub-problems', example: 'Sub-problem A: OCR/HTR digitization. Sub-problem B: Fact extraction. Sub-problem C: Reasoning.' },
  { step: '03', name: 'MODEL', focus: 'Select appropriate mathematical representations & data structures', example: 'Graph adjacency matrix for syndicate ties; Markov diffusion schedule for continuous noise.' },
  { step: '04', name: 'IMPLEMENT', focus: 'Write clean, memory-safe, type-safe code (C++, Python, TypeScript)', example: 'FastAPI async daemon on Raspberry Pi + strict Pydantic JSON schemas.' },
  { step: '05', name: 'TEST', focus: 'Empirical validation across adversarial cases', example: 'Confusion matrices, Precision-Recall curves, stratified validation splits.' },
  { step: '06', name: 'OPTIMIZE', focus: 'Eliminate bottlenecks, reduce time/space complexity', example: 'Quantize CNN inference; minimize Firestore listener subscriptions.' },
  { step: '07', name: 'DEPLOY', focus: 'Package for production survival and real users', example: 'Docker containers, Google Play releases, live restaurant hardware testing.' }
];

export const AlgorithmicThinking: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <section id="thinking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <Binary className="w-4 h-4 text-[#e11d48]" />
          COMPUTATIONAL RIGOR
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          HOW I THINK
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Not generic inspiration. A structured, seven-stage engineering methodology applied to every problem —
          from algorithmic optimization to full-stack systems.
        </p>
      </div>

      {/* Methodology horizontal pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {steps.map((s, idx) => {
          const isActive = idx === activeStepIdx;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStepIdx(idx)}
              className={`p-3 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                isActive
                  ? 'border-[#e11d48] bg-[#e11d48]/10 text-[#e11d48] shadow-sm'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="text-[10px] text-zinc-400 font-bold">{s.step}</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white mt-0.5">{s.name}</div>
            </button>
          );
        })}
      </div>

      {/* Interactive Step Explorer Card */}
      <div className="p-8 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800 font-mono">
          <div className="flex items-center gap-2 text-sm text-[#e11d48] font-bold">
            <span>PHASE {steps[activeStepIdx].step}:</span>
            <span className="text-zinc-900 dark:text-white text-lg font-display">{steps[activeStepIdx].name}</span>
          </div>
          <span className="text-xs text-zinc-500">ENGINEERING STEP EXECUTION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <div className="text-xs font-mono text-zinc-400 uppercase">CORE OBJECTIVE & DISCIPLINE:</div>
            <p className="text-base text-zinc-800 dark:text-zinc-200 font-sans leading-relaxed">
              {steps[activeStepIdx].focus}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-zinc-400 uppercase">CONCRETE SYSTEM APPLICATION:</div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              {steps[activeStepIdx].example}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
