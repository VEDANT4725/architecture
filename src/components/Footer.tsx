
import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-12 border-t border-zinc-900 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-zinc-950 font-serif font-bold flex items-center justify-center text-lg">
                L
              </div>
              <span className="font-serif text-xl font-medium text-white">Lumina Studio</span>
            </div>

            <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
              Leading interior design visualizer and architectural practice delivering minimalist luxury residences worldwide.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 max-w-md bg-zinc-900 border border-zinc-800 rounded-full p-1.5">
                <Mail className="w-4 h-4 text-zinc-500 ml-3" />
                <input
                  type="email"
                  placeholder="Join our private architectural journal..."
                  className="bg-transparent text-white text-xs placeholder:text-zinc-500 flex-1 focus:outline-none px-2"
                />
                <button className="px-4 py-2 rounded-full bg-amber-400 text-zinc-950 font-semibold text-xs hover:bg-amber-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[10px]">Studios</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>Tribeca, NY</li>
                <li>Paris 3rd Arr.</li>
                <li>Kyoto Minato</li>
                <li>Zurich Alpine</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[10px]">Services</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>3D Spatial Staging</li>
                <li>Architectural Lighting</li>
                <li>Full Turn-Key Builds</li>
                <li>Material Sourcing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[10px]">Press & Honors</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>Architectural Digest</li>
                <li>Frame Magazine</li>
                <li>Elle Decor 2024</li>
                <li>Wabi Sabi Award</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>© {new Date().getFullYear()} Lumina Architectural Interiors Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 cursor-pointer">Material Certifications</span>
          </div>
        </div>

      </div>
    </footer>
  );
};