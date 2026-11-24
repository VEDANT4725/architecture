
import React, { useState } from 'react';
import { Sparkles, Layers, Compass, Users, Calculator, Bookmark, Menu, X, Search, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  savedCount: number;
  openSavedDrawer: () => void;
  openQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  savedCount,
  openSavedDrawer,
  openQuiz
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'visualizer', label: '3D Room Stager', icon: Layers },
    { id: 'ai-transform', label: 'AI Renovation Tool', icon: Sparkles },
    { id: 'portfolio', label: 'Projects & Hotspots', icon: Compass },
    { id: 'materials', label: 'Material Library', icon: Layers },
    { id: 'designers', label: 'Architect Directory', icon: Users },
    { id: 'estimator', label: 'Cost Estimator', icon: Calculator },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 transition-all">
      <div className="max-w-7xl mx-mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-300 p-[1px] shadow-lg shadow-amber-500/10 transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
              <span className="text-amber-400 font-serif font-bold text-xl tracking-tighter">L</span>
            </div>
          </div>
          <div>
            <span className="font-serif text-xl font-medium tracking-tight text-zinc-100 flex items-center gap-1.5">
              Lumina <span className="text-amber-400 text-xs tracking-widest font-sans uppercase px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">Studio</span>
            </span>
            <p className="text-[10px] text-zinc-400 tracking-wider uppercase">Interior Architecture & Design</p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-amber-400 text-zinc-950 shadow-md font-semibold'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={openQuiz}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-xs font-medium transition-all group"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>Style DNA Quiz</span>
          </button>

          <button
            onClick={openSavedDrawer}
            className="relative p-2.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Saved Moodboards"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openSavedDrawer}
            className="p-2.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-amber-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openQuiz();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <Sparkles className="w-4 h-4 text-zinc-950" />
            Take Style DNA Quiz
          </button>
        </div>
      )}
    </header>
  );
};