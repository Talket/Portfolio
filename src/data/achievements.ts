import { AchievementItem, CertificationItem } from '../types';

export const metricsData: AchievementItem[] = [
  {
    metric: '8.87',
    label: 'Cumulative CGPA',
    detail: 'Lovely Professional University (B.Tech CSE - AI/ML)',
    platform: 'Academic Excellence',
    highlight: true
  },
  {
    metric: '500+',
    label: 'Google Play Users',
    detail: 'Active student users on the After12th guidance application',
    platform: 'Google Play Store',
    highlight: true
  },
  {
    metric: '500+',
    label: 'LeetCode Solved',
    detail: 'Data structures, algorithms, graph theory, and dynamic programming',
    platform: 'LeetCode',
    highlight: true
  },
  {
    metric: '5★',
    label: 'HackerRank Badges',
    detail: 'Problem Solving, C++, Java, and Python verified competencies',
    platform: 'HackerRank',
    highlight: true
  },
  {
    metric: '12+',
    label: 'Algorithms Visualized',
    detail: 'Sorting, graph traversals, and shortest path algorithms in C++',
    platform: 'Algorithmic Engine'
  },
  {
    metric: '60,000',
    label: 'MNIST Images Trained',
    detail: 'Full dataset conditional DDPM generative diffusion model',
    platform: 'Deep Learning'
  },
  {
    metric: '1,000',
    label: 'Diffusion Timesteps',
    detail: 'Discrete Markov reverse-noise ancestral sampling trajectory',
    platform: 'Generative AI'
  },
  {
    metric: '2',
    label: 'ML Internships',
    detail: 'Skillcraft Technology & Saiket Systems (Hands-on engineering)',
    platform: 'Industry Experience'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: 'Oracle Data Platform Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Certified',
    credentialId: 'Oracle Database & Cloud Data Architecture'
  },
  {
    name: 'Software Engineer Intern Certification',
    issuer: 'HackerRank',
    date: 'Verified',
    credentialId: 'Core Software Engineering Competency'
  },
  {
    name: 'Problem Solving (Intermediate) Certificate',
    issuer: 'HackerRank',
    date: 'Verified',
    credentialId: 'Advanced Data Structures & Algorithms'
  }
];

export const educationData = [
  {
    degree: 'B.Tech — Computer Science & Engineering (AI/ML)',
    institution: 'Lovely Professional University',
    period: '2023 – Expected 2028',
    grade: 'CGPA: 8.87 / 10',
    detail: '5th Semester. Core coursework in Machine Learning, Deep Learning, Design and Analysis of Algorithms, DBMS, Operating Systems, Computer Networks, and Probability & Statistics.'
  },
  {
    degree: 'Class XII — Higher Secondary Certificate (Science - Mathematics)',
    institution: 'P.P. Savani Abrama',
    period: 'Completed',
    grade: '74%',
    detail: 'Rigorous foundation in Higher Mathematics, Physics, and Chemistry.'
  }
];
