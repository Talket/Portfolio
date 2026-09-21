import React, { useState } from 'react';
import { labItems } from '../data/lab';
import { LabItem } from '../types';
import { 
  FlaskConical, 
  Sparkles, 
  HelpCircle, 
  Sliders, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Clock, 
  Search,
  Filter
} from 'lucide-react';

export const InteractiveLab: React.FC = () => {
  const [selectedLabItem, setSelectedLabItem] = useState<LabItem>(labItems[0]);

  const getStatusColor = (status: LabItem['status']) => {
    switch (status) {
      case 'RESEARCH':
        return 'border-purple-500/30 text-purple-400 bg-purple-500/10';
      case 'EXPERIMENT':
        return 'border-amber-500/30 text-amber-400 bg-amber-500/10';
      case 'EXPLORING':
        return 'border-sky-500/30 text-sky-400 bg-sky-500/10';
      case 'IDEA':
        return 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10';
      case 'PLANNED':
        return 'border-zinc-500/30 text-zinc-400 bg-zinc-500/10';
    }
  };

  return (
    <section id="lab" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <FlaskConical className="w-4 h-4 text-[#e11d48]" />
          RESEARCH & EXPLORATORY WORK
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          THE LAB
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          Not everything is a polished finished application. Engineering curiosity thrives in raw research questions,
          experimental datasets (NASA capacitors, component burn-in anomalies), and edge AI hypotheses.
        </p>
      </div>

      {/* Lab Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {labItems.map((item) => {
          const isSelected = selectedLabItem.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedLabItem(item)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'border-[#e11d48] bg-white dark:bg-zinc-900 shadow-lg shadow-[#e11d48]/5'
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">{item.updatedDate}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-zinc-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-zinc-500">
                  // {item.category}
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">CORE HYPOTHESIS:</div>
                <div className="text-[11px] font-mono text-zinc-800 dark:text-zinc-300 bg-zinc-200/50 dark:bg-zinc-950 p-2.5 rounded-lg border border-zinc-300/40 dark:border-zinc-800/80">
                  {item.hypothesisOrGoal}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Experiment Inspector Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-100 dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200 dark:border-zinc-800 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#e11d48]" />
            <span className="font-bold text-zinc-800 dark:text-zinc-200">
              LAB INSPECTOR: {selectedLabItem.title}
            </span>
          </div>
          <span className="text-zinc-500">STATUS: {selectedLabItem.status}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-zinc-400 uppercase">CURRENT FINDING / STATE:</div>
            <p className="text-zinc-700 dark:text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
              {selectedLabItem.currentFindingOrState}
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-zinc-400 uppercase">EXPERIMENTATION STACK:</div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {selectedLabItem.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-1 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
