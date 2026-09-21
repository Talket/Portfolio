import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Code2, 
  Network, 
  Activity, 
  BrainCircuit, 
  Smartphone, 
  Server, 
  Users, 
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Terminal
} from 'lucide-react';

interface StoryScene {
  step: number;
  title: string;
  subtitle: string;
  tagline: string;
  techTag: string;
  description: string;
  icon: React.ReactNode;
  visualType: 'idea' | 'code' | 'architecture' | 'dataflow' | 'aimodel' | 'interface' | 'deployment' | 'impact';
}

const scenes: StoryScene[] = [
  {
    step: 1,
    title: 'THE ABSTRACT IDEA',
    subtitle: 'Deconstructing the problem space',
    tagline: 'Where intuition meets formal formulation',
    techTag: 'PROBLEM FORMULATION',
    description: 'Every system begins with an unresolved tension in the physical world — whether it is restaurant waitstaff dropping paper tickets, high school students confused about post-12th trajectories, or criminal investigators drowning in handwritten dossiers.',
    icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
    visualType: 'idea'
  },
  {
    step: 2,
    title: 'THE ALGORITHMIC CORE',
    subtitle: 'Translating concepts into mathematical structures',
    tagline: '500+ LeetCode foundations & C++ performance',
    techTag: 'C++ / PYTHON / DSA',
    description: 'Before jumping to UI, systems require deterministic state transitions. Writing graph traversals, U-Net residual convolutions, Markov diffusion steps, and atomic database transaction rules that do not fail under concurrency.',
    icon: <Code2 className="w-5 h-5 text-sky-400" />,
    visualType: 'code'
  },
  {
    step: 3,
    title: 'TOPOLOGY & ARCHITECTURE',
    subtitle: 'Decoupled services and distributed components',
    tagline: 'Client • Edge Gateway • Central Store • Reasoning Engine',
    techTag: 'SYSTEM DESIGN',
    description: 'Connecting discrete computational layers: edge Raspberry Pi nodes running FastAPI for OCR, client frontends with sub-second optimistic updates, and normalized schema boundaries that isolate sensitive operational data.',
    icon: <Network className="w-5 h-5 text-[#e11d48]" />,
    visualType: 'architecture'
  },
  {
    step: 4,
    title: 'LIVE DATA PIPELINES',
    subtitle: 'Streams, state machines & event propagation',
    tagline: 'Sub-250ms synchronization & real-time telemetry',
    techTag: 'EVENT-DRIVEN FLOWS',
    description: 'Data does not sit still. Reactive Firestore document snapshots stream between waiters and kitchen printers; image tensors flow through normalization pipelines; crime reports pass through human-in-the-loop validation checkpoints.',
    icon: <Activity className="w-5 h-5 text-emerald-400" />,
    visualType: 'dataflow'
  },
  {
    step: 5,
    title: 'THE AI REASONING LAYER',
    subtitle: 'Latent feature representations & inference',
    tagline: 'CNN vision, U-Net diffusion & dual-LLM entity resolution',
    techTag: 'TENSORFLOW / LLM REASONING',
    description: 'Machine learning acts as an intelligent reasoning accelerator: evaluating 1,000 diffusion timesteps to reconstruct digits from noise, classifying municipal waste into organic vs recyclable, and extracting implicit syndicate links without hallucinations.',
    icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
    visualType: 'aimodel'
  },
  {
    step: 6,
    title: 'USABLE INTERFACES EMERGE',
    subtitle: 'Minimum-tap ergonomics for frontline operators',
    tagline: 'Flutter native mobile & React enterprise dashboards',
    techTag: 'FLUTTER / REACT / TYPESCRIPT',
    description: 'Algorithms are useless if users cannot operate them under pressure. Crafting tactile mobile cards, color-coded restaurant table matrices, and fluid entity graphs that translate complex math into instant human comprehension.',
    icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
    visualType: 'interface'
  },
  {
    step: 7,
    title: 'DEPLOYMENT & ORCHESTRATION',
    subtitle: 'Leaving the comfort of localhost',
    tagline: 'Docker containers, edge daemons & Google Play releases',
    techTag: 'DOCKER / PI / CLOUD',
    description: 'Packaging code for the real world: Dockerizing C++ visualization binaries, deploying persistent background workers on dedicated Raspberry Pi edge servers, and publishing production APKs to Google Play Console.',
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    visualType: 'deployment'
  },
  {
    step: 8,
    title: 'REAL USERS & COMMERCIAL IMPACT',
    subtitle: 'Software that survives outside development',
    tagline: '500+ active mobile students & revenue-generating operations',
    techTag: 'LIVE COMMERCIAL ADOPTION',
    description: 'The ultimate benchmark of an engineer: software in active commercial service. Restro_POS processing live orders and billing in Gujarat restaurants; After12th guiding 500+ students on their academic journey.',
    icon: <Users className="w-5 h-5 text-emerald-400" />,
    visualType: 'impact'
  }
];

