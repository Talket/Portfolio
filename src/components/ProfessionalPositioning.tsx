import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Server, Smartphone, Binary, ArrowUpRight } from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  technologies: string[];
  description: string;
  proofProjects: string;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'INTELLIGENT SYSTEMS',
    subtitle: 'From mathematical models to active inference',
    icon: <BrainCircuit className="w-6 h-6 text-[#e11d48]" />,
    technologies: ['Machine Learning', 'Computer Vision', 'Deep Learning (CNN)', 'DDPM Generative Diffusion', 'Model Evaluation (ROC-AUC/SHAP)'],
    description: 'Constructing neural architectures that generalize cleanly. Implementing forward and reverse Markov diffusion chains, convolutional image feature classifiers, and dual-LLM reasoning pipelines that avoid hallucinations while discovering latent entity relationships.',
    proofProjects: 'DDPM Generative AI • Waste Classification CNN • ML Internships'
  },
  {
    number: '02',
    title: 'PRODUCTION SOFTWARE',
    subtitle: 'Systems engineered for operational durability',
    icon: <Server className="w-6 h-6 text-sky-400" />,
    technologies: ['Full-Stack React & TypeScript', 'Firebase Firestore', 'Role-Based Access (RBAC)', 'REST APIs', 'Multi-tenant Schemas'],
    description: 'Building multi-role operational engines with atomic database transactions, optimistic UI updates, and sub-250ms synchronization speeds. Architectures that do not corrupt financial records or lose uncommitted tickets when network conditions fluctuate.',
    proofProjects: 'RESTRO_POS (Commercial Revenue) • Live Operational Tooling'
  },
  {
    number: '03',
    title: 'PRODUCT ENGINEERING',
    subtitle: 'Closing the gap between engineering and human adoption',
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
    technologies: ['Flutter & Dart', 'Google Play Store Releases', 'Real User Acquisition', 'Operational Workflows', 'Thermal KOT Printing'],
    description: 'Transforming technical complexity into minimum-tap, tactile mobile workflows. Taking ideas from the first commit through store compliance to 500+ active installs and live restaurant dining rooms with waiters, kitchens, and owners.',
    proofProjects: 'After12th (500+ Users on Google Play) • FarmHouse Chalo'
  },
  {
    number: '04',
    title: 'COMPUTER SCIENCE',
    subtitle: 'Rigorous foundational problem solving',
    icon: <Binary className="w-6 h-6 text-emerald-400" />,
    technologies: ['C++ & Python', '500+ LeetCode DSA', '5★ HackerRank', 'DBMS & Normalization', 'Docker & OS Concepts'],
    description: 'Grounded in timeless computational mechanics: graph shortest-paths (Dijkstra), partition trees, recursive call stack tracing, relational ACID semantics, memory management, and reproducible Docker containerization.',
    proofProjects: 'Sorting & Algorithm Visualizer (12+ Algos) • 500+ LeetCode'
  }
];

export const ProfessionalPositioning: React.FC<{ onSelectPillar?: (title: string) => void }> = () => {
  return (
    <section id="positioning" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
          ARCHITECTURAL DOMAINS
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          WHAT I BUILD
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Not an arbitrary list of keywords. Four structured pillars where algorithmic rigor meets practical software execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {pillars.map((pillar) => (
          <div
            key={pillar.number}
            className="p-8 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 shadow-sm">
                  {pillar.icon}
                </div>
                <span className="text-2xl font-mono font-bold text-zinc-400 dark:text-zinc-600 group-hover:text-[#e11d48] transition-colors">
                  {pillar.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-900 dark:text-white">
                  {pillar.title}
                </h3>
                <div className="text-xs font-mono text-[#e11d48] mt-1 font-medium">
                  // {pillar.subtitle}
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="flex flex-wrap gap-1.5">
                {pillar.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-xs font-mono text-zinc-500 pt-1 flex items-center justify-between">
                <span className="text-zinc-400 dark:text-zinc-500">Representative Work:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{pillar.proofProjects}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
