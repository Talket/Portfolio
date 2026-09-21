import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'INITIALIZING SYSTEM ARCHITECTURE...',
    'CONNECTING EDGE PROCESSORS & TENSORS...',
    'MOUNTING PRODUCTION CASE STUDIES...',
    'TALKET DOBARIYA // ONLINE'
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStepIndex(1), 180);
    const timer2 = setTimeout(() => setStepIndex(2), 380);
    const timer3 = setTimeout(() => setStepIndex(3), 580);
    const timerEnd = setTimeout(() => onComplete(), 850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerEnd);
    };
  }, [onComplete]);

  return (
    <div
      id="boot-loading-screen"
      className="fixed inset-0 z-50 bg-[#0b0c10] flex flex-col items-center justify-center p-6 text-zinc-100 font-mono transition-opacity duration-300"
    >
      <div className="w-full max-w-md space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between text-xs text-zinc-500 pb-2 border-b border-zinc-800">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-ping" />
            AI/ML KERNEL BOOT
          </span>
          <span>v2.6.0</span>
        </div>

        {/* Current status terminal line */}
        <div className="h-10 flex items-center text-sm sm:text-base font-bold text-zinc-200">
          <span className="text-[#e11d48] mr-2">&gt;</span>
          <span>{steps[stepIndex]}</span>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#e11d48] transition-all duration-200"
            style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
          <span>SURAT • LPU • 8.87 CGPA</span>
          <button
            onClick={onComplete}
            className="text-zinc-400 hover:text-white underline cursor-pointer"
          >
            SKIP [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
