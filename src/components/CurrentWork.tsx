import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Network, 
  BrainCircuit, 
  Server, 
  ShieldAlert, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  Layers, 
  Sparkles,
  Search,
  SlidersHorizontal,
  HardDrive
} from 'lucide-react';

interface GraphNode {
  id: string;
  name: string;
  type: 'suspect' | 'account' | 'vehicle' | 'location' | 'phone';
  roleOrDetail: string;
  confidence: number;
  reasoning: string;
  evidenceSource: string;
}

const sampleGraphNodes: GraphNode[] = [
  {
    id: 's1',
    name: 'Suspect "K. Verma"',
    type: 'suspect',
    roleOrDetail: 'Syndicate Logistics Coordinator',
    confidence: 0.94,
    reasoning: 'Extracted from handwritten FIR #402/26. Cross-referenced with 4 intercepted toll-booth transit logs within 3 hours of cargo dispatch.',
    evidenceSource: 'FIR-402-HTR-Extracted.pdf (Pg 3)'
  },
  {
    id: 'a1',
    name: 'Shell A/C #8942-IN',
    type: 'account',
    roleOrDetail: 'Intermediary Escrow Routing',
    confidence: 0.88,
    reasoning: 'Deduce multi-hop transactional bursts (<₹49,000 to evade automated reporting thresholds) occurring within 15 mins of logistic dispatches.',
    evidenceSource: 'Bank Transaction Ledger Sheet 12'
  },
  {
    id: 'v1',
    name: 'GJ-05-AX-9912',
    type: 'vehicle',
    roleOrDetail: 'Commercial Transit Van',
    confidence: 0.96,
    reasoning: 'Repeated presence at Surat GIDC warehouse during odd hours. Linked to Suspect K. Verma via seized rental slip.',
    evidenceSource: 'OCR Seizure Receipt #88'
  },
  {
    id: 'l1',
    name: 'Warehouse GIDC Plot 44',
    type: 'location',
    roleOrDetail: 'Suspected Staging Hub',
    confidence: 0.91,
    reasoning: 'Physical nexus where Vehicle GJ-05 and 3 separate burner IMEI pings converged during night operational windows.',
    evidenceSource: 'Tower CDR Analysis'
  },
  {
    id: 'p1',
    name: 'IMEI 86429104...',
    type: 'phone',
    roleOrDetail: 'Burner Handset',
    confidence: 0.82,
    reasoning: 'Reasoning model pruned 14 irrelevant civilian calls and surfaced direct single-ring frequency with logistics coordinator.',
    evidenceSource: 'Call Detail Record Dump'
  }
];

