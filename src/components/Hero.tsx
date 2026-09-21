import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Cpu, Sparkles, Layers, ShieldCheck, Terminal, Compass } from 'lucide-react';

interface NodePoint {
  id: string;
  name: string;
  sub: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  connections: string[];
}

export const Hero: React.FC<{ onExploreWork: () => void; onOpenResume: () => void }> = ({
  onExploreWork,
  onOpenResume,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const activeNodeRef = useRef<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;

    const basePositions: { id: string; name: string; sub: string; xRatio: number; yRatio: number; conn: string[] }[] = [
      { id: 'ai', name: 'AI / ML', sub: 'CNN & Diffusion', xRatio: 0.22, yRatio: 0.28, conn: ['data', 'code'] },
      { id: 'code', name: 'CODE', sub: 'C++ & Python', xRatio: 0.50, yRatio: 0.18, conn: ['ai', 'data', 'product'] },
      { id: 'data', name: 'DATA', sub: 'Tensors & Pipelines', xRatio: 0.28, yRatio: 0.72, conn: ['ai', 'product', 'deployment'] },
      { id: 'product', name: 'PRODUCT', sub: 'React & Flutter', xRatio: 0.75, yRatio: 0.36, conn: ['code', 'deployment'] },
      { id: 'deployment', name: 'DEPLOYMENT', sub: 'Edge Pi & Cloud', xRatio: 0.65, yRatio: 0.80, conn: ['product', 'data'] },
    ];

    let nodes: NodePoint[] = [];

    const initNodes = () => {
      nodes = basePositions.map((p) => ({
        id: p.id,
        name: p.name,
        sub: p.sub,
        x: p.xRatio * width,
        y: p.yRatio * height,
        baseX: p.xRatio * width,
        baseY: p.yRatio * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 28,
        connections: p.conn,
      }));
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height || 650;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Floating subtle particles
    const particleCount = 28;
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }

    let time = 0;
    let isVisible = true;

    // IntersectionObserver to pause rendering when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (canvas) observer.observe(canvas);

    const render = () => {
      if (isVisible) {
        time += 0.016;
        ctx.clearRect(0, 0, width, height);

        // Render background subtle particles
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(225, 29, 72, ${p.alpha * 0.3})`;
          ctx.fill();
        });

        const curMouse = mousePosRef.current;
        const curActive = activeNodeRef.current;

        // Update nodes positions with gentle harmonic orbit & mouse repulsion
        nodes.forEach((node) => {
          const offsetX = Math.sin(time + node.baseX * 0.008) * 6;
          const offsetY = Math.cos(time + node.baseY * 0.008) * 6;
          const targetX = node.baseX + offsetX;
          const targetY = node.baseY + offsetY;

          // Mouse influence
          const dx = curMouse.x - node.x;
          const dy = curMouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 0) {
            const force = (180 - dist) / 180;
            node.x -= (dx / dist) * force * 10;
            node.y -= (dy / dist) * force * 10;
          }

          // Smooth return with fluid damping
          node.x += (targetX - node.x) * 0.06;
          node.y += (targetY - node.y) * 0.06;
        });

        // Draw connection lines
        nodes.forEach((node) => {
          node.connections.forEach((targetId) => {
            const target = nodes.find((n) => n.id === targetId);
            if (!target) return;

            const isHighlighted = curActive === node.id || curActive === target.id;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);

            if (isHighlighted) {
              ctx.strokeStyle = 'rgba(225, 29, 72, 0.75)';
              ctx.lineWidth = 1.8;
            } else {
              ctx.strokeStyle = 'rgba(225, 29, 72, 0.14)';
              ctx.lineWidth = 0.9;
            }
            ctx.stroke();

            // Flowing energy particle along active edges
            const tProgress = (time * 0.5 + node.x * 0.005) % 1;
            const flowX = node.x + (target.x - node.x) * tProgress;
            const flowY = node.y + (target.y - node.y) * tProgress;

            ctx.beginPath();
            ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
            ctx.fillStyle = isHighlighted ? '#f43f5e' : 'rgba(244, 63, 94, 0.45)';
            ctx.fill();
          });
        });

        // Draw nodes
        nodes.forEach((node) => {
          const isHovered = curActive === node.id;
          const distToMouse = Math.hypot(curMouse.x - node.x, curMouse.y - node.y);
          const nearMouse = distToMouse < node.radius + 15;

          // Outer glow circle
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + (isHovered || nearMouse ? 8 : 4), 0, Math.PI * 2);
          ctx.fillStyle = isHovered || nearMouse ? 'rgba(225, 29, 72, 0.14)' : 'rgba(255, 255, 255, 0.015)';
          ctx.fill();

          // Node circle background
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#0b0c10';
          ctx.fill();

          // Node border
          ctx.lineWidth = isHovered || nearMouse ? 2 : 1;
          ctx.strokeStyle = isHovered || nearMouse ? '#e11d48' : 'rgba(255, 255, 255, 0.18)';
          ctx.stroke();

          // Center dot
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = '#e11d48';
          ctx.fill();

          // Node label
          ctx.font = '600 11px var(--font-mono, monospace)';
          ctx.fillStyle = '#f3f4f6';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.name, node.x, node.y - 4);

          // Sub label
          ctx.font = '400 9px var(--font-mono, monospace)';
          ctx.fillStyle = 'rgba(156, 163, 175, 0.8)';
          ctx.fillText(node.sub, node.x, node.y + 9);
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePosRef.current = { x, y };

      const hovered = nodes.find((n) => Math.hypot(n.x - x, n.y - y) <= n.radius + 10);
      activeNodeRef.current = hovered ? hovered.id : null;
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 };
      activeNodeRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Interactive System Canvas Background */}
      <div className="absolute inset-0 pointer-events-none sm:pointer-events-auto">
        <canvas ref={canvasRef} className="w-full h-full block opacity-85" />
      </div>

      {/* Top telemetry ticker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">SYSTEM OPERATIONAL</span>
          <span className="text-zinc-400 dark:text-zinc-600">//</span>
          <span className="hidden sm:inline">5TH SEMESTER • B.TECH CSE (AI/ML)</span>
        </div>
        <div className="flex items-center gap-4">
          <span>CGPA: 8.87 / 10</span>
          <span className="text-zinc-400 dark:text-zinc-600">//</span>
          <span>SURAT, GUJARAT, INDIA</span>
        </div>
      </div>

      {/* Main Hero Statement */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="max-w-4xl space-y-6">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e11d48]/30 bg-[#e11d48]/10 text-xs font-mono text-[#e11d48] tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            AI / MACHINE LEARNING ENGINEERING & SYSTEMS
          </div>

          {/* Master Conceptual Opening */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display text-zinc-900 dark:text-white leading-[1.08]">
            IDEAS ARE CHEAP.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-[#f43f5e] to-zinc-400">
              BUILDING THEM IS THE INTERESTING PART.
            </span>
          </h1>

          {/* Identity statement */}
          <div className="space-y-2 pt-2">
            <div className="text-2xl sm:text-3xl font-semibold text-zinc-800 dark:text-zinc-100 font-display flex items-center gap-3">
              <span>Talket Dobariya</span>
              <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                LPU • Expected 2028
              </span>
            </div>
            <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
              I build intelligent systems, production-oriented applications, and experiments that turn
              technical concepts into usable products.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="px-6 py-3 rounded-lg bg-[#e11d48] hover:bg-[#be123c] text-white font-mono text-sm tracking-wider font-semibold transition-all shadow-lg shadow-[#e11d48]/20 flex items-center gap-2 cursor-pointer group"
            >
              <span>EXPLORE THE BUILD LOG</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              id="hero-jump-building-btn"
              href="#building"
              className="px-5 py-3 rounded-lg border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 font-mono text-sm tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-[#e11d48]" />
              <span>CURRENTLY BUILDING</span>
            </a>

            <button
              id="hero-resume-btn"
              onClick={onOpenResume}
              className="px-5 py-3 rounded-lg border border-transparent hover:border-zinc-300 dark:hover:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-mono text-xs tracking-wider transition-all cursor-pointer"
            >
              [ VIEW RÉSUMÉ ]
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Proof Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-[10px]">DEPLOYED USERS</div>
            <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-baseline gap-1">
              <span>500+</span>
              <span className="text-xs text-[#e11d48] font-normal">Play Store</span>
            </div>
            <div className="text-zinc-500 text-[11px]">After12th Live Android App</div>
          </div>

          <div className="space-y-1">
            <div className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-[10px]">COMMERCIAL IMPACT</div>
            <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-baseline gap-1">
              <span>REVENUE</span>
              <span className="text-xs text-emerald-500 font-normal">Active</span>
            </div>
            <div className="text-zinc-500 text-[11px]">Restro_POS In Commercial Use</div>
          </div>

          <div className="space-y-1">
            <div className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-[10px]">PROBLEM SOLVING</div>
            <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-baseline gap-1">
              <span>500+</span>
              <span className="text-xs text-amber-500 font-normal">LeetCode</span>
            </div>
            <div className="text-zinc-500 text-[11px]">5★ Badges in C++, Py, Java</div>
          </div>

          <div className="space-y-1">
            <div className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-[10px]">AI / ML RESEARCH</div>
            <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-baseline gap-1">
              <span>1,000</span>
              <span className="text-xs text-[#e11d48] font-normal">Steps</span>
            </div>
            <div className="text-zinc-500 text-[11px]">Conditional DDPM Generative AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};