export const ScrollStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Auto-play preview simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev >= scenes.length ? 1 : prev + 1));
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentScene = scenes[activeStep - 1];

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#0c0e14]/50"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#e11d48] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
              SIGNATURE INTERACTIVE PIPELINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white mt-2">
              THE EVOLUTION OF A SYSTEM
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mt-1">
              Scroll or scrub through the progression that transforms an abstract concept into deployed software.
            </p>
          </div>

          {/* Player controls */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-[#e11d48] transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#e11d48]" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
              <span>{isPlaying ? 'PAUSE SCENE' : 'AUTOPLAY SEQUENCE'}</span>
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setActiveStep(1);
              }}
              title="Reset to Scene 01"
              className="p-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:text-[#e11d48] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Step Scrubber Bar */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {scenes.map((s) => {
            const isActive = s.step === activeStep;
            const isPast = s.step < activeStep;
            return (
              <button
                key={s.step}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStep(s.step);
                }}
                className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer font-mono ${
                  isActive
                    ? 'border-[#e11d48] bg-[#e11d48]/10 text-[#e11d48] shadow-md shadow-[#e11d48]/10'
                    : isPast
                    ? 'border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-zinc-700 dark:text-zinc-300'
                    : 'border-transparent bg-zinc-200/50 dark:bg-zinc-900/20 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold">0{s.step}</span>
                  {isPast ? <CheckCircle2 className="w-3 h-3 text-emerald-500" /> : null}
                </div>
                <div className="text-[10px] truncate mt-1 uppercase font-medium">
                  {s.title.replace('THE ', '')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Stage: Two-Column Interactive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
          
          {/* Left: Explanatory Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider font-semibold uppercase bg-[#e11d48]/15 text-[#e11d48] border border-[#e11d48]/30">
                SCENE 0{currentScene.step} OF 08
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {currentScene.techTag}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-4xl font-bold font-display text-zinc-900 dark:text-white leading-tight">
                {currentScene.title}
              </h3>
              <p className="text-sm font-mono text-[#e11d48] mt-1 font-medium">
                // {currentScene.subtitle}
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              {currentScene.description}
            </p>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
              <div className="text-xs font-mono text-zinc-500">
                CORE MOTIF: <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{currentScene.tagline}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  disabled={activeStep <= 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-2 py-1 text-xs font-mono rounded border border-zinc-300 dark:border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#e11d48]"
                >
                  PREV
                </button>
                <button
                  disabled={activeStep >= scenes.length}
                  onClick={() => setActiveStep((prev) => Math.min(scenes.length, prev + 1))}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e11d48] dark:hover:bg-[#e11d48] dark:hover:text-white transition-colors"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Animated Simulation Canvas / Graphic */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800/90 p-6 overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Scene 1: Abstract Idea */}
              {activeStep === 1 && (
                <motion.div
                  key="scene-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#e11d48]/40 animate-spin flex items-center justify-center" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lightbulb className="w-10 h-10 text-amber-400" />
                    </div>
                  </div>
                  <div className="space-y-2 max-w-md">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">UNCERTAINTY TO SPECIFICATION</div>
                    <div className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                      From Friction to Computational Architecture
                    </div>
                    <div className="text-xs font-mono text-zinc-500 bg-zinc-200/50 dark:bg-zinc-900 p-3 rounded-lg border border-zinc-300 dark:border-zinc-800 text-left space-y-1">
                      <div><span className="text-[#e11d48]">?</span> Real-world pain point identified</div>
                      <div><span className="text-sky-400">→</span> Formal problem bounds defined</div>
                      <div><span className="text-emerald-400">✓</span> Target latency & operational user profile chosen</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Scene 2: Code Core */}
              {activeStep === 2 && (
                <motion.div
                  key="scene-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full font-mono text-xs space-y-3"
                >
                  <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-zinc-300 dark:border-zinc-800">
                    <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                      <Code2 className="w-3.5 h-3.5 text-sky-400" /> core_pipeline.cpp
                    </span>
                    <span className="text-[10px]">C++20 / NUMERICAL KERNEL</span>
                  </div>
                  <div className="bg-zinc-900 text-zinc-200 p-4 rounded-lg space-y-1.5 shadow-inner border border-zinc-800 overflow-x-auto">
                    <p><span className="text-purple-400">template</span> &lt;<span className="text-sky-300">typename</span> Tensor&gt;</p>
                    <p><span className="text-emerald-400">void</span> <span className="text-amber-300">denoise_step</span>(Tensor& x_t, <span className="text-sky-300">int</span> timestep) &#123;</p>
                    <p className="pl-4 text-zinc-400">// Sinusoidal time embedding & beta schedule</p>
                    <p className="pl-4">Tensor eps_pred = unet_backbone.<span className="text-sky-300">forward</span>(x_t, timestep);</p>
                    <p className="pl-4 text-emerald-300">x_t = (1.0 / sqrt(alpha_t)) * (x_t - (beta_t / sqrt(1 - alpha_hat)) * eps_pred);</p>
                    <p className="pl-4 text-zinc-400">// Atomic transaction verification</p>
                    <p className="pl-4"><span className="text-purple-400">assert</span>(validate_stability(x_t));</p>
                    <p>&#125;</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span>Complexity: O(N log N) / O(1) Memory</span>
                    <span className="text-emerald-400">Deterministic Execution</span>
                  </div>
                </motion.div>
              )}

              {/* Scene 3: Topology */}
              {activeStep === 3 && (
                <motion.div
                  key="scene-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center justify-center space-y-4"
                >
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">DISTRIBUTED TOPOLOGY</div>
                  <div className="w-full max-w-md grid grid-cols-3 gap-3 text-center font-mono text-xs">
                    <div className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1">
                      <Smartphone className="w-5 h-5 mx-auto text-indigo-400" />
                      <div className="font-bold text-zinc-800 dark:text-zinc-200">CLIENT</div>
                      <div className="text-[10px] text-zinc-500">Flutter / React</div>
                    </div>
                    <div className="p-3 rounded-lg border border-[#e11d48]/40 bg-[#e11d48]/10 space-y-1 shadow-md shadow-[#e11d48]/10">
                      <Server className="w-5 h-5 mx-auto text-[#e11d48]" />
                      <div className="font-bold text-[#e11d48]">EDGE PI</div>
                      <div className="text-[10px] text-zinc-400">FastAPI OCR/HTR</div>
                    </div>
                    <div className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1">
                      <Network className="w-5 h-5 mx-auto text-purple-400" />
                      <div className="font-bold text-zinc-800 dark:text-zinc-200">CLOUD/DB</div>
                      <div className="text-[10px] text-zinc-500">Firestore & Workers</div>
                    </div>
                  </div>
                  {/* Connecting bus visual */}
                  <div className="w-full max-w-md h-1 bg-gradient-to-r from-indigo-500 via-[#e11d48] to-purple-500 rounded-full animate-pulse" />
                  <div className="text-xs font-mono text-zinc-500 text-center">
                    Zero single point of failure • Resilient local caching & offline sync
                  </div>
                </motion.div>
              )}

              {/* Scene 4: Dataflow */}
              {activeStep === 4 && (
                <motion.div
                  key="scene-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full space-y-3 font-mono text-xs"
                >
                  <div className="text-zinc-500 text-xs flex items-center justify-between pb-2 border-b border-zinc-300 dark:border-zinc-800">
                    <span className="text-zinc-800 dark:text-zinc-200 font-bold">STREAM TELEMETRY MONITOR</span>
                    <span className="text-emerald-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> LIVE
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { channel: 'RESTRO_POS // ORDERS', latency: '42ms', status: 'ACKNOWLEDGED', color: 'text-sky-400' },
                      { channel: 'AFTER12TH // AI_STREAM', latency: '180ms', status: 'STREAMING', color: 'text-emerald-400' },
                      { channel: 'CRIMINAL_NET // OCR_INGEST', latency: '310ms', status: 'PI_PROCESSING', color: 'text-[#e11d48]' },
                      { channel: 'KOT_PRINT // PRINTER_BUFFER', latency: '15ms', status: 'DISPATCHED', color: 'text-amber-400' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-200/50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
                        <span className={`font-semibold ${item.color}`}>{item.channel}</span>
                        <div className="flex items-center gap-3 text-zinc-500 text-[11px]">
                          <span>{item.latency}</span>
                          <span className="px-1.5 py-0.5 rounded bg-zinc-300 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px]">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Scene 5: AI Model */}
              {activeStep === 5 && (
                <motion.div
                  key="scene-5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center justify-center space-y-4"
                >
                  <div className="relative w-48 h-32 rounded-xl bg-zinc-900 border border-purple-500/40 p-3 flex flex-col justify-between overflow-hidden shadow-lg shadow-purple-500/10">
                    <div className="flex items-center justify-between text-[10px] font-mono text-purple-400">
                      <span>LATENT EMBEDDING</span>
                      <span>d=512</span>
                    </div>
                    {/* Simulated neural nodes */}
                    <div className="grid grid-cols-6 gap-2 my-auto">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-2.5 h-2.5 rounded-full bg-purple-500/60"
                          style={{ opacity: Math.sin(i * 1.5) * 0.5 + 0.5 }}
                        />
                      ))}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 flex items-center justify-between">
                      <span>Loss: ~0.039</span>
                      <span className="text-emerald-400">Converged</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 text-center max-w-sm">
                    Dual-LLM fact extraction & reasoning graph • U-Net noise field reverse Markov chain
                  </div>
                </motion.div>
              )}

              {/* Scene 6: Usable Interfaces */}
              {activeStep === 6 && (
                <motion.div
                  key="scene-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-md space-y-3 font-mono text-xs"
                >
                  <div className="text-xs font-bold text-zinc-700 dark:text-zinc-300 pb-1 border-b border-zinc-300 dark:border-zinc-800 flex items-center justify-between">
                    <span>TACTILE OPERATIONAL UI</span>
                    <span className="text-indigo-400">TOUCH-FIRST</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                      <div className="text-[10px] text-zinc-500">TABLE 04 • 4 GUESTS</div>
                      <div className="text-sm font-bold text-emerald-500">OCCUPIED / KOT FIRED</div>
                      <div className="text-[11px] text-zinc-400">Paneer Tikka x2, Biryani x1</div>
                      <div className="text-[10px] text-[#e11d48] font-bold">TOTAL: ₹840</div>
                    </div>
                    <div className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                      <div className="text-[10px] text-zinc-500">AFTER12TH ADVISORY</div>
                      <div className="text-sm font-bold text-sky-400">STREAM: SCIENCE (PCM)</div>
                      <div className="text-[11px] text-zinc-400">Recommended: AI/ML Engineering</div>
                      <div className="text-[10px] text-emerald-500 font-bold">500+ PEERS VIEWED</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Scene 7: Deployment */}
              {activeStep === 7 && (
                <motion.div
                  key="scene-7"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-md font-mono text-xs space-y-3"
                >
                  <div className="text-zinc-500 text-xs pb-1 border-b border-zinc-300 dark:border-zinc-800 flex items-center justify-between">
                    <span>DEPLOYMENT TARGET MATRIX</span>
                    <span className="text-cyan-400 font-semibold">ALL HEALTHY</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">Google Play Store</span>
                      <span className="text-emerald-500">v1.2.0 • Live in Production</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">Raspberry Pi Edge Node</span>
                      <span className="text-cyan-400">FastAPI Daemon • Port 8000</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">Dockerized C++ Suite</span>
                      <span className="text-purple-400">docker-compose up -d</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Scene 8: Impact */}
              {activeStep === 8 && (
                <motion.div
                  key="scene-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full text-center space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold">
                    <Users className="w-4 h-4" /> VERIFIED REAL-WORLD IMPACT
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto font-mono">
                    <div className="p-4 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                      <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">500+</div>
                      <div className="text-[11px] text-zinc-500">Google Play Users</div>
                    </div>
                    <div className="p-4 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-500">REVENUE</div>
                      <div className="text-[11px] text-zinc-500">Commercial POS Ops</div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">
                    The software does not stop at GitHub commits. It serves real people.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
