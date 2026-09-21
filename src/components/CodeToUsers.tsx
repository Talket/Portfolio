import React from 'react';
import { Smartphone, UtensilsCrossed, Users, TrendingUp, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export const CodeToUsers: React.FC = () => {
  return (
    <section id="code-to-users" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <Zap className="w-4 h-4 text-[#e11d48]" />
          THE DEPLOYMENT BENCHMARK
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          FROM CODE TO USERS
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Code is only half the battle. Real engineering tests whether software can survive outside localhost,
          handle frontline operator chaos, and deliver tangible commercial or societal utility.
        </p>
      </div>

      {/* Universal Progression Flow Banner */}
      <div className="p-4 sm:p-6 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 font-mono text-xs overflow-x-auto">
        <div className="flex items-center justify-between min-w-[650px] text-center">
          {['01. IDEA', '02. CODE', '03. TEST', '04. DEPLOY', '05. USERS & REVENUE'].map((stage, idx) => (
            <React.Fragment key={stage}>
              <div className={`p-3 rounded-xl border ${idx === 4 ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500 font-bold' : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200'}`}>
                {stage}
              </div>
              {idx < 4 && <ArrowRight className="w-4 h-4 text-[#e11d48]" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Dual Real-World Proof Case Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Case 1: After12th */}
        <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-sky-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                  CONSUMER MOBILE APP
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold">
                GOOGLE PLAY STORE
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-white">
                AFTER12TH
              </h3>
              <p className="text-xs font-mono text-zinc-500 mt-0.5">
                AI-Assisted Academic Career Guidance for Indian High School Graduates
              </p>
            </div>

            {/* Trajectory */}
            <div className="space-y-2 font-mono text-xs pt-2">
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="text-zinc-700 dark:text-zinc-300 font-bold">TRAJECTORY:</span>
                <span>IDEA → FLUTTER APP → PLAY STORE COMPLIANCE → 500+ USERS</span>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Not a school demo. Published and maintained on the Google Play Store with real rating retention. 
              Integrated Cloudflare Workers AI edge processing to provide instant stream-specific roadmaps without cloud server latency.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-100 dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 flex items-center justify-between font-mono">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">ACTIVE INSTALL BASE</div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white font-display">500+</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-zinc-500 uppercase">PLATFORM TARGET</div>
              <div className="text-xs text-sky-400 font-bold">Android (Production)</div>
            </div>
          </div>
        </div>

        {/* Case 2: Restro_POS */}
        <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-[#e11d48]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#e11d48]">
                  COMMERCIAL FULL STACK
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">
                REVENUE GENERATING
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-white">
                RESTRO_POS
              </h3>
              <p className="text-xs font-mono text-zinc-500 mt-0.5">
                Multi-Branch Restaurant Operating System & Inventory Ledger
              </p>
            </div>

            {/* Trajectory */}
            <div className="space-y-2 font-mono text-xs pt-2">
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="text-zinc-700 dark:text-zinc-300 font-bold">TRAJECTORY:</span>
                <span>IDEA → SYSTEM ARCHITECTURE → CLIENT DEPLOYMENT → LIVE REVENUE</span>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Operating in live dining venues in Gujarat. Handles real monetary transactions, table turnovers, 
              kitchen printing, and inventory depletion during peak dinner rushes where any failure has immediate commercial cost.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-100 dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 flex items-center justify-between font-mono">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">COMMERCIAL STATUS</div>
              <div className="text-2xl font-bold text-emerald-500 font-display">ACTIVE</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-zinc-500 uppercase">BUSINESS OUTCOME</div>
              <div className="text-xs text-zinc-900 dark:text-zinc-100 font-bold">Revenue Generating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
