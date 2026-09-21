import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="case-study-backdrop"
      className="fixed inset-0 z-50 bg-[#0b0c10]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="case-study-dialog"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#0f1118] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-10 space-y-8 my-auto text-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#e11d48]/15 text-[#e11d48] border border-[#e11d48]/30 uppercase">
                {project.status} // {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">{project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal">
              {project.oneLiner}
            </p>
          </div>

          <button
            id="close-case-study-btn"
            onClick={onClose}
            aria-label="Close case study"
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick telemetry stats if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="font-mono space-y-0.5">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{m.label}</div>
                <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Section 1: Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 space-y-2">
            <div className="text-xs font-mono font-bold text-[#e11d48] uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              THE REAL-WORLD PROBLEM
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              ENGINEERED SOLUTION
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Section 2: What Talket Personally Built */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#e11d48] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#e11d48]" />
            WHAT TALKET PERSONALLY ENGINEERED
          </div>
          <ul className="space-y-2.5">
            {project.whatTalketBuilt.map((item, idx) => (
              <li key={idx} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                <span className="text-[#e11d48] font-mono font-bold text-xs mt-0.5">0{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Architecture Sequence */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
            <Layers className="w-4 h-4 text-zinc-400" />
            END-TO-END ARCHITECTURE
          </div>
          <div className="space-y-2">
            {project.architecture.map((arch) => (
              <div
                key={arch.step}
                className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#e11d48]/15 text-[#e11d48] font-bold flex items-center justify-center text-[10px]">
                    {arch.step}
                  </span>
                  <div>
                    <div className="font-bold text-zinc-800 dark:text-zinc-200">{arch.title}</div>
                    <div className="text-zinc-500 font-sans text-xs">{arch.description}</div>
                  </div>
                </div>
                {arch.tech && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 self-start sm:self-center">
                    {arch.tech}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Technical Challenges & Lessons Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">
              // TECHNICAL OBSTACLES SOLVED
            </div>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              {project.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
              // LESSONS LEARNED & TAKEAWAYS
            </div>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              {project.lessonsLearned.map((l, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-400">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 5: Future Improvements & Deployment Info */}
        <div className="p-4 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs font-mono">
          <div className="text-zinc-500 uppercase tracking-widest text-[10px]">DEPLOYMENT & STATUS</div>
          <p className="text-zinc-800 dark:text-zinc-200 font-sans">{project.deploymentInfo}</p>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 text-xs font-mono flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-zinc-500 px-3 py-2 rounded border border-zinc-200 dark:border-zinc-800">
                [ Private / Client Confidential ]
              </span>
            )}

            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>GOOGLE PLAY</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-mono text-xs font-semibold cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
