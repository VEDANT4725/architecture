
import React, { useState } from 'react';
import { Calculator, DollarSign, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const CostEstimator: React.FC = () => {
  const [areaSqFt, setAreaSqFt] = useState<number>(1800);
  const [finishTier, setFinishTier] = useState<'Standard' | 'Executive Luxury' | 'Bespoke Ultra'>('Executive Luxury');
  const [roomCount, setRoomCount] = useState<number>(3);
  const [includeLighting, setIncludeLighting] = useState<boolean>(true);
  const [includeSmartHome, setIncludeSmartHome] = useState<boolean>(true);

  // Rate tiers
  const tierRates = {
    'Standard': 85,
    'Executive Luxury': 160,
    'Bespoke Ultra': 280
  };

  const baseMaterialCost = areaSqFt * tierRates[finishTier];
  const lightingCost = includeLighting ? areaSqFt * 18 : 0;
  const smartHomeCost = includeSmartHome ? 12000 : 0;
  const totalEstimate = baseMaterialCost + lightingCost + smartHomeCost;

  return (
    <section id="estimator" className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Investment Calculator</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Instant Renovation Budget Estimator
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Plan your architectural project with transparent cost estimates. Adjust square footage, select material finish tiers, and calculate real-time budgets.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Includes professional architectural supervision & contractor management</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>10-year structural warranty & certified sustainable sourcing</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form & Live Result */}
          <div className="lg:col-span-7 bg-zinc-900/60 p-6 sm:p-8 rounded-3xl border border-zinc-800 space-y-6">
            
            {/* Square Footage Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-300">
                <span className="font-medium">Total Area (Square Feet)</span>
                <span className="font-semibold text-amber-400">{areaSqFt.toLocaleString()} sq.ft</span>
              </div>
              <input
                type="range"
                min="500"
                max="8000"
                step="100"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full accent-amber-400 bg-zinc-800 rounded-lg h-2 cursor-pointer"
              />
            </div>

            {/* Finish Tier Selector */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300 block">Finish Tier & Craftsmanship</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Standard', 'Executive Luxury', 'Bespoke Ultra'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setFinishTier(tier)}
                    className={`py-3 px-2 rounded-2xl border text-center transition-all ${
                      finishTier === tier
                        ? 'bg-amber-400 border-amber-400 text-zinc-950 font-semibold shadow-md'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs block font-medium">{tier}</span>
                    <span className="text-[10px] opacity-80">${tierRates[tier]}/sq.ft</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons Checkboxes */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <label className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 cursor-pointer hover:border-zinc-700">
                <input
                  type="checkbox"
                  checked={includeLighting}
                  onChange={(e) => setIncludeLighting(e.target.checked)}
                  className="w-4 h-4 rounded accent-amber-400"
                />
                <span className="text-xs text-zinc-200">Architectural Lighting Package</span>
              </label>

              <label className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 cursor-pointer hover:border-zinc-700">
                <input
                  type="checkbox"
                  checked={includeSmartHome}
                  onChange={(e) => setIncludeSmartHome(e.target.checked)}
                  className="w-4 h-4 rounded accent-amber-400"
                />
                <span className="text-xs text-zinc-200">Smart Home Automation</span>
              </label>
            </div>

            {/* Result Box */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest block">Estimated Total Investment</span>
                <p className="font-serif text-3xl font-bold text-white mt-1">
                  ${totalEstimate.toLocaleString()}
                </p>
                <span className="text-[11px] text-zinc-500">Includes materials, design fee & turn-key build</span>
              </div>

              <a
                href="#designers"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <span>Book Architect Review</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};