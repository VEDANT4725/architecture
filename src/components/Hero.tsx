
import React from 'react';
import { Sparkles, ArrowRight, Eye, Play, Award, CheckCircle2, Shield } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onQuizClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onQuizClick }) => {
  return (
    <section id="hero" className="relative pt-12 pb-24 overflow-hidden border-b border-zinc-900">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Next-Gen Architectural Studio & Visualizer
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal text-zinc-100 tracking-tight leading-[1.1]">
              Architectural Spaces <br />
              <span className="italic font-light text-amber-300/90 font-serif">Curated for Serenity.</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              Transform your residence into a high-craft architectural masterwork. Customize lighting moods, swap bespoke materials in real-time, and match with world-class interior architects.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-400/20"
              >
                <span>Launch Interactive Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onQuizClick}
                className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:bg-zinc-800/50"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Find Your Interior DNA</span>
              </button>
            </div>

            {/* Metrics & Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">450+</p>
                <p className="text-xs text-zinc-400 font-light mt-1">Bespoke Residences</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">99.4%</p>
                <p className="text-xs text-zinc-400 font-light mt-1">Client Satisfaction</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">12+</p>
                <p className="text-xs text-zinc-400 font-light mt-1">Design Awards</p>
              </div>
            </div>
          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Architectural Interior Showcase"
                className="w-full h-[480px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              {/* Floating Glass Badges */}
              <div className="absolute top-6 right-6 backdrop-blur-md bg-zinc-950/70 border border-zinc-800 p-3 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Japandi Penthouse</p>
                  <p className="text-[10px] text-zinc-400">Architectural Digest 2024</p>
                </div>
              </div>

              {/* Bottom Interactive Trigger Overlay */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-zinc-950/85 border border-zinc-800/80 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">Live Preview</span>
                  <p className="text-sm font-medium text-zinc-100">Kyoto Sanctuary Living Space</p>
                </div>
                <button 
                  onClick={onExploreClick}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Customize</span>
                </button>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 -right-6 h-12 bg-amber-400/10 rounded-full blur-xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};