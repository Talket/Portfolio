import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', relationship: 'Built with', projectOrContext: 'DDPM Diffusion, CNN Waste Classifier, Criminal Network Pipeline, ML Internships' },
      { name: 'C++', relationship: 'Built with', projectOrContext: 'Sorting & Graph Visualizer, 500+ LeetCode DSA Solutions' },
      { name: 'TypeScript / JS', relationship: 'Built with', projectOrContext: 'Restro_POS, Interactive Portfolios, Edge APIs' },
      { name: 'Java', relationship: 'Worked on', projectOrContext: 'OOP Systems, CS Coursework, HackerRank 5-Star Badges' },
      { name: 'SQL', relationship: 'Used in', projectOrContext: 'Relational DB Design, Query Optimization, Oracle Data Platform' },
      { name: 'Dart', relationship: 'Built with', projectOrContext: 'After12th (Google Play), FarmHouse Chalo' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Deep Learning & CNN', relationship: 'Built with', projectOrContext: 'Waste Classification, Real-time Gesture Recognition' },
      { name: 'Generative Diffusion (DDPM)', relationship: 'Built with', projectOrContext: 'U-Net noise estimation over 1,000 timesteps on MNIST' },
      { name: 'Computer Vision', relationship: 'Worked on', projectOrContext: 'OpenCV image preprocessing, augmentation pipelines' },
      { name: 'Supervised Learning', relationship: 'Used in', projectOrContext: 'Churn prediction, regression benchmarking at Saiket & Skillcraft' },
      { name: 'Unsupervised Clustering', relationship: 'Worked on', projectOrContext: 'K-Means, DBSCAN customer segmentation experiments' },
      { name: 'Model Evaluation', relationship: 'Used in', projectOrContext: 'ROC-AUC, Precision-Recall, F1-score, confusion matrices, SHAP' },
      { name: 'LLM Orchestration', relationship: 'Explored', projectOrContext: 'Dual-LLM extraction & reasoning graph pipeline' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'TensorFlow / Keras', relationship: 'Built with', projectOrContext: 'DDPM, CNN pipelines, custom training loops' },
      { name: 'NumPy & Pandas', relationship: 'Used in', projectOrContext: 'EDA, mathematical tensor manipulation, tabular cleanup' },
      { name: 'Scikit-Learn', relationship: 'Used in', projectOrContext: 'Feature selection, ensemble classifiers, cross-validation' },
      { name: 'Flutter', relationship: 'Built with', projectOrContext: 'After12th (500+ users), FarmHouse Chalo mobile app' },
      { name: 'React', relationship: 'Built with', projectOrContext: 'Restro_POS commercial software, responsive interfaces' },
      { name: 'FastAPI / Uvicorn', relationship: 'Built with', projectOrContext: 'Raspberry Pi remote OCR/HTR edge inference daemon' }
    ]
  },
  {
    title: 'Architecture & Tools',
    skills: [
      { name: 'Firebase & Firestore', relationship: 'Built with', projectOrContext: 'Real-time document listeners, Auth, optimistic transactions' },
      { name: 'Docker & Compose', relationship: 'Built with', projectOrContext: 'Algorithm visualizer containerization, reproducible builds' },
      { name: 'Edge Hardware (Raspberry Pi)', relationship: 'Worked on', projectOrContext: 'Remote OCR/HTR compute node in criminal analysis platform' },
      { name: 'Git & GitHub', relationship: 'Used in', projectOrContext: 'Version control, issue workflows, open-source repositories' },
      { name: 'REST APIs & WebSockets', relationship: 'Used in', projectOrContext: 'Client-server communications, real-time ticket streaming' },
      { name: 'Android Studio / VS Code', relationship: 'Used in', projectOrContext: 'Primary native Android & full-stack development IDEs' }
    ]
  },
  {
    title: 'Core Computer Science',
    skills: [
      { name: 'Data Structures & Algorithms', relationship: 'Worked on', projectOrContext: '500+ LeetCode problems solved, Graph & Tree traversal' },
      { name: 'Database Management Systems', relationship: 'Used in', projectOrContext: 'Relational normalization, indexing, ACID transactions' },
      { name: 'Object-Oriented Programming', relationship: 'Used in', projectOrContext: 'Polymorphism, modular design patterns, clean architecture' },
      { name: 'Operating Systems', relationship: 'Explored', projectOrContext: 'Concurrency, memory hierarchies, processes & threads' },
      { name: 'Computer Networks', relationship: 'Used in', projectOrContext: 'TCP/IP, HTTP/REST protocol design, socket telemetry' }
    ]
  }
];
