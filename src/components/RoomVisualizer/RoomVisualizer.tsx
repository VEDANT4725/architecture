
import React, { useState } from 'react';
import { Sun, Moon, Sunset, Palette, Layers, Sparkles, Check, RefreshCw, DollarSign, Download, Share2 } from 'lucide-react';
import { MATERIAL_SWATCHES } from '../../data/sampleData';
import { MaterialSwatch } from '../../types';

interface RoomVisualizerProps {
  onSaveToBoard: (item: any) => void;
}

export const RoomVisualizer: React.FC<RoomVisualizerProps> = ({ onSaveToBoard }) => {
  const [selectedRoom, setSelectedRoom] = useState<'Living Room' | 'Kitchen' | 'Master Bedroom'>('Living Room');
  const [lightingMood, setLightingMood] = useState<'Daylight' | 'Golden Hour' | 'Ambient Night'>('Golden Hour');
  
  // Customization state
  const [wallColor, setWallColor] = useState('#ded6ca');
  const [selectedFlooring, setSelectedFlooring] = useState<MaterialSwatch>(MATERIAL_SWATCHES[1]); // Oak
  const [selectedWallFinish, setSelectedWallFinish] = useState<MaterialSwatch>(MATERIAL_SWATCHES[2]); // Plaster
  const [accentMaterial, setAccentMaterial] = useState<MaterialSwatch>(MATERIAL_SWATCHES[0]); // Marble

  const wallColors = [
    { name: 'Warm Parchment', hex: '#ded6ca' },
    { name: 'Limestone Gray', hex: '#cfc9be' },
    { name: 'Kyoto Charcoal', hex: '#2b2a29' },
    { name: 'Muted Terracotta', hex: '#b87c6d' },
    { name: 'Sage Leaf', hex: '#8b9685' }
  ];

  // Images mapping based on room and lighting
  const roomImages = {
    'Living Room': {
      'Daylight': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
      'Golden Hour': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1400',
      'Ambient Night': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400'
    },
    'Kitchen': {
      'Daylight': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1400',
      'Golden Hour': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400',
      'Ambient Night': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1400'
    },
    'Master Bedroom': {
      'Daylight': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1400',
      'Golden Hour': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1400',
      'Ambient Night': 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1400'
    }
  };

  // Calculated sample estimated material cost per sq ft
  const totalCostPerSqFt = selectedFlooring.pricePerSqFt + selectedWallFinish.pricePerSqFt + accentMaterial.pricePerSqFt;

  const handleSaveMoodboard = () => {
    onSaveToBoard({
      id: `custom-${Date.now()}`,
      title: `Custom ${selectedRoom} Setup`,
      room: selectedRoom,
      lighting: lightingMood,
      wallColor,
      flooring: selectedFlooring.name,
      wallFinish: selectedWallFinish.name,
      accent: accentMaterial.name,
      image: roomImages[selectedRoom][lightingMood],
      estPricePerSqFt: totalCostPerSqFt
    });
  };

  return (
    <section id="visualizer" className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Real-Time Studio Canvas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Interactive Room Stager & Material Configurator
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Select room templates, adjust ambient lighting, match wall wash finishes, and test custom high-end swatches live.
            </p>
          </div>

          {/* Quick Room Type Selectors */}
          <div className="flex items-center gap-1.5 p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl">
            {(['Living Room', 'Kitchen', 'Master Bedroom'] as const).map((room) => (
              <button
                key={room}
                onClick={() => setSelectedRoom(room)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedRoom === room
                    ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {room}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Visualizer Workspace */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Display Stage */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 h-[420px] sm:h-[520px] group">
              
              {/* Main Room Image with Smooth Lighting Transition */}
              <img
                src={roomImages[selectedRoom][lightingMood]}
                alt={`${selectedRoom} - ${lightingMood}`}
                className="w-full h-full object-cover transition-all duration-700"
              />

              {/* Dynamic Tint Overlay to simulate wall wash color choice */}
              <div 
                className="absolute inset-0 pointer-events-none mix-blend-color opacity-25 transition-colors duration-500"
                style={{ backgroundColor: wallColor }}
              />

              {/* Lighting Mood Quick Switch Overlay Pill */}
              <div className="absolute top-4 left-4 backdrop-blur-md bg-zinc-950/75 border border-zinc-800 p-1.5 rounded-2xl flex items-center gap-1">
                <button
                  onClick={() => setLightingMood('Daylight')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                    lightingMood === 'Daylight' ? 'bg-amber-400 text-zinc-950 font-semibold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Daylight</span>
                </button>
                <button
                  onClick={() => setLightingMood('Golden Hour')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                    lightingMood === 'Golden Hour' ? 'bg-amber-400 text-zinc-950 font-semibold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <Sunset className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Golden Hour</span>
                </button>
                <button
                  onClick={() => setLightingMood('Ambient Night')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                    lightingMood === 'Ambient Night' ? 'bg-amber-400 text-zinc-950 font-semibold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Night Mood</span>
                </button>
              </div>

              {/* Material Badges Bar on Image */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-zinc-950/85 border border-zinc-800 p-3 sm:p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-800 flex-shrink-0">
                    <img src={selectedFlooring.textureUrl} alt={selectedFlooring.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider block">Selected Material Pair</span>
                    <p className="text-xs font-medium text-white">{selectedFlooring.name} + {accentMaterial.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400">Est. Base Finish:</span>
                  <span className="text-sm font-semibold text-amber-300">${totalCostPerSqFt}/sq.ft</span>
                </div>
              </div>
            </div>

            {/* Stage Footer Controls */}
            <div className="flex items-center justify-between px-2">
              <span className="text-xs text-zinc-400">
                Mode: <strong className="text-zinc-200">{selectedRoom}</strong> ({lightingMood})
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveMoodboard}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-amber-400/10"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Save Config to Board</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Customization Controls Sidebar */}
          <div className="lg:col-span-4 space-y-6 bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800">
            <div>
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-amber-400" />
                <span>Wall Wash Color</span>
              </h3>
              <div className="flex items-center gap-3">
                {wallColors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setWallColor(c.hex)}
                    className={`w-9 h-9 rounded-full border-2 transition-transform ${
                      wallColor === c.hex ? 'border-amber-400 scale-110 shadow-lg' : 'border-zinc-700 hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Flooring Selection */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 block">
                Flooring Specification
              </label>
              <div className="space-y-2">
                {MATERIAL_SWATCHES.filter(m => m.category === 'Flooring' || m.category === 'Cabinetry').map((mat) => (
                  <div
                    key={mat.id}
                    onClick={() => setSelectedFlooring(mat)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedFlooring.id === mat.id
                        ? 'bg-amber-500/10 border-amber-500/40 text-white'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={mat.textureUrl} alt={mat.name} className="w-10 h-10 rounded-xl object-cover border border-zinc-700" />
                      <div>
                        <p className="text-xs font-medium text-zinc-100">{mat.name}</p>
                        <p className="text-[10px] text-zinc-400">${mat.pricePerSqFt} / sq.ft</p>
                      </div>
                    </div>
                    {selectedFlooring.id === mat.id && (
                      <div className="w-6 h-6 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Metal / Stone Specification */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 block">
                Accent Counter & Detail Stone
              </label>
              <div className="space-y-2">
                {MATERIAL_SWATCHES.filter(m => m.category === 'Stone' || m.category === 'Cabinetry').map((mat) => (
                  <div
                    key={mat.id}
                    onClick={() => setAccentMaterial(mat)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      accentMaterial.id === mat.id
                        ? 'bg-amber-500/10 border-amber-500/40 text-white'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={mat.textureUrl} alt={mat.name} className="w-10 h-10 rounded-xl object-cover border border-zinc-700" />
                      <div>
                        <p className="text-xs font-medium text-zinc-100">{mat.name}</p>
                        <p className="text-[10px] text-zinc-400">${mat.pricePerSqFt} / sq.ft</p>
                      </div>
                    </div>
                    {accentMaterial.id === mat.id && (
                      <div className="w-6 h-6 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};