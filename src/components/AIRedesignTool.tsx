
import React, { useState } from 'react';
import { Sparkles, Sliders, RefreshCw, Wand2, ArrowRightLeft, Check, Layers } from 'lucide-react';
import { DESIGN_PROJECTS } from '../data/sampleData';
import { DesignStyle } from '../types';

export const AIRedesignTool: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('Japandi');
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const sampleTransformations: Record<DesignStyle, { before: string; after: string; tags: string[] }> = {
    'Japandi': {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      tags: ['Wabi-Sabi Oak', 'Washi Paper Pendants', 'Lime Wash Walls']
    },
    'Warm Minimalist': {
      before: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
      tags: ['Recessed Cove Lights', 'Curved Bouclé Sofa', 'Monolithic Plaster']
    },
    'Biophilic Luxury': {
      before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      tags: ['Indoor Water Feature', 'Limestone Slabs', 'Circadian Light']
    },
    'Parisian Elegance': {
      before: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
      tags: ['Crown Moulding', 'Emerald Tufting', 'Brass Sculptures']
    },
    'Modern Organic': {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
      tags: ['Smoked Walnut', 'Travertine Accents', 'Matte Black Metal']
    },
    'Mid-Century Modern': {
      before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      tags: ['Teak Credenza', 'Olive Velvet', 'Sconces']
    },
    'Industrial Loft': {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      after: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
      tags: ['Exposed Brick', 'Black Steel', 'Distressed Leather']
    }
  };

  const handleStyleChange = (style: DesignStyle) => {
    setIsGenerating(true);
    setSelectedStyle(style);
    setTimeout(() => {
      setIsGenerating(false);
    }, 400);
  };

  const currentTransform = sampleTransformations[selectedStyle];

  return (
    <section id="ai-transform" className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wand2 className="w-3.5 h-3.5" />
            <span>AI Renovation Engine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Instant Architectural Redesign
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-light">
            Drag the before/after slider to compare original dated interiors with Lumina AI transformed luxury architectural layouts.
          </p>
        </div>

        {/* Style Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['Japandi', 'Warm Minimalist', 'Biophilic Luxury', 'Parisian Elegance', 'Modern Organic'] as DesignStyle[]).map((style) => (
            <button
              key={style}
              onClick={() => handleStyleChange(style)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all border ${
                selectedStyle === style
                  ? 'bg-amber-400 border-amber-400 text-zinc-950 font-semibold shadow-lg shadow-amber-400/10'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Interactive Interactive Before/After Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[380px] sm:h-[540px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl select-none group bg-zinc-900">
            
            {/* After Image (Background) */}
            <img
              src={currentTransform.after}
              alt="After Redesign"
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isGenerating ? 'opacity-40 blur-sm' : 'opacity-100'
              }`}
            />
            
            {/* Label After */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-amber-400 text-zinc-950 text-xs font-bold uppercase tracking-wider shadow-md">
              After: {selectedStyle}
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentTransform.before}
                alt="Before Renovation"
                className="w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-200 text-xs font-semibold uppercase tracking-wider">
                Original Space
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center shadow-xl font-bold border-2 border-zinc-950">
                <ArrowRightLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Range Input Trigger across the card */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* AI Transform Details Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">AI Transformation Highlights</span>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {currentTransform.tags.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-200 flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-amber-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleStyleChange(selectedStyle)}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-2 transition-colors border border-zinc-700"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>Regenerate Concept</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};