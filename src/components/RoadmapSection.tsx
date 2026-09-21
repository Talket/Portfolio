import React from 'react';
import { roadmapItems } from '../data/roadmap';
import { Compass, Sparkles, ArrowRight, Layers } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <Compass className="w-4 h-4 text-[#e11d48]" />
          FUTURE SYSTEM DIRECTIONS
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          WHAT I WANT TO BUILD NEXT
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          The next frontiers of engineering: on-device vision-language models, deterministic agent tool-routing,
          and sub-millisecond inference acceleration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmapItems.map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#e11d48] font-bold uppercase">{item.category}</span>
                <span className="text-zinc-500">{item.targetTimeline}</span>
              </div>

              <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {item.coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                [{item.status}]
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
