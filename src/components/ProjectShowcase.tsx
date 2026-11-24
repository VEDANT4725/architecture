
import React, { useState } from 'react';
import { Compass, Info, Plus, X, Heart, ExternalLink, MapPin } from 'lucide-react';
import { DESIGN_PROJECTS } from '../data/sampleData';
import { DesignProject, Hotspot, DesignStyle } from '../types';

interface ProjectShowcaseProps {
  onSaveHotspot: (item: any) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSaveHotspot }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<DesignProject | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const filters = ['All', 'Japandi', 'Warm Minimalist', 'Biophilic Luxury', 'Parisian Elegance'];

  const filteredProjects = activeFilter === 'All' 
    ? DESIGN_PROJECTS 
    : DESIGN_PROJECTS.filter(p => p.style === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Featured Residences & Interactive Hotspots
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Click interactive pins on high-resolution project captures to discover custom furniture specifications and pricing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/60 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image & Hotspots Container */}
              <div className="relative h-[340px] overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                {/* Hotspot Pins */}
                {project.hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => {
                      setActiveProject(project);
                      setSelectedHotspot(h);
                    }}
                    className="absolute w-7 h-7 rounded-full bg-amber-400/90 text-zinc-950 flex items-center justify-center font-bold text-xs shadow-lg hover:scale-125 transition-all transform -translate-x-1/2 -translate-y-1/2 group/pin"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    title={h.title}
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span className="absolute left-full ml-2 px-2.5 py-1 rounded-lg bg-zinc-950/90 text-white text-[10px] whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none border border-zinc-800">
                      {h.title}
                    </span>
                  </button>
                ))}

                {/* Tag pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/75 backdrop-blur-md border border-zinc-800 text-amber-400 text-xs font-semibold">
                  {project.style}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {project.location}
                    </span>
                    <span>{project.areaSqFt.toLocaleString()} sq.ft</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-medium group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src={project.designerAvatar} alt={project.designerName} className="w-7 h-7 rounded-full object-cover border border-zinc-700" />
                    <span className="text-xs text-zinc-300 font-medium">{project.designerName}</span>
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail & Hotspot Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-8 animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => {
                setActiveProject(null);
                setSelectedHotspot(null);
              }}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Image Column with Hotspots */}
              <div className="lg:col-span-7 relative bg-zinc-950 min-h-[360px] lg:min-h-[500px]">
                <img
                  src={activeProject.heroImage}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />

                {activeProject.hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHotspot(h)}
                    className={`absolute w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-xl transition-transform ${
                      selectedHotspot?.id === h.id ? 'bg-white text-zinc-950 scale-125 ring-4 ring-amber-400' : 'bg-amber-400 text-zinc-950 hover:scale-110'
                    }`}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                  </button>
                ))}
              </div>

              {/* Sidebar Content Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">{activeProject.style} Residence</span>
                  <h3 className="font-serif text-2xl font-medium text-white mt-1">{activeProject.title}</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{activeProject.description}</p>

                  <div className="mt-4 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                    <span>Est. Investment:</span>
                    <strong className="text-amber-400">{activeProject.budgetRange}</strong>
                  </div>
                </div>

                {/* Hotspot Spec Detail Panel */}
                {selectedHotspot ? (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-amber-400">Selected Hotspot Item</span>
                        <h4 className="text-sm font-semibold text-white mt-0.5">{selectedHotspot.title}</h4>
                        <p className="text-[11px] text-zinc-400">{selectedHotspot.brand}</p>
                      </div>
                      <span className="text-sm font-serif font-semibold text-amber-300">${selectedHotspot.price}</span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed">{selectedHotspot.description}</p>

                    <button
                      onClick={() => onSaveHotspot(selectedHotspot)}
                      className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 fill-zinc-950" />
                      <span>Save Spec to Moodboard</span>
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-center text-xs text-zinc-500">
                    Click any yellow pin on the image to preview exact furniture specs and pricing.
                  </div>
                )}

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                  <span>Architect: <strong>{activeProject.designerName}</strong></span>
                  <span>{activeProject.location}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};