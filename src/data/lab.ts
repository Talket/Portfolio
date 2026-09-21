import { LabItem } from '../types';

export const labItems: LabItem[] = [
  {
    id: 'railway_defect',
    title: 'Railway Track Defect Severity & Failure Prediction',
    status: 'RESEARCH',
    category: 'Computer Vision / Predictive Maintenance',
    description: 'Investigating high-speed visual detection of micro-fractures, gauge widening, and railhead spalling using deep convolutional features combined with temporal track vibration sensors.',
    technologies: ['PyTorch', 'OpenCV', 'Vibration Telemetry', 'Time-Series Analysis'],
    hypothesisOrGoal: 'Can lightweight edge models accurately classify crack severity in real-time under variable lighting and train transit vibration speeds (>60 km/h)?',
    currentFindingOrState: 'Synthesized preliminary acoustic-visual feature fusion pipeline. Exploring synthetic defect augmentation to solve extreme class imbalance.',
    updatedDate: 'Q1 2026'
  },
  {
    id: 'burnin_watch',
    title: 'BurnInWatch: Component Screening Anomaly Detection',
    status: 'EXPERIMENT',
    category: 'Hardware Quality / Unsupervised ML',
    description: 'Analyzing electronic component degradation trajectories during accelerated thermal burn-in stress testing to filter infant mortality failures before assembly.',
    technologies: ['Python', 'Autoencoders', 'Isolation Forests', 'Scipy'],
    hypothesisOrGoal: 'Train unsupervised autoencoders on healthy thermal-current drift vectors to isolate outliers before catastrophic failure manifests.',
    currentFindingOrState: 'Reconstruction error thresholds reliably caught 91% of synthetic voltage leakage spikes on simulated test runs.',
    updatedDate: 'Q4 2025'
  },
  {
    id: 'nasa_capacitors',
    title: 'NASA Capacitor Dataset Degradation Exploration',
    status: 'EXPLORING',
    category: 'Prognostics / Residual Useful Life (RUL)',
    description: 'Exploring publicly available NASA Prognostics Center capacitor life-cycle data to model Equivalent Series Resistance (ESR) growth under high-frequency electrical stress.',
    technologies: ['Pandas', 'NumPy', 'LSTM', 'Matplotlib', 'Statistical Physics'],
    hypothesisOrGoal: 'Predict remaining useful life (RUL) with confidence intervals rather than single-point failure estimates.',
    currentFindingOrState: 'Plotted degradation curves showing non-linear knee points where capacitance loss accelerates drastically after 400 hours of continuous load.',
    updatedDate: 'Q1 2026'
  },
  {
    id: 'sih_edge_intelligence',
    title: 'Smart India Hackathon Edge Intelligence Concepts',
    status: 'IDEA',
    category: 'Public Infrastructure / Edge AI',
    description: 'Conceptual architecture for distributed low-cost edge sensors monitoring municipal drainage blockages and water contamination in tier-2 Indian cities.',
    technologies: ['Raspberry Pi', 'LoRaWAN', 'Embedded CNN', 'Solar Power'],
    hypothesisOrGoal: 'Decentralize flood warning detection by placing sub-$25 edge compute nodes at critical municipal culverts rather than relying on centralized satellite radar.',
    currentFindingOrState: 'Formulating modular hardware block diagram and edge latency constraints.',
    updatedDate: 'Q1 2026'
  },
  {
    id: 'agentic_tool_routing',
    title: 'Deterministic Tool-Routing for Local SLMs',
    status: 'PLANNED',
    category: 'LLM Systems & Small Models',
    description: 'Investigating constrained grammars and deterministic trie matching to force small language models (<3B parameters) to produce 100% valid JSON function invocations without hallucinations.',
    technologies: ['Ollama', 'Llama-3.2-1B', 'Grammar Encoders', 'Rust'],
    hypothesisOrGoal: 'Can sub-3B local models achieve GPT-4o-level tool routing accuracy when grammar-constrained at the logit decoding level?',
    currentFindingOrState: 'Literature review completed; designing benchmarking test harness comparing JSON schema validation across 500 edge cases.',
    updatedDate: 'Q2 2026'
  }
];
