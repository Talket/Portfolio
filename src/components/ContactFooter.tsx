import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Phone, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'dobariyatalket@gmail.com';
  const phone = '+91 8780222694';
  const github = 'https://github.com/Talket';
  const linkedin = 'https://linkedin.com/in/talket-dobariya/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#07080c] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Call to Action Banner */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
            <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
            DISPATCH & COLLABORATION
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-zinc-900 dark:text-white leading-[1.08]">
            LET’S TURN THE NEXT IDEA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-zinc-400">
              INTO A WORKING SYSTEM.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal">
            Currently exploring full-time AI/ML engineering roles, high-velocity startup teams, research labs, 
            and ambitious software systems. Always interested in building things that survive outside the development sandbox.
          </p>
        </div>

        {/* Contact Action Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {/* Copy Email Button */}
          <div className="p-6 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">DIRECT DISPATCH</div>
              <div className="text-base font-bold font-mono text-zinc-900 dark:text-white mt-1 truncate">
                {email}
              </div>
            </div>
            <button
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-[#e11d48] hover:bg-[#be123c] text-white shadow-md shadow-[#e11d48]/15'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>EMAIL COPIED ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* LinkedIn Connect */}
          <a
            id="contact-linkedin-link"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 space-y-3 flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">NETWORK</div>
              <div className="text-base font-bold font-display text-zinc-900 dark:text-white mt-1 flex items-center justify-between">
                <span>Talket Dobariya</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#e11d48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <Linkedin className="w-4 h-4 text-sky-500" />
              <span>linkedin.com/in/talket-dobariya</span>
            </div>
          </a>

          {/* GitHub Repos */}
          <a
            id="contact-github-link"
            href={github}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 space-y-3 flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">CODE REPOSITORIES</div>
              <div className="text-base font-bold font-display text-zinc-900 dark:text-white mt-1 flex items-center justify-between">
                <span>github.com/Talket</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#e11d48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <Github className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
              <span>Open Source Systems & Models</span>
            </div>
          </a>
        </div>

        {/* Telemetry info row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
          <div>
            PHONE: <span className="text-zinc-800 dark:text-zinc-300 font-semibold">{phone}</span>
          </div>
          <div>
            LOCATION: <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Surat, Gujarat, India</span>
          </div>
          <div>
            STATUS: <span className="text-emerald-500 font-semibold">Available for AI/ML Roles</span>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
            <span className="font-bold text-zinc-800 dark:text-zinc-200">LET'S BUILD SOMETHING WORTH DEPLOYING.</span>
          </div>
          <div>
            © 2026 Talket Dobariya. Built with React, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};
