import React, { useState, useMemo } from 'react';
import { FilterCategory, ProjectItem } from '../types';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Layers, Terminal, Sparkles } from 'lucide-react';

interface BuildLogProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const BuildLog: React.FC<BuildLogProps> = ({ onOpenCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('ALL');

  const filterOptions: FilterCategory[] = [
    'ALL',
    'AI / ML',
    'FULL STACK',
    'MOBILE',
    'ALGORITHMS',
    'BUILDING',
    'PLANNED'
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'ALL') return projectsData;
    if (selectedFilter === 'BUILDING') return projectsData.filter((p) => p.status === 'BUILDING');
    if (selectedFilter === 'PLANNED') return projectsData.filter((p) => p.status === 'PLANNED');
    if (selectedFilter === 'AI / ML') return projectsData.filter((p) => p.category === 'AI / ML' || p.category === 'Generative AI' || p.category === 'Computer Vision');
    if (selectedFilter === 'FULL STACK') return projectsData.filter((p) => p.category === 'Full Stack');
    if (selectedFilter === 'MOBILE') return projectsData.filter((p) => p.category === 'Mobile');
    if (selectedFilter === 'ALGORITHMS') return projectsData.filter((p) => p.category === 'Algorithms');
    return projectsData;
  }, [selectedFilter]);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header & Philosophy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
            <Terminal className="w-4 h-4 text-[#e11d48]" />
            THE BUILD LOG // VERIFIED PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
            PROJECT UNIVERSE
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Every project represents a solved problem — from commercial restaurant POS operations and live Google Play deployments to diffusion models and edge OCR servers.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
          <div>
            SHOWING <span className="font-bold text-zinc-900 dark:text-white">{filteredProjects.length}</span> OF{' '}
            <span className="font-bold">{projectsData.length}</span> SYSTEMS
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 overflow-x-auto">
        {filterOptions.map((filter) => {
          const isActive = selectedFilter === filter;
          return (
            <button
              key={filter}
              id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        ))}
      </div>
    </section>
  );
};