export const CurrentWork: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<GraphNode>(sampleGraphNodes[0]);
  const [activePipelineStage, setActivePipelineStage] = useState<number>(3); // 1 to 5

  const pipelineStages = [
    {
      step: 1,
      title: 'Heterogeneous Ingestion',
      sub: 'Scanned FIRs & handwritten interrogation notes',
      tech: 'Multi-Format Input'
    },
    {
      step: 2,
      title: 'Raspberry Pi Edge OCR/HTR',
      sub: 'Remote FastAPI server parses handwriting',
      tech: 'FastAPI / Uvicorn'
    },
    {
      step: 3,
      title: 'Investigator Verification',
      sub: 'Human-in-the-loop audit before LLM reasoning',
      tech: 'Validation Review'
    },
    {
      step: 4,
      title: 'Dual-LLM Entity Synthesis',
      sub: 'Extraction LLM #1 + Reasoning LLM #2',
      tech: 'Graph JSON Output'
    },
    {
      step: 5,
      title: 'Network Graph & Prediction',
      sub: 'Interactive entity topology & incident feedback',
      tech: 'Predictive Inference'
    }
  ];

  return (
    <section id="building" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Top Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48] animate-ping" />
          ACTIVE ENGINEERING // FLAGSHIP RESEARCH
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-zinc-900 dark:text-white">
          CURRENTLY BUILDING
        </h2>
        <div className="text-xl sm:text-2xl font-bold font-display text-zinc-800 dark:text-zinc-200">
          AI-Powered Criminal Network Analysis System
        </div>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          An advanced investigative intelligence platform deconstructing fragmented evidentiary documents —
          photocopied FIRs, handwritten interrogations, call detail records, and banking ledgers — into verified
          entity relation graphs with multi-stage reasoning to eliminate hallucinations.
        </p>
      </div>

      {/* Visual Ingestion Pipeline Sequence */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <Layers className="w-4 h-4 text-[#e11d48]" />
            <span>FULL MULTI-STAGE DATA PIPELINE</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            STAGE: <span className="text-[#e11d48] font-bold">0{activePipelineStage} OF 05</span>
          </span>
        </div>

        {/* Pipeline Steps Tracker */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono">
          {pipelineStages.map((stage) => {
            const isActive = stage.step === activePipelineStage;
            const isCompleted = stage.step < activePipelineStage;
            return (
              <button
                key={stage.step}
                onClick={() => setActivePipelineStage(stage.step)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#e11d48] bg-[#e11d48]/10 text-[#e11d48] shadow-sm'
                    : isCompleted
                    ? 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300'
                    : 'border-transparent bg-zinc-200/50 dark:bg-zinc-900/20 text-zinc-500'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-zinc-500 mb-1">
                  <span>STEP 0{stage.step}</span>
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                </div>
                <div className="text-xs font-bold font-sans text-zinc-900 dark:text-white leading-tight">
                  {stage.title}
                </div>
                <div className="text-[10px] text-zinc-500 mt-1 truncate">
                  {stage.tech}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed context for active step */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-2">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-zinc-800 dark:text-zinc-200 font-bold uppercase">
              ACTIVE STAGE ARCHITECTURE // {pipelineStages[activePipelineStage - 1].title}
            </span>
            <span className="text-[#e11d48]">{pipelineStages[activePipelineStage - 1].tech}</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm">
            {activePipelineStage === 1 &&
              'Investigators upload raw multi-modal inputs: handwritten seizure memos, low-resolution scanned FIR PDFs, and CSV call records. Files are quarantined in a secure staging bucket before remote transmission.'}
            {activePipelineStage === 2 &&
              'The Raspberry Pi edge node receives raw document buffers via FastAPI. Running optimized OCR/HTR inference engines, it converts non-standard Indian handwriting into digitized candidate text strings.'}
            {activePipelineStage === 3 &&
              'Crucial human-in-the-loop checkpoint: investigators verify extracted text against original document crops, ensuring optical recognition errors do not contaminate downstream neural reasoning.'}
            {activePipelineStage === 4 &&
              'Dual-LLM Pipeline: Model #1 extracts strict JSON entities (Persons, Vehicles, Phone Numbers, Accounts, Dates). Model #2 cross-references these against existing dossiers, prunes hallucinated inferences, and detects hidden multi-hop relationships.'}
            {activePipelineStage === 5 &&
              'The verified entity graph is rendered on an interactive canvas. Centrality analysis highlights key organizers, and predictive inference flags likely accomplice meeting zones. After operations, outcome feedback updates link confidence scores.'}
          </p>
        </div>
      </div>

      {/* Interactive Entity-Relationship Graph Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Graph Canvas Visual (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-zinc-100/90 dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#e11d48]" />
              <span className="font-bold text-zinc-800 dark:text-zinc-200">INTERACTIVE SYNDICATE TOPOLOGY</span>
            </div>
            <span className="text-emerald-500">5 NODES • 7 EDGES ACTIVE</span>
          </div>

          {/* Simulated node connection canvas */}
          <div className="relative min-h-[300px] flex items-center justify-center p-4">
            {/* SVG Connecting Edges */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-300 dark:stroke-zinc-800 stroke-[1.5]">
              <line x1="50%" y1="20%" x2="25%" y2="50%" className="stroke-[#e11d48]/40 stroke-2" />
              <line x1="50%" y1="20%" x2="75%" y2="50%" />
              <line x1="25%" y1="50%" x2="50%" y2="80%" className="stroke-[#e11d48]/40 stroke-2" />
              <line x1="75%" y1="50%" x2="50%" y2="80%" />
              <line x1="50%" y1="20%" x2="50%" y2="80%" strokeDasharray="4 4" className="stroke-purple-500/50" />
            </svg>

            {/* Clickable Entity Nodes */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between items-center space-y-6">
              {/* Top Node */}
              <button
                onClick={() => setSelectedNode(sampleGraphNodes[0])}
                className={`px-3 py-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                  selectedNode.id === 's1'
                    ? 'border-[#e11d48] bg-[#e11d48] text-white'
                    : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>Suspect "K. Verma"</span>
                <span className="text-[10px] opacity-80">(0.94)</span>
              </button>

              {/* Middle Row Nodes */}
              <div className="w-full flex items-center justify-around">
                <button
                  onClick={() => setSelectedNode(sampleGraphNodes[1])}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    selectedNode.id === 'a1'
                      ? 'border-[#e11d48] bg-[#e11d48] text-white'
                      : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Shell A/C #8942</span>
                </button>

                <button
                  onClick={() => setSelectedNode(sampleGraphNodes[4])}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    selectedNode.id === 'p1'
                      ? 'border-[#e11d48] bg-[#e11d48] text-white'
                      : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Burner Phone IMEI</span>
                </button>
              </div>

              {/* Bottom Row Nodes */}
              <div className="w-full flex items-center justify-center gap-4">
                <button
                  onClick={() => setSelectedNode(sampleGraphNodes[2])}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    selectedNode.id === 'v1'
                      ? 'border-[#e11d48] bg-[#e11d48] text-white'
                      : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>GJ-05-AX Van</span>
                </button>

                <button
                  onClick={() => setSelectedNode(sampleGraphNodes[3])}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    selectedNode.id === 'l1'
                      ? 'border-[#e11d48] bg-[#e11d48] text-white'
                      : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Warehouse Hub</span>
                </button>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <span>Click any node to inspect evidence chains</span>
            <span className="text-[#e11d48]">GraphRAG Schema Verified</span>
          </div>
        </div>

        {/* Right: Node Context & Reasoning Inspector (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                ENTITY CONTEXT AUDIT
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#e11d48]/10 text-[#e11d48] border border-[#e11d48]/20 font-bold">
                CONFIDENCE: {(selectedNode.confidence * 100).toFixed(0)}%
              </span>
            </div>

            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase">{selectedNode.type}</div>
              <h4 className="text-xl font-bold font-display text-zinc-900 dark:text-white mt-0.5">
                {selectedNode.name}
              </h4>
              <p className="text-xs font-mono text-emerald-500 mt-0.5">
                Role: {selectedNode.roleOrDetail}
              </p>
            </div>

            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-mono text-zinc-400 uppercase">DEDUCTIVE REASONING CHAIN:</div>
              <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                {selectedNode.reasoning}
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <div className="text-[11px] font-mono text-zinc-400 uppercase">EVIDENTIARY SOURCE:</div>
              <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#e11d48]" />
                <span>{selectedNode.evidenceSource}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-500">
            Deduplication & Hallucination Filter: Passed • Zero synthetic cross-links detected.
          </div>
        </div>
      </div>

      {/* Edge Processing Subsection: Raspberry Pi Hardware Role */}
      <div className="p-8 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e11d48]">
              <HardDrive className="w-4 h-4 text-[#e11d48]" />
              EDGE PROCESSING ARCHITECTURE
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-900 dark:text-white mt-1">
              The Raspberry Pi Remote Compute Server
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold">
            FASTAPI + UVICORN DAEMON
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
              AIR-GAPPED COMPLIANCE
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Evidentiary criminal documents cannot be blithely transmitted to public commercial cloud APIs. 
              The Raspberry Pi serves as an isolated edge appliance executing localized OCR and HTR parsing on-premise.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              REMOTE ASYNC DISPATCH
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Exposes clean REST endpoints via FastAPI and Uvicorn. The client web application uploads document payloads,
              receives a task ticket, and polls for streaming text extraction without thread blocking.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              PROTOTYPE TO PRODUCTION
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Currently prototyped on dedicated Raspberry Pi 4 hardware with local Python daemons; 
              structured for zero-friction containerized deployment to scalable edge clusters using Docker.
            </p>
          </div>
        </div>

        {/* Visual Flow diagram for Raspberry Pi */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#07080c] border border-zinc-200 dark:border-zinc-800 font-mono text-xs overflow-x-auto">
          <div className="flex items-center justify-between min-w-[600px] text-center">
            <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="font-bold text-zinc-800 dark:text-zinc-200">USER UPLOAD</div>
              <div className="text-[10px] text-zinc-500">FIR Scans / Images</div>
            </div>
            <span className="text-[#e11d48]">→ [Secure Wire] →</span>
            <div className="p-2.5 rounded-lg border border-[#e11d48]/40 bg-[#e11d48]/10 text-[#e11d48] font-bold">
              <div>RASPBERRY PI SERVER</div>
              <div className="text-[10px] text-zinc-400">FastAPI • Uvicorn</div>
            </div>
            <span className="text-[#e11d48]">→ [OCR/HTR Engine] →</span>
            <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="font-bold text-zinc-800 dark:text-zinc-200">EXTRACTED TEXT</div>
              <div className="text-[10px] text-zinc-500">Candidate Tokens</div>
            </div>
            <span className="text-[#e11d48]">→ [Review Gate] →</span>
            <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="font-bold text-emerald-500">WEB APPLICATION</div>
              <div className="text-[10px] text-zinc-500">Investigator Review UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
