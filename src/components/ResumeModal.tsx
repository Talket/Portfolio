import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate clean printable resume trigger or direct download simulation
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Talket_Dobariya_AI_ML_Resume.pdf';
    // Fallback printable view
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0b0c10]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#0f1118] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-10 space-y-6 my-auto text-zinc-900 dark:text-zinc-100 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-bold text-zinc-800 dark:text-zinc-200">TALKET DOBARIYA // CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e11d48] text-white hover:bg-[#be123c] font-mono text-xs font-semibold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:text-[#e11d48] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Container (Clean, printable editorial look) */}
        <div className="space-y-6 text-sm">
          {/* Header */}
          <div className="space-y-2 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <h1 className="text-3xl font-extrabold font-display tracking-tight text-zinc-900 dark:text-white">
              TALKET DOBARIYA
            </h1>
            <div className="text-sm font-mono text-[#e11d48] font-bold">
              AI / Machine Learning Engineer • Computer Science & Engineering (AI/ML)
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Surat, Gujarat, India</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> dobariyatalket@gmail.com</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +91 8780222694</span>
              <span className="flex items-center gap-1"><Github className="w-3.5 h-3.5" /> github.com/Talket</span>
              <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/talket-dobariya</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e11d48] border-b border-zinc-200 dark:border-zinc-800 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <span className="font-bold text-zinc-800 dark:text-zinc-200">Lovely Professional University</span>
                <span className="text-zinc-500">2023 – Expected 2028</span>
              </div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">
                B.Tech in Computer Science & Engineering (Specialization: Artificial Intelligence & Machine Learning)
              </div>
              <div className="text-xs font-mono text-emerald-500">
                CGPA: 8.87 / 10 • 5th Semester
              </div>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e11d48] border-b border-zinc-200 dark:border-zinc-800 pb-1">
              TECHNICAL REPERTOIRE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div><span className="font-bold text-zinc-700 dark:text-zinc-300">Languages:</span> Python, C++, Java, SQL, Dart, TypeScript, JavaScript</div>
              <div><span className="font-bold text-zinc-700 dark:text-zinc-300">AI / ML:</span> CNNs, Computer Vision, DDPM Diffusion, Supervised/Unsupervised ML, ROC-AUC, SHAP</div>
              <div><span className="font-bold text-zinc-700 dark:text-zinc-300">Frameworks:</span> TensorFlow, Keras, NumPy, Pandas, Scikit-Learn, Flutter, React, FastAPI</div>
              <div><span className="font-bold text-zinc-700 dark:text-zinc-300">Infra & Tools:</span> Firebase, Docker, Raspberry Pi Edge Compute, Git, GitHub, Android Studio</div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e11d48] border-b border-zinc-200 dark:border-zinc-800 pb-1">
              WORK EXPERIENCE
            </h2>
            
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-zinc-900 dark:text-white">Skillcraft Technology — Machine Learning Intern</span>
                <span className="text-zinc-500">Jan 2026 – Feb 2026</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-1 leading-relaxed">
                <li>Built real-time computer vision pipeline for hand gesture recognition using CNNs and OpenCV preprocessing.</li>
                <li>Conducted exploratory data analysis, feature engineering, and model evaluation across regression and clustering algorithms.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-zinc-900 dark:text-white">Saiket Systems — Machine Learning Intern</span>
                <span className="text-zinc-500">Sep 2025 – Oct 2025</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-1 leading-relaxed">
                <li>Trained customer churn prediction models, resolving class imbalance with stratified sampling and SMOTE.</li>
                <li>Conducted rigorous evaluation across Accuracy, Precision, Recall, F1-Score, ROC-AUC, and SHAP interpretability.</li>
              </ul>
            </div>
          </div>

          {/* Featured Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e11d48] border-b border-zinc-200 dark:border-zinc-800 pb-1">
              KEY SYSTEMS & PRODUCTS
            </h2>
            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <span className="font-bold text-zinc-900 dark:text-white font-mono">RESTRO_POS:</span> Commercial restaurant operations & POS system in active use in Gujarat. Real-time Firebase Firestore synchronization, multi-branch architecture, and atomic billing transactions.
              </div>
              <div>
                <span className="font-bold text-zinc-900 dark:text-white font-mono">AFTER12TH:</span> Android mobile app on Google Play with 500+ active users. Integrated Cloudflare Workers AI edge inference for academic pathway advisory.
              </div>
              <div>
                <span className="font-bold text-zinc-900 dark:text-white font-mono">CRIMINAL NETWORK ANALYSIS:</span> Ongoing investigative platform combining edge Raspberry Pi OCR/HTR processing, dual-LLM entity resolution, and predictive network graphs.
              </div>
              <div>
                <span className="font-bold text-zinc-900 dark:text-white font-mono">DDPM DIFFUSION:</span> Conditional generative diffusion model trained over 60,000 MNIST images across 1,000 timesteps with U-Net architecture (Val MSE ~0.039).
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e11d48] border-b border-zinc-200 dark:border-zinc-800 pb-1">
              ACHIEVEMENTS & CERTIFICATIONS
            </h2>
            <ul className="list-disc pl-4 text-xs text-zinc-600 dark:text-zinc-400 space-y-1 font-mono">
              <li>500+ LeetCode problems solved across DSA, dynamic programming, and graph algorithms.</li>
              <li>HackerRank 5-Star Badges in Problem Solving, C++, Java, and Python.</li>
              <li>Oracle Data Platform Certified Foundations Associate.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
