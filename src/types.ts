export type ProjectCategory = 
  | 'AI / ML' 
  | 'Full Stack' 
  | 'Mobile' 
  | 'Algorithms' 
  | 'Generative AI' 
  | 'Computer Vision';

export type ProjectStatus = 'BUILT' | 'BUILDING' | 'EXPERIMENT' | 'PLANNED';

export type FilterCategory = 'ALL' | 'AI / ML' | 'FULL STACK' | 'MOBILE' | 'ALGORITHMS' | 'RESEARCH' | 'BUILDING' | 'PLANNED';

export interface ArchitectureNode {
  step: string;
  title: string;
  description: string;
  tech?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  status: ProjectStatus;
  category: ProjectCategory;
  year: string;
  oneLiner: string;
  summary: string;
  problem: string;
  solution: string;
  whatTalketBuilt: string[];
  technologies: string[];
  architecture: ArchitectureNode[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  playStoreUrl?: string;
  deploymentInfo: string;
  challenges: string[];
  lessonsLearned: string[];
  futureWork: string[];
  featured?: boolean;
  interactiveType?: 'architecture' | 'diffusion' | 'workflow' | 'pipeline' | 'algorithm' | 'counter';
}

export interface LabItem {
  id: string;
  title: string;
  status: 'IDEA' | 'EXPLORING' | 'RESEARCH' | 'EXPERIMENT' | 'PLANNED';
  category: string;
  description: string;
  technologies: string[];
  hypothesisOrGoal: string;
  currentFindingOrState: string;
  updatedDate: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  focusArea: string;
  tasks: string[];
  technologies: string[];
  metrics: string[];
  takeaways: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    relationship: 'Used in' | 'Built with' | 'Worked on' | 'Explored';
    projectOrContext: string;
  }[];
}

export interface AchievementItem {
  metric: string;
  label: string;
  detail: string;
  platform: string;
  highlight?: boolean;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}
