
import React from 'react';
import { X, Trash2, Download, Share2, Layers, ArrowRight } from 'lucide-react';

interface SavedMoodboardsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: any[];
  onRemoveItem: (id: string) => void;
}

export const SavedMoodboardsDrawer: React.FC<SavedMoodboardsDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex justify-end">
      <div className="bg-zinc-900 border-l border-zinc-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl animate-in slide-in-from-right duration-200">
        
        {/* Top Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-white font-serif text-lg">
            <Layers className="w-5 h-5 text-amber-400" />
            <span>Saved Moodboards & Specs</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Saved List Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {savedItems.length === 0 ? (
            <div className="text-center py-20 text-zinc-500 text-xs">
              <p>No saved items yet.</p>
              <p className="mt-1">Save custom 3D room setups, material swatches, or hotspot furniture specs!</p>
            </div>
          ) : (
            savedItems.map((item, idx) => (
              <div
                key={item.id || idx}
                className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 flex items-center justify-between gap-3"
              >
                {item.image || item.textureUrl ? (
                  <img src={item.image || item.textureUrl} alt={item.title || item.name} className="w-14 h-14 rounded-xl object-cover border border-zinc-800" />
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs font-bold">
                    SPEC
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">{item.title || item.name}</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">
                    {item.room ? `${item.room} (${item.lighting})` : item.category || item.brand || 'Custom Material'}
                  </p>
                  {item.price && <p className="text-xs font-semibold text-amber-400">${item.price}</p>}
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-zinc-900 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Export */}
        <div className="pt-4 border-t border-zinc-800 space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Saved Specifications:</span>
            <strong className="text-white">{savedItems.length} items</strong>
          </div>

          <button
            onClick={() => alert('Exporting your high-resolution moodboard specification PDF...')}
            className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Moodboard PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};