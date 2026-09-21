import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'skillcraft',
    company: 'Skillcraft Technology',
    role: 'Machine Learning Intern',
    period: 'Jan 2026 – Feb 2026',
    location: 'Remote',
    focusArea: 'Computer Vision & Supervised/Unsupervised Machine Learning',
    tasks: [
      'Executed thorough exploratory data analysis (EDA), feature engineering, and statistical correlation mapping across heterogeneous tabular and image datasets.',
      'Developed and benchmarked supervised regression and multi-class classification architectures, systematically tuning hyperparameters via GridSearch and Cross-Validation.',
      'Engineered a real-time computer vision pipeline for hand gesture recognition utilizing convolutional neural networks (CNNs) and OpenCV frame preprocessing.',
      'Applied unsupervised clustering algorithms (K-Means, DBSCAN) to discover latent customer patterns and feature groupings.',
      'Evaluated model performance using rigorous statistical metrics (ROC-AUC, Precision-Recall curves, confusion matrices, F1 score) to ensure production-grade generalization.'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    metrics: [
      'Engineered real-time CNN gesture recognition',
      'Benchmark testing across 5+ supervised model families',
      'End-to-end data pipeline from raw ingestion to inference'
    ],
    takeaways: 'Solidified practical intuition for feature representations and the critical role of data cleaning: 80% of real ML outcomes depend on disciplined preprocessing rather than hyper-complex architectures.'
  },
  {
    id: 'saiket',
    company: 'Saiket Systems',
    role: 'Machine Learning Intern',
    period: 'Sep 2025 – Oct 2025',
    location: 'Remote',
    focusArea: 'Predictive Modeling & Customer Churn Analytics',
    tasks: [
      'Spearheaded end-to-end machine learning pipeline for customer churn prediction across extensive tabular enterprise records.',
      'Conducted advanced data cleaning, addressing severe class imbalances using stratified sampling and SMOTE techniques.',
      'Selected and engineered key predictive behavioral features through mutual information scoring and recursive feature elimination (RFE).',
      'Trained, validated, and optimized ensemble models (Random Forests, Gradient Boosting, Logistic Regression) to maximize business recall.',
      'Employed SHAP and feature importance rankings to translate algorithmic inferences into actionable customer retention strategies for executive review.'
    ],
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Feature Engineering', 'SHAP Analysis', 'Jupyter'],
    metrics: [
      'High Precision & Recall optimization for churn indicators',
      'Interpretable feature attribution for retention teams',
      'Full validation suite covering ROC-AUC, F1, and Precision'
    ],
    takeaways: 'Learned to balance mathematical metric optimization with real-world cost functions: a false negative in customer churn is far more expensive than a false positive.'
  }
];

export const experienceProgressionSteps = [
  { step: '01', title: 'LEARNING', desc: 'Core CS, DSA in C++, Mathematical Foundations, OOP & Operating Systems' },
  { step: '02', title: 'EXPERIMENTING', desc: 'EDA, Feature Engineering, Churn Classification, Model Interpretability' },
  { step: '03', title: 'IMPLEMENTING', desc: 'CNN Gesture Recognition, Waste Sorting, DDPM Generative Diffusion' },
  { step: '04', title: 'DEPLOYING', desc: 'Production Systems (Restro_POS), Mobile on Play Store (After12th, 500+ users), Edge AI on Raspberry Pi' }
];
