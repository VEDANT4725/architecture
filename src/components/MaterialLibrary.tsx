
import React, { useState } from 'react';
import { Layers, Search, DollarSign, Bookmark, Check } from 'lucide-react';
import { MATERIAL_SWATCHES } from '../data/sampleData';
import { MaterialSwatch } from '../types';

interface MaterialLibraryProps {
  onSaveMaterial: (mat: MaterialSwatch) => void;
}

export const MaterialLibrary: React.FC<MaterialLibraryProps> = ({ onSaveMaterial }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const categories = ['All', 'Stone', 'Flooring', 'Wall Finish', 'Textile', 'Cabinetry'];

  const filteredSwatches = activeCategory === 'All'
    ? MATERIAL_SWATCHES
    : MATERIAL_SWATCHES.filter(m => m.category === activeCategory);

  const handleToggleSave = (mat: MaterialSwatch) => {
    onSaveMaterial(mat);
    if (!savedIds.includes(mat.id)) {
      setSavedIds([...savedIds, mat.id]);
    }
  };

  return (
    <section id="materials" className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Architectural Material Library</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Curated Surfaces & Textures
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Explore sustainably sourced marbles, smudged white oak planks, lime wash finishes, and Italian bouclés.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Swatch Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSwatches.map((mat) => {
            const isSaved = savedIds.includes(mat.id);
            return (
              <div
                key={mat.id}
                className="bg-zinc-900/60 rounded-3xl p-5 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-800">
                  <img
                    src={mat.textureUrl}
                    alt={mat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] font-semibold text-amber-400 uppercase tracking-wider">
                    {mat.category}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-medium text-white group-hover:text-amber-300 transition-colors">
                      {mat.name}
                    </h3>
                    <span className="text-sm font-semibold text-amber-400">${mat.pricePerSqFt}/sq.ft</span>
                  </div>
                  <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed">{mat.description}</p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {mat.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] text-zinc-400 px-2 py-0.5 rounded-md bg-zinc-800/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleToggleSave(mat)}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isSaved
                        ? 'bg-amber-400 border-amber-400 text-zinc-950'
                        : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700'
                    }`}
                    title="Save to Moodboard"
                  >
                    {isSaved ? <Check className="w-4 h-4 stroke-[3]" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};