import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Cpu, Search, CheckCircle2, Layers } from 'lucide-react';

export const SkillsSystem: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const filterTags = ['ALL', 'Built with', 'Used in', 'Worked on', 'Explored'];

  const getRelationshipBadge = (rel: string) => {
    switch (rel) {
      case 'Built with':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Used in':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'Worked on':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Explored':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
            <Cpu className="w-4 h-4 text-[#e11d48]" />
            CONTEXTUAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
            TECHNICAL REPERTOIRE
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            No arbitrary percentages or fake proficiency bars. Every skill is grounded in how and where it was applied — in live products, algorithms, or research pipelines.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const matchingSkills = cat.skills.filter((s) => {
            const matchesTag = selectedTag === 'ALL' || s.relationship === selectedTag;
            const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.projectOrContext.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesTag && matchesQuery;
          });

          if (matchingSkills.length === 0) return null;

          return (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold font-display text-base text-zinc-900 dark:text-white">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">
                  {matchingSkills.length} TOOLS
                </span>
              </div>

              <div className="space-y-3">
                {matchingSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full border font-semibold ${getRelationshipBadge(
                          skill.relationship
                        )}`}
                      >
                        {skill.relationship}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 font-mono leading-relaxed">
                      {skill.projectOrContext}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
