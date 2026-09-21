import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { 
  ArrowUpRight, 
  Github, 
  Play, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Sliders,
  ChevronRight,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  // Diffusion simulation state for DDPM
  const [diffusionStep, setDiffusionStep] = useState(0); // 0 = Clean Digit, 1000 = Pure Noise
  // Interactive counter for After12th
  const [userCount, setUserCount] = useState(500);
  // Interactive sorting array for visualizer
  const [sortStep, setSortStep] = useState(0);
  const sampleArray = [42, 17, 8, 29, 51, 3];

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'BUILT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            BUILT
          </span>
        );
      case 'BUILDING':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            BUILDING
          </span>
        );
      case 'EXPERIMENT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            EXPERIMENT
          </span>
        );
      case 'PLANNED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            PLANNED
          </span>
        );
    }
  };

  return (
    <div className="gpu-card flex flex-col justify-between rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 shadow-md hover:shadow-xl transition-all duration-300 smooth-spring overflow-hidden p-6 sm:p-8 space-y-6">
      
      {/* Top Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {getStatusBadge(project.status)}
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            {project.year}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-white flex items-center justify-between">
            <span>{project.title}</span>
            {project.featured && (
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#e11d48]/10 text-[#e11d48] border border-[#e11d48]/20">
                FLAGSHIP
              </span>
            )}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 font-normal mt-1 leading-relaxed">
            {project.oneLiner}
          </p>
        </div>
      </div>

      {/* Interactive Visual Playground / Architecture Preview */}
      <div className="rounded-xl bg-zinc-100/90 dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800/80 p-4 font-mono text-xs overflow-hidden">
        {/* Project 1: RESTRO_POS Architecture Flow */}
        {project.id === 'restro_pos' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">REAL-TIME RESTAURANT DATAFLOW</span>
              <span className="text-emerald-500 font-medium">REVENUE ENGINE</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center text-[10px]">
              {['ORDER', 'WAITER', 'KDS / KOT', 'BILLING', 'INVENTORY', 'OWNER'].map((node, i) => (
                <div key={node} className="p-2 rounded bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
                  <div className="font-bold text-zinc-800 dark:text-zinc-200">{node}</div>
                  <div className="text-[8px] text-zinc-400">STEP 0{i+1}</div>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-zinc-500 flex items-center justify-between pt-1">
              <span>Sync Protocol: Firestore Listeners</span>
              <span className="text-[#e11d48]">Latency: &lt;250ms</span>
            </div>
          </div>
        )}

        {/* Project 2: AFTER12TH Mobile UI & User Counter */}
        {project.id === 'after12th' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">GOOGLE PLAY DEPLOYMENT</span>
              <span className="text-sky-400 font-medium">500+ ACTIVE USERS</span>
            </div>
            <div className="flex items-center justify-around py-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white font-display">
                  {userCount}+
                </div>
                <div className="text-[10px] text-zinc-500">Play Store Installs</div>
              </div>
              <div className="h-8 w-px bg-zinc-300 dark:bg-zinc-800" />
              <div className="text-center">
                <div className="text-sm font-bold text-emerald-500">Cloudflare AI</div>
                <div className="text-[10px] text-zinc-500">Stream-to-Career Engine</div>
              </div>
            </div>
            <div className="text-[10px] text-zinc-400 text-center">
              Flutter Native Mobile • Personalized Career Roadmaps
            </div>
          </div>
        )}

        {/* Project 3: DDPM Diffusion Interactive Noise Slider */}
        {project.id === 'ddpm_image_generation' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">MARKOV REVERSE DIFFUSION</span>
              <span className="text-purple-400 font-medium">1,000 TIMESTEPS</span>
            </div>
            <div className="flex items-center gap-4">
              {/* Digit preview box that changes with slider */}
              <div className="w-16 h-16 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                {/* Generative digit rendering representation */}
                <div
                  className="font-bold text-3xl font-display text-white transition-opacity duration-200"
                  style={{
                    filter: `blur(${diffusionStep / 100}px)`,
                    opacity: 1 - diffusionStep / 1200,
                  }}
                >
                  7
                </div>
                {/* Noise overlay */}
                <div
                  className="absolute inset-0 bg-zinc-500 mix-blend-difference pointer-events-none"
                  style={{
                    opacity: diffusionStep / 1000,
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '4px 4px',
                  }}
                />
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span>Timestep: t={1000 - diffusionStep}</span>
                  <span className="text-[#e11d48]">MSE: ~0.039</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={diffusionStep}
                  onChange={(e) => setDiffusionStep(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-[#e11d48]"
                />
                <div className="flex justify-between text-[8px] text-zinc-500">
                  <span>CLEAN (t=0)</span>
                  <span>GAUSSIAN NOISE (t=1000)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 4: Sorting & Algorithms Visualizer */}
        {project.id === 'sorting_visualizer' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">C++ ALGORITHMIC ENGINE</span>
              <span className="text-sky-400 font-medium">12+ ALGORITHMS</span>
            </div>
            <div className="flex items-end justify-between h-14 px-2 py-1 bg-zinc-200/40 dark:bg-zinc-900 rounded-lg">
              {sampleArray.map((val, idx) => {
                const isPivot = idx === 0;
                const isComparing = idx === (sortStep % 5) + 1;
                return (
                  <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                    <span className="text-[8px] text-zinc-500">{val}</span>
                    <div
                      className={`w-4 sm:w-6 rounded-t transition-all ${
                        isPivot
                          ? 'bg-[#e11d48]'
                          : isComparing
                          ? 'bg-amber-400 animate-pulse'
                          : 'bg-zinc-400 dark:bg-zinc-700'
                      }`}
                      style={{ height: `${(val / 55) * 40}px` }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-500">
              <span>QuickSort Pivot: [42]</span>
              <button
                onClick={() => setSortStep((prev) => prev + 1)}
                className="text-[#e11d48] font-bold hover:underline cursor-pointer"
              >
                SIMULATE STEP →
              </button>
            </div>
          </div>
        )}

        {/* Project 5: Waste Classification */}
        {project.id === 'waste_classification' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">CNN CLASSIFICATION PIPELINE</span>
              <span className="text-emerald-500 font-medium">AUTOMATED SORTING</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-center text-[9px] pt-1">
              <div className="p-1.5 rounded bg-zinc-200/50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
                RAW IMAGE
              </div>
              <div className="p-1.5 rounded bg-zinc-200/50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
                CONV2D
              </div>
              <div className="p-1.5 rounded bg-zinc-200/50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
                FEATURE MAP
              </div>
              <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                ORGANIC / RECYCLE
              </div>
            </div>
          </div>
        )}

        {/* Project 6: FarmHouse Chalo */}
        {project.id === 'farmhouse_chalo' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-1 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">OPERATIONAL WORKFLOW</span>
              <span className="text-amber-500 font-medium">LIVE VENUE</span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-center pt-1">
              {['TABLE', 'ORDER', 'KOT', 'KITCHEN', 'BILL', 'CLOSE'].map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">{step}</span>
                  {idx < 5 && <span className="text-zinc-400">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Key Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-200 dark:border-zinc-800/80">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="font-mono">
              <div className="text-[10px] text-zinc-500 uppercase">{m.label}</div>
              <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{m.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#e11d48] dark:hover:bg-[#e11d48] dark:hover:text-white font-mono text-xs font-semibold tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              title="View Source on GitHub"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <span
              title="Private / Client Enterprise Repo"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/50 text-zinc-400 dark:text-zinc-600 cursor-not-allowed"
            >
              <Github className="w-4 h-4" />
            </span>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              title="Google Play Store Link"
              className="p-2 rounded-lg border border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
