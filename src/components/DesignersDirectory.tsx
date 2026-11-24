
import React, { useState } from 'react';
import { Users, Star, Calendar, Clock, MapPin, CheckCircle, X } from 'lucide-react';
import { DESIGNERS } from '../data/sampleData';
import { Designer } from '../types';

export const DesignersDirectory: React.FC = () => {
  const [selectedDesigner, setSelectedDesigner] = useState<Designer | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [bookedSuccess, setBookedSuccess] = useState<boolean>(false);

  const handleBook = () => {
    if (!selectedSlot) return;
    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
      setSelectedDesigner(null);
      setSelectedSlot('');
    }, 2500);
  };

  return (
    <section id="designers" className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>Architect Network</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Meet Our Principal Architects
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Collaborate 1-on-1 with award-winning interior architects. Schedule a private consultation to discuss floor plans and material boards.
            </p>
          </div>
        </div>

        {/* Designers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {DESIGNERS.map((designer) => (
            <div
              key={designer.id}
              className="bg-zinc-900/60 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              {/* Cover Image & Avatar */}
              <div className="relative h-44 bg-zinc-800">
                <img src={designer.coverImage} alt={designer.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                
                <div className="absolute -bottom-6 left-6">
                  <img
                    src={designer.avatar}
                    alt={designer.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-zinc-900 shadow-xl"
                  />
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 pt-9 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-medium text-white">{designer.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{designer.rating}</span>
                      <span className="text-zinc-500">({designer.reviewsCount})</span>
                    </div>
                  </div>

                  <p className="text-xs text-amber-400/90 font-medium">{designer.role}</p>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-2">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{designer.location}</span>
                    <span className="mx-1">•</span>
                    <span>{designer.completedProjects} Projects</span>
                  </div>

                  <p className="text-xs text-zinc-400 mt-3 line-clamp-3 leading-relaxed">{designer.bio}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {designer.specialties.map((spec, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase">Consultation</span>
                    <p className="text-sm font-semibold text-white">${designer.hourlyRate}<span className="text-xs text-zinc-400 font-normal">/hr</span></p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedDesigner(designer);
                      setSelectedSlot(designer.availableSlots[0]);
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Review</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Booking Modal */}
      {selectedDesigner && (
        <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedDesigner(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {bookedSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white font-medium">Consultation Confirmed!</h3>
                <p className="text-xs text-zinc-400">
                  Your design review session with <strong>{selectedDesigner.name}</strong> is scheduled for <strong className="text-amber-300">{selectedSlot}</strong>.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src={selectedDesigner.avatar} alt={selectedDesigner.name} className="w-14 h-14 rounded-2xl object-cover border border-zinc-700" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400">1-on-1 Studio Session</span>
                    <h3 className="font-serif text-xl font-medium text-white">{selectedDesigner.name}</h3>
                    <p className="text-xs text-zinc-400">${selectedDesigner.hourlyRate} / hour consultation</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                    Select Available Time Slot
                  </label>
                  <div className="space-y-2">
                    {selectedDesigner.availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`w-full p-3 rounded-2xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                          selectedSlot === slot
                            ? 'bg-amber-400 border-amber-400 text-zinc-950 font-semibold'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5" />
                          {slot}
                        </span>
                        <span>Confirm</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold shadow-lg shadow-amber-400/20 transition-all"
                >
                  Confirm Design Review Booking
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};