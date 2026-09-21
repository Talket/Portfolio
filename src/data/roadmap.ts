export interface RoadmapItem {
  id: string;
  category: string;
  title: string;
  description: string;
  targetTimeline: string;
  coreTech: string[];
  status: 'PLANNED' | 'PROTOTYPING' | 'RESEARCHING';
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: 'edge_vlm',
    category: 'Edge AI & Robotics',
    title: 'On-Device Visual Language Model for Offline Inspection',
    description: 'Deploying quantized multimodal Vision-Language Models (VLMs) on embedded hardware for real-time visual defect auditing without cloud connectivity.',
    targetTimeline: 'Late 2026',
    coreTech: ['PaliGemma', 'ONNX Runtime', 'Edge TPU', 'C++'],
    status: 'RESEARCHING'
  },
  {
    id: 'agentic_code_audit',
    category: 'Developer Tools & Agents',
    title: 'Deterministic Architectural Drift Analyzer',
    description: 'A static analysis agent that traverses full-stack pull requests to flag hidden architectural regressions, circular dependencies, and database N+1 query patterns before staging.',
    targetTimeline: '2026–2027',
    coreTech: ['Tree-sitter', 'AST Analysis', 'Local LLMs', 'TypeScript'],
    status: 'PLANNED'
  },
  {
    id: 'distributed_graph_rag',
    category: 'Intelligent Systems',
    title: 'GraphRAG Investigation Engine v2',
    description: 'Evolution of the Criminal Network platform into a general-purpose, temporal entity-resolution knowledge graph for investigative journalism and corporate fraud detection.',
    targetTimeline: 'Mid 2026',
    coreTech: ['Neo4j', 'Vector Embeddings', 'FastAPI', 'React Flow'],
    status: 'PROTOTYPING'
  },
  {
    id: 'low_latency_inference',
    category: 'AI Infrastructure',
    title: 'Sub-Millisecond Inference Optimization Harness',
    description: 'Benchmarking TensorRT, vLLM, and INT4/INT8 quantization strategies to understand GPU memory bandwidth saturation and kernel fusion bottlenecks.',
    targetTimeline: '2027',
    coreTech: ['CUDA C++', 'TensorRT', 'Triton Inference Server', 'PyTorch'],
    status: 'PLANNED'
  }
];
