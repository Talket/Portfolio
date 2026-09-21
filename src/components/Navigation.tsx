import React, { useState, useEffect } from 'react';
import { Terminal, Moon, Sun, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'STORY', href: '#story' },
    { label: 'BUILDING', href: '#building' },
    { label: 'LAB', href: '#lab' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${
          scrolled
            ? 'py-2.5 bg-[#0b0c10]/80 dark:bg-[#0b0c10]/80 backdrop-blur-xl border-b border-zinc-200/20 dark:border-white/10 shadow-sm'
            : 'py-4 bg-transparent'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-sm font-mono tracking-wider font-semibold group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48] animate-pulse" />
            <span className="text-zinc-900 dark:text-zinc-100 group-hover:text-[#e11d48] transition-colors">
              TALKET DOBARIYA
            </span>
            <span className="hidden sm:inline-block text-xs text-zinc-500 font-normal px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60">
              AI/ML LAB
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-zinc-100/80 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className="px-2.5 py-1 text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider font-medium rounded-full border border-[#e11d48]/40 hover:border-[#e11d48] bg-[#e11d48]/10 text-[#e11d48] dark:text-[#f43f5e] hover:bg-[#e11d48]/20 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RÉSUMÉ</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle visual theme"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#0b0c10]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col justify-between pb-10"
        >
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest pb-2 border-b border-zinc-800">
              SYSTEM NAVIGATION
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-2 text-lg font-mono tracking-wider text-zinc-200 hover:text-[#e11d48] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-zinc-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-lg border border-[#e11d48] text-[#e11d48] font-mono text-sm tracking-wider flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              VIEW DIGITAL RÉSUMÉ
            </button>
            <div className="text-xs text-zinc-500 font-mono text-center">
              TALKET DOBARIYA • AI/ML ENGINEER
            </div>
          </div>
        </div>
      )}
    </>
  );
};
